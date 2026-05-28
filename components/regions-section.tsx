import Link from "next/link";
import { 
  Building, 
  Mountain, 
  Trees, 
  Landmark, 
  Users, 
  Flame, 
  Sun, 
  Leaf, 
  Droplets, 
  Castle, 
  Train, 
  Coffee,
  ArrowRight
} from "lucide-react";

interface Region {
  id: string;
  name: string;
  slug: string;
  icon: string | null;
}

interface RegionsSectionProps {
  regions: Region[];
}

const iconMap: Record<string, React.ElementType> = {
  building: Building,
  mountain: Mountain,
  trees: Trees,
  landmark: Landmark,
  users: Users,
  flame: Flame,
  sun: Sun,
  leaf: Leaf,
  droplets: Droplets,
  castle: Castle,
  train: Train,
  coffee: Coffee,
};

export function RegionsSection({ regions }: RegionsSectionProps) {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Explore by Region
          </h2>
          <p className="mt-4 text-muted-foreground">
            From the bustling capital to remote tribal lands, discover unique experiences in every corner of Ethiopia.
          </p>
        </div>

        {/* Regions Grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {regions.map((region) => {
            const IconComponent = iconMap[region.icon || "mountain"] || Mountain;
            
            return (
              <Link
                key={region.id}
                href={`/regions/${region.slug}`}
                className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-4 text-center transition-all hover:border-primary/50 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <IconComponent className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {region.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/regions"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View all regions
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
