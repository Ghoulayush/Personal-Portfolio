import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/sections/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
      </main>
    </>
  );
}
