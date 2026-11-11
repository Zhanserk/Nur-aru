// Нұр Ару: таң атып келе жатқан дала. Әр бөлік — бөлек шағын SVG (Замира сияқты): статикалық бөліктер бір рет салынады,
// ал қозғалатындары (бұлт, лала, қамыс) тек transform/opacity арқылы жылжиды — сондықтан скролл жеңіл.
// Өлшемдер мен орындар CSS-те беріледі (--u бірлігімен, экран биіктігіне байланысты).

const SUN_X = 720;

// ---------------------------------------------------------------- таулар (қарлы шыңдар, күн жарығы бір беткейде)
function Peak({ x, y, w, base, fill }) {
  const h = base - y;
  const l = x - w / 2;
  const r = x + w / 2;
  const sg = x < SUN_X ? 1 : -1; // күнге қараған беткей
  const body = `M${l} ${base}L${x - w * 0.2} ${y + h * 0.58}L${x - w * 0.07} ${y + h * 0.3}L${x} ${y}L${x + w * 0.09} ${y + h * 0.28}L${x + w * 0.2} ${y + h * 0.56}L${r} ${base}Z`;
  const lit = `M${x} ${y}L${x + sg * w * 0.09} ${y + h * 0.28}L${x + sg * w * 0.2} ${y + h * 0.56}L${x + sg * w * 0.5} ${base}L${x + sg * w * 0.08} ${base}L${x + sg * w * 0.03} ${y + h * 0.5}Z`;
  const snow = `M${x} ${y}L${x + w * 0.075} ${y + h * 0.24}L${x + w * 0.04} ${y + h * 0.2}L${x + w * 0.015} ${y + h * 0.29}L${x - w * 0.012} ${y + h * 0.2}L${x - w * 0.04} ${y + h * 0.3}L${x - w * 0.062} ${y + h * 0.23}Z`;
  return (
    <g>
      <path d={body} fill={fill} />
      <path d={lit} fill="#ffb067" opacity=".5" />
      <path d={snow} fill="#ffe9f1" />
    </g>
  );
}

const BACK = [[60, 196, 300], [300, 158, 380], [520, 204, 280], [900, 172, 280], [1110, 82, 400], [1350, 142, 340]];
const FRONT = [[-20, 232, 260], [200, 214, 300], [455, 238, 260], [965, 218, 260], [1205, 172, 320], [1445, 192, 280]];

export function Mountains({ className = '' }) {
  return (
    <svg className={`art ${className}`} viewBox="0 0 1440 290" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="mtBack" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#a876d0" /><stop offset="1" stopColor="#e2879f" /></linearGradient>
        <linearGradient id="mtFront" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#5f3c93" /><stop offset="1" stopColor="#a04f93" /></linearGradient>
        <linearGradient id="mtHaze" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffb98a" stopOpacity="0" /><stop offset="1" stopColor="#ffb98a" stopOpacity=".75" /></linearGradient>
      </defs>
      {BACK.map(([x, y, w], i) => <Peak key={i} x={x} y={y} w={w} base={264} fill="url(#mtBack)" />)}
      <rect x="0" y="170" width="1440" height="100" fill="url(#mtHaze)" />
      {FRONT.map(([x, y, w], i) => <Peak key={i} x={x} y={y} w={w} base={272} fill="url(#mtFront)" />)}
    </svg>
  );
}

// ---------------------------------------------------------------- көл және күн жолағы
const RIPPLES = [[80, 60, 160], [420, 40, 120], [1010, 52, 150], [1250, 88, 110], [300, 118, 190], [860, 128, 140], [610, 152, 120], [1120, 150, 160]];

export function Lake({ className = '' }) {
  return (
    <svg className={`art ${className}`} viewBox="0 0 1440 190" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="lakeG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffd98a" /><stop offset="0.3" stopColor="#ff9f62" /><stop offset="0.65" stopColor="#d4558a" /><stop offset="1" stopColor="#7a3f9d" />
        </linearGradient>
      </defs>
      <rect width="1440" height="190" fill="url(#lakeG)" />
      <g stroke="#fff" strokeWidth="2.2" strokeLinecap="round" opacity=".3">
        {RIPPLES.map(([x, y, l], i) => <path key={i} d={`M${x} ${y}h${l}`} />)}
      </g>
    </svg>
  );
}

const STRIPES = [[0, 6, 220, 8], [16, 24, 188, 7], [34, 44, 152, 7], [52, 66, 116, 6], [68, 88, 84, 6], [82, 110, 56, 5], [94, 130, 32, 5]];

export function SunPath({ className = '' }) {
  return (
    <svg className={`art ${className}`} viewBox="0 0 220 150" aria-hidden="true">
      {STRIPES.map(([x, y, w, h], i) => <rect key={i} x={x} y={y} width={w} height={h} rx={h / 2} fill="#fff3b8" opacity={0.8 - i * 0.07} />)}
    </svg>
  );
}

// ---------------------------------------------------------------- жер: артқы және алдыңғы төбе, киіз үй
const TOP = 'M0 120C200 82 380 92 560 104C760 116 960 104 1160 90C1300 80 1380 86 1440 96';
const FRONT_HILL = 'M0 196C280 170 560 206 860 192C1160 178 1320 202 1440 186V260H0Z';
const TUFTS = [60, 190, 340, 480, 650, 830, 1000, 1150, 1290, 1400];

export function Land({ className = '' }) {
  return (
    <svg className={`art ${className}`} viewBox="0 0 1440 260" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="landA" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#8fd77c" /><stop offset="1" stopColor="#4fb06a" /></linearGradient>
        <pattern id="speckle" width="72" height="46" patternUnits="userSpaceOnUse">
          <circle cx="8" cy="10" r="2.6" fill="#fff" /><circle cx="40" cy="26" r="2.4" fill="#ffe27a" /><circle cx="62" cy="8" r="2.4" fill="#ffb6cf" />
          <circle cx="24" cy="38" r="2.2" fill="#fff" /><circle cx="54" cy="40" r="2.2" fill="#c9b6ff" />
        </pattern>
        <clipPath id="landClip"><path d={`${TOP}V260H0Z`} /></clipPath>
      </defs>
      <path d={`${TOP}V260H0Z`} fill="url(#landA)" />
      <rect y="86" width="1440" height="124" fill="url(#speckle)" clipPath="url(#landClip)" opacity=".9" />
      <path d={TOP} fill="none" stroke="#e4f7a6" strokeWidth="3" opacity=".7" />
    </svg>
  );
}

export function FrontHill({ className = '' }) {
  return (
    <svg className={`art ${className}`} viewBox="0 0 1440 260" preserveAspectRatio="none" aria-hidden="true">
      <defs><linearGradient id="landB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#3fa35f" /><stop offset="1" stopColor="#257a47" /></linearGradient></defs>
      <path d={FRONT_HILL} fill="url(#landB)" />
      {TUFTS.map((x, i) => (
        <path key={i} transform={`translate(${x} ${208 + (i % 3) * 4})`} d="M0 0Q-3-14-9-22Q0-12 3 0ZM4 0Q6-18 12-28Q8-12 10 0Z" fill={i % 2 ? '#2f9d62' : '#47b672'} />
      ))}
    </svg>
  );
}

export function YurtArt({ className = '' }) {
  return (
    <svg className={`art ${className}`} viewBox="-48 -66 96 72" aria-hidden="true">
      <ellipse cx="0" cy="3" rx="44" ry="5" fill="#17502f" opacity=".3" />
      <path d="M-30-18Q0-62 30-18Z" fill="#fff6e8" />
      <path d="M-28-18H28V0H-28Z" fill="#fffdf8" />
      <path d="M-28-13H28V-7H-28Z" fill="#3e9bff" />
      <path d="M-28-7H28V-4H-28Z" fill="#ffb400" />
      <path d="M-6 0V-13Q0-18 6-13V0Z" fill="#e8564f" />
      <circle cx="0" cy="-57" r="3.2" fill="#ffb400" />
    </svg>
  );
}

// ---------------------------------------------------------------- лалалар мен қамыс (бүкіл топ бір рет тербеледі)
const COL = [['#ff8fb3', '#e8447c'], ['#ff9a8a', '#e8444a'], ['#ffe27a', '#ffb400'], ['#ffffff', '#ffc2d6']];

function Tulip({ x, h, c }) {
  const k = h / 100;
  const [side, mid] = COL[c];
  return (
    <g transform={`translate(${x} ${188 - h})`}>
      <path d={`M0 0V${h}`} stroke="#2f8f52" strokeWidth={Math.max(3, h / 16)} strokeLinecap="round" fill="none" />
      <path d={`M0 ${h}C${-h * 0.04} ${h * 0.78} ${-h * 0.2} ${h * 0.66} ${-h * 0.27} ${h * 0.56}C${-h * 0.08} ${h * 0.66} ${-h * 0.02} ${h * 0.82} 0 ${h}Z`} fill="#46b374" />
      <path d={`M0 ${h}C${h * 0.04} ${h * 0.78} ${h * 0.2} ${h * 0.66} ${h * 0.27} ${h * 0.56}C${h * 0.08} ${h * 0.66} ${h * 0.02} ${h * 0.82} 0 ${h}Z`} fill="#2f9d62" />
      <g transform={`scale(${k})`}>
        <path d="M0 0C-17 0-23-18-19-31C-9-27-1-15 0 0Z" fill={side} />
        <path d="M0 0C17 0 23-18 19-31C9-27 1-15 0 0Z" fill={side} />
        <path d="M0 2C-12-4-14-23 0-37C14-23 12-4 0 2Z" fill={mid} />
      </g>
    </g>
  );
}

export function TulipCluster({ items, className = '' }) {
  return (
    <svg className={`art sway-svg ${className}`} viewBox="0 0 330 190" aria-hidden="true">
      {items.map(([x, h, c], i) => <Tulip key={i} x={x} h={h} c={c} />)}
    </svg>
  );
}

export function Reeds({ className = '' }) {
  return (
    <svg className={`art sway-svg ${className}`} viewBox="0 0 120 130" aria-hidden="true">
      {[[20, 18, -4], [40, 6, 2], [62, 14, -2], [84, 4, 3], [102, 20, 5]].map(([x, top, lean], i) => (
        <g key={i}>
          <path d={`M${x} 130Q${x + lean} 70 ${x + lean * 1.6} ${top}`} stroke="#2f8f52" strokeWidth="3" fill="none" strokeLinecap="round" />
          <ellipse cx={x + lean * 1.6} cy={top + 8} rx="4" ry="12" fill="#7a4a2a" />
        </g>
      ))}
    </svg>
  );
}

// ---------------------------------------------------------------- аспан: бұлттар мен құстар
export function Cloud({ id, className = '' }) {
  return (
    <svg className={`cloud ${className}`} viewBox="0 0 320 90" aria-hidden="true">
      <defs><linearGradient id={id} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffe3cf" /><stop offset="0.55" stopColor="#ffb1a4" /><stop offset="1" stopColor="#f2789a" /></linearGradient></defs>
      <path d="M20 78C-6 78-8 50 18 46C14 22 44 8 66 24C80-2 126-4 140 26C158 10 198 14 204 42C226 38 244 52 238 66C262 62 292 70 300 78Z" fill={`url(#${id})`} />
      <path d="M44 34C56 24 74 24 86 32" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" opacity=".7" />
    </svg>
  );
}

export function Bird({ className = '' }) {
  return (
    <svg className={`bird ${className}`} viewBox="0 0 40 20" aria-hidden="true">
      <path d="M2 14Q10 0 20 12Q30 0 38 14" stroke="#2a2570" strokeWidth="2.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}
