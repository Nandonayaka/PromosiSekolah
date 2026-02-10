import { Code } from 'lucide-react';
import { playSfx } from '../../utils/SoundUtils';
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
          <h2 className="text-white pixel-font text-xl md:text-3xl font-bold tracking-tighter uppercase">
            MISSION: <span className="text-orange-500 underline">BECOME ELITE DEVELOPER</span>
          </h2>
        </div>
      </div>
      <div className="relative z-10 mb-32 max-w-7xl mx-auto px-6 py-16 bg-[#0a0a12] rounded-[12px] my-10 border border-white/10 overflow-hidden">
        <div className="mb-12 border-l-4 border-orange-500 pl-4 relative z-20">
          <p className="text-gray-400 pixel-font text-[10px] md:text-xs leading-relaxed">
            Jangan hanya jadi penonton perubahan. <span className="text-white">Kuasai teknologi kelas dunia</span>, bangun solusi nyata, dan buka gerbang karier profesionalmu bersama ekosistem industri Hummatech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-20">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              onClick={() => {
                playSfx('click');
                setSelectedTech(tech);
              }}
              className="group relative border-2 border-gray-800 bg-gray-900/40 p-6 transition-all hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] rounded-2xl cursor-pointer flex items-center justify-between"
            >
              <div className="flex items-center gap-4 z-10">
                <div className="w-14 h-14 p-2 bg-white/5 border border-white/10 rounded-xl group-hover:scale-110 transition-transform">
                  <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-white pixel-font text-xs font-bold uppercase tracking-widest group-hover:text-cyan-400">
                    {tech.name}
                  </h3>
                  <p className="text-[8px] text-gray-500 pixel-font italic">{tech.role}</p>
                </div>
              </div>

              <div className="absolute right-4 bottom-4 opacity-30 group-hover:opacity-100 transition-opacity">
                <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Astronaut.png" alt="Astronaut" className="w-12 h-12 object-contain animate-float" />
              </div>

              <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-400 opacity-0 group-hover:opacity-100"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 bg-cyan-400 opacity-0 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStackSection;