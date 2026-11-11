import { NAV, SCHOOL } from '../data/site';
import { Mark, Word } from '../art/Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-in">
        <a className="brand" href="#top">
          <Mark size={52} />
          <span className="brand-t"><Word size="1.8rem" /><small>бөбекжай балабақшасы</small></span>
        </a>
        <nav aria-label="Төменгі мәзір">
          {NAV.map(([href, title]) => <a key={href} href={href}>{title}</a>)}
        </nav>
        <p>© 2026 {SCHOOL.legal}<br />{SCHOOL.place}</p>
      </div>
    </footer>
  );
}
