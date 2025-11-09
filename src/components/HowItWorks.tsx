import { Calendar, CheckCircle, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Elegí tu día",
    description:
      "Seleccioná la fecha y hora que mejor se adapte a tu agenda. Tenemos disponibilidad todos los días.",
  },
  {
    icon: CheckCircle,
    title: "Reservá online",
    description:
      "Completá el formulario en segundos o contactanos por WhatsApp. Confirmación inmediata.",
  },
  {
    icon: Sparkles,
    title: "Vení a disfrutar",
    description:
      "Llegá y relajate. Nosotros nos encargamos de que tu experiencia sea memorable.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="como-funciona"
      className="py-20 bg-secondary text-secondary-foreground"
      aria-labelledby="como-funciona-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2
            id="como-funciona-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-display text-secondary-foreground mb-4"
          >
            ¿Cómo <span className="text-accent">Funciona?</span>
          </h2>
          <p className="text-lg text-secondary-foreground/80">
            Reservar tu mesa es simple y rápido. En solo 3 pasos estás listo
            para vivir una experiencia única.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="text-center animate-fade-in-up relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Step Number and Connector */}
                <div className="relative mb-6">
                  {/* Connector Line (hidden on mobile, shown on md+) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 left-[60%] w-[80%] h-0.5 bg-accent/30 -translate-y-1/2"></div>
                  )}

                  {/* Icon Circle */}
                  <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent shadow-strong mx-auto">
                    <Icon
                      className="w-12 h-12 text-accent-foreground"
                      aria-hidden="true"
                    />
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-medium">
                      {index + 1}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-secondary-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-secondary-foreground/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => {
              const element = document.getElementById("reserva");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg shadow-strong transition-all duration-300 hover:scale-105"
            aria-label="Comenzar reserva ahora"
          >
            Empezar ahora
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
