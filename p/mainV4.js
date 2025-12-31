/*************************************************
 * CONFIG
 *************************************************/
const CONTRACT_ADDRESS = "0x0753d3a9f7cb7eD9De233a319d4AD9fF60A434B2";
const RPC_URL = "https://sepolia.base.org";
const CHAIN_ID = 84532;
const HEX_CHAIN_ID = "0x14a34";
const SESSION_DURATION = 90 * 24 * 60 * 60 * 1000; // 3 bulan
const CONTRACT_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"follower","type":"address"},{"indexed":true,"internalType":"address","name":"followed","type":"address"}],"name":"Followed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"string","name":"action","type":"string"}],"name":"NewInteraction","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"postId","type":"uint256"},{"indexed":true,"internalType":"address","name":"author","type":"address"}],"name":"NewPost","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"postId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nftId","type":"uint256"},{"indexed":false,"internalType":"address","name":"author","type":"address"}],"name":"NewPost","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"string","name":"newName","type":"string"},{"indexed":false,"internalType":"bool","name":"isPaid","type":"bool"}],"name":"NicknameChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"postId","type":"uint256"}],"name":"Sawer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"follower","type":"address"},{"indexed":true,"internalType":"address","name":"unfollowed","type":"address"}],"name":"Unfollowed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"blocker","type":"address"},{"indexed":true,"internalType":"address","name":"blocked","type":"address"}],"name":"UserBlocked","type":"event"},{"inputs":[],"name":"MAX_FREE_CHANGES","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"string","name":"_text","type":"string"},{"internalType":"string","name":"_imageURI","type":"string"}],"name":"addComment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_target","type":"address"}],"name":"blockUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newNickname","type":"string"}],"name":"changeNickname","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"_imgURI","type":"string"},{"internalType":"string","name":"_metaURI","type":"string"},{"internalType":"string","name":"_caption","type":"string"}],"name":"createPost","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"dislikePost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postIndex","type":"uint256"},{"internalType":"uint256","name":"_commentIndex","type":"uint256"},{"internalType":"string","name":"_newText","type":"string"}],"name":"editComment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdrawETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_target","type":"address"}],"name":"followUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"followerList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"followingList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllPosts","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"nftId","type":"uint256"},{"internalType":"address","name":"author","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"},{"internalType":"string","name":"imageURI","type":"string"},{"internalType":"string","name":"caption","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"likeCount","type":"uint256"},{"internalType":"uint256","name":"dislikeCount","type":"uint256"},{"internalType":"uint256","name":"commentCount","type":"uint256"},{"internalType":"uint256","name":"totalRatingScore","type":"uint256"},{"internalType":"uint256","name":"ratingCount","type":"uint256"}],"internalType":"struct PutramasOfficialWayangNusantara.Post[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postIndex","type":"uint256"}],"name":"getComments","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"commenter","type":"address"},{"internalType":"string","name":"text","type":"string"},{"internalType":"string","name":"imageURI","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"internalType":"struct PutramasOfficialWayangNusantara.Comment[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getFollowCounts","outputs":[{"internalType":"uint256","name":"followersCount","type":"uint256"},{"internalType":"uint256","name":"followingCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMyFeed","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"nftId","type":"uint256"},{"internalType":"address","name":"author","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"},{"internalType":"string","name":"imageURI","type":"string"},{"internalType":"string","name":"caption","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"likeCount","type":"uint256"},{"internalType":"uint256","name":"dislikeCount","type":"uint256"},{"internalType":"uint256","name":"commentCount","type":"uint256"},{"internalType":"uint256","name":"totalRatingScore","type":"uint256"},{"internalType":"uint256","name":"ratingCount","type":"uint256"}],"internalType":"struct PutramasOfficialWayangNusantara.Post[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMyNotifications","outputs":[{"components":[{"internalType":"address","name":"actor","type":"address"},{"internalType":"string","name":"actionType","type":"string"},{"internalType":"uint256","name":"postId","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bool","name":"isRead","type":"bool"}],"internalType":"struct PutramasOfficialWayangNusantara.Notification[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getProfile","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"nickname","type":"string"},{"internalType":"string","name":"fotoProfil","type":"string"},{"internalType":"string","name":"bio","type":"string"},{"internalType":"string","name":"lokasi","type":"string"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"bool","name":"isRegistered","type":"bool"},{"internalType":"uint256","name":"nameChangeCount","type":"uint256"}],"internalType":"struct PutramasOfficialWayangNusantara.UserProfile","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getProfileById","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"nickname","type":"string"},{"internalType":"string","name":"fotoProfil","type":"string"},{"internalType":"string","name":"bio","type":"string"},{"internalType":"string","name":"lokasi","type":"string"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"bool","name":"isRegistered","type":"bool"},{"internalType":"uint256","name":"nameChangeCount","type":"uint256"}],"internalType":"struct PutramasOfficialWayangNusantara.UserProfile","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserPosts","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"nftId","type":"uint256"},{"internalType":"address","name":"author","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"},{"internalType":"string","name":"imageURI","type":"string"},{"internalType":"string","name":"caption","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"likeCount","type":"uint256"},{"internalType":"uint256","name":"dislikeCount","type":"uint256"},{"internalType":"uint256","name":"commentCount","type":"uint256"},{"internalType":"uint256","name":"totalRatingScore","type":"uint256"},{"internalType":"uint256","name":"ratingCount","type":"uint256"}],"internalType":"struct PutramasOfficialWayangNusantara.Post[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"hasBlocked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"hasDisliked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"hasLiked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"idToWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ownerAddr","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"isFollowing","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"likePost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nicknamePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"postComments","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"commenter","type":"address"},{"internalType":"string","name":"text","type":"string"},{"internalType":"string","name":"imageURI","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"posts","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"nftId","type":"uint256"},{"internalType":"address","name":"author","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"},{"internalType":"string","name":"imageURI","type":"string"},{"internalType":"string","name":"caption","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"likeCount","type":"uint256"},{"internalType":"uint256","name":"dislikeCount","type":"uint256"},{"internalType":"uint256","name":"commentCount","type":"uint256"},{"internalType":"uint256","name":"totalRatingScore","type":"uint256"},{"internalType":"uint256","name":"ratingCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint8","name":"_bintang","type":"uint8"}],"name":"ratePost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_nickname","type":"string"},{"internalType":"string","name":"_foto","type":"string"},{"internalType":"string","name":"_bio","type":"string"},{"internalType":"string","name":"_lokasi","type":"string"}],"name":"registerProfile","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"sawerPost","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newPrice","type":"uint256"}],"name":"setNicknamePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_target","type":"address"}],"name":"unfollowUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_foto","type":"string"},{"internalType":"string","name":"_bio","type":"string"},{"internalType":"string","name":"_lokasi","type":"string"}],"name":"updateBioAndPhoto","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_nickname","type":"string"},{"internalType":"string","name":"_foto","type":"string"},{"internalType":"string","name":"_bio","type":"string"},{"internalType":"string","name":"_lokasi","type":"string"}],"name":"updateProfile","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"userCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userNotifications","outputs":[{"internalType":"address","name":"actor","type":"address"},{"internalType":"string","name":"actionType","type":"string"},{"internalType":"uint256","name":"postId","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bool","name":"isRead","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userRating","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"nickname","type":"string"},{"internalType":"string","name":"fotoProfil","type":"string"},{"internalType":"string","name":"bio","type":"string"},{"internalType":"string","name":"lokasi","type":"string"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"bool","name":"isRegistered","type":"bool"},{"internalType":"uint256","name":"nameChangeCount","type":"uint256"}],"stateMutability":"view","type":"function"}];

/*************************************************
 * GLOBAL STATE
 *************************************************/
let provider = null;
let signer = null;
let contract = null;
let userAddress = null;
let pendingNftData = null;
const walletState = {
    ready: false,
    restoring: false,
    listenersMounted: false
};

/*************************************************
 * INIT APP
 *************************************************/
async function initApp() {
    await restoreSession();
    mountWalletListeners();
}

/*************************************************
 * WALLET LISTENERS (ANTI DOBEL & ANTI CHAOS)
 *************************************************/
function mountWalletListeners() {
    if (!window.ethereum || walletState.listenersMounted) return;

    walletState.listenersMounted = true;

    ethereum.on("accountsChanged", () => hardLogout("Akun berubah"));
    ethereum.on("chainChanged", () => hardLogout("Network berubah"));
}

function hardLogout(reason) {
    console.warn("🔌 Logout:", reason);
    localStorage.removeItem("putramas_session");
    walletState.ready = false;
    provider = signer = contract = userAddress = null;
    location.href = "index.html";
}

/*************************************************
 * CONNECT WALLET (MANUAL)
 *************************************************/
async function connectWallet() {
    if (!window.ethereum) {
        showToast("Metamask tidak ditemukan", "error");
        return;
    }

    try {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);

        await ensureNetwork();
        await initSignerAndContract();
        await handleAuthFlow(userAddress);

    } catch (e) {
        console.error(e);
        showToast("Gagal connect wallet", "error");
    }
}

/*************************************************
 * NETWORK CHECK
 *************************************************/
async function ensureNetwork() {
    const { chainId } = await provider.getNetwork();
    if (chainId === CHAIN_ID) return;

    try {
        await ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: HEX_CHAIN_ID }]
        });
    } catch (err) {
        if (err.code === 4902) {
            await ethereum.request({
                method: "wallet_addEthereumChain",
                params: [{
                    chainId: HEX_CHAIN_ID,
                    chainName: "Base Sepolia",
                    rpcUrls: [RPC_URL],
                    nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
                    blockExplorerUrls: ["https://sepolia.basescan.org"]
                }]
            });
        } else {
            throw err;
        }
    }
}

/*************************************************
 * INIT SIGNER & CONTRACT (SATU PINTU)
 *************************************************/
async function initSignerAndContract() {
    signer = provider.getSigner();
    userAddress = await signer.getAddress();
    contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
}

/*************************************************
 * AUTH FLOW (REGISTER / LOGIN)
 *************************************************/
async function handleAuthFlow(address) {
    const profile = await contract.users(address);

    if (profile[6] === true) {
        await saveSession(address);
        if (location.pathname === "/" || location.pathname.includes("index")) {
            location.href = "home.html";
        }
    } else {
        if (!location.pathname.includes("register")) {
            location.href = "register.html";
        }
    }
}

/*************************************************
 * SAVE SESSION (STABIL)
 *************************************************/
async function saveSession(address) {
    try {
        await signer.signMessage("Putramas Login Confirmation");

        localStorage.setItem("putramas_session", JSON.stringify({
            address,
            expiry: Date.now() + SESSION_DURATION
        }));

        walletState.ready = true;
        showToast("Login berhasil", "success");

    } catch {
        showToast("Signature ditolak", "error");
    }
}

/*************************************************
 * RESTORE SESSION (ANTI GHOST MODE)
 *************************************************/
async function restoreSession() {
    if (walletState.restoring) return false;
    walletState.restoring = true;

    const raw = localStorage.getItem("putramas_session");
    if (!raw || !window.ethereum) {
        walletState.restoring = false;
        return false;
    }

    let session;
    try {
        session = JSON.parse(raw);
    } catch {
        localStorage.removeItem("putramas_session");
        walletState.restoring = false;
        return false;
    }

    if (Date.now() > session.expiry) {
        localStorage.removeItem("putramas_session");
        walletState.restoring = false;
        return false;
    }

    try {
        provider = new ethers.providers.Web3Provider(window.ethereum);

        // PENTING: restore pakai eth_accounts (TANPA POPUP)
        const accounts = await provider.send("eth_accounts", []);
        if (!accounts.length) throw "Wallet tidak aktif";

        await ensureNetwork();
        await initSignerAndContract();

        if (userAddress.toLowerCase() !== session.address.toLowerCase()) {
            throw "Akun tidak cocok";
        }

        walletState.ready = true;
        console.log("✅ Session restored:", userAddress);

        if (typeof loadFeed === "function") {
            await loadFeed();
        }

        return true;

    } catch (e) {
        console.warn("Restore gagal:", e);
        localStorage.removeItem("putramas_session");
        return false;

    } finally {
        walletState.restoring = false;
    }
}

/*************************************************
 * AUTH GUARD (WAJIB UNTUK SEMUA AKSI)
 *************************************************/
function requireAuth() {
    if (!walletState.ready || !contract || !signer) {
        showToast("Wallet belum siap", "error");
        return false;
    }
    return true;
}

/*************************************************
 * DISCONNECT
 *************************************************/
function disconnect() {
    hardLogout("Logout manual");
}

/*************************************************
 * TOAST HELPER
 *************************************************/
function showToast(msg, type = "info") {
    console.log(`[${type.toUpperCase()}]`, msg);
    }

function showToast(msg, type="info") {
    let t = document.getElementById("toast");
    if(t) {
        t.innerText = msg; t.className = "show"; 
        t.style.background = type==="error"?"#e74c3c":"#333";
        setTimeout(()=>t.classList.remove("show"), 3000);
    } else {
        alert(msg);
    }
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

// ==========================================
// 1. FUNGSI SUBMIT POSTING (UTAMA)
// ==========================================
async function submitPost() {
    const caption = document.getElementById("mainCaption").value;

    // SKENARIO A: POSTING NFT (WAYANG)
    if (pendingNftData) {
        try {
            showToast("1/3 Upload Gambar ke IPFS...", "info");
            
            // 1. Upload Gambar (File sudah dikompres saat saveNftDraft)
            // Menggunakan fungsi dari ipfs_helper.js
            const imgCid = await uploadToPinata(pendingNftData.file);
            
            // 2. Buat JSON Metadata
            showToast("2/3 Mencetak Metadata...", "info");
            const metadata = {
                name: pendingNftData.name,
                description: caption,
                image: imgCid,
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
            // JSON tidak perlu dikompres, langsung upload
            const blob = new Blob([JSON.stringify(metadata)], { type: 'application/json' });
            const metaFile = new File([blob], "metadata.json");
            const metaCid = await uploadToPinata(metaFile);

            // 4. Kirim ke Blockchain (Bayar 0.0001 ETH)
            showToast("3/3 Konfirmasi Wallet (0.0001 ETH)...", "info");
            
            const tx = await contract.createPost(
                imgCid, 
                metaCid, 
                caption, 
                { value: ethers.utils.parseEther("0.0001") }
            );

            await tx.wait();
            showToast("Berhasil Mengarsipkan Wayang!", "success");
            
            // Bersihkan
            cancelNft();
            document.getElementById("mainCaption").value = "";
            setTimeout(() => location.reload(), 2000); 

        } catch (e) {
            console.error(e);
            showToast("Gagal: " + (e.reason || e.message), "error");
        }
    } 

    // SKENARIO B: POSTING TEKS BIASA (GRATIS)
    else {
        if(!caption) return showToast("Tulis sesuatu dulu!", "error");

        try {
            showToast("Mengirim status...", "info");
            const tx = await contract.createPost("", "", caption); 
            await tx.wait();

            showToast("Berhasil Posting!", "success");
            document.getElementById("mainCaption").value = "";
            setTimeout(() => location.reload(), 2000);
        } catch(e) {
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
    // A. Ambil Elemen Input Utama
    const nameInput = document.getElementById("mName");
    const fileInput = document.getElementById("modalFileInput");
    
    // B. Validasi (Wajib diisi)
    if (!nameInput.value.trim()) {
        return showToast("Nama Tokoh Wayang wajib diisi!", "error");
    }
    if (!fileInput.files || !fileInput.files[0]) {
        return showToast("Foto Fisik Wayang wajib dipilih!", "error");
    }

    // --- LOGIKA KOMPRESI HELPER ---
    let finalFile = fileInput.files[0];
    
    showToast("Memproses gambar (Target 500KB)...", "info");

    try {
        // Panggil customCompress dari ipfs_helper.js
        // Target: 500 KB
        // Dimensi: 1500 px (Agar tetap tajam untuk NFT Wayang)
        finalFile = await customCompress(finalFile, 500, 1500);
        
        console.log(`✅ Gambar Siap NFT: ${(finalFile.size / 1024).toFixed(2)} KB`);
    } catch (e) {
        console.error(e);
        return showToast("Gagal memproses gambar.", "error");
    }
    // -----------------------------

    // C. Ambil Nilai dari Dropdown
    const golongan = document.getElementById("mGolongan").value;
    const gaya = document.getElementById("mGaya").value;

    // D. Simpan ke Variabel Global (pendingNftData)
    // NOTE: Kita simpan 'finalFile' yang SUDAH dikompresi
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

    // E. Update Tampilan Utama
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

    // Sembunyikan Indikator
    const indicator = document.getElementById("nftReadyIndicator");
    if (indicator) indicator.style.display = "none";

    // Reset Input File & Nama
    document.getElementById("modalFileInput").value = "";
    document.getElementById("modalFilePreview").innerText = "";
    document.getElementById("mName").value = "";

    // Reset Dropdown
    document.getElementById("mGolongan").selectedIndex = 0;
    document.getElementById("mGaya").selectedIndex = 0;

    // Reset Input Teks Lainnya
    const textIds = ['mBahan', 'mGapit', 'mPenatah', 'mPenyungging', 'mTahun', 'mKolektor'];
    textIds.forEach(id => {
        document.getElementById(id).value = "";
    });

    showToast("Mode Arsip Dibatalkan.", "info");
}

// --- FUNGSI HELPER FETCH METADATA ---
async function fetchCardMetadata(postId, tokenUri) {
    if (!tokenUri) return;
    try {
        const url = tokenUri.replace('ipfs://', 'https://gateway.pinata.cloud/ipfs/');
        const res = await fetch(url);
        const meta = await res.json();

        // 1. Update Nama
        const nameEl = document.getElementById(`meta-name-${postId}`);
        if(nameEl) nameEl.innerText = meta.name || "Tanpa Nama";

        // 2. Update Gagrak
        const gagrakEl = document.getElementById(`meta-gagrak-${postId}`);
        if(gagrakEl && meta.attributes) {
            const attr = meta.attributes.find(a => 
                a.trait_type === "Gaya (Gagrak)" || a.trait_type === "Gaya" || a.trait_type === "Gagrak"
            );
            if(attr) gagrakEl.innerText = attr.value;
            else gagrakEl.innerText = "-";
        }
    } catch (e) {
        console.warn(`Gagal load metadata post ${postId}`);
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
}, 5000);
