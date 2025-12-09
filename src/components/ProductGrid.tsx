import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { watches, Watch } from "@/data/watches";
import { cn } from "@/lib/utils";
import { CategoryFilters, CategoryId } from "@/components/CategoryFilters";
import { QuickViewModal } from "@/components/QuickViewModal";

export const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [selectedWatch, setSelectedWatch] = useState<Watch | null>(null);

  const filteredWatches = activeCategory === "all"
    ? watches
    : watches.filter((watch) => watch.category === activeCategory);

  const handleQuickView = (watch: Watch) => {
    setSelectedWatch(watch);
    setQuickViewOpen(true);
  };

  return (
    <section id="collections" className="py-24 relative scroll-mt-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal/30 to-background" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">
            Our Collection
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4">
            Discover Premium Timepieces
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Each watch is carefully selected to ensure the highest quality and timeless elegance.
          </p>
        </div>

        {/* Category Filter */}
        <CategoryFilters
          active={activeCategory}
          onChange={setActiveCategory}
          className="mb-12"
        />

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {filteredWatches.map((watch, index) => (
            <ProductCard key={watch.id} watch={watch} index={index} onQuickView={handleQuickView} />
          ))}
        </div>

        {/* Empty State */}
        {filteredWatches.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No watches found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      <QuickViewModal open={quickViewOpen} watch={selectedWatch} onOpenChange={setQuickViewOpen} />
    </section>
  );
};
