import React from 'react';
import { Link } from 'react-router-dom';
import { Github } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold font-[var(--font-logo)] text-glow-pri">
              YUMA <span className="text-[var(--hex-sec)]">UI</span>
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/"
              className="text-[var(--hex-main-white)] hover:text-[var(--hex-pri)] transition-colors"
            >
              Home
            </a>
            <a
              href="#components"
              className="text-[var(--hex-main-white)] hover:text-[var(--hex-sec)] transition-colors"
            >
              Components
            </a>
            <a
              href="https://github.com/Yuri-Machado-Luz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--hex-main-white)] hover:text-[var(--hex-sec)] transition-colors"
            >
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
