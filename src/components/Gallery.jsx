import { useCallback, useEffect, useState } from 'react';
import { PHOTOS, PHOTO_CATS } from '../data/site';

function Lightbox({ items, index, onClose, onMove }) {
  const p = items[index];
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onMove(1);
      if (e.key === 'ArrowLeft') onMove(-1);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, onMove]);

  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={p.caption} onClick={onClose}>
      <button type="button" className="lb-close" aria-label="Жабу" onClick={onClose}>×</button>
      <button type="button" className="lb-nav lb-prev" aria-label="Алдыңғы сурет" onClick={(e) => { e.stopPropagation(); onMove(-1); }}>‹</button>
      <figure onClick={(e) => e.stopPropagation()}>
        <img key={p.slug} src={p.src} alt={p.caption} />
        <figcaption>{p.caption} <span>{index + 1} / {items.length}</span></figcaption>
      </figure>
      <button type="button" className="lb-nav lb-next" aria-label="Келесі сурет" onClick={(e) => { e.stopPropagation(); onMove(1); }}>›</button>
    </div>
  );
}

export default function Gallery() {
  const [cat, setCat] = useState('all');
  const [open, setOpen] = useState(null);
  const shown = cat === 'all' ? PHOTOS : PHOTOS.filter((p) => p.cat === cat);
  const close = useCallback(() => setOpen(null), []);
  const move = useCallback((d) => setOpen((i) => (i === null ? i : (i + d + shown.length) % shown.length)), [shown.length]);

  return (
    <section className="sec gallery" id="gallery">
      <div className="wrap">
        <div className="sec-head reveal">
          <p className="eyebrow">Суреттер</p>
          <h2>Біздің балабақша ішінен</h2>
          <p>Ойын бөлмелері, ұйқы бөлмесі, дәліз және аула — барлығы өз көзіңізбен.</p>
        </div>
        <div className="chips reveal" role="group" aria-label="Санат">
          {PHOTO_CATS.map((c) => (
            <button type="button" key={c.key} className={`chip${cat === c.key ? ' on' : ''}`} aria-pressed={cat === c.key} onClick={() => setCat(c.key)}>{c.title}</button>
          ))}
        </div>
        <div className="masonry" key={cat}>
          {shown.map((p, i) => (
            <button type="button" className="shot" key={p.slug} style={{ '--i': i, aspectRatio: `${p.w} / ${p.h}` }} onClick={() => setOpen(i)} aria-label={`${p.caption}: үлкейту`}>
              <img src={p.thumb} alt={p.caption} loading="lazy" width={p.w} height={p.h} />
              <span>{p.caption}</span>
            </button>
          ))}
        </div>
      </div>
      {open !== null && <Lightbox items={shown} index={open} onClose={close} onMove={move} />}
    </section>
  );
}
