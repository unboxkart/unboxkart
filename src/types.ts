export interface Product {
  id: string;
  name: string;
  category: string;
  subCategory?: string;
  price: number;
  originalPrice: number;
  discount: number; // percentage, e.g. 20
  rating: number;
  reviewsCount: number;
  image: string;
  images?: string[];
  prime: boolean;
  available: boolean;
  shortDescription: string;
  description: string;
  features: string[];
  brand: string;
  specifications: Record<string, string>;
  isTodayDeal?: boolean;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  isFeatured?: boolean;
  isEditorsPick?: boolean;
  amazonUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  tags: string[];
  relatedProducts?: string[]; // Product IDs
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface SiteConfig {
  amazonAssociateId: string;
  siteName: string;
  siteTitle: string;
  siteDescription: string;
  contactEmail: string;
  contactPhone?: string;
  address?: string;
  socials: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
    whatsapp?: string;
    pinterest?: string;
  };
  gaMeasurementId?: string;
}
