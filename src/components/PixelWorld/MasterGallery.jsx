import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, ChevronLeft, ChevronRight } from 'lucide-react';
import { desc } from 'framer-motion/client';

const PORTFOLIO_ITEMS = [
    { id: 1, title: "ArcesFerry", category: "Website", img: "/assets/images/web/web1.jpeg", desc: "Pesan tiket kapal secepat kilat, biar nggak karam ditinggal harapan yang nggak pasti. Ayo masuk PPLG, biar lo bisa bikin sistem keren yang sat-set kayak ArcesFerry ini!"  },
    { id: 2, title: "Seminar", category: "Website", img: "/assets/images/web/web14.jpeg", desc: "" },
    { id: 3, title: "Neo City", category: "Digital Art", img: "/assets/images/web/web9.jpeg", desc: "Gaya rebahan tapi absensi tetap aman, nggak perlu lagi drama titip tanda tangan yang bikin jantung deg-degan. Yuk masuk PPLG, biar lo bisa bikin sistem absensi canggih yang bikin tukang bolos auto tobat!" },
    { id: 4, title: "Kasir-Kilat (Cashier Z)", category: "Robotics", img: "/assets/images/web/web16.jpeg", desc: "Pusing itung stok barang sampai mata juling? Pake sistem ini biar jualan lo terpantau rapi tanpa sisa. Yuk masuk PPLG, kita belajar bikin dashboard canggih supaya masa depan lo nggak sesuram tumpukan struk manual!"},
    { id: 5, title: "SkyBound", category: "Marketing", img: "/assets/images/web/web5.jpeg", desc: "Cukup pesawat aja yang PHP sering delay, rencana liburan lo jangan sampai ikut-ikutan melay. Gas masuk PPLG, kita belajar bikin sistem canggih biar user bisa terbang menembus cakrawala dengan sekali klik!" },
    { id: 6, title: "Nando-Verse", category: "Level Design", img: "/assets/images/web/web6.jpeg", desc:"Belajar banyak bahasa pemrograman biar bisa bikin web keren, bukan cuma jago baca bahasa tubuh gebetan yang penuh kode. Yuk join PPLG, tempatnya asah kreativitas sampai lo bisa bikin dunia digital versi lo sendiri!" },
    { id: 7, title: "HAMSHOP", category: "Security", img: "/assets/images/web/web7.jpeg",desc: "Belanja sepatu jangan cuma liat diskonnya, tapi liat juga apakah dia bisa menopang beban hidupmu yang berat. Yuk masuk PPLG, biar lo bisa bikin toko online keren yang bikin dompet orang auto khilaf!" },
    { id: 8, title: "ArcesBooks", category: "UI Design", img: "/assets/images/web/web3.jpeg", desc:"Baca buku jangan cuma nunggu motivasi, nanti malah berakhir jadi koleksi debu di hati. Buruan gabung PPLG, biar lo bisa rakit perpustakaan digital keren yang nggak bikin pusing pembaca!" },
    { id: 9, title: "Pustaka-Hub", category: "Digital Art", img: "/assets/images/web/web2.jpeg", desc:"Cari ilmu jangan kayak cari jodoh, jangan mau nunggu lama kalau akhirnya cuma dighosting. Yuk masuk PPLG, kita rakit sistem perpustakaan digital biar orang pinter nggak perlu ribet ngantre!" },
    { id: 10, title: "Skantiga-Connect", category: "UI Design", img: "/assets/images/web/web10.jpeg", desc:"Sekolah mah bebas, asal jangan bebas dari tanggung jawab dan masa depan yang jelas. Ayo masuk PPLG di SMKN 3 Pamekasan, tempatnya rakit skill sampai lo jadi rebutan industri!" },
    { id: 11, title: "PROGRES-In", category: "Level Design", img: "/assets/images/web/web13.jpeg", desc: "Jangan biarkan tugasmu menumpuk sampai jadi candi, mending dipantau rapi biar bos nggak hobi nyari-nyari. Ayo masuk jurusan PPLG, kita belajar bikin sistem manajemen cerdas biar hidup lo lebih teratur dan berkelas!" },
    { id: 12, title: "ArcesShop", category: "Game Dev", img: "/assets/images/web/web15.jpeg", desc: "Borong album bias jangan pakai mikir, daripada nyesel kehabisan terus nangis di pojokan kamar. Yuk join PPLG, biar lo bisa bikin aplikasi belanja yang sat-set buat para K-Popers garis keras!" },
    { id: 13, title: "RumahKita-Care", category: "Game Dev", img: "/assets/images/web/web8.jpeg", desc: "Kalau belum bisa kasih kepastian ke gebetan, mending kasih bantuan pasti buat mereka yang membutuhkan. Masuk PPLG yuk, biar lo bisa bikin platform kebaikan yang manfaatnya jauh lebih awet daripada kenangan mantan!" },
    { id: 14, title: "SmartSchool-360", category: "Robotics", img: "/assets/images/web/web11.jpeg", desc: "Urusan absen sampai nilai jadi makin sat-set, nggak perlu lagi ribet cari tumpukan kertas yang hobi ngilang pas dicari. Ayo masuk PPLG, biar lo jago bikin sistem manajemen sekolah yang bikin guru-guru auto senyum bahagia!" },
    { id: 15, title: "Si-Admin Pro", category: "Marketing", img: "/assets/images/web/web12.jpeg", desc: "Pantau statistik siswa sejelas liat dosa sendiri, dari yang rajin masuk sampai yang hobi \"menghilang\" tanpa kabar. Yuk gabung PPLG, biar lo bisa rakit sistem dashboard sekeren ini dan jadi penguasa data di masa depan!" },
    { id: 16, title: "DigiLib-Master", category: "Marketing", img: "/assets/images/web/web17.jpeg", desc: "Pantau peminjaman buku semudah memantau status WA gebetan, lengkap dengan peringatan buat mereka yang hobi telat balikin. Ayo gabung PPLG, biar lo bisa bangun ekosistem digital canggih yang bikin perpustakaan jadi tempat paling keren di sekolah!" },
    { id: 17, title: "Kitara-Brew", category: "Robotics", img: "/assets/images/web/web4.jpeg", desc: "Nongkrong santai sambil ngopi itu seni, apalagi kalau ditemani menu yang bikin hati tenang tanpa bayang-bayang mantan. Ayo masuk PPLG, kita belajar bikin website kafe yang estetik biar pelanggan makin betah berlama-lama mesan kopi!" },
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
        <motion.div
            className="w-full max-w-7xl "
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 2 }} 
            viewport={{ once: true, amount: 0.3 }} 
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
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
                    disabled={isFirstPage} 
                    className={`z-20 w-10 h-[60px] flex items-center justify-center transition-all shrink-0 border-2
                        ${isFirstPage 
                            ? 'bg-[#1A1A1A] border-[#333] text-[#444] cursor-not-allowed' 
                            : 'bg-[#1A1A1A] border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:border-black hover:text-black cursor-pointer shadow-[4px_4px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none'
                        }`}
                >
                    <ChevronLeft size={28} />
                </button>

                <div className="flex-1 min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={currentPage}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all "
                        >
                            {displayedItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="group cursor-pointer p-2 bg-[#1A1A1A] pixel-border border-[#333] hover:border-[#FFD700] flex flex-col hover:scale-105 transition-all duration-300 group"
                                    onClick={() => onImageClick(item)}
                                >
                                    <div className="relative aspect-video overflow-hidden mb-4 bg-black">
                                        <img 
                                            src={item.img} 
                                            className="w-full h-full object-cover image-render-pixel " 
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
                    disabled={isLastPage} 
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
        </motion.div>
    );
};

export default MasterGallery;