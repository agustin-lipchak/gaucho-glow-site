import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold text-secondary-foreground">
              Restaurante<span className="text-accent">.</span>
            </h3>
            <p className="text-secondary-foreground/70 leading-relaxed">
              Cocina argentina contemporánea con pasión y excelencia. Desde 2020
              brindando experiencias gastronómicas memorables.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors group"
                aria-label="Seguinos en Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:text-accent-foreground" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors group"
                aria-label="Seguinos en Facebook"
              >
                <Facebook className="w-5 h-5 group-hover:text-accent-foreground" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-secondary-foreground">
              Contacto
            </h4>
            <div className="space-y-3 text-secondary-foreground/70">
              <a
                href="tel:+541112345678"
                className="flex items-start gap-3 hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>+54 11 1234 5678</span>
              </a>
              <a
                href="mailto:info@restaurante.com"
                className="flex items-start gap-3 hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>info@restaurante.com</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Av. Ejemplo 1234, Palermo, Buenos Aires</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-secondary-foreground flex items-center gap-2">
              <Clock className="w-5 h-5" aria-hidden="true" />
              Horarios
            </h4>
            <div className="space-y-2 text-secondary-foreground/70">
              <div>
                <p className="font-semibold text-secondary-foreground">Lunes a Domingo</p>
                <p>12:00 - 16:00 (Almuerzo)</p>
                <p>20:00 - 23:30 (Cena)</p>
              </div>
              <div className="pt-2">
                <p className="font-semibold text-secondary-foreground">Fines de semana</p>
                <p>Extendido hasta 00:30</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-secondary-foreground">
              Enlaces Rápidos
            </h4>
            <nav className="space-y-2" aria-label="Enlaces del footer">
              <button
                onClick={() => {
                  const element = document.getElementById("galeria");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="block text-secondary-foreground/70 hover:text-accent transition-colors"
              >
                Menú
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("reserva");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="block text-secondary-foreground/70 hover:text-accent transition-colors"
              >
                Reservas
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("faq");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="block text-secondary-foreground/70 hover:text-accent transition-colors"
              >
                Preguntas Frecuentes
              </button>
              <a
                href="/privacy"
                className="block text-secondary-foreground/70 hover:text-accent transition-colors"
              >
                Política de Privacidad
              </a>
              <a
                href="/terms"
                className="block text-secondary-foreground/70 hover:text-accent transition-colors"
              >
                Términos y Condiciones
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/10 pt-8 text-center text-secondary-foreground/60 text-sm">
          <p>
            © {currentYear} Restaurante Argentino Contemporáneo. Todos los
            derechos reservados.
          </p>
          <p className="mt-2">
            Hecho con ❤️ en Buenos Aires, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
