import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">Logo</span>
        </div>
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-6">
            <li>
              <a
                href="#home"
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
