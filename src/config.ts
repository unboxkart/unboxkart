import { SiteConfig } from "./types";

export const SITE_CONFIG: SiteConfig = {
  amazonAssociateId: "amzn-aff-20", // Change this to your real Amazon Associate ID
  siteName: "unboxkart",
  siteTitle: "unboxkart - Your Ultimate Amazon Smart Shopping Guide",
  siteDescription: "Find the best Amazon deals, top-rated products, and expert buying guides. We scour Amazon daily to bring you handpicked deals with up to 70% savings.",
  contactEmail: "support@unboxkart.com",
  contactPhone: "+1 (555) 123-4567",
  address: "100 Pine Street, Suite 1200, San Francisco, CA 94111",
  socials: {
    facebook: "https://facebook.com/unboxkart",
    twitter: "https://twitter.com/unboxkart",
    instagram: "https://instagram.com/unboxkart",
    youtube: "https://youtube.com/unboxkart",
    whatsapp: "https://wa.me/15551234567",
  },
  gaMeasurementId: "G-XXXXXXXXXX", // Google Analytics Measurement ID
};

export const CATEGORIES = [
  { id: "all", name: "All Categories", icon: "LayoutGrid" },
  { id: "electronics", name: "Electronics", icon: "Cpu" },
  { id: "home-kitchen", name: "Home & Kitchen", icon: "Utensils" },
  { id: "fashion", name: "Fashion", icon: "Shirt" },
  { id: "beauty", name: "Beauty", icon: "Sparkles" },
  { id: "health", name: "Health & Care", icon: "HeartPulse" },
  { id: "sports-fitness", name: "Sports & Fitness", icon: "Dumbbell" },
  { id: "gaming", name: "Gaming", icon: "Gamepad2" },
  { id: "books", name: "Books", icon: "BookOpen" },
];

export const BRANDS = [
  "Apple",
  "Samsung",
  "Sony",
  "Anker",
  "Instant Pot",
  "Philips",
  "Nike",
  "Fitbit",
  "Nintendo",
  "Logitech",
  "Keurig",
];
