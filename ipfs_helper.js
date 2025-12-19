// --- KONFIGURASI PINATA (ISI DENGAN PUNYA ANDA) ---
const PINATA_KEY = "ef370482b9db990f2b36";
const PINATA_SECRET = "ce1afc8cc8ad991c1140d1f63e5e58fa3d97fa7da9ab882230c5ca7bfe5877ce";

async function compressImage(file, maxSizeKB = 150) {
    if (file.size <= maxSizeKB * 1024) return file;
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
            const img = new Image();
            img.src = event.target.result;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;
                const MAX_DIMENSION = 800; 
                if (width > MAX_DIMENSION || height > MAX_DIMENSION) {
                    if (width > height) { height *= MAX_DIMENSION / width; width = MAX_DIMENSION; } 
                    else { width *= MAX_DIMENSION / height; height = MAX_DIMENSION; }
                }
                canvas.width = width; canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                
                let quality = 0.9;
                const tryCompress = () => {
                    canvas.toBlob((blob) => {
                        if (!blob) return reject("Gagal kompresi");
                        if (blob.size/1024 <= maxSizeKB || quality <= 0.5) {
                            resolve(new File([blob], file.name, { type: 'image/jpeg', lastModified: Date.now() }));
                        } else { quality -= 0.1; tryCompress(); }
                    }, 'image/jpeg', quality);
                };
                tryCompress();
            };
        };
        reader.onerror = (error) => reject(error);
    });
}

async function uploadToIPFS(file) {
    try {
        const compressedFile = await compressImage(file, 150);
        const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
        let data = new FormData();
        data.append('file', compressedFile);
        const res = await axios.post(url, data, {
            headers: {
                'pinata_api_key': PINATA_KEY,
                'pinata_secret_api_key': PINATA_SECRET,
                "Content-Type": "multipart/form-data"
            }
        });
        return `ipfs://${res.data.IpfsHash}`;
    } catch (err) {
        console.error("IPFS Error:", err);
        throw new Error("Gagal upload gambar ke server.");
    }
}
