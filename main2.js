const CONTRACT_ADDRESS = "0x0753d3a9f7cb7eD9De233a319d4AD9fF60A434B2"; // <-- ISI INI SETELAH DEPLOY
const RPC_URL = "https://sepolia.base.org";
const CHAIN_ID = 84532;
const HEX_CHAIN_ID = "0x14a34";
const SESSION_DURATION = 90 * 24 * 60 * 60 * 1000; // 3 Bulan
const CONTRACT_ABI = BIARKAN SAJA KOSONG

let provider, signer, userAddress, contract;
let pendingNftData = null;

// --- WALLET LOGIC ---
async function initApp() {
checkSession();
setupWalletListeners(); // 👈 TAMBAHKAN INI
}

function setupWalletListeners() {
if (!window.ethereum) return;

window.ethereum.on("accountsChanged", async (accounts) => {  
    console.log("Account berubah:", accounts);  

    localStorage.removeItem("putramas_session");  
    location.reload();  
});  

window.ethereum.on("chainChanged", () => {  
    console.log("Network berubah");  
    location.reload();  
});

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
localStorage.removeItem("putramas_session");

try {  
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;  
    const uniqueId = "PTS-" + Date.now();  
    const msg = `Selamat Datang di Putramas Social\n\nUser: ${address}\nTime: ${timezone}\nID: ${uniqueId}\n\n`;  
      
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

async function checkSession() {
console.log("🔄 Cek Sesi...");

const sessionRaw = localStorage.getItem("putramas_session");  
  
// 1. Jika kosong, stop.  
if (!sessionRaw) {  
    console.log("⚪ Belum ada sesi.");   
    return false;  
}  

let session;  

// --- PERBAIKAN UTAMA: TRY-CATCH JSON PARSE ---  
try {  
    // Kita coba baca datanya. Jika datanya "sampah", dia akan loncat ke 'catch'  
    session = JSON.parse(sessionRaw);  
} catch (e) {  
    console.error("⚠️ DATA SESI KORUP! Menghapus data sampah...");  
    localStorage.removeItem("putramas_session"); // HAPUS DATA RUSAK  
    location.reload(); // Refresh halaman agar bersih  
    return false;  
}  

// 2. Cek Metamask  
if (!window.ethereum) {  
    console.error("❌ Metamask tidak terdeteksi.");  
    return false;  
}  

try {  
    // Cek Kadaluarsa  
    if (Date.now() > session.expiry) {  
        console.warn("⚠️ Sesi habis.");  
        localStorage.removeItem("putramas_session");  
        return false;  
    }  

    // KONEKSI WALLET  
    provider = new ethers.providers.Web3Provider(window.ethereum);  
      
    // Silent request untuk memastikan object signer siap  
    await provider.send("eth_requestAccounts", []);  
      
    signer = provider.getSigner();  
    const activeAddress = await signer.getAddress();  

    // Validasi Akun  
    if (activeAddress.toLowerCase() !== session.address.toLowerCase()) {  
        console.warn("⚠️ Akun beda. Logout.");  
        localStorage.removeItem("putramas_session");  
        location.reload();  
        return false;  
    }  

    userAddress = activeAddress;  
      
    // --- INISIALISASI KONTRAK ---  
    // Ini bagian paling krusial  
    contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);  
      
    console.log("✅ KONEKSI PULIH! User:", userAddress);  

    // Load data feed  
    if (typeof loadFeed === "function") loadFeed();  
      
    return true;  

} catch (err) {  
    console.error("🔥 Error Koneksi:", err);  
    return false;  
}

}

function disconnect() {
localStorage.removeItem("putramas_session");
window.location.href = "index.html";
}
