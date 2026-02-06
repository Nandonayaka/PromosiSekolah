import React from 'react';
import { Heart } from 'lucide-react';

const TopBar = ({ score }) => {
    return (
        <div className="max-w-6xl mx-auto mt-10 flex justify-between items-center mb-16 border-b-4 border-dashed border-[#333] pb-4">
            <div className="pixel-font text-xl animate-pulse">
                LEVEL 01: DIGITAL_EXP
            </div>
            <div className="pixel-font text-sm flex gap-6">
                <span className="text-[#FFD700]">SCORE: {score.toString().padStart(5, '0')}</span>
                <span className="text-[#FF4500]">HP: <Heart className="inline w-3 h-3 fill-current" /><Heart className="inline w-3 h-3 fill-current" /><Heart className="inline w-3 h-3 fill-current" /></span>
            </div>
        </div>
    );
};

export default TopBar;
