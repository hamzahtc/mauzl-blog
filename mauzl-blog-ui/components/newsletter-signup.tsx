"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { toast } from "@/hooks/use-toast";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      // toast({
      //   title: "Subscribed!",
      //   description: "You've successfully subscribed to our newsletter.",
      // });
      setEmail("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="rounded-lg bg-gradient-to-br from-primary/10 via-primary/5 to-background p-8 md:p-10">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Cultural Community</h2>
        <p className="text-muted-foreground mb-6">
          Subscribe to our newsletter to receive the latest stories, cultural
          insights, and updates from around the world.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </div>
    </div>
  );
}
