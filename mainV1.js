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
}, 10000);
