import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const ebGaramond = EB_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Fidha Fathima M | Muslimah Developer Rooted in Faith",
  description:
    "A Muslimah Full-Stack Developer crafting digital solutions with ikhlas (sincerity), combining technical excellence in MERN stack with Islamic values. Building technology that serves the ummah.",
  keywords: [
    "Fidha Fathima", "Muslimah Developer", "MERN Stack Developer", "Full Stack Developer",
    "React Developer", "Node.js Developer", "Web Developer", "Islamic Portfolio",
    "Ethical Tech", "Faith-based Developer",
  ],
  authors: [{ name: "Fidha Fathima M" }],
  openGraph: {
    title: "Fidha Fathima | Muslimah Developer Rooted in Faith",
    description: "Crafting digital tapestry with ikhlas — Full-Stack Developer combining technical excellence with Islamic values.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <Preloader />
        <div className={`${ebGaramond.variable} ${inter.variable} relative min-h-screen overflow-x-hidden`}>
          <Navbar />
          <CustomCursor />
          <div className="noise-overlay" />
          <SmoothScroll>
            <main className="relative">
              {children}
            </main>
          </SmoothScroll>
        </div>
      </body>
    </html>
  );
}
