import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Philosophy from "@/components/Philosophy";
import Projects from "@/components/Projects";
import Career from "@/components/Career";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Stats />
        <Philosophy />
        <Projects />
        <Career />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
