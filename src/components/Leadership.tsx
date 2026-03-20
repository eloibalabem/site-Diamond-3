import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const leaders = [
  {
    name: "Gustavo Ferreira",
    role: "Sócio Diretor",
    desc: "Vasta experiência na produção de eventos e shows, atuando diretamente na organização e desenvolvimento de projetos musicais tanto no cenário nacional quanto internacional.",
    image: "https://raw.githubusercontent.com/eloibalabem/diamondmusic/main/gustavo%202.jpg"
  },
  {
    name: "Henrique D´Marque",
    role: "Sócio Diretor",
    desc: "Agrega ao quadro societário sua experiência e atuação estratégica no mercado de entretenimento, contribuindo para o fortalecimento e expansão das atividades da empresa.",
    image: "https://raw.githubusercontent.com/eloibalabem/diamondmusic/main/henrique2%20(1).jpg"
  }
];

export default function Leadership() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.leader-card', 
      { y: 100, opacity: 0, rotateX: -15 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      }
    );

    // Parallax Background
    gsap.to('.leadership-bg', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  }, { scope: containerRef });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    
    gsap.to(target, {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      ease: 'power2.out',
      duration: 0.4
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    gsap.to(target, {
      rotateX: 0,
      rotateY: 0,
      ease: 'power3.out',
      duration: 0.6
    });
  };

  return (
    <section id="leadership" ref={containerRef} data-bgcolor="#0f0514" className="py-24 bg-transparent relative overflow-hidden">
      {/* Parallax Background Texture */}
      <div 
        className="leadership-bg absolute inset-0 z-0 opacity-10 h-[120%] -top-[10%]"
        style={{
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")',
          backgroundSize: '100px'
        }}
      ></div>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-30"></div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-neon-pink/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-neon-pink text-sm font-bold tracking-[0.3em] uppercase mb-4">Quem Faz Acontecer</h2>
          <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.8] tracking-tighter uppercase">
            Nossa <span className="text-white/40">Liderança</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {leaders.map((leader, index) => (
            <div 
              key={index} 
              className="leader-card group relative rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-neon-purple/50 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(122,0,255,0.2)]"
              style={{ perspective: '1000px' }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex flex-col sm:flex-row h-full">
                {/* Image Section */}
                <div className="w-full sm:w-2/5 h-64 sm:h-auto relative overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                
                {/* Content Section */}
                <div className="w-full sm:w-3/5 p-6 md:p-8 flex flex-col justify-center bg-gradient-to-br from-white/5 to-transparent">
                  <h4 className="font-display text-2xl font-bold text-white mb-1 group-hover:text-neon-pink transition-colors">{leader.name}</h4>
                  <p className="text-neon-purple text-sm font-bold uppercase tracking-widest mb-4">{leader.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {leader.desc}
                  </p>
                  
                  <div className="flex gap-4 mt-auto">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-neon-pink hover:text-black transition-all duration-300">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-neon-purple hover:text-white transition-all duration-300">
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
