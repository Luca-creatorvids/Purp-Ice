import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Headline-Font: fett & modern (Ersatz fuer Clash Display / Neue Montreal)
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

// Fliesstext-Font: klar & gut lesbar
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.purpice.com"),
  title: {
    default: "PURPICE – Iced Out Moissanite-Bezel-Kits & Schmuck aus München",
    template: "%s | PURPICE",
  },
  description:
    "PURPICE ist eine Schmuckmarke aus München, spezialisiert auf 'Iced Out' Moissanite-Bezel-Kits zum Selbstmontieren sowie Bracelets, Chains, Pendants und Earrings. Diamant-Optik zum fairen Preis.",
  keywords: [
    "Iced Out Bezel",
    "Moissanite Bezel Kit",
    "Moissanite Schmuck München",
    "PURPICE",
    "Iced Out Schmuck",
  ],
  openGraph: {
    title: "PURPICE – Iced Out. Made in Munich.",
    description:
      "Iced Out Moissanite-Bezel-Kits und Schmuck aus München. Gleicher Glanz wie Diamanten, fairer Preis.",
    url: "https://www.purpice.com",
    siteName: "PURPICE",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ice-black text-ice-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
