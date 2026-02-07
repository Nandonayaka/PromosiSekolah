import React from 'react';
import { Star, Target, Zap, Rocket, TrendingUp, Monitor, Users } from 'lucide-react';

const AdvantagesSection = () => {
    const advantages = [
        { title: "MENTOR_EXPERT", icon: <Target className="text-[#FF4500]" />, desc: "Dibimbing langsung oleh mentor profesional dari Hummatech yang siap mengarahkanmu sesuai standar industri terkini." },
        { title: "REAL_PROJECT", icon: <Zap className="text-[#FFD700]" />, desc: "Mengerjakan proyek riil yang memberikan pengalaman kerja nyata, bukan sekadar teori membosankan di dalam kelas." },
        { title: "CAREER_READY", icon: <Rocket className="text-[#00FF41]" />, desc: "Lulus dengan sertifikasi resmi dan portofolio kuat yang diakui oleh mitra industri global untuk karir impianmu." },
        { title: "SKILL_GROWTH", icon: <TrendingUp className="text-[#00D1FF]" />, desc: "Akselerasi kemampuan teknis dan soft skill melalui kurikulum yang dirancang khusus untuk memenuhi standar industri modern." },
        { title: "TECH_STACK", icon: <Monitor className="text-[#A855F7]" />, desc: "Akses ke tools dan teknologi terbaru yang digunakan oleh perusahaan teknologi kelas dunia dalam pengembangan produk skala besar." },
        { title: "NETWORKING", icon: <Users className="text-[#EC4899]" />, desc: "Bangun koneksi berharga dengan sesama developer berbakat dan ahli industri yang akan membukakan jalan menuju karir global." }
    ];

    const partners = [
        { name: "HUMMATECH", img: "/assets/images/logo/hummatech.png" },
        { name: "SMKN 3 PAMEKASAN", img: "/assets/images/logo/smk3pmk.png" },
        { name: "TEFA SKANIGA", img: "/assets/images/logo/seminar-logo.png" },
    ];

    return (
        <section className="mb-80 max-w-7xl mx-auto px-6 ">
            <div className="flex items-center gap-6 mb-16 ">
                <div className="bg-[#FFD700] p-5 pixel-border shadow-[4px_4px_0_0_#000]">
                    <Star className="text-black" size={28} />
                </div>
                <h3 className="pixel-font text-2xl md:text-3xl text-white uppercase glitch-text leading-tight">KEUNGGULAN MASUK INDUSTRI</h3>
            </div>

            <div className="pixel-glass p-1 rounded-2xl relative overflow-hidden group border-[#FFD700]/20 shadow-[0_0_50px_rgba(255,215,0,0.1)]">
                <div className="bg-[#050510]/80 p-10 md:p-16 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-[#FFD700]/20 transition-colors duration-1000"></div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 relative z-10">
                        {advantages.map((adv, i) => (
                            <div key={i} className="text-center space-y-8 group/card">
                                <div className="w-20 h-20 mx-auto flex items-center justify-center bg-black/40 border-4 border-white/5 pixel-border-premium transition-transform group-hover/card:-translate-y-2">
                                    {React.cloneElement(adv.icon, { size: 32 })}
                                </div>
                                <div className="space-y-4">
                                    <h4 className="pixel-font text-sm text-white font-black tracking-widest">{adv.title}</h4>
                                    <p className="pixel-font text-[10px] text-[#A0A0A0] leading-relaxed px-2">{adv.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 pt-16 border-t-2 border-dashed border-white/5">
                        <div className="flex flex-col items-center gap-12">
                            <div className="flex items-center gap-5">
                                <div className="w-2 h-2 bg-[#FFD700] rotate-45 animate-pulse"></div>
                                <span className="pixel-font text-[10px] text-white/50 tracking-[0.3em] uppercase font-bold">Supported by Industry Leaders</span>
                                <div className="w-2 h-2 bg-[#FFD700] rotate-45 animate-pulse"></div>
                            </div>
                            <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center">
                                {partners.map((partner, i) => (
                                    <div key={i} className="flex flex-col items-center gap-4 transition-all cursor-crosshair group/partner">
                                        <div className="h-20 flex items-center justify-center">
                                            <img src={partner.img} alt={partner.name} className="h-full object-contain image-render-pixel group-hover/partner:scale-110 group-hover/partner:drop-shadow-[0_0_15px_rgba(255,215,0,0.3)] transition-all duration-500" />
                                        </div>
                                        <span className="pixel-font text-[8px] text-white/30 group-hover/partner:text-[#FFD700] group-hover/partner:tracking-widest transition-all font-bold">{partner.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdvantagesSection;
