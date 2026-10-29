export const Crest = ({ className = "h-10 w-9", color = "#D4AF37" }) => (
  <svg viewBox="0 0 64 72" className={className} aria-hidden="true" fill="none">
    <path d="M6 4h52v33c0 17-12 27-26 31C18 64 6 54 6 37V4z" stroke={color} strokeWidth="2.5" />
    <path d="M19 18h8l5 13 5-13h8L32 46z" fill={color} />
    <path d="M14 30c1 11 7 19 15 23M50 30c-1 11-7 19-15 23" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    {[0, 1, 2].map((i) => (
      <g key={i} fill={color}>
        <ellipse cx={15.5 + i * 2.6} cy={36 + i * 5.5} rx="1.4" ry="2.6" transform={`rotate(-35 ${15.5 + i * 2.6} ${36 + i * 5.5})`} />
        <ellipse cx={48.5 - i * 2.6} cy={36 + i * 5.5} rx="1.4" ry="2.6" transform={`rotate(35 ${48.5 - i * 2.6} ${36 + i * 5.5})`} />
      </g>
    ))}
  </svg>
);

export const Logo = ({ light = true }) => (
  <a href="#top" data-testid="nav-logo-link" className="flex items-center gap-3 group" aria-label="Victory College International — back to top">
    <Crest className="h-10 w-9 transition-transform duration-500 group-hover:-rotate-6" />
    <span className="leading-none">
      <span className={`block font-label text-[13px] tracking-[0.28em] ${light ? "text-ivory" : "text-navy"}`}>VICTORY COLLEGE</span>
      <span className="block font-label text-[10px] tracking-[0.42em] text-gold mt-1">INTERNATIONAL</span>
    </span>
  </a>
);
