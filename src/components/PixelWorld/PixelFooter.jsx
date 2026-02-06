import React from 'react';
import { Zap, Star, Gamepad2 } from 'lucide-react';

const PixelFooter = () => {
    return (
        <footer className="max-w-7xl mx-auto px-6 pt-32 pb-16">
            <div className="pixel-border bg-[#1A1A1A] p-12 text-center space-y-10 relative overflow-hidden">
                {/* Decorative Scanner Line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#00FF41]/20 animate-scan"></div>

                <div className="space-y-4">
                    <div className="pixel-font text-xs text-[#555] tracking-[0.2em]">MISSION COMPLETE</div>
                    <h2 className="pixel-font text-3xl md:text-5xl text-white">THANKS FOR PLAYING!</h2>
                </div>

                <div className="flex justify-center gap-12">
                    {[
                        { icon: <Zap size={28} />, label: "POWER", color: "#FFD700" },
                        { icon: <Star size={28} />, label: "SCORE", color: "#00D1FF" },
                        { icon: <Gamepad2 size={28} />, label: "PLAY", color: "#00FF41" }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center gap-3">
                            <div
                                className="p-4 pixel-border bg-black hover:scale-110 transition-transform cursor-pointer"
                                style={{ color: item.color, borderColor: `${item.color}40` }}
                            >
                                {item.icon}
                            </div>
                            <span className="pixel-font text-[8px] text-[#444]">{item.label}</span>
                        </div>
                    ))}
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="pixel-font text-[8px] text-[#444] uppercase tracking-widest">
                        © 2024 PIXEL_SCHOOL_SYSTEM_V.1.0 // ALL RIGHTS RESERVED
                    </p>
                    <div className="flex gap-6">
                        <span className="pixel-font text-[8px] text-[#00FF41] animate-pulse cursor-pointer hover:underline">PRIVACY_POLICY</span>
                        <span className="pixel-font text-[8px] text-[#00FF41] animate-pulse cursor-pointer hover:underline">TERMS_OF_SERVICE</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default PixelFooter;
