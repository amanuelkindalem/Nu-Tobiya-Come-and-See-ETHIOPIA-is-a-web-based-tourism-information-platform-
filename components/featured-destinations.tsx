import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Destination {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  image_url: string | null;
  categories: { name: string; slug: string } | null;
  regions: { name: string; slug: string } | null;
}

interface FeaturedDestinationsProps {
  destinations: Destination[];
}

export function FeaturedDestinations({ destinations }: FeaturedDestinationsProps) {
  return (
    <section className="bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Featured Destinations
            </h2>
            <p className="mt-2 text-muted-foreground">
              Must-visit places that showcase the best of Ethiopia.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/destinations" className="gap-2">
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Destinations Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <Link
              key={destination.id}
              href={`/destinations/${destination.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-sm transition-all hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={destination.image_url || "/images/placeholder.png"}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Category Badge */}
                {destination.categories && (
                  <div className="absolute left-4 top-4">
                    <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                      {destination.categories.name}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {destination.name}
                </h3>
                
                {destination.regions && (
                  <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{destination.regions.name}</span>
                  </div>
                )}

                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {destination.description}
                </p>

                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
