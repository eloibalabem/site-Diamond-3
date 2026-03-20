import React, { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    title: "Neon Horizon",
    location: "São Paulo, Brasil",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=60&w=800&auto=format&fit=crop",
    size: "col-span-1 md:col-span-2 row-span-2"
  },
  {
    title: "Electric Dreams",
    location: "Rio de Janeiro, Brasil",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=60&w=800&auto=format&fit=crop",
    size: "col-span-1 row-span-1"
  },
  {
    title: "Midnight Sun",
    location: "Lisboa, Portugal",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=60&w=800&auto=format&fit=crop",
    size: "col-span-1 row-span-1"
  },
  {
    title: "Urban Pulse",
    location: "Miami, EUA",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=60&w=800&auto=format&fit=crop",
    size: "col-span-1 md:col-span-2 row-span-1"
  }
];

const GalleryItem = ({ event }: { event: typeof events[0], key?: React.Key }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '300px', // Load images when they are 300px away from viewport
        threshold: 0.01
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`gallery-item relative group overflow-hidden rounded-lg ${event.size} clickable bg-white/5 h-full w-full`}>
      {/* Skeleton Loader */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="w-8 h-8 border-2 border-neon-pink border-t-transparent rounded-full animate-spin"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <img 
          ref={imgRef}
          src={inView ? event.image : ''} 
          alt={event.title} 
          onLoad={() => setIsLoaded(true)}
          className={`w-[120%] h-[120%] -top-[10%] -left-[10%] object-cover absolute transition-transform duration-700 group-hover:scale-110 img-parallax-horizontal ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          referrerPolicy="no-referrer"
        />
      </div>
      
      {/* Overlays */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 ${isLoaded ? 'opacity-80 group-hover:opacity-60' : 'opacity-0'}`}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/30 to-neon-purple/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
      
      <div className={`absolute bottom-0 left-0 p-6 md:p-8 transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-neon-pink transition-colors">{event.title}</h3>
        <p className="text-neon-pink uppercase tracking-wider text-xs font-bold flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-neon-pink"></span>
          {event.location}
        </p>
      </div>
      
      <div className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 ${isLoaded ? 'group-hover:opacity-100' : ''} transition-opacity duration-300 border border-white/10 group-hover:border-neon-pink group-hover:text-neon-pink`}>
        <span className="text-xl text-white group-hover:text-neon-pink">↗</span>
      </div>
    </div>
  );
};

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.gallery-content-wrapper', 
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        }
      }
    );

    gsap.to('.animated-divider-gallery', {
      width: '100%',
      duration: 1.5,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      }
    });

    const container = scrollContainerRef.current;
    if (!container) return;

    gsap.to(container, {
      x: () => -(container.scrollWidth - window.innerWidth + (window.innerWidth < 768 ? 24 : 48)),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + container.scrollWidth
      }
    });

    // Horizontal Parallax for Images
    gsap.utils.toArray('.img-parallax-horizontal').forEach((img: any) => {
      gsap.to(img, {
        xPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 1,
          start: 'top top',
          end: () => "+=" + container.scrollWidth
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section id="gallery" ref={containerRef} data-bgcolor="#0a0a0a" className="py-24 bg-transparent relative overflow-hidden h-screen flex flex-col justify-center">
      <div className="gallery-content-wrapper w-full h-full flex flex-col justify-center">
        <div className="animated-divider-gallery absolute top-0 left-1/2 -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-neon-pink to-transparent opacity-30 shadow-[0_0_15px_rgba(255,0,122,0.6)] w-0"></div>
        
        <div className="container mx-auto px-6 mb-12">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-[0.8] tracking-tighter uppercase text-white">Eventos em <span className="text-white/40">Destaque</span></h2>
            </div>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hidden md:block text-neon-pink hover:text-white transition-colors uppercase tracking-widest text-sm clickable"
            >
              Ver Arquivo Completo
            </button>
          </div>
        </div>

        <div className="pl-6 md:pl-12 w-full overflow-hidden">
          <div ref={scrollContainerRef} className="flex gap-4 md:gap-6 w-max h-[45vh] md:h-[50vh] pr-6 md:pr-12">
            {events.map((event, index) => (
              <div key={index} className="w-full h-full flex-shrink-0" style={{ width: '70vw', maxWidth: '350px' }}>
                <GalleryItem event={{...event, size: 'w-full h-full'}} />
              </div>
            ))}
          </div>
        </div>
          
        <div className="mt-8 text-center md:hidden">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-neon-pink uppercase tracking-widest text-sm"
          >
            Ver Arquivo Completo
          </button>
        </div>
      </div>
    </section>
  );
}
