import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { ogImage, site } from "@/data/site";
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

const defaultTitle = `${site.fullName} — ${site.status}`;
const defaultDescription = `Portfolio of ${site.fullName} — ${site.status}. ${site.headline}`;

export const metadata: Metadata = {
  metadataBase: siteUrl ?? undefined,
  title: {
    default: defaultTitle,
    template: `%s — ${site.fullName}`,
  },
  description: defaultDescription,
  applicationName: site.fullName,
  authors: [{ name: site.fullName, url: site.githubUrl }],
  creator: site.fullName,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: "dvvDzx77g5hLCRAdO-ZaCOaGTP1yEEKIjF_AXn8Ys3Y",
  },
  openGraph: {
    type: "website",
    siteName: site.fullName,
    locale: "en_US",
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
};

const structuredData = siteUrl
  ? {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          name: site.fullName,
          url: site.url,
          email: site.email,
          sameAs: [site.githubUrl, site.linkedinUrl],
          knowsAbout: site.focus,
        },
        {
          "@type": "WebSite",
          name: site.fullName,
          url: site.url,
          inLanguage: "en",
        },
      ],
    }
  : null;

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
        {structuredData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        )}
        {children}
      </body>
    </html>
  );
}
