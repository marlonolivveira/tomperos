import Reveal from "./ui/Reveal";
import { valores } from "@/lib/data";

export default function Valores() {
  return (
    <section id="valores" className="scroll-mt-20 bg-sand/40 py-24 sm:py-32">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <Reveal>
          <h2 className="max-w-[16ch] font-display text-4xl leading-[1.06] tracking-tight text-ink sm:text-5xl">
            No que a gente <span className="italic text-paprika">acredita.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-ink/65">
            Princípios simples que guiam cada lote, cada embalagem e cada conversa
            com quem cozinha com a gente.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
          {valores.map((v, i) => (
            <Reveal key={v.nome} delay={(i % 4) * 0.06}>
              <div className="border-t border-ink/15 pt-5">
                <h3 className="font-display text-xl text-cinnamon">{v.nome}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/65">{v.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
