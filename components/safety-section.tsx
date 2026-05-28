import Link from "next/link";
import { Shield, Clock, MessageCircle, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: MapPin,
    title: "Detailed Destination Guides",
    description:
      "Comprehensive information about each destination including history, attractions, and local tips.",
  },
  {
    icon: Shield,
    title: "Safety Information",
    description:
      "Up-to-date safety advisories and practical tips for traveling safely across all regions.",
  },
  {
    icon: MessageCircle,
    title: "AI Travel Assistant",
    description:
      "Get instant answers to your travel questions from our intelligent chatbot.",
  },
  {
    icon: Clock,
    title: "Best Time to Visit",
    description:
      "Know the ideal seasons for each destination based on weather, festivals, and crowds.",
  },
];

export function SafetySection() {
  return (
    <section className="bg-primary/5 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Shield className="h-4 w-4" />
              <span>Travel with Confidence</span>
            </div>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How do I travel Ethiopia safely?
            </h2>

            <p className="mt-4 text-lg text-muted-foreground">
              We believe that with the right information, Ethiopia is one of the most rewarding
              destinations in Africa. Our platform provides everything you need to plan a safe,
              unforgettable journey.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/safety" className="gap-2">
                  View Safety Guide
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/plan-trip">Plan Your Trip</Link>
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
