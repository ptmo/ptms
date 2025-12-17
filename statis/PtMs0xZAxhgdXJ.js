const CONTRACT_ADDRESS = "0x5dfe8311e98b0443C471A10e26198b72355Ca713"; 
    
    const OFFICIAL_WALLET = "0x736fc1d7b9ad6b2e194717674cd57816d805d294"; 

    const BASE_SEPOLIA_ID = '0x14a34';
    const BASE_SEPOLIA_RPC = 'https://sepolia.base.org';
    const BASE_SEPOLIA_CONFIG = {
        chainId: BASE_SEPOLIA_ID, chainName: 'Base Sepolia Testnet',
        nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
        rpcUrls: [BASE_SEPOLIA_RPC], blockExplorerUrls: ['https://sepolia.basescan.org']
    };

    const CONTRACT_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"Liked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint8","name":"star","type":"uint8"},{"indexed":false,"internalType":"string","name":"ulasan","type":"string"}],"name":"Reviewed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"string","name":"nama","type":"string"},{"indexed":false,"internalType":"string","name":"golongan","type":"string"}],"name":"WayangLahir","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"string","name":"namaBaru","type":"string"},{"indexed":false,"internalType":"string","name":"uriBaru","type":"string"}],"name":"WayangUpdate","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_penerima","type":"address"},{"internalType":"string","name":"_tokenURI","type":"string"},{"internalType":"string","name":"_nama","type":"string"},{"internalType":"string","name":"_golongan","type":"string"},{"internalType":"string","name":"_gaya","type":"string"}],"name":"arsipWayang","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dalang","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getAverageRating","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"golongan","type":"string"}],"name":"getIdsByGolongan","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getInfoWayang","outputs":[{"components":[{"internalType":"string","name":"nama","type":"string"},{"internalType":"string","name":"golongan","type":"string"},{"internalType":"string","name":"gaya","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"}],"internalType":"struct WayangArsipPro.WayangInfo","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getReviews","outputs":[{"components":[{"internalType":"address","name":"reviewer","type":"address"},{"internalType":"uint8","name":"bintang","type":"uint8"},{"internalType":"string","name":"ulasan","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"internalType":"struct WayangArsipPro.Review[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"hasLiked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"hasReviewed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"kasihLike","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint8","name":"_bintang","type":"uint8"},{"internalType":"string","name":"_ulasanPilihan","type":"string"}],"name":"kasihUlasan","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"string","name":"_namaBaru","type":"string"},{"internalType":"string","name":"_uriBaru","type":"string"}],"name":"revisiDataWayang","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"totalLikes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"wayangRegistry","outputs":[{"internalType":"string","name":"nama","type":"string"},{"internalType":"string","name":"golongan","type":"string"},{"internalType":"string","name":"gaya","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"wayangReviews","outputs":[{"internalType":"address","name":"reviewer","type":"address"},{"internalType":"uint8","name":"bintang","type":"uint8"},{"internalType":"string","name":"ulasan","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"}];
    const BATCH_SIZE = 10;
    let provider, signer;
    let contractReader;
    let currentTab = 'official';
    let searchIndex = [];
    let isSearchReady = false;
    let searchRequestId = 0;
    let globalIds = [];
    let currentOffset = 0;
    let isFetchingBatch = false;
    let toastTimeout;

    window.onload = async function() {
        const readProvider = new ethers.providers.JsonRpcProvider(BASE_SEPOLIA_RPC);
        contractReader = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, readProvider);
        const btns = document.querySelectorAll('.btn-filter');
        if(btns.length > 0) btns[0].classList.add('active');
        loadGaleri(); 
        buildSearchIndex(); 
    };

async function buildSearchIndex() {
    console.log("Building Search Index...");
    searchIndex = [];
    const golongans = ['Satria', 'Dewa', 'Yaksa', 'Wanara', 'Panakawan', 'Kayon', 'Bambangan', 'Punggawa', 'Krodan', 'Resi', 'Putren', 'Buta Kiwe', 'Sato', 'Gaman'];

    try {
        const promises = golongans.map(async (gol) => {
            const ids = await contractReader.getIdsByGolongan(gol);
            const detailPromises = ids.map(async (id) => {
                try {
                    const info = await contractReader.getInfoWayang(id);
                    if (!info.isActive) return null;
                    return { 
                        id: id.toString(),
                        nama: info.nama.toLowerCase(), 
                        gaya: info.gaya.toLowerCase(), 
                        golongan: info.golongan
                    };
                } catch(e) { return null; }
            });

            return Promise.all(detailPromises);
        });

        const results = await Promise.all(promises);
        const flatResults = results.flat().filter(i => i !== null);
        searchIndex = [...new Map(flatResults.map(item => [item.id, item])).values()];
        isSearchReady = true;
        console.log(`✅ Index Ready: ${searchIndex.length} items.`);
        const searchInput = document.getElementById("searchInput");
        if (searchInput) {
            searchInput.placeholder = `🔍 Cari dari ${searchIndex.length} wayang...`;
        }

    } catch(e) { 
        console.error("Index failed:", e); 
    }
}

async function smartSearch() {
        const query = document.getElementById("searchInput").value.toLowerCase();
        const container = document.getElementById("containerGaleri");
        searchRequestId++; 
        const currentRequestId = searchRequestId;

        if (query.length === 0) {
            document.getElementById("tabContainer").style.display = "flex";
            document.getElementById("categoryContainer").style.display = "flex";
            loadGaleri();
            return;
        }
        
        document.getElementById("tabContainer").style.display = "none";
        document.getElementById("categoryContainer").style.display = "none";
        
        if (!isSearchReady) {
            container.innerHTML = `<p style="text-align:center; color:#80db80; grid-column: 1/-1;">
                <img src="https://i.gifer.com/ZZ5H.gif" style="width: 25px; height: 25px; vertical-align: middle; margin-right: 10px;"> 
                Menyiapkan data pencarian...
            </p>`;
            return;
        }

        const results = searchIndex.filter(w => 
            w.nama.toLowerCase().includes(query) || 
            w.gaya.toLowerCase().includes(query) || 
            String(w.id) === query
        );

        if (results.length === 0) {
            container.innerHTML = `<p style="text-align:center; color:#888; grid-column: 1/-1;">Tidak ditemukan hasil untuk "<b>${query}</b>"</p>`;
            return;
        }

        container.innerHTML = "";
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const limitedIds = results.slice(0, 20).map(r => r.id);
        await renderCards(limitedIds, container, true, currentRequestId);
    }

    function switchTab(tab) {
        currentTab = tab;
        document.getElementById('tab-official').className = tab === 'official' ? 'tab-btn active' : 'tab-btn';
        document.getElementById('tab-public').className = tab === 'public' ? 'tab-btn active' : 'tab-btn';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        loadGaleri();
    }

    function filterKategori(kategori, btnElement) {
        currentCategory = kategori;
        document.querySelectorAll('.btn-filter').forEach(b => b.classList.remove('active'));
        if(btnElement) btnElement.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        loadGaleri();
    }

async function loadGaleri() {
    document.getElementById("searchInput").value = "";

    searchRequestId++; 
    const currentRequestId = searchRequestId;
    const container = document.getElementById("containerGaleri");
    const titleTab = currentTab === 'official' ? "Koleksi Putramas" : "Galeri Nusantara";
    
    container.innerHTML = `<p style="text-align:center; color:#80db80; grid-column: 1/-1;">
        <img src="img/load.svg" style="width: 25px; height: 25px; vertical-align: middle; margin-right: 10px;"> 
        Memuat ${titleTab} (${currentCategory})...
    </p>`;

    try {
        const ids = await contractReader.getIdsByGolongan(currentCategory);
        
        if (searchRequestId !== currentRequestId) return;
        globalIds = ids.slice().reverse(); 
        currentOffset = 0;
        isFetchingBatch = false;

        if (globalIds.length === 0) {
            container.innerHTML = `<p style="text-align:center; color:#aaa; grid-column: 1/-1;">Belum ada koleksi di kategori ini.</p>`;
            return;
        }
        
        container.innerHTML = ""; 
        await loadNextBatch();

    } catch (err) {
        console.error(err);
        if (searchRequestId === currentRequestId) {
            container.innerHTML = `<p style="color:red; text-align:center; grid-column: 1/-1;">Gagal koneksi RPC.</p>`;
        }
    }
}

    async function loadNextBatch() {
    if (isFetchingBatch || currentOffset >= globalIds.length || document.getElementById("searchInput").value !== "") return;

    isFetchingBatch = true;
    const container = document.getElementById("containerGaleri");
    const loaderId = "loader-bottom";
    if (!document.getElementById(loaderId)) {
        container.insertAdjacentHTML('beforeend', `
            <p id="${loaderId}" style="text-align:center; grid-column: 1/-1; color:#888; font-style:italic; margin-top:20px;">
                <img src="img/loading.svg" style="width: 25px; height: 25px; vertical-align: middle; margin-right: 10px;"> Memuat data berikutnya...
            </p>
        `);
    }

    const batchIds = globalIds.slice(currentOffset, currentOffset + BATCH_SIZE);

    await renderCards(batchIds, container, false, searchRequestId);
    const loaderEl = document.getElementById(loaderId);
    if (loaderEl) loaderEl.remove();

    currentOffset += BATCH_SIZE;
    isFetchingBatch = false;

    if (container.children.length === 0 && currentOffset < globalIds.length) {
        loadNextBatch();
    }
}

async function renderCards(ids, container, isSearchMode, requestId) {
        const promises = ids.map(async (id) => {
            try {
                const [info, owner, likes, ratingRaw, uri] = await Promise.all([
                    contractReader.getInfoWayang(id),
                    contractReader.ownerOf(id),
                    contractReader.totalLikes(id),
                    contractReader.getAverageRating(id),
                    contractReader.tokenURI(id)
                ]);

                if (!info.isActive) return null;
                if (!isSearchMode) {
                    const isOwnerOfficial = (owner.toLowerCase() === OFFICIAL_WALLET.toLowerCase());
                    if (currentTab === 'official' && !isOwnerOfficial) return null;
                    if (currentTab === 'public' && isOwnerOfficial) return null;
                }

                const rating = ratingRaw > 0 ? (ratingRaw / 10).toFixed(1) : "N/A";
                const date = new Date(info.timestamp * 1000).toLocaleDateString("id-ID", { day: 'numeric', month: 'short', year: 'numeric' });
                const httpUri = uri ? uri.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/") : "https://via.placeholder.com/300";
                
                return { id, nama: info.nama, gaya: info.gaya, likes, rating, date, metaUrl: httpUri, owner };
            } catch (e) { return null; }
        });

        const results = await Promise.all(promises);

        if (searchRequestId !== requestId) return;
        const cleanResults = results.filter(item => item !== null);

        if (cleanResults.length === 0) {
            if (isSearchMode) {
                container.innerHTML = `<p style="text-align:center; color:#888; grid-column: 1/-1;">Tidak ada item ditemukan.</p>`;
            } 
            return;
        }

        for (const w of cleanResults) {
            let ownerBadge = "";
            const isOwnerOfficial = (w.owner.toLowerCase() === OFFICIAL_WALLET.toLowerCase());         
            if (isOwnerOfficial) {
                ownerBadge = `<div class="owner-badge" style="background:#f1c40f; color:black; border:1px solid #d35400;"> 
                👑 Official</div>`;
            } else {
                ownerBadge = `<div class="owner-badge" style="background:#3498db; color:white;">Oleh: ${w.owner.substring(0,6)}...</div>`;
            }

            const html = generateCardHTML(w, ownerBadge);

            container.insertAdjacentHTML('beforeend', html);
            if (typeof fetchOptimizedImage === "function") {
                fetchOptimizedImage(w.metaUrl, w.id);
            }
        }       
    }

function generateCardHTML(w, badge) {
    return `
        <a href="detail?id=${w.id}" class="wayang-card">
            <div class="wayang-img">
                ${badge}
                
                <div id="loader-${w.id}" class="img-loader">
                    <div class="spinner-circle"></div>
                </div>

                <img id="img-${w.id}" 
                     src="https://via.placeholder.com/300x400/2c3e50/2c3e50?text=." 
                     alt="${w.nama}" 
                     loading="lazy"
                     style="opacity: 0; transition: opacity 0.3s;">
                
                <div class="img-overlay-bar">
                    <div class="overlay-date">${w.date}</div>
                    <div class="overlay-stats">
                        <div class="stat-item">
                           <img src="img/lv.svg" style="width:14px; vertical-align:middle;"> ${w.likes}
                        </div>
                        <div class="stat-item">
                           <img src="img/str.svg" style="width:14px; vertical-align:middle;"> ${w.rating}
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="card-body">
                <div class="card-meta">
                    <span class="gaya-text">${w.gaya}</span>
                    <span class="date-text">#${w.id}</span>
                </div>
                <h3>${w.nama}</h3>
                <div class="stats-row">Klik untuk detail & ulasan</div>
            </div>
        </a>`;
}

// --- OPTIMIZED IMAGE LOADER DENGAN SPINNER ---
async function fetchOptimizedImage(metaUrl, id) {
    const imgEl = document.getElementById(`img-${id}`);
    const loaderEl = document.getElementById(`loader-${id}`); // Ambil elemen loader
    
    if (!imgEl) return;

    // Helper untuk menampilkan gambar & sembunyikan loader
    const showImage = (url) => {
        imgEl.src = url;
        imgEl.onload = () => {
            imgEl.style.opacity = 1;     // Munculkan Gambar
            if(loaderEl) loaderEl.style.display = 'none'; // Sembunyikan Spinner
        };
        // Jaga-jaga kalau onload ga jalan (misal ambil dari cache browser super cepat)
        if (imgEl.complete) {
            imgEl.style.opacity = 1;
            if(loaderEl) loaderEl.style.display = 'none';
        }
    };

    // 1. CEK CACHE LOCAL STORAGE
    const cacheKey = `wayang_img_${id}`;
    const cachedUrl = localStorage.getItem(cacheKey);

    if (cachedUrl) {
        showImage(cachedUrl);
        return;
    }

    // 2. DOWNLOAD BARU
    try {
        let fetchUrl = metaUrl;
        if (metaUrl.startsWith("ipfs://")) {
            fetchUrl = metaUrl.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/");
        }

        const res = await axios.get(fetchUrl, { timeout: 5000 });
        
        let rawImgUrl = res.data.image;
        if (rawImgUrl.startsWith("ipfs://")) {
            rawImgUrl = rawImgUrl.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/");
        }

        // Optimize URL (wsrv.nl)
        const optimizedUrl = `https://wsrv.nl/?url=${encodeURIComponent(rawImgUrl)}&w=300&q=75&output=webp`;

        // Simpan Cache
        localStorage.setItem(cacheKey, optimizedUrl);

        // Tampilkan
        showImage(optimizedUrl);

    } catch(e) { 
        console.warn("Gagal load gambar id " + id);
        if(loaderEl) loaderEl.innerHTML = '<span style="color:red; font-size:10px;">Gagal</span>'; // Info error
    }
}

// Helper Function untuk transisi halus
function loadImage(imgEl, url) {
    const tempImg = new Image();
    
    tempImg.onerror = () => {
        // Jika wsrv.nl gagal, coba load raw link dari cache/source (jika logic memungkinkan) atau biarkan placeholder
        console.warn("Gagal load gambar optimized");
    };

    tempImg.onload = () => {
        imgEl.src = url;
        imgEl.style.transition = "opacity 0.4s ease-out";
        imgEl.style.opacity = 1; 
    };
    
    tempImg.src = url;
}

    async function connectWallet() {
        if (!window.ethereum) return showToast("Install dahulu, Metamask tidak ditemukan!", 'wolf');
        try {
            provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);

            const network = await provider.getNetwork();
            if (network.chainId !== 84532) await switchNetwork();
            signer = provider.getSigner();
            const address = await signer.getAddress();
            document.getElementById("btn-connect").innerText = address.substring(0, 6) + "...";
            document.getElementById("btn-connect").classList.add("connected");
        } catch (err) { console.error(err); }
    }

    async function switchNetwork() {
        try {
            await window.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: BASE_SEPOLIA_ID }] });
        } catch (e) {
            if (e.code === 4902) await window.ethereum.request({ method: 'wallet_addEthereumChain', params: [BASE_SEPOLIA_CONFIG] });
        }
    }

    function showToast(msg, type = 'info') {
    const x = document.getElementById("toast");

    const icons = {
        info: 'img/info-icon.svg',
        load: 'img/load.svg',
        loading: 'img/loading.svg',
        success: 'img/success.svg',
        error: 'img/error.svg',
        warning: 'img/warning.svg',
        wolf: 'img/wolf.svg'
    };

    const closeIcon = 'img/x.svg'; 

    if (!icons[type]) type = 'info';

    x.innerHTML = `
        <img src="${icons[type]}" class="toast-icon" alt="${type}"> 
        <span style="flex:1;">${msg}</span>
        <img src="${closeIcon}" class="toast-close" onclick="this.parentElement.className = this.parentElement.className.replace('show', '')" alt="close">
    `;

    x.className = ''; 
    void x.offsetWidth; 
    x.className = `show ${type}`;

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => { 
        x.className = x.className.replace("show", ""); 
    }, 10000); 
    }

    document.getElementById("year").innerText = new Date().getFullYear();
    
    window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 200) {
        loadNextBatch();
    }
});
