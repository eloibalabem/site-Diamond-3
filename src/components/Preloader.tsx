import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const lightsRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = '';
        onComplete();
      }
    });

    // 2. Particles appear slowly
    tl.to(particlesRef.current, { opacity: 1, duration: 1.5, ease: 'power2.inOut' }, 0);

    // 3. 3D Logo appears
    tl.fromTo(logoRef.current, 
      { scale: 0.3, opacity: 0, filter: 'blur(20px)' },
      { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 1.5, ease: 'back.out(1.2)' },
      0.5
    );

    // 4. Stage light beams appear behind the logo
    tl.to(lightsRef.current, { opacity: 0.8, duration: 1.5, ease: 'power2.inOut' }, 1);

    // 5. Apply light glow on the logo
    tl.to(logoRef.current, { 
      filter: 'drop-shadow(0 0 40px rgba(255,0,122,0.8)) drop-shadow(0 0 20px rgba(255,77,77,0.6))', 
      duration: 1 
    }, 1.5);

    // 7. Transition after ~2.5 seconds: Logo moves to top-left and screen fades
    const navLogo = document.querySelector('.nav-logo');
    let targetX = -window.innerWidth / 2 + 100;
    let targetY = -window.innerHeight / 2 + 50;
    let targetScale = 0.15;

    if (navLogo && logoRef.current) {
      const navRect = navLogo.getBoundingClientRect();
      const logoRect = logoRef.current.getBoundingClientRect();
      
      if (navRect && logoRect) {
        // Calculate center-to-center translation
        targetX = navRect.left + navRect.width / 2 - (window.innerWidth / 2);
        targetY = navRect.top + navRect.height / 2 - (window.innerHeight / 2);
        targetScale = navRect.height / logoRect.height;
      }
    }

    tl.to(logoRef.current, {
      x: targetX,
      y: targetY,
      scale: targetScale,
      opacity: 0, // Fade out as it reaches the menu to let the real logo show
      duration: 1.2,
      ease: 'power3.inOut'
    }, 3);

    tl.to(containerRef.current, {
      opacity: 0,
      backdropFilter: 'blur(0px)',
      duration: 1,
      ease: 'power2.inOut'
    }, 3.2);

  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] flex items-center justify-center bg-deep-black overflow-hidden backdrop-blur-2xl">
      {/* 1. Dark screen with soft gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-purple/10 via-deep-black to-deep-black opacity-90"></div>
      
      {/* 2 & 6. Particles moving smoothly */}
      <div ref={particlesRef} className="absolute inset-0 opacity-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white animate-float-particle shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.6 + 0.2,
              animationDuration: Math.random() * 4 + 3 + 's',
              animationDelay: Math.random() * 2 + 's'
            }}
          />
        ))}
      </div>

      {/* 4. Stage light beams */}
      <div ref={lightsRef} className="absolute inset-0 opacity-0 flex justify-center items-center pointer-events-none mix-blend-screen">
        <div className="absolute w-2 h-[150vh] bg-gradient-to-t from-transparent via-neon-pink/30 to-transparent transform -rotate-45 blur-xl"></div>
        <div className="absolute w-2 h-[150vh] bg-gradient-to-t from-transparent via-brand-red/30 to-transparent transform rotate-45 blur-xl"></div>
        <div className="absolute w-40 h-40 bg-neon-purple/40 rounded-full blur-[100px]"></div>
      </div>

      {/* 3. 3D Logo GIF */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <img 
          ref={logoRef}
          src="https://raw.githubusercontent.com/eloi-balabem/diamond/main/fundo%20transparente.gif" 
          alt="Diamond Music Logo" 
          className="w-64 h-64 object-contain mix-blend-screen"
          style={{ filter: 'drop-shadow(0 0 0px rgba(255,0,122,0))' }}
        />
      </div>
    </div>
  );
}
