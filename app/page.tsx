import { About } from "@/components/sections/About";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/sections/Navbar";
import { Playground } from "@/components/sections/Playground";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Wayfinder } from "@/components/sections/Wayfinder";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Wayfinder />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Blog />
        <Playground />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
