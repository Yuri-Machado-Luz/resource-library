export default function Header() {
  return (
    <header className="glass-card fixed top-0 right-0 left-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-glow-pri text-2xl font-[var(--font-logo)] font-bold">
              YUMA <span className="text-[var(--hex-sec)]">UI</span>
            </h1>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="/"
              className="text-[var(--hex-main-white)] transition-colors hover:text-[var(--hex-pri)]"
            >
              Home
            </a>
            <a
              href="#components"
              className="text-[var(--hex-main-white)] transition-colors hover:text-[var(--hex-sec)]"
            >
              Components
            </a>
            <a
              href="https://github.com/Yuri-Machado-Luz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--hex-main-white)] transition-colors hover:text-[var(--hex-sec)]"
            >
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
