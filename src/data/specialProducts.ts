import { Product } from "../types";
import { SITE_CONFIG } from "../config";

const affiliateId = SITE_CONFIG.amazonAssociateId;

/**
 * ==========================================
 *              HERO PRODUCTS
 * ==========================================
 * This list of products is showcased at the very top 
 * of the homepage as the exclusive spotlight deals carousel.
 */
export const HERO_PRODUCTS: Product[] = [
  {
    id: "hero-silicone-stretch-lids",
    name: "Reusable Silicone Stretch Lids Cover (Pack of 6) | Stretchable, Durable Food-Grade Silicone Covers for Bowls, Cups, Cans, Pots, and Food Storage | Dishwasher, Microwave & Freezer Safe",
    category: "home",
    subCategory: "Kitchen Accessories",
    price: 138,
    originalPrice: 399,
    discount: 65,
    rating: 4.3,
    reviewsCount: 2845,
    image: "https://m.media-amazon.com/images/I/51BrFR5qyvL.jpg",
    images: [
      "https://m.media-amazon.com/images/I/51BrFR5qyvL.jpg"
    ],
    prime: true,
    available: true,
    shortDescription: "Say goodbye to plastic wrap! These eco-friendly, reusable silicone stretch lids fit various sizes of bowls, cups, and pots, keeping food fresh with an airtight, leak-proof seal.",
    description: "Upgrade your kitchen storage with these highly stretchable and reusable silicone lids. Crafted from 100% premium, BPA-free food-grade silicone, these stretch lids are designed to stretch over containers of different shapes and sizes (round, square, or rectangular). Perfect for storing leftovers, sealing cut fruits, keeping beverages fresh, and preventing messy spills. They are heat-resistant, dishwasher-safe, microwave-safe, and freezer-safe, making them the ultimate eco-friendly kitchen companion.",
    features: [
      "100% Food-Grade Silicone: Made from premium, BPA-free, non-toxic, and eco-friendly silicone. Safe for direct contact with food.",
      "Superior Stretch & Versatile Sizes: Pack of 6 different diameter lids that stretch to fit various round, square, or rectangular bowls, pots, cups, jars, and even cut melons.",
      "Airtight & Leak-Proof Seal: Creates a perfect vacuum seal on glass, plastic, or metal containers to lock in freshness and prevent spills—even when turned upside down.",
      "Extreme Temperature Resistance: Safely use in the microwave, freezer, and oven (withstands temperatures from -40°C to 230°C).",
      "Easy to Clean & Eco-Friendly: Simply toss in the dishwasher or rinse with warm soapy water. Reusable design completely replaces single-use plastic wrap and foil."
    ],
    brand: "Basic Haus",
    specifications: {
      "Brand": "Basic Haus",
      "Model": "Silicone Stretch Lids Cover Set",
      "Material": "100% Food-Grade BPA-Free Silicone",
      "Count": "6 Lids of Various Sizes",
      "Special Features": "Leak-proof, Stretchable, Microwave/Oven/Freezer Safe, Dishwasher Friendly",
      "ASIN": "B0CHZ69ZFN"
    },
    isTodayDeal: true,
    amazonUrl: `https://www.amazon.in/gp/product/B0CHZ69ZFN?smid=A379A61TLL3VGH&tag=${affiliateId}`
  },
  {
    id: "hero-soap-dispensing-brush",
    name: "Soap Dispensing Palm Brush, Kitchen Cleaning Scrubber with Liquid Dispenser, Dish Washing Brush with Refillable Handle for Utensils, Sink & Household Cleaning",
    category: "home",
    subCategory: "Kitchen Utilities",
    price: 179,
    originalPrice: 499,
    discount: 64,
    rating: 4.4,
    reviewsCount: 1845,
    image: "https://m.media-amazon.com/images/I/41kV4CU7iGL.jpg",
    images: [
      "https://m.media-amazon.com/images/I/41kV4CU7iGL.jpg"
    ],
    prime: true,
    available: true,
    shortDescription: "Upgrade your cleaning routine with the premium Soap Dispensing Palm Brush. Effortlessly dispense liquid soap with a push-button mechanism while scrubbing stubborn grime.",
    description: "Upgrade your cleaning routine with the premium Soap Dispensing Palm Brush. Effortlessly dispense liquid soap with a push-button mechanism while scrubbing stubborn grime. Perfect for washing dishes, pots, pans, sinks, cast iron, stove-tops, and bathroom tiles.",
    features: [
      "Smart Soap Dispensing: Press the top button to dispense soap on-demand, reducing waste and keeping hands clean.",
      "Ergonomic Palm Grip: Fits comfortably in your palm for maximum leverage, control, and non-slip scrubbing power.",
      "Durable Nylon Bristles: High-density, odor-resistant bristles easily scrub away grease and food residue without scratching.",
      "Refillable Clear Body: Transparent reservoir shows remaining soap level, making refills quick and easy.",
      "Versatile Scrubber: Perfect for washing dishes, pots, pans, sinks, cast iron, stove-tops, and bathroom tiles."
    ],
    brand: "GIEXICA",
    specifications: {
      "Brand": "GIEXICA",
      "Model": "Soap Dispensing Palm Brush",
      "Material": "Premium ABS & Nylon Bristles",
      "Special Feature": "On-demand soap release, non-slip grip, refillable reservoir",
      "ASIN": "B0GVK89GC7"
    },
    isTodayDeal: true,
    amazonUrl: `https://www.amazon.in/gp/product/B0GVK89GC7/ref=ox_sc_act_title_3?smid=AZDM1T8DAFHPJ&psc=1&tag=${affiliateId}`
  },
  {
    id: "hero-misamo-oil-dispenser",
    name: "Misamo Enterprise Oil Dispenser and Sprayer 2-in-1, Premium Glass Olive Oil Dispenser Bottle with Handle & Dual Function (Pour & Spray) for Kitchen, Cooking, Baking, Salad, Air Fryer",
    category: "home",
    subCategory: "Kitchen Essentials",
    price: 349,
    originalPrice: 999,
    discount: 65,
    rating: 4.5,
    reviewsCount: 1248,
    image: "https://m.media-amazon.com/images/I/713+2UPOISL._SL1500_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/713+2UPOISL._SL1500_.jpg"
    ],
    prime: true,
    available: true,
    shortDescription: "Upgrade your culinary game with the premium 2-in-1 glass oil dispenser and sprayer. Effortlessly switch between pouring and spraying for perfect, healthy cooking.",
    description: "Ditch the messy oil bottles and uneven sprays! The Misamo Enterprise 2-in-1 Glass Oil Dispenser & Sprayer is the ultimate kitchen companion for healthy, precise cooking. Featuring an ergonomic handle and an advanced dual-function mechanism, it allows you to gracefully pour oil for stir-fries or spray a fine, uniform mist for air frying, baking, salads, and grilling. Crafted from premium, lead-free borosilicate glass, it's 100% food-safe, durable, and elegant enough to transition from the countertop to your dining table.",
    features: [
      "Innovative 2-in-1 Design: Seamlessly switch between a steady, dripless pour and an ultra-fine wide-angle spray with a single thumb-controlled lever.",
      "Healthy & Portion Control: Fine mist spray helps distribute oil evenly, reducing calorie intake and minimizing oil waste.",
      "Premium Food-Safe Glass: Built with high-quality borosilicate glass that's heat-resistant, lead-free, and extremely easy to clean.",
      "Ergonomic Non-Slip Handle: Designed with a sturdy grip handle that prevents slipping, ensuring safe handling even with oily hands.",
      "Wide-Mouth Easy Refill: The spacious opening makes refilling a breeze without needing a funnel, and accommodates a variety of oils, vinegars, and sauces."
    ],
    brand: "Misamo Enterprise",
    specifications: {
      "Brand": "Misamo Enterprise",
      "Material": "Premium Borosilicate Glass & Food-Grade Plastic",
      "Capacity": "470ml / 16oz",
      "Special Feature": "Dual Function (Spray & Pour), Leak-Proof, Ergonomic Handle",
      "ASIN": "B0DH4WS3B4",
      "Best Seller Rank": "#1 in Kitchen Sprayers",
      "Warranty": "100% Genuine and Brand New"
    },
    isTodayDeal: true,
    amazonUrl: `https://www.amazon.in/Misamo-Enterprise-OIL-DISPENSER-SPRAYER/dp/B0DH4WS3B4/ref=pd_rhf_ee_s_pd_crcd_d_sccl_2_3/257-3660837-2868308?tag=${affiliateId}`
  },
  {
    id: "hero-cuzor-router-ups",
    name: "Cuzor 12V Router UPS (Under-Power Supply) for Wi-Fi Router | Uninterrupted Internet with Switching & Moisture-Resistant | Up to 4 Hours Backup",
    category: "electronics",
    subCategory: "Wi-Fi Router Accessories",
    price: 1499,
    originalPrice: 2999,
    discount: 50,
    rating: 4.1,
    reviewsCount: 1420,
    image: "https://m.media-amazon.com/images/I/81kcE2D2ahL._SL1500_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/81kcE2D2ahL._SL1500_.jpg"
    ],
    prime: true,
    available: true,
    shortDescription: "Power your Wi-Fi router uninterruptedly during load shedding and power cuts. Seamless automatic switching, moisture-resistant design.",
    description: "Never lose internet connectivity during power outages! The Cuzor 12V Router UPS provides uninterrupted power to your Wi-Fi router, ensuring continuous video calls, online classes, or gaming sessions. Designed with professional-grade safety features, seamless millisecond switching, and moisture-resistant architecture, it keeps your home network active for up to 4 hours.",
    features: [
      "Up to 4 Hours Backup: Keeps your internet up and running during heavy power cuts.",
      "Seamless Zero-Lag Switching: Bridges power outages instantly without rebooting your Wi-Fi router.",
      "Moisture-Resistant Design: Robustly protected internal circuitry for all-weather durability.",
      "Wide Compatibility: Designed specifically for 12V routers, modems, and smart home hubs.",
      "Intelligent Charging: Built-in overcharge, deep discharge, and short-circuit protection."
    ],
    brand: "Cuzor",
    specifications: {
      "Brand": "Cuzor",
      "Model": "Router UPS 12V",
      "ASIN": "B07ZKD8T1Q",
      "Backup Time": "Up to 4 Hours",
      "Output Voltage": "12V DC"
    },
    amazonUrl: `https://www.amazon.in/Cuzor-Router-Switching-Moisture-Resistant/dp/B07ZKD8T1Q/ref=sr_1_3?tag=${affiliateId}`
  }
];

export const HERO_PRODUCT: Product = HERO_PRODUCTS[0];

/**
 * ==========================================
 *            VIRAL / TRENDY FINDS
 * ==========================================
 * These are the highly hyped products going viral on social media.
 * Add, remove, or modify items here to instantly update the section!
 */
export const VIRAL_PRODUCTS: Product[] = [
  ...HERO_PRODUCTS,
  {
    id: "viral-milton-egg-boiler",
    name: "MILTON Smart Instant Egg Boiler (360-Watt) | Boils Up to 7 Eggs at Once | 3 Boiling Modes (Hard, Medium, Soft) | Stainless Steel Heating Plate | Transparent Lid with Auto Shut-Off",
    category: "home",
    subCategory: "Kitchen Appliances",
    price: 549,
    originalPrice: 999,
    discount: 45,
    rating: 4.2,
    reviewsCount: 2341,
    image: "https://m.media-amazon.com/images/I/71F8B7VxqYL._SL1500_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/71r99E5C59L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71DCHtI7fDL._SL1500_.jpg"
    ],
    prime: true,
    available: true,
    shortDescription: "Boil up to 7 eggs to perfection in minutes. Features 3 custom boiling modes, dry boil protection, and premium stainless steel design.",
    description: "Enjoy hassle-free breakfasts with the MILTON Smart Instant Egg Boiler. Engineered with a powerful 360-watt heating element and a premium stainless steel heating plate, this compact appliance boils up to 7 eggs at once. Easily select from Soft, Medium, or Hard boiling modes simply by adjusting the water level using the included measuring cup. Designed for modern kitchens, it features a clear transparent lid for visual monitoring, dry-boil safety protection, and automatic cut-off to ensure perfectly cooked eggs every single time.",
    features: [
      "High Capacity: Boil up to 7 eggs simultaneously, saving time and energy.",
      "3 Boiling Modes: Select from Soft, Medium, or Hard boil simply by adjusting the water level.",
      "Stainless Steel Plate: Fast heating, durable, and extremely easy to clean.",
      "Safety First: Equipped with an automatic shut-off function and dry boil protection.",
      "Measuring Cup Included: Comes with a custom water measuring cup with a built-in egg piercing pin to prevent cracking."
    ],
    brand: "Milton",
    specifications: {
      "Brand": "Milton",
      "Model": "Smart Egg Boiler",
      "Power Consumption": "360 Watts",
      "Capacity": "7 Eggs",
      "Material": "Stainless Steel & Plastic",
      "Special Feature": "Auto Shut-off, 3 Boiling Modes, Transparent Lid"
    },
    amazonUrl: `https://www.amazon.in/MILTON-Smart-Egg-Boiler-Transparent/dp/B08TTRVWKY/ref=sr_1_1_sspa?tag=${affiliateId}`
  },
  {
    id: "viral-kratos-k9-selfie-stick",
    name: "Kratos K9 Selfie Stick Tripod with Dual LED Light | 67-Inch / 170cm Extendable Reinforced Phone Tripod | Multi-Functional Bluetooth Remote & 360° Rotation for Travel, Vlogging, Selfies",
    category: "electronics",
    subCategory: "Mobile Accessories",
    price: 999,
    originalPrice: 2499,
    discount: 60,
    rating: 4.3,
    reviewsCount: 1240,
    image: "https://m.media-amazon.com/images/I/617qw0QPA8L._SL1500_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/617qw0QPA8L._SL1500_.jpg"
    ],
    prime: true,
    available: true,
    shortDescription: "The ultimate vlogging and travel companion. A premium 67-inch reinforced phone tripod with dual beauty LED lights and a detachable Bluetooth remote.",
    description: "Take your photos, videos, and live streams to a professional level with the Kratos K9 Selfie Stick Tripod. Extending up to an impressive 67 inches (170 cm), this reinforced mobile tripod features double integrated LED beauty lights with customizable color modes and brightness levels for flawless lighting anywhere. The 360° rotatable mount easily holds your phone horizontally or vertically, while the detachable wireless Bluetooth remote allows hands-free control from up to 30 feet away. Ultra-portable, lightweight, and durable, it's perfect for travel, vlogging, YouTube, and Zoom calls.",
    features: [
      "Ultra-Tall 67-Inch Reach: Smoothly extends from 12 inches up to 170cm, capturing wider angles and group shots easily.",
      "Dual Rechargeable LED Lights: Built-in beauty lights offer 3 color modes and 9 brightness settings to eliminate harsh shadows.",
      "Reinforced Tripod Base: Designed with double metal brackets and non-slip silicone feet for maximum stability on any surface.",
      "Detachable Bluetooth Remote: Pocket-sized wireless controller offers instant pairing and hands-free shooting up to 10 meters.",
      "360° Multi-Angle Rotation: Supports complete spherical adjustments, switching between portrait and landscape modes in a snap."
    ],
    brand: "Kratos",
    specifications: {
      "Brand": "Kratos",
      "Model": "K9 Selfie Stick Tripod",
      "ASIN": "B0F63BY6LT",
      "Maximum Height": "170 cm / 67 Inches",
      "Special Feature": "Dual Beauty Lights, Reinforced Base, Wireless Remote"
    },
    amazonUrl: `https://www.amazon.in/dp/B0F63BY6LT?tag=${affiliateId}`
  },
  {
    id: "viral-caresmith-charge-go",
    name: "CARESMITH Charge Go Cordless Massage Gun for Deep Tissue Pain Relief | Professional Handheld Percussion Body Massager | 6 Speed Levels & 4 Massage Heads | Type-C Fast Charging",
    category: "health",
    subCategory: "Personal Care Appliances",
    price: 1699,
    originalPrice: 3000,
    discount: 43,
    rating: 4.4,
    reviewsCount: 3450,
    image: "https://m.media-amazon.com/images/I/71Yju2RgxXL._SL1500_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/71Yju2RgxXL._SL1500_.jpg"
    ],
    prime: true,
    available: true,
    shortDescription: "A powerful cordless massage gun designed to relieve muscle stiffness, soreness, and pain. Features 6 speed levels, 4 heads, and Type-C charging.",
    description: "Experience instant muscle recovery and deep relaxation in the comfort of your home with the CARESMITH Charge Go Massage Gun. Equipped with a high-torque brushless motor delivering up to 3200 percussions per minute, this premium handheld massager reaches deep into muscle tissue to melt away knots, soreness, and fatigue. Featuring 6 adjustable speed levels and 4 specialized massage heads, it target areas like your neck, back, chest, glutes, and calves with therapeutic precision. The lightweight, ergonomic design and ultra-quiet motor make it perfect for athletes, fitness enthusiasts, and daily pain relief.",
    features: [
      "Advanced Deep Tissue Therapy: High-torque brushless motor delivers deep percussion to rapidly relieve muscle tension and pain.",
      "6 Speed Levels: Effortlessly adjust speeds up to 3200 RPM to switch between gentle muscle wake-up and intense deep massage.",
      "4 Specialized Heads: Includes Round head for large muscles, Bullet for joints, Flat for general use, and Fork for neck/spine.",
      "Type-C Fast Charging: Rechargeable premium battery provides hours of continuous cordless use on a single charge.",
      "Lightweight & Quiet: Weighs under 1 kg with an ergonomic grip and advanced noise-reduction technology for peaceful use."
    ],
    brand: "Caresmith",
    specifications: {
      "Brand": "Caresmith",
      "Model": "Charge Go Massager",
      "ASIN": "B0DQ1BX28X",
      "Power Source": "Battery Powered (Type-C Rechargeable)",
      "Special Feature": "6 Speeds, 4 Massage Heads, Silent-Tech Motor"
    },
    amazonUrl: `https://www.amazon.in/dp/B0DQ1BX28X?tag=${affiliateId}`
  },
  {
    id: "viral-qubo-smart-cam-360",
    name: "Qubo Smart Cam 360° 3MP Wi-Fi Smart Home Security Camera [2026 Edition] by Hero Group | STQC Certified Privacy | AI Person Detection & Motion Tracking | Color Night Vision | Two-Way Audio Talk",
    category: "electronics",
    subCategory: "Smart Home Security",
    price: 2490,
    originalPrice: 4290,
    discount: 42,
    rating: 4.2,
    reviewsCount: 12450,
    image: "https://m.media-amazon.com/images/I/7155rh9o61L._SL1500_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/7155rh9o61L._SL1500_.jpg"
    ],
    prime: true,
    available: true,
    shortDescription: "Protect your home with a premium 360° smart security camera. Features 3MP Ultra HD video, STQC certified privacy, AI detection, and two-way talk.",
    description: "Secure your home and stay connected with your loved ones using the Qubo Smart Cam 360° 3MP by Hero Group. Boasting a stellar 3MP Ultra HD sensor and a multi-directional motor, this security camera delivers a complete 360° panoramic view with crystal-clear day and night color vision. Engineered with advanced AI person detection and automatic motion tracking, it instantly detects intruders, rings a built-in alarm, and pushes immediate notifications to your smartphone. With STQC certified military-grade privacy and secure server hosting, your personal data stays fully protected.",
    features: [
      "3MP Ultra HD Resolution: Delivers exceptionally sharp 1296p video feed so you never miss a single detail.",
      "Complete 360° Coverage: Remote pan-and-tilt controls cover the entire room, eliminating blind spots completely.",
      "STQC Certified Security: Trusted military-grade privacy encryption protects your camera stream and personal video data.",
      "AI Person Detection: Intelligently distinguishes humans from pets or blowing curtains to eliminate false alerts.",
      "Enhanced Color Night Vision: Features a premium low-light sensor that captures bright, full-color video even in pitch dark."
    ],
    brand: "Qubo",
    specifications: {
      "Brand": "Qubo (by Hero Group)",
      "Model": "Smart Cam 360 3MP (2026)",
      "ASIN": "B0G64G64YL",
      "Resolution": "3MP (1296p) Ultra HD",
      "Connectivity": "Wi-Fi (2.4 GHz)",
      "Special Feature": "AI Tracking, Color Night Vision, Two-Way Audio, STQC Certified"
    },
    amazonUrl: `https://www.amazon.in/dp/B0G64G64YL?tag=${affiliateId}`
  },
  {
    id: "viral-dr-trust-legend-scale",
    name: "Dr Trust USA Legend Smart Bluetooth Body Fat Scale & BMI Weighing Machine | US FDA Approved | Measures 20+ Essential Body Composition Parameters | Supports Unlimited Users",
    category: "health",
    subCategory: "Health & Care",
    price: 1499,
    originalPrice: 3500,
    discount: 57,
    rating: 4.5,
    reviewsCount: 6820,
    image: "https://m.media-amazon.com/images/I/71e+jdqTJ-L._SL1500_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/71e+jdqTJ-L._SL1500_.jpg"
    ],
    prime: true,
    available: true,
    shortDescription: "US FDA approved high-precision smart scale measuring 20+ metrics including BMI, Body Fat, Muscle, and Water. Unlimited user profiles with Bluetooth sync.",
    description: "Track your fitness and wellness journey scientifically with the Dr Trust USA Legend Smart Scale. Backed by US FDA approval and equipped with 4 high-precision G-sensors, this state-of-the-art scale measures and analyzes over 20 essential body parameters, including Weight, Body Mass Index (BMI), Body Fat Percentage, Muscle Mass, Visceral Fat, Hydration Level, and Bone Mass. Utilizing advanced Bioelectrical Impedance Analysis (BIA) technology, it syncs seamlessly with the free Dr Trust Health App via Bluetooth. It supports unlimited user profiles, making it perfect for tracking the fitness goals of your entire family.",
    features: [
      "Measures 20+ Body Parameters: Comprehensive body analysis tracking fat, water, muscle, visceral fat, protein, and more.",
      "US FDA Approved Accuracy: Engineered with 4 high-precision G-sensors for consistent and medically reliable results.",
      "Bluetooth Smart App Sync: Automatically syncs all weight and health metrics directly to the Dr Trust Health App.",
      "Unlimited User Profiles: Automatically identifies different users and tracks individual historical trends securely.",
      "Premium Tempered Glass: Sleek black design with round safety corners, an easy-to-read LED display, and 3 years warranty."
    ],
    brand: "Dr Trust",
    specifications: {
      "Brand": "Dr Trust USA",
      "Model": "Legend Smart Scale",
      "ASIN": "B0D6NBHSY7",
      "Metrics Tracked": "20+ Body Composition Parameters",
      "Special Feature": "US FDA Approved, Bluetooth Sync, Unlimited Users, Tempered Glass"
    },
    amazonUrl: `https://www.amazon.in/dp/B0D6NBHSY7?tag=${affiliateId}`
  }
];
