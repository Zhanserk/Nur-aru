import Scene from './Scene';
import { Mark, Koshkar } from '../art/Logo';
import { SCHOOL, STATS } from '../data/site';

// Айналып тұратын мөр: «НҰР АРУ · БӨБЕКЖАЙ БАЛАБАҚШАСЫ»
function Stamp() {
  return (
    <div className="stamp" aria-hidden="true">
      <svg viewBox="0 0 200 200" className="stamp-ring">
        <defs><path id="stampPath" d="M100 100m-80 0a80 80 0 1 1 160 0a80 80 0 1 1-160 0" /></defs>
        <circle cx="100" cy="100" r="98" fill="#ffb400" />
        <circle cx="100" cy="100" r="64" fill="#fffaf3" />
        <text fontSize="16.5" fontWeight="800" fill="#26294f" letterSpacing="2.4" style={{ fontFamily: 'Onest, sans-serif' }}>
          <textPath href="#stampPath">НҰР АРУ · БӨБЕКЖАЙ БАЛАБАҚШАСЫ · </textPath>
        </text>
      </svg>
      <span className="stamp-mark"><Mark size={52} /></span>
    </div>
  );
}

export default function Hero() {
  return (
    <Scene>
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <p className="eyebrow"><Koshkar size={30} color="var(--girl-deep)" />{SCHOOL.place}</p>
          <h1>Мұнда әр бала <em className="hl">нұрдай</em> жарқырайды</h1>
          <p className="lead">«Нұр Ару» — кішкентайларға арналған жарық әрі жылы әлем.</p>
          <div className="cta">
            <a className="btn btn-ray" href="#contact">Балабақшаға келіп көру</a>
            <a className="btn btn-line" href="#groups">Топтармен танысу →</a>
          </div>
        </div>
        <figure className="frame">
          <div className="frame-photo"><img src="/photos/entrance-1.jpg" alt="«Нұр Ару» бөбекжай балабақшасының кіреберісі" width="1280" height="960" /></div>
          <Stamp />
          <figcaption className="badge badge-hours"><b>{SCHOOL.hours.replace(/ /g, '')}</b><span>жұмыс уақыты</span></figcaption>
        </figure>
      </div>
    </Scene>
  );
}

export function Stats() {
  return (
    <div className="wrap">
      <ul className="stats">
        {STATS.map((s) => (
          <li key={s.label} className={`stat tone-${s.tone} reveal`}>
            <b className={s.small ? 'small' : ''}>{s.value}</b>
            <span>{s.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
