import React from "react";
import { motion as Motion } from "motion/react";
import type { BadgesProps } from "./Badge.types";
import { useGlow } from "../Glow";
import {
  variants,
  base,
  glowIntensities,
  motionVariants,
} from "./Badge.constants";
import type { Variant } from "./Badge.types";

/* Mapeamento de variant para colorVar */
const variantColorMap: Record<Variant, string> = {
  default: "--rgba-main-white",
  primary: "--rgba-pri",
  secondary: "--rgba-sec",
  primaryOutline: "--rgba-pri",
  secondaryOutline: "--rgba-sec",
};

/* Component */
const Badges: React.FC<BadgesProps> = ({
  variant = "default",
  content = "Badge",
  motionProps,
  glowEffect: glowEffectProp,
  glowMode = "static",
  className = "",
}) => {
  // Usar hook universal de glow
  const glowProps = useGlow({
    colorVar: variantColorMap[variant],
    mode: glowMode,
    intensities: glowIntensities[variant],
    customEffect: glowEffectProp,
    motionProps,
    hoverScale: motionVariants.whileHover[variant].scale,
    tapScale: motionVariants.whileTap[variant].scale,
  });

  return (
    <Motion.div
      // className overrides base styles

      className={
        `${className}`
          ? `${variants[variant]} ${className}`.trim()
          : `${base} ${variants[variant]}`
      }
      {...glowProps}
    >
      {content}
    </Motion.div>
  );
};

export default Badges;
export { Badges };
