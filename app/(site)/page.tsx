import type { Metadata } from "next";
import { Explore } from "@/components/home/Explore";
import { FeaturedProject } from "@/components/home/FeaturedProject";
import { StatusStrip } from "@/components/home/StatusStrip";
import { Hero } from "@/components/sections/Hero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  description: site.intro,
};

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProject />
      <Explore />
      <StatusStrip />
    </>
  );
}
