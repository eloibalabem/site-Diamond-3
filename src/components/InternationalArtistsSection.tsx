import React, { useRef, useEffect, useState } from 'react';
import StackedArtistCards from './StackedArtistCards';
import InternationalArtistsModal from './InternationalArtistsModal';
import gsap from 'gsap';
import { Play } from 'lucide-react';

const artists = [
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
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(titleRef.current, 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <section id="international-artists" className="py-12 relative overflow-hidden noise-gradient-bg" data-bgcolor="#0b0b0f">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1920&auto=format&fit=crop" 
          alt="Background" 
          className="w-full h-full object-cover opacity-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black/20 to-deep-black/40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
          <div className="max-w-3xl">
            <h2 ref={titleRef} className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.8] tracking-tighter uppercase mb-4">
              Acesso a Artistas <span className="relative inline-block glow-effect">Internacionais</span>
            </h2>
            <p className="text-xl text-gray-300">
              Conectamos marcas e eventos aos maiores nomes da música mundial
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 mb-8">
          <div className="w-full">
            {/* Marquee */}
            <div className="relative flex overflow-x-hidden border-t border-b border-white/10 py-4 w-full">
              <div className="animate-marquee whitespace-nowrap flex gap-8">
                {artists.map((artist, i) => (
                  <span key={i} className="text-gray-500 hover:text-neon-pink text-2xl md:text-4xl font-bold uppercase tracking-tighter hover:scale-125 transition-all duration-300 cursor-pointer px-6">
                    {artist}
                  </span>
                ))}
              </div>
              <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-8">
                {artists.map((artist, i) => (
                  <span key={i} className="text-gray-500 hover:text-neon-pink text-2xl md:text-4xl font-bold uppercase tracking-tighter hover:scale-125 transition-all duration-300 cursor-pointer px-6">
                    {artist}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="w-full">
              <StackedArtistCards />
            </div>
            
            <div className="w-full flex flex-col lg:flex-row gap-4 pt-8">
              <div className="space-y-1 lg:w-full flex items-center gap-6">
                {/* Pink line on the left */}
                <div className="w-1.5 h-full min-h-[80px] bg-neon-pink rounded-full shrink-0 shadow-[0_0_15px_rgba(255,0,122,0.5)]"></div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div>
                      <h4 className="text-neon-pink font-black uppercase tracking-[0.2em] text-sm md:text-base mb-2">Acesso Global</h4>
                      <p className="text-gray-200 text-base md:text-xl leading-relaxed max-w-2xl">
                        Transforme seu evento com artistas que dominam o mundo. 
                        <span className="block mt-2 font-bold text-white text-lg md:text-2xl tracking-tight">Curadoria premium para resultados inesquecíveis.</span>
                      </p>
                    </div>
                    
                    {/* Button moved here */}
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="group relative inline-flex items-center justify-center gap-4 px-8 py-5 bg-neon-pink text-black font-black uppercase tracking-widest text-sm hover:bg-white transition-all duration-300 overflow-hidden shadow-[0_0_30px_rgba(255,0,122,0.4)] hover:shadow-[0_0_50px_rgba(255,0,122,0.7)] rounded-sm shrink-0"
                    >
                      <div className="absolute inset-0 w-full h-full bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
                      <Play className="w-5 h-5 fill-current relative z-10" />
                      <span className="relative z-10">Descubra o Segredo</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <InternationalArtistsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        artists={artists}
      />
    </section>
  );
}
