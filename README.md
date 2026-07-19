# Tomperos — Landing Page

Landing page artesanal para a loja de temperos **Tomperos**. Construída com
Next.js (App Router), TypeScript, Tailwind CSS v4 e Motion (Framer Motion).

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

Para build de produção:

```bash
npm run build && npm start
```

## O que você provavelmente vai querer editar

| Onde | O quê |
| --- | --- |
| `lib/whatsapp.ts` | **Número do WhatsApp** (hoje é um placeholder `55XXXXXXXXXXX`) e as mensagens prontas dos botões. |
| `lib/data.ts` | Categorias de temperos, diferenciais, passos do processo, depoimentos, números e nomes do marquee. |
| `public/images/` | Fotos das seções e avatares dos depoimentos. |
| `app/globals.css` | Paleta (tokens de cor), fontes e animações. |
| `components/Logo.tsx` e `app/icon.svg` | Marca provisória (anis-estrelado + wordmark). Troque quando tiver a logo oficial. |

## Estrutura

- `app/` — layout, página e estilos globais.
- `components/` — seções da página (Hero, Sobre, Tipos de Temperos, Diferenciais, Processo, Depoimentos, CTA, Footer, Navbar).
- `components/ui/` — helpers de animação reutilizáveis (Reveal, MagneticButton, SpiceParticles, Counter, SplitText).
- `lib/` — dados de conteúdo e helper do WhatsApp.

## Observações

- As fotos são de banco de imagens (Unsplash) baixadas em `public/`. Troque
  pelas fotos reais dos seus produtos quando tiver.
- Os depoimentos e números são fictícios (placeholder) — ajuste em `lib/data.ts`.
- Todas as animações respeitam `prefers-reduced-motion`.
