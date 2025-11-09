import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "María González",
    role: "Cliente frecuente",
    rating: 5,
    comment:
      "La mejor parrilla de Buenos Aires sin dudas. El bife de chorizo es espectacular y el servicio impecable. Ya hicimos 5 reservas este año!",
  },
  {
    name: "Carlos Rodríguez",
    role: "Cena de aniversario",
    rating: 5,
    comment:
      "Celebramos nuestro aniversario aquí y fue una experiencia inolvidable. El ambiente es cálido, la comida exquisita y el personal muy atento.",
  },
  {
    name: "Laura Martínez",
    role: "Almuerzo de negocios",
    rating: 5,
    comment:
      "Ideal para reuniones de trabajo. Excelente ubicación, ambiente sofisticado y menú ejecutivo de primera. Mis clientes quedaron encantados.",
  },
  {
    name: "Juan Pérez",
    role: "Cena familiar",
    rating: 5,
    comment:
      "Fuimos con toda la familia y todos quedamos felices. Las empanadas son las mejores que probé, y los niños disfrutaron tanto como nosotros.",
  },
  {
    name: "Ana Silva",
    role: "Primera visita",
    rating: 5,
    comment:
      "Me lo recomendó un amigo y superó todas mis expectativas. La carta de vinos es excelente y el sommelier nos ayudó a elegir el maridaje perfecto.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonios"
      className="py-20 bg-background"
      aria-labelledby="testimonios-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2
            id="testimonios-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-display text-secondary mb-4"
          >
            Lo Que Dicen{" "}
            <span className="text-primary">Nuestros Clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Miles de personas ya disfrutaron de nuestra cocina. Leé sus
            experiencias y descubrí por qué vuelven una y otra vez.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <Card
              key={index}
              className="border-none shadow-soft hover:shadow-medium transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4" aria-label={`${testimonial.rating} de 5 estrellas`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-accent text-accent"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Comment */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.comment}"
                </blockquote>

                {/* Author Info */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-secondary">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Proof */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            ⭐ Calificación promedio:{" "}
            <span className="font-bold text-accent">4.9/5</span> basada en{" "}
            <span className="font-bold">320+ reseñas</span> verificadas
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
