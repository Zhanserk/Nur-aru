import { FACTS, SCHOOL } from '../data/site';
import { Koshkar } from '../art/Logo';

export default function About() {
  return (
    <section className="sec about" id="about">
      <div className="wrap about-grid">
        <div className="about-text reveal">
          <p className="eyebrow"><Koshkar size={30} color="var(--ray)" />Балабақша туралы</p>
          <h2>Баланың өзін қауіпсіз әрі бақытты сезінуі — ең бастысы</h2>
          <p>
            «Нұр Ару» — Түркістан облысы, Сарыағаш ауданындағы Ақниет ауылында орналасқан бөбекжай-бақша.
            Балалар күні бойы мейірімді тәрбиешілердің қамқорлығында ойнап, үйреніп, достасады.
          </p>
          <p>Қалғанының бәрі — білім де, дағды да, достық та — осы сенімнен басталады.</p>
          <div className="about-photos">
            <figure><img src="/photos/garden-s.jpg" alt="Гүл бақшасы" loading="lazy" width="760" height="760" /></figure>
            <figure><img src="/photos/playground-1-s.jpg" alt="Ойын алаңы" loading="lazy" width="760" height="570" /></figure>
          </div>
          <p className="about-addr">{SCHOOL.address}</p>
        </div>
        <div className="facts">
          {FACTS.map((f, i) => (
            <article key={f.n} className={`fact tone-${f.tone} reveal`} style={{ '--i': i }}>
              <b className="fact-n">{f.n}</b>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
