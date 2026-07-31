import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/sections/Navbar";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
    </>
  );
}
