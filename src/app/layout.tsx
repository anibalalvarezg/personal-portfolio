import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ReducedMotionProvider } from "@/components/reduced-motion-provider";
import { I18nProvider } from "@/lib/i18n";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Register GSAP plugins once globally
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://anibalalvarez.dev"),
  title: {
    default: "Aníbal Álvarez | Ingeniero Civil en Informática",
    template: "%s | Aníbal Álvarez"
  },
  description: "Portafolio profesional de Aníbal Álvarez - Frontend Developer especializado en Angular, TypeScript, Python, Scrapy, AWS y Docker. Chile.",
  keywords: [
    "Frontend Developer", "Angular", "TypeScript", "TailwindCSS", "Python",
    "Scrapy", "AWS", "Docker", "Desarrollo Web",
    "Ingeniero Informático", "Chile", "Web Development", "Software Engineer",
    "Redis", "WebSockets", "NGXS", "SaaS"
  ],
  authors: [{ name: "Aníbal Álvarez" }],
  creator: "Aníbal Álvarez",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "es-CL": "/",
      "en-US": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    alternateLocale: "en_US",
    url: "/",
    title: "Aníbal Álvarez | Frontend Developer",
    description: "Especializado en Angular, TypeScript, Python, Scrapy, AWS y Docker. Construyendo aplicaciones SaaS escalables y sistemas de scraping distribuidos.",
    siteName: "Portafolio Aníbal Álvarez",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aníbal Álvarez - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aníbal Álvarez | Frontend Developer",
    description: "Portafolio profesional - Ingeniero Civil en Informática. Angular, TypeScript, Python, AWS, Docker.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#0a0a0a] text-[#e2e8f0]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <I18nProvider>
            <ReducedMotionProvider>
              {children}
            </ReducedMotionProvider>
          </I18nProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
