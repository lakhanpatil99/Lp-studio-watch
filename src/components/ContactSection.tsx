import { MessageCircle, Mail, MapPin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND_CONFIG } from "@/config/brand";

export const ContactSection = () => {
  const whatsappLink = `https://wa.me/${BRAND_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent("Hi, I would like to know more about your watches.")}`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden scroll-mt-24">
      {/* Background */}
      <div className="absolute inset-0 bg-charcoal" />
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/5" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">
              Get In Touch
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4">
              Contact Us
            </h2>
            <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
              Have questions about our watches? We're here to help. Reach out to us through any of the channels below.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card p-8 text-center hover-lift"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#25D366]/10 mb-6 group-hover:bg-[#25D366]/20 transition-colors duration-300">
                <MessageCircle className="h-8 w-8 text-[#25D366]" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                WhatsApp
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Chat with us directly
              </p>
              <p className="text-gold font-medium">
                {BRAND_CONFIG.contact.whatsapp}
              </p>
            </a>

            {/* Email */}
            <a
              href={`mailto:${BRAND_CONFIG.contact.email}`}
              className="group glass-card p-8 text-center hover-lift"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/10 mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <Mail className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                Email
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Send us an email
              </p>
              <p className="text-gold font-medium break-all">
                {BRAND_CONFIG.contact.email}
              </p>
            </a>

            {/* Instagram */}
            <a
              href={BRAND_CONFIG.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card p-8 text-center hover-lift sm:col-span-2 lg:col-span-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 mb-6 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300">
                <Instagram className="h-8 w-8 text-pink-400" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                Instagram
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Follow our journey
              </p>
              <p className="text-gold font-medium">
                @lpwatchstudio
              </p>
            </a>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button variant="hero" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Start a Conversation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
