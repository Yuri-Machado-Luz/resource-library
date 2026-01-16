/* Glow System - Main Hook */

import { useMemo } from "react";
import type { GlowConfig, GlowResult } from "./Glow.types";
import {
  getInitialGlow,
  getHoverGlow,
  getTapGlow,
  getPulseAnimation,
  getSpringTransition,
  getPulseTransition,
  getTapTransition,
} from "./Glow.helpers";
import { SCALE_PRESETS } from "./Glow.constants";

export interface UseGlowOptions extends GlowConfig {
  /** Scale amount for hover (default: 1.05) */
  hoverScale?: number;
  /** Scale amount for tap (default: 0.95) */
  tapScale?: number;
  /** Use preset scales: 'none' | 'subtle' | 'normal' | 'pronounced' */
  scalePreset?: keyof typeof SCALE_PRESETS;
}

/**
 * Hook universal para aplicar glow em componentes Motion
 *
 * @example
 * ```tsx
 * const glowProps = useGlow({
 *   colorVar: "--rgba-pri",
 *   mode: "pulse",
 *   intensities: { base: 16, hover: 24, tap: 28, pulse: 32 }
 * });
 *
 * <Motion.div {...glowProps}>Content</Motion.div>
 * ```
 */
export function useGlow(options: UseGlowOptions): GlowResult {
  const {
    colorVar,
    mode = "static",
    intensities,
    customEffect,
    motionProps,
    hoverScale,
    tapScale,
    scalePreset = "normal",
  } = options;

  return useMemo(() => {
    // Determinar scales (preset ou custom)
    const scales = scalePreset
      ? SCALE_PRESETS[scalePreset]
      : { hover: hoverScale ?? 1.05, tap: tapScale ?? 0.95 };

    // Glow inicial
    const initialGlow = getInitialGlow(
      colorVar,
      mode,
      intensities,
      customEffect,
    );

    // Transition base
    const baseTransition = motionProps?.transition ?? getSpringTransition();

    // WhileHover
    const defaultWhileHover = getHoverGlow(
      colorVar,
      mode,
      intensities,
      scales.hover,
    );
    const whileHover = motionProps?.whileHover ?? {
      ...defaultWhileHover,
      transition: baseTransition,
    };

    // WhileTap
    const defaultWhileTap = getTapGlow(colorVar, mode, intensities, scales.tap);
    const whileTap = motionProps?.whileTap ?? {
      ...defaultWhileTap,
      transition: getTapTransition(),
    };

    // Configuração para modo pulse
    let animateProps = {};
    let transition = baseTransition;

    if (mode === "pulse") {
      animateProps = getPulseAnimation(colorVar, intensities);
      transition = getPulseTransition();
    }

    return {
      style: {
        boxShadow: initialGlow?.boxShadow,
        ...(motionProps?.style || {}),
      },
      animate: animateProps,
      whileHover,
      whileTap,
      transition,
    };
  }, [
    colorVar,
    mode,
    intensities,
    customEffect,
    motionProps,
    hoverScale,
    tapScale,
    scalePreset,
  ]);
}
