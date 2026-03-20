import React from 'react';
import { renderToString } from 'react-dom/server';
import { HeroFuturistic } from './src/components/ui/hero-futuristic';

try {
  const html = renderToString(<HeroFuturistic />);
  console.log("Rendered successfully");
} catch (e) {
  console.error(e);
}
