import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const PixelHero = ({ onStartAdventure }) => {
    return (
        <section className="relative mx-auto mb-32 overflow-hidden bg-[#000]">
            {/* Looping Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 z-0 w-full h-full object-cover opacity-60 pointer-events-none image-render-pixel"
            >
                <source src="/assets/gif/bg-gif.mp4" type="video/mp4" />
            </video>

            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F23] via-[#0F0F23]/80 to-transparent z-10"></div>

            <div className="relative z-20 gap-12 items-center p-8 md:p-16">
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="space-y-8 max-w-4xl"
                >
                    <motion.h2
                        className="pixel-font text-4xl md:text-5xl lg:text-6xl leading-tight text-white cursor-default select-none relative group inline-block"
                    >
                        <motion.span
                            animate={{
                                textShadow: [
                                    "0 0 5px rgba(255,255,255,0)",
                                    "0 0 20px rgba(255,255,255,0.8)",
                                    "0 0 5px rgba(255,255,255,0)"
                                ]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative z-10 block"
                        >
                            WELCOME TO PPLG <span className="text-yellow-500">DIGITAL</span> EXHIBITION
                        </motion.span>
                    </motion.h2>
                    <p className="pixel-font text-xs leading-loose text-[#E0E0E0]">
                        Gass! Ayo masuk ke dunia digital yang penuh kreativitas dan inovasi.
                        Di sini, ide-ide seru diwujudkan lewat desain, code, dan teknologi.
                        Saatnya lihat karya keren dari generasi muda yang siap jadi kreator digital masa depan!
                    </p>
                    <div className="flex gap-4">
                        <div className="relative group">
                            {/* Focus Brackets for Button - Visible only on hover */}
                            <div className="absolute -inset-4 pointer-events-none transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-110">
                                <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-yellow-500 animate-[pulse_2s_infinite]"></div>
                                <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-yellow-500 animate-[pulse_2s_infinite]"></div>
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-yellow-500 animate-[pulse_2s_infinite]"></div>
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-yellow-500 animate-[pulse_2s_infinite]"></div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={onStartAdventure}
                                className="pixel-button bg-[#00FF41] hover:bg-[#00CC33] text-black border-white relative z-10"
                            >
                                Start Adventure
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative hidden lg:block"
                >
                    {/* Floating Star - Now back to normal rotation */}
                    <div className="absolute -top-6 -right-6">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="text-[#FFD160]"
                        >
                            <Star size={48} className="fill-current" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PixelHero;
