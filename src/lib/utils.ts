import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Metadata } from "next";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface CARDS {
  id: string
  title: string
  Sdescription?: string
  Ldescription?: string
  IMG?: string
  href: string
}

export const metadata: Metadata = {
  description: "Zwol-Robotic es una empresa argentina especializada en el desarrollo y fabricación de robots industriales y soluciones de automatización para mejorar la eficiencia en la producción.",
  keywords: "robots industriales, automatización industrial, tecnología robótica, robots para fábricas, Argentina, Zwol-Robotic",
};
