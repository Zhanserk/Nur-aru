import { useRef } from 'react';
import { usePauseOffscreen } from '../hooks/useScene';
import { Mountains, Lake, SunPath, Land, FrontHill, YurtArt, TulipCluster, Reeds, Cloud, Bird } from '../art/Landscape';
import { SchoolScene } from '../art/Building';
import { Watchers } from '../art/Kids';

const LEFT = [[40, 150, 0], [88, 100, 2], [140, 122, 3], [200, 86, 1], [255, 106, 2], [300, 72, 0]];
const RIGHT = [[30, 72, 1], [78, 108, 3], [132, 88, 2], [190, 124, 0], [244, 100, 3], [296, 152, 1]];

const MOTES = Array.from({ length: 10 }, (_, i) => ({
  x: 8 + ((i * 37) % 86),
  y: 40 + ((i * 53) % 40),
  s: 3 + (i % 4) * 1.5,
  t: 8 + (i % 5) * 2,
  d: -((i * 1.7) % 9),
}));

// Басты экран: биіктігі экранға тең (Замира сияқты), бәрі бірінші бетте көрінеді.
// Өлшемдер --u бірлігімен (экран биіктігі / 900), бөліктер төменнен (bottom) қойылады.
export default function Scene({ children }) {
  const ref = useRef(null);
  usePauseOffscreen(ref);
  return (
    <section className="hero" id="top" ref={ref}>
      <div className="sunwrap" aria-hidden="true"><i className="rays" /><i className="sun" /></div>
      <Cloud id="cl1" className="c1" />
      <Cloud id="cl2" className="c2" />
      <Cloud id="cl3" className="c3" />
      <Cloud id="cl4" className="c4" />
      <Bird className="b1" />
      <Bird className="b2" />
      <Bird className="b3" />

      <Mountains className="mountains" />
      <Lake className="lake" />
      <Land className="land" />
      <SunPath className="sunpath" />
      <Reeds className="reeds ra" />
      <Reeds className="reeds rb" />
      <YurtArt className="yurt" />
      <SchoolScene className="school" />
      <Watchers className="kidsbox" />
      <FrontHill className="fronthill" />
      <TulipCluster className="tulips tl" items={LEFT} />
      <TulipCluster className="tulips tr" items={RIGHT} />
      <div className="dust" aria-hidden="true">
        {MOTES.map((p, i) => <i key={i} style={{ left: `${p.x}%`, top: `${p.y}%`, '--s': `${p.s}px`, '--t': `${p.t}s`, '--d': `${p.d}s` }} />)}
      </div>

      {children}
    </section>
  );
}
