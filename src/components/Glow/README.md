# Glow System - Sistema Universal de Glow

Sistema reutilizável para aplicar efeitos de glow em qualquer componente Motion.

## Instalação

```typescript
import { useGlow, GLOW_PRESETS, COLOR_VARS } from "@components";
```

## Uso Básico

### Exemplo Simples

```typescript
import { motion as Motion } from "motion/react";
import { useGlow, COLOR_VARS, GLOW_PRESETS } from "@components";

const MyButton = () => {
  const glowProps = useGlow({
    colorVar: COLOR_VARS.primary,
    mode: "pulse",
    intensities: GLOW_PRESETS.medium,
  });

  return (
    <Motion.button {...glowProps} className="px-4 py-2 bg-pri text-white rounded">
      Click Me
    </Motion.button>
  );
};
```

### Exemplo com Configuração Customizada

```typescript
const glowProps = useGlow({
  colorVar: "--rgba-custom-color",
  mode: "hover-only",
  intensities: {
    base: 12,
    hover: 20,
    tap: 24,
    pulse: 28,
  },
  hoverScale: 1.1,
  tapScale: 0.9,
});
```

### Exemplo com Preset de Scale

```typescript
const glowProps = useGlow({
  colorVar: COLOR_VARS.secondary,
  mode: "static",
  intensities: GLOW_PRESETS.subtle,
  scalePreset: "pronounced", // 'none' | 'subtle' | 'normal' | 'pronounced'
});
```

## Modos de Glow

### `static`

Glow fixo, sempre visível.

```typescript
mode: "static";
```

### `pulse`

Glow pulsante em loop infinito.

```typescript
mode: "pulse";
```

### `hover-only`

Glow aparece apenas ao fazer hover.

```typescript
mode: "hover-only";
```

### `none`

Sem glow, apenas animações de scale.

```typescript
mode: "none";
```

## Presets de Intensidade

### `GLOW_PRESETS.subtle`

Para elementos pequenos e discretos.

```typescript
{ base: 8, hover: 12, tap: 6, pulse: 16 }
```

### `GLOW_PRESETS.normal`

Uso geral.

```typescript
{ base: 12, hover: 16, tap: 8, pulse: 20 }
```

### `GLOW_PRESETS.medium`

Badges e botões.

```typescript
{ base: 16, hover: 24, tap: 28, pulse: 32 }
```

### `GLOW_PRESETS.intense`

Elementos destacados.

```typescript
{ base: 20, hover: 32, tap: 36, pulse: 40 }
```

### `GLOW_PRESETS.hero`

Hero elements.

```typescript
{ base: 24, hover: 40, tap: 44, pulse: 48 }
```

## Variáveis de Cor

Use `COLOR_VARS` para acesso rápido às cores do tema:

```typescript
COLOR_VARS.primary; // "--rgba-pri"
COLOR_VARS.primaryLight; // "--rgba-pri-light"
COLOR_VARS.primaryDark; // "--rgba-pri-dark"
COLOR_VARS.secondary; // "--rgba-sec"
COLOR_VARS.secondaryDull; // "--rgba-sec-dull"
COLOR_VARS.secondaryDark; // "--rgba-sec-dark"
COLOR_VARS.white; // "--rgba-main-white"
COLOR_VARS.gray; // "--rgba-main-gray"
COLOR_VARS.black; // "--rgba-main-black"
```

## Presets de Scale

Use `SCALE_PRESETS` ou defina manualmente:

```typescript
SCALE_PRESETS.none; // { hover: 1, tap: 1 }
SCALE_PRESETS.subtle; // { hover: 1.02, tap: 0.98 }
SCALE_PRESETS.normal; // { hover: 1.05, tap: 0.95 }
SCALE_PRESETS.pronounced; // { hover: 1.1, tap: 0.9 }
```

## Exemplos Avançados

### Card com Glow

```typescript
const GlowCard = ({ children }) => {
  const glowProps = useGlow({
    colorVar: COLOR_VARS.secondary,
    mode: "hover-only",
    intensities: GLOW_PRESETS.normal,
    scalePreset: "subtle",
  });

  return (
    <Motion.div
      {...glowProps}
      className="p-6 bg-gray-800 rounded-lg"
    >
      {children}
    </Motion.div>
  );
};
```

### Button com Glow Intenso

```typescript
const HeroButton = ({ children, onClick }) => {
  const glowProps = useGlow({
    colorVar: COLOR_VARS.primary,
    mode: "pulse",
    intensities: GLOW_PRESETS.hero,
    scalePreset: "pronounced",
  });

  return (
    <Motion.button
      {...glowProps}
      onClick={onClick}
      className="px-8 py-4 bg-pri text-white rounded-full text-xl font-bold"
    >
      {children}
    </Motion.button>
  );
};
```

### Icon com Glow Sutil

```typescript
const GlowIcon = ({ icon }) => {
  const glowProps = useGlow({
    colorVar: COLOR_VARS.white,
    mode: "static",
    intensities: GLOW_PRESETS.subtle,
    scalePreset: "none",
  });

  return (
    <Motion.div {...glowProps} className="w-6 h-6">
      {icon}
    </Motion.div>
  );
};
```

## Customização Completa

Para controle total, você pode passar `customEffect` e `motionProps`:

```typescript
const glowProps = useGlow({
  colorVar: COLOR_VARS.primary,
  mode: "static",
  intensities: GLOW_PRESETS.medium,
  customEffect: {
    boxShadow: "0 0 20px rgba(255, 0, 64, 0.8), 0 0 40px rgba(255, 0, 64, 0.4)",
  },
  motionProps: {
    whileHover: { scale: 1.2, rotate: 5 },
    whileTap: { scale: 0.8, rotate: -5 },
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
});
```

## API Completa

### `useGlow(options: UseGlowOptions): GlowResult`

**Options:**

- `colorVar` (string, required): Variável CSS RGB (ex: "--rgba-pri")
- `mode` (GlowMode, default: "static"): Modo do glow
- `intensities` (GlowIntensities, required): Intensidades para cada estado
- `customEffect` (object, optional): Efeito customizado que sobrescreve mode
- `motionProps` (object, optional): Props customizadas do Motion
- `hoverScale` (number, optional): Scale no hover
- `tapScale` (number, optional): Scale no tap
- `scalePreset` ('none' | 'subtle' | 'normal' | 'pronounced', optional): Preset de scale

**Returns:**

```typescript
{
  style: Record<string, any>; // Estilos iniciais
  animate: Record<string, any>; // Props de animação
  whileHover: Record<string, any>; // Props de hover
  whileTap: Record<string, any>; // Props de tap
  transition: Record<string, any>; // Configuração de transition
}
```

## TypeScript

Todos os tipos estão exportados:

```typescript
import type {
  GlowMode,
  GlowIntensities,
  GlowConfig,
  GlowResult,
  UseGlowOptions,
} from "@components";
```
