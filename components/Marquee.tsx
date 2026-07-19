import { especiarias } from "@/lib/data";

function Star() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 text-turmeric" aria-hidden>
      <g transform="translate(12 12)" fill="currentColor">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((d) => (
          <ellipse key={d} cx="0" cy="-6.5" rx="1.9" ry="3.8" transform={`rotate(${d})`} />
        ))}
      </g>
    </svg>
  );
}

/** Faixa cinética com os nomes das especiarias. CSS puro, sem JS de scroll. */
export default function Marquee() {
  const row = [...especiarias, ...especiarias];
  return (
    <section aria-hidden className="relative overflow-hidden border-y border-cream/10 bg-cocoa py-5 sm:py-7">
      <div className="flex w-max animate-marquee items-center gap-7 whitespace-nowrap pl-7 will-change-transform">
        {row.map((s, i) => (
          <span key={i} className="flex items-center gap-7">
            <span className="font-display text-[1.7rem] italic text-cream/80 sm:text-4xl">
              {s}
            </span>
            <Star />
          </span>
        ))}
      </div>
      {/* esfumaça nas bordas */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cocoa to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cocoa to-transparent" />
    </section>
  );
}
