import Reveal from "./ui/Reveal";
import { manifesto, slogan } from "@/lib/data";

function Mark() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden className="mx-auto h-9 w-9 text-cinnamon">
      <path d="M13,31 C13,45 21,52 32,52 C43,52 51,45 51,31 Z" fill="currentColor" />
      <ellipse cx="32" cy="31" rx="19" ry="5.2" fill="#c1440e" />
      <ellipse cx="32" cy="30.2" rx="9" ry="2.8" fill="#e0a526" />
      <line x1="34" y1="33" x2="50" y2="12" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <circle cx="33" cy="32" r="5" fill="currentColor" />
    </svg>
  );
}

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(90% 70% at 50% 8%, rgba(224,165,38,0.16), transparent 60%), var(--color-cream)",
        }}
      />
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-lg text-ink/60">{manifesto.lead}</p>
        </Reveal>

        <div className="mt-8 flex flex-col gap-1.5 sm:mt-10 sm:gap-2">
          {manifesto.linhas.map((linha, i) => (
            <Reveal key={linha} delay={i * 0.09}>
              <p className="font-display text-[1.9rem] leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.9rem]">
                {linha}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-10 max-w-[52ch] text-pretty text-lg leading-relaxed text-ink/70">
            {manifesto.corpo}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-[46ch] text-pretty font-display text-xl italic leading-relaxed text-cinnamon sm:text-2xl">
            {manifesto.fecho}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-14">
            <Mark />
            <p className="mt-4 font-display text-2xl italic text-paprika sm:text-3xl">
              {slogan}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
