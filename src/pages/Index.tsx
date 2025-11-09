import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Gallery from "@/components/Gallery";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ReservationForm from "@/components/ReservationForm";
import Footer from "@/components/Footer";

const Index = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Gallery />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <ReservationForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
