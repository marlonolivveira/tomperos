import type { Metadata, Viewport } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tomperos.com.br"),
  title: "Tomperos — Temperos artesanais, moídos na hora",
  description:
    "Temperos e especiarias artesanais, moídos em pequenos lotes para chegar frescos na sua cozinha. Peça pelo WhatsApp.",
  keywords: [
    "temperos artesanais",
    "especiarias",
    "tempero moído na hora",
    "páprica",
    "cúrcuma",
    "blends",
  ],
  openGraph: {
    title: "Tomperos — Temperos artesanais, moídos na hora",
    description:
      "Especiarias frescas, sem conservantes, moídas em pequenos lotes. Do campo ao pote.",
    type: "website",
    locale: "pt_BR",
    siteName: "Tomperos",
  },
};

export const viewport: Viewport = {
  themeColor: "#241811",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${outfit.variable}`}>
      <body className="grain antialiased">{children}</body>
    </html>
  );
}
