import React from 'react';
import { motion } from 'framer-motion';
import { Monitor } from 'lucide-react';

const MasterGallery = ({ onImageClick }) => {
    const portfolio = [
        { id: 1, title: "Quest for Code", category: "Game Dev", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800", color: "#FF4500", desc: "A pixel RPG adventure set in a digital world." },
        { id: 2, title: "Neo City", category: "Digital Art", img: "https://images.unsplash.com/photo-1558979158-65a1eaa12a51?q=80&w=800", color: "#00FF41", desc: "Cyberpunk pixel cityscape with vibrant neon lights." },
        { id: 3, title: "Retro UI Kit", category: "UI Design", img: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800", color: "#FFD700", desc: "8-bit interface components for modern applications." },
        { id: 4, title: "Pixel Bot 3000", category: "Robotics", img: "https://images.unsplash.com/photo-1531403001884-26976be039b3?q=80&w=800", color: "#1E90FF", desc: "Automated pixel-based AI for industrial tasks." },
        { id: 5, title: "Vaporwave Vibes", category: "Marketing", img: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=800", color: "#FF00FF", desc: "Glitchy retro campaigns for a nostalgic audience." },
        { id: 6, title: "Pixel Dungeon", category: "Level Design", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800", color: "#8B4513", desc: "Modular dungeon assets for tactical gameplay." },
    ];

    return (
        <section>
            <div className="flex items-center gap-4 mb-16">
                <div className="bg-[#FF4500] p-3 pixel-border shadow-[4px_4px_0_0_#000]">
                    <Monitor className="text-white" size={24} />
                </div>
                <h3 className="pixel-font text-2xl text-white uppercase">MASTER_GALLERY: PREVIEW</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolio.map((item) => (
                    <motion.div
                        key={item.id}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="group cursor-pointer"
                        onClick={() => onImageClick(item)}
                    >
                        <div className="p-2 bg-[#1A1A1A] pixel-border border-[#333] group-hover:border-[#FFD700] transition-colors">
                            <div className="aspect-video overflow-hidden mb-4 relative">
                                <img src={item.img} className="w-full h-full object-cover image-render-pixel group-hover:scale-110 transition-transform duration-500" alt={item.title} />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <span className="pixel-font text-[10px] bg-black text-white px-3 py-1 border-2 border-white">PREVIEW_FILE</span>
                                </div>
                            </div>
                            <div className="px-2 pb-2">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="pixel-font text-[8px] text-[#A0A0A0]">{item.category}</span>
                                    <span className="pixel-font text-[8px] text-[#FFD700]">ID: {item.id.toString().padStart(3, '0')}</span>
                                </div>
                                <h4 className="pixel-font text-[10px] text-white uppercase truncate">{item.title}</h4>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default MasterGallery;
