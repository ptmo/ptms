// ==========================================
// 1. KONFIGURASI
// ==========================================
const CONFIG = {
    ADDRESS: "0x0753d3a9f7cb7eD9De233a319d4AD9fF60A434B2", 
    RPC_URL: "https://sepolia.base.org",
    CHAIN_ID: 84532,
    HEX_CHAIN_ID: "0x14a34",
    SESSION_DURATION: 90 * 24 * 60 * 60 * 1000 
};

// Asumsi ABI sudah Anda isi dengan benar
const CONTRACT_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"follower","type":"address"},{"indexed":true,"internalType":"address","name":"followed","type":"address"}],"name":"Followed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"string","name":"action","type":"string"}],"name":"NewInteraction","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"postId","type":"uint256"},{"indexed":true,"internalType":"address","name":"author","type":"address"}],"name":"NewPost","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"postId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nftId","type":"uint256"},{"indexed":false,"internalType":"address","name":"author","type":"address"}],"name":"NewPost","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"string","name":"newName","type":"string"},{"indexed":false,"internalType":"bool","name":"isPaid","type":"bool"}],"name":"NicknameChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"postId","type":"uint256"}],"name":"Sawer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"follower","type":"address"},{"indexed":true,"internalType":"address","name":"unfollowed","type":"address"}],"name":"Unfollowed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"blocker","type":"address"},{"indexed":true,"internalType":"address","name":"blocked","type":"address"}],"name":"UserBlocked","type":"event"},{"inputs":[],"name":"MAX_FREE_CHANGES","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"string","name":"_text","type":"string"},{"internalType":"string","name":"_imageURI","type":"string"}],"name":"addComment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_target","type":"address"}],"name":"blockUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newNickname","type":"string"}],"name":"changeNickname","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"_imgURI","type":"string"},{"internalType":"string","name":"_metaURI","type":"string"},{"internalType":"string","name":"_caption","type":"string"}],"name":"createPost","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"dislikePost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postIndex","type":"uint256"},{"internalType":"uint256","name":"_commentIndex","type":"uint256"},{"internalType":"string","name":"_newText","type":"string"}],"name":"editComment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdrawETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_target","type":"address"}],"name":"followUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"followerList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"followingList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllPosts","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"nftId","type":"uint256"},{"internalType":"address","name":"author","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"},{"internalType":"string","name":"imageURI","type":"string"},{"internalType":"string","name":"caption","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"likeCount","type":"uint256"},{"internalType":"uint256","name":"dislikeCount","type":"uint256"},{"internalType":"uint256","name":"commentCount","type":"uint256"},{"internalType":"uint256","name":"totalRatingScore","type":"uint256"},{"internalType":"uint256","name":"ratingCount","type":"uint256"}],"internalType":"struct PutramasOfficialWayangNusantara.Post[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postIndex","type":"uint256"}],"name":"getComments","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"commenter","type":"address"},{"internalType":"string","name":"text","type":"string"},{"internalType":"string","name":"imageURI","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"internalType":"struct PutramasOfficialWayangNusantara.Comment[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getFollowCounts","outputs":[{"internalType":"uint256","name":"followersCount","type":"uint256"},{"internalType":"uint256","name":"followingCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMyFeed","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"nftId","type":"uint256"},{"internalType":"address","name":"author","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"},{"internalType":"string","name":"imageURI","type":"string"},{"internalType":"string","name":"caption","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"likeCount","type":"uint256"},{"internalType":"uint256","name":"dislikeCount","type":"uint256"},{"internalType":"uint256","name":"commentCount","type":"uint256"},{"internalType":"uint256","name":"totalRatingScore","type":"uint256"},{"internalType":"uint256","name":"ratingCount","type":"uint256"}],"internalType":"struct PutramasOfficialWayangNusantara.Post[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMyNotifications","outputs":[{"components":[{"internalType":"address","name":"actor","type":"address"},{"internalType":"string","name":"actionType","type":"string"},{"internalType":"uint256","name":"postId","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bool","name":"isRead","type":"bool"}],"internalType":"struct PutramasOfficialWayangNusantara.Notification[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getProfile","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"nickname","type":"string"},{"internalType":"string","name":"fotoProfil","type":"string"},{"internalType":"string","name":"bio","type":"string"},{"internalType":"string","name":"lokasi","type":"string"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"bool","name":"isRegistered","type":"bool"},{"internalType":"uint256","name":"nameChangeCount","type":"uint256"}],"internalType":"struct PutramasOfficialWayangNusantara.UserProfile","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getProfileById","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"nickname","type":"string"},{"internalType":"string","name":"fotoProfil","type":"string"},{"internalType":"string","name":"bio","type":"string"},{"internalType":"string","name":"lokasi","type":"string"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"bool","name":"isRegistered","type":"bool"},{"internalType":"uint256","name":"nameChangeCount","type":"uint256"}],"internalType":"struct PutramasOfficialWayangNusantara.UserProfile","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserPosts","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"nftId","type":"uint256"},{"internalType":"address","name":"author","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"},{"internalType":"string","name":"imageURI","type":"string"},{"internalType":"string","name":"caption","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"likeCount","type":"uint256"},{"internalType":"uint256","name":"dislikeCount","type":"uint256"},{"internalType":"uint256","name":"commentCount","type":"uint256"},{"internalType":"uint256","name":"totalRatingScore","type":"uint256"},{"internalType":"uint256","name":"ratingCount","type":"uint256"}],"internalType":"struct PutramasOfficialWayangNusantara.Post[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"hasBlocked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"hasDisliked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"hasLiked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"idToWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ownerAddr","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"isFollowing","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"likePost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nicknamePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"postComments","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"commenter","type":"address"},{"internalType":"string","name":"text","type":"string"},{"internalType":"string","name":"imageURI","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"posts","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"nftId","type":"uint256"},{"internalType":"address","name":"author","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"},{"internalType":"string","name":"imageURI","type":"string"},{"internalType":"string","name":"caption","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"likeCount","type":"uint256"},{"internalType":"uint256","name":"dislikeCount","type":"uint256"},{"internalType":"uint256","name":"commentCount","type":"uint256"},{"internalType":"uint256","name":"totalRatingScore","type":"uint256"},{"internalType":"uint256","name":"ratingCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint8","name":"_bintang","type":"uint8"}],"name":"ratePost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_nickname","type":"string"},{"internalType":"string","name":"_foto","type":"string"},{"internalType":"string","name":"_bio","type":"string"},{"internalType":"string","name":"_lokasi","type":"string"}],"name":"registerProfile","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"sawerPost","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newPrice","type":"uint256"}],"name":"setNicknamePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_target","type":"address"}],"name":"unfollowUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_foto","type":"string"},{"internalType":"string","name":"_bio","type":"string"},{"internalType":"string","name":"_lokasi","type":"string"}],"name":"updateBioAndPhoto","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_nickname","type":"string"},{"internalType":"string","name":"_foto","type":"string"},{"internalType":"string","name":"_bio","type":"string"},{"internalType":"string","name":"_lokasi","type":"string"}],"name":"updateProfile","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"userCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userNotifications","outputs":[{"internalType":"address","name":"actor","type":"address"},{"internalType":"string","name":"actionType","type":"string"},{"internalType":"uint256","name":"postId","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bool","name":"isRead","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userRating","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"nickname","type":"string"},{"internalType":"string","name":"fotoProfil","type":"string"},{"internalType":"string","name":"bio","type":"string"},{"internalType":"string","name":"lokasi","type":"string"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"bool","name":"isRegistered","type":"bool"},{"internalType":"uint256","name":"nameChangeCount","type":"uint256"}],"stateMutability":"view","type":"function"}];

let state = { provider: null, signer: null, userAddress: null, contract: null };

// ==========================================
// 2. ROUTER HALAMAN (INI YANG MEMPERBAIKI BUG MACET)
// ==========================================
async function runPageSpecificLogic() {
    const path = window.location.pathname;
    const params = new URLSearchParams(window.location.search);

    console.log("📂 Routing ke:", path);

    // A. LOGIKA PROFILE
    if (path.includes("profile.html")) {
        // Cek apakah lihat profil sendiri atau orang lain
        const targetAddr = params.get('addr') || state.userAddress;
        if (typeof loadProfile === "function") await loadProfile(targetAddr);
    } 
    // B. LOGIKA RESULT (PENCARIAN)
    else if (path.includes("result.html")) {
        const query = params.get('q');
        if (typeof performSearch === "function" && query) await performSearch(query);
        else if (typeof loadResults === "function") await loadResults();
    }
    // C. LOGIKA NOTIFICATIONS
    else if (path.includes("notifications.html")) {
        if (typeof loadNotifications === "function") await loadNotifications();
    }
    // D. LOGIKA HOME (DEFAULT)
    else if (path.includes("home.html") || path === "/") {
        if (typeof loadFeed === "function") await loadFeed();
    }

    // Update Global UI (Badge, dll)
    if (typeof updateNotifBadge === "function") updateNotifBadge();
}

// ==========================================
// 3. STARTUP & SESSION
// ==========================================
async function initApp() {
    setupWalletListeners();
    await checkSession();
}

function setupWalletListeners() {
    if (!window.ethereum) return;
    window.ethereum.on("accountsChanged", () => {
        localStorage.removeItem("putramas_session");
        location.reload();
    });
    window.ethereum.on("chainChanged", () => window.location.reload());
}

async function checkSession() {
    console.log("🔄 Cek Sesi...");
    const sessionRaw = localStorage.getItem("putramas_session");
    if (!sessionRaw) return false;

    try {
        const session = JSON.parse(sessionRaw);
        if (Date.now() > session.expiry) {
            localStorage.removeItem("putramas_session");
            return false;
        }

        if (!window.ethereum) return false;

        // Init Provider & Silent Check
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.listAccounts();
        
        if (accounts.length === 0) return false; // Wallet terkunci

        // Validasi Akun
        if (accounts[0].toLowerCase() !== session.address.toLowerCase()) {
            localStorage.removeItem("putramas_session");
            return false;
        }

        // Setup State
        const signer = provider.getSigner();
        updateGlobalState(provider, signer, accounts[0]);

        console.log("✅ KONEKSI PULIH:", state.userAddress);

        // --- PANGGIL ROUTER (Supaya Result/Profile jalan) ---
        await runPageSpecificLogic();
        
        return true;

    } catch (err) {
        console.error("Session Error:", err);
        return false;
    }
}

// ==========================================
// 4. KONEKSI MANUAL & AUTH FLOW
// ==========================================
async function connectWallet() {
    if (!window.ethereum) return showToast("No Metamask!", "error");
    
    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        
        const { chainId } = await provider.getNetwork();
        if (chainId !== CONFIG.CHAIN_ID) await switchNetwork();

        const signer = provider.getSigner();
        const address = await signer.getAddress();
        
        updateGlobalState(provider, signer, address);
        await handleAuthFlow(address);

    } catch (err) {
        showToast(err.message, "error");
    }
}

async function handleAuthFlow(address) {
    try {
        // Cek user di blockchain
        const profile = await state.contract.users(address);
        
        if (profile.isRegistered === true || profile[6] === true) {
            await saveSession(address);
            
            // --- FIX REDIRECT ---
            // Hanya redirect ke home JIKA user di halaman index/landing
            // Jika user sedang di Result/Profile, JANGAN di-redirect (refresh saja)
            const path = window.location.pathname;
            if (path.includes("index.html") || path === "/" || path.endsWith("/ptms/")) {
                window.location.href = "home.html";
            } else {
                window.location.reload(); // Refresh halaman saat ini agar data muncul
            }
        } else {
            window.location.href = "register.html";
        }
    } catch(e) {
        console.error(e);
        showToast("Gagal cek user", "error");
    }
}

async function saveSession(address) {
    localStorage.removeItem("putramas_session");
    try {
        const msg = `Login Putramas Social\nUser: ${address}\nTimestamp: ${Date.now()}`;
        await state.signer.signMessage(msg);
        
        const session = { address, expiry: Date.now() + CONFIG.SESSION_DURATION };
        localStorage.setItem("putramas_session", JSON.stringify(session));
        showToast("Login Berhasil!", "success");
    } catch(e) {
        showToast("Login Dibatalkan", "error");
    }
}

// ==========================================
// 5. HELPER & UTILS
// ==========================================
function updateGlobalState(prov, sig, addr) {
    state.provider = prov;
    state.signer = sig;
    state.userAddress = addr;
    // Setup Contract
    if(CONTRACT_ABI.length > 0) {
        state.contract = new ethers.Contract(CONFIG.ADDRESS, CONTRACT_ABI, sig);
        // Mapping ke variabel global lama (backward compatibility)
        window.contract = state.contract;
        window.userAddress = state.userAddress;
        contract = state.contract; 
        userAddress = state.userAddress;
    }
}

async function switchNetwork() {
    try {
        await window.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: CONFIG.HEX_CHAIN_ID }] });
    } catch (e) {
        if (e.code === 4902) {
            await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{ chainId: CONFIG.HEX_CHAIN_ID, chainName: 'Base Sepolia', rpcUrls: [CONFIG.RPC_URL], nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 }, blockExplorerUrls: ['https://sepolia.basescan.org'] }]
            });
        }
    }
}

function disconnect() {
    localStorage.removeItem("putramas_session");
    window.location.href = "index.html";
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
