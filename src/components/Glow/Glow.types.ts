/* Glow System - Universal Types */

export type GlowMode = "static" | "pulse" | "hover-only" | "none";

export interface GlowIntensities {
  base: number;
  hover: number;
  tap: number;
  pulse: number;
}

export interface GlowConfig {
  /** CSS variable name for RGB color (e.g., "--rgba-pri") */
  colorVar: string;
  /** Glow mode */
  mode?: GlowMode;
  /** Intensity values for different states */
  intensities: GlowIntensities;
  /** Custom glow effect (overrides mode) */
  customEffect?: Record<string, any>;
  /** Custom motion props */
  motionProps?: Record<string, any>;
}

export interface GlowResult {
  /** Initial style to apply */
  style: Record<string, any>;
  /** Animation props for pulse mode */
  animate: Record<string, any>;
  /** WhileHover animation */
  whileHover: Record<string, any>;
  /** WhileTap animation */
  whileTap: Record<string, any>;
  /** Transition configuration */
  transition: Record<string, any>;
}
