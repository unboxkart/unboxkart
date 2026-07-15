import { SiteConfig } from "./types";

export const SITE_CONFIG: SiteConfig = {
  amazonAssociateId: "digitalsel0ef-21", // Change this to your real Amazon Associate ID
  siteName: "unboxkart",
  siteTitle: "unboxkart - Your Ultimate Amazon Smart Shopping Guide",
  siteDescription: "Find the best Amazon deals, top-rated products, and expert buying guides. We scour Amazon daily to bring you handpicked deals with up to 70% savings.",
  contactEmail: "unboxkart123@gmail.com",
  contactPhone: "+91 8686-142645",
  address: "Kondapur, Hyderabad, Telangana-500084, India",
  socials: {
    facebook: "https://facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
    whatsapp: "https://wa.me/8686142645",
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
