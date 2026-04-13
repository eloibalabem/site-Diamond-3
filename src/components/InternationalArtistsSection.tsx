import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StackedArtistCards from './StackedArtistCards';
import InternationalArtistsModal from './InternationalArtistsModal';

gsap.registerPlugin(ScrollTrigger);

const allArtists = [
  "Adele", "Celine Dion", "Paul McCartney", "Beyoncé", "Taylor Swift", "Ed Sheeran", "Coldplay", "Billie Eilish", 
  "Olivia Rodrigo", "Harry Styles", "Usher", "Foo Fighters", "Red Hot Chili Peppers", "Arctic Monkeys", "The Killers", 
  "Imagine Dragons", "Blackpink", "BTS", "Stray Kids", "Ateez", "NewJeans", "Alicia Keys", "Eminem", "Mary J. Blige", 
  "Janet Jackson", "Christina Aguilera", "P!nk", "Jennifer Lopez", "Justin Timberlake", "Lenny Kravitz", "Sting", 
  "Shania Twain", "Mariah Carey", "Gwen Stefani", "Katy Perry", "Shakira", "U2", "Madonna", "Bon Jovi", 
  "Bruce Springsteen", "Rod Stewart", "Stevie Wonder", "Diana Ross", "KC and the Sunshine Band", "Eagles", 
  "Gipsy Kings", "Earth, Wind & Fire", "Chicago", "The Beach Boys", "Kool & the Gang", "Duran Duran", 
  "Depeche Mode", "Pet Shop Boys", "Simple Minds", "A-ha"
];

export default function InternationalArtistsSection() {
  const containerRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useGSAP(() => {
    gsap.from('.artists-title', {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
      }
    });
  }, { scope: containerRef });

  return (
    <section id="international-artists" ref={containerRef} data-bgcolor="#050505" className="py-24 bg-gradient-to-b from-[#16161d] via-[#0b0b0f] to-[#16161d] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-12 artists-title grid md:grid-cols-2 gap-8 items-end">
          <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[0.9] tracking-tighter uppercase">
            ACESSO A ARTISTAS <span className="text-neon-pink animate-pulse-glow">INTERNACIONAIS</span>
          </h3>
          <p className="text-sm md:text-base text-gray-300">
            Conectamos marcas e eventos aos maiores nomes da música mundial
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="w-full border-y border-white/10 py-6 overflow-hidden mb-16 relative flex bg-[#0b0b0f]/50">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
          {allArtists.slice(0, 20).map((artist, idx) => (
            <span key={idx} className="text-3xl md:text-4xl font-display font-bold text-white/30 uppercase tracking-wider hover:text-white/80 transition-colors cursor-default">
              {artist}
            </span>
          ))}
        </div>
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 absolute top-6 left-0 translate-x-full">
          {allArtists.slice(0, 20).map((artist, idx) => (
            <span key={`dup-${idx}`} className="text-3xl md:text-4xl font-display font-bold text-white/30 uppercase tracking-wider hover:text-white/80 transition-colors cursor-default">
              {artist}
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-12 items-center">
          <div className="w-full overflow-hidden">
            <StackedArtistCards />
          </div>

          <div className="flex flex-col border-l-2 border-neon-pink pl-8">
            <p className="text-neon-pink text-xs font-bold uppercase tracking-[0.2em] mb-4">ACESSO GLOBAL</p>
            <p className="text-white text-lg md:text-xl leading-relaxed mb-4">
              Transforme seu evento com artistas que dominam o mundo.
            </p>
            <p className="text-white font-bold text-lg md:text-xl leading-relaxed mb-8">
              Curadoria premium para resultados inesquecíveis.
            </p>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-neon-pink text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 clickable magnetic-pop hover-glow w-fit"
            >
              VER OPORTUNIDADES
            </button>
          </div>
        </div>
      </div>

      <InternationalArtistsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
