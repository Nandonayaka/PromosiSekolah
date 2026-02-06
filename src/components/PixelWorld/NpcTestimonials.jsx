import React from 'react';
import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';

const NpcTestimonials = () => {
    const testimonials = [
        { name: "PRINCIPAL_DEV", text: "Kreativitas siswa tahun ini benar-benar di luar jangkauan! Ini adalah masa depan digital yang nyata.", avatar: "👨‍🏫", color: "#00FF41" },
        { name: "DESIGN_SENSEI", text: "Setiap piksel di sini bercerita tentang kerja keras dan inovasi yang luar biasa.", avatar: "👩‍🎨", color: "#FF00FF" },
        { name: "LEGEND_VISITOR", text: "Pengalaman web yang unik! Rasanya seperti bermain JRPG sambil menjelajahi pameran.", avatar: "🎮", color: "#FFD700" }
    ];

    return (
        <section>
            <div className="flex items-center gap-4 mb-16">
                <div className="bg-[#00D1FF] p-3 pixel-border shadow-[4px_4px_0_0_#000]">
                    <Coffee className="text-black" size={24} />
                </div>
                <h3 className="pixel-font text-2xl text-white uppercase">SYSTEM: NPC_DIALOGUE</h3>
            </div>

            <div className="space-y-12">
                {testimonials.map((npc, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className={`flex gap-6 items-start ${idx % 2 !== 0 ? 'flex-row-reverse text-right' : ''}`}
                    >
                        <div className="hidden md:flex w-20 h-20 bg-[#333] pixel-border items-center justify-center text-4xl shadow-[4px_4px_0_0_#000]">
                            {npc.avatar}
                        </div>
                        <div className="flex-grow bg-[#1A1A1A] p-8 pixel-border relative shadow-[6px_6px_0_0_rgba(0,0,0,0.5)]">
                            <div className="pixel-font text-[10px] mb-4" style={{ color: npc.color }}>{npc.name} says:</div>
                            <p className="pixel-font text-xs md:text-sm leading-loose text-white italic tracking-wider">
                                "{npc.text}"
                            </p>
                            {/* Decoration dots */}
                            <div className="absolute top-2 right-2 flex gap-1">
                                <div className="w-1 h-1 bg-white/20"></div>
                                <div className="w-1 h-1 bg-white/20"></div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default NpcTestimonials;
