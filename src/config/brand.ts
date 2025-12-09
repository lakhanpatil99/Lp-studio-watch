// Brand Configuration - Change these values to customize the brand
export const BRAND_CONFIG = {
  name: "LP Watch Studio",
  tagline: "Timeless Elegance, Modern Precision",
  description: "Discover our curated collection of premium timepieces that blend classic craftsmanship with contemporary design.",
  
  // Contact Information
  contact: {
    whatsapp: "+91 9325490236",
    whatsappNumber: "919325490236", // Without + and spaces for wa.me links
    email: "support@lpwatchstudio.com",
    instagram: "https://instagram.com/lpwatchstudio",
  },
  
  // Social Links
  social: {
    instagram: "https://instagram.com/lpwatchstudio",
    facebook: "https://facebook.com/lpwatchstudio",
    twitter: "https://twitter.com/lpwatchstudio",
  },
  
  // Legal Links (placeholder URLs)
  legal: {
    privacy: "/privacy",
    terms: "/terms",
  },
} as const;

export type BrandConfig = typeof BRAND_CONFIG;
