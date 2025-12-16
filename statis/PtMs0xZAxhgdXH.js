document.getElementById("0xPtMsXzKyzAxcVbxH").innerHTML = `
<nav class="navbar">
        <div class="nav-left">
  <a href="index" style="display: flex; align-items: center; text-decoration: none;">
    <img src="img/icon-192.png" class="nav-logo" style="margin-right:8px;">
    <span class="nav-brand" style="font-size:20px; color: #7385a5; font-weight:bold;">Putramas Official</span>
  </a>
        </div>
        <div class="nav-right">
            <button id="btn-connect" onclick="connectWallet()">
    <img src="img/chain.svg" style="width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; margin-bottom: 2px;">
    Hubungkan
            </button>
        </div>
    </nav>

    <div class="main-container">
        
        <section class="hero-section">
    <div class="hero-content">
        <h1 class="hero-title">Wayang Nusantara</h1>
        <p class="hero-subtitle">Arsip Digital Galeri Wayang Nusantara</p>
        
        <button class="btn-upload-hero" onclick="window.location.href='upload_public'">
    <img src="img/up.svg" 
         style="width: 24px; height: 24px; vertical-align: middle; margin-right: 10px; filter: brightness(0) invert(1);">
    Upload Koleksi/Karya Anda
        </button>
    </div>
        </section>

        <div class="search-wrapper">
            <input type="text" id="searchInput" placeholder="🔍 Pencarian..." onkeyup="smartSearch()">
        </div>

<div class="tab-wrapper" id="tabContainer">
    <button class="tab-btn active" id="tab-official" onclick="switchTab('official')">Koleksi Putramas</button>
    <button class="tab-btn" id="tab-public" onclick="switchTab('public')">Galeri Nusantara</button>
</div>

<div class="filter-container" id="categoryContainer">
    <button class="btn-filter" onclick="filterKategori('Satria', this)">Satria</button>
    <button class="btn-filter" onclick="filterKategori('Dewa', this)">Dewa</button>
    <button class="btn-filter" onclick="filterKategori('Yaksa', this)">Yaksa</button>
    <button class="btn-filter" onclick="filterKategori('Wanara', this)">Wanara</button>
    <button class="btn-filter" onclick="filterKategori('Panakawan', this)">Panakawan</button>
    <button class="btn-filter" onclick="filterKategori('Kayon', this)">Kayon</button>
    <button class="btn-filter" onclick="filterKategori('Bambangan', this)">Bambangan</button>
    <button class="btn-filter" onclick="filterKategori('Punggawa', this)">Punggawa</button>
    <button class="btn-filter" onclick="filterKategori('Krodan', this)">Krodan</button>
    <button class="btn-filter" onclick="filterKategori('Resi', this)">Resi</button>
    <button class="btn-filter" onclick="filterKategori('Putren', this)">Putren</button>
    <button class="btn-filter" onclick="filterKategori('Buta Kiwe', this)">Buta Kiwe</button>
    <button class="btn-filter" onclick="filterKategori('Sato', this)">Sato</button>
    <button class="btn-filter" onclick="filterKategori('Gaman', this)">Gaman</button>
</div>

<div id="containerGaleri" class="galeri-grid">
    <p style="text-align: center; width: 100%; grid-column: 1/-1; color: #aaa;">Menunggu data...</p>
</div>

<div id="toast"></div>

</div> <footer class="footer">
        <div class="footer-content">
            <div class="social-icons">
                <a href="https://youtube.com/@PutramasOfficial" target="_blank" class="social-link"><i class="fab fa-youtube"></i></a>
                <a href="https://instagram.com/putramas_official" target="_blank" class="social-link"><i class="fab fa-instagram"></i></a>
                <a href="https://facebook.com/PutramasOfficial" target="_blank" class="social-link"><i class="fab fa-facebook-f"></i></a>
                <a href="https://facebook.com/PutramasOfficialStudio" target="_blank" class="social-link"><i class="fab fa-facebook-f"></i></a>
            </div>
            <p class="copyright">
                &copy; <span id="year"></span> Powered By <strong>Putramas Official</strong>
            </p>
        </div>
</footer>
`;