import { DAY } from '../data/site';
import { DayIcon } from '../art/Icons';

// Таң, күндіз, кеш: түске қарай боялады
const tone = (i) => (i < 3 ? 'gold' : i < 6 ? 'blue' : 'rose');

export default function Day() {
  return (
    <section className="sec day" id="day">
      <div className="wrap">
        <div className="sec-head reveal">
          <p className="eyebrow">Күн тәртібі</p>
          <h2>Балабақшадағы бір күн</h2>
          <p>Кесте барлық топқа ортақ: таңертеңгі қабылдаудан кешкі үйге қайтуға дейін.</p>
        </div>
        <ol className="timeline">
          {DAY.map(([time, title, text, icon], i) => (
            <li key={time} className={`step tone-${tone(i)} reveal`} style={{ '--i': i }}>
              <span className="step-time">{time}</span>
              <span className="step-ic"><DayIcon kind={icon} /></span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
