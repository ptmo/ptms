// --- KONFIGURASI ---
const CONTRACT_ADDRESS = "ALAMAT_KONTRAK_ANDA_DISINI"; // <-- ISI INI SETELAH DEPLOY
const RPC_URL = "https://sepolia.base.org";
const CHAIN_ID = 84532;
const HEX_CHAIN_ID = "0x14a34";
const SESSION_DURATION = 90 * 24 * 60 * 60 * 1000; // 3 Bulan

// ABI SINGKAT (Sesuaikan dengan fitur yang dipakai di frontend)
const CONTRACT_ABI = [
    "function registerProfile(string _nickname, string _foto, string _bio, string _lokasi) public",
    "function getProfile(address _user) public view returns (tuple(uint256 id, string nickname, string fotoProfil, string bio, string lokasi, address wallet, bool isRegistered, uint256 nameChangeCount))",
    "function getAllPosts() public view returns (tuple(uint256 id, address author, string imageURI, string caption, uint256 timestamp, uint256 likeCount, uint256 dislikeCount, uint256 commentCount, uint256 totalRatingScore, uint256 ratingCount)[])",
    "function createPost(string _imageURI, string _caption) public",
    "function likePost(uint256 _index) public",
    "function users(address) public view returns (uint256, string, string, string, string, address, bool, uint256)"
];

let provider, signer, userAddress, contract;

// --- WALLET LOGIC ---
async function initApp() {
    checkSession();
}

async function connectWallet() {
    if (!window.ethereum) return showToast("Metamask tidak ditemukan!", "error");
    
    try {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        
        // Cek Network
        const { chainId } = await provider.getNetwork();
        if (chainId !== CHAIN_ID) await switchNetwork();

        signer = provider.getSigner();
        userAddress = await signer.getAddress();
        contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

        // Cek Login/Register
        await handleAuthFlow(userAddress);

    } catch (err) {
        console.error(err);
        showToast(err.message, "error");
    }
}

async function handleAuthFlow(address) {
    // 1. Cek di Blockchain apakah user sudah register?
    const profile = await contract.users(address);
    
    // profile[6] adalah isRegistered (sesuai urutan struct di return users)
    if (profile[6] === true) {
        // SUDAH REGISTER -> Masuk Home
        saveSession(address);
        if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
            window.location.href = "home.html";
        }
    } else {
        // BELUM REGISTER -> Ke Halaman Register
        if (!window.location.pathname.includes("register.html")) {
            window.location.href = "register.html";
        }
    }
}

async function switchNetwork() {
    try {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: HEX_CHAIN_ID }],
        });
    } catch (error) {
        if (error.code === 4902) {
            await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                    chainId: HEX_CHAIN_ID,
                    chainName: 'Base Sepolia',
                    rpcUrls: [RPC_URL],
                    nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
                    blockExplorerUrls: ['https://sepolia.basescan.org']
                }],
            });
        }
    }
}

// --- SESSION & SIGNATURE ---
async function saveSession(address) {
    // Cek jika sesi sudah ada dan valid
    if(localStorage.getItem("putramas_session")) return;

    try {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const uniqueId = "PTS-" + Date.now();
        const msg = `Selamat Datang di Putramas Social\n\nUser: ${address}\nTime: ${timezone}\nID: ${uniqueId}\n\nSign untuk login 3 bulan.`;
        
        await signer.signMessage(msg); // Minta Tanda Tangan
        
        const session = {
            address,
            expiry: Date.now() + SESSION_DURATION
        };
        localStorage.setItem("putramas_session", JSON.stringify(session));
        showToast("Login Berhasil!", "success");
    } catch(e) {
        showToast("Signature ditolak, login gagal.", "error");
    }
}

function checkSession() {
    const sessionRaw = localStorage.getItem("putramas_session");
    if (!sessionRaw) return;

    const session = JSON.parse(sessionRaw);
    if (Date.now() > session.expiry) {
        localStorage.removeItem("putramas_session");
        return;
    }
    
    // Auto Reconnect Provider jika sesi valid
    if(window.ethereum) {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();
        userAddress = session.address;
        contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
        // Update UI jika ada di halaman home
        if(typeof loadFeed === 'function') loadFeed();
    }
}

function disconnect() {
    localStorage.removeItem("putramas_session");
    window.location.href = "index.html";
}

// --- UTILS ---
function showToast(msg, type="info") {
    const t = document.getElementById("toast");
    t.innerText = msg;
    t.className = "show";
    t.style.background = type === "error" ? "#e74c3c" : "#333";
    setTimeout(() => t.className = t.className.replace("show", ""), 3000);
          }
