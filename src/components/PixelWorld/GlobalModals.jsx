import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Rocket, Star } from 'lucide-react';

const GlobalModals = ({
    selectedImg,
    setSelectedImg,
    isSquadModalOpen,
    setIsSquadModalOpen,
    activeSquadBoss,
    squadBossHp,
    handleSquadBossAttack,
    accessDeniedMsg,
    unlockMsg,
    selectedTech,
    setSelectedTech
}) => {
    return (
        <>
            {/* ACCESS DENIED NOTIFICATION */}
            {accessDeniedMsg && (
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10002] pointer-events-none"
                >
                    <div className="bg-[#8B0000] p-8 pixel-border border-white shadow-[8px_8px_0_0_#000]">
                        <div className="flex flex-col items-center gap-4 text-center">
                            <div className="w-12 h-12 bg-white flex items-center justify-center">
                                <ShieldCheck className="text-[#8B0000]" size={32} />
                            </div>
                            <div className="pixel-font text-white text-xs leading-loose">
                                {accessDeniedMsg}
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* NEW LEVEL UNLOCKED NOTIFICATION */}
            {unlockMsg && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[10003] w-[90%] max-w-md"
                >
                    <div className="bg-[#00FF41] p-6 pixel-border border-white shadow-[8px_8px_0_0_#000]">
                        <div className="flex items-center gap-6">
                            <div className="bg-black p-3 animate-bounce">
                                <Rocket className="text-[#00FF41]" size={24} />
                            </div>
                            <div className="space-y-2">
                                <div className="pixel-font text-[8px] text-black/60">NEW_ACCESS_GRANTED:</div>
                                <div className="pixel-font text-black text-[10px] leading-relaxed">
                                    {unlockMsg}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* LIGHTBOX MODAL */}
            {selectedImg && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setSelectedImg(null)}
                    className="fixed inset-0 z-[10000] flex justify-center overflow-y-auto bg-[#0F0F23]/95 backdrop-blur-md"
                >
                    <motion.div
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        onClick={(e) => e.stopPropagation()}
                        className="my-6 w-full max-w-3xl bg-black pixel-border p-1"
                    >
                        <div className="flex flex-col items-center space-y-8 bg-black p-6 md:p-10">
                            <div className="flex w-full items-center justify-between border-b-2 border-dashed border-[#333] pb-4">
                                <h3 className="pixel-font text-xs text-white md:text-lg">
                                    {selectedImg.title}
                                </h3>
                                <button
                                    onClick={() => setSelectedImg(null)}
                                    className="pixel-font text-[10px] text-[#FF4500] transition-transform hover:scale-110 active:scale-95"
                                >
                                    [ CLOSE_X ]
                                </button>
                            </div>

                            <div className="aspect-video w-full overflow-hidden bg-[#111] pixel-border border-[#222]">
                                <img src={selectedImg.img} alt={selectedImg.title} className="h-full w-full object-contain image-render-pixel" />
                            </div>

                            <div className="w-full space-y-6 pt-2 text-center">
                                <div className="space-y-3">
                                    <div className="pixel-font text-[10px] text-[#00FF41]">[ DESCRIPTION ]</div>
                                    <p className="mx-auto max-w-xl px-4 pixel-font text-[10px] leading-loose text-[#A0A0A0]">
                                        {selectedImg.desc}
                                    </p>
                                </div>

                                <div className="mt-4 grid grid-cols-2 gap-4 border-t border-[#222] pt-6 md:grid-cols-4">
                                    <div className="space-y-1">
                                        <div className="pixel-font text-[8px] text-[#555]">TYPE</div>
                                        <div className="pixel-font text-[8px] uppercase text-white">{selectedImg.category}</div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="pixel-font text-[8px] text-[#555]">STATUS</div>
                                        <div className="pixel-font text-[8px] text-[#00FF41]">ACTIVE</div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="pixel-font text-[8px] text-[#555]">ENGINE</div>
                                        <div className="pixel-font text-[8px] text-[#1E90FF]">VITE</div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="pixel-font text-[8px] text-[#555]">ACCESS</div>
                                        <div className="pixel-font text-[8px] text-[#FF4500]">PUBLIC</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}

            {/* GENERIC SQUAD BOSS MODAL */}
            {isSquadModalOpen && activeSquadBoss && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 z-[10001] flex items-center justify-center bg-[#000]/95 backdrop-blur-xl p-4 sm:p-6"
                >
                    <div className="w-full max-w-5xl relative">
                        <div className="flex justify-between items-center mb-8 sm:mb-12 pixel-font">
                            <div className="text-xl md:text-2xl pixel-font" style={{ color: activeSquadBoss.color }}>
                                BOSS BATTLE: {activeSquadBoss.role}_MASTER
                            </div>
                            <button onClick={() => setIsSquadModalOpen(false)} className="text-red-500 hover:scale-110 p-2 pixel-font">[ ESCAPE ]</button>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                            <div className="flex flex-col items-center space-y-8 order-2 lg:order-1">
                                <motion.div
                                    animate={squadBossHp > 0 ? {
                                        y: [0, -20, 0],
                                        filter: squadBossHp < 50 ? ["contrast(1)", "contrast(1.5)", "contrast(1)"] : "none"
                                    } : {
                                        y: 200,
                                        opacity: 0,
                                        rotate: -45,
                                        scale: 0.5
                                    }}
                                    transition={{ duration: squadBossHp > 0 ? 2 : 1, repeat: squadBossHp > 0 ? Infinity : 0 }}
                                    className="relative"
                                    onClick={handleSquadBossAttack}
                                >
                                    <img
                                        src={activeSquadBoss.bossImg}
                                        className={`w-48 h-48 md:w-80 md:h-80 object-contain image-render-pixel cursor-crosshair transition-all ${squadBossHp <= 0 ? 'grayscale brightness-0' : 'hover:scale-105 active:scale-90'}`}
                                        alt="Squad Boss"
                                    />
                                    {squadBossHp > 0 && (
                                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-2 pixel-border pixel-font text-[12px] border-white shadow-[4px_4px_0_0_#000]">
                                            HP: {squadBossHp}%
                                        </div>
                                    )}

                                    <div className="absolute -bottom-8 left-0 w-full h-4 bg-gray-900 border-2 border-white shadow-[4px_4px_0_0_#000]">
                                        <motion.div
                                            className="h-full bg-red-600"
                                            initial={{ width: "100%" }}
                                            animate={{ width: `${squadBossHp}%` }}
                                            style={{ boxShadow: 'inset -4px 0 0 rgba(0,0,0,0.3)' }}
                                        />
                                    </div>
                                </motion.div>

                                <div className="pixel-font text-[10px] text-center text-white/50 animate-pulse pt-8">
                                    {squadBossHp > 0 ? ">>> CLICK REPEATEDLY TO DEAL DAMAGE <<<" : "TARGET ELIMINATED. MISSION SUCCESS."}
                                </div>
                            </div>

                            <div className="space-y-8 bg-[#151515] p-6 md:p-10 pixel-border order-1 lg:order-2" style={{ borderColor: activeSquadBoss.color }}>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 animate-ping" style={{ backgroundColor: activeSquadBoss.color }}></div>
                                        <h4 className="pixel-font text-lg" style={{ color: activeSquadBoss.color }}>MISSION INTEL:</h4>
                                    </div>
                                    <p className="pixel-font text-[10px] leading-loose text-gray-400 border-l-4 border-[#333] pl-4">
                                        {activeSquadBoss.desc}
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="pixel-font text-sm text-white underline underline-offset-8 decoration-[#333]">REQUIRED SKILLS:</h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pixel-font text-[8px]">
                                        {activeSquadBoss.skills.map((skill, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-gray-300 pixel-font">
                                                <div className="w-2 h-2 flex-shrink-0" style={{ backgroundColor: activeSquadBoss.color }}></div>
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-8 border-t border-white/5 flex justify-between items-end">
                                    <div>
                                        <div className="pixel-font text-[8px] text-[#555]">SQUAD_ROLE:</div>
                                        <div className="pixel-font text-[10px] mt-1" style={{ color: activeSquadBoss.color }}>
                                            {activeSquadBoss.role}_DIVISION
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="pixel-font text-[8px] text-[#555]">BATTLE_STATUS:</div>
                                        <div className="pixel-font text-[10px] text-[#00FF41] mt-1">
                                            {squadBossHp > 0 ? "ENGAGED" : "COMPLETED"}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
            {/* TECH STACK DETAIL MODAL */}
            {selectedTech && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 z-[10005] flex justify-center items-center overflow-hidden bg-[#000]/90 backdrop-blur-xl p-4"
                    onClick={() => setSelectedTech(null)}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        className="relative w-full max-w-4xl my-10 md:my-24 border-2 border-orange-500/50 bg-[#0d0d15] p-6 md:p-10 pixel-font text-white shadow-[0_0_50px_rgba(249,115,22,0.3)] rounded-3xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header: Wider Layout */}
                        <div className="flex justify-between items-center border-b border-gray-800 pb-8 mb-8">
                            <div className="flex items-center gap-6">
                                <div className="p-4 bg-white/5 pixel-border border-[#333]">
                                    <img src={selectedTech.logo} className="w-16 h-16 object-contain" alt="logo" />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-4xl font-bold text-orange-500 uppercase tracking-tighter pixel-font">
                                        {selectedTech.name}
                                    </h3>
                                    <span className="text-[10px] bg-orange-500/10 text-orange-400 px-3 py-1.5 border border-orange-500/30 rounded mt-3 inline-block pixel-font">
                                        STATUS: READY_TO_LEARN
                                    </span>
                                </div>
                            </div>
                            <button onClick={() => setSelectedTech(null)} className="text-gray-500 hover:text-orange-500 transition-colors font-bold pixel-font text-[10px] p-2 bg-black/40 border-2 border-[#333] hover:border-orange-500/50">
                                [ CLOSE_X ]
                            </button>
                        </div>

                        {/* Two Column Content */}
                        <div className="grid lg:grid-cols-2 gap-10 items-start">
                            {/* Left Column: Mission */}
                            <div className="space-y-6">
                                <div className="bg-orange-500/5 p-8 border-l-4 border-orange-500 h-full relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <Star size={64} className="text-orange-500" />
                                    </div>
                                    <p className="text-[10px] text-orange-500 mb-4 font-bold tracking-widest pixel-font">MISSION_OBJECTIVE</p>
                                    <p className="text-xs md:text-sm text-gray-300 leading-relaxed italic pixel-font">
                                        "{selectedTech.desc}"
                                    </p>
                                </div>
                            </div>

                            {/* Right Column: Stats & Competency */}
                            <div className="space-y-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[9px] uppercase text-gray-400">
                                    <div className="border border-gray-800 p-5 bg-white/5 rounded-xl hover:border-gray-700 transition-colors">
                                        <p className="mb-2 opacity-50 pixel-font text-[8px]">CLASS_TYPE</p>
                                        <p className="text-white font-bold text-[10px] pixel-font">Industrial</p>
                                    </div>
                                    <div className="border border-gray-800 p-5 bg-white/5 rounded-xl hover:border-gray-700 transition-colors">
                                        <p className="mb-2 opacity-50 pixel-font text-[8px]">MENTOR_SUPPORT</p>
                                        <p className="text-white font-bold text-[10px] pixel-font text-wrap">Hummatech Indonesia</p>
                                    </div>
                                </div>

                                <div className="text-[9px]">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-2 h-2 bg-cyan-400"></div>
                                        <p className="text-cyan-400 font-black tracking-widest pixel-font">CORE_COMPETENCY</p>
                                    </div>
                                    <p className="bg-cyan-400/5 p-5 border border-cyan-400/20 text-cyan-300 uppercase font-bold rounded-xl pixel-font text-[11px] leading-relaxed">
                                        {selectedTech.role}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-900">
                            <p className="text-center text-[10px] text-gray-600 animate-pulse uppercase tracking-[0.2em] pixel-font">
                                -- AWAKEN YOUR POTENTIAL IN HUMMATECH INDUSTRIAL CLASS --
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};

export default GlobalModals;
