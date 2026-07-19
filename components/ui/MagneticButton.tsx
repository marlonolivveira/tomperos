"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { useRef, type ReactNode, type MouseEvent } from "react";

type Variant = "primary" | "outline" | "outlineCream" | "cream";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  target?: string;
  rel?: string;
  strength?: number;
};

const styles: Record<Variant, string> = {
  primary:
    "bg-paprika text-cream shadow-[0_10px_30px_-8px_rgba(193,68,14,0.55)] hover:bg-paprika-deep",
  outline: "border border-ink/25 text-ink hover:border-ink/60 hover:bg-ink/[0.04]",
  outlineCream:
    "border border-cream/35 text-cream hover:border-cream/70 hover:bg-cream/[0.08]",
  cream: "bg-cream text-paprika shadow-[0_10px_30px_-8px_rgba(0,0,0,0.35)] hover:bg-white",
};

/** Botão/CTA que é levemente atraído pelo cursor. Estático sob reduced-motion. */
export default function MagneticButton({
  href,
  children,
  variant = "primary",
  className = "",
  target,
  rel,
  strength = 0.35,
}: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 160, damping: 15, mass: 0.1 });
  const sy = useSpring(y, { stiffness: 160, damping: 15, mass: 0.1 });

  function handleMove(e: MouseEvent<HTMLAnchorElement>) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * (strength + 0.05));
  }
  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.97 }}
      className={`group relative inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[0.98rem] font-medium transition-colors duration-300 ${styles[variant]} ${className}`}
    >
      {children}
    </motion.a>
  );
}
