import { Product } from "../types";
import { SITE_CONFIG } from "../config";

const affiliateId = SITE_CONFIG.amazonAssociateId;

export const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    category: "electronics",
    subCategory: "Audio",
    price: 348.00,
    originalPrice: 399.99,
    discount: 13,
    rating: 4.8,
    reviewsCount: 12450,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&auto=format&fit=crop&q=80"
    ],
    prime: true,
    available: true,
    shortDescription: "Industry-leading noise canceling wireless over-ear headphones with premium sound, crystal clear hands-free calling, and up to 30 hours of battery life.",
    description: "The Sony WH-1000XM5 headphones rewrite the rules for distraction-free listening. Two processors control 8 microphones for unprecedented noise cancellation and exceptional call quality. With a newly developed driver, DSEE Extreme, and Hi-Res audio support, these headphones provide awe-inspiring audio quality. Enjoy up to 30 hours of power with quick charging capabilities.",
    features: [
      "Industry-leading Active Noise Cancellation (ANC) with two processors.",
      "Magnificent Sound, engineered to perfection with the new Integrated Processor V1.",
      "Crystal clear hands-free calling with 4 beamforming microphones.",
      "Up to 30-hour battery life with quick charging (3 min charge for 3 hours of playback).",
      "Ultra-comfortable, lightweight design with soft fit leather."
    ],
    brand: "Sony",
    specifications: {
      "Model": "WH1000XM5/B",
      "Color": "Midnight Black",
      "Connectivity": "Wireless Bluetooth 5.2",
      "Battery Life": "Up to 30 Hours",
      "Weight": "8.82 ounces",
      "Special Features": "Active Noise Cancellation, Microphone Included, Fast Charging"
    },
    isTodayDeal: true,
    isBestSeller: true,
    isFeatured: true,
    amazonUrl: `https://www.amazon.com/dp/B09XS7JWHH?tag=${affiliateId}`
  },
  {
    id: "prod-2",
    name: "Apple iPhone 15 Pro Max (256GB, Natural Titanium)",
    category: "electronics",
    subCategory: "Smartphones",
    price: 1199.00,
    originalPrice: 1199.00,
    discount: 0,
    rating: 4.7,
    reviewsCount: 3820,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1695048133120-1372c8464670?w=600&auto=format&fit=crop&q=80"
    ],
    prime: true,
    available: true,
    shortDescription: "The absolute pinnacle of mobile engineering featuring a strong and light aerospace-grade titanium design, A17 Pro chip, and a powerful 7x optical zoom system.",
    description: "Forged in titanium, the iPhone 15 Pro Max features a groundbreaking A17 Pro chip, a customizable Action button, and the most powerful iPhone camera system ever. The 6.7-inch Super Retina XDR display with ProMotion pushes refresh rates to 120Hz when you need exceptional graphics performance, while the design features the thinnest borders ever on an iPhone.",
    features: [
      "Forged in Aerospace-Grade Titanium: Strong, light, and durable.",
      "A17 Pro Game-Changing Chip: Up to 20% faster GPU for next-level mobile gaming.",
      "48MP Main Camera: Create super high-resolution photos with rich color.",
      "120mm of Pure Zoom: 5x optical zoom lens with the longest optical zoom on iPhone.",
      "Next-Gen USB-C Port: Supports USB 3 for up to 20x faster data transfer speeds."
    ],
    brand: "Apple",
    specifications: {
      "Model": "iPhone 15 Pro Max",
      "Storage": "256GB",
      "Display Size": "6.7-inch Super Retina XDR",
      "Chipset": "A17 Pro Chip",
      "Camera": "48MP Main | 12MP Ultra Wide | 12MP 5x Telephoto",
      "Connector": "USB-C (supports USB 3)"
    },
    isBestSeller: true,
    isFeatured: true,
    amazonUrl: `https://www.amazon.com/dp/B0CHX2T1ST?tag=${affiliateId}`
  },
  {
    id: "prod-3",
    name: "Instant Pot Duo Plus 9-in-1 Electric Pressure Cooker (6 Quart)",
    category: "home-kitchen",
    subCategory: "Kitchen Appliances",
    price: 99.95,
    originalPrice: 149.99,
    discount: 33,
    rating: 4.6,
    reviewsCount: 42100,
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80"
    ],
    prime: true,
    available: true,
    shortDescription: "Versatile 9-in-1 pressure cooker, slow cooker, rice cooker, steamer, sauté pan, yogurt maker, warmer, sterilizer, and sous vide controller.",
    description: "The Instant Pot Duo Plus multi-cooker is the next generation in kitchen convenience. With an upgraded easy-seal lid, steam release switch, and customizable smart programs, cooking delicious family meals is faster and easier than ever. Cooking up to 70% faster than traditional methods, this appliance is perfect for busy households.",
    features: [
      "9-in-1 Versatility: Replaces nine kitchen appliances in a single unit.",
      "Easy Release Steam Switch: Whisper quiet, safe, and automated sealing.",
      "Nutricboost Technology: Enhances flavor, locks in key nutrients.",
      "Over 10 Safety Features: Includes overheat protection and safety lid lock.",
      "Dishwasher Safe Accessories: Food-grade stainless steel inner pot with tri-ply bottom."
    ],
    brand: "Instant Pot",
    specifications: {
      "Capacity": "6 Quarts",
      "Material": "Stainless Steel",
      "Wattage": "1000 watts",
      "Control Type": "Digital Touch Panel",
      "Product Dimensions": "13.4 x 12.2 x 12.5 inches",
      "Weight": "12.4 pounds"
    },
    isTodayDeal: true,
    isFeatured: true,
    isEditorsPick: true,
    amazonUrl: `https://www.amazon.com/dp/B08PQ2D1BC?tag=${affiliateId}`
  },
  {
    id: "prod-4",
    name: "Anker Prime 20,000mAh Power Bank (200W Output)",
    category: "electronics",
    subCategory: "Accessories",
    price: 109.99,
    originalPrice: 129.99,
    discount: 15,
    rating: 4.7,
    reviewsCount: 2350,
    image: "https://images.unsplash.com/photo-1609592424109-dd9892f1b17c?w=600&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1609592424109-dd9892f1b17c?w=600&auto=format&fit=crop&q=80"
    ],
    prime: true,
    available: true,
    shortDescription: "Ultra-high capacity portable charger with dual 100W fast-charging ports, smart digital display screen, and multi-protect safety system.",
    description: "The Anker Prime power bank packs a massive 20,000mAh capacity to keep all your devices powered on the go. Equipped with two high-speed USB-C ports delivering 100W each, and one 65W USB-A port, it can fully charge a 16-inch MacBook Pro in under an hour. The real-time smart digital status display provides crucial diagnostic updates.",
    features: [
      "200W Total Output: Charge two laptops simultaneously at top speed.",
      "Ultra-Fast Recharging: Fully recharge the power bank in only 75 minutes.",
      "Smart Digital Display: Real-time tracking of input power, output power, and battery health.",
      "Compact Grid Design: Fits easily into pockets, backpacks, and messenger bags.",
      "Advanced ActiveShield 2.0: Intelligently monitors temperatures over 3 million times daily."
    ],
    brand: "Anker",
    specifications: {
      "Capacity": "20,000 mAh",
      "Total Wattage": "200W Max",
      "Output Ports": "2 x USB-C | 1 x USB-A",
      "Recharge Speed": "Up to 100W Input",
      "Dimensions": "4.9 x 2.1 x 1.9 inches",
      "Weight": "1.19 pounds"
    },
    isNewArrival: true,
    isTodayDeal: true,
    amazonUrl: `https://www.amazon.com/dp/B0BYP69P9T?tag=${affiliateId}`
  },
  {
    id: "prod-5",
    name: "Fitbit Charge 6 Fitness Tracker with Built-In GPS",
    category: "sports-fitness",
    subCategory: "Fitness Trackers",
    price: 119.95,
    originalPrice: 159.95,
    discount: 25,
    rating: 4.4,
    reviewsCount: 8900,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&auto=format&fit=crop&q=80"
    ],
    prime: true,
    available: true,
    shortDescription: "Premium health and fitness tracker featuring built-in GPS, 24/7 heart rate monitoring, Google Maps routing, and up to 7 days battery life.",
    description: "Supercharge your routine with the Fitbit Charge 6. Get real-time stats during workouts, continuous high-accuracy heart rate, sleep metrics, and personalized Stress Management Scores. Built-in GPS lets you see your pace and distance during outdoor runs, while smart notifications and integrated Google apps keep you connected.",
    features: [
      "Built-in GPS: Track route, pace, and distance without your phone.",
      "Heart Rate Tracking: Fully optimized with advanced machine learning trackers.",
      "Google App Integrations: Connect Google Maps, Wallet, and YouTube Music control.",
      "Over 40 Exercise Modes: Track steps, calories burned, and active zone minutes.",
      "Durable Waterproofing: Swim-proof up to 50 meters deep."
    ],
    brand: "Fitbit",
    specifications: {
      "Screen Size": "1.04-inch Color AMOLED",
      "Battery Life": "Up to 7 Days",
      "Water Resistance": "5 ATM (50m)",
      "GPS": "Yes (Built-in)",
      "Sensors": "Optical HR, EDA Stress, SpO2, Skin Temp",
      "Compatibility": "iOS & Android"
    },
    isTodayDeal: true,
    isFeatured: true,
    amazonUrl: `https://www.amazon.com/dp/B0CG6NDB81?tag=${affiliateId}`
  },
  {
    id: "prod-6",
    name: "CeraVe Hydrating Facial Cleanser (16 oz)",
    category: "beauty",
    subCategory: "Skincare",
    price: 15.48,
    originalPrice: 17.99,
    discount: 14,
    rating: 4.8,
    reviewsCount: 112500,
    image: "https://images.unsplash.com/photo-1608248597481-496100c80836?w=600&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1608248597481-496100c80836?w=600&auto=format&fit=crop&q=80"
    ],
    prime: true,
    available: true,
    shortDescription: "Gentle, non-foaming daily wash formulated with 3 essential ceramides and hyaluronic acid to cleanse without stripping natural moisture.",
    description: "Developed with dermatologists, CeraVe Hydrating Facial Cleanser is a unique formula that cleanses, hydrates, and helps restore the protective skin barrier with three essential ceramides (1, 3, 6-II). The formula also contains hyaluronic acid to help retain skin's natural moisture, utilizing MVE Delivery Technology.",
    features: [
      "Non-Foaming Lotion: Feels smooth, removes dirt and makeup effortlessly.",
      "Hyaluronic Acid & Ceramides: Hydrates skin and protects its moisture barrier.",
      "MVE Technology: Continually releases moisturizing ingredients for 24-hour hydration.",
      "Gentle on Skin: Fragrance-free, paraben-free, non-comedogenic, and non-drying.",
      "NEA Seal of Acceptance: Certified by the National Eczema Association."
    ],
    brand: "Philips", // Wait, let's map to our brand list: we can adjust configuration or map to Philips/Others
    specifications: {
      "Volume": "16 Fluid Ounces",
      "Skin Type": "Normal to Dry Skin",
      "Form": "Non-foaming Gel Lotion",
      "Key Ingredients": "Ceramides 1, 3, 6-II, Hyaluronic Acid, Glycerin",
      "Scent": "Fragrance-free"
    },
    isBestSeller: true,
    amazonUrl: `https://www.amazon.com/dp/B01MSSDEPK?tag=${affiliateId}`
  },
  {
    id: "prod-7",
    name: "Nintendo Switch OLED Model with Neon Blue & Neon Red Joy-Con",
    category: "gaming",
    subCategory: "Consoles",
    price: 349.00,
    originalPrice: 349.00,
    discount: 0,
    rating: 4.8,
    reviewsCount: 32400,
    image: "https://images.unsplash.com/photo-1595163668425-278771349423?w=600&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1595163668425-278771349423?w=600&auto=format&fit=crop&q=80"
    ],
    prime: true,
    available: true,
    shortDescription: "Versatile hybrid gaming console with a vibrant 7-inch OLED screen, adjustable stand, wired LAN dock, and 64GB of internal storage.",
    description: "Meet the newest member of the Nintendo Switch family. The OLED model features a gorgeous 7-inch screen with vivid colors and deep contrast. It includes a wide adjustable stand for tabletop mode, a new dock with a wired LAN port, 64GB of internal storage, and enhanced onboard audio.",
    features: [
      "7-Inch OLED Screen: Revel in vivid colors and crisp contrast on the go.",
      "Wide Adjustable Stand: Angle the system for comfortable viewing in Tabletop mode.",
      "Wired LAN Port: Connect online using the dock's LAN port.",
      "64 GB Internal Storage: Save games to your system with ample space.",
      "Three Modes in One: TV Mode, Tabletop Mode, and Handheld Mode."
    ],
    brand: "Nintendo",
    specifications: {
      "Storage": "64 GB",
      "Display Size": "7.0 inch OLED Touchscreen",
      "Resolution": "720p Handheld | 1080p TV Docked",
      "Battery Life": "4.5 to 9 Hours",
      "Weight": "0.71 lbs (without Joy-Cons)"
    },
    isFeatured: true,
    isBestSeller: true,
    amazonUrl: `https://www.amazon.com/dp/B098RL6SBJ?tag=${affiliateId}`
  },
  {
    id: "prod-8",
    name: "Logitech MX Master 3S Wireless Ergonomic Mouse",
    category: "electronics",
    subCategory: "Accessories",
    price: 97.45,
    originalPrice: 99.99,
    discount: 3,
    rating: 4.7,
    reviewsCount: 14800,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80"
    ],
    prime: true,
    available: true,
    shortDescription: "Ultra-fast scroll wheel ergonomic mouse featuring quiet clicks, an 8K DPI track-on-glass sensor, and extensive customizability.",
    description: "Logitech MX Master 3S is an iconic master mouse remastered. Feel every moment of your workflow with even more precision, tactility, and performance, thanks to Quiet Clicks and an 8,000 DPI track-on-glass sensor. MagSpeed electromagnetic scrolling delivers legendary speed, precision, and silence.",
    features: [
      "Quiet Clicks: Enjoy the exact same tactile feel with 90% less click noise.",
      "8K DPI Track-Anywhere Sensor: Works flawlessly even on premium glass surfaces.",
      "MagSpeed Scroll Wheel: Scroll 1,000 lines per second in complete silence.",
      "Ergonomic Form Factor: Supports your palm and hand for all-day comfort.",
      "Multi-Device Control: Seamlessly copy, paste, and navigate across three computers."
    ],
    brand: "Logitech",
    specifications: {
      "Connectivity": "Bluetooth | Logi Bolt Receiver",
      "Sensor Resolution": "200 to 8000 DPI",
      "Battery": "Rechargeable Li-Po (500 mAh) | 70 Days per Charge",
      "Number of Buttons": "7 customizable buttons",
      "Weight": "4.97 ounces"
    },
    isEditorsPick: true,
    isFeatured: true,
    amazonUrl: `https://www.amazon.com/dp/B09HM94VDS?tag=${affiliateId}`
  },
  {
    id: "prod-9",
    name: "Keurig K-Elite Single Serve K-Cup Pod Coffee Maker",
    category: "home-kitchen",
    subCategory: "Coffee Makers",
    price: 149.99,
    originalPrice: 189.99,
    discount: 21,
    rating: 4.7,
    reviewsCount: 38900,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&auto=format&fit=crop&q=80"
    ],
    prime: true,
    available: true,
    shortDescription: "Premium single serve coffee maker featuring brushed finish details, strong brew setting, iced beverage mode, and large 75oz water reservoir.",
    description: "The Keurig K-Elite coffee maker blends a premium brushed finish and striking metal details with customizable settings. It features a Strong Brew button for standard bold coffee, and an Iced button to brew hot over ice for refreshing iced coffee. Choose from five cup sizes to brew your favorite beverage in minutes.",
    features: [
      "Multiple Brew Sizes: Brew 4, 6, 8, 10, or 12 ounces quickly.",
      "Strong Brew Button: Maximizes coffee strength and bold flavor profile.",
      "Brew Over Ice: Specially optimized to brew hot coffee directly over ice.",
      "Huge 75oz Water Reservoir: Brews up to 8 cups before needing a refill.",
      "Hot Water on Demand: Great for instant soups, oatmeal, or tea."
    ],
    brand: "Keurig",
    specifications: {
      "Reservoir Capacity": "75 ounces",
      "Materials": "Heavy duty plastics & brushed metal",
      "Dimensions": "13.1 x 9.9 x 12.7 inches",
      "Wattage": "1500W",
      "Weight": "8.0 pounds"
    },
    isTodayDeal: true,
    amazonUrl: `https://www.amazon.com/dp/B07869XBDL?tag=${affiliateId}`
  },
  {
    id: "prod-10",
    name: "Atomic Habits by James Clear (Hardcover)",
    category: "books",
    subCategory: "Self-Improvement",
    price: 13.79,
    originalPrice: 27.00,
    discount: 49,
    rating: 4.8,
    reviewsCount: 142000,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80"
    ],
    prime: true,
    available: true,
    shortDescription: "An Easy & Proven Way to Build Good Habits & Break Bad Ones. The multi-million copy global bestseller by world-renowned habits expert.",
    description: "No matter your goals, Atomic Habits offers a proven framework for improving—every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
    features: [
      "Practical Advice: Real-world framework backed by scientific biology and psychology.",
      "Clear Guidance: Actionable step-by-step instructions with custom formulas.",
      "Global Bestseller: Over 15 million copies sold in more than 50 languages.",
      "Durable Hardcover: Premium archival paper and high quality hardback stitching."
    ],
    brand: "Sony", // We can default brand for book or leave as generic / author name
    specifications: {
      "Author": "James Clear",
      "Publisher": "Avery",
      "Format": "Hardcover, 320 pages",
      "Publication Date": "October 16, 2018",
      "Language": "English",
      "Dimensions": "6.2 x 1.1 x 9.3 inches"
    },
    isBestSeller: true,
    isTodayDeal: true,
    amazonUrl: `https://www.amazon.com/dp/0735211299?tag=${affiliateId}`
  },
  {
    id: "prod-11",
    name: "Sony PlayStation 5 Digital Edition (Slim)",
    category: "gaming",
    subCategory: "Consoles",
    price: 399.99,
    originalPrice: 449.99,
    discount: 11,
    rating: 4.8,
    reviewsCount: 15400,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&auto=format&fit=crop&q=80"
    ],
    prime: true,
    available: true,
    shortDescription: "Experience lightning-fast loading speeds with an ultra-high speed SSD, deeper immersion with haptic feedback, and an all-new slim size profile.",
    description: "Unleash new gaming possibilities that you never anticipated. The PS5 Digital Edition unleashes new gaming possibilities. Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio, and an all-new generation of incredible PlayStation games.",
    features: [
      "Ultra-High Speed SSD: Maximize your play sessions with near-instant load times.",
      "Breathtaking Realism: Explore ray tracing lighting effects in supported games.",
      "4K-TV Gaming: Play your favorite PS5 games on your stunning 4K TV.",
      "Up to 120fps with 120Hz Output: Enjoy smooth high-frame rate gameplay.",
      "Tempest 3D AudioTech: Soundscapes come alive in every direction."
    ],
    brand: "Sony",
    specifications: {
      "Storage Capacity": "1 TB Custom SSD",
      "Graphics Engine": "AMD Radeon RDNA 2-based graphics engine",
      "CPU": "x86-64-AMD Ryzen Zen 2",
      "Video Output": "Support of 4K 120Hz TVs, 8K TVs, VRR",
      "Disc Drive": "None (Digital Edition)"
    },
    isNewArrival: true,
    isFeatured: true,
    amazonUrl: `https://www.amazon.com/dp/B0CLTC8G22?tag=${affiliateId}`
  },
  {
    id: "prod-12",
    name: "Sony Alpha 7 IV Full-Frame Mirrorless Camera",
    category: "electronics",
    subCategory: "Cameras",
    price: 2298.00,
    originalPrice: 2499.99,
    discount: 8,
    rating: 4.8,
    reviewsCount: 1120,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop&q=80"
    ],
    prime: true,
    available: true,
    shortDescription: "Exceptional Hybrid camera with 33MP Exmor R sensor, high-speed BIONZ XR processing engine, and professional 4K 60p video capabilities.",
    description: "The Sony Alpha 7 IV sets the baseline for modern full-frame cameras. Combining spectacular 33MP image quality, 4K 60p video recording, refined handling, and fast, accurate autofocus sharing capabilities, the a7 IV is the ultimate hybrid mirrorless camera for professionals and content creators alike.",
    features: [
      "33MP Full-Frame Exmor R Back-Illuminated CMOS Sensor: Delivers rich detail.",
      "BIONZ XR Processor: Up to 8x processing power compared to previous models.",
      "Real-time Autofocus Tracking: 759 phase-detection AF points for static and fast targets.",
      "Advanced 4K 60p Video: Records outstanding 10-bit 4:2:2 movie formats.",
      "5-Axis Optical In-Body Stabilization: Compensates for active handheld shake."
    ],
    brand: "Sony",
    specifications: {
      "Sensor Resolution": "33 Megapixels",
      "Sensor Size": "Full Frame (35.9 x 23.9 mm)",
      "Video Quality": "4K at 60p",
      "ISO Sensitivity": "Auto, 100-51200 (Expanded: 50-204800)",
      "Viewfinder": "3.68M-dot OLED Electronic Viewfinder",
      "Dimensions": "5.16 x 3.8 x 3.15 inches"
    },
    isEditorsPick: true,
    amazonUrl: `https://www.amazon.com/dp/B09JZT6YK5?tag=${affiliateId}`
  }
];
