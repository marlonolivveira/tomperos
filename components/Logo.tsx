type LogoProps = {
  className?: string;
  /** cor da estrutura (tigela/socador) — segue o texto; o tempero é fixo */
  tone?: "ink" | "cream";
  markOnly?: boolean;
};

/** Marca da Tomperos: pilão (almofariz + socador) com tempero + wordmark. */
export default function Logo({ className = "", tone = "ink", markOnly = false }: LogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 ${
        tone === "cream" ? "text-cream" : "text-ink"
      } ${className}`}
    >
      <svg viewBox="0 0 64 64" aria-hidden="true" className="h-8 w-8 shrink-0">
        {/* tigela */}
        <path
          d="M13,31 C13,45 21,52 32,52 C43,52 51,45 51,31 Z"
          fill="currentColor"
        />
        {/* tempero */}
        <ellipse cx="32" cy="31" rx="19" ry="5.2" fill="var(--color-paprika)" />
        <ellipse cx="32" cy="30.2" rx="9" ry="2.8" fill="var(--color-turmeric)" />
        {/* socador */}
        <line
          x1="34"
          y1="33"
          x2="50"
          y2="12"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <circle cx="33" cy="32" r="5" fill="currentColor" />
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
