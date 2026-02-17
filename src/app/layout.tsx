import type { Metadata } from "next";
import {
  Playfair_Display,
  Cormorant_Garamond,
  Source_Sans_3,
  Libre_Baskerville
} from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Fidha Fathima M | Full-Stack Developer",
  description:
    "Full-Stack Developer crafting elegant web applications with React, Next.js, Node.js, and MongoDB. Passionate about clean code and beautiful user experiences.",
  keywords: [
    "Fidha Fathima", "Full Stack Developer", "MERN Stack Developer",
    "React Developer", "Next.js Developer", "Node.js Developer",
    "Web Developer", "TypeScript", "MongoDB"
  ],
  authors: [{ name: "Fidha Fathima M" }],
  openGraph: {
    title: "Fidha Fathima | Full-Stack Developer",
    description: "Crafting beautiful digital experiences with clean code and modern technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body 
        className={`${playfairDisplay.variable} ${cormorantGaramond.variable} ${sourceSans3.variable} ${libreBaskerville.variable} antialiased overflow-x-hidden`}
        suppressHydrationWarning
      >
        <CustomCursor />
        <Preloader />
        <div className="relative min-h-screen">
          <Navbar />
          <SmoothScroll>
            <main className="relative z-10">
              {children}
            </main>
          </SmoothScroll>
        </div>
      </body>
    </html>
  );
}
