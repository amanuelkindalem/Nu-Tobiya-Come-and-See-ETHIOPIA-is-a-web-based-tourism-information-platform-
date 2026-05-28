"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <MapPin className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-ethiopic text-lg font-bold leading-none text-foreground">
                ኑ ጦቢያ
              </span>
              <span className="text-xs text-muted-foreground">
                Come and See Ethiopia
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/destinations"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Destinations
            </Link>
            <Link
              href="/categories"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Categories
            </Link>
            <Link
              href="/regions"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Regions
            </Link>
            <Link
              href="/safety"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Safety Guide
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {searchOpen ? (
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search destinations..."
                  className="w-64 pl-9"
                  autoFocus
                  onBlur={() => setSearchOpen(false)}
                />
              </div>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            )}
            <Button asChild>
              <Link href="/plan-trip">Plan Your Trip</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search destinations..."
                className="w-full pl-9"
              />
            </div>
            <Link
              href="/destinations"
              className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              Destinations
            </Link>
            <Link
              href="/categories"
              className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              Categories
            </Link>
            <Link
              href="/regions"
              className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              Regions
            </Link>
            <Link
              href="/safety"
              className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              Safety Guide
            </Link>
            <div className="pt-4">
              <Button asChild className="w-full">
                <Link href="/plan-trip">Plan Your Trip</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
