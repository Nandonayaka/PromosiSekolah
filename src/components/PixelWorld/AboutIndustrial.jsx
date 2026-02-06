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
        <section className="mb-32">
            <div className="flex items-center gap-4 mb-12">
                <div className="bg-[#00D1FF] p-3 pixel-border shadow-[4px_4px_0_0_#000]">
                    <Target className="text-black" size={24} />
                </div>
                <h3 className="pixel-font text-2xl text-white uppercase tracking-tighter">APA ITU KELAS INDUSTRI?</h3>
            </div>

            <div className="relative p-1 bg-[#001A33] pixel-border border-[#00D1FF]/30">
                <div className="bg-[#000D1A] p-8 md:p-12 border-2 border-dashed border-[#00D1FF]/20 relative overflow-hidden">
                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D1FF]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div className="space-y-6">
                            <p className="pixel-font text-xs leading-loose text-[#A0C0E0]">
                                &gt; KELAS INDUSTRI adalah program kolaborasi eksklusif antara sekolah dengan <span className="text-[#00D1FF]">HUMMATECH</span> sebagai mitra industri resmi. <br /><br />
                                &gt; Program ini dirancang untuk menyelaraskan kurikulum sekolah dengan kebutuhan nyata di dunia kerja, memastikan setiap siswa mendapatkan keahlian yang relevan. <br /><br />
                                &gt; Di sini, siswa tidak hanya belajar dari buku, tapi langsung terjun ke dalam ekosistem profesional dengan pendampingan mentor ahli.
                            </p>

                            <div className="inline-flex items-center gap-4 p-4 bg-[#00D1FF]/10 border border-[#00D1FF]/30">
                                <div className="w-2 h-2 bg-[#00D1FF] animate-pulse"></div>
                                <span className="pixel-font text-[10px] text-[#00D1FF]">STATUS: INDUSTRY_READY_CERTIFIED</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {features.map((f, i) => (
                                <div key={i} className="p-4 bg-black/40 border border-[#333] space-y-3">
                                    <div style={{ color: f.color }}>{f.icon}</div>
                                    <div className="pixel-font text-[8px] text-white">{f.title}</div>
                                    <div className="pixel-font text-[7px] text-[#666]">{f.desc}</div>
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
