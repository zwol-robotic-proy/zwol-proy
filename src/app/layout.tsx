import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zwol-Robotic",
  description: "Zwol-Robotic es una empresa argentina especializada en el desarrollo y fabricación de robots industriales y soluciones de automatización para mejorar la eficiencia en la producción.",
  keywords: "robots industriales, automatización industrial, tecnología robótica, robots para fábricas, Argentina, Zwol-Robotic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-419">
      <link rel="apple-touch-icon" href="/icon.png" sizes="120x120"/>
      <link rel="icon" href="/favicon.ico" />
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
