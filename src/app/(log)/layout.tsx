import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Log In",
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
            <head>
                <title>Log In</title>
                <meta name="description" content="Zwol-Robotic es una empresa argentina especializada en el desarrollo y fabricación de robots industriales y soluciones de automatización para mejorar la eficiencia en la producción." />
                <meta name="keywords" content="robots industriales, automatización industrial, tecnología robótica, robots para fábricas, Argentina, Zwol-Robotic" />
                <link rel="apple-touch-icon" href="/icon.png" sizes="120x120" />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}
