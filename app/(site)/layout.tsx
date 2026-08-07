import type { ReactNode } from "react";
import Script from "next/script";
import { BootScreen } from "@/components/boot/BootScreen";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { PetMount } from "@/components/pets/PetMount";
import { PetProvider } from "@/components/pets/PetProvider";
import { Cursor } from "@/components/ui/Cursor";
import { TechnicalBackground } from "@/components/ui/TechnicalBackground";

const bootSkip = `(function(){try{if(sessionStorage.getItem("ayushos.booted")==="1"||window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.classList.add("boot-skip")}}catch(e){}})();`;

export default function SiteLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <PetProvider>
      <Script id="boot-skip" strategy="beforeInteractive">
        {bootSkip}
      </Script>
      <noscript>
        <style>{".boot-overlay{display:none!important}"}</style>
      </noscript>
      <TechnicalBackground />
      <SiteHeader />
      <main id="main-content" className="flex flex-1 flex-col">
        {children}
      </main>
      <SiteFooter />
      <Cursor />
      <PetMount />
      <BootScreen />
    </PetProvider>
  );
}
