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
        { title: "GETSKILL", img: "/assets/images/digmar/getskill.png", level: "LV_20", tag: "SOCIAL", desc: "Stop scrolling sampai jempol kapalan, mending upgrade skill biar nggak cuma nunggu hidayah. Buruan belajar di GetSkill, siapa tahu besok langsung jadi CEO!." },
        { title: "GETSKILL", img: "/assets/images/digmar/getskill2.png", level: "LV_15", tag: "SEARCH", desc: "Muka bingung mikirin masa depan atau bingung cara buka file ZIP? Daripada cuma bengong di depan laptop, mending asah skill digital lo bareng GetSkill!" },
        { title: "HUMMATECH", img: "/assets/images/digmar/hummatech.png", level: "LV_25", tag: "VIRAL", desc: "Capek magang cuma disuruh bikin kopi sama fotokopi? Mending ke Hummatech! Dapet pengalaman kerja beneran, biar CV lo nggak cuma berisi daftar hobi rebahan." },
        { title: "MISCHOOL", img: "/assets/images/digmar/mischool.png", level: "LV_25", tag: "VIRAL", desc: "Dunia makin canggih,\nmasa cara belajarnya masih itu-itu aja?\nMIschool hadir biar belajar bareng jadi lebih simpel," },
        { title: "MILINK", img: "/assets/images/digmar/milink.png", level: "LV_25", tag: "VIRAL", desc: "Capek gonta-ganti link di bio kayak ganti-ganti janji manis mantan? Pake MiLink aja, satu link buat semua biar hidup lo nggak berantakan kayak kamar kosan!" },
        { title: "KODE_LISENSI", img: "/assets/images/digmar/kodelisensi.jpg", level: "LV_25", tag: "VIRAL", desc: "Hidup udah ribet, jangan ditambah software bajakan Pakai KodLisensi aja—legalnya dapet, amannya dapet, hematnya juga dapet. " },
    ];

    return (
        <section className="relative px-6 mb-80">
            <div className="mb-24 grid items-center gap-16 lg:grid-cols-2 max-w-7xl mx-auto">
                {/* TEXT CONTENT */}
                <div className="space-y-12">
                    <div className="flex items-center gap-6">
                        <div className="bg-[#FF4500] p-5 pixel-border shadow-[4px_4px_0_0_#000]">
                            <Megaphone className="text-white" size={28} />
                        </div>
                        <div>
                            <h3 className="pixel-font text-2xl text-white uppercase tracking-tighter glitch-text transition-all duration-300">MISSION: DIGITAL_MARKETING</h3>
                            <p className="pixel-font text-[10px] text-[#FF4500] mt-2 opacity-80 font-bold uppercase tracking-widest">LEVEL_01 // STRATEGY_PHASE</p>
                        </div>
                    </div>

                    <p className="pixel-font text-xs leading-loose text-[#A0A0A0] max-w-xl">
                        &gt; Kembangkan strategi untuk mendominasi pasar digital. <br />
                        &gt; Analisis data, SEO, dan Social Media Ads sebagai senjata utama Anda.
                    </p>

                    <div className="inline-block border-2 border-dashed border-[#FF4500]/30 bg-[#1A1A1A]/50 backdrop-blur-md p-6 rounded-sm">
                        <span className="pixel-font text-[11px] text-[#FF4500] tracking-widest font-black">
                            OBJECTIVE: MAXIMIZE_REACH
                        </span>
                    </div>
                </div>

                {/* IMAGE & BOSS UI */}
                <div className="flex flex-col items-center lg:items-end justify-center gap-8">
                    <motion.div
                        className="w-full max-w-[340px] space-y-4 p-6 pixel-glass rounded-lg border-[#FF4500]/20 bg-black/50 shadow-[0_0_30px_rgba(255,69,0,0.1)]"
                        animate={bossHp <= 0 ? { opacity: 0.5, filter: 'grayscale(1)' } : {}}
                    >
                        <div className="flex justify-between items-end">
                            <div className="space-y-1">
                                <div className="pixel-font text-[8px] text-[#A0A0A0]">LEVEL_99_BOSS</div>
                                <div className="pixel-font text-[11px] text-white font-bold">ELITE_MARKETER</div>
                            </div>
                            <div className="pixel-font text-[12px] text-[#FF4500] font-black">HP: {bossHp}%</div>
                        </div>

                        <div className="h-6 w-full bg-[#050505] border-2 border-black p-[2px] shadow-[4px_4px_0_0_#000]">
                            <motion.div
                                className="h-full bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400"
                                initial={{ width: "100%" }}
                                animate={{ width: `${bossHp}%` }}
                                style={{ boxShadow: 'inset -4px 0 0 rgba(0,0,0,0.2)' }}
                            />
                        </div>

                        <div className="flex justify-between items-center text-[9px] pixel-font">
                            <div className="flex gap-2 items-center text-[#00FF41]">
                                <div className="w-1.5 h-1.5 bg-[#00FF41] animate-pulse"></div>
                                XP_GAIN: +{bossXp}
                            </div>
                            <div className="text-[#FFD700] font-bold">STREAK_X1</div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative cursor-crosshair group"
                        whileTap={{ scale: 0.95, rotate: [0, -2, 2, 0] }}
                        transition={{ duration: 0.2 }}
                        onClick={onBossClick}
                    >
                        <div className="absolute inset-0 bg-red-600/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <motion.img
                            src="/assets/pixel/pixel1.png"
                            alt="Marketing Strategy"
                            animate={bossHp <= 0 ? { y: 40, opacity: 0.2, rotate: -20, filter: 'grayscale(1)' } : { y: [0, -12, 0] }}
                            transition={bossHp <= 0 ? { duration: 1 } : { repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            className="w-full h-[420px] object-contain image-render-pixel group-hover:brightness-125 transition-all"
                            style={{ opacity: bossHp <= 0 ? 0.2 : 0.9 }}
                        />
                        {bossHp > 0 && (
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                <div className="bg-white/10 backdrop-blur-xl border-2 border-white/50 pixel-font text-[11px] px-4 py-2 text-white shadow-2xl">
                                    [ CLICK_TO_ATTACK ]
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>

            <div className="mb-24 flex flex-col items-center justify-center gap-6">
                <div className="flex items-center gap-8">
                    <div className="w-4 h-4 bg-[#FF4500] rotate-45 animate-ping"></div>
                    <span className="pixel-font text-3xl text-white tracking-[0.4em] uppercase glitch-text">Hasil Karya</span>
                    <div className="w-4 h-4 bg-[#FF4500] rotate-45 animate-ping"></div>
                </div>
                <div className="h-1 w-64 bg-gradient-to-r from-transparent via-[#FF4500] to-transparent opacity-50"></div>
            </div>

            <div className="overflow-hidden relative py-12 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
                <motion.div
                    className="flex gap-12 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                    whileHover={{ animationPlayState: 'paused' }}
                >
                    {[...Array(2)].map((_, listIdx) => (
                        <div key={listIdx} className="flex gap-12">
                            {works.map((item, i) => (
                                <motion.div
                                    key={`${listIdx}-${i}`}
                                    whileHover={{ y: -12, scale: 1.05 }}
                                    className="pixel-glass p-4 rounded-xl group hover:border-[#FF4500] transition-all cursor-pointer w-[320px] flex-shrink-0"
                                    onClick={() => onImageClick({ ...item, category: item.tag })}
                                >
                                    <div className="aspect-square bg-black/50 overflow-hidden relative pixel-border border-[#222] rounded-lg">
                                        <img src={item.img} className="w-full h-full object-cover image-render-pixel grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" alt={item.title} />
                                        <div className="absolute top-3 left-3 bg-black/80 px-3 py-1.5 pixel-font text-[8px] text-[#A0A0A0] border border-white/10 backdrop-blur-md">
                                            {item.tag}_MODULE
                                        </div>
                                        <div className="absolute bottom-3 right-3 bg-[#FF4500] px-3 py-1.5 pixel-font text-[9px] text-white shadow-[3px_3px_0_0_#000] font-bold">
                                            {item.level}
                                        </div>
                                    </div>
                                    <div className="mt-5 flex justify-between items-center px-2">
                                        <div className="pixel-font text-[10px] text-white tracking-widest font-bold group-hover:text-[#FF4500] transition-colors">{item.title}</div>
                                        <div className="w-2.5 h-2.5 bg-[#FF4500]/10 border border-[#FF4500]/30 rounded-full group-hover:bg-[#FF4500] group-hover:shadow-[0_0_10px_#FF4500] transition-all"></div>
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
