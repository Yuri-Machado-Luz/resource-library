# Documentação Técnica - Yuma UI

Documentação pessoal para entender o funcionamento interno, personalização e manutenção da biblioteca.

---

## Arquitetura do Projeto

### Estrutura de Pastas

```
resource-library/
├── public/assets/           # Assets estáticos (imagens, fonts)
├── src/
│   ├── app/                 # Aplicação principal
│   │   ├── pages/           # Páginas (Home, etc)
│   │   └── App.tsx          # App root com rotas
│   ├── components/
│   │   ├── ui/              # Componentes da biblioteca (Button, Card, etc)
│   │   └── website/         # Componentes do site docs (Header, CodePreview)
│   ├── lib/                 # Utilitários (cn function)
│   ├── styles/              # CSS global e tema
│   │   ├── index.css        # Entry point
│   │   ├── theme.css        # Variáveis CSS
│   │   └── components.css   # Classes customizadas
│   └── main.tsx             # Entry point
├── DOCS.md                  # Esta documentação
└── README.md                # Documentação pública
```

### Princípios

- **src/components/ui/** - Componentes puros, sem dependências do site
- **src/components/website/** - Componentes específicos da documentação
- **src/app/** - Páginas e estrutura da aplicação
- **src/styles/** - Tema centralizado e isolado

---

## Sistema de Tema

### Arquivo: src/styles/theme.css

Todas as variáveis CSS do projeto:

**Fontes:**

- `--font-sans`: Josefin Sans (texto)
- `--font-logo`: Changa (logo e títulos)
- `--font-accent`: Tenor Sans (acentos)

**Cores Principais:**

- `--color-hex-pri`: #ff0040 (Rosa vibrante)
- `--color-hex-sec`: #00ffff (Ciano)
- `--color-hex-main-black`: #0c090d (Fundo)
- `--color-hex-main-white`: #f2f4f3 (Texto)

**Cores OKLCH:** Versões modernas com melhor interpolação

**Typography Scale:** Variáveis responsivas de `--text-xxs` até `--text-6xl`

### Arquivo: src/styles/components.css

Classes utilitárias customizadas:

**Glass Morphism:**

```css
.glass-card {
  backdrop-filter: blur(12px);
  background: rgba(26, 26, 26, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
```

**Glow Effects:**

- `.glow-pri` - Brilho rosa
- `.glow-sec` - Brilho ciano
- `.text-glow-pri` / `.text-glow-sec` - Brilho no texto

**Animações:**

- `.animated-badge` - Animação de pulsação

### Mudando o Tema

1. Abra `src/styles/theme.css`
2. Altere as variáveis `--color-hex-pri` e `--color-hex-sec`
3. As mudanças se propagam automaticamente

Exemplo (Tema Verde/Roxo):

```css
--color-hex-pri: #00ff88;
--color-hex-sec: #a855f7;
```

---

## Componentes UI

Todos os componentes seguem o mesmo padrão:

### Estrutura Padrão

```tsx
import React from 'react';
import { cn } from '../../lib/utils';

export interface ComponentProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'secondary';
}

const Component = React.forwardRef<HTMLElement, ComponentProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    return (
      <element
        ref={ref}
        className={cn('base-styles', variants[variant], className)}
        {...props}
      />
    );
  }
);

Component.displayName = 'Component';
export default Component;
```

**Padrões:**

- `forwardRef` para permitir ref
- Props tipadas com interface exportada
- Função `cn()` para merge de classes Tailwind
- `displayName` para debugging

### Button

**Props:**

- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- `glow`: boolean

**Uso:**

```tsx
import { Button } from './components/ui';
<Button variant="primary" size="lg" glow>Clique</Button>
```

### Card

**Props:**

- `glass`: boolean (glass morphism, padrão: true)
- `glow`: 'primary' | 'secondary' | 'none'

**Uso:**

```tsx
import { Card } from './components/ui';
<Card glass glow="primary">Conteúdo</Card>
```

### Badge

**Props:**

- `variant`: 'primary' | 'secondary' | 'neutral'
- `animated`: boolean

**Uso:**

```tsx
import { Badge } from './components/ui';
<Badge variant="primary" animated>Beta</Badge>
```

### Input

**Props:**

- `error`: boolean
- Props nativas de input

**Uso:**

```tsx
import { Input } from './components/ui';
<Input placeholder="Email" error={hasError} />
```

### Container

**Props:**

- `size`: 'sm' | 'md' | 'lg' | 'full'
- `centered`: boolean (mx-auto)

**Uso:**

```tsx
import { Container } from './components/ui';
<Container size="lg" centered>Conteúdo</Container>
```

---

## Componentes do Site

### Header

Navbar fixo com navegação.

**Localização:** `src/components/website/Header.tsx`

**Customização:** Adicione/remova links editando o JSX

### CodePreview

Exibe código com botão copiar.

**Props:**

- `code`: string
- `language`: string (padrão: 'tsx')

**Uso:**

```tsx
<CodePreview code={`import { Button } from './ui';`} language="tsx" />
```

### ComponentDemo

Container de demonstração com tabs Preview/Code.

**Props:**

- `title`: string
- `description`: string
- `preview`: ReactNode
- `code`: string

**Uso:**

```tsx
<ComponentDemo
  title="Button"
  description="Botão com variantes"
  preview={<Button>Click</Button>}
  code={`<Button>Click</Button>`}
/>
```

---

## Adicionar Novos Componentes

### 1. Criar Arquivo

```bash
touch src/components/ui/NewComponent.tsx
```

### 2. Estrutura Base

```tsx
import React from 'react';
import { cn } from '../../lib/utils';

export interface NewComponentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'special';
}

const NewComponent = React.forwardRef<HTMLDivElement, NewComponentProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variants = {
      default: 'bg-gray-800 text-white',
      special: 'bg-gradient-to-r from-[var(--hex-pri)] to-[var(--hex-sec)]',
    };

    return (
      <div
        ref={ref}
        className={cn('p-4 rounded-lg', variants[variant], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

NewComponent.displayName = 'NewComponent';
export default NewComponent;
```

### 3. Exportar

Adicione em `src/components/ui/index.ts`:

```tsx
export { default as NewComponent } from './NewComponent';
export type { NewComponentProps } from './NewComponent';
```

### 4. Adicionar Demo

Em `src/app/pages/Home.tsx`, adicione:

```tsx
<ComponentDemo
  title="NewComponent"
  description="Descrição"
  preview={<NewComponent variant="special">Teste</NewComponent>}
  code={`<NewComponent variant="special">Teste</NewComponent>`}
/>
```

---

## Personalização

### Alterar Fonte

1. Import no Google Fonts em `src/styles/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=SuaFonte&display=swap');
```

1. Altere em `src/styles/theme.css`:

```css
--font-sans: 'SuaFonte', sans-serif;
```

### Adicionar Tamanho de Texto

Em `src/styles/theme.css`:

```css
--text-10xl: clamp(8rem, 8rem + 5vw, 12rem);
```

Uso:

```tsx
<h1 className="text-[length:var(--text-10xl)]">Título</h1>
```

### Nova Variante de Botão

Em `src/components/ui/Button.tsx`:

```tsx
const variants = {
  // ... existentes
  danger: 'bg-red-600 text-white hover:bg-red-700',
};
```

Atualize tipo:

```tsx
variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
```

---

## Assets e Recursos

### Imagens

1. Coloque em `public/assets/`:

```
public/assets/logo.png
```

1. Use:

```tsx
<img src={import.meta.env.DEV ? '/assets/logo.png' : '/resource-library/assets/logo.png'} alt="Logo" />
```

Ou melhor, crie um helper:

```tsx
// src/lib/utils.ts
export const asset = (path: string) => {
  const base = import.meta.env.DEV ? '' : '/resource-library';
  return `${base}${path}`;
};

// Uso
<img src={asset('/assets/logo.png')} alt="Logo" />
```

### Ícones

Usa **Lucide React**:

```tsx
import { IconName } from 'lucide-react';
<IconName size={24} color="var(--hex-pri)" />
```

Catálogo: <https://lucide.dev>

### Fontes Locais

1. Coloque em `public/assets/fonts/CustomFont.woff2`

2. Declare em `src/styles/theme.css`:

```css
@font-face {
  font-family: 'CustomFont';
  src: url('/resource-library/assets/fonts/CustomFont.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}
```

1. Use:

```css
--font-custom: 'CustomFont', sans-serif;
```

---

## Build e Deploy

### Desenvolvimento

```bash
npm run dev
```

Abre em `http://localhost:5173/`

### Build

```bash
npm run build
```

Gera `dist/` otimizado.

### Preview do Build

```bash
npm run preview
```

### Deploy GitHub Pages (Manual)

1. Build: `npm run build`
2. Crie branch `gh-pages`
3. Copie conteúdo de `dist/` para root do branch
4. Push
5. Settings > Pages > Source: Branch gh-pages

### Deploy Automático

Instale pacote:

```bash
npm install --save-dev gh-pages
```

Adicione script em `package.json`:

```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

Deploy:

```bash
npm run deploy
```

---

## Troubleshooting

### Tailwind não aplica estilos

1. Verifique `tailwind.config.js` > `content`
2. Reinicie dev server
3. Delete `node_modules/.vite`

### Fontes não carregam

Certifique-se do import em `src/styles/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=...');
```

### Build falha

Execute linter:

```bash
npm run lint:fix
```

### Erro de path modules

Não há path aliases. Use imports relativos:

```tsx
// ✅ Correto
import { Button } from '../../components/ui';

// ❌ Errado
import { Button } from '@/components/ui';
```

---

## Próximos Passos

- [ ] Syntax highlighting no CodePreview (Shiki)
- [ ] Sistema de Registry para metadados
- [ ] Mais componentes (Modal, Dropdown, Tooltip, Tabs)
- [ ] Dark/Light mode toggle
- [ ] Animações com Motion
- [ ] Mobile responsive
- [ ] Search de componentes
- [ ] Playground interativo

---

**Autor:** Yuri Machado Luz (Yuma)
**Última atualização:** Janeiro 2026
