import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { site } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const themeInit = `(function(){try{var s=localStorage.getItem("theme");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark")}catch(e){}})();`;

const siteUrl = site.url ? new URL(site.url) : null;

export const metadata: Metadata = {
  title: {
    default: `${site.fullName} · Portfolio`,
    template: "%s · Portfolio",
  },
  description: `Portfolio of ${site.fullName} — ${site.status}.`,
  metadataBase: siteUrl ?? undefined,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: site.fullName,
    locale: "en_US",
    title: {
      default: `${site.fullName} · Portfolio`,
      template: "%s · Portfolio",
    },
    description: `Portfolio of ${site.fullName} — ${site.status}.`,
    ...(siteUrl ? { url: siteUrl.origin } : {}),
  },
  twitter: {
    card: "summary",
    title: `${site.fullName} · Portfolio`,
    description: `Portfolio of ${site.fullName} — ${site.status}.`,
  },
  ...(siteUrl ? { alternates: { canonical: "/" } } : {}),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f2ea" },
    { media: "(prefers-color-scheme: dark)", color: "#16140f" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInit}
        </Script>
        {children}
      </body>
    </html>
  );
}
