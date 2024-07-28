import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-419">
      <link rel="apple-touch-icon" href="/icon.png" sizes="120x120"/>
      <link rel="icon" href="/favicon.ico" />
      <body className={`${inter.className} web-scrollbar:scroll-color web-scrollbar-thumb:scroll-thumb-color`}>
        {children} 
        </body>
    </html>
  );
}
