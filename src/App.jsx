import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero, { Stats } from './components/Hero';
import About from './components/About';
import Groups from './components/Groups';
import Day from './components/Day';
import Gallery from './components/Gallery';
import Docs from './components/Docs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Koshkar } from './art/Logo';

// Қазақ оюынан бөлгіш
function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      {Array.from({ length: 15 }, (_, i) => <Koshkar key={i} size={44} color={i % 2 ? 'var(--girl)' : 'var(--ray)'} />)}
    </div>
  );
}

export default function App() {
  // Айналдырғанда бөлімдер жұмсақ пайда болады (.reveal → .in)
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    document.documentElement.classList.add('reveal-on');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Divider />
        <Groups />
        <Day />
        <Gallery />
        <Docs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
