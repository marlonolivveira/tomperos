/**
 * Grãos de tempero flutuando — camada decorativa e leve.
 * Posições geradas de forma determinística (mesmo resultado no server e no
 * client, sem Math.random em runtime), então não há mismatch de hidratação.
 * A animação para sozinha sob prefers-reduced-motion (regra global no CSS).
 */
const COLORS = ["#c1440e", "#e0a526", "#7b3f00", "#5f6b43", "#a8551f"];

function build() {
  let seed = 1337;
  const rnd = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  return Array.from({ length: 22 }, () => ({
    left: Math.round(rnd() * 100),
    top: Math.round(rnd() * 100),
    size: 3 + Math.round(rnd() * 5),
    color: COLORS[Math.floor(rnd() * COLORS.length)],
    dur: 8 + Math.round(rnd() * 9),
    delay: -Math.round(rnd() * 10),
    drift: Math.round((rnd() * 2 - 1) * 18),
    rise: -(14 + Math.round(rnd() * 24)),
    op: Math.round((0.22 + rnd() * 0.4) * 100) / 100,
  }));
}

const PARTICLES = build();

export default function SpiceParticles({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            opacity: p.op,
            // @ts-expect-error CSS custom properties
            "--drift": `${p.drift}px`,
            "--rise": `${p.rise}px`,
            animation: `spice-float ${p.dur}s ${p.delay}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}
