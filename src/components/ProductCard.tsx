import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Watch, formatPrice, generateWhatsAppLink } from "@/data/watches";
import { BRAND_CONFIG } from "@/config/brand";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  watch: Watch;
  index: number;
  onQuickView?: (watch: Watch) => void;
}

const tagStyles: Record<string, string> = {
  "New": "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  "Best Seller": "bg-gold/20 text-gold border-gold/30",
  "Limited Edition": "bg-rose-500/20 text-rose-400 border-rose-500/30",
  "Sale": "bg-blue-500/20 text-blue-400 border-blue-500/30",
};

export const ProductCard = ({ watch, index, onQuickView }: ProductCardProps) => {
  const whatsappLink = generateWhatsAppLink(watch, BRAND_CONFIG.contact.whatsappNumber);

  return (
    <div
      className="group relative glass-card overflow-hidden hover-lift animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Tag */}
      {watch.tag && (
        <div className="absolute top-4 left-4 z-10">
          <span
            className={cn(
              "px-3 py-1 text-xs font-semibold rounded-full border",
              tagStyles[watch.tag]
            )}
          >
            {watch.tag}
          </span>
        </div>
      )}

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-charcoal">
        <img
          src={watch.imageUrl}
          alt={watch.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Quick action on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 gap-3">
          <Button
            variant="whatsapp"
            size="lg"
            className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Order Now
            </a>
          </Button>
          {onQuickView && (
            <Button
              variant="gold-outline"
              size="lg"
              className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
              onClick={() => onQuickView(watch)}
            >
              Quick View
            </Button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Category */}
        <span className="text-xs font-medium uppercase tracking-wider text-gold">
          {watch.category}
        </span>

        {/* Name */}
        <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-gold transition-colors duration-300">
          {watch.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {watch.description}
        </p>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-2">
          <span className="font-serif text-2xl font-bold text-foreground">
            {formatPrice(watch.price)}
          </span>
          <div className="flex gap-2">
            <Button variant="gold-outline" size="sm" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Enquire on WhatsApp
              </a>
            </Button>
            {onQuickView && (
              <Button variant="secondary" size="sm" onClick={() => onQuickView(watch)}>
                Quick View
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Border Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};
