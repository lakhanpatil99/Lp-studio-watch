import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { WhyUsSection } from "@/components/WhyUsSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { BRAND_CONFIG } from "@/config/brand";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = `${BRAND_CONFIG.name} | Premium Watches`;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <WhyUsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
