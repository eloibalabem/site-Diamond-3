import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Counter({ end, label }: { end: number, label: string }) {
  const countRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.to(countRef.current, {
      innerHTML: end,
      duration: 2,
      snap: { innerHTML: 1 },
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="p-8 rounded-2xl border border-white/10 bg-white/5">
      <div className="text-4xl md:text-5xl font-display font-bold text-neon-pink mb-2">
        +<span ref={countRef}>0</span>
      </div>
      <div className="text-xs uppercase tracking-widest text-gray-400">{label}</div>
    </div>
  );
}

export default function About() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from('.about-content', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.2
    });
  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef} className="py-24 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-neon-pink"></div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-300">Quem Somos</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black text-center leading-[0.8] tracking-tighter uppercase max-w-4xl">
            Conectando o Brasil aos <br />
            <span className="text-neon-pink">Palcos Globais</span>
          </h2>
        </div>

        <div className="space-y-32">
          {/* Block 1: Text Left, Image Right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center about-content">
            <div className="space-y-8 border-l-2 border-neon-pink pl-8">
              <p className="text-base text-white/50 leading-relaxed">
                A <span className="text-neon-pink font-semibold">Diamond Music</span> é uma produtora de entretenimento especializada na produção de shows, eventos e projetos artísticos no Brasil e no exterior, atuando também na intermediação estratégica de artistas para apresentações em diferentes mercados.
              </p>
              <p className="text-base text-white/50 leading-relaxed">
                Fundada em 2018, a empresa vem consolidando sua presença no setor por meio da realização de eventos e do desenvolvimento de projetos que conectam artistas, produtores, parceiros e públicos em <span className="font-bold text-white">experiências de alto nível</span> no universo da música e do entretenimento.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://raw.githubusercontent.com/eloibalabem/diamondmusic/main/bastidores%20diamond.webp" 
                alt="Concert Production" 
                className="w-full h-full object-cover aspect-square md:aspect-video"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Block 2: Image Left, Text Right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center about-content">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 order-2 lg:order-1 min-h-[300px]">
              <img 
                src="https://raw.githubusercontent.com/eloibalabem/diamondmusic/main/parcerias%20estrategicas%20(1).webp" 
                alt="Parcerias Estratégicas" 
                className="w-full h-full object-cover aspect-video block"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <h4 className="font-display text-2xl font-bold tracking-tight uppercase text-neon-pink">Parcerias Estratégicas</h4>
              <p className="text-base text-white/50 leading-relaxed">
                Ao longo de sua trajetória, a Diamond Music tem participado da estruturação e produção de iniciativas artísticas e eventos em colaboração com importantes players do mercado, contribuindo para o fortalecimento do intercâmbio entre artistas brasileiros e o cenário internacional.
              </p>
              <p className="text-base text-white/50 leading-relaxed">
                Destaca-se a atuação conjunta com a produtora <span className="text-white font-semibold">WLE 360</span>, desenvolvendo projetos envolvendo a produção de eventos musicais, a intermediação de artistas internacionais para apresentações no Brasil e o envio de artistas brasileiros para performances no exterior.
              </p>
            </div>
          </div>

          {/* Block 3: Text Left, Image Right (Nossa Visão) */}
          <div className="grid lg:grid-cols-2 gap-12 items-center about-content">
            <div className="space-y-8 border-l-2 border-neon-pink pl-8">
              <h4 className="font-display text-2xl font-bold tracking-tight uppercase text-neon-pink">Nossa Visão</h4>
              <p className="text-base text-white/50 leading-relaxed">
                A atuação da Diamond Music é guiada por uma visão estratégica que integra produção profissional, conexões globais e desenvolvimento de projetos artísticos, permitindo à empresa atuar em todas as etapas do processo — desde a negociação e gestão de artistas até a execução operacional de eventos.
              </p>
              <p className="text-base text-white/50 leading-relaxed">
                Com uma abordagem dinâmica e orientada para a expansão no setor de entretenimento, a Diamond Music segue fortalecendo parcerias, desenvolvendo novos projetos e ampliando sua atuação no mercado de shows e eventos, sempre com o objetivo de promover experiências memoráveis.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://raw.githubusercontent.com/eloibalabem/diamondmusic/5f421205d3f21ca9af816dd48e153ffec8bf503b/nossa%20vis%C3%A3o%20diamond.webp" 
                alt="Nossa Visão" 
                className="w-full h-full object-cover aspect-video"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center about-content">
          <Counter end={6} label="Anos de Atuação" />
          <Counter end={50} label="Eventos Realizados" />
          <Counter end={10} label="Artistas Internacionais" />
        </div>
      </div>
    </section>
  );
}
