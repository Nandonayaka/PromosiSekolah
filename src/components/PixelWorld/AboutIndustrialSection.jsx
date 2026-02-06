import React from 'react';
import { Target, Code, Briefcase, Star, Database } from 'lucide-react';

const AboutIndustrialSection = () => {
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
                            <div className="p-4 bg-black/40 border border-[#333] space-y-3">
                                <div className="text-[#00D1FF]"><Code size={20} /></div>
                                <div className="pixel-font text-[8px] text-white">SKILL_MATCHING</div>
                                <div className="pixel-font text-[7px] text-[#666]">Kurikulum sesuai standar industri.</div>
                            </div>
                            <div className="p-4 bg-black/40 border border-[#333] space-y-3">
                                <div className="text-[#00FF41]"><Briefcase size={20} /></div>
                                <div className="pixel-font text-[8px] text-white">JOB_READY</div>
                                <div className="pixel-font text-[7px] text-[#666]">Siap kerja setelah lulus program.</div>
                            </div>
                            <div className="p-4 bg-black/40 border border-[#333] space-y-3">
                                <div className="text-[#FFD700]"><Star size={20} /></div>
                                <div className="pixel-font text-[8px] text-white">CERTIFIED</div>
                                <div className="pixel-font text-[7px] text-[#666]">Sertifikat resmi dari Hummatech.</div>
                            </div>
                            <div className="p-4 bg-black/40 border border-[#333] space-y-3">
                                <div className="text-[#FF4500]"><Database size={20} /></div>
                                <div className="pixel-font text-[8px] text-white">PORTFOLIO</div>
                                <div className="pixel-font text-[7px] text-[#666]">Bangun karya nyata yang solid.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutIndustrialSection;
