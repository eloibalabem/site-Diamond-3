import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StackedArtistCards from './StackedArtistCards';
import gsap from 'gsap';

export default function InternationalArtistsSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(titleRef.current, 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <section id="international-artists" className="py-24 relative overflow-hidden bg-deep-black" data-bgcolor="#0b0b0f">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1920&auto=format&fit=crop" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black/80 to-deep-black"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-8">
          <h2 ref={titleRef} className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.8] tracking-tighter uppercase">
            Acesso a Artistas <span className="relative inline-block glow-effect">Internacionais</span>
          </h2>
        </div>
        <p className="text-xl text-gray-300 mb-8">
          Conectamos marcas e eventos aos maiores nomes da música mundial
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-12 mb-8">
          <div className="flex-1 overflow-hidden">
            <StackedArtistCards />
          </div>
          <div className="flex-1 max-w-md border-l-2 border-neon-pink pl-6">
            <h3 className="text-2xl font-bold text-white mb-4">Curadoria de Elite</h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              Conectamos os maiores nomes da música mundial ao seu evento. Nossa curadoria exclusiva garante experiências inesquecíveis e resultados de alto impacto para o seu público, com suporte completo em todas as etapas da contratação e produção.
            </p>
            <Link 
              to="/artistas-internacionais" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-block px-8 py-4 bg-neon-pink text-black font-bold uppercase tracking-widest hover:bg-white transition-colors clickable hover-glow shadow-[0_0_15px_rgba(255,0,122,0.5)] animate-gentle-bob"
            >
              Ver oportunidades exclusivas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
