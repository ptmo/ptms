// --- KONFIGURASI PINATA (ISI DENGAN PUNYA ANDA) ---
const PINATA_KEY = "ef370482b9db990f2b36";
const PINATA_SECRET = "ce1afc8cc8ad991c1140d1f63e5e58fa3d97fa7da9ab882230c5ca7bfe5877ce";

// ALAT 1: FUNGSI KOMPRES (Murni Matematika)
// Tugas: Terima file -> Kecilkan sesuai request -> Kembalikan file baru
async function customCompress(file, targetKB, targetDim) {
    // Cek: Kalau bukan gambar atau sudah kecil dari target, biarkan saja
    if (!file.type.startsWith('image/') || file.size <= targetKB * 1024) {
        return file; 
    }

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

                // 1. Resize Dimensi
                if (width > targetDim || height > targetDim) {
                    if (width > height) {
                        height *= targetDim / width;
                        width = targetDim;
                    } else {
                        width *= targetDim / height;
                        height = targetDim;
                    }
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                // 2. Turunkan Kualitas Bertahap
                let quality = 0.9;
                const tryCompress = () => {
                    canvas.toBlob((blob) => {
                        if (!blob) return reject("Gagal kompresi");
                        const sizeKB = blob.size / 1024;
                        
                        if (sizeKB <= targetKB || quality <= 0.1) {
                            // Berhasil dikompres
                            const newFile = new File([blob], file.name, {
                                type: 'image/jpeg',
                                lastModified: Date.now(),
                            });
                            resolve(newFile);
                        } else {
                            // Masih kegedean, ulangi
                            quality -= 0.1;
                            tryCompress();
                        }
                    }, 'image/jpeg', quality);
                };
                tryCompress(); 
            };
        };
        reader.onerror = (err) => reject(err);
    });
}

// ALAT 2: JEMBATAN PINATA (Kurir)
// Tugas: Terima file APAPUN (Gambar/JSON/Teks) -> Upload -> Balikin CID
async function uploadToPinata(file) {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    let data = new FormData();
    data.append('file', file);
    
    try {
        const res = await axios.post(url, data, {
            headers: {
                'pinata_api_key': PINATA_KEY,
                'pinata_secret_api_key': PINATA_SECRET,
                "Content-Type": "multipart/form-data"
            }
        });
        return `ipfs://${res.data.IpfsHash}`;
    } catch (err) {
        console.error(err);
        throw new Error("Gagal upload ke Pinata.");
    }
}
