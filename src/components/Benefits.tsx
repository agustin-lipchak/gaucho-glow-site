import { Flame, ChefHat, Leaf, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Flame,
    title: "Ambiente Único",
    description:
      "Diseño contemporáneo con calidez hogareña. El espacio perfecto para cenas románticas, encuentros familiares o reuniones de negocios.",
  },
  {
    icon: ChefHat,
    title: "Cocina de Autor",
    description:
      "Nuestro chef combina técnicas modernas con recetas tradicionales argentinas, creando platos que sorprenden y enamoran.",
  },
  {
    icon: Leaf,
    title: "Ingredientes Locales",
    description:
      "Seleccionamos cuidadosamente productos premium de productores locales, garantizando frescura y calidad en cada bocado.",
  },
  {
    icon: Heart,
    title: "Atención Personalizada",
    description:
      "Nuestro equipo te acompaña en cada paso de tu experiencia, desde la reserva hasta el último brindis. Tu satisfacción es nuestra prioridad.",
  },
];

const Benefits = () => {
  return (
    <section
      id="beneficios"
      className="py-20 bg-background"
      aria-labelledby="beneficios-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2
            id="beneficios-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-display text-secondary mb-4"
          >
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-lg text-muted-foreground">
            Más que un restaurante, somos una experiencia gastronómica que
            celebra la cultura argentina con pasión y excelencia.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="border-none shadow-soft hover:shadow-medium transition-shadow duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  {/* Icon */}
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <Icon className="w-8 h-8 text-primary" aria-hidden="true" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-secondary mb-3">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
