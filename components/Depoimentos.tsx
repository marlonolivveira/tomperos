import Image from "next/image";
import { Star } from "@phosphor-icons/react/dist/ssr";
import Reveal from "./ui/Reveal";
import { depoimentos } from "@/lib/data";

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="scroll-mt-20 bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <Reveal>
          <h2 className="mb-14 max-w-[20ch] font-display text-4xl leading-[1.06] tracking-tight text-ink sm:text-5xl">
            Quem tempera com a Tomperos{" "}
            <span className="italic text-paprika">volta.</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {depoimentos.map((d, i) => (
            <Reveal key={d.nome} delay={i * 0.1} className={i === 1 ? "md:translate-y-8" : ""}>
              <figure className="flex h-full flex-col rounded-[22px] border border-ink/10 bg-sand/40 p-8 transition-transform duration-500 hover:-translate-y-1">
                <div className="mb-5 flex gap-1 text-turmeric">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={17} weight="fill" />
                  ))}
                </div>
                <blockquote className="flex-1 font-display text-[1.35rem] leading-snug text-ink/90">
                  “{d.texto}”
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3.5 border-t border-ink/10 pt-6">
                  <span className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-ink/10">
                    <Image src={d.avatar} alt={d.nome} fill sizes="44px" className="object-cover" />
                  </span>
                  <span>
                    <span className="block text-[0.98rem] font-semibold text-ink">{d.nome}</span>
                    <span className="block text-[0.85rem] text-ink/55">{d.papel}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
