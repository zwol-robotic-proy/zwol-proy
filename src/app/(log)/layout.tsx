import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './styles.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Zwol | LogIn",
    description: "Zwol-Robotic es una empresa argentina especializada en el desarrollo y fabricación de robots industriales y soluciones de automatización para mejorar la eficiencia en la producción.",
    keywords: "robots industriales, automatización industrial, tecnología robótica, robots para fábricas, Argentina, Zwol-Robotic",
};

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es-419">
            <link rel="apple-touch-icon" href="/icon.png" sizes="120x120" />
            <link rel="icon" href="/favicon.ico" />
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}
