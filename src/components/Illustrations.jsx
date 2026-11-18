// Hand-built SVG illustrations so the page renders without external image assets.
// Swap any of these for real photography/artwork when available.

export function HeroArt() {
  return (
    <svg
      className="hero-art"
      viewBox="0 0 560 460"
      role="img"
      aria-label="An open book with a glowing light bulb, a globe and a burst of colourful ideas rising from its pages"
    >
      <defs>
        <filter id="soft" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
        <radialGradient id="bulbGlow" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#fffbe0" />
          <stop offset="45%" stopColor="#ffd84a" />
          <stop offset="100%" stopColor="#f4a118" />
        </radialGradient>
        <radialGradient id="halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff3b0" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#fff3b0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ocean" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5ec4f0" />
          <stop offset="100%" stopColor="#1769b8" />
        </linearGradient>
        <linearGradient id="page" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fffaf0" />
          <stop offset="100%" stopColor="#ecdcc0" />
        </linearGradient>
        <linearGradient id="cover" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7a4a22" />
          <stop offset="50%" stopColor="#a8703a" />
          <stop offset="100%" stopColor="#7a4a22" />
        </linearGradient>
        <clipPath id="globeClip">
          <circle cx="165" cy="190" r="72" />
        </clipPath>
      </defs>

      {/* colour burst */}
      <g filter="url(#soft)" opacity="0.92">
        <circle cx="210" cy="150" r="70" fill="#2fa9e0" />
        <circle cx="330" cy="130" r="72" fill="#ff8a3d" />
        <circle cx="390" cy="210" r="62" fill="#e84a7f" />
        <circle cx="285" cy="80" r="52" fill="#ffd23f" />
        <circle cx="160" cy="250" r="50" fill="#7bd16b" />
        <circle cx="400" cy="120" r="40" fill="#9b5de5" />
        <circle cx="250" cy="250" r="60" fill="#ff6f59" />
        <circle cx="340" cy="270" r="50" fill="#22c1a6" />
        <circle cx="430" cy="270" r="36" fill="#cfd8e6" />
      </g>
      <g opacity="0.9">
        <circle cx="420" cy="170" r="30" fill="#ff9f1c" />
        <circle cx="370" cy="80" r="18" fill="#e84a7f" />
        <circle cx="230" cy="70" r="14" fill="#2fa9e0" />
        <circle cx="455" cy="225" r="12" fill="#ffd23f" />
        <circle cx="120" cy="140" r="10" fill="#ff6f59" />
      </g>

      {/* landmark silhouettes */}
      <g fill="#7a5a3a" opacity="0.75">
        <path d="M352 120l6-60 6 60z" />
        <rect x="355" y="50" width="6" height="12" />
        <path d="M395 140h30v-40l-15-16-15 16z" />
        <path d="M402 100h16v-8h-16z" fill="#5e432a" />
        <path d="M440 170l10-50 10 50z" />
        <rect x="330" y="95" width="10" height="45" />
        <path d="M327 95h16l-8-12z" />
      </g>

      {/* tree */}
      <g>
        <rect x="268" y="40" width="6" height="26" fill="#6b4423" />
        <circle cx="271" cy="34" r="20" fill="#3f8f3a" />
        <circle cx="258" cy="40" r="12" fill="#4ea845" />
        <circle cx="285" cy="40" r="13" fill="#367f32" />
      </g>

      {/* globe */}
      <g>
        <circle cx="165" cy="190" r="72" fill="url(#ocean)" />
        <g clipPath="url(#globeClip)" fill="#5fb84f">
          <path d="M110 140c18-8 34 0 40 14s-6 24-18 26-18 18-30 14-14-24-8-36 8-14 16-18z" />
          <path d="M170 150c14-6 32 2 40 16s4 26-10 30-14 22-28 18-10-30-10-38 2-22 8-26z" />
          <path d="M120 220c14 0 26 10 24 24s-14 18-24 14-14-18-10-28z" />
          <path d="M200 225c10-2 22 6 20 16s-12 14-20 10-8-24 0-26z" />
        </g>
        <circle cx="165" cy="190" r="72" fill="none" stroke="#0f4f8c" strokeWidth="2" opacity="0.4" />
        <ellipse cx="140" cy="160" rx="26" ry="16" fill="#fff" opacity="0.18" />
      </g>

      {/* paper planes & birds */}
      <g fill="#fff" stroke="#8a8a8a" strokeWidth="1">
        <path d="M480 150l40-14-26 24-4-8z" />
        <path d="M470 330l34-10-22 20-3-7z" />
        <path d="M80 300l30-12-18 20-4-6z" />
      </g>
      <g fill="none" stroke="#5a4a3a" strokeWidth="2" strokeLinecap="round">
        <path d="M455 95q6-6 12 0q6-6 12 0" />
        <path d="M95 95q5-5 10 0q5-5 10 0" />
      </g>

      {/* light bulb */}
      <circle cx="300" cy="200" r="110" fill="url(#halo)" />
      <g>
        <path
          d="M300 108c-42 0-74 32-74 72 0 26 12 44 26 58 10 10 14 20 14 34v6h68v-6c0-14 4-24 14-34 14-14 26-32 26-58 0-40-32-72-74-72z"
          fill="url(#bulbGlow)"
          stroke="#e09412"
          strokeWidth="2"
        />
        <path
          d="M284 278v-36c0-10-12-14-12-28s12-18 12-6c0 8 8 8 16 0s16-8 16 0c0 12 12 8 12 6 0 14-12 18-12 28v36"
          fill="none"
          stroke="#b55a00"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <ellipse cx="270" cy="150" rx="12" ry="22" fill="#fff" opacity="0.55" transform="rotate(-25 270 150)" />
        <rect x="266" y="278" width="68" height="12" rx="4" fill="#9aa3ad" />
        <rect x="270" y="290" width="60" height="10" rx="4" fill="#7c8590" />
        <rect x="274" y="300" width="52" height="10" rx="4" fill="#9aa3ad" />
        <path d="M284 310h32l-6 12h-20z" fill="#5d646c" />
      </g>

      {/* open book */}
      <g>
        <path d="M30 382q130-36 270 6q140-42 270-6l-6 30q-130-28-264 8q-134-36-264-8z" fill="url(#cover)" />
        <path d="M44 360q120-40 256 0v46q-128-36-256-4z" fill="url(#page)" stroke="#d7c3a1" />
        <path d="M556 360q-120-40-256 0v46q128-36 256-4z" fill="url(#page)" stroke="#d7c3a1" />
        <path d="M60 352q116-36 240 4M540 352q-116-36-240 4" fill="none" stroke="#e6d5b6" strokeWidth="3" />
        <path d="M300 356v50" stroke="#c9b08a" strokeWidth="2" />
        <g fill="none" stroke="#d5c09c" strokeWidth="1.4">
          <path d="M80 372q90-24 190-2M80 384q90-22 190 0" />
          <path d="M520 372q-90-24-190-2M520 384q-90-22-190 0" />
        </g>
      </g>

      {/* reader standing on the book */}
      <g>
        <circle cx="222" cy="306" r="8" fill="#3a2a20" />
        <path d="M214 316h16l2 26h-20z" fill="#f5f5f5" stroke="#cfcfcf" />
        <path d="M215 342h6l-1 22h-5zM223 342h6l1 22h-5z" fill="#2b2f3a" />
        <rect x="226" y="320" width="12" height="9" rx="1" fill="#8b1a32" />
        <path d="M214 318l-6 16" stroke="#f5f5f5" strokeWidth="4" strokeLinecap="round" />
      </g>
    </svg>
  )
}

const covers = {
  green: (
    <>
      <defs>
        <linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8fd0f5" />
          <stop offset="1" stopColor="#e5f6ff" />
        </linearGradient>
      </defs>
      <rect width="120" height="170" fill="url(#skyG)" />
      <ellipse cx="30" cy="40" rx="18" ry="6" fill="#fff" opacity="0.9" />
      <ellipse cx="90" cy="28" rx="14" ry="5" fill="#fff" opacity="0.8" />
      <path d="M0 110q30-22 60-6t60-10v76H0z" fill="#6aa86b" />
      <path d="M0 98q40-18 70 2t50-6v20H0z" fill="#8ab8a8" opacity="0.6" />
      <path d="M0 130q40-16 120 0v40H0z" fill="#3e8b2f" />
      <rect x="44" y="70" width="7" height="60" fill="#5b3a1d" />
      <circle cx="48" cy="58" r="26" fill="#3f9a33" />
      <circle cx="32" cy="70" r="16" fill="#4fb03f" />
      <circle cx="66" cy="68" r="17" fill="#358a2b" />
      <g fill="#c86dd7">
        <circle cx="20" cy="150" r="2.5" />
        <circle cx="30" cy="156" r="2" />
        <circle cx="78" cy="148" r="2.5" />
        <circle cx="96" cy="158" r="2" />
        <circle cx="62" cy="160" r="2" fill="#ffd23f" />
      </g>
    </>
  ),
  roots: (
    <>
      <defs>
        <radialGradient id="sunR" cx="50%" cy="55%" r="45%">
          <stop offset="0" stopColor="#fff6c2" />
          <stop offset="0.4" stopColor="#f4d36b" />
          <stop offset="1" stopColor="#2f5a1f" />
        </radialGradient>
      </defs>
      <rect width="120" height="170" fill="url(#sunR)" />
      <g fill="#2b1d10">
        <rect x="6" y="0" width="9" height="140" />
        <rect x="24" y="0" width="6" height="128" />
        <rect x="88" y="0" width="7" height="132" />
        <rect x="104" y="0" width="10" height="145" />
        <rect x="40" y="10" width="4" height="100" opacity="0.6" />
        <rect x="76" y="10" width="4" height="104" opacity="0.6" />
      </g>
      <path d="M0 0h120v40q-30 10-60 4t-60 4z" fill="#1f4a17" />
      <path d="M0 120q60-18 120 0v50H0z" fill="#2f6b1e" />
      <path d="M52 112h16l26 58H26z" fill="#c69b5b" />
      <path d="M56 112h8l10 58H46z" fill="#e2bf82" />
    </>
  ),
  mountains: (
    <>
      <defs>
        <linearGradient id="skyM" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3f8fd9" />
          <stop offset="1" stopColor="#bfe2ff" />
        </linearGradient>
      </defs>
      <rect width="120" height="170" fill="url(#skyM)" />
      <path d="M-10 120L40 50l20 26 18-36 52 80z" fill="#6c7c95" />
      <path d="M78 40l14 22-8-4-6 8-6-6-6 6z" fill="#fff" />
      <path d="M40 50l10 14-6-2-4 6-4-6-6 2z" fill="#fff" />
      <path d="M-10 128l40-36 26 20 30-22 44 38v50H-10z" fill="#4c6f5a" />
      <path d="M0 150h120v20H0z" fill="#6fb4d8" />
      <g fill="#1f4a2b">
        <path d="M10 150l6-26 6 26z" />
        <path d="M22 150l5-20 5 20z" />
        <path d="M92 150l6-28 6 28z" />
        <path d="M104 150l5-20 5 20z" />
      </g>
    </>
  ),
  sunset: (
    <>
      <defs>
        <linearGradient id="skyS" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4b3b8f" />
          <stop offset="0.45" stopColor="#d0508a" />
          <stop offset="0.75" stopColor="#ffa25c" />
          <stop offset="1" stopColor="#ffd38a" />
        </linearGradient>
      </defs>
      <rect width="120" height="170" fill="url(#skyS)" />
      <circle cx="60" cy="88" r="14" fill="#ffe7a8" />
      <path d="M0 92q30-14 60-4t60-6v14H0z" fill="#2c2550" />
      <rect y="96" width="120" height="74" fill="#c25a8a" opacity="0.6" />
      <g fill="#ffe7a8" opacity="0.7">
        <rect x="48" y="102" width="24" height="2" />
        <rect x="52" y="110" width="16" height="2" />
        <rect x="55" y="118" width="10" height="2" />
      </g>
      <g fill="#2a2234">
        <ellipse cx="20" cy="150" rx="22" ry="12" />
        <ellipse cx="50" cy="160" rx="16" ry="8" />
        <ellipse cx="100" cy="152" rx="24" ry="14" />
      </g>
    </>
  ),
}

export function BookCover({ scene, title }) {
  return (
    <div className="book-3d">
      <svg viewBox="0 0 120 170" preserveAspectRatio="xMidYMid slice" role="img" aria-label={`Cover of ${title}`}>
        {covers[scene]}
      </svg>
    </div>
  )
}

export function BookStack() {
  return (
    <svg className="book-stack" viewBox="0 0 260 200" aria-hidden="true">
      <defs>
        <linearGradient id="pages" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fdf3e1" />
          <stop offset="1" stopColor="#e7d3b2" />
        </linearGradient>
      </defs>
      {/* bottom */}
      <rect x="0" y="140" width="250" height="52" rx="6" fill="#d9c09b" />
      <rect x="0" y="146" width="236" height="40" fill="url(#pages)" />
      <path d="M0 140h250v8H0zM0 186h250v6H0z" fill="#b8956a" />
      {/* middle */}
      <rect x="10" y="88" width="230" height="52" rx="6" fill="#7d1027" />
      <rect x="10" y="94" width="216" height="40" fill="url(#pages)" />
      <path d="M10 88h230v8H10zM10 134h230v6H10z" fill="#9b1b37" />
      {/* top */}
      <rect x="0" y="38" width="240" height="50" rx="6" fill="#e8dcc6" />
      <rect x="0" y="44" width="226" height="38" fill="url(#pages)" />
      <path d="M0 38h240v8H0zM0 82h240v6H0z" fill="#cbb48e" />
      <g stroke="#d6c19d" strokeWidth="1">
        <path d="M0 54h226M0 64h226M0 72h226M10 106h216M10 116h216M10 124h216M0 158h236M0 168h236M0 176h236" />
      </g>
    </svg>
  )
}

export function GoldBook() {
  return (
    <svg className="gold-book" viewBox="0 0 220 110" aria-hidden="true">
      <g fill="none" stroke="#e8b866" strokeWidth="2.4" strokeLinecap="round">
        <path d="M110 90C80 60 40 52 4 58" />
        <path d="M110 90c30-30 70-38 106-32" />
        <path d="M110 90C86 54 54 34 22 30" />
        <path d="M110 90c24-36 56-56 88-60" />
        <path d="M110 90C96 52 76 22 52 8" />
        <path d="M110 90c14-38 34-68 58-82" />
        <path d="M110 90c-4-34-8-62-14-84" />
        <path d="M110 90c4-34 8-62 14-84" />
        <path d="M4 58c30 4 70 14 106 46 36-32 76-42 106-46" strokeWidth="3" />
      </g>
    </svg>
  )
}
