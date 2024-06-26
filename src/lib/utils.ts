import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface CARDS {
  id: string
  title: string
  Sdescription?: string
  Ldescription?: string
  IMG?: string
  href?: string
}