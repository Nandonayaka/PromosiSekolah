import React from 'react';
import { ArrowRight, Star, Zap, Briefcase, ShieldCheck } from 'lucide-react';

const CareerPathSection = () => {
  const paths = [
    {
      stage: "Siswa SMP/SMK",
      title: "The Beginner",
      desc: "Mulai dari nol. Kamu punya rasa penasaran tinggi tentang cara kerja aplikasi dan game?",
      icon: <Star className="text-yellow-400" />,
      color: "border-gray-700",
      animation: "fade-right"
    },
    {
      stage: "Kelas Industri Hummatech",
      title: "Digital Architect",
      desc: "Mempelajari 'senjata' koding profesional (React, Laravel, dll) dengan standar industri.",
      icon: <Zap className="text-orange-500" />,
      color: "border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.3)]",
      animation: "fade-up"
    },
    {
      stage: "Magang Perusahaan IT",
      title: "Pro Mercenary",
      desc: "Terjun langsung ke project nyata. Merasakan vibes kerja di kantor startup yang keren.",
      icon: <Briefcase className="text-cyan-400" />,
      color: "border-cyan-500",
      animation: "fade-up"
    },
    {
      stage: "Senior Developer",
      title: "The Tech Legend",
      desc: "Membangun sistem masa depan, gaji tinggi, dan dicari oleh perusahaan global.",
      icon: <ShieldCheck className="text-green-400" />,
      color: "border-green-500",
      animation: "fade-left"
    }
  ];

  return (
    <section className="py-24 px-6  relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-20 relative z-10">
        <h2 className="text-white pixel-font text-xl md:text-3xl font-black italic tracking-tighter uppercase leading-tight">
          DARI SISWA BIASA MENJADI <br />
          <span className="text-orange-500 underline decoration-double">ARSITEK DIGITAL</span>
        </h2>
        <p className="text-gray-400 pixel-font mt-6 text-[10px] uppercase tracking-widest">
          Ikuti Alur Evolusi Kariermu
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        {paths.map((path, idx) => (
          <div key={idx} className="relative flex flex-col items-center">
            <div className={`relative w-full bg-[#12121a] border-2 ${path.color} p-8 rounded-[2rem] hover:scale-105 transition-all duration-300 group min-h-[300px]`}>
              <div className="absolute -top-4 left-6 bg-black px-4 py-1 border border-inherit rounded-full">
                <span className="text-[8px] font-black text-white italic uppercase tracking-widest pixel-font">Level 0{idx + 1}</span>
              </div>

              <div className="mb-6 w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                {path.icon}
              </div>

              <h4 className="text-gray-400 pixel-font text-[8px] uppercase mb-2 tracking-widest">{path.stage}</h4>
              <h3 className="text-white font-black text-sm italic uppercase mb-4 tracking-tighter pixel-font">{path.title}</h3>
              <p className="text-gray-500 text-[10px] leading-relaxed pixel-font">
                {path.desc}
              </p>

              <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Astronaut.png" className="w-8 h-8" alt="astro" />
              </div>
            </div>

            {idx < 3 && (
              <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 z-20 text-gray-700" data-aos="fade" data-aos-delay="800">
                <ArrowRight className="w-6 h-6" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-600/5 blur-[120px] rounded-full -z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-500/5 blur-[120px] rounded-full -z-0"></div>
    </section>
  );
};

export default CareerPathSection;