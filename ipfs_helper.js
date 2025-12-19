// --- KONFIGURASI PINATA ---
const PINATA_KEY = "ef370482b9db990f2b36";
const PINATA_SECRET = "ce1afc8cc8ad991c1140d1f63e5e58fa3d97fa7da9ab882230c5ca7bfe5877ce";

// --- HELPER: KOMPRESI GAMBAR (Max 150KB) ---
async function compressImage(file, maxSizeKB = 150) {
    // 1. Jika file asli sudah di bawah 150KB, langsung kembalikan
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

                // 2. Resize Dimensi (Profile Pic tidak perlu 4K, max 800px cukup tajam)
                const MAX_DIMENSION = 800;
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

                // 3. Loop Kompresi (Turunkan kualitas sampai < 150KB)
                let quality = 0.9;
                
                const tryCompress = () => {
                    canvas.toBlob((blob) => {
                        if (!blob) return reject("Gagal kompresi");
                        
                        const sizeKB = blob.size / 1024;
                        
                        // Jika sudah <= 150KB atau kualitas sudah mentok di 50%, STOP.
                        if (sizeKB <= maxSizeKB || quality <= 0.5) {
                            console.log(`✅ Kompresi Profile: ${(file.size/1024).toFixed(0)}KB -> ${sizeKB.toFixed(0)}KB`);
                            
                            const newFile = new File([blob], file.name, {
                                type: 'image/jpeg',
                                lastModified: Date.now(),
                            });
                            resolve(newFile);
                        } else {
                            // Masih kegedean? Turunkan kualitas 10% lagi
                            quality -= 0.1;
                            tryCompress();
                        }
                    }, 'image/jpeg', quality);
                };

                tryCompress(); // Mulai proses
            };
        };
        reader.onerror = (error) => reject(error);
    });
}

// --- FUNGSI UTAMA UPLOAD ---
async function uploadToIPFS(file) {
    // 1. Lakukan Kompresi Dulu (Target 150KB)
    // Walaupun user upload file 5MB, script ini akan menekannya jadi kecil.
    const compressedFile = await compressImage(file, 150);

    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    let data = new FormData();
    
    // Upload file yang SUDAH dikompres
    data.append('file', compressedFile);

    const res = await axios.post(url, data, {
        headers: {
            'pinata_api_key': PINATA_KEY,
            'pinata_secret_api_key': PINATA_SECRET,
            "Content-Type": "multipart/form-data"
        }
    });

    return `ipfs://${res.data.IpfsHash}`;
}
