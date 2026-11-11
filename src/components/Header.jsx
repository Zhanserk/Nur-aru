import { useEffect, useState } from 'react';
import { NAV } from '../data/site';
import { Mark, Word } from '../art/Logo';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Қай бөлімде тұрғанымызды мәзірде көрсетеді
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    NAV.forEach(([href]) => {
      const el = document.getElementById(href.slice(1));
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header className={`topbar${solid ? ' solid' : ''}${open ? ' open' : ''}`}>
      <div className="wrap topbar-in">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <Mark size={48} />
          <span className="brand-t">
            <Word size="1.65rem" />
            <small>бөбекжай балабақшасы</small>
          </span>
        </a>
        <nav className="nav" aria-label="Негізгі мәзір">
          {NAV.map(([href, title]) => (
            <a key={href} href={href} className={active === href.slice(1) ? 'on' : ''} onClick={() => setOpen(false)}>{title}</a>
          ))}
        </nav>
        <a className="btn btn-ray btn-sm" href="#contact" onClick={() => setOpen(false)}>Орын сұрау</a>
        <button type="button" className="burger" aria-label="Мәзірді ашу" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
