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
  title: "Fidha Fathima M | MERN Stack Developer",
  description:
    "Full-Stack Developer (MERN) with strong hands-on experience building scalable and responsive web applications. Skilled in React, Node.js, Express, and MongoDB.",
  keywords: [
    "Fidha Fathima", "MERN Stack Developer", "Full Stack Developer",
    "React Developer", "Node.js Developer", "Web Developer", "Portfolio",
  ],
  authors: [{ name: "Fidha Fathima M" }],
  openGraph: {
    title: "Fidha Fathima M | MERN Stack Developer",
    description: "Full-Stack Developer building scalable web applications with React, Node.js, Express, and MongoDB.",
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
