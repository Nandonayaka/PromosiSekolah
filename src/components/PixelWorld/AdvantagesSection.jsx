import React from 'react';
import { Star, Target, Zap, Rocket } from 'lucide-react';

const AdvantagesSection = () => {
    const advantages = [
        { title: "MENTOR_EXPERT", icon: <Target className="text-[#FF4500]" />, desc: "Dibimbing langsung oleh mentor profesional dari Hummatech yang siap mengarahkanmu sesuai standar industri terkini." },
        { title: "REAL_PROJECT", icon: <Zap className="text-[#FFD700]" />, desc: "Mengerjakan proyek riil yang memberikan pengalaman kerja nyata, bukan sekadar teori membosankan di dalam kelas." },
        { title: "CAREER_READY", icon: <Rocket className="text-[#00FF41]" />, desc: "Lulus dengan sertifikasi resmi dan portofolio kuat yang diakui oleh mitra industri global untuk karir impianmu." }
    ];

    const partners = [
        { name: "HUMMATECH", img: "/assets/images/logo/hummatech.png" },
        { name: "SMKN 3 PAMEKASAN", img: "/assets/images/logo/smk3pmk.png" },
        { name: "TEFA SKANIGA", img: "/assets/images/logo/seminar-logo.png" },
    ];

    return (
        <section>
            <div className="flex items-center gap-4 mb-16">
                <div className="bg-[#FFD700] p-3 pixel-border shadow-[4px_4px_0_0_#000]">
                    <Star className="text-black" size={24} />
                </div>
                <h3 className="pixel-font text-2xl text-white uppercase">KEUNGGULAN MASUK INDUSTRI</h3>
            </div>

            <div className="bg-[#1A1A3A] p-12 pixel-border">
                <div className="grid md:grid-cols-3 gap-12">
                    {advantages.map((adv, i) => (
                        <div key={i} className="text-center space-y-6">
                            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-black/40 border-4 border-[#333]">
                                {adv.icon}
                            </div>
                            <h4 className="pixel-font text-sm text-white">{adv.title}</h4>
                            <p className="pixel-font text-[9px] text-[#A0A0A0] leading-loose">{adv.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 pt-12 border-t-2 border-dashed border-[#333]">
                    <div className="flex flex-col items-center gap-8">
                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-[#FFD700]"></div>
                            <span className="pixel-font text-[9px] text-[#A0A0A0] tracking-widest uppercase">Supported by Industry Leaders</span>
                            <div className="w-1.5 h-1.5 bg-[#FFD700]"></div>
                        </div>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center ">
                            {partners.map((partner, i) => (
                                <div key={i} className="flex flex-col items-center gap-2 transition-all cursor-crosshair group">
                                    <div className="h-16 flex items-center justify-center">
                                        <img src={partner.img} alt={partner.name} className="h-full object-contain image-render-pixel group-hover:scale-110 transition-transform" />
                                    </div>
                                    <span className="pixel-font text-[7px] text-white/50 group-hover:text-[#FFD700] tracking-widest">{partner.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdvantagesSection;
