"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { WhatsappLogo } from "@phosphor-icons/react";
import SplitText from "./ui/SplitText";
import SpiceParticles from "./ui/SpiceParticles";
import MagneticButton from "./ui/MagneticButton";
import { whatsappLink, waMessages } from "@/lib/whatsapp";

function Seal() {
  return (
    <div className="absolute -bottom-7 -left-7 grid h-28 w-28 place-items-center rounded-full bg-cocoa text-cream shadow-2xl sm:h-32 sm:w-32">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-[spin_22s_linear_infinite]">
        <defs>
          <path id="seal-path" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
        </defs>
        <text className="fill-cream/85" style={{ fontSize: "8.4px", letterSpacing: "1.5px" }}>
          <textPath href="#seal-path">
            · MOÍDO NA HORA · SEMPRE FRESCO
          </textPath>
        </text>
      </svg>
      <svg viewBox="0 0 64 64" className="h-8 w-8">
        <g transform="translate(32 32)">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((d) => (
            <ellipse key={d} cx="0" cy="-16" rx="4.6" ry="9.5" fill="#c1440e" transform={`rotate(${d})`} />
          ))}
          <circle r="6" fill="#e0a526" />
        </g>
      </svg>
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "16%"]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-28 pb-16 sm:pt-24"
    >
      {/* fundo quente */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(120% 90% at 82% 12%, rgba(224,165,38,0.20), transparent 55%), radial-gradient(90% 80% at 5% 95%, rgba(193,68,14,0.12), transparent 55%), var(--color-cream)",
        }}
      />
      <SpiceParticles className="-z-10" />

      <div className="mx-auto grid w-full max-w-[1320px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8">
        {/* Texto */}
        <div className="relative z-10">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-cinnamon"
          >
            <span className="h-px w-8 bg-cinnamon/50" />
            Temperos artesanais
          </motion.p>

          <h1 className="font-display text-[2.7rem] leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[4.4rem]">
            <SplitText text="Tempero que ainda" />
            <br />
            <SplitText text="cheira a tempero." emphasize={["cheira"]} delay={0.18} />
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-7 max-w-[46ch] text-pretty text-lg leading-relaxed text-ink/70"
          >
            Especiarias moídas em pequenos lotes, sem conservantes, que chegam
            vivas na sua panela.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-3.5"
          >
            <MagneticButton
              href={whatsappLink(waMessages.hero)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappLogo weight="fill" size={20} />
              Peça pelo WhatsApp
            </MagneticButton>
            <MagneticButton href="#temperos" variant="outline" strength={0.25}>
              Conhecer os temperos
            </MagneticButton>
          </motion.div>
        </div>

        {/* Imagem */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[440px] lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-ink/10 shadow-[0_30px_80px_-30px_rgba(42,28,18,0.45)]">
            <motion.div style={{ y: imgY }} className="absolute inset-0 scale-110">
              <Image
                src="/images/hero-spoons.jpg"
                alt="Colheres com diferentes temperos e ervas frescas sobre mármore claro"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 620px"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-cocoa/20 via-transparent to-transparent" />
          </div>
          <Seal />
        </motion.div>
      </div>
    </section>
  );
}
