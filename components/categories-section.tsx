import Link from "next/link";
import { 
  Landmark, 
  Mountain, 
  Users, 
  Church, 
  TreePine, 
  Compass,
  ArrowRight 
} from "lucide-react";

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  icon: string | null;
  color: string | null;
  bg_color: string | null;
}

interface CategoriesSectionProps {
  categories: Category[];
}

const iconMap: Record<string, React.ElementType> = {
  landmark: Landmark,
  mountain: Mountain,
  users: Users,
  church: Church,
  "tree-pine": TreePine,
  compass: Compass,
};

export function CategoriesSection({ categories }: CategoriesSectionProps) {
  return (
    <section id="categories" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Explore by Category
          </h2>
          <p className="mt-4 text-muted-foreground">
            Discover Ethiopia through six unique lenses, each offering unforgettable experiences.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon || "landmark"] || Landmark;
            
            return (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                {/* Icon */}
                <div
                  className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: category.bg_color || "#f3f4f6",
                    color: category.color || "#374151",
                  }}
                >
                  <IconComponent className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {category.description}
                </p>

                {/* Arrow */}
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  <span>Explore</span>
                  <ArrowRight className="h-4 w-4" />
                </div>

                {/* Decorative corner */}
                <div
                  className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-10 transition-transform group-hover:scale-150"
                  style={{
                    backgroundColor: category.color || "#374151",
                  }}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
