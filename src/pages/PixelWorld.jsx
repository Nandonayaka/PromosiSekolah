import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

// Component Imports
import TargetCursor from '../components/animations/TargetCursor';
import PixelSnow from '../components/animations/PixelSnow';
import PixelTopBar from '../components/PixelWorld/PixelTopBar';
import PixelHero from '../components/PixelWorld/PixelHero';
import MarketingSection from '../components/PixelWorld/MarketingSection';
import UiUxSection from '../components/PixelWorld/UiUxSection';
import DevSquadSection from '../components/PixelWorld/DevSquadSection';
import AboutIndustrial from '../components/PixelWorld/AboutIndustrial';
import AdvantagesSection from '../components/PixelWorld/AdvantagesSection';
import MasterGallery from '../components/PixelWorld/MasterGallery';
import NpcTestimonials from '../components/PixelWorld/NpcTestimonials';
import PixelFooter from '../components/PixelWorld/PixelFooter';
import GlobalModals from '../components/PixelWorld/GlobalModals';
import { techStack } from '../components/storage/StorageTech';
import TechStackSection from '../components/PixelWorld/TechStackSection';
import CareerPathSection from '../components/PixelWorld/CareerPathSection';

const PixelWorld = () => {
    const [score, setScore] = useState(0);
    const [selectedImg, setSelectedImg] = useState(null);
    const [bossHp, setBossHp] = useState(100);
    const [bossXp, setBossXp] = useState(0);
    const [uiBossHp, setUiBossHp] = useState(100);
    const [uiBossXp, setUiBossXp] = useState(0);
    const [squadBossHp, setSquadBossHp] = useState(100);
    const [isSquadModalOpen, setIsSquadModalOpen] = useState(false);
    const [activeSquadBoss, setActiveSquadBoss] = useState(null);
    const [unlockedLevel, setUnlockedLevel] = useState(0); // 0: Frontend, 1: Backend, 2: PM, 3: QA
    const [accessDeniedMsg, setAccessDeniedMsg] = useState(null);
    const [unlockMsg, setUnlockMsg] = useState(null);
    const [selectedTech, setSelectedTech] = useState(null);

    const marketingRef = useRef(null);
    const uiuxRef = useRef(null);
    const squadRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const playSfx = (type) => {
        const sounds = {
            attack: '/assets/audio/bosshit.mp3',
            enter: '/assets/audio/boss.mp3',
            win: '/assets/audio/bossdeath.mp3',
            lock: '/assets/audio/notif.mp3',
            unlock: '/assets/audio/unlock.mp3'
        };
        const audio = new Audio(sounds[type]);
        audio.volume = 0.5;
        audio.play().catch(e => console.log("Audio play failed:", e));
    };

    const handleSquadRoleClick = (roleData, index) => {
        if (index > unlockedLevel) {
            playSfx('lock');
            setAccessDeniedMsg(`SQUAD_ACCESS_DENIED: FINISH LEVEL 0${index} FIRST!`);
            setTimeout(() => setAccessDeniedMsg(null), 3000);
            return;
        }
        playSfx('enter');
        setActiveSquadBoss({ ...roleData, index });
        setSquadBossHp(100);
        setIsSquadModalOpen(true);
    };

    const handleSquadBossAttack = () => {
        if (squadBossHp > 0) {
            playSfx('attack');
            setSquadBossHp(prev => Math.max(0, prev - 20));
            setScore(prev => prev + 50);
        }
    };

    React.useEffect(() => {
        if (squadBossHp <= 0 && isSquadModalOpen) {
            playSfx('win');
            if (activeSquadBoss && activeSquadBoss.index === unlockedLevel) {
                const nextLevel = unlockedLevel + 1;
                const roles = ["FRONTEND", "BACKEND", "PROJECT_MANAGER", "QUALITY_ASSURANCE"];

                if (nextLevel < roles.length) {
                    setTimeout(() => {
                        setUnlockedLevel(nextLevel);
                        setUnlockMsg(`${roles[nextLevel]} DIVISION_UNLOCKED!`);
                        playSfx('unlock');
                        setTimeout(() => {
                            setUnlockMsg(null);
                        }, 4000);
                    }, 1500);
                } else {
                    setUnlockedLevel(prev => Math.min(prev + 1, 3));
                }
            }
            const timer = setTimeout(() => {
                setIsSquadModalOpen(false);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [squadBossHp, isSquadModalOpen, activeSquadBoss, unlockedLevel]);

    const handleBossClick = () => {
        if (bossHp > 0) {
            const nextHp = Math.max(0, bossHp - 10);
            setBossHp(nextHp);
            if (nextHp === 0) playSfx('win');
            else playSfx('attack');

            setBossXp(prev => prev + 50);
            setScore(prev => prev + 10);
        }
    };

    const handleUiBossClick = () => {
        if (uiBossHp > 0) {
            const nextHp = Math.max(0, uiBossHp - 10);
            setUiBossHp(nextHp);
            if (nextHp === 0) playSfx('win');
            else playSfx('attack');

            setUiBossXp(prev => prev + 75);
            setScore(prev => prev + 15);
        }
    };

    // Prevent body scroll when modal is open
    React.useEffect(() => {
        if (selectedImg || isSquadModalOpen || selectedTech) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [selectedImg, isSquadModalOpen, selectedTech]);

    return (
        <div className="min-h-screen bg-[#0F0F23] text-[#E0E0E0] overflow-x-hidden">
            <TargetCursor />
            <PixelSnow />

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
                
                .pixel-font { font-family: 'Press Start 2P', cursive; }
                
                .pixel-border {
                    box-shadow: 
                        0 -4px 0 0 #333,
                        0 4px 0 0 #333,
                        -4px 0 0 0 #333,
                        4px 0 0 0 #333,
                        0 0 0 4px #000;
                }
                
                .pixel-button {
                    position: relative;
                    display: inline-block;
                    padding: 12px 24px;
                    background: #5E5E5E;
                    border: 4px solid #000;
                    color: #fff;
                    cursor: pointer;
                    text-transform: uppercase;
                    box-shadow: inset -4px -4px 0 0 #333;
                    font-family: 'Press Start 2P', cursive;
                    font-size: 10px;
                }
                
                .pixel-button:active {
                    box-shadow: inset 4px 4px 0 0 #333;
                    transform: translateY(2px);
                }

                .crt-overlay {
                    position: fixed;
                    top: 0; left: 0;
                    width: 100%; height: 100%;
                    background: radial-gradient(circle, transparent 70%, rgba(0,0,0,0.3) 100%),
                                linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%),
                                linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.03));
                    background-size: 100% 100%, 100% 4px, 3px 100%;
                    pointer-events: none;
                    z-index: 999;
                }

                .scanline {
                    width: 100%;
                    height: 100px;
                    z-index: 1000;
                    background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(0, 0, 0, 0) 100%);
                    opacity: 0.1;
                    position: absolute;
                    bottom: 100%;
                    animation: scanline 6s linear infinite;
                }

                @keyframes scanline {
                    0% { bottom: 100%; }
                    100% { bottom: -100px; }
                }

                .image-render-pixel {
                    image-rendering: pixelated;
                    image-rendering: -moz-crisp-edges;
                    image-rendering: crisp-edges;
                }
            `}</style>

            <div className="crt-overlay"></div>
            <div className="scanline"></div>

            {/* TOP BAR / UI */}
            <PixelTopBar score={score} />

            {/* HERO SECTION */}
            <PixelHero onStartAdventure={() => scrollToSection(marketingRef)} />

            {/* PROJECT SECTIONS OVERVIEW */}
            <div className="max-w-7xl mx-auto px-6 space-y-32 mb-32">

                {/* 1. DIGITAL MARKETING MISSION */}
                <div ref={marketingRef}>
                    <MarketingSection
                        bossHp={bossHp}
                        bossXp={bossXp}
                        onBossClick={handleBossClick}
                        onNextMission={() => scrollToSection(uiuxRef)}
                        onImageClick={setSelectedImg}
                    />
                </div>

                {/* 2. UI/UX CRAFTING */}
                <div ref={uiuxRef}>
                    <UiUxSection
                        uiBossHp={uiBossHp}
                        uiBossXp={uiBossXp}
                        onBossClick={handleUiBossClick}
                        onNextMission={() => scrollToSection(squadRef)}
                        onImageClick={setSelectedImg}
                    />
                </div>

                {/* 3. DEV SQUAD ROLES */}
                <div ref={squadRef}>
                    <DevSquadSection
                        unlockedLevel={unlockedLevel}
                        onSquadRoleClick={handleSquadRoleClick}
                    />
                </div>

                {/* 4. Kode program yang di pelajari */}
                <TechStackSection techStack={techStack} setSelectedTech={setSelectedTech} selectedTech={selectedTech} />

                <CareerPathSection />

                {/* 5. APA ITU KELAS INDUSTRI? */}
                <AboutIndustrial />

                {/* 6. KEUNGGULAN MASUK INDUSTRI */}
                <AdvantagesSection />

                {/* 7. MASTER_GALLERY: PREVIEW */}
                <MasterGallery onImageClick={setSelectedImg} />

                {/* 8. NPC DIALOGUE SYSTEM (Testimonials) */}
                <NpcTestimonials />
            </div>

            {/* FOOTER */}
            <PixelFooter />

            {/* MODALS */}
            <GlobalModals
                selectedImg={selectedImg}
                setSelectedImg={setSelectedImg}
                isSquadModalOpen={isSquadModalOpen}
                setIsSquadModalOpen={setIsSquadModalOpen}
                activeSquadBoss={activeSquadBoss}
                squadBossHp={squadBossHp}
                handleSquadBossAttack={handleSquadBossAttack}
                accessDeniedMsg={accessDeniedMsg}
                unlockMsg={unlockMsg}
                selectedTech={selectedTech}
                setSelectedTech={setSelectedTech}
            />
        </div>
    );
};

export default PixelWorld;
