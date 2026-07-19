import Image from "next/image";
import { Sparkle, Leaf, Path, Package } from "@phosphor-icons/react/dist/ssr";
import Reveal from "./ui/Reveal";
import { diferenciais, type Diferencial } from "@/lib/data";

const iconMap = {
  mortar: Sparkle,
  leaf: Leaf,
  route: Path,
  seal: Package,
} as const;

const tint = ["#e0a526", "#5f6b43", "#a8551f", "#7b3f00"];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="scroll-mt-20 bg-sand/40 py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <Reveal>
          <h2 className="mb-12 max-w-[18ch] font-display text-4xl leading-[1.06] tracking-tight text-ink sm:text-5xl">
            Por que o tempero daqui{" "}
            <span className="italic text-paprika">rende</span> mais.
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr">
          {/* tile de imagem — variação visual real */}
          <Reveal className="lg:row-span-2">
            <div className="relative h-full min-h-[280px] overflow-hidden rounded-[22px] border border-ink/10">
              <Image
                src="/images/curry.jpg"
                alt="Prato temperado ao lado de uma lata de especiarias"
                fill
                sizes="(max-width: 1024px) 92vw, 380px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa/90 via-cocoa/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="font-display text-2xl leading-snug text-cream">
                  Tempero bom tem pressa. Por isso a gente faz pouco, e faz
                  sempre.
                </p>
              </div>
            </div>
          </Reveal>

          {diferenciais.map((d: Diferencial, i) => {
            const Icon = iconMap[d.icon];
            return (
              <Reveal key={d.titulo} delay={i * 0.06}>
                <div
                  className="flex h-full flex-col rounded-[22px] border border-ink/10 bg-cream p-7"
                  style={{ boxShadow: `inset 0 0 0 100vmax ${tint[i]}0d` }}
                >
                  <span
                    className="mb-6 grid h-12 w-12 place-items-center rounded-full"
                    style={{ backgroundColor: `${tint[i]}22`, color: tint[i] }}
                  >
                    <Icon size={24} weight="duotone" />
                  </span>
                  <h3 className="font-display text-xl text-ink">{d.titulo}</h3>
                  <p className="mt-2 text-[0.96rem] leading-relaxed text-ink/65">
                    {d.texto}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
