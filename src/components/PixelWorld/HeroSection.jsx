import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const HeroSection = ({ onStartAdventure }) => {
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
                    className="space-y-8"
                >
                    <h2 className="pixel-font text-4xl md:text-5xl lg:text-6xl leading-tight text-white">
                        WELCOME TO PPLG <span className="text-yellow-500">DIGITAL</span> EXHIBITION
                    </h2>
                    <p className="pixel-font text-xs leading-loose text-[#E0E0E0]">
                        Gass! Ayo masuk ke dunia digital yang penuh kreativitas dan inovasi.
                        Di sini, ide-ide seru diwujudkan lewat desain, code, dan teknologi.
                        Saatnya lihat karya keren dari generasi muda yang siap jadi kreator digital masa depan!
                    </p>
                    <div className="flex gap-4">
                        <button
                            onClick={onStartAdventure}
                            className="pixel-button bg-[#00FF41] hover:bg-[#00CC33] text-black border-white"
                        >
                            Start Adventure
                        </button>
                        <button className="pixel-button bg-[#333] hover:bg-[#444]">
                            Save Game
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative hidden lg:block"
                >
                    {/* Floating Pixel Elements */}
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute -top-6 -right-6 text-[#FFD160]"><Star size={48} /></motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
