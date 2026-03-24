import React from 'react';
import { X } from 'lucide-react';

interface ArtistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const artistsByCategory = {
  "Pop & Global": ["Adele", "Celine Dion", "Beyoncé", "Taylor Swift", "Ed Sheeran", "Billie Eilish", "Olivia Rodrigo", "Harry Styles", "Alicia Keys", "Mariah Carey", "Katy Perry", "Shakira", "Madonna"],
  "Rock & Alternative": ["Paul McCartney", "Coldplay", "Foo Fighters", "Red Hot Chili Peppers", "Arctic Monkeys", "The Killers", "Imagine Dragons", "U2", "Bon Jovi", "Bruce Springsteen", "Rod Stewart", "Duran Duran", "Depeche Mode", "Simple Minds", "A-ha"],
  "R&B, Hip-Hop & Soul": ["Usher", "Drake", "The Weeknd", "Eminem", "Mary J. Blige", "Janet Jackson", "Christina Aguilera", "P!nk", "Jennifer Lopez", "Justin Timberlake", "Lenny Kravitz", "Sting", "Shania Twain", "Gwen Stefani", "Stevie Wonder", "Diana Ross", "KC and the Sunshine Band", "Eagles", "Gipsy Kings", "Earth, Wind & Fire", "Chicago", "The Beach Boys", "Kool & the Gang", "Pet Shop Boys"],
  "K-Pop": ["Blackpink", "BTS", "Stray Kids", "Ateez", "NewJeans"]
};

export default function ArtistModal({ isOpen, onClose }: ArtistModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-deep-black border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl p-8 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-neon-pink transition-colors"
        >
          <X size={24} />
        </button>
        
        <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-8 uppercase tracking-tighter">
          Nosso Catálogo de Artistas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(artistsByCategory).map(([category, artists]) => (
            <div key={category}>
              <h3 className="text-neon-pink font-bold uppercase tracking-widest text-sm mb-4 border-b border-white/10 pb-2">
                {category}
              </h3>
              <ul className="space-y-2">
                {artists.map((artist) => (
                  <li key={artist} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                    {artist}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
