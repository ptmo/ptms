const PINATA_API_KEY = "4658f1eb70d0c8bcb9dc";    
    const PINATA_SECRET_KEY = "4cc702ab4f76139600b8e18c1f95166c9aefe4611b5c81cfeb5dc8b58c33dbf5";

    let userAddress = "";
    let toastTimeout;

    async function connectWallet() {
        if (!window.ethereum) return showToast("Install Metamask Dulu, Atau EVM Wallet Lainnya!", 'wolf');
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            userAddress = await signer.getAddress();
            
            const btn = document.getElementById("btn-connect");
            btn.innerText = userAddress.substring(0,6) + "...";
            btn.classList.add("connected");
        } catch (err) { console.error(err); showToast("Gagal koneksi: " + err.message, 'error'); }
    }

    async function uploadToIPFS(file) {
        const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
        let data = new FormData();
        data.append('file', file);
        const res = await axios.post(url, data, {
            headers: {'pinata_api_key': PINATA_API_KEY, 'pinata_secret_api_key': PINATA_SECRET_KEY, "Content-Type": "multipart/form-data"}
        });
        return `https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`;
    }

    async function uploadJSON(jsonData) {
        const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
        const res = await axios.post(url, jsonData, {
            headers: {'pinata_api_key': PINATA_API_KEY, 'pinata_secret_api_key': PINATA_SECRET_KEY}
        });
        return `ipfs://${res.data.IpfsHash}`;
    }

    async function kirimKeAdmin() {
        const statusEl = document.getElementById("statusPublik");
        
        if(!userAddress) return showToast("Wajib connect wallet dulu sebagai identitas pengirim!", 'warning');
        const nama = document.getElementById("inputNama").value;
        const file = document.getElementById("inputGambar").files[0];
        
        if(!nama || !file) return showToast("Nama dan Gambar wajib diisi!", 'error');

        try {
            statusEl.className = "status loading";
            statusEl.innerHTML = `
    <img src="img/load.svg" style="width: 20px; height: 20px; vertical-align: middle; margin-right: 10px;"> 
    Mengupload Aset ke Cloud...
`;
            const imgUrl = await uploadToIPFS(file);

            statusEl.innerHTML = `
    <img src="img/loading.svg" style="width: 20px; height: 20px; vertical-align: middle; margin-right: 10px;"> 
    Menyimpan Data Pengajuan...
`;
            const metadata = {
                name: nama,
                description: document.getElementById("inputDeskripsi").value,
                image: imgUrl,
                attributes: [
                    { trait_type: "Golongan", value: document.getElementById("inputGolongan").value },
                    { trait_type: "Gaya", value: document.getElementById("inputGaya").value },
                    { trait_type: "Wanda", value: document.getElementById("inputWanda").value || "-" },
                    { trait_type: "Material Kulit", value: document.getElementById("inputKulit").value || "-" },
                    { trait_type: "Pembuat", value: document.getElementById("inputPembuat").value || "-" },
                    { trait_type: "Ayah", value: document.getElementById("inputAyah").value || "-" },
                    { trait_type: "Ibu", value: document.getElementById("inputIbu").value || "-" },
                    { trait_type: "Negara", value: document.getElementById("inputNegara").value || "-" },
                    { trait_type: "Pusaka", value: document.getElementById("inputPusaka").value || "-" },
                    { trait_type: "Creator", value: userAddress },
                    { trait_type: "Status", value: "Community Submission" }
                ]
            };
            const tokenURI = await uploadJSON(metadata);
            const pengajuanBaru = {
                id: Date.now(),
                pengirim: userAddress,
                tokenURI: tokenURI,
                nama: nama,
                golongan: document.getElementById("inputGolongan").value,
                gaya: document.getElementById("inputGaya").value,
                tanggal: new Date().toLocaleString()
            };

            let inbox = JSON.parse(localStorage.getItem("wayang_inbox") || "[]");
            inbox.push(pengajuanBaru);
            localStorage.setItem("wayang_inbox", JSON.stringify(inbox));
            statusEl.className = "status success";
            statusEl.innerHTML = `✅ TERKIRIM KE ADMIN!<br>Data Anda sudah masuk antrian review.`;
            document.getElementById("inputNama").value = "";
            document.getElementById("inputGambar").value = "";

        } catch (err) {
            console.error(err);
            statusEl.className = "status error";
            statusEl.innerText = "Gagal: " + err.message;
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