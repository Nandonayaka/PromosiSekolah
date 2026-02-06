import React from 'react';
import { Heart } from 'lucide-react';

const PixelTopBar = ({ score }) => {
    return (
        <div className="max-w-6xl mx-auto mt-10 flex justify-between items-center mb-16 border-b-4 border-dashed border-[#333] pb-4 px-4 lg:px-0">
            <div className="pixel-font text-xs md:text-xl animate-pulse">
                LEVEL_01: DIGITAL_EXP
            </div>
            <div className="pixel-font text-[10px] md:text-sm flex gap-6">
                <span className="text-[#FFD700]">SCORE: {score.toString().padStart(5, '0')}</span>
                <span className="text-[#FF4500]">
                    HP:
                    <Heart className="inline w-3 h-3 fill-current ml-1" />
                    <Heart className="inline w-3 h-3 fill-current ml-1" />
                    <Heart className="inline w-3 h-3 fill-current ml-1" />
                </span>
            </div>
        </div>
    );
};

export default PixelTopBar;
