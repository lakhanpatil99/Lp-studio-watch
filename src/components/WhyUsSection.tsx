import { Shield, Truck, Award, CreditCard } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Every timepiece is crafted with precision and undergoes rigorous quality checks to ensure excellence.",
  },
  {
    icon: Shield,
    title: "1-Year Warranty",
    description: "All our watches come with a comprehensive 1-year warranty covering manufacturing defects.",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Enjoy complimentary shipping on all orders. Your watch arrives at your doorstep safely.",
  },
  {
    icon: CreditCard,
    title: "Secure Checkout",
    description: "Shop with confidence using our trusted and secure payment methods for peace of mind.",
  },
];

export const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden scroll-mt-24">
      {/* Background */}
      <div className="absolute inset-0 bg-charcoal" />
      <div className="absolute inset-0 bg-gradient-radial from-gold/5 to-transparent" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4">
            The LP Watch Studio Promise
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            We are committed to providing you with an exceptional experience from the moment you browse to long after your purchase.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group glass-card p-8 text-center hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/10 mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-gold" />
                <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
