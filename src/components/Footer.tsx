import { Watch, Instagram, Facebook, Twitter } from "lucide-react";
import { BRAND_CONFIG } from "@/config/brand";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Privacy Policy", href: BRAND_CONFIG.legal.privacy },
    { label: "Terms of Service", href: BRAND_CONFIG.legal.terms },
  ];

  const socialLinks = [
    { icon: Instagram, href: BRAND_CONFIG.social.instagram, label: "Instagram" },
    { icon: Facebook, href: BRAND_CONFIG.social.facebook, label: "Facebook" },
    { icon: Twitter, href: BRAND_CONFIG.social.twitter, label: "Twitter" },
  ];

  return (
    <footer className="relative py-16 border-t border-border/30">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <Watch className="h-8 w-8 text-gold transition-transform duration-300 group-hover:rotate-12" />
            <span className="font-serif text-2xl font-semibold text-foreground">
              {BRAND_CONFIG.name}
            </span>
          </a>

          {/* Tagline */}
          <p className="text-muted-foreground text-center max-w-md">
            {BRAND_CONFIG.tagline}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-gold/20 text-muted-foreground hover:text-gold transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © {currentYear} {BRAND_CONFIG.name}. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
