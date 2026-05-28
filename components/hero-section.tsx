"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeroSectionProps {
  regions: { id: string; name: string; slug: string }[];
}

export function HeroSection({ regions }: HeroSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [regionDropdownOpen, setRegionDropdownOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery) params.set("q", searchQuery);
    if (selectedRegion) params.set("region", selectedRegion);
    window.location.href = `/destinations?${params.toString()}`;
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="ethiopian-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M10 0L20 10L10 20L0 10Z" fill="currentColor" />
          </pattern>
          <rect width="100" height="100" fill="url(#ethiopian-pattern)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          {/* Tagline */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="font-ethiopic">ኢትዮጵያን እንደ ቤትዎ ያግኙ</span>
            <span className="text-muted-foreground">|</span>
            <span>Discover Ethiopia Like Home</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Where can I go in Ethiopia?
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-pretty text-lg text-muted-foreground sm:text-xl">
            Your trusted guide to Ethiopia&apos;s most breathtaking destinations.
            Explore historical sites, natural wonders, and vibrant cultures with confidence and safety.
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="mt-10">
            <div className="mx-auto flex max-w-2xl flex-col gap-3 rounded-2xl bg-card p-3 shadow-lg sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search destinations, activities..."
                  className="h-12 border-0 pl-10 shadow-none focus-visible:ring-0"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="relative">
                <button
                  type="button"
                  className="flex h-12 w-full items-center justify-between gap-2 rounded-lg border border-input bg-background px-4 text-sm sm:w-48"
                  onClick={() => setRegionDropdownOpen(!regionDropdownOpen)}
                >
                  <span className={selectedRegion ? "text-foreground" : "text-muted-foreground"}>
                    {selectedRegion
                      ? regions.find((r) => r.slug === selectedRegion)?.name
                      : "All Regions"}
                  </span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </button>

                {regionDropdownOpen && (
                  <div className="absolute left-0 top-full z-10 mt-1 w-full rounded-lg border border-border bg-card shadow-lg">
                    <div className="max-h-60 overflow-y-auto p-1">
                      <button
                        type="button"
                        className="w-full rounded-md px-3 py-2 text-left text-sm hover:bg-muted"
                        onClick={() => {
                          setSelectedRegion("");
                          setRegionDropdownOpen(false);
                        }}
                      >
                        All Regions
                      </button>
                      {regions.map((region) => (
                        <button
                          key={region.id}
                          type="button"
                          className="w-full rounded-md px-3 py-2 text-left text-sm hover:bg-muted"
                          onClick={() => {
                            setSelectedRegion(region.slug);
                            setRegionDropdownOpen(false);
                          }}
                        >
                          {region.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Button type="submit" size="lg" className="h-12 gap-2">
                <span>Explore</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </form>

          {/* Quick Stats */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Destinations</div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <div className="text-3xl font-bold text-primary">12</div>
              <div className="text-sm text-muted-foreground">Regions</div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <div className="text-3xl font-bold text-primary">6</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <div className="text-3xl font-bold text-primary">9</div>
              <div className="text-sm text-muted-foreground">UNESCO Sites</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <Link
          href="#categories"
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
        >
          <span className="text-xs font-medium">Explore Categories</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
