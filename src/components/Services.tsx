import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mic2, Building2, Globe, Sparkles, ArrowUpRight, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <Mic2 className="w-6 h-6" />,
    title: "Produção de Shows e Festivais",
    desc: "Planejamento, organização e execução de eventos musicais de grande porte, garantindo excelência técnica e artística.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=60&w=800&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-2"
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Eventos Corporativos e Feiras",
    desc: "Soluções completas para eventos empresariais, ativações de marca e feiras de negócios com alto padrão de qualidade.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=60&w=800&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Intermediação e Booking",
    desc: "Conexão estratégica entre contratantes e artistas, facilitando negociações e garantindo as melhores atrações para o seu evento.",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=60&w=800&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Gestão Internacional",
    desc: "Suporte completo para artistas brasileiros em turnês e apresentações no exterior, expandindo fronteiras e mercados.",
    image: "https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?q=60&w=800&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Projetos Artísticos",
    desc: "Desenvolvimento e concepção de projetos culturais inovadores, desde a idealização até a realização final.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=60&w=800&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-1"
  }
];

export default function Services() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.to('.animated-divider-services', {
      width: '100%',
      duration: 1.5,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      }
    });

    gsap.fromTo('.service-bento-card', 
      { y: 80, scale: 0.96, opacity: 0 },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        }
      }
    );

    // Parallax Background
    gsap.to('.services-bg', {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    // Parallax Images in Cards
    gsap.utils.toArray('.img-parallax').forEach((img: any) => {
      gsap.to(img, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: img.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });
  }, { scope: containerRef });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;
    
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
    <section id="services" ref={containerRef} data-bgcolor="#140510" className="py-24 bg-transparent relative">
      {/* Parallax Background Texture */}
      <div 
        className="services-bg absolute inset-0 z-0 opacity-[0.03] h-[120%] -top-[10%]"
        style={{
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")',
          backgroundSize: '200px'
        }}
      ></div>

      <div className="animated-divider-services absolute top-0 left-1/2 -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-30 shadow-[0_0_15px_rgba(122,0,255,0.6)] w-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full max-h-[600px] bg-neon-purple/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-neon-pink text-sm font-bold tracking-[0.3em] uppercase mb-4">Nossos Serviços</h2>
            <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.8] tracking-tighter uppercase">
              Soluções <span className="text-white/40">Lapidadas</span> <br />
              Para Seu Evento
            </h3>
          </div>
          <p className="text-gray-400 max-w-md text-lg">
            Entregando excelência em todas as dimensões do entretenimento ao vivo. Transformamos visões em realidades inesquecíveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
          {services.map((service, index) => (
            <div 
              key={index} 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className={`service-bento-card shimmer-card gradient-border-card group relative overflow-hidden rounded-2xl clickable transition-shadow duration-500 hover:shadow-[0_15px_40px_rgba(255,0,122,0.15)] ${service.className}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-[120%] object-cover -top-[10%] relative transition-transform duration-700 group-hover:scale-110 img-parallax"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/40 to-neon-pink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
                {/* Top Row: Icon & Arrow */}
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/10 group-hover:bg-neon-pink group-hover:text-black group-hover:border-neon-pink transition-all duration-300 shadow-lg">
                    {service.icon}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 border border-white/10 group-hover:border-neon-pink group-hover:text-neon-pink">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                
                {/* Bottom Row: Text with auto-height animation */}
                <div className="mt-auto">
                  <h4 className="font-display text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-neon-pink transition-colors duration-300">
                    {service.title}
                  </h4>
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                    <div className="overflow-hidden">
                      <p className="text-gray-300 text-sm md:text-base pt-2 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Animated Border Bottom */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-neon-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
