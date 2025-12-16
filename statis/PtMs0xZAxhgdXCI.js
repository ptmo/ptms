const styleTag = document.createElement("style");
styleTag.innerHTML = `
  * { box-sizing: border-box; }
    body { 
        font-family: 'Rubik', sans-serif; 
        background: #fff;
        padding: 0;
        margin: 0;
        color: #666; 
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

        .nav-brand {
            font-size: 0.9em; font-weight: bold; color: #7385a5;
            letter-spacing: 1.2px;
        }
    
    .container { 
        width: 90%;
        max-width: 800px; 
        margin: 40px auto;
        background: white; 
        padding: 40px; 
        border-radius: 12px; 
        box-shadow: 0 5px 20px rgba(0,0,0,0.05);
    }

    #btn-connect {
            background: transparent; color: #7385a5; border: 2px solid #7385a5; 
            padding: 10px 25px; cursor: pointer; font-family: 'Rubik', sans-serif; 
            font-weight: bold; border-radius: 30px; transition: 0.3s; font-size: 13px;
        }
        #btn-connect:hover { background: #f6f9ff; color: #7385a5; border: 2px solid #7385a5; }
        #btn-connect.connected { background: #abb6c9; color: #fff; border-color: #7385a5; cursor: default; }
        
    .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; border-bottom: 2px solid #f1f1f1; padding-bottom: 15px; }
    h1, h2, h3 { color: #7385a5; }
    
    label { font-weight: 600; font-size: 14px; display: block; margin-top: 20px; color: #555; }
    input, select, textarea { 
        width: 100%; padding: 12px; margin-top: 8px; 
        border: 1px solid #ddd; border-radius: 6px; 
        font-size: 13px; transition: 0.3s;
    }
    input:focus, select:focus, textarea:focus { border-color: #27ae60; outline: none; }
    
    fieldset { border: 1px solid #eee; padding: 20px; border-radius: 8px; margin-bottom: 20px; background: #fff; }
    legend { font-weight: bold; color: #7385a5; padding: 0 10px; }
    
    .btn-action { 
        background-color: transparent; color: #7385a5; padding: 15px; 
        border: 2px solid #7385a5; width: 50%; cursor: pointer; font-size: 12px; 
        border-radius: 25px; margin-top: 20px; font-weight: bold; 
        box-shadow: 0 4px 10px rgba(115, 133, 165, 0.28); align-items: center; margin-left: auto; margin-right: auto; display: block;
    }

.btn-action:hover {
    background-color: #f6f9ff;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(115, 133, 165, 0.35);
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
        
    .status { margin-top: 15px; text-align: center; font-weight: bold; padding: 10px; border-radius: 5px; }
    .success { color: #155724; background-color: #d4edda; } 
    .error { color: #721c24; background-color: #f8d7da; }
    .loading { color: #856404; background-color: #fff3cd; }

    @media (max-width: 600px) {
        .container { margin: 20px auto; width: 95%; padding: 20px; }
        .navbar { padding: 15px; }
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
`;
document.head.appendChild(styleTag);