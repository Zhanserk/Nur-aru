// Нұр Ару белгісі: күн мен лала. Сол жақ сәулелер — ұлдарға (көк), оң жақ — қыздарға (қызғылт), ортасы — нұр (алтын).
export function Mark({ size = 120, label = 'Нұр Ару белгісі' }) {
  const rays = Array.from({ length: 9 }, (_, i) => {
    const t = Math.PI + ((i + 0.5) * Math.PI) / 9;
    const r2 = 56 - Math.abs(i - 4) * 1.4;
    return {
      x1: 60 + 38 * Math.cos(t), y1: 70 + 38 * Math.sin(t),
      x2: 60 + r2 * Math.cos(t), y2: 70 + r2 * Math.sin(t),
      c: i < 4 ? 'var(--boy)' : i === 4 ? 'var(--ray)' : 'var(--girl)',
    };
  });
  return (
    <svg viewBox="0 6 120 108" width={size} height={size * 0.9} role="img" aria-label={label}>
      <defs>
        <radialGradient id="markSun" cx="50%" cy="100%" r="100%">
          <stop offset="0" stopColor="#ffe08a" />
          <stop offset="1" stopColor="#ffb400" />
        </radialGradient>
      </defs>
      {rays.map((r, i) => (
        <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} style={{ stroke: r.c }} strokeWidth="6" strokeLinecap="round" />
      ))}
      <path d="M30 70A30 30 0 0 1 90 70Z" fill="url(#markSun)" />
      <path d="M22 70H98" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" />
      <path d="M60 70V100" stroke="var(--mint)" strokeWidth="4" strokeLinecap="round" />
      <path d="M60 94C50 94 43 88 41 79C51 79 58 85 60 94Z" fill="var(--mint)" />
      <path d="M60 94C70 94 77 88 79 79C69 79 62 85 60 94Z" fill="var(--mint)" />
      <path d="M60 70C47 70 42 56 45 46C53 49 59 58 60 70Z" fill="var(--girl)" />
      <path d="M60 70C73 70 78 56 75 46C67 49 61 58 60 70Z" fill="var(--girl)" />
      <path d="M60 70C51 66 49 52 60 42C71 52 69 66 60 70Z" fill="var(--girl-deep)" />
    </svg>
  );
}

export function Word({ size = '2rem' }) {
  return (
    <span className="word" style={{ fontSize: size }}>
      <span className="nur">Нұр</span>
      <span className="aru">Ару</span>
    </span>
  );
}

// Қазақ оюы (қошқар мүйіз) — бөлгіш пен безендіру үшін
export function Koshkar({ color = 'currentColor', size = 36 }) {
  return (
    <svg viewBox="0 0 48 32" width={size} height={size * 0.667} aria-hidden="true">
      <path d="M24 30V14" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M24 16C24 6 12 2 8 9C5 15 12 18 14 13C15 10 12 8 10 10" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M24 16C24 6 36 2 40 9C43 15 36 18 34 13C33 10 36 8 38 10" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
}
