import { InstagramLogo, WhatsappLogo, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import Logo from "./Logo";
import { whatsappLink, waMessages } from "@/lib/whatsapp";

const nav = [
  { label: "Sobre", href: "#sobre" },
  { label: "Valores", href: "#valores" },
  { label: "Temperos", href: "#temperos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Processo", href: "#processo" },
  { label: "Manifesto", href: "#manifesto" },
];

export default function Footer() {
  return (
    <footer className="bg-cocoa text-cream">
      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo tone="cream" />
            <p className="mt-5 max-w-xs text-pretty text-cream/60 leading-relaxed">
              Temperos artesanais de qualidade, com apresentação cuidadosa e preço
              justo, pra levar mais sabor aos momentos que importam.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={whatsappLink(waMessages.hero)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-cream/50 hover:text-cream"
              >
                <WhatsappLogo weight="fill" size={19} />
              </a>
              <a
                href="https://instagram.com/tomperos.oficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-cream/50 hover:text-cream"
              >
                <InstagramLogo size={19} />
              </a>
              <a
                href="mailto:contato@tomperos.com.br"
                aria-label="E-mail"
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-cream/50 hover:text-cream"
              >
                <EnvelopeSimple size={19} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg text-cream">Navegar</h3>
            <ul className="mt-4 space-y-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link-underline text-cream/65 hover:text-cream">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg text-cream">Contato</h3>
            <ul className="mt-4 space-y-3 text-cream/65">
              <li>
                <a
                  href={whatsappLink(waMessages.hero)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline hover:text-cream"
                >
                  Pedir pelo WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:contato@tomperos.com.br" className="link-underline hover:text-cream">
                  contato@tomperos.com.br
                </a>
              </li>
              <li>@tomperos.oficial</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/12 pt-7 text-sm text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Tomperos. Todos os direitos reservados.</p>
          <p className="italic">Temperando bons momentos.</p>
        </div>
      </div>
    </footer>
  );
}
