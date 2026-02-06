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
            icon: <Layout />,
            desc: "Mengubah tampilan desain menjadi kode, membuat animasi agar website lebih hidup.",
            color: "#1E90FF",
            bossImg: "./assets/images/boss/bos1.png",
            skills: ["Responsive Design", "UI/UX Implementation", "Web Motion", "React/Vite"]
        },
        {
            role: "BACKEND",
            icon: <Database />,
            desc: "Mengelola logika dan basis data, membuat API agar sistem berjalan dengan baik.",
            color: "#FF4500",
            bossImg: "./assets/images/boss/bos2.png",
            skills: ["Server Logics", "API Development", "Database Schema", "Security Architecture"]
        },
        {
            role: "PROJECT_MANAGER",
            icon: <Briefcase />,
            desc: "Mengatur alur kerja tim, memastikan proyek berjalan sesuai jadwal dan budget.",
            color: "#FFD700",
            bossImg: "./assets/images/boss/bos3.png",
            skills: ["Agile/Scrum", "Risk Management", "Team Building", "Stakeholder Comms"]
        },
        {
            role: "QUALITY_ASSURANCE",
            icon: <ShieldCheck />,
            desc: "Memastikan sistem tanpa bug melalui pengujian intensif untuk menjaga kualitas produk.",
            color: "#06D6A0",
            bossImg: "./assets/images/boss/bos4.png",
            skills: ["Automated Testing", "Bug Reporting", "Load Testing", "Final Verification"]
        }
    ];

    return (
        <section className="mb-80">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
                <div className="flex items-center gap-4">
                    <div className="bg-[#00FF41] p-4 pixel-border shadow-[4px_4px_0_0_#000]">
                        <Code className="text-black" size={24} />
                    </div>
                    <div>
                        <h3 className="pixel-font text-2xl text-white uppercase tracking-tighter">SQUAD: DEVELOPMENT_ROLES</h3>
                        <p className="pixel-font text-[9px] text-[#00FF41] mt-1 opacity-80">LEVEL_03 // SYSTEMS_ARCHITECT</p>
                    </div>
                </div>
            </div>

            <div className="relative py-20">
                {/* Connecting Path Line */}
                <div className="absolute left-[50%] top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#333] to-transparent hidden lg:block"></div>

                <div className="space-y-40">
                    {squadRoles.map((dev, i) => {
                        const isLocked = i > unlockedLevel;
                        const isCompleted = i < unlockedLevel;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                animate={!isLocked ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                                transition={{ duration: 0.5, type: "spring" }}
                                viewport={{ once: true }}
                                className={`flex flex-col lg:flex-row items-center gap-12 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                {/* THE CARD */}
                                <div className="w-full lg:w-1/2 flex justify-center">
                                    <div
                                        onClick={() => onSquadRoleClick(dev, i)}
                                        className={`
                                            relative w-full max-w-[400px] p-8 pixel-border transition-all duration-300
                                            ${isLocked ? 'grayscale opacity-50 border-gray-700 bg-black cursor-not-allowed' : 'bg-[#1A1A1A] cursor-pointer hover:scale-105 active:scale-95 group'}
                                        `}
                                        style={{ borderColor: isLocked ? '#333' : dev.color }}
                                    >
                                        {/* Locked Overlay */}
                                        {isLocked && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10">
                                                <div className="pixel-font text-[12px] text-gray-500 animate-pulse">LOCKED</div>
                                            </div>
                                        )}

                                        <div className="flex justify-between items-start mb-6">
                                            <div className={`p-4 pixel-border shadow-[4px_4px_0_0_#000] ${isLocked ? 'bg-gray-800' : ''}`} style={{ backgroundColor: isLocked ? '#333' : `${dev.color}20`, color: dev.color }}>
                                                {dev.icon}
                                            </div>
                                            <div className="pixel-font text-[8px] text-gray-500">LEVEL_0{i + 1}</div>
                                        </div>

                                        <div className="pixel-font text-sm text-white mb-4 tracking-tighter">{dev.role}</div>
                                        <p className="pixel-font text-[9px] text-gray-400 leading-relaxed mb-6">
                                            {dev.desc}
                                        </p>

                                        <div className="flex justify-between items-center">
                                            <div className="pixel-font text-[7px]" style={{ color: isLocked ? '#555' : dev.color }}>
                                                {isLocked ? '[ ACCESS_DENIED ]' : isCompleted ? '[ COMPLETED ✓ ]' : '[ CHALLENGE BOSS ]'}
                                            </div>
                                            {isCompleted && <div className="w-2 h-2 bg-[#00FF41] animate-pulse"></div>}
                                        </div>
                                    </div>
                                </div>

                                {/* THE CENTER INDICATOR */}
                                <div className="relative z-10 w-12 h-12 flex items-center justify-center">
                                    <div
                                        className={`w-4 h-4 rotate-45 border-2 ${isLocked ? 'border-[#333] bg-black' : 'border-white bg-white animate-pulse'}`}
                                        style={{ borderColor: isLocked ? '#333' : dev.color, backgroundColor: isCompleted ? dev.color : isLocked ? '#000' : '#fff' }}
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
