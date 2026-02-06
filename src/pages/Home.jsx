import React, { useState } from 'react';
import { Megaphone, TrendingUp, Globe, Palette, Layout, User, Rocket, Zap, Award, Target, Code, Database, Briefcase, ShieldCheck } from 'lucide-react';
import Grainient from '../components/animations/Grainient';
import SplitText from '../components/animations/SplitText';
import BlurText from '../components/animations/BlurText';
import ShinyText from '../components/animations/ShinyText';
import TiltedCard from '../components/animations/TiltedCard';
import DecayCard from '../components/animations/DecayCard';
import MarqueeGallery from '../components/animations/MarqueeGallery';

const Home = () => {
    const [activeTab, setActiveTab] = useState('all');

    const portfolioData = {
        marketing: [
            { id: 1, title: 'Social Media Campaign', category: 'Digital Marketing', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800', tech: 'Ads, SEO, Content' },
            { id: 2, title: 'Brand Awareness Strategy', category: 'Digital Marketing', img: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=800', tech: 'Analytics, Strategy' },
        ],
        uiux: [
            { id: 3, title: 'EcoLife App Design', category: 'UI/UX Design', img: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=800', tech: 'Figma, Prototyping' },
            { id: 4, title: 'Fintech Dashboard', category: 'UI/UX Design', img: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800', tech: 'React, Tailwind' },
        ],
        frontend: [
            { id: 5, title: 'E-Commerce Frontend', category: 'Frontend', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800', tech: 'React, Next.js' },
        ],
        backend: [
            { id: 6, title: 'Realtime Chat API', category: 'Backend', img: 'https://images.unsplash.com/photo-1558494949-ef8b56b5141e?q=80&w=800', tech: 'Node.js, PostgreSQL' },
        ],
        pm: [
            { id: 7, title: 'Internal School ERP', category: 'Project Manager', img: 'https://images.unsplash.com/photo-1531403001884-26976be039b3?q=80&w=800', tech: 'Agile, Jira' },
        ],
        qa: [
            { id: 8, title: 'Automated Testing Suite', category: 'Quality Assurance', img: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=800', tech: 'Selenium, Jest' },
        ]
    };

    const allItems = Object.values(portfolioData).flat();
    const filteredItems = activeTab === 'all' ? allItems : portfolioData[activeTab];

    return (
        <div className="relative min-h-screen bg-[#FDFCFB] text-[#333] font-sans selection:bg-[#FFD166] selection:text-black overflow-x-hidden">
            {/* React Bits - Grainient Background */}
            <Grainient
                colors={["#EF476F", "#FFD166", "#06D6A0", "#118AB2", "#FFFFFF"]}
                speed={0.015}
                noiseOpacity={0.05}
            />

            {/* Custom Styles */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Outfit:wght@400;700;900&display=swap');
        
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        .outfit-font { font-family: 'Outfit', sans-serif; }
        
        .card-shadow { box-shadow: 0 20px 40px rgba(0,0,0,0.03); }
        
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>

            {/* Navbar Minimalist */}
            <nav className="relative z-50 max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
                <DecayCard>
                    <div className="outfit-font text-2xl font-black italic text-[#118AB2]">EXHIBITION.</div>
                </DecayCard>
                <div className="hidden md:flex gap-10 items-center font-semibold text-sm tracking-wide">
                    {['Home', 'Digital Marketing', 'UI/UX Design'].map((item, i) => (
                        <DecayCard key={item} delay={i * 0.1}>
                            <a href="#" className="text-[#073B4C] hover:text-[#EF476F] transition-colors">{item}</a>
                        </DecayCard>
                    ))}
                    <DecayCard delay={0.3}>
                        <button className="px-6 py-2.5 bg-[#118AB2] text-white rounded-full hover:bg-[#073B4C] transition-all shadow-lg shadow-[#118AB2]/20">Join Event</button>
                    </DecayCard>
                </div>
            </nav>

            {/* HERO SECTION */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-32 grid md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1 space-y-8 text-center md:text-left">
                    <DecayCard>
                        <div className="inline-block px-4 py-2 bg-[#FFD166]/20 text-[#D4A100] rounded-full text-xs font-bold tracking-[0.2em] uppercase">School Exhibition 2024</div>
                    </DecayCard>

                    <h1 className="outfit-font text-5xl md:text-7xl lg:text-8xl font-black text-[#073B4C] leading-[0.9] tracking-tight">
                        <SplitText
                            text="Wellcome"
                            className="block"
                            delay={50}
                            textAlign="left"
                        />
                        <span className="text-[#EF476F] italic">
                            <SplitText
                                text="Creative"
                                className="block"
                                delay={80}
                                textAlign="left"
                            />
                        </span>
                        <SplitText
                            text="NextGen."
                            className="block"
                            delay={100}
                            textAlign="left"
                        />
                    </h1>

                    <DecayCard delay={0.5}>
                        <p className="text-lg text-[#073B4C]/60 max-w-md leading-relaxed mx-auto md:mx-0">
                            Menjelajahi kreativitas tanpa batas siswa dalam dunia Digital Marketing & UI/UX Design yang inovatif dan menginspirasi.
                        </p>
                    </DecayCard>

                    <DecayCard delay={0.7} className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
                        <button className="px-10 py-4 bg-[#EF476F] text-white rounded-2xl font-bold hover:bg-[#D64062] transition-all shadow-xl shadow-[#EF476F]/25 text-sm uppercase tracking-widest">
                            <ShinyText text="Lihat Gallery" />
                        </button>
                        <button className="px-10 py-4 bg-white/50 backdrop-blur-md text-[#073B4C] border-2 border-[#073B4C]/5 rounded-2xl font-bold hover:border-[#EF476F] transition-all text-sm uppercase tracking-widest">Jadwal Acara</button>
                    </DecayCard>
                </div>

                <div className="order-1 md:order-2 flex justify-center">
                    <TiltedCard rotateXRange={10} rotateYRange={10}>
                        <div className="relative w-full">
                            <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#FFD166] rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
                            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-[#06D6A0] rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse outline-delay-1000"></div>

                            <img src="./assets/people/ppl2.png" alt="Students Collaboration" className="w-full h-[500px] object-cover" />
                        </div>
                    </TiltedCard>
                </div>
            </section>

            {/* STATS / FEATURES */}
            <section className="relative z-10 py-20 border-y border-[#073B4C]/5 bg-white/10">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {[
                        { label: 'Projek Digital', val: '120+', color: '#118AB2' },
                        { label: 'Siswa Kreatif', val: '45', color: '#EF476F' },
                        { label: 'UX Case Study', val: '32', color: '#FFD166' },
                        { label: 'Global Reach', val: '15K', color: '#06D6A0' }
                    ].map((stat, i) => (
                        <DecayCard key={i} delay={i * 0.1}>
                            <div className="space-y-1">
                                <div className="outfit-font text-4xl md:text-5xl font-black italic" style={{ color: stat.color }}>{stat.val}</div>
                                <div className="text-xs font-bold uppercase tracking-widest text-[#073B4C]/40">{stat.label}</div>
                            </div>
                        </DecayCard>
                    ))}
                </div>
            </section>

            {/* PORTFOLIO SECTION */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 py-32">
                <div className="text-center mb-20 space-y-4">
                    <BlurText
                        text="Our Creative Playground"
                        className="outfit-font text-4xl md:text-5xl font-black text-[#073B4C] justify-center"
                        delay={150}
                    />
                    <DecayCard>
                        <p className="text-[#073B4C]/40 uppercase tracking-[0.3em] text-xs font-bold font-sans">Portfolio Karya Siswa Terpilih</p>
                    </DecayCard>

                    <DecayCard delay={0.3} className="flex justify-center flex-wrap gap-2 pt-10">
                        {[
                            { id: 'all', label: 'Semua' },
                            { id: 'marketing', label: 'Marketing' },
                            { id: 'uiux', label: 'UI/UX' },
                            { id: 'frontend', label: 'Frontend' },
                            { id: 'backend', label: 'Backend' },
                            { id: 'pm', label: 'PM' },
                            { id: 'qa', label: 'QA' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === tab.id
                                    ? 'bg-[#073B4C] text-white shadow-lg'
                                    : 'bg-white/50 backdrop-blur-md text-[#073B4C]/50 hover:bg-[#073B4C]/5 border border-white/20'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </DecayCard>
                </div>

                <div className="relative mt-20 w-full overflow-hidden">
                    <MarqueeGallery speed={40} direction="right">
                        {filteredItems.map((item) => (
                            <div key={item.id} className="w-[380px] px-2">
                                <TiltedCard rotateXRange={5} rotateYRange={5}>
                                    <div className="group bg-white/60 backdrop-blur-md rounded-[2.5rem] overflow-hidden card-shadow border border-white/20">
                                        <div className="h-64 relative overflow-hidden bg-[#F8F9FA]">
                                            <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" />
                                            <div className="absolute top-4 left-4">
                                                <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-[#073B4C] border border-[#073B4C]/10">{item.category}</span>
                                            </div>
                                        </div>
                                        <div className="p-8 space-y-4 whitespace-normal text-left">
                                            <h4 className="outfit-font text-2xl font-black text-[#073B4C] leading-tight">{item.title}</h4>
                                            <p className="text-xs text-[#073B4C]/40 font-medium tracking-wide">
                                                <span className="text-[#EF476F]">Tech:</span> {item.tech}
                                            </p>
                                            <button className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#118AB2] hover:text-[#073B4C] transition-colors pt-4 group/btn">
                                                Explore Case Study
                                                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                                            </button>
                                        </div>
                                    </div>
                                </TiltedCard>
                            </div>
                        ))}
                    </MarqueeGallery>
                </div>
            </section>

            {/* INTRO DIGMAR SECTION */}
            <section className="relative z-10 mx-auto px-6 py-24 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <DecayCard delay={0.1}>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-[#118AB2]/10 rounded-[3rem] blur-2xl group-hover:bg-[#118AB2]/20 transition-all duration-700"></div>
                            <div className="ml-10 relative bg-white/40 backdrop-blur-2xl rounded-[3rem] p-12 border border-white/40 shadow-2xl">
                                <div className="w-16 h-16 bg-[#118AB2] rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-[#118AB2]/30 rotate-3 group-hover:rotate-0 transition-transform">
                                    <Megaphone size={32} />
                                </div>
                                <h3 className="outfit-font text-4xl font-black text-[#073B4C] mb-6">Apa itu <span className="text-[#118AB2]">Digital Marketing?</span></h3>
                                <p className="text-lg text-[#073B4C]/60 leading-relaxed font-medium">
                                    Digital Marketing (DIGMAR) bukan sekadar posting di sosial media. Ini adalah strategi seni dan data untuk menjangkau audiens yang tepat, di waktu yang tepat, menggunakan media digital.
                                </p>
                                <div className="grid grid-cols-2 gap-6 mt-10">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-[#118AB2] font-bold text-sm uppercase tracking-wider">
                                            <TrendingUp size={16} /> SEO & SEM
                                        </div>
                                        <p className="text-xs text-[#073B4C]/40">Mengoptimalkan visibilitas di mesin pencari.</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-[#118AB2] font-bold text-sm uppercase tracking-wider">
                                            <Globe size={16} /> Social Media
                                        </div>
                                        <p className="text-xs text-[#073B4C]/40">Membangun komunitas dan engagement brand.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </DecayCard>
                    <div className="space-y-8 mr-14">
                        <BlurText text="Kuasai Dunia Digital" className="outfit-font text-5xl md:text-7xl font-black text-[#073B4C] tracking-tighter" delay={100} />
                        <DecayCard delay={0.3}>
                            <p className="text-xl text-[#073B4C]/50 leading-relaxed italic border-l-4 border-[#118AB2] pl-8">
                                "Di era sekarang, bisnis yang tidak terlihat secara digital adalah bisnis yang tidak ada."
                            </p>
                        </DecayCard>
                        <DecayCard delay={0.4} className="flex gap-4">
                            <div className="mr-50 px-6 py-6 bg-white/60 backdrop-blur-md rounded-3xl border border-white/40 shadow-xl flex-grow">
                                <h4 className="font-black text-[#073B4C] mb-2 uppercase text-xs tracking-widest text-[#118AB2]">Future Growth</h4>
                                <p className="text-sm text-[#073B4C]/60">Permintaan tenaga ahli Digmar naik 40% setiap tahunnya.</p>
                            </div>
                        </DecayCard>
                    </div>
                </div>
            </section>

            {/* INTRO UIUX SECTION */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 space-y-8">
                        <BlurText text="Experience is Everything" className="outfit-font text-5xl md:text-7xl font-black text-[#073B4C] tracking-tighter" delay={100} />
                        <DecayCard delay={0.3}>
                            <p className="text-xl text-[#073B4C]/50 leading-relaxed italic border-r-4 border-[#EF476F] pr-8 text-right">
                                "Desain bukan hanya tentang tampilan, tapi tentang bagaimana sebuah produk memberikan solusi."
                            </p>
                        </DecayCard>
                        <DecayCard delay={0.4} className="flex gap-4 justify-end">
                            <div className="px-6 py-6 bg-white/60 backdrop-blur-md rounded-3xl border border-white/40 shadow-xl max-w-xs text-right">
                                <h4 className="font-black text-[#073B4C] mb-2 uppercase text-xs tracking-widest text-[#EF476F]">User Centric</h4>
                                <p className="text-sm text-[#073B4C]/60">Fokus pada kemudahan dan kepuasan pengguna saat menggunakan aplikasi.</p>
                            </div>
                        </DecayCard>
                    </div>
                    <DecayCard delay={0.1} className="order-1 md:order-2">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-[#EF476F]/10 rounded-[3rem] blur-2xl group-hover:bg-[#EF476F]/20 transition-all duration-700"></div>
                            <div className="relative bg-white/40 backdrop-blur-2xl rounded-[3rem] p-12 border border-white/40 shadow-2xl">
                                <div className="w-16 h-16 bg-[#EF476F] rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-[#EF476F]/30 -rotate-3 group-hover:rotate-0 transition-transform">
                                    <Palette size={32} />
                                </div>
                                <h3 className="outfit-font text-4xl font-black text-[#073B4C] mb-6">Apa itu <span className="text-[#EF476F]">UI/UX Design?</span></h3>
                                <p className="text-lg text-[#073B4C]/60 leading-relaxed font-medium">
                                    UI (User Interface) adalah jembatan visual, sedangkan UX (User Experience) adalah rasa dan logika di baliknya. Kita menciptakan pengalaman digital yang cantik dan fungsional.
                                </p>
                                <div className="grid grid-cols-2 gap-6 mt-10">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-[#EF476F] font-bold text-sm uppercase tracking-wider">
                                            <Layout size={16} /> Wireframing
                                        </div>
                                        <p className="text-xs text-[#073B4C]/40">Membangun blueprint digital sistem.</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-[#EF476F] font-bold text-sm uppercase tracking-wider">
                                            <User size={16} /> User Research
                                        </div>
                                        <p className="text-xs text-[#073B4C]/40">Memahami kebutuhan nyata pengguna.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </DecayCard>
                </div>
            </section>

            {/* DEV & MANAGEMENT ROLES - COMPACT CARDS */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Frontend */}
                    <DecayCard delay={0.1}>
                        <div className="h-full bg-white/40 backdrop-blur-2xl rounded-[2.5rem] p-8 border border-white/40 shadow-xl group hover:shadow-2xl transition-all">
                            <div className="w-12 h-12 bg-[#06D6A0] rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-[#06D6A0]/20">
                                <Code size={24} />
                            </div>
                            <h3 className="outfit-font text-2xl font-black text-[#073B4C] mb-3">Frontend</h3>
                            <p className="text-[#073B4C]/60 text-xs leading-relaxed mb-6">Membangun antarmuka interaktif & responsif.</p>
                            <div className="flex flex-wrap gap-1.5">
                                {['React', 'Vite'].map(t => (
                                    <span key={t} className="px-2 py-0.5 bg-[#06D6A0]/10 text-[#06D6A0] text-[9px] font-black uppercase rounded-md">{t}</span>
                                ))}
                            </div>
                        </div>
                    </DecayCard>

                    {/* Backend */}
                    <DecayCard delay={0.2}>
                        <div className="h-full bg-white/40 backdrop-blur-2xl rounded-[2.5rem] p-8 border border-white/40 shadow-xl group hover:shadow-2xl transition-all">
                            <div className="w-12 h-12 bg-[#118AB2] rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-[#118AB2]/20">
                                <Database size={24} />
                            </div>
                            <h3 className="outfit-font text-2xl font-black text-[#073B4C] mb-3">Backend</h3>
                            <p className="text-[#073B4C]/60 text-xs leading-relaxed mb-6">Arsitektur server & management database.</p>
                            <div className="flex flex-wrap gap-1.5">
                                {['NodeJS', 'SQL'].map(t => (
                                    <span key={t} className="px-2 py-0.5 bg-[#118AB2]/10 text-[#118AB2] text-[9px] font-black uppercase rounded-md">{t}</span>
                                ))}
                            </div>
                        </div>
                    </DecayCard>

                    {/* PM */}
                    <DecayCard delay={0.3}>
                        <div className="h-full bg-white/40 backdrop-blur-2xl rounded-[2.5rem] p-8 border border-white/40 shadow-xl group hover:shadow-2xl transition-all">
                            <div className="w-12 h-12 bg-[#EF476F] rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-[#EF476F]/20">
                                <Briefcase size={24} />
                            </div>
                            <h3 className="outfit-font text-2xl font-black text-[#073B4C] mb-3">Project Mgr</h3>
                            <p className="text-[#073B4C]/60 text-xs leading-relaxed mb-6">Management timeline & visi project.</p>
                            <div className="flex flex-wrap gap-1.5">
                                {['Agile', 'Scrum'].map(t => (
                                    <span key={t} className="px-2 py-0.5 bg-[#EF476F]/10 text-[#EF476F] text-[9px] font-black uppercase rounded-md">{t}</span>
                                ))}
                            </div>
                        </div>
                    </DecayCard>

                    {/* QA */}
                    <DecayCard delay={0.4}>
                        <div className="h-full bg-white/40 backdrop-blur-2xl rounded-[2.5rem] p-8 border border-white/40 shadow-xl group hover:shadow-2xl transition-all">
                            <div className="w-12 h-12 bg-[#FFD166] rounded-xl flex items-center justify-center text-[#D4A100] mb-6 shadow-lg shadow-[#FFD166]/20">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="outfit-font text-2xl font-black text-[#073B4C] mb-3">QA Engineer</h3>
                            <p className="text-[#073B4C]/60 text-xs leading-relaxed mb-6">Standard kualitas & pengujian bug.</p>
                            <div className="flex flex-wrap gap-1.5">
                                {['Testing', 'Security'].map(t => (
                                    <span key={t} className="px-2 py-0.5 bg-[#FFD166]/10 text-[#D4A100] text-[9px] font-black uppercase rounded-md">{t}</span>
                                ))}
                            </div>
                        </div>
                    </DecayCard>
                </div>
            </section>
            <section className="relative z-10 max-w-7xl mx-auto px-6 py-32 overflow-hidden">
                <div className="text-center mb-20">
                    <BlurText text="Kenapa Harus Industri Kreatif?" className="outfit-font text-4xl md:text-6xl font-black text-[#073B4C] mb-4" delay={100} />
                    <DecayCard>
                        <p className="text-[#073B4C]/30 uppercase tracking-[0.4em] text-xs font-black">Keunggulan Berkarir di Dunia Digital</p>
                    </DecayCard>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Rocket, title: 'High Demand', color: '#118AB2', bg: 'bg-[#118AB2]/10', desc: 'Hampir semua perusahaan kini bertransformasi digital dan membutuhkan tenaga ahli.' },
                        { icon: Zap, title: 'WFH Friendly', color: '#EF476F', bg: 'bg-[#EF476F]/10', desc: 'Fleksibilitas kerja tinggi. Anda bisa bekerja dari mana saja asalkan ada koneksi internet.' },
                        { icon: Award, title: 'Better Income', color: '#06D6A0', bg: 'bg-[#06D6A0]/10', desc: 'Skill spesifik seperti UI/UX dan Digmar dihargai sangat tinggi di pasar global.' }
                    ].map((item, i) => (
                        <DecayCard key={i} delay={i * 0.15}>
                            <TiltedCard rotateXRange={10} rotateYRange={10}>
                                <div className="bg-white/40 backdrop-blur-xl border border-white/40 p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all h-full group">
                                    <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                        <item.icon size={28} style={{ color: item.color }} />
                                    </div>
                                    <h4 className="outfit-font text-2xl font-black text-[#073B4C] mb-4">{item.title}</h4>
                                    <p className="text-[#073B4C]/60 text-sm leading-relaxed font-medium">
                                        {item.desc}
                                    </p>
                                </div>
                            </TiltedCard>
                        </DecayCard>
                    ))}
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 pb-40">
                <DecayCard>
                    <div className="bg-[#118AB2]/90 backdrop-blur-xl rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#118AB2] to-[#06D6A0] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                        <div className="relative z-10 space-y-8">
                            <h2 className="outfit-font text-5xl md:text-7xl font-black">Ready to <br /> Collaborates?</h2>
                            <p className="text-white/80 max-w-xl mx-auto text-lg">Jangan lewatkan kesempatan untuk bertemu dengan desainer dan strategist masa depan sekolah kami.</p>
                            <button className="px-12 py-5 bg-[#FFD166] text-[#073B4C] rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-yellow-500/20 text-sm">Registrasi Sekarang</button>
                        </div>
                        {/* Abstract shapes */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
                    </div>
                </DecayCard>
            </section>

            {/* FOOTER */}
            <footer className="relative z-10 py-20 border-t border-[#073B4C]/5 text-center space-y-6">
                <ShinyText text="Exhibition 2024." className="outfit-font text-3xl font-black italic text-[#073B4C]/20 uppercase tracking-widest" />
                <div className="flex justify-center gap-10 font-bold text-[10px] tracking-[0.3em] text-[#073B4C]/40 uppercase">
                    {['Instagram', 'LinkedIn', 'Dribbble'].map(social => (
                        <a key={social} href="#" className="hover:text-[#EF476F] transition-colors">{social}</a>
                    ))}
                </div>
                <p className="text-[10px] tracking-[0.2em] text-[#073B4C]/20 font-medium">© 2024 SCHOOL EXHIBITION - CREATED WITH CREATIVITY</p>
            </footer>
        </div>
    );
};

export default Home;
