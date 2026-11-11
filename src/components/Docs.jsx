import { useMemo, useState } from 'react';
import { DOCS } from '../data/docs';

const ALL = 'all';
const AGE_ORDER = ['Кіші', 'Ортаңғы', 'Ересек', 'МАД'];
const AGE_LABEL = { Кіші: 'Кіші топ', Ортаңғы: 'Ортаңғы топ', Ересек: 'Ересек топ', МАД: 'Мектепалды' };

const CATEGORIES = [
  { key: 'license', ic: '📜', title: 'Лицензия, рұқсаттар, шарттар', text: 'Медициналық лицензия, санитарлық қорытынды, тіркеу, ата-ана шарты' },
  { key: 'plans', ic: '🗓️', title: 'Жоспарлар мен кестелер', text: 'Жылдық жоспар, күн тәртібі, оқу кестесі, медбике мен әдіскер жоспары' },
  { key: 'protocols', ic: '📋', title: 'Хаттамалар', text: 'Педагогикалық кеңес, меңгеруші жанындағы кеңес, әдеп кеңесі' },
  { key: 'cyclo', ic: '📚', title: 'Перспектива, циклограмма', text: 'Әр топтың оқу жылына арналған жоспары' },
  { key: 'summer', ic: '☀️', title: 'Жазғы сауықтыру', text: 'Әр топтың жазғы сауықтыру жоспары' },
  { key: 'monitoring', ic: '📈', title: 'Мониторинг', text: 'Бастапқы, аралық және қорытынды бақылау кестелері' },
  { key: 'reports', ic: '📊', title: 'Әдіскер есептері мен қосымшалар', text: 'Әдіскер есептері, 2–5 қосымшалар' },
  { key: 'kids', ic: '🧒', title: 'Балалардың жеке даму карталары', text: 'Әр топтың оқу жылы бойынша жеке даму карталары' },
  { key: 'staff', ic: '🎓', title: 'Педагогтер біліктілігі', text: 'Диплом, сертификат, куәліктер, жеке куәлік (ЖСН жабық)' },
];
const ICON = Object.fromEntries(CATEGORIES.map((c) => [c.key, c.ic]));
const COUNT = Object.fromEntries(CATEGORIES.map((c) => [c.key, DOCS.filter((d) => d.cat === c.key).length]));

const norm = (s) => s.normalize('NFC').toLowerCase();
const ageIdx = (a) => AGE_ORDER.indexOf(a);
// Жаңасы жоғарыда; ішінде жас тобы бойынша, соңынан атауы бойынша
const compare = (a, b) => b.year.localeCompare(a.year) || ageIdx(a.age) - ageIdx(b.age) || a.title.localeCompare(b.title, 'kk');

const YEARS = [...new Set(DOCS.map((d) => d.year).filter(Boolean))].sort().reverse();
const AGES = AGE_ORDER.filter((a) => DOCS.some((d) => d.age === a));

function Chips({ label, value, onChange, items, text = (x) => x }) {
  return (
    <div className="dchips" role="group" aria-label={label}>
      <span className="dchips-label">{label}</span>
      <button type="button" className={`chip ${value === ALL ? 'on' : ''}`} aria-pressed={value === ALL} onClick={() => onChange(ALL)}>Барлығы</button>
      {items.map((it) => (
        <button type="button" key={it} className={`chip ${value === it ? 'on' : ''}`} aria-pressed={value === it} onClick={() => onChange(it)}>{text(it)}</button>
      ))}
    </div>
  );
}

export default function Docs() {
  const [cat, setCat] = useState(ALL);
  const [year, setYear] = useState(ALL);
  const [age, setAge] = useState(ALL);
  const [q, setQ] = useState('');

  const shown = useMemo(() => {
    const words = norm(q).split(/\s+/).filter(Boolean);
    return DOCS
      .filter((d) => (cat === ALL || d.cat === cat) && (year === ALL || d.year === year) && (age === ALL || d.age === age))
      .filter((d) => {
        const hay = norm(`${d.title} ${d.year} ${AGE_LABEL[d.age] || ''} ${d.group}`);
        return words.every((w) => hay.includes(w));
      })
      .sort(compare);
  }, [cat, year, age, q]);
  const reset = () => { setCat(ALL); setYear(ALL); setAge(ALL); setQ(''); };

  return (
    <section className="sec docs" id="docs">
      <div className="wrap">
        <div className="sec-head reveal">
          <p className="eyebrow">Құжаттар</p>
          <h2>Ашықтық пен сенім</h2>
          <p>Балабақшаның ресми құжаттары осы бөлімде жарияланады: санатты таңдап, оқу жылы мен жас тобы бойынша сүзуге немесе атауы бойынша іздеуге болады.</p>
        </div>

        {/* reveal — статикалық орамада: батырма className-ді өзгертіп, .in-ді өшіріп жібермеуі үшін */}
        <div className="doc-tiles reveal">
          {CATEGORIES.map((c) => (c.note ? (
            <div className="doc-tile is-note" key={c.key}>
              <span className="doc-ic">{c.ic}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <b className="soon">{c.note}</b>
            </div>
          ) : (
            <button type="button" key={c.key} className={`doc-tile ${cat === c.key ? 'on' : ''}`} aria-pressed={cat === c.key} onClick={() => setCat(cat === c.key ? ALL : c.key)}>
              <span className="doc-ic">{c.ic}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <b className="doc-count">{COUNT[c.key]} құжат</b>
            </button>
          )))}
        </div>

        <div className="doc-filters">
          <label className="doc-search">
            <span aria-hidden="true">🔍</span>
            <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Құжатты іздеу: мысалы, «жылдық жоспар» немесе «балапан»" aria-label="Құжатты іздеу" />
            {q && <button type="button" className="doc-clear" onClick={() => setQ('')} aria-label="Іздеуді тазалау">×</button>}
          </label>
          <Chips label="Оқу жылы" value={year} onChange={setYear} items={YEARS} />
          <Chips label="Жас тобы" value={age} onChange={setAge} items={AGES} text={(a) => AGE_LABEL[a]} />
        </div>

        <p className="doc-result" aria-live="polite">Табылды: <b>{shown.length}</b> құжат</p>

        {shown.length === 0 ? (
          <div className="doc-empty">
            <span>🔎</span>
            <p>Мұндай құжат табылмады. Сүзгіні тазалап көріңіз.</p>
            <button type="button" className="btn btn-ray" onClick={reset}>Сүзгіні тазалау</button>
          </div>
        ) : (
          <ul className="doc-list" key={`${cat}|${year}|${age}|${q}`}>
            {shown.map((d, i) => {
              const sheet = d.file.endsWith('.xlsx');
              return (
                <li key={d.file} style={{ '--i': i }}>
                  <a className="doc-row" href={`/docs/${d.file}`} {...(sheet ? { download: true } : { target: '_blank', rel: 'noreferrer' })}>
                    <span className="doc-hex">{ICON[d.cat]}</span>
                    <span className="doc-main">
                      <b>{d.title}</b>
                      <small>{sheet ? `Excel кестесі · ${d.pages} парақ` : `${d.pages} бет`} · {d.size}</small>
                    </span>
                    {d.year ? <span className="doc-pill">{d.year}</span> : <span />}
                    <span className="doc-open">{sheet ? 'Жүктеп алу ↓' : 'PDF ашу ↗'}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
