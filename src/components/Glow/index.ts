/* Glow System - Barrel Export */

// Main hook
export { useGlow } from "./useGlow";
export type { UseGlowOptions } from "./useGlow";

// Types
export type {
  GlowMode,
  GlowIntensities,
  GlowConfig,
  GlowResult,
} from "./Glow.types";

// Constants & Presets
export { GLOW_PRESETS, COLOR_VARS, SCALE_PRESETS } from "./Glow.constants";

// Helper functions (para uso avançado)
export {
  createGlowShadow,
  getInitialGlow,
  getHoverGlow,
  getTapGlow,
  getPulseAnimation,
  getSpringTransition,
  getPulseTransition,
  getTapTransition,
} from "./Glow.helpers";
