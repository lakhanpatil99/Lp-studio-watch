import { cn } from "@/lib/utils";

export type CategoryId = "all" | "luxury" | "sport" | "classic" | "casual";

export const CATEGORY_OPTIONS: { id: CategoryId; label: string }[] = [
  { id: "all", label: "All Watches" },
  { id: "luxury", label: "Luxury" },
  { id: "sport", label: "Sport" },
  { id: "classic", label: "Classic" },
  { id: "casual", label: "Casual" },
];

interface CategoryFiltersProps {
  active: CategoryId;
  onChange: (id: CategoryId) => void;
  className?: string;
}

export const CategoryFilters = ({ active, onChange, className }: CategoryFiltersProps) => {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-2 sm:gap-4", className)}>
      {CATEGORY_OPTIONS.map((category) => (
        <button
          key={category.id}
          onClick={() => onChange(category.id)}
          className={cn(
            "px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
            active === category.id
              ? "bg-gold text-primary-foreground shadow-lg shadow-gold/25"
              : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
          )}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};