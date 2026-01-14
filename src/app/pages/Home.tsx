<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> origin/master
import { Button, Card, Badge, Input, Container } from '../../components/ui';
import ComponentDemo from '../../components/website/ComponentDemo';
import { Github, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--hex-pri)]/10 via-transparent to-[var(--hex-sec)]/10"></div>
        
        <Container centered className="relative z-10">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="primary" animated>
              <Sparkles size={16} />
              Beta v0.1.0
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold font-[var(--font-logo)] text-glow-pri">
              YUMA <span className="text-[var(--hex-sec)]">UI</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
              Biblioteca moderna de componentes React com tema dark cyberpunk.
              Copy & Paste. Sem instalação.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button size="lg" glow>
                <a href="#components">Explorar Componentes</a>
              </Button>
              <Button variant="outline" size="lg">
                <Github size={20} className="mr-2" />
                <a 
                  href="https://github.com/Yuri-Machado-Luz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Components Section */}
      <section id="components" className="py-20 px-4">
        <Container centered>
          <div className="space-y-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[var(--font-logo)]">
                Componentes
              </h2>
              <p className="text-gray-400 text-lg">
                Copie e cole componentes prontos para usar
              </p>
            </div>

            {/* Button Demo */}
            <ComponentDemo
              title="Button"
              description="Botão com múltiplas variantes e tamanhos"
              preview={
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="primary" glow>With Glow</Button>
                </div>
              }
              code={`import { Button } from './components/ui';

<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="primary" glow>With Glow</Button>`}
            />

            {/* Card Demo */}
            <ComponentDemo
              title="Card"
              description="Card com glass morphism e efeitos de glow"
              preview={
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
                  <Card>
                    <h3 className="text-xl font-bold mb-2">Card Padrão</h3>
                    <p className="text-gray-400">Com glass morphism</p>
                  </Card>
                  <Card glow="primary">
                    <h3 className="text-xl font-bold mb-2">Card Primary</h3>
                    <p className="text-gray-400">Com glow rosa</p>
                  </Card>
                  <Card glow="secondary">
                    <h3 className="text-xl font-bold mb-2">Card Secondary</h3>
                    <p className="text-gray-400">Com glow ciano</p>
                  </Card>
                </div>
              }
              code={`import { Card } from './components/ui';

<Card>
  <h3>Card Padrão</h3>
  <p>Com glass morphism</p>
</Card>

<Card glow="primary">
  <h3>Card Primary</h3>
  <p>Com glow rosa</p>
</Card>

<Card glow="secondary">
  <h3>Card Secondary</h3>
  <p>Com glow ciano</p>
</Card>`}
            />

            {/* Badge Demo */}
            <ComponentDemo
              title="Badge"
              description="Badge com animação opcional"
              preview={
                <div className="flex flex-wrap gap-4">
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="neutral">Neutral</Badge>
                  <Badge variant="primary" animated>Animated</Badge>
                </div>
              }
              code={`import { Badge } from './components/ui';

<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="neutral">Neutral</Badge>
<Badge variant="primary" animated>Animated</Badge>`}
            />

            {/* Input Demo */}
            <ComponentDemo
              title="Input"
              description="Input com estado de erro"
              preview={
                <div className="space-y-4 w-full max-w-md">
                  <Input placeholder="Input padrão" />
                  <Input placeholder="Input com erro" error />
                </div>
              }
              code={`import { Input } from './components/ui';

<Input placeholder="Input padrão" />
<Input placeholder="Input com erro" error />`}
            />
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <Container centered>
          <div className="text-center text-gray-400">
            <p>
              Criado por{' '}
              <a
                href="https://github.com/Yuri-Machado-Luz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--hex-sec)] hover:text-[var(--hex-sec-dull)] transition-colors"
              >
                Yuri Machado Luz (Yuma)
              </a>
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
