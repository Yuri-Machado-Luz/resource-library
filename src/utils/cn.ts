import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function que combina clsx e tailwind-merge
 *
 * Permite composição condicional de classes Tailwind sem conflitos
 *
 * @example
 * ```tsx
 * cn("px-2 py-1", condition && "bg-blue-500", "text-white")
 * // "px-2 py-1 bg-blue-500 text-white" (se condition = true)
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
