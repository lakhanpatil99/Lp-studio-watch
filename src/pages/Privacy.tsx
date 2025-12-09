import { useEffect } from "react";
import { BRAND_CONFIG } from "@/config/brand";

const Privacy = () => {
  useEffect(() => {
    document.title = `Privacy Policy | ${BRAND_CONFIG.name}`;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          We respect your privacy. This page describes how we handle your information when you contact us or browse our showcase. We do not sell personal data and only use analytics to improve the customer experience.
        </p>
      </main>
    </div>
  );
};

export default Privacy;