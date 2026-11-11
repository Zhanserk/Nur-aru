// Нұр Ару: таңға қарап тұрған кішкентай балалар. Артынан көрінеді — бет-әлпеті жоқ, шашы мен киімі көрінеді.
const INK = '#26294f';

const HAIR = {
  pigtails: (hair, ribbon) => (
    <g>
      <path d="M-13-74Q-22-70-21-56Q-18-64-12-68Z" fill={hair} />
      <path d="M13-74Q22-70 21-56Q18-64 12-68Z" fill={hair} />
      <circle cx="-14.5" cy="-72" r="3.5" fill={ribbon} />
      <circle cx="14.5" cy="-72" r="3.5" fill={ribbon} />
    </g>
  ),
  bun: (hair, ribbon) => (
    <g>
      <circle cy="-86" r="7.6" fill={hair} />
      <circle cx="7" cy="-82" r="3" fill={ribbon} />
    </g>
  ),
  cap: (hair, ribbon, cap) => (
    <g>
      <path d="M-13.6-75C-13-94 13-94 13.6-75C7-79-7-79-13.6-75Z" fill={cap} />
      <path d="M-13.9-75C-7-79 7-79 13.9-75L14-79.4C7-83.4-7-83.4-14-79.4Z" fill="#ffb400" />
      {[-6, 0, 6].map((dx) => <path key={dx} d={`M${dx} -87l2.4 2.4l-2.4 2.4l-2.4-2.4Z`} fill="#fff" opacity=".9" />)}
    </g>
  ),
};

// arms: [сол қол, оң қол] бұрышы (градус). Оң мән — солға қарай көтеріледі.
function Kid({ x, y, s = 1, skin, hair, top, bottom = INK, dress = false, style, ribbon = '#ffb400', cap = '#ff6a9b', arms = [4, -4], delay = 0 }) {
  const [la, ra] = arms;
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <ellipse cx="0" cy="2" rx="21" ry="4.4" fill="#17502f" opacity=".26" />
      <g className="nod" style={{ '--d': `${delay}s` }}>
        <rect x="-9.4" y="-26" width="7.4" height="22" rx="3.7" fill={skin} />
        <rect x="2" y="-26" width="7.4" height="22" rx="3.7" fill={skin} />
        <ellipse cx="-6" cy="-2.4" rx="5.6" ry="3.2" fill={INK} />
        <ellipse cx="6" cy="-2.4" rx="5.6" ry="3.2" fill={INK} />
        {dress ? (
          <g>
            <path d="M-12-58H12L19-22Q0-16.5-19-22Z" fill={top} />
            <path d="M-18.4-26Q0-20 18.4-26L19-22Q0-16.5-19-22Z" fill="#fff" opacity=".85" />
            <path d="M0-44L-6-47V-41ZM0-44L6-47V-41Z" fill={ribbon} />
          </g>
        ) : (
          <g>
            <path d="M-12-59H12L11.5-27H-11.5Z" fill={top} />
            <path d="M-11.8-46H11.8" stroke="#fff" strokeWidth="3" opacity=".35" />
            <path d="M-11.6-30H11.6L12.4-17H-12.4Z" fill={bottom} />
          </g>
        )}
        <g transform={`rotate(${la} -13 -55)`}>
          <rect x="-16.5" y="-55" width="7" height="25" rx="3.5" fill={skin} />
          <rect x="-17" y="-56" width="8" height="11" rx="4" fill={top} />
          <circle cx="-13" cy="-30" r="3.8" fill={skin} />
        </g>
        <g transform={`rotate(${ra} 13 -55)`}>
          <rect x="9.5" y="-55" width="7" height="25" rx="3.5" fill={skin} />
          <rect x="9" y="-56" width="8" height="11" rx="4" fill={top} />
          <circle cx="13" cy="-30" r="3.8" fill={skin} />
        </g>
        <rect x="-3.6" y="-63" width="7.2" height="7" rx="2.4" fill={skin} />
        <circle cx="-12.6" cy="-70" r="3" fill={skin} />
        <circle cx="12.6" cy="-70" r="3" fill={skin} />
        <circle cy="-71" r="13.6" fill={hair} />
        <path d="M-8-80Q0-84 8-80" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none" opacity=".22" />
        {style && HAIR[style](hair, ribbon, cap)}
      </g>
    </g>
  );
}

// Үш бала мен батпырауық: күнге қарап, батпырауықты ұстап тұр
export function Watchers({ className = "" }) {
  return (
    <svg className={`art kids ${className}`} viewBox="0 0 300 200" aria-hidden="true">
      <path d="M150 118Q158 40 176-22" stroke="#fff" strokeWidth="1.4" fill="none" opacity=".9" />
      <g transform="translate(176 -52) rotate(10)">
        <g className="kite">
          <path d="M0-30L20 0L0 32L-20 0Z" fill="#ffb400" />
          <path d="M0-30L20 0L0 6Z" fill="#ff6a9b" />
          <path d="M0-30L-20 0L0 6Z" fill="#3e9bff" />
          <path d="M0 6L20 0L0 32Z" fill="#ffd25a" />
          <path d="M0-30V32M-20 0H20" stroke="#fff" strokeWidth="1.5" opacity=".85" />
          <path d="M0 32Q-9 46 1 56Q11 68 3 82" stroke="#ff6a9b" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        </g>
      </g>
      <Kid x={88} y={192} skin="#e9b891" hair="#26212b" top="#3e9bff" style="cap" cap="#ff6a9b" arms={[4, -150]} delay={0.2} />
      <Kid x={150} y={198} s={0.94} dress skin="#f6cfae" hair="#26212b" top="#ff6a9b" style="pigtails" ribbon="#ffb400" arms={[165, -165]} delay={0.6} />
      <Kid x={214} y={194} s={0.86} dress skin="#efb990" hair="#3b2a25" top="#ffb400" style="bun" ribbon="#4cc9a4" arms={[14, -34]} delay={1} />
    </svg>
  );
}
