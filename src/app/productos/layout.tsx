import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Productos",
    description: "Zwol-Robotic es una empresa argentina especializada en el desarrollo y fabricación de robots industriales y soluciones de automatización para mejorar la eficiencia en la producción.",
    keywords: "robots industriales, automatización industrial, tecnología robótica, robots para fábricas, Argentina, Zwol-Robotic",
};

export default function ProdutsLayout(props: {
    children: React.ReactNode;
    modal: React.ReactNode;
  }) {
    return (
        <html lang="es-419">
            <link rel="apple-touch-icon" href="/icon.png" sizes="120x120" />
            <link rel="icon" href="/favicon.ico" />
            <body className={inter.className}>
                {props.children}
                {props.modal}
                <div id="modal-products" />
            </body>
        </html>
    );
}
