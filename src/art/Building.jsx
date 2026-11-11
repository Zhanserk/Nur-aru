// Нұр Ару: балабақша ғимараты — нақты суреттерден: ақ сайдинг, жасыл шатыр, қызыл веранда, кемпірқосақ қоршау, паровоз-сырғанақ.
// Жеңіл болу үшін қоршау мен сайдинг — үлгі (pattern), яғни жүздеген элемент орнына біреу.
const PICKETS = ['#e5383b', '#ffb400', '#4cc9a4', '#3e9bff', '#ff6a9b', '#8e6bd8'];

export function BuildingDefs() {
  return (
    <>
      <pattern id="bSiding" width="8" height="8" patternUnits="userSpaceOnUse"><rect width="8" height="8" fill="#f7f7f5" /><rect y="6.4" width="8" height="1.6" fill="#dcdfe4" /></pattern>
      <pattern id="bRoof" width="14" height="10" patternUnits="userSpaceOnUse"><rect width="14" height="10" fill="#34977c" /><rect width="2.6" height="10" fill="#267d66" /></pattern>
      <pattern id="bPickets" width="66" height="58" patternUnits="userSpaceOnUse" patternTransform="translate(-50 -54)">
        {PICKETS.map((c, i) => <path key={c} d={`M${i * 11} 58V8L${i * 11 + 5.5} 0L${i * 11 + 11} 8V58Z`} fill={c} />)}
      </pattern>
      <linearGradient id="bGlass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#d9efff" /><stop offset="1" stopColor="#9bc9f0" /></linearGradient>
      <linearGradient id="bRoofShade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff" stopOpacity=".2" /><stop offset="1" stopColor="#0d3b30" stopOpacity=".25" /></linearGradient>
    </>
  );
}

function Window({ x }) {
  return (
    <g transform={`translate(${x} -118)`}>
      <rect width="78" height="60" rx="3" fill="#fff" stroke="#c4ccd7" strokeWidth="2" />
      <rect x="5" y="5" width="68" height="50" rx="2" fill="url(#bGlass)" />
      <path d="M39 5V55M5 30H73" stroke="#fff" strokeWidth="3" />
      <rect x="-4" y="60" width="86" height="5" rx="2" fill="#e5e8ee" />
    </g>
  );
}

// Веранда қабырғасындағы мультфильм кейіпкерлері
function Characters() {
  return (
    <g>
      <g transform="translate(351 -30)">
        <path d="M-12 0C-14-14-8-24 0-24C8-24 14-14 12 0Z" fill="#3e7bd8" />
        <circle cy="-30" r="7" fill="#f6cfae" />
        <path d="M-8-31C-8-40 8-40 8-31C4-35-4-35-8-31Z" fill="#ffb400" />
      </g>
      <g transform="translate(406 -30)">
        <path d="M-10 0L-6-24H6L10 0Z" fill="#e8444a" />
        <circle cy="-30" r="6.5" fill="#f6cfae" />
        <path d="M-7-31C-7-39 7-39 7-31C4-34-4-34-7-31Z" fill="#3b2a25" />
      </g>
      <g transform="translate(461 -30)">
        <ellipse cx="0" cy="-10" rx="13" ry="8" fill="#b9793f" />
        <circle cx="-12" cy="-17" r="7" fill="#b9793f" />
        <path d="M-17-24L-13-18L-9-23Z" fill="#7a4a22" />
      </g>
      <g transform="translate(516 -30)">
        <ellipse cx="0" cy="-10" rx="10" ry="9" fill="#6f8fb8" />
        <circle cy="-23" r="8" fill="#6f8fb8" />
        <path d="M-8-27L-6-35L-1-29ZM8-27L6-35L1-29Z" fill="#6f8fb8" />
      </g>
    </g>
  );
}

function Veranda() {
  return (
    <g>
      <rect x="316" y="-140" width="230" height="112" fill="#b3202a" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(${324 + i * 55} -132)`}>
          <rect width="49" height="60" fill="url(#bGlass)" />
          <path d="M24.5 0V60M0 30H49" stroke="#fff" strokeWidth="2.4" />
        </g>
      ))}
      <rect x="324" y="-68" width="214" height="38" fill="#8e1722" />
      <Characters />
      <path d="M298 -140L568 -140L592 -172L274 -172Z" fill="#3b4655" />
      <rect x="318" y="-168" width="226" height="26" rx="3" fill="#ffd23f" stroke="#b3202a" strokeWidth="2" />
      <text x="431" y="-158" textAnchor="middle" fontSize="6.6" fontWeight="800" fill="#b3202a" fontFamily="Arial, sans-serif">ҚОШ КЕЛДІҢІЗДЕР!</text>
      <text x="431" y="-148" textAnchor="middle" fontSize="8.4" fontWeight="800" fill="#b3202a" fontFamily="Arial, sans-serif" textLength="212" lengthAdjust="spacingAndGlyphs">ЖШС «НҰР АРУ» БӨБЕКЖАЙ БАЛАБАҚШАСЫ</text>
    </g>
  );
}

export function School({ x, y, s = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <ellipse cx="280" cy="8" rx="340" ry="17" fill="#17502f" opacity=".22" />
      <g transform="translate(646 0)">
        <path d="M-5 0L-3-70H3L5 0Z" fill="#7a5a3c" />
        <circle cx="0" cy="-118" r="46" fill="#2f9d62" /><circle cx="-34" cy="-98" r="32" fill="#3aa86c" /><circle cx="34" cy="-100" r="30" fill="#2b9159" />
      </g>
      <rect x="0" y="-34" width="560" height="34" fill="#5d6a7a" />
      <rect x="0" y="-138" width="560" height="106" fill="url(#bSiding)" />
      <rect x="14" y="-136" width="5" height="102" rx="2" fill="#8a93a1" />
      <Window x={40} />
      <Window x={134} />
      <Window x={228} />
      <text x="553" y="-82" textAnchor="middle" fontSize="13" fontWeight="800" fill="#98a2b1" fontFamily="Arial, sans-serif">43</text>
      <Veranda />
      <path d="M-30-134L30-190H530L590-134Z" fill="url(#bRoof)" />
      <path d="M-30-134L30-190H530L590-134Z" fill="url(#bRoofShade)" />
      <rect x="30" y="-195" width="500" height="6" rx="3" fill="#1b5f4e" />
      <rect x="-30" y="-138" width="620" height="6" rx="2" fill="#174f40" />
      {[60, 160, 262].map((bx) => (
        <g key={bx}>
          <circle cx={bx} cy="-10" r="22" fill="#3fa35f" /><circle cx={bx - 12} cy="-4" r="14" fill="#47b672" />
          <circle cx={bx + 4} cy="-16" r="3.4" fill="#ff6a9b" />
        </g>
      ))}
      <rect x="-50" y="-40" width="670" height="4" fill="#2f3a4a" />
      <rect x="-50" y="-14" width="670" height="4" fill="#2f3a4a" />
      <rect x="-50" y="-54" width="670" height="58" fill="url(#bPickets)" />
      <g transform="translate(-74 0)">
        <path d="M-6 0L-4-84H4L6 0Z" fill="#7a5a3c" />
        <circle cx="0" cy="-136" r="52" fill="#2f9d62" /><circle cx="-38" cy="-112" r="34" fill="#3aa86c" /><circle cx="38" cy="-114" r="34" fill="#2b9159" />
      </g>
    </g>
  );
}

// Паровоз-сырғанақ
export function Train({ x, y, s = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <ellipse cx="80" cy="6" rx="110" ry="12" fill="#17502f" opacity=".22" />
      <path d="M0 0V-70M70 0V-70" stroke="#d98f00" strokeWidth="6" strokeLinecap="round" />
      <rect x="-6" y="-98" width="68" height="36" rx="9" fill="#3fb67b" />
      <rect x="6" y="-116" width="13" height="20" rx="3" fill="#ffb400" />
      <rect x="52" y="-116" width="38" height="54" rx="7" fill="#e8564f" />
      <rect x="58" y="-108" width="26" height="20" rx="4" fill="#cfe9ff" />
      {[8, 32, 68].map((wx) => <circle key={wx} cx={wx} cy="-62" r="10" fill="#ffb400" stroke="#c98400" strokeWidth="2.4" />)}
      <path d="M90-74C128-60 158-32 184-2L204-10C178-46 138-78 94-98Z" fill="#8e6bd8" />
    </g>
  );
}

// Ғимарат пен паровоз-сырғанақ — бір бөлек сурет (өлшемі CSS-те беріледі)
export function SchoolScene({ className = '' }) {
  return (
    <svg className={`art ${className}`} viewBox="-330 -215 1030 235" aria-hidden="true">
      <defs><BuildingDefs /></defs>
      <Train x={-250} y={0} s={0.79} />
      <School x={0} y={0} />
    </svg>
  );
}
