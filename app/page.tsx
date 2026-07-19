import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Sobre from "@/components/Sobre";
import TiposDeTemperos from "@/components/TiposDeTemperos";
import Diferenciais from "@/components/Diferenciais";
import Processo from "@/components/Processo";
import Depoimentos from "@/components/Depoimentos";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Sobre />
        <TiposDeTemperos />
        <Diferenciais />
        <Processo />
        <Depoimentos />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
