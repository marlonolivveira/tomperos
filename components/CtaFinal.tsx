"use client";

import { motion, useReducedMotion } from "motion/react";
import { WhatsappLogo } from "@phosphor-icons/react";
import MagneticButton from "./ui/MagneticButton";
import SpiceParticles from "./ui/SpiceParticles";
import { whatsappLink, waMessages } from "@/lib/whatsapp";

export default function CtaFinal() {
  const reduce = useReducedMotion();
  return (
    <section id="contato" className="scroll-mt-20 px-5 py-16 sm:px-8">
      <div
        className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[32px] px-6 py-20 text-center sm:py-28"
        style={{
          background:
            "radial-gradient(120% 120% at 50% 0%, #d1521a 0%, #c1440e 45%, #9c330a 100%)",
        }}
      >
        <SpiceParticles className="opacity-70" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: reduce ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-2xl"
        >
          <h2 className="font-display text-4xl leading-[1.04] tracking-tight text-cream sm:text-6xl">
            Vamos temperar os seus <span className="italic">bons momentos?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg text-cream/80">
            Chama a gente no WhatsApp e monte seu pedido. Do nosso jeito: simples,
            cuidadoso e com preço justo.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3.5">
            <MagneticButton
              href={whatsappLink(waMessages.final)}
              target="_blank"
              rel="noopener noreferrer"
              variant="cream"
            >
              <WhatsappLogo weight="fill" size={20} />
              Fazer meu pedido
            </MagneticButton>
            <MagneticButton
              href={whatsappLink(waMessages.catalogo)}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlineCream"
              strength={0.25}
            >
              Receber o catálogo
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
