import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";

const Hero = () => {
  const scrollToReservation = () => {
    const element = document.getElementById("reserva");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    // Reemplazar con el número real del restaurante
    const phoneNumber = "5491112345678";
    const message = encodeURIComponent("Hola! Me gustaría hacer una reserva.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Interior elegante del restaurante argentino con iluminación cálida"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Main Heading - H1 único para SEO */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display text-primary-foreground mb-6 leading-tight">
            Sabores Auténticos de{" "}
            <span className="text-accent">Argentina</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Cocina contemporánea con ingredientes premium locales en un ambiente
            cálido y moderno. Tu próxima experiencia gastronómica te espera.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToReservation}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-strong text-lg px-8 py-6 w-full sm:w-auto"
              aria-label="Reservar mesa ahora"
            >
              Reservar Mesa
            </Button>
            <Button
              onClick={openWhatsApp}
              size="lg"
              variant="outline"
              className="bg-background/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm text-lg px-8 py-6 w-full sm:w-auto"
              aria-label="Contactar por WhatsApp"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-primary-foreground/80">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">500+</div>
              <div className="text-sm">Reservas mensuales</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">4.9</div>
              <div className="text-sm">Calificación promedio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">100%</div>
              <div className="text-sm">Ingredientes locales</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
