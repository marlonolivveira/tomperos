"use client";

import { motion, useReducedMotion } from "motion/react";

type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
  /** aplica itálico do MESMO font a estas palavras (ênfase editorial) */
  emphasize?: string[];
};

/**
 * Revela um título palavra por palavra (máscara + slide-up).
 * A ênfase usa itálico da mesma família — nunca troca de fonte.
 */
export default function SplitText({
  text,
  className = "",
  delay = 0,
  emphasize = [],
}: SplitTextProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  const emph = new Set(emphasize.map((w) => w.toLowerCase()));

  if (reduce) {
    return (
      <span className={className}>
        {words.map((w, i) => (
          <span key={i} className={emph.has(w.toLowerCase()) ? "italic text-paprika" : ""}>
            {w}
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
          style={{ paddingBottom: "0.12em", marginBottom: "-0.12em" }}
        >
          <motion.span
            className={`inline-block ${
              emph.has(word.toLowerCase()) ? "italic text-paprika" : ""
            }`}
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.9,
              delay: delay + i * 0.075,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
