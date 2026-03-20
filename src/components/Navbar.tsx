import { useState, useEffect, useRef } from 'react';
import { Menu, X, Music } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Map sections to their main images for prefetching
const sectionImages: Record<string, string[]> = {
  '#home': [
    'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=60&w=1600&auto=format&fit=crop'
  ],
  '#services': [
    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=60&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511578314322-379afb476865?q=60&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=60&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?q=60&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=60&w=800&auto=format&fit=crop'
  ],
  '#cases': [
    'https://images.unsplash.com/photo-1470229722913-7c090be5f524?q=60&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=60&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=60&w=800&auto=format&fit=crop'
  ],
  '#contact': []
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 50);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrefetch = (link: string) => {
    const images = sectionImages[link];
    if (images) {
      images.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    }
  };

  useGSAP(() => {
    // Logo entrance animation
    gsap.fromTo('.brand-logo img', 
      { scale: 1.15, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' }
    );
  }, []);

  useGSAP(() => {
    if (isOpen) {
      gsap.fromTo('.mobile-link', 
        { y: 20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.1, 
          duration: 0.4, 
          delay: 0.1,
          ease: 'power2.out'
        }
      );
    }
  }, [isOpen]);

  const links = [
    { name: 'Início', link: '#home' },
    { name: 'Serviços', link: '#services' },
    { name: 'Contato', link: '#contact' },
    { name: 'Cases', link: '#cases' }
  ];

  return (
    <>
      {/* Blur Overlay */}
      <div 
        className={`fixed inset-0 bg-deep-black/80 backdrop-blur-md z-40 transition-opacity duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      } ${scrolled ? 'bg-deep-black/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center relative">
        <a href="#home" className="brand-logo flex items-center gap-2 group clickable logo-modern-hover">
          <img 
            src="https://raw.githubusercontent.com/eloi-balabem/diamond/main/fundo%20transparente.gif" 
            alt="Diamond Music Logo" 
            className="h-16 w-auto object-contain opacity-0" 
            fetchPriority="high"
            decoding="sync"
          />
        </a>

        {/* Hamburger Toggle */}
        <button 
          className="text-white clickable z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* Dropdown Menu Overlay */}
        <div className={`mobile-menu absolute top-full right-6 mt-4 w-64 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden z-40 transform origin-top-right transition-all duration-500 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ${isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
          <div className="flex flex-col py-6 px-8 gap-6">
            {links.map((item, idx) => (
              <a 
                key={item.name} 
                href={item.link} 
                onClick={() => setIsOpen(false)}
                onMouseEnter={() => handlePrefetch(item.link)}
                className="mobile-link text-lg uppercase tracking-widest hover:text-neon-pink transition-colors clickable relative w-fit after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-neon-pink after:transition-all hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        </div>
      </nav>
    </>
  );
}
