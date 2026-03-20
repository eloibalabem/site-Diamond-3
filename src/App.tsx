import { useEffect, lazy, Suspense, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Preloader from './components/Preloader';
import AudioPlayer from './components/AudioPlayer';

// Lazy load components below the fold
const About = lazy(() => import('./components/About'));
const Leadership = lazy(() => import('./components/Leadership'));
const Services = lazy(() => import('./components/Services'));
const Events = lazy(() => import('./components/Events'));
const Experience = lazy(() => import('./components/Experience'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const HeroFuturistic = lazy(() => import('./components/ui/hero-futuristic'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  useGSAP(() => {
    if (!preloaderDone) return;

    const mm = gsap.matchMedia();

    // Scroll reveal for sections
    const sections = document.querySelectorAll('section, footer');
    sections.forEach((section) => {
      // Background color transition (Active on all devices)
      const bgColor = section.getAttribute('data-bgcolor');
      if (bgColor) {
        ScrollTrigger.create({
          trigger: section,
          start: 'top 50%',
          end: 'bottom 50%',
          onEnter: () => {
            const wrapper = document.getElementById('main-wrapper');
            if (wrapper) wrapper.style.backgroundColor = bgColor;
          },
          onEnterBack: () => {
            const wrapper = document.getElementById('main-wrapper');
            if (wrapper) wrapper.style.backgroundColor = bgColor;
          },
        });
      }
    });

    // Desktop Animations (Full)
    mm.add("(min-width: 768px)", () => {
      sections.forEach((section) => {
        if (section.id === 'home' || section.id === 'events' || section.id === 'experience') return; 

        gsap.fromTo(section, 
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      });

      // Word stagger animation for section titles
      const sectionTitles = document.querySelectorAll('h2, h3.font-display');
      sectionTitles.forEach((title) => {
        if (title.closest('.hero-content') || title.closest('.about-title') || title.classList.contains('exp-title')) return;
        
        if (!title.classList.contains('split-done')) {
          const wrapWords = (node: Node) => {
            if (node.nodeType === Node.TEXT_NODE) {
              const text = node.textContent || '';
              if (text.trim() === '') return;
              
              const words = text.split(/(\s+)/);
              const fragment = document.createDocumentFragment();
              
              words.forEach(word => {
                if (word.trim() === '') {
                  fragment.appendChild(document.createTextNode(word));
                } else {
                  const span = document.createElement('span');
                  span.className = 'inline-block split-word';
                  span.textContent = word;
                  fragment.appendChild(span);
                }
              });
              
              node.parentNode?.replaceChild(fragment, node);
            } else if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as HTMLElement;
              if (!element.classList.contains('split-word')) {
                Array.from(element.childNodes).forEach(wrapWords);
              }
            }
          };
          
          Array.from(title.childNodes).forEach(wrapWords);
          title.classList.add('split-done');
        }
        
        const words = title.querySelectorAll('.split-word');
        if (words.length > 0) {
          gsap.from(words, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: title,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          });
        }
      });

      // Subtitles with smooth fade-in
      const subtitles = document.querySelectorAll('p.text-gray-400, p.text-gray-300');
      subtitles.forEach((subtitle) => {
        if (subtitle.closest('.hero-content') || subtitle.classList.contains('exp-desc') || subtitle.classList.contains('exp-subtitle')) return;
        
        gsap.fromTo(subtitle, 
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: subtitle,
              start: 'top 90%',
              toggleActions: 'play none none none'
            }
          }
        );
      });

      // Buttons with slight scale animation
      const buttons = document.querySelectorAll('button, .btn, a.btn');
      buttons.forEach((btn) => {
        if (btn.closest('.hero-content') || btn.closest('nav')) return;
        
        gsap.from(btn, {
          scale: 0.9,
          opacity: 0,
          duration: 0.6,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: btn,
            start: 'top 95%',
            toggleActions: 'play none none none'
          }
        });
      });
    });

    // Mobile Animations (Simplified)
    mm.add("(max-width: 767px)", () => {
      sections.forEach((section) => {
        if (section.id === 'home' || section.id === 'events' || section.id === 'experience') return; 

        gsap.fromTo(section, 
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 90%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    });

    return () => mm.revert();
  }, [preloaderDone]);

  return (
    <>
      {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}
      <div id="main-wrapper" className={`bg-deep-black transition-colors duration-1000 min-h-screen text-white selection:bg-neon-pink selection:text-white font-sans relative ${!preloaderDone ? 'h-screen overflow-hidden' : ''}`}>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-32 flex items-center justify-center"><div className="w-8 h-8 border-2 border-neon-pink border-t-transparent rounded-full animate-spin"></div></div>}>
          <About />
          <Leadership />
          <Services />
          <Events />
          <Experience />
          <Testimonials />
          <HeroFuturistic />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <AudioPlayer />
      </div>
    </>
  );
}
