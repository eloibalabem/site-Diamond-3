import React from 'react';

const artists = [
  { name: 'Ed Sheeran', role: 'Pop • Global Artist', img: 'https://raw.githubusercontent.com/eloibalabem/diamondmusic/main/ED-SHEERAN.webp' },
  { name: 'Taylor Swift', role: 'Pop • Stadium Performer', img: 'https://raw.githubusercontent.com/eloibalabem/diamondmusic/main/Life_Taylor-Swift.webp' },
  { name: 'Adele', role: 'Pop • Vocal Icon', img: 'https://raw.githubusercontent.com/eloibalabem/diamondmusic/main/adele%20(1).webp' },
  { name: 'Beyoncé', role: 'Pop • Global Icon', img: 'https://raw.githubusercontent.com/eloibalabem/diamondmusic/main/beyonce%20(1).webp' },
  { name: 'Drake', role: 'Hip-Hop • Global Star', img: 'https://raw.githubusercontent.com/eloibalabem/diamondmusic/main/Drake_2025%20(1).webp' },
  { name: 'The Weeknd', role: 'R&B • Premium Performer', img: 'https://raw.githubusercontent.com/eloibalabem/diamondmusic/main/the-weeknd%20(1).webp' },
  { name: 'Coldplay', role: 'Rock • Stadium Band', img: 'https://raw.githubusercontent.com/eloibalabem/diamondmusic/main/coldplay%20(1).webp' },
  { name: 'BTS', role: 'K-Pop • Global Phenomenon', img: 'https://raw.githubusercontent.com/eloibalabem/diamondmusic/main/bts.webp' },
];

export default function StackedArtistCards() {
  return (
    <div className="stack">
      {artists.map((artist, index) => (
        <div key={index} className="card">
          <img src={artist.img} alt={artist.name} referrerPolicy="no-referrer" />
          <div className="overlay"></div>
          <div className="content">
            <h3>{artist.name}</h3>
            <p>{artist.role}</p>
          </div>
        </div>
      ))}
      <div className="card flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20">
        <h3 className="text-2xl font-bold text-white">(muitos +)</h3>
      </div>
    </div>
  );
}
