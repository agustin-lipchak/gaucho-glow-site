import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-soft">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navegación principal">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-2xl font-display font-bold text-secondary hover:text-primary transition-colors"
              aria-label="Volver al inicio"
            >
              Restaurante<span className="text-primary">.</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Menú
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              FAQ
            </button>
            <Button
              onClick={() => scrollToSection("reserva")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-medium"
            >
              Reservar Mesa
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("beneficios")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection("galeria")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Menú
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                FAQ
              </button>
              <Button
                onClick={() => scrollToSection("reserva")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
              >
                Reservar Mesa
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
