import { ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND_CONFIG } from "@/config/brand";

export const Hero = () => {
  const scrollToCollections = () => {
    const element = document.querySelector("#collections");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative scroll-mt-24 min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/3 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-gold/5 to-transparent rounded-full" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--gold)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card gold-border animate-fade-in">
            <Sparkles className="h-4 w-4 text-gold" />
            <span className="text-sm font-medium text-champagne">Premium Collection 2024</span>
          </div>

          {/* Main Heading */}
          <h1 
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-foreground">Timeless</span>
            <br />
            <span className="gold-gradient">Elegance</span>
            <span className="text-foreground">, Modern</span>
            <br />
            <span className="text-foreground">Precision</span>
          </h1>

          {/* Subheading */}
          <p 
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            {BRAND_CONFIG.description}
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button variant="hero" onClick={scrollToCollections}>
              Explore Watches
            </Button>
            <Button variant="glass" size="lg" onClick={scrollToCollections}>
              View Collection
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 pt-12 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            {[
              { value: "500+", label: "Happy Customers" },
              { value: "50+", label: "Watch Models" },
              { value: "1 Year", label: "Warranty" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-gold">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={scrollToCollections}
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-gold transition-colors">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="h-5 w-5" />
          </div>
        </div>
      </div>
    </section>
  );
};
