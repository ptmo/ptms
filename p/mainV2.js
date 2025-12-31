// ==========================================
// 1. KONFIGURASI TERPUSAT (SOLID)
// ==========================================
const CONFIG = {
    ADDRESS: "0x0753d3a9f7cb7eD9De233a319d4AD9fF60A434B2", 
    RPC_URL: "https://sepolia.base.org",
    CHAIN_ID: 84532,
    HEX_CHAIN_ID: "0x14a34",
    SESSION_DURATION: 90 * 24 * 60 * 60 * 1000 // 3 Bulan
};

// ABI (Biarkan Kosong Sesuai Permintaan)
const CONTRACT_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"follower","type":"address"},{"indexed":true,"internalType":"address","name":"followed","type":"address"}],"name":"Followed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"string","name":"action","type":"string"}],"name":"NewInteraction","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"postId","type":"uint256"},{"indexed":true,"internalType":"address","name":"author","type":"address"}],"name":"NewPost","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"postId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nftId","type":"uint256"},{"indexed":false,"internalType":"address","name":"author","type":"address"}],"name":"NewPost","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"string","name":"newName","type":"string"},{"indexed":false,"internalType":"bool","name":"isPaid","type":"bool"}],"name":"NicknameChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"postId","type":"uint256"}],"name":"Sawer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"follower","type":"address"},{"indexed":true,"internalType":"address","name":"unfollowed","type":"address"}],"name":"Unfollowed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"blocker","type":"address"},{"indexed":true,"internalType":"address","name":"blocked","type":"address"}],"name":"UserBlocked","type":"event"},{"inputs":[],"name":"MAX_FREE_CHANGES","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"string","name":"_text","type":"string"},{"internalType":"string","name":"_imageURI","type":"string"}],"name":"addComment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_target","type":"address"}],"name":"blockUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newNickname","type":"string"}],"name":"changeNickname","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"_imgURI","type":"string"},{"internalType":"string","name":"_metaURI","type":"string"},{"internalType":"string","name":"_caption","type":"string"}],"name":"createPost","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"dislikePost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postIndex","type":"uint256"},{"internalType":"uint256","name":"_commentIndex","type":"uint256"},{"internalType":"string","name":"_newText","type":"string"}],"name":"editComment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdrawETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_target","type":"address"}],"name":"followUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"followerList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"followingList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllPosts","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"nftId","type":"uint256"},{"internalType":"address","name":"author","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"},{"internalType":"string","name":"imageURI","type":"string"},{"internalType":"string","name":"caption","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"likeCount","type":"uint256"},{"internalType":"uint256","name":"dislikeCount","type":"uint256"},{"internalType":"uint256","name":"commentCount","type":"uint256"},{"internalType":"uint256","name":"totalRatingScore","type":"uint256"},{"internalType":"uint256","name":"ratingCount","type":"uint256"}],"internalType":"struct PutramasOfficialWayangNusantara.Post[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postIndex","type":"uint256"}],"name":"getComments","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"commenter","type":"address"},{"internalType":"string","name":"text","type":"string"},{"internalType":"string","name":"imageURI","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"internalType":"struct PutramasOfficialWayangNusantara.Comment[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getFollowCounts","outputs":[{"internalType":"uint256","name":"followersCount","type":"uint256"},{"internalType":"uint256","name":"followingCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMyFeed","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"nftId","type":"uint256"},{"internalType":"address","name":"author","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"},{"internalType":"string","name":"imageURI","type":"string"},{"internalType":"string","name":"caption","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"likeCount","type":"uint256"},{"internalType":"uint256","name":"dislikeCount","type":"uint256"},{"internalType":"uint256","name":"commentCount","type":"uint256"},{"internalType":"uint256","name":"totalRatingScore","type":"uint256"},{"internalType":"uint256","name":"ratingCount","type":"uint256"}],"internalType":"struct PutramasOfficialWayangNusantara.Post[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMyNotifications","outputs":[{"components":[{"internalType":"address","name":"actor","type":"address"},{"internalType":"string","name":"actionType","type":"string"},{"internalType":"uint256","name":"postId","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bool","name":"isRead","type":"bool"}],"internalType":"struct PutramasOfficialWayangNusantara.Notification[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getProfile","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"nickname","type":"string"},{"internalType":"string","name":"fotoProfil","type":"string"},{"internalType":"string","name":"bio","type":"string"},{"internalType":"string","name":"lokasi","type":"string"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"bool","name":"isRegistered","type":"bool"},{"internalType":"uint256","name":"nameChangeCount","type":"uint256"}],"internalType":"struct PutramasOfficialWayangNusantara.UserProfile","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getProfileById","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"nickname","type":"string"},{"internalType":"string","name":"fotoProfil","type":"string"},{"internalType":"string","name":"bio","type":"string"},{"internalType":"string","name":"lokasi","type":"string"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"bool","name":"isRegistered","type":"bool"},{"internalType":"uint256","name":"nameChangeCount","type":"uint256"}],"internalType":"struct PutramasOfficialWayangNusantara.UserProfile","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserPosts","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"nftId","type":"uint256"},{"internalType":"address","name":"author","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"},{"internalType":"string","name":"imageURI","type":"string"},{"internalType":"string","name":"caption","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"likeCount","type":"uint256"},{"internalType":"uint256","name":"dislikeCount","type":"uint256"},{"internalType":"uint256","name":"commentCount","type":"uint256"},{"internalType":"uint256","name":"totalRatingScore","type":"uint256"},{"internalType":"uint256","name":"ratingCount","type":"uint256"}],"internalType":"struct PutramasOfficialWayangNusantara.Post[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"hasBlocked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"hasDisliked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"hasLiked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"idToWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ownerAddr","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"isFollowing","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"likePost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nicknamePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"postComments","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"commenter","type":"address"},{"internalType":"string","name":"text","type":"string"},{"internalType":"string","name":"imageURI","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"posts","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"nftId","type":"uint256"},{"internalType":"address","name":"author","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"},{"internalType":"string","name":"imageURI","type":"string"},{"internalType":"string","name":"caption","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"likeCount","type":"uint256"},{"internalType":"uint256","name":"dislikeCount","type":"uint256"},{"internalType":"uint256","name":"commentCount","type":"uint256"},{"internalType":"uint256","name":"totalRatingScore","type":"uint256"},{"internalType":"uint256","name":"ratingCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint8","name":"_bintang","type":"uint8"}],"name":"ratePost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_nickname","type":"string"},{"internalType":"string","name":"_foto","type":"string"},{"internalType":"string","name":"_bio","type":"string"},{"internalType":"string","name":"_lokasi","type":"string"}],"name":"registerProfile","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"sawerPost","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newPrice","type":"uint256"}],"name":"setNicknamePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_target","type":"address"}],"name":"unfollowUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_foto","type":"string"},{"internalType":"string","name":"_bio","type":"string"},{"internalType":"string","name":"_lokasi","type":"string"}],"name":"updateBioAndPhoto","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_nickname","type":"string"},{"internalType":"string","name":"_foto","type":"string"},{"internalType":"string","name":"_bio","type":"string"},{"internalType":"string","name":"_lokasi","type":"string"}],"name":"updateProfile","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"userCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userNotifications","outputs":[{"internalType":"address","name":"actor","type":"address"},{"internalType":"string","name":"actionType","type":"string"},{"internalType":"uint256","name":"postId","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bool","name":"isRead","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userRating","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"nickname","type":"string"},{"internalType":"string","name":"fotoProfil","type":"string"},{"internalType":"string","name":"bio","type":"string"},{"internalType":"string","name":"lokasi","type":"string"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"bool","name":"isRegistered","type":"bool"},{"internalType":"uint256","name":"nameChangeCount","type":"uint256"}],"stateMutability":"view","type":"function"}]; 

// Global State (Agar mudah didebug)
let state = {
    provider: null,
    signer: null,
    userAddress: null,
    contract: null
};
let pendingNftData = null;
// ==========================================
// 2. INISIALISASI & LISTENER
// ==========================================
// Tambahkan ini di atas, sebelum initApp()
async function runPageSpecificLogic() {
    const path = window.location.pathname;
    const params = new URLSearchParams(window.location.search);

    console.log("📂 Routing ke:", path);

    // A. LOGIKA PROFILE (untuk profile.html)
    if (path.includes("profile.html")) {
        // Cek apakah lihat profil sendiri atau orang lain
        const targetAddr = params.get('addr') || state.userAddress;
        if (typeof loadProfile === "function") await loadProfile(targetAddr);
    } 
    // B. LOGIKA RESULT (PENCARIAN, untuk result.html)
    else if (path.includes("result.html")) {
        const query = params.get('q');
        if (typeof performSearch === "function" && query) await performSearch(query);
        else if (typeof loadResults === "function") await loadResults();
    }
    // C. LOGIKA NOTIFICATIONS (untuk notifications.html)
    else if (path.includes("notifications.html")) {
        if (typeof loadNotifications === "function") await loadNotifications();
    }
    // D. LOGIKA HOME (DEFAULT, untuk home.html atau root)
    else if (path.includes("home.html") || path === "/") {
        if (typeof loadFeed === "function") await loadFeed();
    }

    // Update Global UI (Badge notifikasi, dll.)
    if (typeof updateNotifBadge === "function") updateNotifBadge();
}

// Kemudian, initApp tetap seperti yang Anda miliki
async function initApp() {
    console.log("🚀 Memulai Aplikasi...");

    // Pasang telinga (listener) dulu sebelum melakukan apa-apa
    setupWalletListeners();

    // Coba pulihkan sesi secara diam-diam
    const sessionActive = await checkSession();
    if (!sessionActive) {
        // Fallback ke provider baca-saja jika tidak ada sesi/wallet
        console.log("📡 Menggunakan provider baca-saja (wallet tidak terhubung)");
        state.provider = new ethers.providers.JsonRpcProvider(CONFIG.RPC_URL);
        state.contract = new ethers.Contract(CONFIG.ADDRESS, CONTRACT_ABI, state.provider);
    }
    // Lanjutkan logika halaman
    await runPageSpecificLogic();
}

function setupWalletListeners() {
    if (!window.ethereum) return;

    // 1. Jika User Ganti Akun di MetaMask -> Logout Paksa & Refresh
    // Ini mencegah "Ghost Mode" (Sesi lama tertinggal padahal akun wallet beda)
    window.ethereum.on("accountsChanged", (accounts) => {
        console.warn("⚠️ Akun MetaMask berubah:", accounts);
        handleLogout(); 
    });

    // 2. Jika User Ganti Network -> Refresh untuk reload Provider
    window.ethereum.on("chainChanged", () => {
        console.warn("⚠️ Network berubah, memuat ulang...");
        window.location.reload();
    });
}

// ==========================================
// 3. LOGIKA KONEKSI (ROBUST)
// ==========================================

// Fungsi: Konek Manual (Dipanggil saat tombol diklik)
async function connectWallet() {
    if (!window.ethereum) return showToast("MetaMask tidak ditemukan!", "error");
    
    try {
        // A. Inisialisasi Provider Baru (Fresh)
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        
        // B. Request Akses (Akan memunculkan Pop-up MetaMask)
        await provider.send("eth_requestAccounts", []);
        
        // C. Validasi Network (Wajib Base Sepolia)
        // Jika user menolak ganti network, proses berhenti disini.
        const isNetworkValid = await ensureNetwork(provider);
        if (!isNetworkValid) return; 

        // D. Setup Signer & Contract
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        
        // Update Global State
        updateGlobalState(provider, signer, address);

        // E. Cek Alur Login/Register
        await handleAuthFlow(address);

    } catch (err) {
        console.error("Connect Error:", err);
        // Menangani error jika user menutup popup (User Rejected)
        if (err.code === 4001) {
            showToast("Koneksi dibatalkan oleh pengguna.", "error");
        } else {
            showToast("Koneksi Gagal: " + (err.reason || err.message), "error");
        }
    }
}

// Fungsi: Memastikan Network Benar (Mengembalikan true/false)
async function ensureNetwork(provider) {
    const { chainId } = await provider.getNetwork();
    
    // Jika sudah benar, langsung return true
    if (chainId === CONFIG.CHAIN_ID) return true;

    // Jika salah, coba switch
    try {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: CONFIG.HEX_CHAIN_ID }],
        });
        
        // Refresh provider setelah switch network agar state sinkron
        // (Browser mobile kadang butuh reload, tapi di PC ini cukup)
        const newProvider = new ethers.providers.Web3Provider(window.ethereum);
        return true; 

    } catch (error) {
        // Error 4902: Chain belum ditambahkan di MetaMask user
        if (error.code === 4902) {
            try {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [{
                        chainId: CONFIG.HEX_CHAIN_ID,
                        chainName: 'Base Sepolia',
                        rpcUrls: [CONFIG.RPC_URL],
                        nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
                        blockExplorerUrls: ['https://sepolia.basescan.org']
                    }],
                });
                return true;
            } catch (addError) {
                showToast("Gagal menambahkan jaringan Base Sepolia", "error");
                return false;
            }
        }
        showToast("Wajib menggunakan jaringan Base Sepolia", "error");
        return false;
    }
}

// Helper: Update Variabel Global agar sinkron
function updateGlobalState(prov, sig, addr) {
    state.provider = prov;
    state.signer = sig;
    state.userAddress = addr;
    
    // Expose ke window agar script lain bisa akses (opsional)
    window.provider = prov;
    window.signer = sig;
    window.userAddress = addr;
    
    // Inisialisasi Kontrak
    if (CONTRACT_ABI && CONTRACT_ABI.length > 0) {
        state.contract = new ethers.Contract(CONFIG.ADDRESS, CONTRACT_ABI, sig);
        window.contract = state.contract; // Mapping ke variabel global lama Anda
        contract = state.contract;        // Mapping ke variabel global lama Anda
    }
}

// ==========================================
// 4. SESSION MANAGEMENT (SECURE)
// ==========================================

async function handleAuthFlow(address) {
    if (!state.contract) return; // Guard clause

    try {
        const profile = await state.contract.users(address);
        
        // Struct index 6 = isRegistered (sesuai info Anda)
        if (profile[6] === true) {
            await saveSession(address);
            if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
                window.location.href = "home.html";
            }
        } else {
            if (!window.location.pathname.includes("register.html")) {
                window.location.href = "register.html";
            }
        }
    } catch (e) {
        console.error("Auth Flow Error:", e);
        showToast("Gagal memeriksa status user.", "error");
    }
}

async function saveSession(address) {
    localStorage.removeItem("putramas_session");

    try {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const uniqueId = "PTS-" + Date.now();
        const msg = `Selamat Datang di Putramas Social\n\nUser: ${address}\nTime: ${timezone}\nID: ${uniqueId}\n\n`;
        
        if (!state.signer) throw new Error("Signer hilang");

        // Request tanda tangan
        await state.signer.signMessage(msg); 
        
        const session = {
            address: address,
            expiry: Date.now() + CONFIG.SESSION_DURATION
        };

        localStorage.setItem("putramas_session", JSON.stringify(session));
        showToast("Login Berhasil!", "success");
        
    } catch(e) {
        console.warn("Signature rejected:", e);
        showToast("Login dibatalkan (Signature ditolak).", "error");
    }
}

// Cek Sesi (Silent & Validation)
async function checkSession() {
    console.log("🔄 Memeriksa Sesi...");

    const sessionRaw = localStorage.getItem("putramas_session");
    if (!sessionRaw) return false;

    // 1. Parsing JSON Aman (Anti Crash)
    let session;
    try {
        session = JSON.parse(sessionRaw);
    } catch (e) {
        console.warn("⚠️ Data sesi korup, logout paksa.");
        handleLogout();
        return false;
    }

    // 2. Cek Kadaluarsa
    if (Date.now() > session.expiry) {
        console.warn("⚠️ Sesi kadaluarsa.");
        handleLogout();
        return false;
    }

    if (!window.ethereum) return false;

    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        
        // 3. SILENT CHECK (listAccounts)
        // BEDA DENGAN KODE LAMA: Kita pakai listAccounts() dulu.
        // Ini tidak akan memunculkan popup jika wallet terkunci.
        // Jika array kosong = User belum connect/Wallet terkunci.
        const accounts = await provider.listAccounts();
        
        if (accounts.length === 0) {
            console.log("⚪ Wallet terkunci atau disconnect. Menunggu user klik tombol.");
            // Jangan logout, biarkan user klik tombol connect sendiri
            return false;
        }

        // 4. Validasi Address Aktif vs Sesi
        // PENTING: Pastikan akun di MetaMask SAMA dengan sesi LocalStorage
        const activeAddress = accounts[0];
        
        if (activeAddress.toLowerCase() !== session.address.toLowerCase()) {
            console.warn("⚠️ Akun MetaMask berbeda dengan sesi tersimpan. Logout.");
            handleLogout();
            return false;
        }

        // 5. Cek Network (Silent)
        const { chainId } = await provider.getNetwork();
        if (chainId !== CONFIG.CHAIN_ID) {
            console.warn("⚠️ Network salah. Menunggu switch.");
            // Kita bisa panggil ensureNetwork() disini tapi lebih baik biarkan user klik connect
            // agar tidak mengganggu UX saat load.
            return false;
        }

        // 6. Restore State (Koneksi Sukses)
        const signer = provider.getSigner();
        updateGlobalState(provider, signer, activeAddress);

        console.log("✅ Sesi valid dipulihkan:", activeAddress);

        // Load data jika fungsi tersedia (Feed, Profile, dll)
        if (typeof loadFeed === "function") loadFeed();
        
        return true;

    } catch (err) {
        console.error("Gagal memulihkan sesi:", err);
        return false;
    }
}

function handleLogout() {
    // 1. Hapus session login saja
    localStorage.removeItem("putramas_session");
    
    // 2. JANGAN hapus "lastNotifCheck" agar notif lama tidak muncul lagi
    
    // 3. Reset State internal
    state = { provider: null, signer: null, userAddress: null, contract: null };
    
    // 4. Reset UI (Opsional tapi bagus untuk kebersihan)
    const badges = document.querySelectorAll('.nav-badge');
    badges.forEach(badge => badge.style.display = 'none');
    
    // 5. Tendang ke halaman login
    window.location.href = "index";
}

function disconnect() {
    handleLogout();
}


// --- UTILS ---
function showToast(msg, type="info") {
    // Pastikan elemen toast ada di HTML Anda
    let t = document.getElementById("toast");
    if (!t) {
        console.log(msg); // Fallback ke console jika tidak ada elemen toast
        return;
    }
    t.innerText = msg;
    t.className = "show";
    t.style.background = type === "error" ? "#e74c3c" : "#333";
    setTimeout(() => t.className = t.className.replace("show", ""), 3000);
                                  }

// --- 1. FUNGSI BADGE (DIPERBAIKI TIMESTAMPNYA) ---
async function updateNotifBadge() {
    // Cek koneksi dasar
    if (!contract || !userAddress) return;

    try {
        // A. Ambil Notifikasi dari Blockchain
        const notifs = await contract.getMyNotifications();
        
        // B. Ambil waktu terakhir cek (Pastikan konversi aman)
        let lastCheck = localStorage.getItem("lastNotifCheck") || 0;
        lastCheck = parseInt(lastCheck); 

        // C. Perbaikan Logika Timestamp (Detik vs Milidetik)
        // Jika lastCheck terlalu besar (indikasi milidetik), kita bagi 1000
        if (lastCheck > 1000000000000) { 
            lastCheck = Math.floor(lastCheck / 1000);
        }

        // D. Filter: Hanya ambil yang waktunya DI ATAS lastCheck
        const unreadCount = notifs.filter(n => parseInt(n.timestamp) > lastCheck).length;

        // E. Update Semua Badge di UI
        const badges = document.querySelectorAll('.nav-badge');
        badges.forEach(badge => {
            if (unreadCount > 0) {
                badge.style.display = 'flex';
                // Tampilkan 99+ jika kebanyakan, biar rapi
                badge.innerText = unreadCount > 99 ? '99+' : unreadCount;
                
                // Efek denyut (Pulse) agar user sadar ada notif baru
                badge.classList.add("pulse-animation");
            } else {
                badge.style.display = 'none';
                badge.classList.remove("pulse-animation");
            }
        });

    } catch (e) {
        // Error silent agar tidak mengganggu UX
        console.warn("Badge Sync Skip:", e.message);
    }
}

// --- 2. FUNGSI REAL-TIME LISTENER (AGAR INSTANT) ---
// Panggil fungsi ini SEKALI saja saat initApp()
function setupRealtimeListener() {
    if (!contract || !userAddress) return;

    // Dengarkan Event: Sawer
    // Filter event agar hanya bereaksi jika 'to' (penerima) adalah kita
    const filterSawer = contract.filters.Sawer(null, userAddress);
    contract.on(filterSawer, () => {
        showToast("🔔 Ada Saweran Masuk!", "success");
        updateNotifBadge(); // Refresh badge langsung
    });

    // Dengarkan Event: Interaksi (Like/Komen)
    // Asumsi kontrak Anda punya event NewInteraction(from, to, action)
    const filterInteract = contract.filters.NewInteraction(null, userAddress);
    contract.on(filterInteract, (from, to, action) => {
        // Jangan notif jika interaksi sendiri
        if (from.toLowerCase() !== userAddress.toLowerCase()) {
            showToast(`🔔 Notifikasi Baru: ${action}`, "info");
            updateNotifBadge();
        }
    });

    console.log("✅ Real-time Listener Aktif");
}


// ==========================================
// 1. FUNGSI SUBMIT POSTING (UTAMA - DIPERBAIKI)
// ==========================================
async function submitPost() {
    const captionInput = document.getElementById("mainCaption");
    const caption = captionInput.value;

    // SKENARIO A: POSTING NFT (WAYANG)
    if (pendingNftData) {
        try {
            showToast("1/3 Upload Gambar ke IPFS...", "info");
            
            // 1. Upload Gambar ke Pinata
            const imgCid = await uploadToPinata(pendingNftData.file);
            
            // 2. Buat JSON Metadata
            showToast("2/3 Mencetak Metadata...", "info");
            const metadata = {
                name: pendingNftData.name,
                description: caption,
                image: `ipfs://${imgCid}`, // Simpan URI lengkap di metadata
                attributes: [
                    { trait_type: "Golongan", value: pendingNftData.attributes.golongan },
                    { trait_type: "Gaya", value: pendingNftData.attributes.gaya },
                    { trait_type: "Bahan", value: pendingNftData.attributes.bahan },
                    { trait_type: "Gapit", value: pendingNftData.attributes.gapit },
                    { trait_type: "Penatah", value: pendingNftData.attributes.penatah },
                    { trait_type: "Penyungging", value: pendingNftData.attributes.penyungging },
                    { trait_type: "Tahun", value: pendingNftData.attributes.tahun },
                    { trait_type: "Kolektor", value: pendingNftData.attributes.kolektor }
                ]
            };

            // 3. Upload JSON Metadata
            const blob = new Blob([JSON.stringify(metadata)], { type: 'application/json' });
            const metaFile = new File([blob], "metadata.json");
            const metaCid = await uploadToPinata(metaFile);

            // 4. Kirim ke Blockchain
            showToast("3/3 Konfirmasi Wallet (0.0001 ETH)...", "info");
            
            // Format URI untuk kontrak
            const finalImgUri = `ipfs://${imgCid}`;
            const finalMetaUri = `ipfs://${metaCid}`;

            const tx = await contract.createPost(
                finalImgUri, 
                finalMetaUri, 
                caption, 
                { value: ethers.utils.parseEther("0.0001") }
            );

            await tx.wait();
            showToast("Berhasil Mengarsipkan Wayang!", "success");
            
            // Bersihkan
            cancelNft();
            captionInput.value = "";
            setTimeout(() => location.reload(), 2000); 

        } catch (e) {
            console.error(e);
            if (e.code === 'ACTION_REJECTED' || e.code === 4001) {
                showToast("Transaksi dibatalkan user.", "info");
            } else {
                showToast("Gagal: " + (e.reason || e.message), "error");
            }
        }
    } 

    // SKENARIO B: POSTING TEKS BIASA (GRATIS)
    else {
        if(!caption.trim()) return showToast("Tulis sesuatu dulu!", "error");

        try {
            showToast("Mengirim status...", "info");
            // Kirim string kosong untuk imgURI dan tokenURI
            const tx = await contract.createPost("", "", caption); 
            await tx.wait();

            showToast("Berhasil Posting!", "success");
            captionInput.value = "";
            setTimeout(() => location.reload(), 2000);
        } catch(e) {
            console.error(e);
            showToast("Gagal: " + (e.reason || e.message), "error");
        }
    }
}

// ==========================================
// 2. FUNGSI UTILITAS MODAL
// ==========================================
function openNftModal() {
    document.getElementById("nftModal").showModal();
}

function previewInModal(input) {
    if (input.files && input.files[0]) {
        document.getElementById("modalFilePreview").innerText = "File Terpilih: " + input.files[0].name;
    } else {
        document.getElementById("modalFilePreview").innerText = "";
    }
}

// ==========================================
// 3. FUNGSI SIMPAN DRAFT (KOMPRESI DISINI)
// ==========================================
async function saveNftDraft() {
    const nameInput = document.getElementById("mName");
    const fileInput = document.getElementById("modalFileInput");
    
    if (!nameInput.value.trim()) {
        return showToast("Nama Tokoh Wayang wajib diisi!", "error");
    }
    if (!fileInput.files || !fileInput.files[0]) {
        return showToast("Foto Fisik Wayang wajib dipilih!", "error");
    }

    let finalFile = fileInput.files[0];
    showToast("Memproses gambar (Target 500KB)...", "info");

    try {
        // Asumsi fungsi customCompress sudah ada di ipfs_helper.js
        finalFile = await customCompress(finalFile, 500, 1500);
        console.log(`✅ Gambar Siap NFT: ${(finalFile.size / 1024).toFixed(2)} KB`);
    } catch (e) {
        console.error(e);
        return showToast("Gagal memproses gambar.", "error");
    }

    const golongan = document.getElementById("mGolongan").value;
    const gaya = document.getElementById("mGaya").value;

    pendingNftData = {
        name: nameInput.value,
        file: finalFile, 
        attributes: {
            golongan: golongan || "-", 
            gaya: gaya || "-",
            bahan: document.getElementById("mBahan").value || "-",
            gapit: document.getElementById("mGapit").value || "-",
            penatah: document.getElementById("mPenatah").value || "-",
            penyungging: document.getElementById("mPenyungging").value || "-",
            tahun: document.getElementById("mTahun").value || "-",
            kolektor: document.getElementById("mKolektor").value || "-"
        }
    };

    document.getElementById("nftModal").close(); 
    
    const indicator = document.getElementById("nftReadyIndicator");
    const previewName = document.getElementById("nftFilenamePreview");
    
    if (indicator) indicator.style.display = "block";
    if (previewName) previewName.innerText = `(${pendingNftData.name})`;
    
    showToast("Data Tersimpan! Klik KIRIM untuk upload.", "success");
}

// ==========================================
// 4. FUNGSI BATAL / RESET FORM
// ==========================================
function cancelNft() {
    pendingNftData = null;

    const indicator = document.getElementById("nftReadyIndicator");
    if (indicator) indicator.style.display = "none";

    document.getElementById("modalFileInput").value = "";
    document.getElementById("modalFilePreview").innerText = "";
    document.getElementById("mName").value = "";
    document.getElementById("mGolongan").selectedIndex = 0;
    document.getElementById("mGaya").selectedIndex = 0;

    const textIds = ['mBahan', 'mGapit', 'mPenatah', 'mPenyungging', 'mTahun', 'mKolektor'];
    textIds.forEach(id => {
        const el = document.getElementById(id);
        if(el) el.value = "";
    });

    showToast("Mode Arsip Dibatalkan.", "info");
}

// --- FUNGSI HELPER FETCH METADATA ---
async function fetchCardMetadata(postId, tokenUri) {
    if (!tokenUri || tokenUri.length < 5) return; // Validasi tambahan
    try {
        const url = tokenUri.replace('ipfs://', 'https://gateway.pinata.cloud/ipfs/');
        const res = await fetch(url);
        const meta = await res.json();

        const nameEl = document.getElementById(`meta-name-${postId}`);
        if(nameEl) nameEl.innerText = meta.name || "Tanpa Nama";

        const gagrakEl = document.getElementById(`meta-gagrak-${postId}`);
        if(gagrakEl && meta.attributes) {
            const attr = meta.attributes.find(a => 
                a.trait_type === "Gaya (Gagrak)" || a.trait_type === "Gaya" || a.trait_type === "Gagrak"
            );
            if(attr) gagrakEl.innerText = attr.value;
            else gagrakEl.innerText = "-";
        }
    } catch (e) {
        console.warn(`Gagal load metadata post ${postId}`, e);
    }
}

// --- FUNGSI FORMAT CAPTION (Link & Spasi) ---
function formatCaption(text) {
    if (!text) return "";

    // 1. Sanitasi (Mencegah kode HTML berbahaya/XSS)
    let cleanText = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // 2. Deteksi Link (http/https) dan ubah jadi Tag <a>
    // Regex ini mendeteksi teks yang diawali http:// atau https://
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    
    cleanText = cleanText.replace(urlRegex, (url) => {
        return `<a href="${url}" target="_blank" style="color:#7385a5; font-weight:bold; text-decoration:none;">${url}</a>`;
    });

    // 3. Ubah Enter (\n) menjadi <br> agar spasi bawah terbaca di HTML
    return cleanText.replace(/\n/g, "<br>");
}

// ==========================================
// 5. INISIALISASI & AUTOMATION (PALING BAWAH)
// ==========================================

// Jalankan initApp saat browser siap sepenuhnya
window.addEventListener('load', () => {
    // 1. Coba inisialisasi pertama kali
    initApp();
    
    // 2. (SAFETY NET) Cek ulang setiap 2 detik
    // Jika tiba-tiba variabel contract hilang/undefined, paksa connect ulang
    setInterval(() => {
        // Logika: Jika contract kosong DAN ada sesi tersimpan -> Konek ulang
        if (!contract && localStorage.getItem("putramas_session")) {
            console.warn("⚠️ Koneksi terputus, mencoba reconnect...");
            checkSession();
        }
    }, 2000);
});

// 3. Update Notifikasi setiap 10 detik (Realtime)
setInterval(() => {
    // Hanya jalan jika sudah login & kontrak siap
    if (contract && userAddress) {
        updateNotifBadge();
    }
}, 10000);
