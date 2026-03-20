import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CallToAction() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from('.cta-content', {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden flex items-center justify-center">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=60&w=1600&auto=format&fit=crop" 
          alt="Crowd Cheering" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/40 to-brand-red/40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="cta-content relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-[0.8] tracking-tighter uppercase">
          Leve a Diamond Music <br />
          <span className="text-white/40">Para Sua Cidade</span>
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Experimente o auge da produção de entretenimento ao vivo. Vamos criar história juntos.
        </p>
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-lg hover:bg-neon-purple hover:text-white transition-all duration-300 clip-path-slant clickable"
        >
          Iniciar um Projeto
        </button>
      </div>
    </section>
  );
}
