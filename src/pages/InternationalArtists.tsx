import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StackedArtistCards from '../components/StackedArtistCards';

gsap.registerPlugin(ScrollTrigger);

export default function InternationalArtists() {
  useGSAP(() => {
    // Title stagger animation
    const titles = document.querySelectorAll('h1, h2');
    titles.forEach((title) => {
      gsap.fromTo(title, 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // Image entrance animation
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (img.closest('nav') || img.closest('footer')) return;
      gsap.fromTo(img, 
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: index * 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: img,
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }, []);
  return (
    <div className="bg-deep-black text-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1920&auto=format&fit=crop" 
          alt="Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black/60 to-deep-black"></div>
        <div className="container mx-auto px-6 relative z-10 text-center animate-subtle-pulse">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            Leve artistas internacionais para o seu evento
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Transformamos projetos em experiências globais através da conexão com artistas de alto impacto
          </p>
          <a href="#contact" className="inline-block px-8 py-4 bg-neon-pink text-black font-bold uppercase tracking-widest hover:bg-white transition-colors clickable hover-glow shadow-[0_0_15px_rgba(255,0,122,0.5)]">
            Solicitar proposta exclusiva
          </a>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-24 relative bg-deep-black">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1600&auto=format&fit=crop" 
            alt="Authority" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
            Conexões que elevam o nível do seu evento
          </h2>
          <p className="text-xl text-gray-300">
            Atuamos com intermediação estratégica e acesso a artistas internacionais, conectando marcas a experiências memoráveis e de alto valor percebido.
          </p>
        </div>
      </section>

      {/* Artist Showcase */}
      <section className="py-24 bg-deep-black flex justify-center">
        <div className="container mx-auto px-6 mb-12 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter text-center text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] mb-12">
            Artistas em Destaque
          </h2>
          <div className="flex justify-center">
            <StackedArtistCards />
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?q=80&w=1600&auto=format&fit=crop" 
            alt="Value" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-black/80 to-deep-black"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12 text-center text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
            Por que grandes marcas investem em experiências musicais globais?
          </h2>
          <ul className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-xl">
            {[
              "Alto alcance e visibilidade",
              "Engajamento emocional com o público",
              "Fortalecimento de marca",
              "Experiências memoráveis e compartilháveis"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-neon-pink/50 transition-colors">
                <span className="w-2 h-2 rounded-full bg-neon-pink"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-deep-black text-center text-gray-500 text-sm">
        <p>Artistas sujeitos à disponibilidade e negociação internacional.</p>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-24 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1600&auto=format&fit=crop" 
            alt="CTA" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-black/80 to-deep-black"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
            Vamos estruturar o seu próximo grande evento?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Fale com nossa equipe e descubra como viabilizar artistas internacionais no seu projeto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="px-8 py-4 bg-neon-pink text-black font-bold uppercase tracking-widest hover:bg-white transition-colors clickable">
              Solicitar proposta
            </a>
            <a href="#" className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors clickable">
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
