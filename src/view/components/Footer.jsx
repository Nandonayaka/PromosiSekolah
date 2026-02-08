import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-neutral-950 border-t border-neutral-900 py-12 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none z-50">
                <style>{`
                    @keyframes convoyFlight {
                        0% { 
                            right: -500px; /* Mulai dari luar layar kanan */
                            top: 15%;
                            transform: scale(1.1) rotate(5deg); 
                        }
                        50% {
                            top: 35%; /* Meliuk ke bawah */
                        }
                        100% { 
                            right: 120%; /* Keluar lewat layar kiri */
                            top: 20%;
                            transform: scale(1.1) rotate(-5deg);
                        }
                    }

                    /* Santa di Depan */
                    .santa-lead {
                        position: absolute;
                        width: 200px;
                        height: auto;
                        animation: convoyFlight 20s linear infinite;
                        /* Santa jalan duluan tanpa delay */
                        filter: drop-shadow(0 10px 15px rgba(255, 255, 255, 0.2));
                    }

                    /* Naga Mengikuti di Belakang */
                    .dragon-follow {
                        position: absolute;
                        width: 300px; /* Naga dibuat lebih besar dari Santa agar garang */
                        height: auto;
                        animation: convoyFlight 20s linear infinite;
                        /* Delay 0.8 detik agar naga tepat berada di belakang Santa */
                        animation-delay: 1s; 
                        filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.8));
                    }
                `}</style>
                
                {/* 1. Santa (Memimpin) */}
                {/* <img 
                    src="/assets/gif/santa.gif" 
                    alt="Santa Flight" 
                    className="santa-lead"
                /> */}

                <img 
                    src="/assets/gif/naga..gif" 
                    alt="Dragon Guardian" 
                    className="dragon-follow"
                    style={{ transform: 'scaleX(-1)' }} 
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
                    
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                                <span className="text-white font-bold text-xl">H</span>
                            </div>
                            <span className="text-2xl font-bold text-white tracking-tighter uppercase italic">
                                Humma<span className="text-indigo-500">tech</span>
                            </span>
                        </div>
                        <p className="text-neutral-400 max-w-sm leading-relaxed font-medium">
                            Membangun ekosistem teknologi masa depan. Kuasai setiap <span className="text-indigo-400">Skill Tree</span> dan jadilah legenda di industri digital.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs opacity-60">// Mission_Log</h4>
                        <ul className="space-y-3 text-neutral-500 text-sm font-medium">
                            <li className="hover:text-indigo-400 cursor-pointer transition-all flex items-center gap-2 group">
                                <span className="text-indigo-600 font-bold opacity-0 group-hover:opacity-100 transition-all">#</span> Home
                            </li>
                            <li className="hover:text-indigo-400 cursor-pointer transition-all flex items-center gap-2 group">
                                <span className="text-indigo-600 font-bold opacity-0 group-hover:opacity-100 transition-all">#</span> Career Path
                            </li>
                            <li className="hover:text-indigo-400 cursor-pointer transition-all flex items-center gap-2 group">
                                <span className="text-indigo-600 font-bold opacity-0 group-hover:opacity-100 transition-all">#</span> Tech Stack
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs opacity-60">// Signal_Received</h4>
                        <ul className="space-y-4 text-neutral-500 text-sm font-mono">
                            <li className="hover:text-white transition-colors flex flex-col">
                                <span className="text-[10px] text-indigo-500 uppercase">Email_Addr</span>
                                admin@hummatech.id
                            </li>
                            <li className="hover:text-white transition-colors flex flex-col">
                                <span className="text-[10px] text-indigo-500 uppercase">Comms_Line</span>
                                +62 812 3456 7890
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-neutral-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-neutral-600">
                    <p className="uppercase tracking-widest">© {new Date().getFullYear()} HUMMATECH_INDUSTRI // ALL RIGHTS RESERVED</p>
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2 uppercase">
                            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-ping"></span>
                            Encrypted_Connection
                        </span>
                        <span className="text-neutral-400 opacity-50">v3.1.0-STABLE</span>
                    </div>
                </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-950/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
        </footer>
    );
};

export default Footer;