/* Glow System - Preset Configurations */

import type { GlowIntensities } from "./Glow.types";

/**
 * Presets de intensidades de glow para diferentes tamanhos/propósitos
 */
export const GLOW_PRESETS: Record<string, GlowIntensities> = {
  // Glow sutil para elementos pequenos
  subtle: {
    base: 8,
    hover: 12,
    tap: 6,
    pulse: 16,
  },

  // Glow normal para uso geral
  normal: {
    base: 12,
    hover: 16,
    tap: 8,
    pulse: 20,
  },

  // Glow médio para badges e botões
  medium: {
    base: 16,
    hover: 24,
    tap: 28,
    pulse: 32,
  },

  // Glow intenso para elementos destacados
  intense: {
    base: 20,
    hover: 32,
    tap: 36,
    pulse: 40,
  },

  // Glow forte para hero elements
  hero: {
    base: 24,
    hover: 40,
    tap: 44,
    pulse: 48,
  },
};

/**
 * Mapeamento de variáveis CSS de cores comuns
 */
export const COLOR_VARS = {
  primary: "--rgba-pri",
  primaryLight: "--rgba-pri-light",
  primaryDark: "--rgba-pri-dark",
  secondary: "--rgba-sec",
  secondaryDull: "--rgba-sec-dull",
  secondaryDark: "--rgba-sec-dark",
  white: "--rgba-main-white",
  gray: "--rgba-main-gray",
  black: "--rgba-main-black",
} as const;

/**
 * Configurações de scale padrão para hover/tap
 */
export const SCALE_PRESETS = {
  none: { hover: 1, tap: 1 },
  subtle: { hover: 1.02, tap: 0.98 },
  normal: { hover: 1.05, tap: 0.95 },
  pronounced: { hover: 1.1, tap: 0.9 },
} as const;
