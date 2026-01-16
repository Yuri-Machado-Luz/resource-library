import React from "react";

/* Types */
type Variant =
  | "default"
  | "primary"
  | "primaryOutline"
  | "secondary"
  | "secondaryOutline";
type MotionProps = Record<string, any>;
type GlowEffect = Record<string, any>;
type GlowMode = "static" | "pulse" | "hover-only" | "none";

interface BadgesProps {
  variant?: Variant;
  content?: React.ReactNode;
  motionProps?: MotionProps;
  glowEffect?: GlowEffect;
  glowMode?: GlowMode;
  className?: string;
}

export type { Variant, MotionProps, GlowEffect, GlowMode, BadgesProps };
