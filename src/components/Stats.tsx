import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target') || '0');
      
      gsap.to(counter, {
        innerText: target,
        duration: 2,
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      });
    });
  }, { scope: containerRef });

  const stats = [
    { label: "Eventos Produzidos", value: 150 },
    { label: "Público Alcançado", value: 500000, suffix: "+" },
    { label: "Artistas Recebidos", value: 300 },
    { label: "Cidades Atendidas", value: 25 }
  ];

  return (
    <section ref={containerRef} className="py-20 bg-black border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 flex justify-center items-baseline leading-[0.8] tracking-tighter uppercase">
                <span className="counter" data-target={stat.value}>0</span>
                {stat.suffix && <span className="text-neon-purple">{stat.suffix}</span>}
              </div>
              <div className="text-xs md:text-sm uppercase tracking-[0.2em] text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
