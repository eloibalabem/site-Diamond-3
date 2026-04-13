import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const artistsByCategory = {
  "Pop": ["Adele", "Taylor Swift", "Ed Sheeran", "Harry Styles", "Katy Perry", "Shakira", "Madonna"],
  "Rock": ["Coldplay", "Foo Fighters", "Red Hot Chili Peppers", "Arctic Monkeys", "The Killers", "Imagine Dragons", "U2", "Bon Jovi", "Bruce Springsteen", "Rod Stewart", "Duran Duran", "Depeche Mode", "Simple Minds", "A-ha"],
  "Hip-Hop & R&B": ["Beyoncé", "Drake", "The Weeknd", "Alicia Keys", "Eminem", "Mary J. Blige", "Janet Jackson", "Usher", "Earth, Wind & Fire", "Kool & the Gang"],
  "K-Pop": ["Blackpink", "BTS", "Stray Kids", "Ateez", "NewJeans"],
  "Classics": ["Paul McCartney", "Celine Dion", "Stevie Wonder", "Diana Ross", "KC and the Sunshine Band", "Eagles", "Gipsy Kings", "Chicago", "The Beach Boys", "Pet Shop Boys"],
  "Others": ["Christina Aguilera", "P!nk", "Jennifer Lopez", "Lenny Kravitz", "Sting", "Shania Twain", "Mariah Carey", "Gwen Stefani"]
};

export default function ArtistsPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white py-20 px-6">
      <div className="container mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-neon-pink hover:text-white transition-colors mb-10">
          <ArrowLeft className="w-5 h-5" /> Voltar para Home
        </Link>
        
        <h1 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16">
          Nosso <span className="text-neon-pink">Line-up</span>
        </h1>

        <div className="space-y-16">
          {Object.entries(artistsByCategory).map(([category, artists], idx) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-display font-bold text-neon-purple uppercase tracking-widest mb-8 border-l-4 border-neon-purple pl-4">
                {category}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {artists.map((artist) => (
                  <motion.div 
                    key={artist}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-neon-pink transition-colors"
                  >
                    <p className="font-bold text-lg">{artist}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
