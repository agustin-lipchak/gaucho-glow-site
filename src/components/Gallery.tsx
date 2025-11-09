import asadoImage from "@/assets/dish-asado.jpg";
import empanadasImage from "@/assets/dish-empanadas.jpg";
import milanesaImage from "@/assets/dish-milanesa.jpg";
import wineImage from "@/assets/dish-wine.jpg";

const dishes = [
  {
    image: asadoImage,
    title: "Bife de Chorizo Premium",
    description:
      "Corte argentino de 400g, cocción a la parrilla, acompañado con chimichurri casero y papas rústicas.",
  },
  {
    image: empanadasImage,
    title: "Empanadas Artesanales",
    description:
      "De carne cortada a cuchillo, pollo y verdura. Masa casera horneada dorada, el clásico argentino.",
  },
  {
    image: milanesaImage,
    title: "Milanesa Napolitana",
    description:
      "Ternera premium, jamón ibérico, mozzarella fundida y salsa de tomate fresco con albahaca.",
  },
  {
    image: wineImage,
    title: "Selección de Malbec",
    description:
      "Carta exclusiva de vinos argentinos de Mendoza y Patagonia. Maridaje perfecto para cada plato.",
  },
];

const Gallery = () => {
  return (
    <section
      id="galeria"
      className="py-20 bg-muted/30"
      aria-labelledby="galeria-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2
            id="galeria-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-display text-secondary mb-4"
          >
            Nuestros <span className="text-primary">Platos Estrella</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Cada plato es una obra de arte gastronómica, elaborada con pasión y
            dedicación por nuestros chefs.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-strong transition-all duration-300 animate-scale-in bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Content Overlay */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                  {dish.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {dish.description}
                </p>
              </div>

              {/* Accent Border on Hover */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            ¿Querés ver nuestro menú completo?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("reserva");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors"
            aria-label="Reservar y conocer menú completo"
          >
            Reservá y descubrí más
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
