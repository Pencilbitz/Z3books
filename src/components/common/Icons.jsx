// Lightweight inline SVG icon set (stroke-based, inherits currentColor).
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const ArrowRight = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} strokeWidth={2.2} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const Check = (p) => (
  <svg viewBox="0 0 24 24" width="14" height="14" {...base} strokeWidth={3} {...p}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
)

export const Manuscript = (p) => (
  <svg viewBox="0 0 24 24" width="28" height="28" {...base} {...p}>
    <path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8z" />
    <path d="M14 3v5h5M8.5 12h5M8.5 15.5h3" />
    <path d="M20.5 11.5l-5.5 5.5-2 .5.5-2 5.5-5.5a1.06 1.06 0 0 1 1.5 1.5z" />
  </svg>
)

export const OpenBook = (p) => (
  <svg viewBox="0 0 24 24" width="28" height="28" {...base} {...p}>
    <path d="M12 6.5C10 5 7 4.5 3 5v13c4-.5 7 0 9 1.5 2-1.5 5-2 9-1.5V5c-4-.5-7 0-9 1.5z" />
    <path d="M12 6.5v13M5.5 8.5c1.6 0 3 .3 4 .8M5.5 11.5c1.6 0 3 .3 4 .8M18.5 8.5c-1.6 0-3 .3-4 .8M18.5 11.5c-1.6 0-3 .3-4 .8" />
  </svg>
)

export const PenTool = (p) => (
  <svg viewBox="0 0 24 24" width="28" height="28" {...base} {...p}>
    <path d="M12 3l5.5 6.5L14 20h-4L6.5 9.5z" />
    <circle cx="12" cy="12" r="1.6" />
    <path d="M12 3v7.4M3 6.5h3.5M17.5 6.5H21" />
    <circle cx="3" cy="6.5" r="1" />
    <circle cx="21" cy="6.5" r="1" />
  </svg>
)

export const Printer = (p) => (
  <svg viewBox="0 0 24 24" width="28" height="28" {...base} {...p}>
    <path d="M7 8V3.5h10V8" />
    <rect x="3" y="8" width="18" height="9" rx="2" />
    <path d="M7 14h10v6.5H7z" />
    <path d="M17.5 11h.01" />
  </svg>
)

export const Truck = (p) => (
  <svg viewBox="0 0 24 24" width="28" height="28" {...base} {...p}>
    <path d="M2.5 6h11v10h-11zM13.5 9.5h4l3.5 3.5v3h-7.5" />
    <circle cx="6.5" cy="17.5" r="1.8" />
    <circle cx="17" cy="17.5" r="1.8" />
  </svg>
)

export const Megaphone = (p) => (
  <svg viewBox="0 0 24 24" width="28" height="28" {...base} {...p}>
    <path d="M3 10v4a1 1 0 0 0 1 1h3l7 4.5V4.5L7 9H4a1 1 0 0 0-1 1z" />
    <path d="M7 15l1.5 5h2.5l-1-4.5" />
    <path d="M17.5 9a4 4 0 0 1 0 6M19.5 6.5a7.5 7.5 0 0 1 0 11" />
  </svg>
)

export const Mail = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden {...p}>
    <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7.2L20 7H4z" />
  </svg>
)

export const Phone = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden {...p}>
    <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" />
  </svg>
)

export const Pin = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden {...p}>
    <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
  </svg>
)

export const Facebook = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden {...p}>
    <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.25-1.5 1.5-1.5h1.6V4.4a21 21 0 0 0-2.3-.1c-2.3 0-3.8 1.4-3.8 3.9v2.3H7.9v3h2.6V21z" />
  </svg>
)

export const Instagram = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} strokeWidth={2} {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.2 6.8h.01" />
  </svg>
)

export const LinkedIn = (p) => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden {...p}>
    <path d="M4.5 9h3v11h-3zM6 3.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5zM10 9h2.9v1.5h.04c.4-.75 1.4-1.8 3.06-1.8 3.2 0 3.8 2.1 3.8 4.9V20h-3v-5.6c0-1.3 0-3-1.85-3s-2.1 1.45-2.1 2.9V20H10z" />
  </svg>
)

export const YouTube = (p) => (
  <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden {...p}>
    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.3 5 12 5 12 5s-6.3 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.7 19 12 19 12 19s6.3 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3z" />
  </svg>
)

export const Menu = (p) => (
  <svg viewBox="0 0 24 24" width="24" height="24" {...base} strokeWidth={2} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const Close = (p) => (
  <svg viewBox="0 0 24 24" width="24" height="24" {...base} strokeWidth={2} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
)

export const XLogo = (p) => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden {...p}>
    <path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.77zm-1.08 16.17h1.7L7.4 4.73H5.58z" />
  </svg>
)

export const Barcode = (p) => (
  <svg viewBox="0 0 24 24" width="28" height="28" {...base} {...p}>
    <path d="M4 5v14M7 5v14M10.5 5v14M13 5v14M16.5 5v14M20 5v14" />
  </svg>
)

export const Tablet = (p) => (
  <svg viewBox="0 0 24 24" width="28" height="28" {...base} {...p}>
    <rect x="5" y="2.5" width="14" height="19" rx="2.5" />
    <path d="M9 6.5h6M9 10h6M9 13.5h4M11 18.5h2" />
  </svg>
)

export const Bulb = (p) => (
  <svg viewBox="0 0 24 24" width="28" height="28" {...base} {...p}>
    <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2V16h5.2v-.2c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z" />
  </svg>
)

export const Library = (p) => (
  <svg viewBox="0 0 24 24" width="28" height="28" {...base} {...p}>
    <path d="M4 4v16M8 4v16M12 6l4 14M17 5.5l3.5 13.5" />
  </svg>
)

export const ArrowUp = (p) => (
  <svg viewBox="0 0 24 24" width="14" height="14" {...base} strokeWidth={2.2} {...p}>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </svg>
)

/* ---- Solid icons for the About section arc ---- */
const solid = { fill: 'currentColor', 'aria-hidden': true }

export const BookSolid = (p) => (
  <svg viewBox="0 0 24 24" width="24" height="24" {...solid} {...p}>
    <path d="M2 5.5C4.8 4.6 8 4.8 11.2 6.4V20c-3.1-1.5-6.3-1.7-9.2-.8zM22 5.5c-2.8-.9-6-.7-9.2.9V20c3.1-1.5 6.3-1.7 9.2-.8z" />
    <path d="M1 20.6c3.6-1 7.4-.6 11 1.2 3.6-1.8 7.4-2.2 11-1.2v1c-3.5-.9-7.2-.4-11 1.4-3.8-1.8-7.5-2.3-11-1.4z" />
  </svg>
)

export const FeatherSolid = (p) => (
  <svg viewBox="0 0 24 24" width="24" height="24" {...solid} {...p}>
    <path d="M20.7 2.3c-6.4.2-11.6 3.6-13.9 9.2-.9 2.2-1.2 4.4-1.1 6.3l-3 3 1.1 1.1 3-3c1.9.1 4.1-.2 6.3-1.1 1.4-.6 2.6-1.4 3.6-2.4l-3.4-.6 4.6-1.6c.6-.9 1.1-1.9 1.4-3l-3.9.2 4.3-2.3c.4-1.7.5-3.6 1-5.8zM8.4 16.9l7.9-9.8-9.2 8.5z" />
  </svg>
)

export const BulbSolid = (p) => (
  <svg viewBox="0 0 24 24" width="24" height="24" {...solid} {...p}>
    <path d="M12 6a5.5 5.5 0 0 0-3.4 9.8c.5.4.9 1 .9 1.7v.5h5v-.5c0-.7.4-1.3.9-1.7A5.5 5.5 0 0 0 12 6zM9.5 19h5v1.2a1.3 1.3 0 0 1-1.3 1.3h-2.4a1.3 1.3 0 0 1-1.3-1.3z" />
    <path d="M11.3 1h1.4v3h-1.4zM3.6 4.6l1-1 2.1 2.1-1 1zM17.3 5.7l2.1-2.1 1 1-2.1 2.1zM.5 11.3h3v1.4h-3zM20.5 11.3h3v1.4h-3z" />
  </svg>
)

export const PenNibSolid = (p) => (
  <svg viewBox="0 0 24 24" width="24" height="24" {...solid} {...p}>
    <path d="M14.5 2.5l7 7-2 2-1.1-.4-4.6 7.4L3 22l3.5-10.8 7.4-4.6-.4-1.1zM9.6 13a1.9 1.9 0 1 0 2.7-.1 1.9 1.9 0 0 0-2.7.1zm-4.3 6.9l3.8-3.8-.8-.8-3.8 3.8z" />
  </svg>
)

export const BooksSolid = (p) => (
  <svg viewBox="0 0 24 24" width="24" height="24" {...solid} {...p}>
    <path d="M2 4h4.5v16H2zM7.5 6H11v14H7.5zM12 5.6l3.4-.9 4.2 15.4-3.4.9z" />
    <path d="M2 7h4.5v1H2zM2 16h4.5v1H2zM7.5 9H11v1H7.5zM7.5 17H11v1H7.5z" fill="#f6dabf" />
    <path d="M1 21h22v1.5H1z" />
  </svg>
)

export const ChevronDown = (p) => (
  <svg viewBox="0 0 24 24" width="14" height="14" {...base} strokeWidth={2.2} {...p}>
    <path d="M6 9l6 6 6-6" />
  </svg>
)

export const Textbook = (p) => (
  <svg viewBox="0 0 24 24" width="28" height="28" {...base} {...p}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    <path d="M8 7h8M8 11h6M8 15h4" />
  </svg>
)

export const Patent = (p) => (
  <svg viewBox="0 0 24 24" width="28" height="28" {...base} {...p}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6M8 11h5M8 15h3" />
    <circle cx="16" cy="16" r="3" />
    <path d="M18 18.5l1.5 2.5-2-.6-2 .6.8-2.5" />
  </svg>
)

export const ShieldCheck = (p) => (
  <svg viewBox="0 0 24 24" width="28" height="28" {...base} {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <circle cx="12" cy="11.5" r="3.5" />
    <path d="M13.5 10.5a2 2 0 0 0-2.8 0 2 2 0 0 0 0 2.8 2 2 0 0 0 2.8 0" />
  </svg>
)

export const ConferencePaper = (p) => (
  <svg viewBox="0 0 24 24" width="28" height="28" {...base} {...p}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12.5v4.5c3 3 9 3 12 0v-4.5" />
  </svg>
)

export const BookChapter = (p) => (
  <svg viewBox="0 0 24 24" width="28" height="28" {...base} {...p}>
    <path d="M12 6.5C10 5 7 4.5 3 5v13c4-.5 7 0 9 1.5 2-1.5 5-2 9-1.5V5c-4-.5-7 0-9 1.5z" />
    <path d="M12 6.5v13" />
    <path d="M15.5 8.5h3.5M15.5 11.5h2.5" />
  </svg>
)

export const EventManagement = (p) => (
  <svg viewBox="0 0 24 24" width="28" height="28" {...base} {...p}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
    <circle cx="8" cy="14" r="1" fill="currentColor" />
    <circle cx="12" cy="14" r="1" fill="currentColor" />
    <circle cx="16" cy="14" r="1" fill="currentColor" />
    <circle cx="8" cy="18" r="1" fill="currentColor" />
    <circle cx="12" cy="18" r="1" fill="currentColor" />
  </svg>
)

export const Upskilling = (p) => (
  <svg viewBox="0 0 24 24" width="28" height="28" {...base} {...p}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <polyline points="15 11 18 8 22 12" />
    <polyline points="18 8 22 8 22 12" />
  </svg>
)
