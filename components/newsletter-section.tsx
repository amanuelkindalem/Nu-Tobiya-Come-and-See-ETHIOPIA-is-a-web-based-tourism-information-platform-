"use client";

import { useState } from "react";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-primary py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/20">
            <Mail className="h-6 w-6 text-primary-foreground" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Stay Updated
          </h2>

          <p className="mt-4 text-lg text-primary-foreground/80">
            Get the latest travel tips, new destination guides, and safety updates delivered to your inbox.
          </p>

          {status === "success" ? (
            <div className="mt-8 flex items-center justify-center gap-2 text-primary-foreground">
              <CheckCircle className="h-5 w-5" />
              <span>Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 w-full bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 sm:w-80"
                  required
                />
                <Button
                  type="submit"
                  variant="secondary"
                  size="lg"
                  className="h-12 gap-2"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Subscribing..." : "Subscribe"}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              {status === "error" && (
                <p className="mt-3 text-sm text-red-200">
                  Something went wrong. Please try again.
                </p>
              )}

              <p className="mt-4 text-sm text-primary-foreground/60">
                No spam, unsubscribe at any time.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
