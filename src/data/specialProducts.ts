import { Product } from "../types";
import { SITE_CONFIG } from "../config";

const affiliateId = SITE_CONFIG.amazonAssociateId;

/**
 * ==========================================
 *              HERO PRODUCT
 * ==========================================
 * This product is showcased at the very top 
 * of the homepage as the exclusive spotlight deal.
 */
export const HERO_PRODUCT: Product = {
  id: "hero-oneplus-n6",
  name: "OnePlus N6 | 6GB+128GB | Midnight Green | Segment's Biggest 8000mAh Battery | Segment's Fastest 45W Charging | 60-Month Smoothness",
  category: "electronics",
  subCategory: "Electronics Top Picks",
  price: 24999,
  originalPrice: 30862.96,
  discount: 19,
  rating: 4.2,
  reviewsCount: 4586,
  image: "https://images-eu.ssl-images-amazon.com/images/I/61f5ZCuSD6L.jpg",
  images: [
    "https://images-eu.ssl-images-amazon.com/images/I/61f5ZCuSD6L.jpg"
  ],
  prime: true,
  available: true,
  shortDescription: "Exclusive flagship, 8000mAh segment-first battery, lightning-fast 45W charging and fluid 60-month performance guarantee.",
  description: "Experience absolute performance with the OnePlus N6. Featuring the largest 8000mAh battery in its category, premium midnight green finish, and 45W ultra-fast charging. Tuned for a butter-smooth 60-month performance lifetime, this smartphone is the perfect companion for productivity, gaming, and creative capture.",
  features: [
    "Top Category Choice: Ranked as the top premium bestseller in our elite selection.",
    "Authentic Engineering: Designed and supplied by OnePlus for maximum consumer durability.",
    "High User Engagement: Backed by over 4,586 reviews and a strong 4.2-star ranking.",
    "Seamless Convenience: Full warranty coverage with fast delivery via Amazon Prime distribution.",
    "Superior Quality: Selected materials processed to modern standard quality controls."
  ],
  brand: "OnePlus",
  specifications: {
    "Brand": "OnePlus",
    "Category": "electronics",
    "ASIN": "B0H3LKPC2K",
    "Bestseller Rank": "#1 in Electronics",
    "Distribution": "Fulfills with Amazon Prime",
    "Condition": "100% Genuine and New"
  },
  isTodayDeal: true,
  amazonUrl: `https://www.amazon.in/dp/B0H3LKPC2K?tag=${affiliateId}`
};

/**
 * ==========================================
 *            VIRAL / TRENDY FINDS
 * ==========================================
 * These are the highly hyped products going viral on social media.
 * Add, remove, or modify items here to instantly update the section!
 */
export const VIRAL_PRODUCTS: Product[] = [
  {
    id: "viral-samsung-s25",
    name: "Samsung Galaxy S25 Ultra 5G AI Smartphone (Titanium Silverblue, 12GB RAM, 256GB Storage), 200MP Camera, S Pen Included",
    category: "electronics",
    subCategory: "Electronics Top Picks",
    price: 109999,
    originalPrice: 189653.45,
    discount: 42,
    rating: 4.4,
    reviewsCount: 1321,
    image: "https://images-eu.ssl-images-amazon.com/images/I/71tl8pu4fKL.jpg",
    images: [
      "https://images-eu.ssl-images-amazon.com/images/I/71tl8pu4fKL.jpg"
    ],
    prime: true,
    available: true,
    shortDescription: "Ultra-Premium AI flagship phone featuring 200MP detail, custom titanium body, and integrated S Pen productivity.",
    description: "The peak of smartphone innovation. Samsung Galaxy S25 Ultra brings revolutionary Galaxy AI features, an incredible 200MP pro-grade camera sensor for ultimate night captures, and an incredibly strong Titanium framework. Comes with the responsive S Pen built right in.",
    features: [
      "Epic 200MP Camera: Zoom and crop with pristine details intact.",
      "Galaxy AI Built-in: Live translation, smart circle-to-search, and generative photo editing.",
      "Titanium Build: Lighter, stronger, and more resilient than previous generations.",
      "Premium S Pen: Sketch, write, and control your device with remote hand gestures."
    ],
    brand: "Samsung",
    specifications: {
      "Brand": "Samsung",
      "Model": "S25 Ultra",
      "ASIN": "B0DSKNKCYX",
      "Battery": "5000 mAh"
    },
    amazonUrl: `https://www.amazon.in/dp/B0DSKNKCYX?tag=${affiliateId}`
  },
  {
    id: "viral-nord-ce6",
    name: "OnePlus Nord CE6 Lite | 8GB+128GB | Vivid Mint | Segment's Fastest Dimensity 7400 Apex Processor | 7000mAh Battery",
    category: "electronics",
    subCategory: "Electronics Top Picks",
    price: 27999,
    originalPrice: 37836.49,
    discount: 26,
    rating: 4.3,
    reviewsCount: 948,
    image: "https://images-eu.ssl-images-amazon.com/images/I/61bbly9wcKL.jpg",
    images: [
      "https://images-eu.ssl-images-amazon.com/images/I/61bbly9wcKL.jpg"
    ],
    prime: true,
    available: true,
    shortDescription: "Eye-catching Vivid Mint edition boasting heavy battery life and optimized MediaTek gaming architecture.",
    description: "The OnePlus Nord CE6 Lite stands out with its striking Vivid Mint colorway and powerful performance. Powered by the Dimensity 7400 Apex processor and packed with a huge 7000mAh battery, it keeps up with your active life without breaking a sweat.",
    features: [
      "Vivid Mint Aesthetics: Beautiful satin matte back panel that turns heads.",
      "Dimensity 7400 Apex: Ultra-efficient 4nm process for lag-free multitasking.",
      "Superb 7000mAh Battery: Go up to two full days without plugging in.",
      "Bright AMOLED Display: 120Hz refresh rate with peak brightness up to 2000 nits."
    ],
    brand: "OnePlus",
    specifications: {
      "Brand": "OnePlus",
      "Model": "Nord CE6 Lite",
      "ASIN": "B0GVYGLNH7"
    },
    amazonUrl: `https://www.amazon.in/dp/B0GVYGLNH7?tag=${affiliateId}`
  },
  {
    id: "viral-galaxy-m47",
    name: "Samsung Galaxy M47 5G (Blaze Blue, 6GB RAM, 128GB Storage) | Powerful Snapdragon Processor | 120Hz Super AMOLED",
    category: "electronics",
    subCategory: "Electronics Top Picks",
    price: 25999,
    originalPrice: 42621.31,
    discount: 39,
    rating: 4.2,
    reviewsCount: 9342,
    image: "https://images-eu.ssl-images-amazon.com/images/I/71hoMhV+VeL.jpg",
    images: [
      "https://images-eu.ssl-images-amazon.com/images/I/71hoMhV+VeL.jpg"
    ],
    prime: true,
    available: true,
    shortDescription: "Snapdragon speed meets a gorgeous, bright 120Hz screen at a highly accessible price tier.",
    description: "Built for speed and immersive entertainment, the Samsung Galaxy M47 features a vivid 120Hz Super AMOLED screen and lightning-fast Snapdragon 5G chipset. Capture brilliant photos with the high-resolution multi-camera array and enjoy worry-free multi-day use.",
    features: [
      "AMOLED Display: Rich contrast and deeply immersive black levels.",
      "Snapdragon 5G Chipset: Lag-free loading speeds and rapid network response.",
      "50MP Triple Camera: AI-enhanced portraits and crispy nighttime photography.",
      "Express Charging: Quickly refills battery for immediate on-the-go availability."
    ],
    brand: "Samsung",
    specifications: {
      "Brand": "Samsung",
      "Model": "Galaxy M47",
      "ASIN": "B0H4LBXQDC"
    },
    amazonUrl: `https://www.amazon.in/dp/B0H4LBXQDC?tag=${affiliateId}`
  },
  {
    id: "viral-oneplus-nord-ce6-pro",
    name: "OnePlus Nord CE6 | 8GB+256GB | Pitch Black | Snapdragon 7s Gen 4 | Segment's Fastest Touch Response | 8000mAh Battery",
    category: "electronics",
    subCategory: "Electronics Top Picks",
    price: 36999,
    originalPrice: 60654.1,
    discount: 39,
    rating: 4.2,
    reviewsCount: 1285,
    image: "https://images-eu.ssl-images-amazon.com/images/I/61Di24QT6GL.jpg",
    images: [
      "https://images-eu.ssl-images-amazon.com/images/I/61Di24QT6GL.jpg"
    ],
    prime: true,
    available: true,
    shortDescription: "Deep Pitch Black premium mid-ranger built with high memory, superior touch responsiveness, and giant battery.",
    description: "Designed for intensive power users and gaming enthusiasts. The OnePlus Nord CE6 boasts an ultra-responsive 144Hz high-refresh touch panel, Snapdragon 7s Gen 4 high-octane processor, and a monstrous 8000mAh battery that delivers unmatched standby and active play times.",
    features: [
      "Snapdragon 7s Gen 4: Next-level power efficiency and fast loading.",
      "8000mAh Battery: Industry-leading battery density and lifetime longevity.",
      "144Hz Smooth Display: Instant gesture response for optimal mobile gaming.",
      "256GB Massive Storage: Plenty of space for photos, games, apps, and video records."
    ],
    brand: "OnePlus",
    specifications: {
      "Brand": "OnePlus",
      "Model": "Nord CE6",
      "ASIN": "B0GVYGLNH7"
    },
    amazonUrl: `https://www.amazon.in/dp/B0GVYGLNH7?tag=${affiliateId}`
  }
];
