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
