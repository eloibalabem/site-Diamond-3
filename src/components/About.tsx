import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Counter({ end, suffix = "", label }: { end: number, suffix?: string, label: string }) {
  const countRef = useRef(null);
  const containerRef = useRef(null);
  const [isFinished, setIsFinished] = useState(false);

  useGSAP(() => {
    gsap.to(countRef.current, {
      innerHTML: end,
      duration: 2,
      snap: { innerHTML: 1 },
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
      onComplete: () => setIsFinished(true)
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={`about-stat glass-panel p-6 rounded-2xl border-t-4 border-t-neon-pink relative overflow-hidden group hover:-translate-y-2 transition-all duration-500 flex flex-col items-center justify-center ${isFinished ? 'shadow-[0_0_30px_rgba(255,0,122,0.3)] border-neon-pink/50' : ''}`}>
      <div className="absolute inset-0 bg-neon-pink/5 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
      
      {/* Subtle particles */}
      {isFinished && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50">
          <div className="absolute top-2 left-4 w-1 h-1 bg-neon-pink rounded-full"></div>
          <div className="absolute bottom-4 right-6 w-1 h-1 bg-neon-purple rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      )}

      <div className="relative z-10 flex flex-col items-center">
        <span className={`text-4xl md:text-5xl font-display font-bold text-white mb-1 flex items-center justify-center transition-all duration-500 ${isFinished ? 'neon-text-pink scale-110' : ''}`}>
          +<span ref={countRef}>0</span>{suffix}
        </span>
        <span className="text-xs md:text-sm uppercase tracking-widest text-gray-400 text-center mt-2">{label}</span>
      </div>
    </div>
  );
}

export default function About() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.to('.animated-divider-about', {
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
        start: 'top 75%',
      }
    });

    tl.from('.about-badge', { y: 20, opacity: 0, duration: 0.5 })
      .from('.about-title .line span', { 
        y: 100, 
        opacity: 0, 
        stagger: 0.1, 
        duration: 0.8, 
        ease: 'power4.out' 
      }, '-=0.3')
      .from('.about-desc', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
      .from('.about-stat', { scale: 0.9, opacity: 0, stagger: 0.1, duration: 0.5 }, '-=0.2');

    // Parallax images
    gsap.to('.img-main', {
      yPercent: 10,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    gsap.to('.img-float', {
      yPercent: -10,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    // Image reveal animation
    const revealElements = document.querySelectorAll('.img-reveal-mask');
    revealElements.forEach((el) => {
      gsap.fromTo(el, 
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)',
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef} data-bgcolor="#0a0a0f" className="py-24 md:py-32 bg-transparent relative overflow-hidden">
      <div className="animated-divider-about absolute top-0 left-1/2 -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-neon-pink to-transparent opacity-30 shadow-[0_0_15px_rgba(255,0,122,0.6)] w-0"></div>
      
      {/* Geometric Diamond Lines Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diamond-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="url(#neon-grad)" strokeWidth="0.5"/>
            </pattern>
            <linearGradient id="neon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff007f" />
              <stop offset="100%" stopColor="#4a00e0" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#diamond-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <h2 className="text-neon-pink text-sm font-bold tracking-[0.3em] uppercase mb-4">Quem Somos</h2>
          <h3 className="about-title font-display text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.8] tracking-tighter uppercase">
            <div className="line overflow-hidden"><span className="block text-white">Conectando o Brasil Aos</span></div>
            <div className="line overflow-hidden"><span className="block text-white/40 pb-2">Palcos Globais</span></div>
          </h3>
        </div>

        {/* Interleaved Content Blocks */}
        <div className="space-y-24 md:space-y-32">
          
          {/* Block 1: Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2 about-desc">
              <p className="text-xl text-white font-normal mb-6 leading-relaxed">
                A <span className="text-neon-pink font-semibold neon-text-pink">Diamond Music</span> é uma produtora de entretenimento especializada na produção de shows, eventos e projetos artísticos no Brasil e no exterior, atuando também na intermediação estratégica de artistas para apresentações em diferentes mercados.
              </p>
              <div className="pl-6 border-l-2 border-neon-purple/50 py-2 text-gray-300">
                <p className="mb-4">
                  Fundada em 2018, a empresa vem consolidando sua presença no setor por meio da realização de eventos e do desenvolvimento de projetos que conectam artistas, produtores, parceiros e públicos em <span className="text-white font-medium">experiências de alto nível</span> no universo da música e do entretenimento.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 h-[400px] relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group img-reveal-mask">
              <div className="absolute inset-0 bg-neon-purple/20 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=60&w=800&auto=format&fit=crop" 
                alt="Concert Production Main" 
                className="w-full h-full object-cover transition-all duration-700 scale-105 img-main"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          </div>

          {/* Block 2: Image Left, Text Right */}
          <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2 h-[400px] relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group img-reveal-mask">
              <div className="absolute inset-0 bg-neon-pink/20 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=60&w=800&auto=format&fit=crop" 
                alt="Crowd" 
                className="w-full h-full object-cover transition-all duration-700 scale-105 img-float"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="w-full lg:w-1/2 about-desc">
              <h4 className="text-neon-pink font-bold uppercase tracking-widest text-sm mb-4">Parcerias Estratégicas</h4>
              <p className="text-gray-300 text-lg font-light leading-relaxed mb-6">
                Ao longo de sua trajetória, a Diamond Music tem participado da estruturação e produção de iniciativas artísticas e eventos em colaboração com importantes players do mercado, contribuindo para o fortalecimento do intercâmbio entre artistas brasileiros e o cenário internacional.
              </p>
              <p className="text-gray-300 text-lg font-light leading-relaxed">
                Destaca-se a atuação conjunta com a produtora <strong className="text-white font-semibold">WLE 360</strong>, desenvolvendo projetos envolvendo a produção de eventos musicais, a intermediação de artistas internacionais para apresentações no Brasil e o envio de artistas brasileiros para performances no exterior.
              </p>
            </div>
          </div>

          {/* Block 3: Text Left, Video Right */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2 about-desc">
              <h4 className="text-neon-pink font-bold uppercase tracking-widest text-sm mb-4">Nossa Visão</h4>
              <p className="text-gray-300 text-lg font-light leading-relaxed mb-6">
                A atuação da Diamond Music é guiada por uma visão estratégica que integra produção profissional, conexões globais e desenvolvimento de projetos artísticos, permitindo à empresa atuar em todas as etapas do processo — desde a negociação e gestão de artistas até a execução operacional de eventos.
              </p>
              <p className="text-gray-300 text-lg font-light leading-relaxed">
                Com uma abordagem dinâmica e orientada para a expansão no setor de entretenimento, a Diamond Music segue fortalecendo parcerias, desenvolvendo novos projetos e ampliando sua atuação no mercado de shows e eventos, sempre com o objetivo de promover experiências memoráveis.
              </p>
            </div>
            <div className="w-full lg:w-1/2 h-[400px] relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <div className="absolute inset-0 bg-neon-purple/20 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
              <video 
                src="https://raw.githubusercontent.com/eloibalabem/diamondmusic/main/1630-148614385_tiny%20(1).mp4" 
                poster="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=60&w=800&auto=format&fit=crop"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 img-main"
                autoPlay 
                loop 
                muted 
                playsInline
                preload="none"
              />
            </div>
          </div>
        </div>

        {/* Stats Grid - Centered at the bottom */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <Counter end={6} label="Anos de Atuação" />
            <Counter end={50} label="Eventos Realizados" />
            <Counter end={10} label="Artistas Internacionais" />
          </div>
        </div>
      </div>
    </section>
  );
}
