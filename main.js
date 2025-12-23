// --- KONFIGURASI ---
const CONTRACT_ADDRESS = "0xa5BD5a7cb3E01A7206DdfA725134040aBa17700C"; // <-- ISI INI SETELAH DEPLOY
const RPC_URL = "https://sepolia.base.org";
const CHAIN_ID = 84532;
const HEX_CHAIN_ID = "0x14a34";
const SESSION_DURATION = 90 * 24 * 60 * 60 * 1000; // 3 Bulan

// ABI SINGKAT (Sesuaikan dengan fitur yang dipakai di frontend)
const CONTRACT_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"string","name":"action","type":"string"}],"name":"NewInteraction","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"postId","type":"uint256"},{"indexed":true,"internalType":"address","name":"author","type":"address"}],"name":"NewPost","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"string","name":"newName","type":"string"},{"indexed":false,"internalType":"bool","name":"isPaid","type":"bool"}],"name":"NicknameChanged","type":"event"},{"inputs":[],"name":"MAX_FREE_CHANGES","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"string","name":"_text","type":"string"},{"internalType":"string","name":"_imageURI","type":"string"}],"name":"addComment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newNickname","type":"string"}],"name":"changeNickname","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"_imageURI","type":"string"},{"internalType":"string","name":"_caption","type":"string"}],"name":"createPost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"dislikePost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postIndex","type":"uint256"},{"internalType":"uint256","name":"_commentIndex","type":"uint256"},{"internalType":"string","name":"_newText","type":"string"}],"name":"editComment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllPosts","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"author","type":"address"},{"internalType":"string","name":"imageURI","type":"string"},{"internalType":"string","name":"caption","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"likeCount","type":"uint256"},{"internalType":"uint256","name":"dislikeCount","type":"uint256"},{"internalType":"uint256","name":"commentCount","type":"uint256"},{"internalType":"uint256","name":"totalRatingScore","type":"uint256"},{"internalType":"uint256","name":"ratingCount","type":"uint256"}],"internalType":"struct PutramasOfficial.Post[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postIndex","type":"uint256"}],"name":"getComments","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"commenter","type":"address"},{"internalType":"string","name":"text","type":"string"},{"internalType":"string","name":"imageURI","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"internalType":"struct PutramasOfficial.Comment[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMyNotifications","outputs":[{"components":[{"internalType":"address","name":"actor","type":"address"},{"internalType":"string","name":"actionType","type":"string"},{"internalType":"uint256","name":"postId","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bool","name":"isRead","type":"bool"}],"internalType":"struct PutramasOfficial.Notification[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getProfile","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"nickname","type":"string"},{"internalType":"string","name":"fotoProfil","type":"string"},{"internalType":"string","name":"bio","type":"string"},{"internalType":"string","name":"lokasi","type":"string"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"bool","name":"isRegistered","type":"bool"},{"internalType":"uint256","name":"nameChangeCount","type":"uint256"}],"internalType":"struct PutramasOfficial.UserProfile","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getProfileById","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"nickname","type":"string"},{"internalType":"string","name":"fotoProfil","type":"string"},{"internalType":"string","name":"bio","type":"string"},{"internalType":"string","name":"lokasi","type":"string"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"bool","name":"isRegistered","type":"bool"},{"internalType":"uint256","name":"nameChangeCount","type":"uint256"}],"internalType":"struct PutramasOfficial.UserProfile","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserPosts","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"author","type":"address"},{"internalType":"string","name":"imageURI","type":"string"},{"internalType":"string","name":"caption","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"likeCount","type":"uint256"},{"internalType":"uint256","name":"dislikeCount","type":"uint256"},{"internalType":"uint256","name":"commentCount","type":"uint256"},{"internalType":"uint256","name":"totalRatingScore","type":"uint256"},{"internalType":"uint256","name":"ratingCount","type":"uint256"}],"internalType":"struct PutramasOfficial.Post[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"hasDisliked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"hasLiked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"idToWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"likePost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"nicknamePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"postComments","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"commenter","type":"address"},{"internalType":"string","name":"text","type":"string"},{"internalType":"string","name":"imageURI","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"posts","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"author","type":"address"},{"internalType":"string","name":"imageURI","type":"string"},{"internalType":"string","name":"caption","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"likeCount","type":"uint256"},{"internalType":"uint256","name":"dislikeCount","type":"uint256"},{"internalType":"uint256","name":"commentCount","type":"uint256"},{"internalType":"uint256","name":"totalRatingScore","type":"uint256"},{"internalType":"uint256","name":"ratingCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint8","name":"_bintang","type":"uint8"}],"name":"ratePost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_nickname","type":"string"},{"internalType":"string","name":"_foto","type":"string"},{"internalType":"string","name":"_bio","type":"string"},{"internalType":"string","name":"_lokasi","type":"string"}],"name":"registerProfile","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newPrice","type":"uint256"}],"name":"setNicknamePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_foto","type":"string"},{"internalType":"string","name":"_bio","type":"string"},{"internalType":"string","name":"_lokasi","type":"string"}],"name":"updateBioAndPhoto","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_nickname","type":"string"},{"internalType":"string","name":"_foto","type":"string"},{"internalType":"string","name":"_bio","type":"string"},{"internalType":"string","name":"_lokasi","type":"string"}],"name":"updateProfile","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"userCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userNotifications","outputs":[{"internalType":"address","name":"actor","type":"address"},{"internalType":"string","name":"actionType","type":"string"},{"internalType":"uint256","name":"postId","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bool","name":"isRead","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userRating","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"nickname","type":"string"},{"internalType":"string","name":"fotoProfil","type":"string"},{"internalType":"string","name":"bio","type":"string"},{"internalType":"string","name":"lokasi","type":"string"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"bool","name":"isRegistered","type":"bool"},{"internalType":"uint256","name":"nameChangeCount","type":"uint256"}],"stateMutability":"view","type":"function"}];

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

// --- LOGIKA BADGE NOTIFIKASI (LOCAL STORAGE) ---

// Panggil ini di window.onload atau initApp
async function updateNotifBadge() {
    if(!contract || !userAddress) return;

    try {
        // 1. Ambil semua notifikasi dari Blockchain
        const notifs = await contract.getMyNotifications();
        
        // 2. Ambil waktu terakhir user buka halaman notif dari LocalStorage
        // Default 0 jika belum pernah buka
        const lastCheck = localStorage.getItem("lastNotifCheck") || 0;

        // 3. Hitung notifikasi yang timestamp-nya LEBIH BARU dari lastCheck
        // Solidity timestamp dalam detik, JS Date.now() dalam ms. Kita pakai detik.
        const unreadCount = notifs.filter(n => n.timestamp > lastCheck).length;

        // 4. Update UI Badge
        const badges = document.querySelectorAll('.nav-badge');
        badges.forEach(badge => {
            if (unreadCount > 0) {
                badge.style.display = 'flex';
                badge.innerText = unreadCount > 99 ? '99+' : unreadCount;
            } else {
                badge.style.display = 'none';
            }
        });

    } catch (e) {
        console.log("Badge error (Silent):", e);
    }
}

// Jalankan otomatis setiap 10 detik agar realtime tanpa refresh
setInterval(updateNotifBadge, 10000);
