import React, { Suspense } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Leadership from '../components/Leadership';
import Services from '../components/Services';
import Events from '../components/Events';
import Experience from '../components/Experience';
import Testimonials from '../components/Testimonials';
import HeroFuturistic from '../components/ui/hero-futuristic';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import InternationalArtistsSection from '../components/InternationalArtistsSection';
import AudioPlayer from '../components/AudioPlayer';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useGSAP(() => {
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
            duration: 0.5,
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
            duration: 0.5,
            stagger: 0.05,
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
            duration: 0.6,
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
          duration: 0.4,
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
            duration: 0.4,
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
  }, []);

  return (
    <div id="main-wrapper" className="bg-deep-black transition-colors duration-1000 min-h-screen text-white selection:bg-neon-pink selection:text-white font-sans relative">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-32 flex items-center justify-center"><div className="w-8 h-8 border-2 border-neon-pink border-t-transparent rounded-full animate-spin"></div></div>}>
          <div className="organic-divider-bottom">
            <About />
          </div>
          <div className="organic-divider-top organic-divider-bottom">
            <Leadership />
          </div>
          <div className="organic-divider-top organic-divider-bottom">
            <Services />
          </div>
          <div className="organic-divider-top organic-divider-bottom">
            <InternationalArtistsSection />
          </div>
          <div className="organic-divider-top organic-divider-bottom">
            <Events />
          </div>
          <div className="organic-divider-top organic-divider-bottom">
            <Experience />
          </div>
          <div className="organic-divider-top organic-divider-bottom">
            <Testimonials />
          </div>
          <div className="organic-divider-top organic-divider-bottom">
            <HeroFuturistic />
          </div>
          <div className="organic-divider-top">
            <Contact />
          </div>
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <AudioPlayer />
    </div>
  );
}
