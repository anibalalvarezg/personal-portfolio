import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aníbal Álvarez González | Ingeniero Civil en Informática",
  description: "Portafolio profesional de Aníbal Álvarez González - Frontend Developer especializado en Angular, TypeScript y TailwindCSS con experiencia en desarrollo web escalable",
  keywords: ["Frontend Developer", "Angular", "TypeScript", "TailwindCSS", "Desarrollo Web", "Ingeniero Informático", "Chile"],
  authors: [{ name: "Aníbal Álvarez González" }],
  creator: "Aníbal Álvarez González",
  openGraph: {
    type: "website",
    locale: "es_CL",
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}