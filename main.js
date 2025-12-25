// --- KONFIGURASI ---
const CONTRACT_ADDRESS = "0x0753d3a9f7cb7eD9De233a319d4AD9fF60A434B2"; // <-- ISI INI SETELAH DEPLOY
const RPC_URL = "https://sepolia.base.org";
const CHAIN_ID = 84532;
const HEX_CHAIN_ID = "0x14a34";
const SESSION_DURATION = 90 * 24 * 60 * 60 * 1000; // 3 Bulan

// ABI SINGKAT (Sesuaikan dengan fitur yang dipakai di frontend)
const CONTRACT_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"follower","type":"address"},{"indexed":true,"internalType":"address","name":"followed","type":"address"}],"name":"Followed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"string","name":"action","type":"string"}],"name":"NewInteraction","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"postId","type":"uint256"},{"indexed":true,"internalType":"address","name":"author","type":"address"}],"name":"NewPost","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"postId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nftId","type":"uint256"},{"indexed":false,"internalType":"address","name":"author","type":"address"}],"name":"NewPost","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"string","name":"newName","type":"string"},{"indexed":false,"internalType":"bool","name":"isPaid","type":"bool"}],"name":"NicknameChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"postId","type":"uint256"}],"name":"Sawer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"follower","type":"address"},{"indexed":true,"internalType":"address","name":"unfollowed","type":"address"}],"name":"Unfollowed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"blocker","type":"address"},{"indexed":true,"internalType":"address","name":"blocked","type":"address"}],"name":"UserBlocked","type":"event"},{"inputs":[],"name":"MAX_FREE_CHANGES","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"string","name":"_text","type":"string"},{"internalType":"string","name":"_imageURI","type":"string"}],"name":"addComment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_target","type":"address"}],"name":"blockUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newNickname","type":"string"}],"name":"changeNickname","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"_imgURI","type":"string"},{"internalType":"string","name":"_metaURI","type":"string"},{"internalType":"string","name":"_caption","type":"string"}],"name":"createPost","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"dislikePost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postIndex","type":"uint256"},{"internalType":"uint256","name":"_commentIndex","type":"uint256"},{"internalType":"string","name":"_newText","type":"string"}],"name":"editComment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdrawETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_target","type":"address"}],"name":"followUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"followerList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"followingList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllPosts","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"nftId","type":"uint256"},{"internalType":"address","name":"author","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"},{"internalType":"string","name":"imageURI","type":"string"},{"internalType":"string","name":"caption","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"likeCount","type":"uint256"},{"internalType":"uint256","name":"dislikeCount","type":"uint256"},{"internalType":"uint256","name":"commentCount","type":"uint256"},{"internalType":"uint256","name":"totalRatingScore","type":"uint256"},{"internalType":"uint256","name":"ratingCount","type":"uint256"}],"internalType":"struct PutramasOfficialWayangNusantara.Post[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_postIndex","type":"uint256"}],"name":"getComments","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"commenter","type":"address"},{"internalType":"string","name":"text","type":"string"},{"internalType":"string","name":"imageURI","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"internalType":"struct PutramasOfficialWayangNusantara.Comment[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getFollowCounts","outputs":[{"internalType":"uint256","name":"followersCount","type":"uint256"},{"internalType":"uint256","name":"followingCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMyFeed","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"nftId","type":"uint256"},{"internalType":"address","name":"author","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"},{"internalType":"string","name":"imageURI","type":"string"},{"internalType":"string","name":"caption","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"likeCount","type":"uint256"},{"internalType":"uint256","name":"dislikeCount","type":"uint256"},{"internalType":"uint256","name":"commentCount","type":"uint256"},{"internalType":"uint256","name":"totalRatingScore","type":"uint256"},{"internalType":"uint256","name":"ratingCount","type":"uint256"}],"internalType":"struct PutramasOfficialWayangNusantara.Post[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMyNotifications","outputs":[{"components":[{"internalType":"address","name":"actor","type":"address"},{"internalType":"string","name":"actionType","type":"string"},{"internalType":"uint256","name":"postId","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bool","name":"isRead","type":"bool"}],"internalType":"struct PutramasOfficialWayangNusantara.Notification[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getProfile","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"nickname","type":"string"},{"internalType":"string","name":"fotoProfil","type":"string"},{"internalType":"string","name":"bio","type":"string"},{"internalType":"string","name":"lokasi","type":"string"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"bool","name":"isRegistered","type":"bool"},{"internalType":"uint256","name":"nameChangeCount","type":"uint256"}],"internalType":"struct PutramasOfficialWayangNusantara.UserProfile","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getProfileById","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"nickname","type":"string"},{"internalType":"string","name":"fotoProfil","type":"string"},{"internalType":"string","name":"bio","type":"string"},{"internalType":"string","name":"lokasi","type":"string"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"bool","name":"isRegistered","type":"bool"},{"internalType":"uint256","name":"nameChangeCount","type":"uint256"}],"internalType":"struct PutramasOfficialWayangNusantara.UserProfile","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserPosts","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"nftId","type":"uint256"},{"internalType":"address","name":"author","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"},{"internalType":"string","name":"imageURI","type":"string"},{"internalType":"string","name":"caption","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"likeCount","type":"uint256"},{"internalType":"uint256","name":"dislikeCount","type":"uint256"},{"internalType":"uint256","name":"commentCount","type":"uint256"},{"internalType":"uint256","name":"totalRatingScore","type":"uint256"},{"internalType":"uint256","name":"ratingCount","type":"uint256"}],"internalType":"struct PutramasOfficialWayangNusantara.Post[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"hasBlocked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"hasDisliked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"hasLiked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"idToWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ownerAddr","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"isFollowing","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"likePost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nicknamePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"postComments","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"commenter","type":"address"},{"internalType":"string","name":"text","type":"string"},{"internalType":"string","name":"imageURI","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"posts","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"nftId","type":"uint256"},{"internalType":"address","name":"author","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"},{"internalType":"string","name":"imageURI","type":"string"},{"internalType":"string","name":"caption","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"likeCount","type":"uint256"},{"internalType":"uint256","name":"dislikeCount","type":"uint256"},{"internalType":"uint256","name":"commentCount","type":"uint256"},{"internalType":"uint256","name":"totalRatingScore","type":"uint256"},{"internalType":"uint256","name":"ratingCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint8","name":"_bintang","type":"uint8"}],"name":"ratePost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_nickname","type":"string"},{"internalType":"string","name":"_foto","type":"string"},{"internalType":"string","name":"_bio","type":"string"},{"internalType":"string","name":"_lokasi","type":"string"}],"name":"registerProfile","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"sawerPost","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newPrice","type":"uint256"}],"name":"setNicknamePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_target","type":"address"}],"name":"unfollowUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_foto","type":"string"},{"internalType":"string","name":"_bio","type":"string"},{"internalType":"string","name":"_lokasi","type":"string"}],"name":"updateBioAndPhoto","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_nickname","type":"string"},{"internalType":"string","name":"_foto","type":"string"},{"internalType":"string","name":"_bio","type":"string"},{"internalType":"string","name":"_lokasi","type":"string"}],"name":"updateProfile","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"userCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userNotifications","outputs":[{"internalType":"address","name":"actor","type":"address"},{"internalType":"string","name":"actionType","type":"string"},{"internalType":"uint256","name":"postId","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bool","name":"isRead","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userRating","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"nickname","type":"string"},{"internalType":"string","name":"fotoProfil","type":"string"},{"internalType":"string","name":"bio","type":"string"},{"internalType":"string","name":"lokasi","type":"string"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"bool","name":"isRegistered","type":"bool"},{"internalType":"uint256","name":"nameChangeCount","type":"uint256"}],"stateMutability":"view","type":"function"}];
    
let provider, signer, userAddress, contract;
let pendingNftData = null;
let allLoadedPosts = [];
let currentFeedMode = 'global';

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

async function submitPost() {
    const caption = document.getElementById("mainCaption").value;

    // SKENARIO A: POSTING NFT (WAYANG)
    if (pendingNftData) {
        try {
            showToast("1/3 Upload Gambar ke IPFS...", "info");
            // 1. Upload Gambar
            const imgCid = await uploadToIPFS(pendingNftData.file);
            // 2. Buat JSON Metadata
            showToast("2/3 Mencetak Metadata...", "info");
            const metadata = {
                name: pendingNftData.name,
                description: caption, // Caption jadi deskripsi NFT
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
            const blob = new Blob([JSON.stringify(metadata)], { type: 'application/json' });
            const metaFile = new File([blob], "metadata.json");
            const metaCid = await uploadToIPFS(metaFile);
            // 4. Kirim ke Blockchain (Bayar 0.0001 ETH)
            showToast("3/3 Konfirmasi Wallet (0.0001 ETH)...", "info");
            // PARAMETER BARU: (imgURI, metaURI, caption) + VALUE
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
            setTimeout(() => location.reload(), 2000); // Refresh halaman

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
            // Parameter: Image Kosong, Meta Kosong, Caption
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

// 1. Fungsi Buka Modal
function openNftModal() {
    document.getElementById("nftModal").showModal();
}

// 2. Fungsi Preview Nama File (Dipanggil saat user pilih foto)
function previewInModal(input) {
    if (input.files && input.files[0]) {
        document.getElementById("modalFilePreview").innerText = "File Terpilih: " + input.files[0].name;
    } else {
        document.getElementById("modalFilePreview").innerText = "";
    }
}

// 3. FUNGSI SIMPAN DRAFT (PENTING: Menangani Dropdown)
function saveNftDraft() {
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

    // C. Ambil Nilai dari Dropdown (Select)
    // .value akan mengambil atribut 'value' dari <option> yang dipilih
    const golongan = document.getElementById("mGolongan").value;
    const gaya = document.getElementById("mGaya").value;

    // D. Simpan ke Variabel Global (pendingNftData)
    pendingNftData = {
        name: nameInput.value,
        file: fileInput.files[0],
        attributes: {
            // Jika user tidak memilih dropdown (masih default), simpan sebagai "-"
            golongan: golongan || "-", 
            gaya: gaya || "-",
            
            // Ambil input teks lainnya
            bahan: document.getElementById("mBahan").value || "-",
            gapit: document.getElementById("mGapit").value || "-",
            penatah: document.getElementById("mPenatah").value || "-",
            penyungging: document.getElementById("mPenyungging").value || "-",
            tahun: document.getElementById("mTahun").value || "-",
            kolektor: document.getElementById("mKolektor").value || "-"
        }
    };

    // E. Update Tampilan Utama (Indikator Hijau)
    document.getElementById("nftModal").close(); // Tutup modal
    
    // Tampilkan indikator bahwa data siap dikirim (Pastikan elemen ini ada di home.html)
    const indicator = document.getElementById("nftReadyIndicator");
    const previewName = document.getElementById("nftFilenamePreview");
    
    if (indicator) indicator.style.display = "block";
    if (previewName) previewName.innerText = `(${pendingNftData.name})`;
    
    showToast("Data Arsip Tersimpan! Klik tombol KIRIM untuk memproses.", "success");
}

// 4. FUNGSI BATAL / RESET FORM
function cancelNft() {
    pendingNftData = null;

    // Sembunyikan Indikator
    const indicator = document.getElementById("nftReadyIndicator");
    if (indicator) indicator.style.display = "none";

    // Reset Input File & Nama
    document.getElementById("modalFileInput").value = "";
    document.getElementById("modalFilePreview").innerText = "";
    document.getElementById("mName").value = "";

    // Reset Dropdown kembali ke "Pilih" (Index 0)
    document.getElementById("mGolongan").selectedIndex = 0;
    document.getElementById("mGaya").selectedIndex = 0;

    // Reset Input Teks Lainnya
    const textIds = ['mBahan', 'mGapit', 'mPenatah', 'mPenyungging', 'mTahun', 'mKolektor'];
    textIds.forEach(id => {
        document.getElementById(id).value = "";
    });

    showToast("Mode Arsip Dibatalkan.", "info");
}

// --- 1. FUNGSI PENCETAK KARTU (Helper) ---
// Fungsi ini tugasnya cuma satu: Bikin HTML Kartu Postingan
function generatePostCard(post) {
    // A. Logika Gambar
    let imgHtml = "";
    if(post.imageURI && post.imageURI.length > 5) {
        const rawUrl = post.imageURI.replace('ipfs://', 'https://gateway.pinata.cloud/ipfs/');          
        const optUrl = `https://wsrv.nl/?url=${encodeURIComponent(rawUrl)}&w=600&q=80&output=webp`; 
        // Link ke Koleksi
        imgHtml = `
        <div style="margin-top:10px; margin-bottom:10px;">
            <a href="koleksi.html?id=${post.id}">
                <img src="${optUrl}" class="post-image" loading="lazy" style="width:100%; border-radius:8px; display:block; min-height:200px; background:#f0f0f0;">
            </a>
        </div>`;
    }

    // B. Variabel Pendukung
    const avgRating = post.ratingCount > 0 ? (post.totalRatingScore / post.ratingCount).toFixed(1) : "0.0";
    const profileLink = `profile.html?addr=${post.author}`;
    const nftBadge = post.nftId > 0 ? `<span style="background:#d4af37; color:white; padding:2px 6px; border-radius:4px; font-size:10px; margin-left:5px;">NFT #${post.nftId}</span>` : "";

    // C. Template HTML
    return `
    <div class="card" id="post-${post.id}" style="padding: 15px; margin-bottom: 20px;">
        <div class="post-header" style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
            <a href="${profileLink}">
                <img src="https://via.placeholder.com/40" class="user-avatar author-avatar-${post.author}" 
                     style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover; border: 1px solid #eee;">
            </a>
            <div class="post-info">
                <a href="${profileLink}" class="author-nick-${post.author}" 
                   style="text-decoration: none; color: #333; font-weight: bold; font-size: 14px;">
                    ${post.author.substring(0,6)}...
                </a>
                <div style="font-size: 11px; color: #999;">
                    ${new Date(post.timestamp * 1000).toLocaleString()} ${nftBadge}
                </div>
            </div>
        </div>
        
        <div class="post-caption" style="margin-bottom:10px; font-size:14px; line-height:1.5;">${post.caption}</div>
        ${imgHtml}
        <div class="post-actions" style="border-top:1px solid #eee; padding-top:10px; margin-top:5px; display:flex; justify-content:space-around; align-items:center;">
             <button class="action-btn" onclick="handleLike(${post.id})" style="background:none; border:none; cursor:pointer; color:#666; display:flex; gap:5px; align-items:center;">
                <i class="fa-regular fa-heart" id="icon-like-${post.id}"></i> 
                <span id="count-like-${post.id}">${post.likeCount}</span>
             </button>
             <button class="action-btn" onclick="openComments(${post.id})" style="background:none; border:none; cursor:pointer; color:#666; display:flex; gap:5px; align-items:center;">
                <i class="fa-regular fa-comment"></i> ${post.commentCount}
             </button>
             <button class="action-btn" onclick="openSawerModal(${post.id})" style="background:none; border:none; cursor:pointer; color:#666;" title="Sawer">
                <i class="fa-solid fa-gift"></i>
             </button>
             <button class="action-btn" onclick="openRating(${post.id})" style="background:none; border:none; cursor:pointer; color:666; display:flex; gap:5px; align-items:center;">
                <i class="fa-solid fa-star"></i> ${avgRating}
             </button>
        </div>
    </div>`;
}

// --- 2. FUNGSI LOAD FEED (YANG SUDAH DIUPDATE) ---
async function loadFeed() {
    try {
        const posts = await contract.getAllPosts();
        // [UPDATE] Simpan data ke variabel global untuk pencarian
        allLoadedPosts = posts; 
        const container = document.getElementById("feedContainer");
        container.innerHTML = "";
        if(posts.length === 0) {
            container.innerHTML = "<p style='text-align:center; color:#999; margin-top:20px;'>Belum ada postingan.</p>";
            return;
        }

        // Loop dan Render menggunakan Fungsi Helper tadi
        [...posts].reverse().forEach(post => {
            container.innerHTML += generatePostCard(post);
            // Panggil lazy load profil
            fetchProfileLazy(post.author);
        });

    } catch (e) {
        console.error(e);
    }
}

// --- 3. FUNGSI SEARCH (LOGIKA PENCARIAN) ---
function handleSearch() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const btnClear = document.getElementById("btnClearSearch");
    const container = document.getElementById("feedContainer");

    // Tombol X
    if (query.length > 0) btnClear.style.display = "block";
    else btnClear.style.display = "none";
    // Jika kosong, load ulang semua data dari backup
    if (query.length === 0) {
        container.innerHTML = "";
        [...allLoadedPosts].reverse().forEach(post => {
            container.innerHTML += generatePostCard(post);
            fetchProfileLazy(post.author);
        });
        return;
    }

    // Filter Data (Cari di Caption ATAU Wallet Author)
    const filtered = allLoadedPosts.filter(post => {
        const textMatch = post.caption.toLowerCase().includes(query);
        const authorMatch = post.author.toLowerCase().includes(query);
        return textMatch || authorMatch;
    });

    // Render Hasil Pencarian
    container.innerHTML = "";
    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="text-align:center; padding:40px; color:#999;">
                <i class="fa-solid fa-satellite-dish fa-beat-fade fa-2x" style="--fa-animation-duration: 2s; color: #7385a5;"></i>
                <br><br>
                <span style="font-size:14px; font-weight:bold;">Sinyal Hilang...</span><br>
                <span style="font-size:12px;">Tidak ditemukan data wayang dengan nama tersebut.</span>
            </div>`;
        return;
    }

    container.innerHTML = `<p style="font-size:12px; color:#999; margin-bottom:15px; text-align:center;">Ditemukan ${filtered.length} hasil pencarian</p>`;
    // Render ulang yang cocok saja
    [...filtered].reverse().forEach(post => {
        container.innerHTML += generatePostCard(post);
        fetchProfileLazy(post.author);
    });
}

function clearSearch() {
    document.getElementById("searchInput").value = "";
    handleSearch(); // Reset
}

// 1. FUNGSI GANTI TAB
function switchFeed(mode) {
    currentFeedMode = mode;
    // Ubah Tampilan Tab Active
    const tFriends = document.getElementById("tabFriends");
    const tGlobal = document.getElementById("tabGlobal");

    if(mode === 'global') {
        tGlobal.style.color = "#8b4513";
        tGlobal.style.borderBottomColor = "#8b4513";
        tFriends.style.color = "#999";
        tFriends.style.borderBottomColor = "transparent";
    } else {
        tFriends.style.color = "#8b4513";
        tFriends.style.borderBottomColor = "#8b4513";
        tGlobal.style.color = "#999";
        tGlobal.style.borderBottomColor = "transparent";
    }
    // Reload Feed sesuai mode
    loadFeed();
}

// 2. FUNGSI LOAD FEED (UPGRADE)
async function loadFeed() {
    const container = document.getElementById("feedContainer");
    // Loading State
    container.innerHTML = `
        <div style="text-align: center; padding: 40px; color: #999;">
            <i class="fa-solid fa-circle-notch fa-spin fa-2x"></i><br><br>
            Sedang memuat...
        </div>`;
    
    try {
        let posts = [];
        // CEK MODE: Ambil data dari fungsi kontrak yang berbeda
        if (currentFeedMode === 'friends') {
            // HANYA YANG DIFOLLOW
            posts = await contract.getMyFeed();
        } else {
            // SEMUA ORANG (GLOBAL)
            posts = await contract.getAllPosts();
        }

        // Backup untuk fitur search
        allLoadedPosts = posts; 
        container.innerHTML = "";
        if(posts.length === 0) {
            const msg = currentFeedMode === 'friends' 
                ? "Anda belum mengikuti siapapun, atau teman Anda belum memposting wayang." 
                : "Belum ada postingan di sistem.";
            container.innerHTML = `<p style='text-align:center; color:#999; margin-top:30px; padding:0 20px;'>${msg}</p>`;
            return;
        }

        // Render Loop
        [...posts].reverse().forEach(post => {
            container.innerHTML += generatePostCard(post);
            fetchProfileLazy(post.author);
        });

    } catch (e) {
        console.error(e);
        container.innerHTML = `<p style='text-align:center; color:red;'>Gagal memuat feed (Pastikan wallet terkoneksi).</p>`;
    }
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

// Jalankan otomatis setiap 10 detik agar realtime tanpa refresh
setInterval(updateNotifBadge, 10000);
