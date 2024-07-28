import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function Technica({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-419">
      <title>Atención Técnica</title>
      <meta name="description" content="Zwol-Robotic es una empresa argentina especializada en el desarrollo y fabricación de robots industriales y soluciones de automatización para mejorar la eficiencia en la producción." />
      <meta name="keywords" content="robots industriales, automatización industrial, tecnología robótica, robots para fábricas, Argentina, Zwol-Robotic" />
      <link rel="apple-touch-icon" href="/icon.png" sizes="120x120"/>
      <link rel="icon" href="/favicon.ico" />
      <body className={`${inter.className} web-scrollbar:scroll-color web-scrollbar-thumb:scroll-thumb-color`}>
        {children} 
        </body>
    </html>
  );
};