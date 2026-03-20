import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const cases = [
  {
    title: "ElectroFest 2025",
    category: "Festival de Música",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=60&w=800&auto=format&fit=crop",
    description: "Projeto completo de iluminação e som para mais de 50.000 pessoas.",
    stats: ["50k+ Público", "3 Palcos", "120h Montagem"]
  },
  {
    title: "TechSummit Global",
    category: "Evento Corporativo",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=60&w=800&auto=format&fit=crop",
    description: "Estrutura audiovisual imersiva para a maior conferência de tecnologia da América Latina.",
    stats: ["15k Participantes", "Transmissão 4K", "Painéis de LED 360º"]
  },
  {
    title: "Sunset Vibes Tour",
    category: "Turnê Nacional",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=60&w=800&auto=format&fit=crop",
    description: "Design de palco itinerante com efeitos especiais e pirotecnia sincronizada.",
    stats: ["12 Cidades", "Sold Out", "Efeitos Especiais"]
  }
];

export default function Cases() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.case-header', 
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo('.case-card', 
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        }
      }
    );
  }, { scope: containerRef });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    
    gsap.to(target, {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      ease: 'power2.out',
      duration: 0.4
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    gsap.to(target, {
      rotateX: 0,
      rotateY: 0,
      ease: 'power3.out',
      duration: 0.7
    });
  };

  return (
    <section id="cases" ref={containerRef} data-bgcolor="#050505" className="py-24 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 case-header">
          <div className="inline-block px-4 py-1.5 rounded-full border border-brand-red/30 bg-brand-red/5 backdrop-blur-sm mb-6">
            <span className="text-brand-red text-xs font-bold tracking-widest uppercase">Portfólio</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[0.8] tracking-tighter uppercase">
            Cases de <span className="text-white/40">Sucesso</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Projetos que desafiaram os limites da criatividade e tecnologia, entregando experiências inesquecíveis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((item, idx) => (
            <div 
              key={idx} 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="case-card group cursor-pointer"
            >
              <div className="glass-panel rounded-2xl overflow-hidden border border-white/5 hover:border-brand-red/50 transition-all duration-500 h-full flex flex-col hover:shadow-[0_0_40px_rgba(255,77,77,0.2)]">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/40 to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-brand-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay z-10"></div>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-white shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow relative z-20">
                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-red transition-colors duration-300 drop-shadow-md">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 flex-grow">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {item.stats.map((stat, i) => (
                      <span key={i} className="text-xs text-brand-red/80 bg-brand-red/10 px-2 py-1 rounded border border-brand-red/20">
                        {stat}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 text-white text-sm font-bold uppercase tracking-wider group-hover:text-brand-red transition-colors mt-auto">
                    <span>Ver Projeto</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center case-header">
          <button className="glass-panel px-8 py-4 rounded-full text-white font-bold tracking-widest uppercase text-sm hover:bg-brand-red hover:text-black hover:shadow-[0_0_30px_rgba(255,77,77,0.6)] hover:border-brand-red transition-all duration-300 magnetic-pop">
            Ver Todos os Cases
          </button>
        </div>
      </div>
    </section>
  );
}
