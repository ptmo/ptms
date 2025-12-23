// --- KONFIGURASI PINATA (ISI DENGAN PUNYA ANDA) ---
const PINATA_KEY = "ef370482b9db990f2b36";
const PINATA_SECRET = "ce1afc8cc8ad991c1140d1f63e5e58fa3d97fa7da9ab882230c5ca7bfe5877ce";

async function compressImage(file, maxSizeKB = 30) { // TARGET 30KB
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
                // DIMENSI DIPERKECIL AGAR MUAT 30KB
                // Max lebar/tinggi 600px (Cukup untuk HP)
                const MAX_DIMENSION = 600; 
                if (width > MAX_DIMENSION || height > MAX_DIMENSION) {
                    if (width > height) {
                        height *= MAX_DIMENSION / width;
                        width = MAX_DIMENSION;
                    } else {
                        width *= MAX_DIMENSION / height;
                        height = MAX_DIMENSION;
                    }
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                // KOMPRESI AGRESIF
                // Mulai dari kualitas 70% (0.7)
                let quality = 0.7;
                const tryCompress = () => {
                    canvas.toBlob((blob) => {
                        if (!blob) return reject("Gagal kompresi");
                        const sizeKB = blob.size / 1024;
                        // Cek apakah sudah <= 30KB atau kualitas sudah mentok 10%
                        if (sizeKB <= maxSizeKB || quality <= 0.1) {
                            console.log(`✅ Kompresi 30KB Sukses: ${(file.size/1024).toFixed(0)}KB -> ${sizeKB.toFixed(2)}KB`);
                            const newFile = new File([blob], file.name, {
                                type: 'image/jpeg',
                                lastModified: Date.now(),
                            });
                            resolve(newFile);
                        } else {
                            // Turunkan kualitas drastis (kurangi 0.1)
                            quality -= 0.1;
                            tryCompress();
                        }
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
        // Panggil fungsi kompresi 30KB
        const compressedFile = await compressImage(file, 30);
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
        throw new Error("Gagal upload ke Pinata.");
    }
}
