// Топтар мен күн тәртібінің иллюстрациялары
export function GroupIcon({ kind, size = 96 }) {
  const common = { viewBox: '0 0 100 100', width: size, height: size, 'aria-hidden': true };
  switch (kind) {
    case 'chick':
      return (
        <svg {...common}>
          <ellipse cx="50" cy="88" rx="26" ry="5" fill="#000" opacity=".12" />
          <circle cx="50" cy="60" r="28" fill="#ffd25a" />
          <circle cx="50" cy="34" r="20" fill="#ffe27a" />
          <path d="M44 36L56 36L50 44Z" fill="#ff8a3d" />
          <circle cx="42" cy="30" r="3.2" fill="#26294f" /><circle cx="58" cy="30" r="3.2" fill="#26294f" />
          <circle cx="43" cy="29" r="1" fill="#fff" /><circle cx="59" cy="29" r="1" fill="#fff" />
          <ellipse cx="36" cy="38" rx="4.5" ry="3" fill="#ff8fa3" opacity=".6" /><ellipse cx="64" cy="38" rx="4.5" ry="3" fill="#ff8fa3" opacity=".6" />
          <path d="M70 58C84 56 88 70 76 76C70 72 68 66 70 58Z" fill="#ffb400" />
          <path d="M30 58C16 56 12 70 24 76C30 72 32 66 30 58Z" fill="#ffb400" />
          <path d="M44 86V92M56 86V92M40 92H48M52 92H60" stroke="#ff8a3d" strokeWidth="3" strokeLinecap="round" />
          <path d="M46 14C46 8 50 6 52 10C54 6 58 8 56 14" stroke="#ffb400" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      );
    case 'blossom':
      return (
        <svg {...common}>
          <path d="M50 52V92" stroke="#2f9d62" strokeWidth="5" strokeLinecap="round" />
          <path d="M50 80C38 80 30 72 28 62C40 62 48 68 50 80Z" fill="#46b374" />
          <path d="M50 74C62 74 70 66 72 56C60 56 52 62 50 74Z" fill="#2f9d62" />
          {Array.from({ length: 6 }, (_, i) => <ellipse key={i} cx="50" cy="26" rx="10" ry="19" fill={i % 2 ? '#ff8fb3' : '#ff6a9b'} transform={`rotate(${i * 60} 50 42)`} />)}
          <circle cx="50" cy="42" r="12" fill="#ffd25a" />
          <circle cx="46" cy="40" r="1.8" fill="#26294f" /><circle cx="54" cy="40" r="1.8" fill="#26294f" />
          <path d="M46 46Q50 50 54 46" stroke="#c0654a" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        </svg>
      );
    case 'camel':
      return (
        <svg {...common}>
          <ellipse cx="50" cy="90" rx="30" ry="5" fill="#000" opacity=".12" />
          <rect x="24" y="52" width="9" height="34" rx="4.5" fill="#d9a066" /><rect x="38" y="54" width="9" height="32" rx="4.5" fill="#c58b52" />
          <rect x="56" y="54" width="9" height="32" rx="4.5" fill="#d9a066" /><rect x="68" y="52" width="9" height="34" rx="4.5" fill="#c58b52" />
          <ellipse cx="50" cy="52" rx="29" ry="17" fill="#e8b57a" />
          <ellipse cx="38" cy="36" rx="9" ry="11" fill="#e8b57a" /><ellipse cx="60" cy="37" rx="9" ry="10" fill="#e8b57a" />
          <path d="M72 46C84 40 88 26 84 14" stroke="#e8b57a" strokeWidth="11" strokeLinecap="round" fill="none" />
          <ellipse cx="86" cy="12" rx="12" ry="8" fill="#f0c58f" />
          <circle cx="84" cy="9" r="2.3" fill="#26294f" /><circle cx="84.8" cy="8.2" r=".8" fill="#fff" />
          <path d="M80 4L78-2M90 4L92-2" stroke="#c58b52" strokeWidth="3" strokeLinecap="round" />
          <path d="M82 18Q87 20 91 17" stroke="#b36b45" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <path d="M22 56C14 56 12 66 14 72" stroke="#c58b52" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M34 56Q50 66 66 56" stroke="#ff6a9b" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      );
    case 'heart':
      return (
        <svg {...common}>
          <ellipse cx="50" cy="90" rx="24" ry="4.5" fill="#000" opacity=".12" />
          <path d="M50 86C12 60 10 28 32 22C42 20 48 26 50 32C52 26 58 20 68 22C90 28 88 60 50 86Z" fill="#ff6a9b" />
          <path d="M26 32C28 26 34 24 38 28" stroke="#fff" strokeWidth="4" strokeLinecap="round" fill="none" opacity=".55" />
          <circle cx="40" cy="46" r="3.3" fill="#26294f" /><circle cx="60" cy="46" r="3.3" fill="#26294f" />
          <circle cx="41" cy="45" r="1.1" fill="#fff" /><circle cx="61" cy="45" r="1.1" fill="#fff" />
          <path d="M42 56Q50 64 58 56Z" fill="#8e2f3f" />
          <ellipse cx="32" cy="54" rx="4.6" ry="3" fill="#ffd1dd" opacity=".8" /><ellipse cx="68" cy="54" rx="4.6" ry="3" fill="#ffd1dd" opacity=".8" />
          <path d="M80 18l3 7l7 3l-7 3l-3 7l-3-7l-7-3l7-3Z" fill="#ffe27a" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          {Array.from({ length: 12 }, (_, i) => <path key={i} d="M50 6L55 22H45Z" fill="#ffb400" transform={`rotate(${i * 30} 50 50)`} />)}
          <circle cx="50" cy="50" r="27" fill="#ffd25a" />
          <circle cx="50" cy="50" r="27" fill="url(#iconSun)" />
          <defs><radialGradient id="iconSun" cx="40%" cy="35%" r="70%"><stop offset="0" stopColor="#fffbe0" stopOpacity=".9" /><stop offset="1" stopColor="#ffab1a" stopOpacity="0" /></radialGradient></defs>
          <circle cx="41" cy="47" r="3.2" fill="#26294f" /><circle cx="59" cy="47" r="3.2" fill="#26294f" />
          <circle cx="42" cy="46" r="1" fill="#fff" /><circle cx="60" cy="46" r="1" fill="#fff" />
          <path d="M42 56Q50 64 58 56Z" fill="#8e2f3f" />
          <ellipse cx="35" cy="55" rx="4.6" ry="3" fill="#ff8fa3" opacity=".55" /><ellipse cx="65" cy="55" rx="4.6" ry="3" fill="#ff8fa3" opacity=".55" />
        </svg>
      );
  }
}

const A = { fill: 'none', stroke: 'currentColor', strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round' };
export function DayIcon({ kind, size = 28 }) {
  const p = { viewBox: '0 0 24 24', width: size, height: size, 'aria-hidden': true, ...A };
  switch (kind) {
    case 'sun': return (<svg {...p}><circle cx="12" cy="12" r="4.2" /><path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5.3 5.3l1.7 1.7M17 17l1.7 1.7M5.3 18.7L7 17M17 7l1.7-1.7" /></svg>);
    case 'cup': return (<svg {...p}><path d="M5 9h11v5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5Z" /><path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16M8 3.5c0 1.5 1.5 1.5 1.5 3M12 3.5c0 1.5 1.5 1.5 1.5 3" /></svg>);
    case 'book': return (<svg {...p}><path d="M4 5.5C7 4 9.5 4.4 12 6c2.5-1.6 5-2 8-.5V19c-3-1.5-5.5-1.1-8 .5C9.5 17.9 7 17.5 4 19Z" /><path d="M12 6v13.5" /></svg>);
    case 'leaf': return (<svg {...p}><path d="M5 19C5 10 10 5 20 4C19 14 14 19 5 19Z" /><path d="M5 19C9 14 12 11 16 9" /></svg>);
    case 'moon': return (<svg {...p}><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" /></svg>);
    default: return (<svg {...p}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5l3.4 2.5-1.3 4h-4.2L8.6 10Z" /><path d="M12 7.5V3.8M15.4 10l3.4-1M14.1 14l2.2 3M9.9 14l-2.2 3M8.6 10L5.2 9" /></svg>);
  }
}
