import React from 'react';
import { Target, Code, Briefcase, Star, Database } from 'lucide-react';

const AboutIndustrial = () => {
    const features = [
        { icon: <Code size={20} />, title: "SKILL_MATCHING", desc: "Kurikulum sesuai standar industri.", color: "#00D1FF" },
        { icon: <Briefcase size={20} />, title: "JOB_READY", desc: "Siap kerja setelah lulus program.", color: "#00FF41" },
        { icon: <Star size={20} />, title: "CERTIFIED", desc: "Sertifikat resmi dari Hummatech.", color: "#FFD700" },
        { icon: <Database size={20} />, title: "PORTFOLIO", desc: "Bangun karya nyata yang solid.", color: "#FF4500" }
    ];

    return (
        <section className="mb-80 max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-6 mb-16">
                <div className="bg-[#00D1FF] p-5 pixel-border shadow-[4px_4px_0_0_#000]">
                    <Target className="text-black" size={28} />
                </div>
                <h3 className="pixel-font text-2xl md:text-3xl text-white uppercase tracking-tighter glitch-text leading-tight">APA ITU KELAS INDUSTRI?</h3>
            </div>

            <div className="pixel-glass p-1 rounded-2xl relative overflow-hidden group border-[#00D1FF]/20 shadow-[0_0_50px_rgba(0,209,255,0.1)]">
                <div className="bg-[#050510]/80 p-8 md:p-16 rounded-2xl relative overflow-hidden">
                    {/* Glowing background element */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D1FF]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-[#00D1FF]/20 transition-colors duration-1000"></div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                        <div className="space-y-10">
                            <p className="pixel-font text-[11px] md:text-xs leading-[2.5] text-[#A0C0E0] max-w-xl">
                                <span className="text-[#00FF41] mr-2 text-lg leading-none">▮</span> KELAS INDUSTRI adalah program kolaborasi eksklusif antara sekolah dengan <span className="text-[#00D1FF] font-black underline underline-offset-4 decoration-2">HUMMATECH</span> sebagai mitra industri resmi. <br /><br />
                                <span className="text-[#00FF41] mr-2 text-lg leading-none">▮</span> Program ini dirancang untuk menyelaraskan kurikulum sekolah dengan kebutuhan nyata di dunia kerja, memastikan setiap siswa mendapatkan keahlian yang relevan. <br /><br />
                                <span className="text-[#00FF41] mr-2 text-lg leading-none">▮</span> Di sini, siswa tidak hanya belajar dari buku, tapi langsung terjun ke dalam ekosistem profesional dengan pendampingan mentor ahli.
                            </p>

                            <div className="inline-flex items-center gap-5 p-5 bg-[#00D1FF]/5 border-2 border-dashed border-[#00D1FF]/20 rounded-sm">
                                <div className="w-3 h-3 bg-[#00D1FF] animate-ping"></div>
                                <span className="pixel-font text-[11px] text-[#00D1FF] font-black tracking-widest uppercase">STATUS: INDUSTRY_READY_CERTIFIED</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {features.map((f, i) => (
                                <div key={i} className="pixel-glass p-6 rounded-xl border-white/5 space-y-5 group/card hover:border-white/20 transition-all duration-300">
                                    <div className="w-12 h-12 flex items-center justify-center bg-black/40 rounded-lg pixel-border" style={{ color: f.color }}>
                                        {f.icon}
                                    </div>
                                    <div className="space-y-3">
                                        <div className="pixel-font text-[10px] text-white font-bold tracking-widest leading-none">{f.title}</div>
                                        <div className="pixel-font text-[8px] text-[#666] leading-relaxed group-hover/card:text-gray-400 transition-colors">{f.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutIndustrial;
