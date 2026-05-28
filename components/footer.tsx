import Link from "next/link";
import { MapPin, Mail, Phone, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
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
            <p className="text-sm text-muted-foreground">
              Your trusted guide to discovering Ethiopia&apos;s rich heritage, breathtaking
              landscapes, and vibrant cultures safely.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Explore
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/destinations" className="text-muted-foreground hover:text-foreground transition-colors">
                  All Destinations
                </Link>
              </li>
              <li>
                <Link href="/categories/historical-sites" className="text-muted-foreground hover:text-foreground transition-colors">
                  Historical Sites
                </Link>
              </li>
              <li>
                <Link href="/categories/natural-wonders" className="text-muted-foreground hover:text-foreground transition-colors">
                  Natural Wonders
                </Link>
              </li>
              <li>
                <Link href="/categories/cultural-experiences" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cultural Experiences
                </Link>
              </li>
              <li>
                <Link href="/categories/wildlife-parks" className="text-muted-foreground hover:text-foreground transition-colors">
                  Wildlife & Parks
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/safety" className="text-muted-foreground hover:text-foreground transition-colors">
                  Safety Guide
                </Link>
              </li>
              <li>
                <Link href="/plan-trip" className="text-muted-foreground hover:text-foreground transition-colors">
                  Plan Your Trip
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@nuethiopia.com" className="hover:text-foreground transition-colors">
                  info@nuethiopia.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:+251911234567" className="hover:text-foreground transition-colors">
                  +251 91 123 4567
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Addis Ababa, Ethiopia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ኑ ጦቢያ (Come and See Ethiopia). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
