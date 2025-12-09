import { useState, useEffect } from "react";
import { Menu, X, Watch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND_CONFIG } from "@/config/brand";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Collections", href: "#collections" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <Watch className="h-8 w-8 text-gold transition-transform duration-300 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="font-serif text-xl md:text-2xl font-semibold text-foreground">
              {BRAND_CONFIG.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-3/4" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              variant="gold-outline"
              size="sm"
              onClick={() => handleNavClick("#collections")}
            >
              Shop Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-500 ease-in-out",
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="py-4 space-y-1 border-t border-border/30">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-gold hover:bg-secondary/50 rounded-lg transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 px-4">
              <Button
                variant="gold"
                className="w-full"
                onClick={() => handleNavClick("#collections")}
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
