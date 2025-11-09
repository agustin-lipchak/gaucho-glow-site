import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, Users, User, Phone, MessageSquare } from "lucide-react";

const ReservationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
    comments: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación básica
    if (!formData.name || !formData.phone || !formData.guests || !formData.date || !formData.time) {
      toast({
        title: "Campos incompletos",
        description: "Por favor completá todos los campos obligatorios.",
        variant: "destructive",
      });
      return;
    }

    // Validación de teléfono (básica)
    if (formData.phone.length < 8) {
      toast({
        title: "Teléfono inválido",
        description: "Por favor ingresá un número de teléfono válido.",
        variant: "destructive",
      });
      return;
    }

    // Simulación de envío (aquí integrarías con WhatsApp o backend)
    const whatsappMessage = encodeURIComponent(
      `Reserva:\n` +
      `Nombre: ${formData.name}\n` +
      `Teléfono: ${formData.phone}\n` +
      `Personas: ${formData.guests}\n` +
      `Fecha: ${formData.date}\n` +
      `Hora: ${formData.time}\n` +
      `Comentarios: ${formData.comments || "Sin comentarios"}`
    );
    
    // Abrir WhatsApp con los datos
    window.open(`https://wa.me/5491112345678?text=${whatsappMessage}`, "_blank");

    toast({
      title: "¡Reserva enviada!",
      description: "Te contactaremos en breve para confirmar tu reserva.",
    });

    // Limpiar formulario
    setFormData({
      name: "",
      phone: "",
      guests: "",
      date: "",
      time: "",
      comments: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section
      id="reserva"
      className="py-20 bg-background"
      aria-labelledby="reserva-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
          <h2
            id="reserva-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-display text-secondary mb-4"
          >
            Reservá <span className="text-primary">Tu Mesa</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Completá el formulario y te contactaremos para confirmar tu reserva.
            También podés llamarnos o escribirnos por WhatsApp.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-lg shadow-medium p-8 space-y-6 animate-scale-in"
          >
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2 text-secondary">
                <User className="w-4 h-4" aria-hidden="true" />
                Nombre completo *
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Juan Pérez"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
                aria-required="true"
                className="border-input focus:ring-primary"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2 text-secondary">
                <Phone className="w-4 h-4" aria-hidden="true" />
                Teléfono *
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+54 911 1234 5678"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                required
                aria-required="true"
                className="border-input focus:ring-primary"
              />
            </div>

            {/* Guests and Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Number of Guests */}
              <div className="space-y-2">
                <Label htmlFor="guests" className="flex items-center gap-2 text-secondary">
                  <Users className="w-4 h-4" aria-hidden="true" />
                  Cantidad de personas *
                </Label>
                <Select
                  value={formData.guests}
                  onValueChange={(value) => handleChange("guests", value)}
                  required
                >
                  <SelectTrigger id="guests" className="border-input">
                    <SelectValue placeholder="Seleccioná" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 persona</SelectItem>
                    <SelectItem value="2">2 personas</SelectItem>
                    <SelectItem value="3">3 personas</SelectItem>
                    <SelectItem value="4">4 personas</SelectItem>
                    <SelectItem value="5">5 personas</SelectItem>
                    <SelectItem value="6">6 personas</SelectItem>
                    <SelectItem value="7+">7 o más personas</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date */}
              <div className="space-y-2">
                <Label htmlFor="date" className="flex items-center gap-2 text-secondary">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  Fecha *
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleChange("date", e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  required
                  aria-required="true"
                  className="border-input focus:ring-primary"
                />
              </div>
            </div>

            {/* Time */}
            <div className="space-y-2">
              <Label htmlFor="time" className="flex items-center gap-2 text-secondary">
                <Clock className="w-4 h-4" aria-hidden="true" />
                Horario *
              </Label>
              <Select
                value={formData.time}
                onValueChange={(value) => handleChange("time", value)}
                required
              >
                <SelectTrigger id="time" className="border-input">
                  <SelectValue placeholder="Seleccioná un horario" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="12:00">12:00</SelectItem>
                  <SelectItem value="12:30">12:30</SelectItem>
                  <SelectItem value="13:00">13:00</SelectItem>
                  <SelectItem value="13:30">13:30</SelectItem>
                  <SelectItem value="14:00">14:00</SelectItem>
                  <SelectItem value="14:30">14:30</SelectItem>
                  <SelectItem value="15:00">15:00</SelectItem>
                  <SelectItem value="20:00">20:00</SelectItem>
                  <SelectItem value="20:30">20:30</SelectItem>
                  <SelectItem value="21:00">21:00</SelectItem>
                  <SelectItem value="21:30">21:30</SelectItem>
                  <SelectItem value="22:00">22:00</SelectItem>
                  <SelectItem value="22:30">22:30</SelectItem>
                  <SelectItem value="23:00">23:00</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Comments */}
            <div className="space-y-2">
              <Label htmlFor="comments" className="flex items-center gap-2 text-secondary">
                <MessageSquare className="w-4 h-4" aria-hidden="true" />
                Comentarios o solicitudes especiales
              </Label>
              <Textarea
                id="comments"
                placeholder="Ej: Mesa junto a la ventana, celebración especial, alergias alimentarias..."
                value={formData.comments}
                onChange={(e) => handleChange("comments", e.target.value)}
                rows={4}
                className="border-input focus:ring-primary resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 shadow-strong"
              aria-label="Confirmar reserva"
            >
              Confirmar Reserva
            </Button>

            {/* Privacy Note */}
            <p className="text-xs text-muted-foreground text-center">
              Al enviar este formulario, aceptás nuestra política de privacidad.
              Tus datos solo serán utilizados para gestionar tu reserva.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;
