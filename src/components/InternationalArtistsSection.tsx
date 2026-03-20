import React from 'react';
import { Link } from 'react-router-dom';
import StackedArtistCards from './StackedArtistCards';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function InternationalArtistsSection() {
  useGSAP(() => {
    gsap.to('.artists-diamond', {
      rotation: 360,
      duration: 15,
      repeat: -1,
      ease: 'linear'
    });
  }, []);

  return (
    <section id="international-artists" className="py-24 relative overflow-hidden bg-deep-black" data-bgcolor="#0b0b0f">
      {/* Animated Diamond Background Element */}
      <div className="absolute top-0 right-0 w-64 h-64 z-0 pointer-events-none opacity-30">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-neon-pink/20 rounded-full blur-[60px]"></div>
          <img 
            src="https://raw.githubusercontent.com/eloibalabem/diamondmusic/main/logo%20diamond%20(webp).webp" 
            alt="Diamond" 
            className="w-full h-full object-contain artists-diamond drop-shadow-[0_0_25px_rgba(255,0,122,0.8)]"
          />
        </div>
      </div>

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
        <div className="max-w-3xl mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.8] tracking-tighter uppercase">
            Acesso a Artistas <span className="relative inline-block px-2 bg-neon-purple/30 rounded-sm border-b-2 border-neon-purple">Internacionais</span>
          </h2>
        </div>
        <p className="text-xl text-gray-300 mb-16">
          Conectamos marcas e eventos aos maiores nomes da música mundial
        </p>

        <div className="mb-8">
          <StackedArtistCards />
        </div>

        <Link 
          to="/artistas-internacionais" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-block px-8 py-4 bg-neon-pink text-black font-bold uppercase tracking-widest hover:bg-white transition-colors clickable hover-glow shadow-[0_0_15px_rgba(255,0,122,0.5)] animate-gentle-bob"
        >
          Ver oportunidades exclusivas
        </Link>
      </div>
    </section>
  );
}
