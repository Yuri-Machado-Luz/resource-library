import type { Variant, GlowEffect, MotionProps, GlowMode } from "./Badge.types";
import { motionVariants, glowIntensities } from "./Badge.constants";

/* Helpers */

// Retorna a variável CSS RGB correta para cada variant
function getRgbVariable(variant: Variant): string {
  const rgbMap: Record<Variant, string> = {
    default: "--rgba-main-white",
    primary: "--rgba-pri",
    secondary: "--rgba-sec",
    primaryOutline: "--rgba-pri",
    secondaryOutline: "--rgba-sec",
  };
  return rgbMap[variant];
}

// Cria boxShadow com intensidade específica
function createGlowShadow(
  variant: Variant,
  intensity: number,
  alpha: number = 0.8,
): string {
  const rgbVar = getRgbVariable(variant);
  return `0 0 ${intensity}px rgba(var(${rgbVar}), ${alpha})`;
}

// Retorna o glow aplicado baseado no modo
function getAppliedGlow(
  variant: Variant,
  glowMode: GlowMode,
  glowProp?: GlowEffect,
) {
  // Se usuário passou glowEffect customizado, usa ele
  if (glowProp) return glowProp;

  // Se modo é 'none' ou 'hover-only', não aplica glow inicial
  if (glowMode === "none" || glowMode === "hover-only") {
    return undefined;
  }

  // Para 'pulse', inicia com intensidade do hover para transição natural
  if (glowMode === "pulse") {
    const intensity = glowIntensities[variant].hover;
    return { boxShadow: createGlowShadow(variant, intensity, 0.9) };
  }

  // Para 'static', retorna glow base
  const intensity = glowIntensities[variant].base;
  return { boxShadow: createGlowShadow(variant, intensity) };
}

// Retorna transition base
function getBaseTransition(motionProps?: MotionProps) {
  return (
    motionProps?.transition ?? {
      type: "spring",
      stiffness: 280,
      damping: 24,
    }
  );
}

// Retorna propriedades para whileHover
function getDefaultWhileHover(
  variant: Variant,
  glowMode: GlowMode,
  baseTransition: any,
) {
  const intensity = glowIntensities[variant].hover;
  const alpha = glowMode === "hover-only" ? 0.8 : 0.9;

  return {
    ...motionVariants.whileHover[variant],
    boxShadow:
      glowMode === "none"
        ? undefined
        : createGlowShadow(variant, intensity, alpha),
    transition: baseTransition,
  };
}

// Retorna propriedades para whileTap
function getDefaultWhileTap(variant: Variant, glowMode: GlowMode) {
  const intensity = glowIntensities[variant].tap;

  return {
    ...motionVariants.whileTap[variant],
    boxShadow:
      glowMode === "none" ? undefined : createGlowShadow(variant, intensity, 1),
    transition: { type: "spring", stiffness: 200, damping: 15 },
  };
}

// Retorna animação de pulse (para glowMode='pulse')
function getPulseAnimation(variant: Variant) {
  const { base, hover } = glowIntensities[variant];

  return {
    boxShadow: [
      createGlowShadow(variant, hover, 0.9),
      createGlowShadow(variant, base, 0.6),
      createGlowShadow(variant, hover, 0.9),
    ],
  };
}

function getPulseTransition() {
  return {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  };
}

export {
  getAppliedGlow,
  getBaseTransition,
  getDefaultWhileHover,
  getDefaultWhileTap,
  getPulseAnimation,
  getPulseTransition,
};
