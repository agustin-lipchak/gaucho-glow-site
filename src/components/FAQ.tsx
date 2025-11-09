import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuáles son los horarios del restaurante?",
    answer:
      "Estamos abiertos todos los días. Horario de almuerzo: 12:00 a 16:00. Horario de cena: 20:00 a 23:30. Los fines de semana extendemos el horario hasta las 00:30.",
  },
  {
    question: "¿Cómo puedo hacer una reserva?",
    answer:
      "Podés reservar de tres formas: completando el formulario online en esta página, contactándonos por WhatsApp al +54 911 1234 5678, o llamando directamente al restaurante. La confirmación es inmediata.",
  },
  {
    question: "¿Cuál es la política de cancelación?",
    answer:
      "Entendemos que los planes pueden cambiar. Podés cancelar o modificar tu reserva hasta 2 horas antes del horario reservado sin ningún cargo. Para grupos de más de 8 personas, solicitamos aviso con 24 horas de anticipación.",
  },
  {
    question: "¿Tienen opciones vegetarianas o para celíacos?",
    answer:
      "Sí, contamos con opciones para diferentes dietas. Nuestro menú incluye platos vegetarianos, veganos y opciones sin gluten. También podemos adaptar varios de nuestros platos. Avisanos al hacer tu reserva para prepararnos mejor.",
  },
  {
    question: "¿Aceptan tarjetas de crédito y débito?",
    answer:
      "Sí, aceptamos todas las tarjetas de crédito y débito, así como también efectivo. También aceptamos pagos con billeteras virtuales y transferencias bancarias.",
  },
  {
    question: "¿Hay estacionamiento disponible?",
    answer:
      "Contamos con convenio con dos playas de estacionamiento cercanas donde nuestros clientes tienen descuento especial. También hay estacionamiento en la calle con parquímetro. Te podemos orientar sobre las mejores opciones al hacer tu reserva.",
  },
  {
    question: "¿Organizan eventos privados o cenas de empresa?",
    answer:
      "Sí, tenemos un salón privado para eventos de hasta 40 personas. Ofrecemos menús especiales para eventos corporativos, cumpleaños, aniversarios y celebraciones. Contactanos por WhatsApp o email para coordinar los detalles.",
  },
  {
    question: "¿Cuál es el código de vestimenta?",
    answer:
      "Nuestro ambiente es elegante casual. No tenemos un código de vestimenta estricto, pero recomendamos smart casual para que te sientas cómodo en nuestro ambiente sofisticado.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-muted/30" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-display text-secondary mb-4"
          >
            Preguntas <span className="text-primary">Frecuentes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Encontrá respuestas a las consultas más comunes. Si tenés alguna
            otra pregunta, no dudes en contactarnos.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg shadow-soft px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold text-secondary hover:text-primary transition-colors py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            ¿No encontraste lo que buscabas?
          </p>
          <button
            onClick={() => {
              const phoneNumber = "5491112345678";
              const message = encodeURIComponent(
                "Hola! Tengo una consulta sobre el restaurante."
              );
              window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
            }}
            className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors"
            aria-label="Contactar por WhatsApp"
          >
            Contactanos por WhatsApp
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

      {/* Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
};

export default FAQ;
