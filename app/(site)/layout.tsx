import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { PetMount } from "@/components/pets/PetMount";
import { PetProvider } from "@/components/pets/PetProvider";
import { Cursor } from "@/components/ui/Cursor";
import { TechnicalBackground } from "@/components/ui/TechnicalBackground";

export default function SiteLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <PetProvider>
      <TechnicalBackground />
      <SiteHeader />
      <main id="main-content" className="flex flex-1 flex-col">
        {children}
      </main>
      <SiteFooter />
      <Cursor />
      <PetMount />
    </PetProvider>
  );
}
