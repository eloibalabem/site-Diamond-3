import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.to('.animated-divider-contact', {
      width: '100%',
      duration: 1.5,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      }
    });

    gsap.from('.contact-item', {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      }
    });
  }, { scope: containerRef });

  return (
    <section id="contact" ref={containerRef} data-bgcolor="#05000a" className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0014] via-[#140020] to-[#050010] z-0 opacity-80"></div>
      
      <div className="animated-divider-contact absolute top-0 left-1/2 -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-30 shadow-[0_0_15px_rgba(122,0,255,0.6)] w-0 z-10"></div>
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neon-purple/5 to-transparent z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Form */}
          <div className="contact-item">
            <h2 className="text-neon-pink text-sm font-bold tracking-[0.3em] uppercase mb-4">Contato</h2>
            <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.8] tracking-tighter uppercase mb-2">
              Entre em <br />
              <span className="text-white/40">Contato</span>
            </h3>
            <p className="text-gray-400 mb-8">Pronto para criar algo inesquecível? Vamos conversar.</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 input-underline">
                  <label className="text-xs uppercase tracking-widest text-gray-500">Nome</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 border-b-0 p-4 text-white focus:bg-white/10 focus:outline-none transition-colors rounded-t-sm" />
                </div>
                <div className="space-y-2 input-underline">
                  <label className="text-xs uppercase tracking-widest text-gray-500">E-mail</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 border-b-0 p-4 text-white focus:bg-white/10 focus:outline-none transition-colors rounded-t-sm" />
                </div>
              </div>
              
              <div className="space-y-2 input-underline">
                <label className="text-xs uppercase tracking-widest text-gray-500">Telefone</label>
                <input type="tel" className="w-full bg-white/5 border border-white/10 border-b-0 p-4 text-white focus:bg-white/10 focus:outline-none transition-colors rounded-t-sm" />
              </div>
              
              <div className="space-y-2 input-underline">
                <label className="text-xs uppercase tracking-widest text-gray-500">Mensagem</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 border-b-0 p-4 text-white focus:bg-white/10 focus:outline-none transition-colors rounded-t-sm"></textarea>
              </div>
              
              <button type="submit" className="btn-press w-full py-4 bg-neon-pink text-black font-bold uppercase tracking-widest hover:bg-white transition-colors clickable hover-glow shadow-[0_0_15px_rgba(255,0,122,0.5)] hover:shadow-[0_0_25px_rgba(255,0,122,0.8)] magnetic-pop">
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="contact-item flex flex-col justify-between">
            <div>
              <div className="mb-12">
                <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Informações de Contato</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 group">
                    <MapPin className="text-neon-pink w-6 h-6 mt-1 icon-spin-hover" />
                    <div>
                      <span className="block text-white font-bold">Sede</span>
                      <span className="text-gray-400">São Paulo, SP<br/>Brasil</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-4 group">
                    <Mail className="text-neon-pink w-6 h-6 icon-spin-hover" />
                    <a href="mailto:contato@diamondmusic.com" className="text-gray-400 hover:text-white transition-colors clickable">contato@diamondmusic.com</a>
                  </li>
                  <li className="flex items-center gap-4 group">
                    <Phone className="text-neon-pink w-6 h-6 icon-spin-hover" />
                    <span className="text-gray-400">+55 (11) 99999-9999</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Siga-nos</h3>
                <div className="flex gap-4">
                  {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-neon-pink hover:border-neon-pink hover:text-black transition-all clickable hover-glow">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-neon-pink/20 to-transparent border-l-4 border-neon-pink">
              <p className="text-lg text-white italic">"A música é a forma mais forte de magia."</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
