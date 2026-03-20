import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';
import 'swiper/css';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "A Diamond Music transformou nosso festival em uma experiência visual e sonora de outro mundo. O profissionalismo da equipe é inigualável.",
    name: "Ricardo Silva",
    company: "Diretor, ElectroFest",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=60&w=200&auto=format&fit=crop"
  },
  {
    quote: "Eles não apenas entregaram o que prometeram, mas superaram todas as expectativas. O palco principal foi o assunto da noite.",
    name: "Ana Beatriz",
    company: "Produtora Executiva, Sunset Vibes",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=60&w=200&auto=format&fit=crop"
  },
  {
    quote: "Trabalhar com a Diamond é ter a certeza de que a parte técnica será impecável. Eles cuidam de cada detalhe com maestria e visão estratégica.",
    name: "Carlos Mendes",
    company: "Diretor de Operações, WLE 360",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=60&w=200&auto=format&fit=crop"
  },
  {
    quote: "A iluminação e o som criaram uma atmosfera mágica que nosso público nunca esquecerá. Verdadeiros arquitetos de emoções.",
    name: "Juliana Costa",
    company: "Gerente de Eventos, TechSummit",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=60&w=200&auto=format&fit=crop"
  },
  {
    quote: "A melhor parceira para eventos corporativos. Entregam com excelência e pontualidade, sempre inovando no design.",
    name: "Fernando Almeida",
    company: "CEO, Innovate Corp",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=60&w=200&auto=format&fit=crop"
  },
  {
    quote: "Nossa turnê internacional não seria a mesma sem a gestão impecável da Diamond. Eles pensam em tudo.",
    name: "Mariana Luz",
    company: "Manager Artística",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=60&w=200&auto=format&fit=crop"
  },
  {
    quote: "Criatividade e técnica andando juntas. O projeto de palco que desenvolveram para nós foi premiado e inesquecível.",
    name: "Roberto Gomes",
    company: "Diretor Criativo, StageArt",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=60&w=200&auto=format&fit=crop"
  },
  {
    quote: "A energia que a Diamond traz para o evento é contagiante. Eles realmente entendem como conectar o artista ao público.",
    name: "Camila Rocha",
    company: "Produtora de Festivais",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=60&w=200&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.to('.animated-divider-testimonials', {
      width: '100%',
      duration: 1.5,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      }
    });

    gsap.from('.testimonial-header', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      }
    });

    gsap.from('.testimonial-card', {
      y: 40,
      opacity: 0,
      stagger: 0.05,
      duration: 0.8,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      }
    });
  }, { scope: containerRef });

  return (
    <section id="testimonials" ref={containerRef} data-bgcolor="#0a0a0f" className="py-24 bg-transparent relative overflow-hidden">
      <div className="animated-divider-testimonials absolute top-0 left-1/2 -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-neon-pink to-transparent opacity-30 shadow-[0_0_15px_rgba(255,0,122,0.6)] w-0"></div>
      
      {/* Soft Pink Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-pink/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 testimonial-header">
          <h2 className="text-neon-pink text-sm font-bold tracking-[0.3em] uppercase mb-4">Depoimentos</h2>
          <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.8] tracking-tighter uppercase">
            O Que <br />
            <span className="text-white/40">Dizem</span>
          </h3>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto overflow-hidden px-4 md:px-12">
        <Swiper
          modules={[FreeMode, Autoplay]}
          spaceBetween={24}
          slidesPerView={1.2}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          freeMode={true}
          breakpoints={{
            640: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 3.2,
            },
          }}
          className="py-8 testimonials-swiper"
        >
          {testimonials.map((testimonial, idx) => (
            <SwiperSlide key={idx} className="h-auto">
              <div className="glass-panel p-6 rounded-2xl h-full flex flex-col relative border border-white/5 hover:border-neon-pink/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,0,122,0.15)]">
                <Quote className="absolute top-4 right-4 w-6 h-6 text-white/5" />
                
                <p className="text-sm text-gray-300 font-light italic mb-6 flex-grow relative z-10">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-3 mt-auto">
                  <img 
                    src={testimonial.photo} 
                    alt={testimonial.name} 
                    className="w-10 h-10 rounded-full object-cover border-2 border-neon-pink/50"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-white font-bold text-sm">{testimonial.name}</h4>
                    <p className="text-neon-pink text-[10px] tracking-wider uppercase">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
