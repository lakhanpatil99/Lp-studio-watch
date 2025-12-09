import { Clock, Target, Heart } from "lucide-react";
import { BRAND_CONFIG } from "@/config/brand";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden scroll-mt-24">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <span className="text-gold text-sm font-semibold uppercase tracking-widest">
                Our Story
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4">
                About {BRAND_CONFIG.name}
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Founded with a passion for horology, {BRAND_CONFIG.name} represents the perfect 
                fusion of timeless design and modern craftsmanship. We believe that a watch is 
                more than just a time-telling device — it's a statement of personal style and 
                a companion for life's most precious moments.
              </p>
              <p>
                Our curated collection features timepieces that span from classic elegance to 
                contemporary sportiness, ensuring there's a perfect watch for every wrist and 
                every occasion. Each piece is carefully selected for its quality, design, and 
                the story it tells.
              </p>
              <p>
                At {BRAND_CONFIG.name}, we're not just selling watches — we're helping you 
                find the perfect expression of your personality and style.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { icon: Clock, label: "Precision" },
                { icon: Target, label: "Excellence" },
                { icon: Heart, label: "Passion" },
              ].map((value) => (
                <div key={value.label} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gold/10 mb-3">
                    <value.icon className="h-6 w-6 text-gold" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{value.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="glass-card overflow-hidden rounded-2xl aspect-[4/5]">
                  <img
                    src="/assets/images/hublot/hublot-1.jpg"
                    alt="Luxury watch detail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="glass-card overflow-hidden rounded-2xl aspect-square">
                  <img
                    src="/assets/images/hublot/hublot-2.jpg"
                    alt="Watch craftsmanship"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="glass-card overflow-hidden rounded-2xl aspect-square">
                  <img
                    src="/assets/images/hublot/hublot-3.jpg"
                    alt="Watch collection"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="glass-card overflow-hidden rounded-2xl aspect-[4/5]">
                  <img
                    src="/assets/images/hublot/hublot-4.jpg"
                    alt="Watch on wrist"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gold/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
