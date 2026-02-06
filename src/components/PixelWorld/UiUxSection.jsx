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
        <section className="relative mx-15 mb-80">
            <div className="mb-12 grid items-center gap-12 lg:grid-cols-2">
                {/* IMAGE & BOSS UI (Left Side) */}
                <div className="flex flex-col items-center lg:items-start justify-center gap-6 order-2 lg:order-1">
                    <motion.div
                        className="w-full max-w-[320px] space-y-3 p-4 bg-black/40 backdrop-blur-sm pixel-border border-[#FF00FF]/30"
                        animate={uiBossHp <= 0 ? { opacity: 0.5, filter: 'grayscale(1)' } : {}}
                    >
                        <div className="flex justify-between items-end">
                            <div className="space-y-1">
                                <div className="pixel-font text-[8px] text-[#A0A0A0]">LEVEL_99_BOSS</div>
                                <div className="pixel-font text-[10px] text-white">MASTER_DESIGNER</div>
                            </div>
                            <div className="pixel-font text-[10px] text-[#FF00FF]">HP: {uiBossHp}%</div>
                        </div>

                        <div className="h-5 w-full bg-[#1A1A1A] border-2 border-black p-[2px] shadow-[4px_4px_0_0_#000]">
                            <motion.div
                                className="h-full bg-gradient-to-r from-pink-600 to-purple-500"
                                initial={{ width: "100%" }}
                                animate={{ width: `${uiBossHp}%` }}
                                style={{ boxShadow: 'inset -4px 0 0 rgba(0,0,0,0.2)' }}
                            />
                        </div>

                        <div className="flex justify-between items-center text-[8px] pixel-font">
                            <div className="flex gap-2 items-center text-[#00FF41]">
                                <div className="w-1 h-1 bg-[#00FF41] animate-pulse"></div>
                                XP_GAIN: +{uiBossXp}
                            </div>
                            <div className="text-[#FFD700]">COMBO_X1.5</div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative cursor-crosshair group"
                        whileTap={{ x: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.2 }}
                        onClick={onBossClick}
                    >
                        <motion.img
                            src="/assets/pixel/pixel2.png"
                            alt="UI Boss"
                            animate={uiBossHp <= 0 ? { y: 40, opacity: 0.2, rotate: 20, filter: 'grayscale(1)' } : { y: [0, 8, 0] }}
                            transition={uiBossHp <= 0 ? { duration: 1 } : { repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="w-full h-[400px] object-contain image-render-pixel group-hover:opacity-100 transition-opacity"
                            style={{ opacity: uiBossHp <= 0 ? 0.2 : 0.8 }}
                        />
                        {uiBossHp > 0 && (
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                <div className="bg-white/10 backdrop-blur-md border-2 border-white pixel-font text-[10px] p-2 text-white">
                                    OVERRIDE_INTERFACE
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>

                {/* TEXT CONTENT (Right Side) */}
                <div className="space-y-12 mb-12 order-1 lg:order-2 lg:text-right flex flex-col items-center lg:items-end w-full">
                    <div className="flex items-center gap-4">
                        <div className="bg-[#FF00FF] p-4 pixel-border shadow-[4px_4px_0_0_#000]">
                            <Palette className="text-white" size={24} />
                        </div>
                        <div className="text-left">
                            <h3 className="pixel-font text-2xl text-white uppercase tracking-tighter">CRAFT: UI_UX_DESIGN</h3>
                            <p className="pixel-font text-[9px] text-[#FF00FF] mt-1 opacity-80">LEVEL_02 // INTERFACE_LAB</p>
                        </div>
                    </div>

                    <p className="pixel-font text-xs leading-loose text-[#A0A0A0]">
                        &gt;Mendesain UI dengan gaya retro-modern melalui penggunaan grid, spacing system, dan komponen reusable. <br />
                        &gt; Mengoptimalkan interaksi pengguna melalui prototipe berbasis data.
                    </p>

                    <div className="inline-block border-2 border-dashed border-[#FF00FF]/50 bg-[#1A1A1A] p-4">
                        <span className="pixel-font text-[10px] text-[#FF00FF]">
                            OBJECTIVE: UI/UX EXECUTION
                        </span>
                    </div>
                </div>
            </div>

            <div className="mb-16 flex flex-col items-center justify-center gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-[#FF00FF] animate-ping"></div>
                    <span className="pixel-font text-2xl text-white tracking-[0.3em]">HASIL KARYA</span>
                    <div className="w-3 h-3 bg-[#FF00FF] animate-ping"></div>
                </div>
                <div className="h-1 w-48 bg-gradient-to-r from-transparent via-[#FF00FF] to-transparent"></div>
            </div>

            <div className="overflow-hidden relative py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <motion.div
                    className="flex gap-8 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                >
                    {[...Array(2)].map((_, listIdx) => (
                        <div key={listIdx} className="flex gap-8">
                            {works.map((item, i) => (
                                <motion.div
                                    key={`${listIdx}-${i}`}
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    className="bg-[#1A1A1A] p-3 pixel-border group hover:border-[#FF00FF] transition-colors cursor-pointer w-[350px] flex-shrink-0"
                                    onClick={() => onImageClick({ ...item, category: item.role })}
                                >
                                    <div className="aspect-video bg-black overflow-hidden relative pixel-border border-[#222]">
                                        <img src={item.img} className="w-full h-full object-cover image-render-pixel grayscale group-hover:grayscale-0 transition-all duration-500" alt={item.title} />
                                        <div className="absolute inset-0 bg-transparent group-hover:bg-[#FF00FF]/10 transition-colors"></div>
                                        <div className="absolute top-2 left-2 bg-black/90 p-1.5 border border-[#333] flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 animate-pulse" style={{ backgroundColor: item.color }}></div>
                                            <span className="pixel-font text-[7px] text-white underline underline-offset-2">{item.role}</span>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-between items-center px-1">
                                        <div className="pixel-font text-[8px] text-white tracking-widest">{item.title}</div>
                                        <Star className="text-[#333] group-hover:text-[#FF00FF] transition-colors" size={10} />
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
