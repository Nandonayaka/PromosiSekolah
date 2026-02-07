import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Database, Briefcase, ShieldCheck } from 'lucide-react';

const DevSquadSection = ({
    unlockedLevel,
    onSquadRoleClick
}) => {
    const squadRoles = [
        {
            role: "FRONTEND",
            tagline: "UI_ARCHITECT",
            icon: <Layout />,
            desc: "Mengubah tampilan desain menjadi kode, membuat animasi agar website lebih hidup.",
            color: "#1E90FF",
            bossImg: "/assets/images/boss/bos1.png",
            skills: ["Responsive Design", "UI/UX Implementation", "Web Motion", "React/Vite"]
        },
        {
            role: "BACKEND",
            tagline: "CORE_DEVELOPER",
            icon: <Database />,
            desc: "Mengelola logika dan basis data, membuat API agar sistem berjalan dengan baik.",
            color: "#FF4500",
            bossImg: "/assets/images/boss/bos2.png",
            skills: ["Server Logics", "API Development", "Database Schema", "Security Architecture"]
        },
        {
            role: "PROJECT_MANAGER",
            tagline: "TEAM_COMMANDER",
            icon: <Briefcase />,
            desc: "Mengatur alur kerja tim, memastikan proyek berjalan sesuai jadwal and budget.",
            color: "#FFD700",
            bossImg: "/assets/images/boss/bos3.png",
            skills: ["Agile/Scrum", "Risk Management", "Team Building", "Stakeholder Comms"]
        },
        {
            role: "QUALITY_ASSURANCE",
            tagline: "SYSTEM_SENTINEL",
            icon: <ShieldCheck />,
            desc: "Memastikan sistem tanpa bug melalui pengujian intensif untuk menjaga kualitas produk.",
            color: "#06D6A0",
            bossImg: "/assets/images/boss/bos4.png",
            skills: ["Automated Testing", "Bug Reporting", "Load Testing", "Final Verification"]
        }
    ];

    return (
        <section className="relative px-6 mb-80 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 mb-24">
                <div className="flex items-center gap-6">
                    <div className="bg-[#00FF41] p-5 pixel-border shadow-[4px_4px_0_0_#000]">
                        <Code className="text-black" size={28} />
                    </div>
                    <div>
                        <div className="pixel-font text-[9px] text-gray-500 mb-2 font-bold uppercase tracking-widest leading-none">MISSION: ASSEMBLE_ELITE_SQUAD</div>
                        <h3 className="pixel-font text-2xl md:text-3xl text-white uppercase tracking-tighter glitch-text">SQUAD: DEVELOPMENT_ROLES</h3>
                        <p className="pixel-font text-[10px] text-[#00FF41] mt-2 opacity-80 uppercase tracking-widest font-black">LEVEL_03 // SYSTEMS_ARCHITECT</p>
                    </div>
                </div>
            </div>

            <div className="relative py-24">
                {/* Refined Connecting Path Line */}
                <div className="absolute left-[50%] top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#00FF41]/20 to-transparent hidden lg:block transform -translate-x-1/2"></div>

                <div className="space-y-40">
                    {squadRoles.map((dev, i) => {
                        const isLocked = i > unlockedLevel;
                        const isCompleted = i < unlockedLevel;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`flex flex-col lg:flex-row items-center gap-16 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                {/* THE CARD */}
                                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
                                    {/* Tagline above the div (Premium Style) */}
                                    <div
                                        className={`pixel-font text-lg md:text-2xl mb-5 uppercase tracking-tighter italic font-black ${i % 2 !== 0 ? 'lg:self-end text-right' : 'lg:self-start text-left'}`}
                                        style={{
                                            color: isLocked ? '#444' : dev.color,
                                            textShadow: isLocked ? 'none' : `0 0 10px ${dev.color}40`
                                        }}
                                    >
                                        {`>> ${dev.tagline} <<`}
                                    </div>

                                    <div
                                        onClick={() => onSquadRoleClick(dev, i)}
                                        className={`
                                            relative w-full max-w-[420px] bg-black/50 p-10 pixel-glass rounded-2xl transition-all duration-500
                                            ${isLocked ? 'grayscale opacity-50 border-gray-800 bg-black/40 cursor-not-allowed' : 'cursor-pointer hover:scale-[1.03] hover:rotate-1 active:scale-100 group'}
                                        `}
                                        style={{ borderColor: isLocked ? '#222' : `${dev.color}40`, boxShadow: isLocked ? 'none' : `0 0 40px ${dev.color}10` }}
                                    >
                                        {/* Locked Overlay */}
                                        {isLocked && (
                                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 z-10 rounded-2xl backdrop-blur-sm">
                                                <div className="pixel-font text-sm text-gray-500 tracking-tighter uppercase mb-2">Unauthorized</div>
                                                <div className="pixel-font text-[10px] text-gray-600 animate-pulse">[ ACCESS_LOCKED ]</div>
                                            </div>
                                        )}

                                        <div className="flex justify-between items-start mb-8">
                                            <div className="p-5 pixel-border bg-black/50 overflow-hidden relative" style={{ color: isLocked ? '#444' : dev.color }}>
                                                <div className="absolute inset-0 opacity-10" style={{ backgroundColor: dev.color }}></div>
                                                {dev.icon}
                                            </div>
                                            <div className="pixel-font text-[9px] text-gray-600 font-bold">NODE_0{i + 1}</div>
                                        </div>

                                        <div className="pixel-font text-lg text-white mb-4 tracking-tighter uppercase font-black group-hover:text-white transition-colors">{dev.role}</div>
                                        <p className="pixel-font text-[10px] text-gray-400 leading-relaxed mb-8 group-hover:text-gray-300 transition-colors">
                                            {dev.desc}
                                        </p>

                                        <div className="flex justify-between items-center border-t border-white/5 pt-6">
                                            <div className="pixel-font text-[8px] font-bold tracking-widest" style={{ color: isLocked ? '#444' : dev.color }}>
                                                {isLocked ? 'SYSTEM_OFFLINE' : isCompleted ? 'MISSION_PASSED ✓' : 'CHALLENGE_ACTIVE'}
                                            </div>
                                            {isCompleted && (
                                                <div className="flex gap-1">
                                                    {[...Array(3)].map((_, i) => (
                                                        <div key={i} className="w-1.5 h-1.5 bg-[#00FF41] shadow-[0_0_8px_#00FF41]"></div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* THE CENTER INDICATOR */}
                                <div className="relative z-10 w-16 h-16 flex items-center justify-center">
                                    <div
                                        className={`w-5 h-5 rotate-45 border-4 transition-all duration-1000 ${isLocked ? 'border-[#222] bg-[#111]' : 'border-white bg-[#00FF41] shadow-[0_0_20px_#00FF41]'}`}
                                        style={{
                                            borderColor: isLocked ? '#222' : dev.color,
                                            backgroundColor: isCompleted ? dev.color : isLocked ? '#111' : '#fff',
                                            boxShadow: isLocked ? 'none' : `0 0 30px ${dev.color}`
                                        }}
                                    ></div>
                                </div>

                                {/* EMPTY SPACE FOR ROW ALIGNMENT */}
                                <div className="hidden lg:block lg:w-1/2"></div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default DevSquadSection;
