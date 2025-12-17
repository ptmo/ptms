const styleTag = document.createElement("style");
styleTag.innerHTML = `
  * { box-sizing: border-box; }

        body { 
            font-family: 'Rubik', sans-serif; 
            background-color: #ffffff; 
            color: #f4f1ea; 
            margin: 0;
            padding: 0;
            overflow-x: hidden;
        }

        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 5%;
            background: #f6f9ff;
            backdrop-filter: blur(10px);
            position: sticky;
            top: 0;
            width: 100%;
            z-index: 1000;
            box-shadow: 0 4px 20px rgba(0,0,0,0.5);
        }

        .nav-left { display: flex; align-items: center; gap: 15px; }
        
        .nav-logo {
            width: 45px; height: 45px;
            border-radius: 50%;
            border: 2px solid #7385a5;
            object-fit: cover;
        }

.hero-section {
    position: relative;
    width: 100%;
    min-height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8)), 
                url('https://putramas.web.id/img/logo2.png');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    margin-bottom: 40px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    overflow: hidden;
    border-radius: 10px;
}
        
.hero-content {
    z-index: 2;
    max-width: 800px;
    padding: 20px;
}

.hero-title {
    font-size: 3.5em;
    font-weight: 800;
    color: #a0aaf8;
    letter-spacing: 5px;
    margin: 0 0 15px 0;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
    opacity: 0;
    animation: fadeInUp 1s ease-out forwards;
}

.hero-subtitle {
    font-size: 0.8em;
    color: #666666;
    font-style: italic;
    margin-bottom: 30px;
    opacity: 0;
    animation: fadeInUp 1s ease-out 0.3s forwards;
}

.btn-upload-hero {
    background: #a6b4cd;
    color: #fff;
    border: 2px solid #7385a5;
    padding: 15px 40px;
    border-radius: 50px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    letter-spacing: 1px;
    box-shadow: 0 5px 15px rgba(115, 133, 165, 0.4);
    transition: all 0.3s ease;
    opacity: 0;
    animation: fadeInUp 1s ease-out 0.6s forwards;
}

.btn-upload-hero:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(115, 133, 165, 0.6);
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 600px) {
    .hero-section { min-height: 350px; }
    .hero-title { font-size: 2.2em; letter-spacing: 2px; }
    .btn-upload-hero { padding: 12px 30px; font-size: 14px; }
}
        .galeri-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 30px; max-width: 1200px; margin: 0 auto; }
        
        .wayang-card { 
            background: #4154f1; border: 1px solid #a6b4cd; border-radius: 8px; overflow: hidden; 
            box-shadow: 0 4px 10px rgba(0,0,0,0.3); transition: transform 0.3s; 
            text-decoration: none; display: flex; flex-direction: column; position: relative;
        }
        .wayang-card:hover { transform: translateY(-8px); border-color: #8094b7; }
        
        .wayang-img { 
            width: 100%; height: 450px; background: #e0e0e0; 
            display: flex; align-items: center; justify-content: center; 
            position: relative; overflow: hidden;
        }
        .wayang-img img { max-width: 97%; max-height: 97%; filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.5)); padding-bottom: 40px; transition: transform 0.3s; }
        .wayang-card:hover .wayang-img img { transform: scale(1.05); }

        .img-overlay-bar {
            position: absolute; bottom: 0; left: 0; width: 100%; height: 35px;
            background: #7385a5; border-top: 2px solid #a6b4cd;
            display: flex; justify-content: space-between; align-items: center;
            padding: 0 15px; z-index: 10; box-sizing: border-box;
        }
        .overlay-date { color: #ccc; font-size: 10px; font-weight: bold; text-transform: uppercase; }
        .overlay-stats { display: flex; gap: 15px; }
        .stat-item { display: flex; align-items: center; gap: 5px; font-size: 11px; font-weight: bold; color: #deb887; }

        .card-body { padding: 15px; background: #f6f9ff; }
        .card-meta { display: flex; justify-content: space-between; margin-bottom: 8px; }
        .gaya-text { background: #7385a5; color: white; padding: 2px 8px; border-radius: 4px; font-size: 10px; text-transform: uppercase; }
        .date-text { color: #888; font-size: 11px; font-weight: bold; }
        h3 { margin: 0; font-size: 1.4em; color: #2c241b; font-family: 'Rubik', sans-serif; }
        .stats-row { border-top: 1px solid #eee; margin-top: 10px; padding-top: 8px; font-size: 11px; color: #666; font-style: italic; text-align: center; }
        .owner-badge { position: absolute; top: 10px; left: 10px; background: #3498db; color: white; padding: 3px 8px; border-radius: 4px; font-size: 9px; font-weight: bold; z-index: 5; font-family: 'Rubik', sans-serif; }

        .main-container {
            padding: 20px;
            max-width: 1200px;
            margin: 0 auto;
            min-height: 80vh;
        }

        .footer {
            background: #f6f9ff;
            padding: 20px 20px;
            margin-top: 25px;
            text-align: center;
            width: 100%;
        }

.social-icons { margin-bottom: 10px; }
        
        .social-link {
            display: inline-flex; justify-content: center; align-items: center;
            width: 35px; height: 35px; margin: 0 07px;
            border-radius: 50%; background: #7385a5; color: #fff;
            font-size: 15px; transition: all 0.3s ease; border: 1.5px solid #7385a5;
            text-decoration: none;
        }
        .social-link:hover {
            background: #fff; color: #7385a5;
            transform: translateY(-5px); box-shadow: 0 0 15px #7385a5;
        }

        .copyright { color: #888; font-size: 13px; letter-spacing: 1px; margin-top: 10px; }

        #btn-connect {
            background: transparent; color: #7385a5; border: 2px solid #7385a5; 
            padding: 10px 25px; cursor: pointer; font-family: 'Rubik', sans-serif; 
            font-weight: bold; border-radius: 30px; transition: 0.3s; font-size: 14px;
        }
        #btn-connect:hover { background: #f6f9ff; color: #7385a5; border: 2px solid #7385a5; }
        #btn-connect.connected { background: #abb6c9; color: #fff; border-color: #7385a5; cursor: default; }

        .search-wrapper {
    position: relative;
    width: 100%;
    max-width: 600px;
    margin: 0 auto 30px auto;
}

#searchInput {
    width: 100%;
    padding: 15px 25px;
    border-radius: 50px;
    border: 2px solid #7385a5;
    background: #fff;
    outline: none;
    text-align: center;
    box-shadow: 0 2px 6px rgba(115, 133, 165, 0.25);
    transition:
        box-shadow 0.25s ease,
        border-color 0.25s ease,
        transform 0.25s ease;
}

#searchInput:hover,
#searchInput:focus {
    border-color: #7385a5;
    box-shadow: 0 6px 16px rgba(115, 133, 165, 0.45);
    transform: translateY(-2px);
}
        
        .tab-wrapper { display: flex; justify-content: center; gap: 20px; margin-bottom: 30px; }
        .tab-btn { background: transparent; border: 2px solid #7385a5; color: #7385a5; padding: 12px 30px; border-radius: 30px; font-weight: bold; cursor: pointer; }
        .tab-btn.active { background: #abb6c9; color: #fff; border-color: #7385a5; }
        .galeri-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 30px; }
        .filter-container { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-bottom: 30px; }
        .btn-filter { background: #f6f9ff; color: #7385a5; border: 2px solid #7385a5; padding: 8px 15px; border-radius: 20px; cursor: pointer; }
        .btn-filter.active { background: #a6b4cd; color: #fff; }

        @media (max-width: 600px) {
            .navbar { padding: 15px 20px; }
            .nav-brand { font-size: 0.9em; }
            #btn-connect { padding: 8px 15px; font-size: 12px; }
            h1 { font-size: 2em; }
        }

#toast {
    visibility: hidden;
    min-width: 220px;
    max-width: 85%;
    position: fixed;
    z-index: 99999;
    top: 90px;
    right: 20px;
    left: auto;
    background-color: rgba(51, 51, 51, 0.95);
    backdrop-filter: blur(8px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.15);
    color: #fff;
    padding: 10px 35px 10px 15px; 
    display: flex;
    align-items: center;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    font-size: 11px;
    letter-spacing: 0.3px;
    opacity: 0;
    transform: translateX(20px) scale(0.9); 
    transition: all 0.4s cubic-bezier(0.2, 0, 0, 1), visibility 0s 0.4s; 
}

#toast.show {
    visibility: visible;
    opacity: 1;
    transform: translateX(0) scale(1);
    transition: all 0.4s cubic-bezier(0.2, 0, 0, 1), visibility 0s 0s;
}
    
#toast .toast-icon {
    width: 23px;
    height: 23px; 
    margin-right: 10px; 
    object-fit: contain;
}

#toast .toast-close {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 9px;
    height: 9px;
    cursor: pointer;
    opacity: 0.6;
    transition: 0.2s;
}

        #toast .toast-close:hover { opacity: 1; transform: scale(1.1); }

#toast.info {
    background: rgba(0, 53, 107, 0.35);
    border: 1px solid rgba(0, 100, 204, 0.4);
    color: #fff;
    backdrop-filter: blur(18px) saturate(160%);
    -webkit-backdrop-filter: blur(18px) saturate(160%);
    box-shadow: 0 8px 26px rgba(0,0,0,0.35), 0 0 20px rgba(0, 100, 255, 0.25);
}

#toast.success {
    background: rgba(0, 77, 7, 0.35);
    color: #fff;
    border: 1px solid rgba(0, 184, 15, 0.4);
    backdrop-filter: blur(18px) saturate(160%);
    -webkit-backdrop-filter: blur(18px) saturate(160%);
    box-shadow: 0 8px 26px rgba(0,0,0,0.35), 0 0 20px rgba(0,255,0,0.2);
}

#toast.error {
    background: rgba(107, 0, 0, 0.35);
    color: #fff;
    border: 1px solid rgba(184, 0, 0, 0.45);
    backdrop-filter: blur(18px) saturate(160%);
    -webkit-backdrop-filter: blur(18px) saturate(160%);
    box-shadow: 0 8px 26px rgba(0,0,0,0.40), 0 0 22px rgba(255,0,0,0.25);
    }

#toast.warning {
    background: rgba(102, 98, 0, 0.35);
    color: #fff;
    border: 1px solid rgba(179, 171, 0, 0.45);
    backdrop-filter: blur(18px) saturate(160%);
    -webkit-backdrop-filter: blur(18px) saturate(160%);
    box-shadow: 0 8px 26px rgba(0,0,0,0.40), 0 0 20px rgba(255,255,0,0.25);
}

#toast.wolf {
    background: rgba(125, 65, 0, 0.35);
    color: #fff;
    border: 1px solid rgba(204, 106, 0, 0.45);
    backdrop-filter: blur(18px) saturate(160%);
    -webkit-backdrop-filter: blur(18px) saturate(160%);
    box-shadow: 0 8px 26px rgba(0,0,0,0.45), 0 0 20px rgba(255,140,0,0.25);
}

#toast.load {
    background: rgba(49, 77, 0, 0.35);
    color: #fff;
    border: 1px solid rgba(104, 163, 0, 0.45);
    backdrop-filter: blur(18px) saturate(160%);
    -webkit-backdrop-filter: blur(18px) saturate(160%);
    box-shadow: 0 8px 26px rgba(0,0,0,0.45), 0 0 20px rgba(0,255,0,0.25);
}
    
#toast.loading {
    background: rgba(52, 90, 0, 0.35);
    color: #fff;
    border: 1px solid rgba(94, 163, 0, 0.45);
    backdrop-filter: blur(18px) saturate(160%);
    -webkit-backdrop-filter: blur(18px) saturate(160%);
    box-shadow: 0 8px 26px rgba(0,0,0,0.45), 0 0 20px rgba(94, 163, 0, 0.25);
}

@keyframes slideDown {
    from {top: -50px; opacity: 0;}
    to {top: 30px; opacity: 1;}
}

@keyframes fadeOut {
    from {top: 30px; opacity: 1;}
    to {top: -50px; opacity: 0;}
}

/* --- CSS LOADING SPINNER --- */
.img-loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5; /* Pastikan di atas background tapi di bawah overlay teks */
    display: flex;
    justify-content: center;
    align-items: center;
}

.spinner-circle {
    width: 30px;
    height: 30px;
    border: 3px solid #e0e0e0;       /* Warna abu-abu muda */
    border-top: 3px solid #d35400;   /* Warna Oranye (Aksen) */
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
`;
document.head.appendChild(styleTag);
