import './BookCover.css'

// Illustrated placeholder covers. Replace with real cover images when available.
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
