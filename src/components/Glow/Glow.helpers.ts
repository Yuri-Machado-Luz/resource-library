/* Glow System - Helper Functions */

import type { GlowMode, GlowIntensities } from "./Glow.types";

/**
 * Cria uma string de boxShadow com intensidade e alpha específicos
 */
export function createGlowShadow(
  colorVar: string,
  intensity: number,
  alpha: number = 0.8,
): string {
  return `0 0 ${intensity}px rgba(var(${colorVar}), ${alpha})`;
}

/**
 * Retorna o glow inicial baseado no modo
 */
export function getInitialGlow(
  colorVar: string,
  mode: GlowMode,
  intensities: GlowIntensities,
  customEffect?: Record<string, any>,
) {
  // Se usuário passou customEffect, usa ele
  if (customEffect) return customEffect;

  // Se modo é 'none' ou 'hover-only', não aplica glow inicial
  if (mode === "none" || mode === "hover-only") {
    return undefined;
  }

  // Para 'pulse', inicia com intensidade do hover para transição natural
  if (mode === "pulse") {
    return { boxShadow: createGlowShadow(colorVar, intensities.hover, 0.9) };
  }

  // Para 'static', retorna glow base
  return { boxShadow: createGlowShadow(colorVar, intensities.base) };
}

/**
 * Retorna propriedades para whileHover
 */
export function getHoverGlow(
  colorVar: string,
  mode: GlowMode,
  intensities: GlowIntensities,
  scaleAmount: number = 1.05,
) {
  const alpha = mode === "hover-only" ? 0.8 : 0.9;

  return {
    scale: scaleAmount,
    boxShadow:
      mode === "none"
        ? undefined
        : createGlowShadow(colorVar, intensities.hover, alpha),
  };
}

/**
 * Retorna propriedades para whileTap
 */
export function getTapGlow(
  colorVar: string,
  mode: GlowMode,
  intensities: GlowIntensities,
  scaleAmount: number = 0.95,
) {
  return {
    scale: scaleAmount,
    boxShadow:
      mode === "none"
        ? undefined
        : createGlowShadow(colorVar, intensities.tap, 1),
  };
}

/**
 * Retorna animação de pulse
 */
export function getPulseAnimation(
  colorVar: string,
  intensities: GlowIntensities,
) {
  return {
    boxShadow: [
      createGlowShadow(colorVar, intensities.hover, 0.9),
      createGlowShadow(colorVar, intensities.base, 0.6),
      createGlowShadow(colorVar, intensities.hover, 0.9),
    ],
  };
}

/**
 * Retorna transition base para spring
 */
export function getSpringTransition(stiffness = 280, damping = 24) {
  return {
    type: "spring" as const,
    stiffness,
    damping,
  };
}

/**
 * Retorna transition específica para pulse
 */
export function getPulseTransition() {
  return {
    boxShadow: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
    scale: {
      type: "spring" as const,
      stiffness: 280,
      damping: 24,
    },
  };
}

/**
 * Retorna transition para tap
 */
export function getTapTransition() {
  return {
    type: "spring" as const,
    stiffness: 200,
    damping: 15,
  };
}
