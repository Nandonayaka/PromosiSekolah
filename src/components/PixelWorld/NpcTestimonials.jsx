import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee } from 'lucide-react';

const NpcTestimonials = () => {
    const [jumpscare, setJumpscare] = useState(null);
    const audioRef = useRef(null);

    const testimonials = [
        { name: "Prince UI UX", text: "Desain itu bukan cuma pajangan, kalau user tersesat ya tandanya alurmu harus di-rombak total. Ayo masuk jurusan PPLG, kita rakit alur aplikasi yang nggak bikin orang emosi!", avatar: "/assets/images/tefa/angga.jpeg", color: "#00FF41" },
        { name: "Prince BE", text: "Dari sekadar pakai teknologi, jadi pencipta sistem yang bikin bangga diri sendiri. Gabung jurusan PPLG, asah logika lo buat rakit sistem yang paten.", avatar: "/assets/images/tefa/ega.jpeg", color: "#FF00FF" },
        { name: "Prince QA", text: "Belajar coding doang nggak cukup, harus paham kualitas biar aplikasi nggak penuh bug. Masuk PPLG yuk, jadi 'hakim' aplikasi yang jago jaga mutu!", avatar: "/assets/images/tefa/valen.jpeg", color: "#FFD700" },
        { name: "Prince PM", text: "Bukan cuma jago coding, tapi juga jago ngatur strategi biar produk nggak jadi sampah digital. Gabung PPLG sekarang, asah jiwa kepemimpinanmu buat jadi bos masa depan!", avatar: "/assets/images/tefa/hilman.jpeg", color: "#FF00FF" },
        { name: "Prince FE", text: "Visual berantakan bikin user sakit mata, mending bikin tampilan yang lebih mulus dari janji mantan.Gas ke PPLG, jadi jagoan bikin antarmuka aplikasi yang estetik!", avatar: "/assets/images/tefa/firuz.jpeg", color: "#FFD700" },
    ];

    const triggerJumpscare = (avatar) => {
        setJumpscare(avatar);
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(e => console.log("Audio play failed:", e));
        }

        // Auto hide after 1.5 seconds
        setTimeout(() => {
            setJumpscare(null);
        }, 1500);
    };

    return (
        <section className="relative">
            <audio
                ref={audioRef}
                src="/assets/audio/jumpscare.mp3"
                preload="auto"
            />

            <AnimatePresence>
                {jumpscare && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                            opacity: 1,
                            scale: [1, 1.2, 0.9, 1.5, 1],
                            x: [0, -20, 20, -10, 10, 0],
                            y: [0, 10, -10, 5, -5, 0]
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1, repeat: 10 }}
                        className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
                    >
                        <motion.img
                            src={jumpscare}
                            alt="JUMPSCARE"
                            className="w-full h-full object-cover filter invert brightness-150 contrast-200 grayscale hue-rotate-90"
                            animate={{
                                filter: [
                                    "invert(1) brightness(2) contrast(3) grayscale(1)",
                                    "invert(0) brightness(1) contrast(1) grayscale(0)",
                                    "invert(1) brightness(2) contrast(3) sepia(1) saturate(5)",
                                ]
                            }}
                            transition={{ duration: 0.05, repeat: Infinity }}
                        />
                        <div className="absolute inset-0 bg-red-900/20 mix-blend-overlay animate-pulse"></div>
                    </motion.div>
                )}
            </AnimatePresence>

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
                        <div
                            className="cursor-pointer group relative flex-shrink-0"
                            onClick={() => triggerJumpscare(npc.avatar)}
                        >
                            <div className="w-24 h-24 bg-[#0A0A0A] p-1 pixel-border shadow-[4px_4px_0_0_#000] transition-all overflow-hidden">
                                <img
                                    src={npc.avatar}
                                    alt={npc.name}
                                    className="w-full h-full object-cover transition-all duration-300"
                                />
                            </div>
                            <div className="absolute inset-0 border-2 border-red-500/0 group-hover:border-red-500/50 pointer-events-none"></div>
                            <div className="absolute inset-x-0 bottom-0 bg-red-600/0 group-hover:bg-red-600/80 transition-colors pointer-events-none flex items-center justify-center h-5">
                                <span className="opacity-0 group-hover:opacity-100 text-[6px] pixel-font text-white uppercase font-bold tracking-tighter">DATA_CORRUPTED</span>
                            </div>
                        </div>

                        <div className="flex-grow bg-[#1A1A1A] p-8 pixel-border relative shadow-[6px_6px_0_0_rgba(0,0,0,0.5)]">
                            <div className="pixel-font text-[10px] mb-4" style={{ color: npc.color }}>{npc.name} says:</div>
                            <p className="pixel-font text-xs md:text-[14px] leading-loose text-white italic tracking-wider">
                                "{npc.text}"
                            </p>
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
