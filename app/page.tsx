import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Writing from "@/components/Writing";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0c0c0c] min-h-screen">
      <Navbar />
      <Hero />
      <Work />
      <Experience />
      <Skills />
      <About />
      <Writing />
      <Contact />
      <Footer />
    </main>
  );
}
