import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  artists: string[];
}

export default function InternationalArtistsModal({ isOpen, onClose, artists }: ModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full h-[100dvh] md:h-auto md:max-h-[90vh] max-w-6xl bg-deep-black md:border border-white/10 rounded-none md:rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,0,122,0.15)] flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-neon-pink text-white rounded-full backdrop-blur-sm transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="overflow-y-auto custom-scrollbar flex-1 w-full">
              {/* Video Header */}
              <div className="relative h-[35vh] md:h-[50vh] w-full overflow-hidden shrink-0">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="https://raw.githubusercontent.com/eloibalabem/diamondmusic/8749fea7e2f38f1df1ae08ed592b551dd9ea922c/hero-artistas.webm" type="video/webm" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/60 to-transparent" />
                
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="inline-block px-3 py-1 bg-neon-pink/20 text-neon-pink border border-neon-pink/30 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3 md:mb-4">
                      Acesso Exclusivo
                    </span>
                    <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tighter uppercase drop-shadow-lg">
                      O Poder de Atrair <br />
                      <span className="text-neon-pink">Multidões</span>
                    </h2>
                  </motion.div>
                </div>
              </div>

              {/* Persuasive Content */}
              <div className="p-6 md:p-12 bg-deep-black">
                <div className="max-w-4xl mx-auto">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16"
                  >
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">A Autoridade que seu Evento Precisa</h3>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        Não se trata apenas de música. Trata-se de <strong className="text-white">status, desejo e memória inesquecível</strong>. 
                        Ter um artista internacional no seu line-up é a prova definitiva de que seu evento pertence à elite do entretenimento global.
                      </p>
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-neon-pink/10 flex items-center justify-center shrink-0 border border-neon-pink/30">
                          <span className="text-neon-pink font-bold">1</span>
                        </div>
                        <div>
                          <h4 className="text-white font-bold mb-1">Escassez Real</h4>
                          <p className="text-sm text-gray-400">Agendas disputadas globalmente. Trazer esses nomes é um privilégio para poucos.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-neon-pink/10 flex items-center justify-center shrink-0 border border-neon-pink/30">
                          <span className="text-neon-pink font-bold">2</span>
                        </div>
                        <div>
                          <h4 className="text-white font-bold mb-1">Prova Social Imediata</h4>
                          <p className="text-sm text-gray-400">O público reconhece o valor instantaneamente. Ingressos esgotam mais rápido.</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Artists List */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="text-center mb-8 md:mb-10">
                      <h3 className="text-2xl md:text-3xl font-display font-black text-white uppercase tracking-tighter mb-2 md:mb-4">
                        Nosso Portfólio de <span className="text-neon-pink">Gigantes</span>
                      </h3>
                      <p className="text-gray-400 text-xs md:text-sm uppercase tracking-widest">Conexões diretas com os maiores escritórios do mundo</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                      {artists.map((artist, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1.5 md:px-4 md:py-2 bg-white/5 border border-white/10 rounded-full text-xs md:text-base text-gray-300 hover:text-white hover:border-neon-pink hover:bg-neon-pink/10 transition-all duration-300 cursor-default"
                        >
                          {artist}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Neuromarketing CTA Section */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-16 md:mt-24 mb-8 md:mb-12 relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/10 via-transparent to-neon-purple/10 rounded-2xl md:rounded-3xl blur-xl"></div>
                    <div className="relative bg-deep-black border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-12 text-center overflow-hidden">
                      {/* Background glow */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-neon-pink/5 blur-[100px] pointer-events-none"></div>
                      
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/10 text-brand-red border border-brand-red/20 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">
                        <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
                        Atenção: Agendas 2026/2027
                      </span>
                      
                      <h3 className="text-2xl md:text-4xl font-display font-black text-white uppercase tracking-tighter mb-4">
                        O tempo é o seu maior <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple">concorrente</span>
                      </h3>
                      
                      <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
                        As turnês internacionais são planejadas com <strong>12 a 18 meses de antecedência</strong>. 
                        Cada dia de hesitação é uma data que pode ser bloqueada por outro grande evento na América Latina. 
                        <strong>Você vai deixar essa oportunidade passar?</strong>
                      </p>

                      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8">
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-neon-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Sigilo Absoluto
                        </div>
                        <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-neon-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Acesso Direto
                        </div>
                        <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-neon-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Assessoria Completa
                        </div>
                      </div>

                      <a 
                        href="/#contact" 
                        onClick={onClose}
                        className="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 bg-neon-pink text-black font-black uppercase tracking-widest hover:bg-white transition-all duration-300 clickable hover-glow shadow-[0_0_30px_rgba(255,0,122,0.3)] hover:shadow-[0_0_50px_rgba(255,0,122,0.6)] overflow-hidden rounded-sm text-xs sm:text-sm"
                      >
                        <div className="absolute inset-0 w-full h-full bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
                        <span className="relative z-10 flex items-center gap-2">
                          Verificar Disponibilidade Agora
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                      </a>
                      <p className="mt-4 text-[10px] text-gray-500 uppercase tracking-widest">
                        * A consulta não gera compromisso financeiro imediato. Sujeito à aprovação do management.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
