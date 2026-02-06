import { Code } from 'lucide-react';
const TechStackSection = ({ techStack, setSelectedTech, selectedTech }) => {
  return (
    <section >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    <div className="px-4 flex flex-row gap-4 items-center">
        <div className="bg-[#00FF41] p-4 pixel-border shadow-[4px_4px_0_0_#000]">
            <Code className="text-black" size={24} />
       </div>
        <div>
            <h2 className="text-white font-mono text-3xl font-bold tracking-tighter uppercase">
            MISSION: <span className="text-orange-500 underline">BECOME ELITE DEVELOPER</span>
            </h2>
        </div>
    </div>
    <div className="relative z-10 mb-32 max-w-7xl mx-auto px-6 py-16 bg-[#0a0a12] rounded-[12px] my-10 border border-white/10 overflow-hidden">
      <div className="mb-12 border-l-4 border-orange-500 pl-4 relative z-20">
       <p className="text-gray-400 font-mono text-sm  leading-relaxed">
            Jangan hanya jadi penonton perubahan. <span className="text-white">Kuasai teknologi kelas dunia</span>, bangun solusi nyata, dan buka gerbang karier profesionalmu bersama ekosistem industri Hummatech.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-20">
        {techStack.map((tech) => (
          <div key={tech.name} onClick={() => setSelectedTech(tech)} className="group relative border-2 border-gray-800 bg-gray-900/40 p-6 transition-all hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] rounded-2xl cursor-pointer flex items-center justify-between">
            <div className="flex items-center gap-4 z-10">
              <div className="w-14 h-14 p-2 bg-white/5 border border-white/10 rounded-xl group-hover:scale-110 transition-transform">
                <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-white font-mono text-lg font-bold uppercase tracking-widest group-hover:text-cyan-400">
                  {tech.name}
                </h3>
                <p className="text-[10px] text-gray-500 font-mono italic">{tech.role}</p>
              </div>
            </div>

            <div className="absolute right-4 bottom-4 opacity-30 group-hover:opacity-100 transition-opacity">
               <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Astronaut.png" alt="Astronaut" className="w-12 h-12 object-contain animate-float"/>
            </div>

            <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-400 opacity-0 group-hover:opacity-100"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-cyan-400 opacity-0 group-hover:opacity-100"></div>
          </div>
        ))}
      </div>

      {selectedTech && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-lg border-2 border-orange-500/50 bg-[#0d0d15] p-8 font-mono text-white shadow-[0_0_50px_rgba(249,115,22,0.2)] rounded-3xl overflow-hidden">
            <div className="flex justify-between items-start border-b border-gray-800 pb-4 mb-6">
              <div className="flex items-center gap-4">
                 <img src={selectedTech.logo} className="w-12 h-12" alt="logo" />
                 <div>
                    <h3 className="text-3xl font-bold text-orange-500 uppercase tracking-tighter">
                      {selectedTech.name}
                    </h3>
                    <span className="text-[10px] bg-orange-500/10 text-orange-400 px-2 py-1 border border-orange-500/30 rounded mt-2 inline-block">
                        STATUS: READY_TO_LEARN
                    </span>
                 </div>
              </div>
              <button  onClick={() => setSelectedTech(null)} className="text-gray-500 hover:text-orange-500 transition-colors font-bold">
                [ Close_X ]
              </button>
            </div>

            <div className="space-y-6">
              <div className="bg-orange-500/5 p-5 border-l-4 border-orange-500">
                <p className="text-[10px] text-orange-500 mb-2 font-bold tracking-widest"> MISSION_OBJECTIVE</p>
                <p className="text-sm text-gray-300 leading-relaxed italic leading-relaxed">
                  "{selectedTech.desc}"
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-[11px] uppercase text-gray-400">
                <div className="border border-gray-800 p-3 bg-white/5 rounded-lg">
                  <p className="mb-1 opacity-50">CLASS_TYPE</p>
                  <p className="text-white font-bold text-sm">Industrial</p>
                </div>
                <div className="border border-gray-800 p-3 bg-white/5 rounded-lg">
                  <p className="mb-1 opacity-50">MENTOR_SUPPORT</p>
                  <p className="text-white font-bold text-sm">Hummatech Indonesia</p>
                </div>
              </div>

              <div className="text-[11px]">
                <p className="text-cyan-400 mb-2 font-black tracking-widest"> CORE_COMPETENCY</p>
                <p className="bg-cyan-400/5 p-3 border border-cyan-400/20 text-cyan-300 uppercase font-bold rounded-lg">
                  {selectedTech.role}
                </p>
              </div>
            </div>

            <p className="mt-8 text-center text-[10px] text-gray-600 animate-pulse uppercase tracking-widest">
              -- AWAKEN YOUR POTENTIAL IN HUMMATECH INDUSTRIAL CLASS --
            </p>
          </div>
        </div>
      )}
      </div>
    </section>
  );
};

export default TechStackSection;