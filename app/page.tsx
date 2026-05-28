import { createClient } from "@/lib/supabase/server";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { CategoriesSection } from "@/components/categories-section";
import { FeaturedDestinations } from "@/components/featured-destinations";
import { RegionsSection } from "@/components/regions-section";
import { SafetySection } from "@/components/safety-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { Footer } from "@/components/footer";
import { AIChatbot } from "@/components/ai-chatbot";

export default async function HomePage() {
  const supabase = await createClient();

  // Fetch all data in parallel
  const [categoriesResult, regionsResult, destinationsResult] = await Promise.all([
    supabase.from("categories").select("*").order("name"),
    supabase.from("regions").select("*").order("name"),
    supabase
      .from("destinations")
      .select(`
        *,
        categories:category_id (name, slug),
        regions:region_id (name, slug)
      `)
      .eq("is_published", true)
      .order("created_at", { ascending: false })
      .limit(6),
  ]);

  const categories = categoriesResult.data || [];
  const regions = regionsResult.data || [];
  const destinations = destinationsResult.data || [];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSection regions={regions} />
        <CategoriesSection categories={categories} />
        <FeaturedDestinations destinations={destinations} />
        <RegionsSection regions={regions} />
        <SafetySection />
        <NewsletterSection />
      </main>

      <Footer />
      <AIChatbot />
    </div>
  );
}
