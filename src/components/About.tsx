import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

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
    <div ref={containerRef} className={`about-stat glass-panel p-6 rounded-2xl border border-white/10 relative overflow-hidden group hover:border-neon-pink/50 transition-all duration-500 flex flex-col items-center justify-center ${isFinished ? 'shadow-[0_0_30px_rgba(255,0,122,0.1)]' : ''}`}>
      <div className="relative z-10 flex flex-col items-center">
        <span className={`text-4xl md:text-5xl font-display font-bold text-white mb-1 flex items-center justify-center transition-all duration-500 ${isFinished ? 'text-neon-pink scale-110' : ''}`}>
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
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      }
    });

    tl.from('.about-title .line span', { 
        y: 100, 
        opacity: 0, 
        stagger: 0.1, 
        duration: 0.8, 
        ease: 'power4.out' 
      })
      .from('.about-desc', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
      .from('.about-stat', { scale: 0.9, opacity: 0, stagger: 0.05, duration: 0.3 }, '-=0.2');
  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef} className="py-16 md:py-32 pb-24 bg-deep-black relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,122,0.1),transparent_70%)]"></div>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-neon-purple/20 to-transparent rounded-full blur-3xl opacity-30"
        />
      </div>

      {/* Animated Floating Element */}
      <motion.div 
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-64 h-64 bg-neon-pink/10 rounded-full blur-3xl z-0"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-12 md:mb-20 text-center max-w-4xl mx-auto">
          <h2 className="text-neon-pink text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4">Quem Somos</h2>
          <h3 className="about-title font-display text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[0.8] tracking-tighter uppercase">
            <div className="line overflow-hidden"><span className="block text-white">Conectando o Brasil Aos</span></div>
            <div className="line overflow-hidden"><span className="block text-white/40 pb-2">Palcos Globais</span></div>
          </h3>
        </div>

        <div className="space-y-16 md:space-y-32">
          {/* Block 1 */}
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
            <div className="w-full lg:w-1/2 about-desc">
              <p className="text-lg md:text-xl text-white font-normal mb-6 leading-relaxed">
                A <span className="text-neon-pink font-semibold">Diamond Music</span> é uma produtora de entretenimento especializada na produção de shows, eventos e projetos artísticos no Brasil e no exterior.
              </p>
            </div>
            <div className="w-full lg:w-1/2 h-[300px] md:h-[400px] relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=60&w=800&auto=format&fit=crop" 
                alt="Concert Production" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 md:mt-24 max-w-4xl mx-auto">
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
