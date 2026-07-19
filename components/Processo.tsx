"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useReducedMotion } from "motion/react";
import { processo } from "@/lib/data";

export default function Processo() {
  const railRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 65%", "end 60%"],
  });

  return (
    <section id="processo" className="scroll-mt-20 bg-cocoa py-24 text-cream sm:py-32">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <p className="mb-5 inline-flex items-center gap-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-turmeric">
          <span className="h-px w-8 bg-turmeric/50" />
          Do campo ao pote
        </p>
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[18ch] font-display text-4xl leading-[1.06] tracking-tight text-cream sm:text-5xl"
        >
          Quatro passos, nenhum{" "}
          <span className="italic text-turmeric">atalho.</span>
        </motion.h2>

        <div className="relative mt-12 aspect-[16/6] overflow-hidden rounded-[24px] border border-cream/10">
          <Image
            src="/images/market.jpg"
            alt="Tigelas de especiarias variadas expostas em um mercado"
            fill
            sizes="(max-width: 1024px) 92vw, 1120px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-cocoa/35" />
        </div>

        {/* Timeline */}
        <div ref={railRef} className="relative mt-16 pl-10 sm:pl-14">
          {/* trilho de fundo */}
          <div className="absolute left-[13px] top-1 h-[calc(100%-1rem)] w-px bg-cream/15 sm:left-[21px]" />
          {/* trilho preenchido pelo scroll */}
          <motion.div
            style={{ scaleY: reduce ? 1 : scrollYProgress }}
            className="absolute left-[13px] top-1 h-[calc(100%-1rem)] w-px origin-top bg-gradient-to-b from-turmeric to-paprika sm:left-[21px]"
          />

          <div className="flex flex-col gap-12 sm:gap-14">
            {processo.map((p, i) => (
              <motion.div
                key={p.numero}
                initial={reduce ? false : { opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <span className="absolute -left-10 top-1 grid h-7 w-7 place-items-center rounded-full bg-paprika text-[0.7rem] font-semibold text-cream ring-4 ring-cocoa sm:-left-14 sm:h-9 sm:w-9 sm:text-xs">
                  {p.numero}
                </span>
                <h3 className="font-display text-2xl text-cream">{p.titulo}</h3>
                <p className="mt-2 max-w-[52ch] text-[1rem] leading-relaxed text-cream/65">
                  {p.texto}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
