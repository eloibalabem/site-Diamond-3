import React from 'react';

const artists = [
  { name: 'Ed Sheeran', role: 'Pop • Global Artist', image: 'https://raw.githubusercontent.com/eloibalabem/diamondmusic/main/ED-SHEERAN.webp' },
  { name: 'Taylor Swift', role: 'Pop • Stadium Performer', image: 'https://raw.githubusercontent.com/eloibalabem/diamondmusic/main/Life_Taylor-Swift.webp' },
  { name: 'Adele', role: 'Pop • Vocal Icon', image: 'https://raw.githubusercontent.com/eloibalabem/diamondmusic/main/adele%20(1).webp' },
  { name: 'Beyoncé', role: 'Pop • Global Icon', image: 'https://raw.githubusercontent.com/eloibalabem/diamondmusic/main/beyonce%20(1).webp' },
];

export default function ArtistCarousel() {
  return (
    <div className="relative w-full py-8">
      {/* Edge Fade Masks */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-deep-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-deep-black to-transparent z-10 pointer-events-none" />

      {/* Carousel Container */}
      <div className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth snap-x pb-6 px-4 md:px-8 [&::-webkit-scrollbar]:hidden">
        {artists.map((artist, index) => (
          <div 
            key={index} 
            className="relative flex-none w-48 md:w-56 h-72 md:h-80 rounded-2xl overflow-hidden snap-start border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:border-neon-pink/50 hover:shadow-2xl hover:shadow-neon-pink/20 cursor-pointer group"
          >
            <img 
              src={artist.image} 
              alt={artist.name} 
              loading="lazy"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-semibold text-lg">{artist.name}</h3>
              <p className="text-xs opacity-70 mt-1">{artist.role}</p>
            </div>
          </div>
        ))}

        {/* "More" Card */}
        <div className="flex-none w-48 md:w-56 h-72 md:h-80 rounded-2xl snap-start border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col items-center justify-center p-6 text-center transition-all duration-300 hover:border-neon-pink/50 hover:bg-slate-800 cursor-pointer">
          <h3 className="text-3xl font-black text-white mb-2">+30</h3>
          <p className="text-sm text-gray-300">Artistas Internacionais</p>
        </div>
      </div>
    </div>
  );
}
