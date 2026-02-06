import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, ChevronLeft, ChevronRight } from 'lucide-react';

const PORTFOLIO_ITEMS = [
    { id: 1, title: "Quest for Code", category: "Game Dev", img: "/assets/images/web/web1.jpeg" },
    { id: 14, title: "Cyber Shield", category: "Security", img: "/assets/images/web/web14.jpeg" },
    { id: 2, title: "Neo City", category: "Digital Art", img: "/assets/images/web/web2.jpeg" },
    { id: 4, title: "Pixel Bot 3000", category: "Robotics", img: "/assets/images/web/web4.jpeg" },
    { id: 5, title: "Vaporwave Vibes", category: "Marketing", img: "/assets/images/web/web5.jpeg" },
    { id: 6, title: "Pixel Dungeon", category: "Level Design", img: "/assets/images/web/web6.jpeg" },
    { id: 7, title: "Cyber Shield", category: "Security", img: "/assets/images/web/web7.jpeg" },
    { id: 3, title: "Retro UI Kit", category: "UI Design", img: "/assets/images/web/web3.jpeg" },
    
    { id: 9, title: "Neo City", category: "Digital Art", img: "/assets/images/web/web9.jpeg" },
    { id: 10, title: "Retro UI Kit", category: "UI Design", img: "/assets/images/web/web10.jpeg" },
    
    { id: 13, title: "Pixel Dungeon", category: "Level Design", img: "/assets/images/web/web13.jpeg" },
    
    { id: 15, title: "Pixel Quest", category: "Game Dev", img: "/assets/images/web/web15.jpeg" },
    { id: 8, title: "Pixel Quest", category: "Game Dev", img: "/assets/images/web/web8.jpeg" },
    { id: 11, title: "Pixel Bot 3000", category: "Robotics", img: "/assets/images/web/web11.jpeg" },
    { id: 12, title: "Vaporwave Vibes", category: "Marketing", img: "/assets/images/web/web12.jpeg" },


];

const MasterGallery = ({ onImageClick }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(PORTFOLIO_ITEMS.length / itemsPerPage);

    const isFirstPage = currentPage === 0;
    const isLastPage = currentPage === totalPages - 1;

    const nextPage = () => { if (!isLastPage) setCurrentPage(prev => prev + 1); };
    const prevPage = () => { if (!isFirstPage) setCurrentPage(prev => prev - 1); };

    const displayedItems = PORTFOLIO_ITEMS.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    return (
        <section className="w-full max-w-7xl py-8">
            <div className="flex items-center gap-4 mb-12">
                <div className="bg-[#FF4500] p-3 pixel-border shadow-[4px_4px_0_0_#000]">
                    <Monitor className="text-white" size={24} />
                </div>
                <h3 className="pixel-font text-2xl text-white uppercase tracking-wider">
                    MASTER_GALLERY: PAGE_{currentPage + 1}
                </h3>
            </div>

            <div className="relative flex items-center justify-center gap-2 md:gap-6">
                <button 
                    onClick={prevPage}
                    className={`z-20 w-10 h-[60px] flex items-center justify-center transition-all shrink-0 border-2
                        ${isFirstPage 
                            ? 'bg-[#1A1A1A] border-[#333] text-[#444] cursor-not-allowed' // Border digelapkan tapi tetap ada
                            : 'bg-[#1A1A1A] border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:border-black hover:text-black cursor-pointer shadow-[4px_4px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none'
                        }`}
                >
                    <ChevronLeft size={28} />
                </button>

                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={currentPage}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 col-span-full"
                        >
                            {displayedItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="group cursor-pointer p-2 bg-[#1A1A1A] pixel-border border-[#333] hover:border-[#FFD700] transition-all flex flex-col"
                                    onClick={() => onImageClick(item)}
                                >
                                    <div className="relative aspect-video overflow-hidden mb-4 bg-black">
                                        <img 
                                            src={item.img} 
                                            className="w-full h-full object-cover image-render-pixel group-hover:scale-110 transition-transform duration-500" 
                                            alt={item.title} 
                                        />
                                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                            <span className="pixel-font text-[10px] bg-black text-white px-3 py-1 border-2 border-white shadow-[2px_2px_0_0_#FF4500]">
                                                PREVIEW_FILE
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="px-2 pb-2 mt-auto">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="pixel-font text-[8px] text-[#A0A0A0]">{item.category}</span>
                                            <span className="pixel-font text-[8px] text-[#FFD700]">ID: {item.id.toString().padStart(3, '0')}</span>
                                        </div>
                                        <h4 className="pixel-font text-[10px] text-white uppercase truncate">{item.title}</h4>
                                    </div>
                                </div>
                            ))}
                            
                            {displayedItems.length < itemsPerPage && 
                                [...Array(itemsPerPage - displayedItems.length)].map((_, i) => (
                                    <div key={`empty-${i}`} className="hidden lg:block p-2 border-2 border-dashed border-[#222] opacity-10 h-full min-h-[150px]" />
                                ))
                            }
                        </motion.div>
                    </AnimatePresence>
                </div>

                <button 
                    onClick={nextPage}
                    className={`z-20 w-10 h-[60px] flex items-center justify-center transition-all shrink-0 border-2
                        ${isLastPage 
                            ? 'bg-[#1A1A1A] border-[#333] text-[#444] cursor-not-allowed' 
                            : 'bg-[#1A1A1A] border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:border-black hover:text-black cursor-pointer shadow-[4px_4px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none'
                        }`}
                >
                    <ChevronRight size={28} />
                </button>
            </div>

            <div className="mt-12 flex justify-center items-center gap-4">
                <div className={`h-[2px] flex-1 transition-colors ${isFirstPage ? 'bg-[#222]' : 'bg-gray-600/40'}`}></div>
                <div className="pixel-font text-[10px] text-[#666] tracking-tighter">
                    PAGE_{currentPage + 1} // TOTAL_{totalPages}
                </div>
                <div className={`h-[2px] flex-1 transition-colors ${isLastPage ? 'bg-[#222]' : 'bg-gray-600/40'}`}></div>
            </div>
        </section>
    );
};

export default MasterGallery;