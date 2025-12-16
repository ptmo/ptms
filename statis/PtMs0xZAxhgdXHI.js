document.getElementById("0xPtMsXzKyzAxcVbxH").innerHTML = `
<nav class="navbar">
        <div class="nav-left">
  <a href="index" style="display: flex; align-items: center; text-decoration: none;">
    <img src="img/icon-192.png" class="nav-logo" style="margin-right:8px;">
    <span class="nav-brand" style="font-size:18px; color: #7385a5; font-weight:bold;">Putramas Official</span>
  </a>
        </div>
        <div class="nav-right">
            <button id="btn-connect" onclick="connectWallet()">
            <img src="img/chain.svg" style="width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; margin-bottom: 2px;">
            Hubungkan
            </button>
        </div>
</nav>
<div class="container">
    <div class="header">
        <h3>
    <img src="img/up.svg" style="width: 25px; height: 25px; vertical-align: middle; margin-right: 10px; margin-bottom: 4px;"> 
    Upload Ke Galeri Nusantara</h3>
    </div>
    
    <fieldset>
        <legend>1. Identitas Utama</legend>
        <label>Nama Tokoh:</label>
        <input type="text" id="inputNama" required placeholder="Contoh: Arjuna">
        
        <div style="display: flex; gap: 15px;">
            <div style="flex: 1;">
                <label>Golongan:</label>
                <select id="inputGolongan" required>
                    <option value="Satria">Satria</option>
                    <option value="Dewa">Dewa</option>
                    <option value="Yaksa">Yaksa</option>
                    <option value="Wanara">Wanara</option>
                    <option value="Panakawan">Panakawan</option>
                    <option value="Kayon">Kayon</option>
                    <option value="Bambangan">Bambangan</option>
                    <option value="Punggawa">Punggawa</option>
                    <option value="Krodan">Krodan</option>
                    <option value="Resi">Resi</option>
                    <option value="Putren">Putren</option>
                    <option value="Buta Kiwe">Buta Kiwe</option>
                    <option value="Sato">Sato</option>
                    <option value="Gaman">Gaman</option>
                </select>
            </div>
            <div style="flex: 1;">
                <label>Gaya:</label>
                <select id="inputGaya" required>
                    <option value="Yogyakarta">Yogyakarta</option>
                    <option value="Surakarta">Surakarta</option>
                    <option value="Cirebon">Cirebon</option>
                    <option value="Kedu">Kedu</option>
                    <option value="Banyumas">Banyumas</option>
                    <option value="Jawa Timur">Jawa Timur</option>
                    <option value="Jawa Barat">Golek Sunda</option>
                    <option value="Bali">Bali</option>
                    <option value="Banjar">Banjar</option>
                    <option value="Lombok">Lombok</option>
                    <option value="Lainnya">Lainnya</option>
                </select>
            </div>
        </div>
    </fieldset>

<fieldset>
        <legend>2. Detail Fisik</legend>
        <label>Wanda (Ekspresi):</label>
        <input type="text" id="inputWanda" required placeholder="Contoh: Rentang, Geger">
        <label>Material Kulit:</label>
        <input type="text" id="inputKulit" required placeholder="Contoh: Kerbau">
        <label>Nama Pembuat/Empu:</label>
        <input type="text" id="inputPembuat" required placeholder="Nama Empu">
    </fieldset>

    <fieldset>
        <legend>3. Silsilah</legend>
        <div style="display: flex; gap: 15px;">
            <div style="flex: 1;"><label>Ayah:</label><input type="text" id="inputAyah" required></div>
            <div style="flex: 1;"><label>Ibu:</label><input type="text" id="inputIbu" required></div>
        </div>
        <label>Negara/Tempat:</label>
        <input type="text" id="inputNegara" required placeholder="Contoh: Indraprasta">
        <label>Pusaka:</label>
        <input type="text" id="inputPusaka" required placeholder="Contoh: Bramasta">
    </fieldset>

    <fieldset>
        <legend>4. Media & Cerita</legend>
        <label>Deskripsi Singkat:</label>
        <textarea id="inputDeskripsi" required rows="3"></textarea>
        <label>Upload Foto:</label>
        <input type="file" id="inputGambar" required>
    </fieldset>

    <button class="btn-action" onclick="kirimKeAdmin()">KIRIM & UPLOAD</button>
    <div id="statusPublik"></div>
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
