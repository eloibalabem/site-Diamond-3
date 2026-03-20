import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles, Loader2 } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioUrlRef = useRef<string | null>(null);

  useEffect(() => {
    const savedState = localStorage.getItem('immersiveAudio');
    if (savedState === 'true') {
      setHasInteracted(true);
    }

    // Cleanup blob URL on unmount
    return () => {
      if (audioUrlRef.current) {
        URL.revokeObjectURL(audioUrlRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      document.body.classList.add('immersive-active');
    } else {
      document.body.classList.remove('immersive-active');
    }
  }, [isPlaying]);

  const loadAndPlayAudio = async () => {
    if (!audioRef.current) return;

    try {
      setIsLoading(true);
      audioRef.current.volume = window.innerWidth < 768 ? 0.2 : 0.35;
      await audioRef.current.play();
      setIsPlaying(true);
      localStorage.setItem('immersiveAudio', 'true');
    } catch (error) {
      console.error("Audio playback failed:", error);
      setIsPlaying(false);
      localStorage.setItem('immersiveAudio', 'false');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleAudio = () => {
    setHasInteracted(true);
    
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
      localStorage.setItem('immersiveAudio', 'false');
    } else {
      loadAndPlayAudio();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {!hasInteracted && !isPlaying && !isLoading && (
        <div className="hidden md:flex items-center gap-2 bg-black/50 backdrop-blur-md border border-neon-purple/30 px-4 py-2 rounded-full text-sm text-gray-300 animate-fade-in-up shadow-[0_0_15px_rgba(122,0,255,0.2)]">
          <Sparkles className="w-4 h-4 text-neon-purple" />
          <span>Entrar no modo imersivo</span>
        </div>
      )}
      
      <div className="relative group flex items-center justify-center">
        <button
          onClick={toggleAudio}
          disabled={isLoading}
          className={`relative flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-md transition-all duration-500 border ${
            isPlaying 
              ? 'bg-neon-purple/10 border-neon-purple/50 text-neon-purple shadow-[0_0_20px_rgba(122,0,255,0.3)]' 
              : 'bg-black/50 border-white/10 text-gray-300 hover:border-neon-pink/50 hover:text-white hover:shadow-[0_0_15px_rgba(255,0,122,0.3)]'
          } ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
          aria-label={isPlaying ? "Desativar som" : "Ativar experiência sonora"}
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin text-neon-purple" />
          ) : isPlaying ? (
            <Volume2 className="w-5 h-5" />
          ) : (
            <VolumeX className="w-5 h-5 group-hover:scale-110 transition-transform" />
          )}
        </button>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-black/80 backdrop-blur-md border border-white/10 rounded text-xs font-medium text-white whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
          {isLoading ? "Carregando áudio..." : isPlaying ? "Desativar som" : "Ativar experiência sonora"}
        </div>
      </div>

      <audio 
        ref={audioRef} 
        loop 
        preload="none"
        src="https://raw.githubusercontent.com/eloibalabem/diamondmusic/81d04563fdc9717208ed5a6b324639e182b2ad23/background%20site%20diamond.mp3"
      />
    </div>
  );
}
