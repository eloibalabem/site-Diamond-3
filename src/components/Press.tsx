import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function Press() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="press" className="py-24 bg-[#020005] text-white relative overflow-hidden">
      {/* Animated Background Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-neon-pink/30 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.25, 0.1],
          x: [0, -80, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neon-purple/30 rounded-full blur-[150px] pointer-events-none"
      />

      {/* Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-panel bg-white/[0.02] backdrop-blur-xl border border-white/10 p-10 md:p-16 rounded-3xl text-center relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            {/* Inner subtle glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-neon-pink/10 to-transparent opacity-50 pointer-events-none"></div>

            <h2 className="text-neon-pink text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4 relative z-10">
              Imprensa
            </h2>
            <h3 className="font-display text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6 relative z-10">
              Credenciamento
            </h3>
            <p className="text-gray-300 mb-10 max-w-xl mx-auto text-sm md:text-base leading-relaxed relative z-10">
              Faça parte da nossa cobertura oficial. Solicite seu credenciamento para ter acesso a áreas exclusivas, entrevistas e novidades em primeira mão.
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="relative z-10 px-8 py-4 bg-transparent text-white border border-neon-pink/50 font-bold uppercase tracking-widest hover:bg-neon-pink hover:text-black hover:border-neon-pink transition-all duration-300 clickable hover-glow shadow-[0_0_20px_rgba(255,0,122,0.2)]"
            >
              Solicitar Credenciamento
            </motion.button>
          </div>
        </motion.div>
      </div>

      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={() => setIsModalOpen(false)}
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl bg-[#0a0a0f] border border-white/10 rounded-2xl shadow-2xl z-10 flex flex-col h-[90vh] md:h-[80vh]"
              >
                <div className="flex justify-between items-center p-4 border-b border-white/10">
                  <h3 className="text-xl font-display font-bold text-white uppercase tracking-tight">
                    Formulário de Credenciamento
                  </h3>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors clickable"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="flex-grow w-full overflow-hidden rounded-b-2xl bg-white">
                  <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdSCcbILStKuSpNSgsBF417WRegha7xJ68Urz3PSWabWl4AwA/viewform?embedded=true" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    marginHeight={0} 
                    marginWidth={0}
                    className="w-full h-full"
                  >
                    Carregando…
                  </iframe>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
