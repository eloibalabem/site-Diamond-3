import React from 'react';
import { motion } from 'framer-motion';

const HeroVideo: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://raw.githubusercontent.com/eloibalabem/diamondmusic/8749fea7e2f38f1df1ae08ed592b551dd9ea922c/hero-artistas.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-6 text-white drop-shadow-lg">
            ARTISTAS INTERNACIONAIS
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light tracking-wide">
            Shows que conectam multidões ao redor do mundo
          </p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-neon-pink hover:text-white transition-all duration-300 shadow-lg hover:shadow-neon-pink/50"
          >
            Explorar Artistas
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroVideo;
