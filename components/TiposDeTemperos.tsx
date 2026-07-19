"use client";

import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { categorias, type Categoria } from "@/lib/data";
import { whatsappLink, waMessages } from "@/lib/whatsapp";

function TiltCard({ cat, index }: { cat: Categoria; index: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 150, damping: 18 });
  const sry = useSpring(ry, { stiffness: 150, damping: 18 });

  function move(e: MouseEvent<HTMLAnchorElement>) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 9);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 9);
  }
  function leave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={whatsappLink(waMessages.produto(cat.nome))}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={move}
      onMouseLeave={leave}
      initial={reduce ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{
        transformPerspective: 900,
        rotateX: srx,
        rotateY: sry,
        ["--glow" as string]: `${cat.cor}66`,
      }}
      className={`group relative flex flex-col overflow-hidden rounded-[22px] border border-ink/10 bg-sand/50 p-7 transition-shadow duration-500 hover:shadow-[0_28px_60px_-30px_var(--glow)] ${
        index % 2 === 1 ? "lg:translate-y-9" : ""
      }`}
    >
      {/* brilho na cor da especiaria */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(80% 60% at 50% 0%, ${cat.cor}22, transparent 70%)`,
        }}
      />

      <div className="relative mb-6 h-16 w-16 overflow-hidden rounded-full ring-1 ring-black/10">
        <div className="spice-mound absolute inset-0" style={{ ["--mound" as string]: cat.cor }} />
      </div>

      <h3 className="font-display text-2xl text-ink">{cat.nome}</h3>
      <p className="mt-2 text-[0.98rem] leading-relaxed text-ink/65">{cat.descricao}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {cat.exemplos.map((e) => (
          <span
            key={e}
            className="rounded-full border border-ink/12 bg-cream/70 px-3 py-1 text-[0.78rem] text-ink/70"
          >
            {e}
          </span>
        ))}
      </div>

      <span className="mt-6 inline-flex items-center gap-1 text-[0.9rem] font-medium text-ink/60 transition-colors group-hover:text-paprika">
        Pedir no WhatsApp
        <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </motion.a>
  );
}

export default function TiposDeTemperos() {
  return (
    <section id="temperos" className="scroll-mt-20 bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-5 inline-flex items-center gap-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-cinnamon">
            <span className="h-px w-8 bg-cinnamon/50" />
            Os temperos
          </p>
          <h2 className="font-display text-4xl leading-[1.06] tracking-tight text-ink sm:text-5xl">
            Seis famílias pra{" "}
            <span className="italic text-paprika">acordar</span> qualquer prato.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categorias.map((cat, i) => (
            <TiltCard key={cat.nome} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
