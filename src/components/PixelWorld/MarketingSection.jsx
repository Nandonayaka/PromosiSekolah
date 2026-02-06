import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Rocket } from 'lucide-react';

const MarketingSection = ({
    bossHp,
    bossXp,
    onBossClick,
    onNextMission,
    onImageClick
}) => {
    const works = [
        { title: "GETSKILL", img: "/assets/images/digmar/getskill.png", level: "LV_20", tag: "SOCIAL", desc: "A comprehensive social media marketing campaign strategy." },
        { title: "GETSKILL", img: "/assets/images/digmar/getskill2.png", level: "LV_15", tag: "SEARCH", desc: "Advanced search engine optimization for peak digital visibility." },
        { title: "HUMMATECH", img: "/assets/images/digmar/hummatech.png", level: "LV_25", tag: "VIRAL", desc: "Viral marketing techniques to skyrocket user engagement." },
        { title: "MISCHOOL", img: "/assets/images/digmar/mischool.png", level: "LV_25", tag: "VIRAL", desc: "Viral marketing techniques to skyrocket user engagement." },
        { title: "MILINK", img: "/assets/images/digmar/milink.png", level: "LV_25", tag: "VIRAL", desc: "Viral marketing techniques to skyrocket user engagement." },
        { title: "KODE_LISENSI", img: "/assets/images/digmar/kodelisensi.jpg", level: "LV_25", tag: "VIRAL", desc: "Viral marketing techniques to skyrocket user engagement." },
    ];

    return (
        <section className="relative mx-15 mb-80">
            <div className="mb-12 grid items-center gap-12 lg:grid-cols-2">
                {/* TEXT CONTENT */}
                <div className="space-y-12">
                    <div className="flex items-center gap-4">
                        <div className="bg-[#FF4500] p-4 pixel-border shadow-[4px_4px_0_0_#000]">
                            <Megaphone className="text-white" size={24} />
                        </div>
                        <div>
                            <h3 className="pixel-font text-2xl text-white uppercase tracking-tighter">MISSION: DIGITAL_MARKETING</h3>
                            <p className="pixel-font text-[9px] text-[#FF4500] mt-1 opacity-80">LEVEL_01 // STRATEGY_PHASE</p>
                        </div>
                    </div>

                    <p className="pixel-font text-xs leading-loose text-[#A0A0A0]">
                        &gt; Kembangkan strategi untuk mendominasi pasar digital. <br />
                        &gt; Analisis data, SEO, dan Social Media Ads sebagai senjata utama Anda.
                    </p>

                    <div className="inline-block border-2 border-dashed border-[#FF4500]/50 bg-[#1A1A1A] p-4">
                        <span className="pixel-font text-[10px] text-[#FF4500]">
                            OBJECTIVE: MAXIMIZE_REACH
                        </span>
                    </div>
                </div>

                {/* IMAGE & BOSS UI */}
                <div className="flex flex-col items-center lg:items-end justify-center gap-6">
                    <motion.div
                        className="w-full max-w-[320px] space-y-3 p-4 bg-black/40 backdrop-blur-sm pixel-border border-[#FF4500]/30"
                        animate={bossHp <= 0 ? { opacity: 0.5, filter: 'grayscale(1)' } : {}}
                    >
                        <div className="flex justify-between items-end">
                            <div className="space-y-1">
                                <div className="pixel-font text-[8px] text-[#A0A0A0]">LEVEL_99_BOSS</div>
                                <div className="pixel-font text-[10px] text-white">ELITE_MARKETER</div>
                            </div>
                            <div className="pixel-font text-[10px] text-[#FF4500]">HP: {bossHp}%</div>
                        </div>

                        <div className="h-5 w-full bg-[#1A1A1A] border-2 border-black p-[2px] shadow-[4px_4px_0_0_#000]">
                            <motion.div
                                className="h-full bg-gradient-to-r from-red-600 to-orange-500"
                                initial={{ width: "100%" }}
                                animate={{ width: `${bossHp}%` }}
                                style={{ boxShadow: 'inset -4px 0 0 rgba(0,0,0,0.2)' }}
                            />
                        </div>

                        <div className="flex justify-between items-center text-[8px] pixel-font">
                            <div className="flex gap-2 items-center text-[#00FF41]">
                                <div className="w-1 h-1 bg-[#00FF41] animate-pulse"></div>
                                XP_GAIN: +{bossXp}
                            </div>
                            <div className="text-[#FFD700]">STREAK_X1</div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative cursor-crosshair group"
                        whileTap={{ x: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.2 }}
                        onClick={onBossClick}
                    >
                        <motion.img
                            src="/assets/pixel/pixel1.png"
                            alt="Marketing Strategy"
                            animate={bossHp <= 0 ? { y: 40, opacity: 0.2, rotate: -20, filter: 'grayscale(1)' } : { y: [0, -8, 0] }}
                            transition={bossHp <= 0 ? { duration: 1 } : { repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="w-full h-[400px] object-contain image-render-pixel group-hover:opacity-100 transition-opacity"
                            style={{ opacity: bossHp <= 0 ? 0.2 : 0.8 }}
                        />
                        {bossHp > 0 && (
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                <div className="bg-white/10 backdrop-blur-md border-2 border-white pixel-font text-[10px] p-2 text-white">
                                    CLICK_TO_ATTACK
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>

            <div className="mb-16 flex flex-col items-center justify-center gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-[#FF4500] animate-ping"></div>
                    <span className="pixel-font text-2xl text-white tracking-[0.3em]">HASIL KARYA</span>
                    <div className="w-3 h-3 bg-[#FF4500] animate-ping"></div>
                </div>
                <div className="h-1 w-48 bg-gradient-to-r from-transparent via-[#FF4500] to-transparent"></div>
            </div>

            <div className="overflow-hidden relative py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <motion.div
                    className="flex gap-8 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                    whileHover={{ animationPlayState: 'paused' }}
                >
                    {[...Array(2)].map((_, listIdx) => (
                        <div key={listIdx} className="flex gap-8">
                            {works.map((item, i) => (
                                <motion.div
                                    key={`${listIdx}-${i}`}
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    className="bg-[#1A1A1A] p-3 pixel-border group hover:border-[#FF4500] transition-colors cursor-pointer w-[300px] flex-shrink-0"
                                    onClick={() => onImageClick({ ...item, category: item.tag })}
                                >
                                    <div className="aspect-square bg-black overflow-hidden relative pixel-border border-[#222]">
                                        <img src={item.img} className="w-full h-full object-cover image-render-pixel grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100" alt={item.title} />
                                        <div className="absolute top-2 left-2 bg-black/90 px-2 py-1 pixel-font text-[7px] text-[#A0A0A0] border border-[#333]">
                                            {item.tag}_MODULE
                                        </div>
                                        <div className="absolute bottom-2 right-2 bg-[#FF4500] px-2 py-1 pixel-font text-[8px] text-white shadow-[2px_2px_0_0_#000]">
                                            {item.level}
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-between items-center">
                                        <div className="pixel-font text-[8px] text-white tracking-widest">{item.title}</div>
                                        <div className="w-2 h-2 bg-[#FF4500]/20 rounded-full group-hover:bg-[#FF4500] transition-colors"></div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="mt-20 flex justify-center">
                <button
                    onClick={onNextMission}
                    className="pixel-button bg-[#FF4500] hover:scale-105 transition-transform flex items-center gap-3 shadow-[4px_4px_0_0_#000]"
                >
                    <span className="pixel-font text-[10px]">NEXT_MISSION: UI_UX_CRAFTING</span>
                    <Rocket size={16} />
                </button>
            </div>
        </section>
    );
};

export default MarketingSection;
