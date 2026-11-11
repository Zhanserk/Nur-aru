import { SCHOOL } from '../data/site';

const MAP = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Ақниет ауылы, М. Мақатаев көшесі 43, Сарыағаш ауданы')}`;

export default function Contact() {
  return (
    <section className="sec contact" id="contact">
      <div className="stars" aria-hidden="true" />
      <div className="wrap contact-grid">
        <div className="reveal">
          <p className="eyebrow light">Байланыс</p>
          <h2>Балабақшаға келіп көріңіз</h2>
          <p className="contact-lead">Топтармен танысып, тәрбиешілермен сөйлесіп, балаңызға орын сұрай аласыз.</p>
          <ul className="contact-list">
            <li><span className="ci">📍</span><div><b>Мекенжай</b><p>{SCHOOL.address}</p></div></li>
            <li><span className="ci">🕖</span><div><b>Жұмыс уақыты</b><p>Дүйсенбі – Жұма, {SCHOOL.hours}</p></div></li>
            <li><span className="ci">👩‍🏫</span><div><b>Меңгеруші</b><p>{SCHOOL.director}</p></div></li>
            <li><span className="ci">🏛️</span><div><b>Заңды тұлға</b><p>{SCHOOL.legal} · БСН {SCHOOL.bin}</p></div></li>
            {SCHOOL.phone &&<li><span className="ci">📞</span><div><b>Телефон</b><p><a href={`tel:${SCHOOL.phone.replace(/[^+\d]/g, '')}`}>{SCHOOL.phone}</a></p></div></li>}
          </ul>
          <div className="cta">
            <a className="btn btn-ray" href={MAP} target="_blank" rel="noreferrer">Картадан көру ↗</a>
            {SCHOOL.whatsapp && <a className="btn btn-line light" href={SCHOOL.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>}
          </div>
        </div>
        <div className="contact-card reveal" style={{ '--i': 1 }}>
          <img src="/photos/entrance-2-s.jpg" alt="Балабақша кіреберісі" loading="lazy" width="760" height="570" />
          <div className="contact-pin"><b>Нұр Ару</b><span>Ақниет ауылы · М. Мақатаев көшесі, 43</span></div>
        </div>
      </div>
    </section>
  );
}
