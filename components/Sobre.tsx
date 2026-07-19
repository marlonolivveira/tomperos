import Image from "next/image";
import Reveal from "./ui/Reveal";
import Counter from "./ui/Counter";
import { stats } from "@/lib/data";

export default function Sobre() {
  return (
    <section id="sobre" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <Reveal>
          <h2 className="max-w-[16ch] font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]">
            Tempero que aproxima quem senta à{" "}
            <span className="italic text-paprika">mesa.</span>
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 sm:gap-12">
          <Reveal delay={0.05}>
            <p className="text-pretty text-lg leading-relaxed text-ink/75">
              A Tomperos nasceu numa cozinha de família, com um moedor manual e o
              gosto de comprar especiaria boa direto de quem planta. O primeiro
              lote foi pra nossa mesa. O segundo, pra dos vizinhos. Não parou mais.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-pretty text-lg leading-relaxed text-ink/75">
              Seguimos moendo em pequenos lotes, com apresentação cuidadosa e
              preço justo. Sem conservante, sem pressa e sem esconder o que tem no
              rótulo. Porque tempero, pra gente, é memória.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="relative mt-14 aspect-[16/8] overflow-hidden rounded-[26px] border border-ink/10 shadow-[0_30px_70px_-40px_rgba(42,28,18,0.5)] sm:mt-16">
            <Image
              src="/images/flatlay.jpg"
              alt="Variedade de temperos, ervas e raízes dispostos sobre madeira clara"
              fill
              sizes="(max-width: 1024px) 92vw, 1120px"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 border-t border-ink/10 pt-12 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.rotulo} delay={i * 0.08}>
              <div>
                <div className="font-display text-5xl text-cinnamon sm:text-6xl">
                  <Counter value={s.valor} suffix={s.sufixo} />
                </div>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-ink/55">
                  {s.rotulo}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
