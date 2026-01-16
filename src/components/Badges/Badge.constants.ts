/* Constants shared by Badges and helpers */
import type { Variant, MotionProps } from "./Badge.types";

export const variants: Record<Variant, string> = {
  default: "bg-gray-200 text-gray-800",
  primary: "bg-pri text-white",
  secondary: "bg-sec text-black/80",
  primaryOutline: "border-2 border-pri text-pri bg-transparent",
  secondaryOutline: "border-2 border-sec text-sec bg-transparent",
};

export const motionVariants: {
  whileHover: Record<Variant, MotionProps>;
  whileTap: Record<Variant, MotionProps>;
} = {
  whileHover: {
    default: { scale: 1.01 },
    primary: { scale: 1.05 },
    secondary: { scale: 1.05 },
    primaryOutline: { scale: 1.05 },
    secondaryOutline: { scale: 1.05 },
  },
  whileTap: {
    default: { scale: 0.99 },
    primary: { scale: 0.95 },
    secondary: { scale: 0.95 },
    primaryOutline: { scale: 0.95 },
    secondaryOutline: { scale: 0.95 },
  },
};

// Intensidades de glow para cada variant e estado
export const glowIntensities: Record<
  Variant,
  { base: number; hover: number; tap: number; pulse: number }
> = {
  default: { base: 12, hover: 16, tap: 8, pulse: 20 },
  primary: { base: 16, hover: 24, tap: 28, pulse: 32 },
  secondary: { base: 14, hover: 20, tap: 24, pulse: 28 },
  primaryOutline: { base: 16, hover: 24, tap: 28, pulse: 32 },
  secondaryOutline: { base: 14, hover: 20, tap: 24, pulse: 28 },
};

export const base =
  "inline-block px-5 py-2 rounded-full text-lg font-medium select-none cursor-pointer my-5";
