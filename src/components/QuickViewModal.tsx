import { Watch, formatPrice } from "@/data/watches";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { BRAND_CONFIG } from "@/config/brand";
import { generateWhatsAppLink } from "@/data/watches";

interface QuickViewModalProps {
  open: boolean;
  watch: Watch | null;
  onOpenChange: (open: boolean) => void;
}

export const QuickViewModal = ({ open, watch, onOpenChange }: QuickViewModalProps) => {
  if (!watch) return null;

  const whatsappLink = generateWhatsAppLink(watch, BRAND_CONFIG.contact.whatsappNumber);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">{watch.name}</DialogTitle>
          <DialogDescription className="text-sm">
            {watch.category.toUpperCase()} • {formatPrice(watch.price)}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden bg-charcoal">
            <img
              src={watch.imageUrl}
              alt={watch.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <p className="text-muted-foreground">{watch.description}</p>
            <div className="flex items-center justify-between">
              <span className="font-serif text-2xl font-bold text-foreground">
                {formatPrice(watch.price)}
              </span>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="gold" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Enquire on WhatsApp
                </a>
              </Button>
              <Button variant="secondary" onClick={() => onOpenChange(false)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};