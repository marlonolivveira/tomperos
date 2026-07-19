"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useReducedMotion,
} from "motion/react";
import { List, X, WhatsappLogo } from "@phosphor-icons/react";
import Logo from "./Logo";
import { whatsappLink, waMessages } from "@/lib/whatsapp";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Valores", href: "#valores" },
  { label: "Manifesto", href: "#manifesto" },
  { label: "Temperos", href: "#temperos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Processo", href: "#processo" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24);
  });

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-colors duration-500 ${
          scrolled || open
            ? "border-b border-ink/10 bg-cream/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-[1320px] items-center justify-between px-5 sm:px-8">
          <a href="#top" aria-label="Tomperos — início">
            <Logo />
          </a>

          <div className="hidden items-center gap-6 lg:flex xl:gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-underline text-[0.95rem] text-ink/75 hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={whatsappLink(waMessages.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-paprika px-5 py-2.5 text-[0.9rem] font-medium text-cream transition-colors hover:bg-paprika-deep sm:inline-flex"
            >
              <WhatsappLogo weight="fill" size={18} />
              Pedir agora
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 text-ink lg:hidden"
            >
              {open ? <X size={20} /> : <List size={20} />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-ink/10 bg-cream/95 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto flex max-w-[1320px] flex-col gap-1 px-5 py-4 sm:px-8">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-lg text-ink/80 hover:bg-ink/[0.04] hover:text-ink"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={whatsappLink(waMessages.hero)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-paprika px-5 py-3 font-medium text-cream"
              >
                <WhatsappLogo weight="fill" size={18} />
                Pedir pelo WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
