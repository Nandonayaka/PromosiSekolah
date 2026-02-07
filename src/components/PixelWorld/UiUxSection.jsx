import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Rocket, Star } from 'lucide-react';

const UiUxSection = ({
    uiBossHp,
    uiBossXp,
    onBossClick,
    onNextMission,
    onImageClick
}) => {
    const works = [
        { title: "JORDAN_BRANDING", img: "/assets/images/uiux/uiux.png", role: "UI_SYSTEM", color: "#FF00FF", desc: "Sepatunya merah berani, biar pas lo gagal nge-dunk tetep keliatan gaya dan meyakinkan. Investasi terbaik buat kaki lo, meskipun dompet harus pura-pura pingsan liat harganya!" },
        { title: "RAMEN_SHOP", img: "/assets/images/uiux/uiux2.png", role: "UX_ARCH", color: "#00FF41", desc: "Dompet menipis tapi lidah pengen gaya elit? Cuma 25k udah bisa makan ramen, bukan makan ati. Buruan order, sebelum kuah ramennya habis disruput duluan sama bayangan masa depan yang suram!" },
        { title: "TAKOYAKI", img: "/assets/images/uiux/uiux3.png", role: "UI/UX", color: "#00D1FF", desc: "Makan takoyaki panas-panas biar lidah melepuh, tapi hati tetap luluh gara-gara diskon 50%. Cita rasa otentik Jepang, harga tetap bersahabat buat kamu yang saldo ATM-nya lagi kena mental!" },
        { title: "NIKE_BRANDING", img: "/assets/images/uiux/uiux4.jpg", role: "UI/UX", color: "#FF00FF", desc: "Sepatunya warna-warni biar lawan silau dan nggak fokus pas lo lagi gocek. Buruan bungkus, mumpung desainnya lebih keren daripada alasan lo telat latihan!." },
        { title: "CIMORY", img: "/assets/images/uiux/uiux5.png", role: "UX_ARCH", color: "#00FF41", desc: "Haus melanda tapi saldo tinggal sisa kembalian parkir? Tenang, 8 ribuan udah bisa gaya hidup sehat. Segernya dapet, kenyangnya dapet, dompet pun nggak perlu nangis bombay di pojokan!" }
    ];

    return (
        <section className="relative px-6 mb-80">
            <div className="mb-24 grid items-center gap-16 lg:grid-cols-2 max-w-7xl mx-auto">
                {/* IMAGE & BOSS UI (Left Side) */}
                <div className="flex flex-col items-center lg:items-start justify-center gap-8 order-2 lg:order-1">
                    <motion.div
                        className="w-full max-w-[340px] space-y-4 p-6 pixel-glass rounded-lg border-[#FF00FF]/20 bg-black/50 shadow-[0_0_30px_rgba(255,0,255,0.1)]"
                        animate={uiBossHp <= 0 ? { opacity: 0.5, filter: 'grayscale(1)' } : {}}
                    >
                        <div className="flex justify-between items-end">
                            <div className="space-y-1">
                                <div className="pixel-font text-[8px] text-[#A0A0A0]">LEVEL_99_BOSS</div>
                                <div className="pixel-font text-[11px] text-white font-bold">MASTER_DESIGNER</div>
                            </div>
                            <div className="pixel-font text-[12px] text-[#FF00FF] font-black">HP: {uiBossHp}%</div>
                        </div>

                        <div className="h-6 w-full bg-[#050505] border-2 border-black p-[2px] shadow-[4px_4px_0_0_#000]">
                            <motion.div
                                className="h-full bg-gradient-to-r from-pink-600 via-purple-500 to-indigo-400"
                                initial={{ width: "100%" }}
                                animate={{ width: `${uiBossHp}%` }}
                                style={{ boxShadow: 'inset -4px 0 0 rgba(0,0,0,0.2)' }}
                            />
                        </div>

                        <div className="flex justify-between items-center text-[9px] pixel-font">
                            <div className="flex gap-2 items-center text-[#00FF41]">
                                <div className="w-1.5 h-1.5 bg-[#00FF41] animate-pulse"></div>
                                XP_GAIN: +{uiBossXp}
                            </div>
                            <div className="text-[#FFD700] font-bold">COMBO_X1.5</div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative cursor-crosshair group"
                        whileTap={{ scale: 0.95, rotate: [0, 2, -2, 0] }}
                        transition={{ duration: 0.2 }}
                        onClick={onBossClick}
                    >
                        <div className="absolute inset-0 bg-pink-600/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <motion.img
                            src="/assets/pixel/pixel2.png"
                            alt="UI Boss"
                            animate={uiBossHp <= 0 ? { y: 40, opacity: 0.2, rotate: 20, filter: 'grayscale(1)' } : { y: [0, 12, 0] }}
                            transition={uiBossHp <= 0 ? { duration: 1 } : { repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            className="w-full h-[420px] object-contain image-render-pixel group-hover:brightness-125 transition-all"
                            style={{ opacity: uiBossHp <= 0 ? 0.2 : 0.9 }}
                        />
                        {uiBossHp > 0 && (
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                <div className="bg-white/10 backdrop-blur-xl border-2 border-white/50 pixel-font text-[11px] px-4 py-2 text-white shadow-2xl">
                                    [ OVERRIDE_INTERFACE ]
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>

                {/* TEXT CONTENT (Right Side) */}
                <div className="space-y-12 mb-12 order-1 lg:order-2 lg:text-right flex flex-col items-center lg:items-end w-full">
                    <div className="flex items-center gap-6">
                        <div className="bg-[#FF00FF] p-5 pixel-border shadow-[4px_4px_0_0_#000]">
                            <Palette className="text-white" size={28} />
                        </div>
                        <div className="text-left">
                            <h3 className="pixel-font text-2xl text-white uppercase tracking-tighter glitch-text transition-all duration-300">CRAFT: UI_UX_DESIGN</h3>
                            <p className="pixel-font text-[10px] text-[#FF00FF] mt-2 opacity-80 font-bold uppercase tracking-widest">LEVEL_02 // INTERFACE_LAB</p>
                        </div>
                    </div>

                    <p className="pixel-font text-xs leading-loose text-[#A0A0A0] max-w-xl">
                        &gt; Mendesain UI dengan gaya retro-modern melalui penggunaan grid, spacing system, dan komponen reusable. <br />
                        &gt; Mengoptimalkan interaksi pengguna melalui prototipe berbasis data.
                    </p>

                    <div className="inline-block border-2 border-dashed border-[#FF00FF]/30 bg-[#1A1A1A]/50 backdrop-blur-md p-6 rounded-sm">
                        <span className="pixel-font text-[11px] text-[#FF00FF] tracking-widest font-black">
                            OBJECTIVE: UI/UX EXECUTION
                        </span>
                    </div>
                </div>
            </div>

            <div className="mb-24 flex flex-col items-center justify-center gap-6">
                <div className="flex items-center gap-8">
                    <div className="w-4 h-4 bg-[#FF00FF] rotate-45 animate-ping"></div>
                    <span className="pixel-font text-3xl text-white tracking-[0.4em] uppercase glitch-text">Hasil Karya</span>
                    <div className="w-4 h-4 bg-[#FF00FF] rotate-45 animate-ping"></div>
                </div>
                <div className="h-1 w-64 bg-gradient-to-r from-transparent via-[#FF00FF] to-transparent opacity-50"></div>
            </div>

            <div className="overflow-hidden relative py-12 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
                <motion.div
                    className="flex gap-12 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 35,
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
                                    className="pixel-glass p-4 rounded-xl group hover:border-[#FF00FF] transition-all cursor-pointer w-[350px] flex-shrink-0"
                                    onClick={() => onImageClick({ ...item, category: item.role })}
                                >
                                    <div className="aspect-video bg-black/50 overflow-hidden relative pixel-border border-[#222] rounded-lg">
                                        <img src={item.img} className="w-full h-full object-cover image-render-pixel grayscale group-hover:grayscale-0 transition-all duration-700" alt={item.title} />
                                        <div className="absolute inset-0 bg-transparent group-hover:bg-[#FF00FF]/10 transition-colors"></div>
                                        <div className="absolute top-3 left-3 bg-black/80 p-2 border border-white/5 flex items-center gap-2 backdrop-blur-md">
                                            <div className="w-2 h-2 animate-pulse" style={{ backgroundColor: item.color }}></div>
                                            <span className="pixel-font text-[8px] text-white underline underline-offset-4">{item.role}</span>
                                        </div>
                                    </div>
                                    <div className="mt-5 flex justify-between items-center px-2">
                                        <div className="pixel-font text-[10px] text-white tracking-widest font-bold group-hover:text-[#FF00FF] transition-colors">{item.title}</div>
                                        <Star className="text-[#333] group-hover:text-[#FF00FF] group-hover:drop-shadow-[0_0_5px_#FF00FF] transition-all" size={12} />
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
                    className="pixel-button bg-[#FF00FF] hover:scale-105 transition-transform flex items-center gap-3 shadow-[4px_4px_0_0_#000]"
                >
                    <span className="pixel-font text-[10px]">NEXT_MISSION: SQUAD_DEVELOPMENT</span>
                    <Rocket size={16} />
                </button>
            </div>
        </section>
    );
};

export default UiUxSection;
