import type { Metadata } from "next";
import { AboutCapsule } from "@/components/sections/AboutCapsule";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { LabBanner } from "@/components/sections/LabBanner";
import { Projects } from "@/components/sections/Projects";
import { SkillsStrip } from "@/components/sections/SkillsStrip";
import { site } from "@/data/site";

export const metadata: Metadata = {
  description: site.intro,
};

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <SkillsStrip />
      <AboutCapsule />
      <LabBanner />
      <Blog />
      <Contact />
    </>
  );
}
