import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/lib/i18n";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://mi-portfolio.com'),
  title: {
    default: "Aníbal Álvarez González | Ingeniero Civil en Informática",
    template: "%s | Aníbal Álvarez González"
  },
  description: "Portafolio profesional de Aníbal Álvarez González - Frontend Developer especializado en Angular, TypeScript y TailwindCSS con experiencia en desarrollo web escalable",
  keywords: ["Frontend Developer", "Angular", "TypeScript", "TailwindCSS", "Desarrollo Web", "Ingeniero Informático", "Chile", "Web Development", "Software Engineer"],
  authors: [{ name: "Aníbal Álvarez González" }],
  creator: "Aníbal Álvarez González",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
    languages: {
      'es-CL': '/',
      'en-US': '/',
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    alternateLocale: "en_US",
    url: '/',
    title: "Aníbal Álvarez González | Ingeniero Civil en Informática",
    description: "Frontend Developer especializado en Angular, TypeScript y TailwindCSS",
    siteName: "Portafolio Aníbal Álvarez",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aníbal Álvarez González | Frontend Developer",
    description: "Portafolio profesional - Ingeniero Civil en Informática",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider>
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}