import { GROUPS } from '../data/site';
import { GroupIcon } from '../art/Icons';

export default function Groups() {
  return (
    <section className="sec groups" id="groups">
      <div className="stars" aria-hidden="true" />
      <div className="wrap">
        <div className="sec-head light reveal">
          <p className="eyebrow">Топтар</p>
          <h2>5 топ — 5 шуақты әлем</h2>
          <p>Балалар жасына қарай топтарға бөлінген: әр топтың өз аты, өз ойындары мен өз тәрбиешілері бар.</p>
        </div>
        <div className="group-cards">
          {GROUPS.map((g, i) => (
            <article key={g.name} className={`gcard g${i} reveal`} style={{ '--i': i }}>
              <div className="gcard-art"><GroupIcon kind={g.icon} size={104} /></div>
              <span className="gcard-age">{g.age}</span>
              <h3>{g.name}</h3>
              <b className="gcard-tag">{g.tag}</b>
              <p>{g.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
