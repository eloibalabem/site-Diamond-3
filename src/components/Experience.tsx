import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Maximize, Speaker, Video, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.to('.animated-divider-experience', {
      width: '100%',
      duration: 1.5,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      }
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      }
    });

    tl.fromTo('.exp-badge', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' })
      .fromTo('.exp-title', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.6')
      .fromTo('.exp-subtitle', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.6')
      .fromTo('.exp-desc', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.4')
      .fromTo('.exp-card', { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out' }, '-=0.4')
      .fromTo('.exp-gif-container', { scale: 0.95, opacity: 0, filter: 'blur(10px)' }, { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power2.out' }, '-=0.8')
      .fromTo('.exp-diamond', { scale: 0, rotation: -45, opacity: 0 }, { scale: 1, rotation: 0, opacity: 1, duration: 1.5, ease: 'elastic.out(1, 0.5)' }, '-=0.5');

    // Continuous slow rotation for the diamond
    // gsap.to('.exp-diamond-img', {
    //   rotation: 360,
    //   duration: 20,
    //   repeat: -1,
    //   ease: 'none'
    // });

  }, { scope: containerRef });

  return (
    <section id="experience" ref={containerRef} data-bgcolor="#050505" className="relative py-32 overflow-hidden bg-transparent">
      <div className="animated-divider-experience absolute top-0 left-1/2 -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-30 shadow-[0_0_15px_rgba(122,0,255,0.6)] w-0 z-20"></div>
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="w-full lg:w-5/12">
            <div className="exp-badge inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-md shadow-[0_0_20px_rgba(122,0,255,0.15)]">
              <span className="w-2.5 h-2.5 rounded-full bg-neon-purple shadow-[0_0_10px_rgba(122,0,255,0.8)]"></span>
              <span className="text-neon-purple text-xs font-bold tracking-widest uppercase">Imersão Total</span>
            </div>
            
            <h2 className="text-neon-pink text-sm font-bold tracking-[0.3em] uppercase mb-4">Experiência</h2>
            <h3 className="exp-title font-display text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.8] tracking-tighter uppercase mb-4">
              A Experiência <br />
              <span className="text-white/40">Diamond</span>
            </h3>

            <h4 className="exp-subtitle text-xl md:text-2xl font-medium text-white mb-6">
              Onde a tecnologia encontra a emoção pura.
            </h4>
            
            <p className="exp-desc text-lg text-gray-300 font-light leading-relaxed mb-10 border-l-2 border-neon-purple/50 pl-6">
              Não construímos apenas palcos; projetamos emoções. Cada feixe de luz, cada frequência de som e cada elemento visual é meticulosamente criado para transportar o público para uma nova dimensão.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {[
                { label: "Design de Palco", val: "Imersivo", color: "text-neon-pink", border: "hover:border-neon-pink/50", hoverBg: "group-hover:bg-neon-pink/10", hoverShadow: "hover:shadow-[0_0_20px_rgba(255,0,122,0.3)]", icon: <Maximize size={18} className="text-neon-pink mb-2 group-hover:scale-125 transition-transform duration-300" /> },
                { label: "Som", val: "Alta Fidelidade", color: "text-neon-purple", border: "hover:border-neon-purple/50", hoverBg: "group-hover:bg-neon-purple/10", hoverShadow: "hover:shadow-[0_0_20px_rgba(122,0,255,0.3)]", icon: <Speaker size={18} className="text-neon-purple mb-2 group-hover:scale-125 transition-transform duration-300" /> },
                { label: "Público", val: "Elétrico", color: "text-neon-pink", border: "hover:border-neon-pink/50", hoverBg: "group-hover:bg-neon-pink/10", hoverShadow: "hover:shadow-[0_0_20px_rgba(255,0,122,0.3)]", icon: <Zap size={18} className="text-neon-pink mb-2 group-hover:scale-125 transition-transform duration-300" /> },
                { label: "Iluminação", val: "Cinematográfica", color: "text-brand-red", border: "hover:border-brand-red/50", hoverBg: "group-hover:bg-brand-red/10", hoverShadow: "hover:shadow-[0_0_20px_rgba(255,77,77,0.3)]", icon: <Video size={18} className="text-brand-red mb-2 group-hover:scale-125 transition-transform duration-300" /> }
              ].map((item, i) => (
                <div key={i} className={`exp-card group glass-panel px-4 sm:px-6 py-4 rounded-xl transition-all duration-300 border border-white/5 ${item.border} ${item.hoverBg} ${item.hoverShadow} hover:-translate-y-1 hover:scale-105 relative overflow-hidden flex-1 min-w-[130px] sm:min-w-[140px] cursor-pointer`}>
                  <div className={`absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  {/* Subtle texture overlay */}
                  <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
                  <div className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                    {item.icon}
                    <div className={`${item.color} font-bold text-sm sm:text-base mb-1 break-words transition-colors duration-300 group-hover:text-white`}>{item.val}</div>
                    <div className="text-[10px] uppercase tracking-widest text-gray-500 transition-colors duration-300 group-hover:text-gray-300">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Cinematic GIF */}
          <div className="w-full lg:w-7/12 exp-gif-container relative mt-12 lg:mt-0">
            
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(122,0,255,0.2)] group aspect-video lg:aspect-[16/10]">
              {/* Overlay gradient for cinematic feel */}
              <div className="absolute inset-0 bg-gradient-to-tr from-deep-black via-transparent to-neon-purple/20 z-10 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent z-10 opacity-80"></div>
              
              {/* High quality concert Video */}
              <video 
                src="https://raw.githubusercontent.com/eloibalabem/diamondmusic/main/experiencia%20diamond.mp4" 
                className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000"
                autoPlay
                loop
                muted
                playsInline
              />
              
              {/* Glowing elements over the GIF */}
              <div className="absolute bottom-8 left-8 z-20">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2 h-2 rounded-full bg-neon-pink shadow-[0_0_10px_rgba(255,0,122,1)]"></span>
                  <span className="text-xs font-bold tracking-widest uppercase text-white">Live Action</span>
                </div>
                <div className="text-2xl font-display font-bold text-white">Sinta a Energia</div>
              </div>
            </div>
            
            {/* Decorative floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border border-brand-red/30 rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border border-neon-pink/20 rounded-full pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
