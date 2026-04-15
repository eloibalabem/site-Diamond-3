import { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const words = [
  { text: "Shows", color: "text-neon-pink", shadow: "drop-shadow-[0_0_15px_rgba(255,0,122,0.5)]" },
  { text: "Festivais", color: "text-neon-purple", shadow: "drop-shadow-[0_0_15px_rgba(122,0,255,0.5)]" },
  { text: "Eventos", color: "text-brand-red", shadow: "drop-shadow-[0_0_15px_rgba(255,77,77,0.5)]" },
  { text: "Experiências", color: "text-neon-pink", shadow: "drop-shadow-[0_0_15px_rgba(255,0,122,0.5)]" }
];

export default function Hero() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Generate random particles
  const particles = Array.from({ length: 80 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to('.hero-strip', {
      scaleY: 0,
      duration: 1.5,
      stagger: 0.1,
      ease: 'power4.inOut'
    }, 0)
    .from('.hero-bg', {
      scale: 1.1,
      duration: 2.5,
      ease: 'power2.out'
    }, 0)
    .from('.hero-badge', {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, '-=1.8')
    .from('.hero-title', {
      y: 40,
      opacity: 0,
      filter: 'blur(10px)',
      duration: 0.8,
      ease: 'power4.out'
    }, '-=1.4')
    .from('.hero-subtitle', {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, '-=1.0')
    .from('.hero-btn', {
      y: 20,
      scale: 0.95,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.8');

    // Parallax effect on scroll
    gsap.to('.hero-bg', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    gsap.to('.hero-content', {
      yPercent: -15,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }, { scope: containerRef });

  return (
    <section id="home" ref={containerRef} data-bgcolor="#0b0b0f" className="relative h-screen w-full overflow-hidden flex items-center justify-center hero-edge-glow">
      {/* Subtle Light Beams */}
      <div className="light-beam light-beam-left"></div>
      <div className="light-beam light-beam-right"></div>

      {/* Background (Prepared for future video) */}
      <div className="hero-bg absolute inset-0 w-full h-full z-0 bg-transparent">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 md:from-black/40 via-black/80 md:via-black/60 to-transparent z-10"></div>
        {/* Future Video Tag can replace this img */}
        <img 
          src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=60&w=1600&auto=format&fit=crop" 
          alt="Festival Crowd" 
          className="w-full h-full object-cover opacity-70 animate-subtle-zoom"
          fetchPriority="high"
          decoding="sync"
        />
        {/* Overlay Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-purple/20 via-neon-pink/5 to-transparent opacity-60 z-10 hidden md:block"></div>
      </div>

      {/* Strip Animation Overlay */}
      <div className="absolute inset-0 z-40 flex w-full h-full pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="hero-strip w-1/5 h-full bg-deep-black origin-top"></div>
        ))}
      </div>

      {/* Micro-particles */}
      <div className="absolute inset-0 z-20 pointer-events-none hidden md:block">
        {particles.map(p => (
          <div
            key={p.id}
            className="absolute rounded-full bg-white/40 animate-float"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.left}%`,
              top: `${p.top}%`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div ref={textRef} className="hero-content relative z-30 text-center px-4 max-w-7xl mx-auto mt-16">
        
        <h1 className="hero-title font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tighter mb-4 leading-[0.8] uppercase text-white drop-shadow-lg flex flex-col sm:block">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-red via-neon-purple to-neon-pink">DIAMOND</span> <span className="text-neon-pink drop-shadow-[0_0_15px_rgba(255,0,122,0.5)]">MUSIC</span>
        </h1>

        <h2 className="hero-badge font-display font-bold text-lg sm:text-2xl md:text-4xl tracking-tight mb-10 text-white flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 sm:gap-3">
          <span className="text-gray-200">Produzindo</span>
          <div className="grid overflow-hidden py-2 px-1 relative h-[1.5em] w-[160px] sm:w-[280px] md:w-[350px]">
            {words.map((wordObj, index) => {
              let positionClass = 'opacity-0 translate-y-full scale-90 blur-sm';
              if (index === currentIndex) positionClass = 'opacity-100 translate-y-0 scale-100 blur-0';
              else if (index === (currentIndex - 1 + words.length) % words.length) positionClass = 'opacity-0 -translate-y-full scale-110 blur-sm';
              
              return (
                <span
                  key={wordObj.text}
                  className={`absolute left-0 w-full text-center ${wordObj.color} ${wordObj.shadow} transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] ${positionClass}`}
                >
                  {wordObj.text}
                </span>
              );
            })}
          </div>
        </h2>
        
        <p className="hero-subtitle text-base md:text-xl text-gray-300 font-light tracking-wide mb-12 max-w-2xl mx-auto drop-shadow-md">
          A fusão perfeita entre tecnologia, arte e impacto.
        </p>

        <div className="hero-btn flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 text-sm bg-neon-pink text-black font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 clickable hover-glow shadow-[0_0_20px_rgba(255,0,122,0.4)] btn-press group relative overflow-hidden"
          >
            <span className="relative z-10">Explorar</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 opacity-50 clickable cursor-pointer hover:opacity-100 transition-opacity"
      >
        <div className="w-[1px] h-10 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
}
