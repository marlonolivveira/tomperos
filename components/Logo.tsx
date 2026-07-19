type LogoProps = {
  className?: string;
  /** cor do texto/marca — herda currentColor por padrão */
  tone?: "ink" | "cream";
  markOnly?: boolean;
};

/** Marca da Tomperos: selo de anis-estrelado + wordmark editorial. */
export default function Logo({ className = "", tone = "ink", markOnly = false }: LogoProps) {
  const petals = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <span
      className={`inline-flex items-center gap-2.5 ${
        tone === "cream" ? "text-cream" : "text-ink"
      } ${className}`}
    >
      <svg
        viewBox="0 0 64 64"
        aria-hidden="true"
        className="h-8 w-8 shrink-0"
      >
        <g transform="translate(32 32)">
          {petals.map((deg) => (
            <ellipse
              key={deg}
              cx="0"
              cy="-17"
              rx="5.4"
              ry="11"
              fill="var(--color-paprika)"
              transform={`rotate(${deg})`}
            />
          ))}
          <circle cx="0" cy="0" r="7" fill="var(--color-turmeric)" />
        </g>
      </svg>
      {!markOnly && (
        <span
          className="font-display text-[1.6rem] leading-none font-semibold tracking-tight"
          style={{ letterSpacing: "-0.02em" }}
        >
          Tomperos
        </span>
      )}
    </span>
  );
}
