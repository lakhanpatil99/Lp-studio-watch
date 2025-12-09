import { useEffect } from "react";
import { BRAND_CONFIG } from "@/config/brand";

const Terms = () => {
  useEffect(() => {
    document.title = `Terms of Service | ${BRAND_CONFIG.name}`;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">Terms of Service</h1>
        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          These terms outline acceptable use of this website and its content. By browsing our showcase, you agree not to misuse materials and acknowledge that all trademarks and imagery belong to their respective owners.
        </p>
      </main>
    </div>
  );
};

export default Terms;