import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    title: "Neon Horizon",
    location: "SÃO PAULO, BRASIL",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1000&auto=format&fit=crop",
    large: true
  },
  {
    title: "Electric Dreams",
    location: "RIO DE JANEIRO, BRASIL",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop",
    large: false
  },
  {
    title: "Midnight Sun",
    location: "LISBOA, PORTUGAL",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1000&auto=format&fit=crop",
    large: false
  },
  {
    title: "Urban Pulse",
    location: "MIAMI, EUA",
    image: "https://images.unsplash.com/photo-1533174000265-e8cb97092ba3?q=80&w=1000&auto=format&fit=crop",
    wide: true
  }
];

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

export default function Events() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.event-header', 
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo('.event-card', 
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="events" ref={containerRef} data-bgcolor="#0b0b0f" className="py-24 relative overflow-hidden bg-deep-black">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 event-header gap-4">
          <div>
            <h2 className="text-neon-pink text-sm font-bold tracking-[0.3em] uppercase mb-4">Portfólio</h2>
            <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.8] tracking-tighter uppercase">
              Eventos em <br />
              <span className="text-white/40">Destaque</span>
            </h3>
          </div>
          <a href="#archive" className="text-neon-pink font-bold text-sm uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2 group mb-2">
            VER ARQUIVO COMPLETO
          </a>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-16">
          
          {/* Left Large Card */}
          <div className="event-card relative rounded-2xl overflow-hidden h-[400px] lg:h-[520px] group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
            <img 
              src={events[0].image} 
              alt={events[0].title} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-neon-pink transition-colors">{events[0].title}</h3>
              <p className="text-neon-pink text-xs md:text-sm font-bold uppercase tracking-widest">{events[0].location}</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 lg:gap-6">
            
            {/* Top Row (2 items) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {/* Card 2 */}
              <div className="event-card relative rounded-2xl overflow-hidden h-[250px] group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                <img 
                  src={events[1].image} 
                  alt={events[1].title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-5 left-5 z-20">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-neon-pink transition-colors">{events[1].title}</h3>
                  <p className="text-neon-pink text-[10px] md:text-xs font-bold uppercase tracking-widest">{events[1].location}</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="event-card relative rounded-2xl overflow-hidden h-[250px] group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                <img 
                  src={events[2].image} 
                  alt={events[2].title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-5 left-5 z-20">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-neon-pink transition-colors">{events[2].title}</h3>
                  <p className="text-neon-pink text-[10px] md:text-xs font-bold uppercase tracking-widest">{events[2].location}</p>
                </div>
              </div>
            </div>

            {/* Bottom Row (1 wide item) */}
            <div className="event-card relative rounded-2xl overflow-hidden h-[200px] sm:h-[250px] group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop" 
                alt={events[3].title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-neon-pink transition-colors">{events[3].title}</h3>
                <p className="text-neon-pink text-xs md:text-sm font-bold uppercase tracking-widest">{events[3].location}</p>
              </div>
              
              {/* Arrow Icon */}
              <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-neon-pink group-hover:border-neon-pink transition-all duration-300 transform group-hover:scale-110">
                <ArrowUpRight className="text-white w-5 h-5" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
