import React, { useState, useEffect } from "react";
import { MessageSquare, ArrowUp, Sparkles, AlertCircle, ShoppingBag, ExternalLink } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import NewsletterPopup from "./components/NewsletterPopup";
import { WishlistDrawer } from "./components/WishlistDrawer";
import ProductQuickView from "./components/ProductQuickView";

// Views
import { HomeView } from "./views/HomeView";
import CategoriesView from "./views/CategoriesView";
import ProductDetailsView from "./views/ProductDetailsView";
import { BlogView } from "./views/BlogView";
import { StaticViews } from "./views/StaticViews";
import { ContactView } from "./views/ContactView";

// Config & Data
import { SITE_CONFIG } from "./config";
import { Product } from "./types";
import { FilterState } from "./components/SidebarFilters";

export default function App() {
  // Global States
  const [currentView, setCurrentView] = useState<string>("home");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedPostSlug, setSelectedPostSlug] = useState<string | null>(null);
  
  // Navigation stack state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  
  // Wishlist state with persistent client-side caching
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("wishlist-items");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  
  const [wishlistOpen, setWishlistOpen] = useState<boolean>(false);
  
  // Dark mode state with standard device preferences backup
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem("theme-mode");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return false;
    }
  });

  // Sidebar dynamic filters state
  const [filters, setFilters] = useState<FilterState>({
    category: "all",
    priceRange: "all",
    minRating: 0,
    minDiscount: 0,
    selectedBrands: [],
    primeOnly: false,
  });

  // Unified handler to set both selectedCategory and filters.category in a single render batch
  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setFilters((prev) => {
      if (prev.category === cat) return prev;
      return { ...prev, category: cat };
    });
  };

  // Unified handler to update filters and keep selectedCategory in sync
  const handleFiltersChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    if (newFilters.category !== selectedCategory) {
      setSelectedCategory(newFilters.category);
    }
  };

  // Back to Top button visibility state
  const [showScrollBtn, setShowScrollBtn] = useState<boolean>(false);

  // Sync dark-mode state to document element class list
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme-mode", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme-mode", "light");
    }
  }, [darkMode]);

  // Sync wishlist to local storage on modification
  useEffect(() => {
    localStorage.setItem("wishlist-items", JSON.stringify(wishlist));
  }, [wishlist]);

  // Check scroll position to show/hide back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update document SEO Title dynamically based on current view for SEO benefit
  useEffect(() => {
    let title = SITE_CONFIG.siteTitle;
    switch (currentView) {
      case "home":
        title = `${SITE_CONFIG.siteName} - Best Amazon Affiliate Deals & Buying Guides`;
        break;
      case "categories":
        title = `Shop Catalog - Handpicked Amazon Products | ${SITE_CONFIG.siteName}`;
        break;
      case "deals":
        title = `🔥 Today's Mega Deals - Up to 70% Off | ${SITE_CONFIG.siteName}`;
        break;
      case "blog":
        title = selectedPostSlug 
          ? `Guide: ${selectedPostSlug.replace("-", " ")} | ${SITE_CONFIG.siteName}`
          : `Buying Guides & Reviews | ${SITE_CONFIG.siteName}`;
        break;
      case "about":
        title = `About Our Expert Editorial Team | ${SITE_CONFIG.siteName}`;
        break;
      case "contact":
        title = `Contact Us - Submit Deals & Feedback | ${SITE_CONFIG.siteName}`;
        break;
      case "faq":
        title = `Frequently Asked Questions & Support | ${SITE_CONFIG.siteName}`;
        break;
      case "disclosure":
        title = `Amazon Associate Relationship Disclosure | ${SITE_CONFIG.siteName}`;
        break;
      case "privacy":
        title = `Privacy Policy | ${SITE_CONFIG.siteName}`;
        break;
      case "terms":
        title = `Terms & Conditions | ${SITE_CONFIG.siteName}`;
        break;
      case "product-details":
        if (selectedProduct) {
          title = `${selectedProduct.name} - Buy Now on Amazon | ${SITE_CONFIG.siteName}`;
        }
        break;
      default:
        break;
    }
    document.title = title;
  }, [currentView, selectedProduct, selectedPostSlug]);

  // Wishlist handler toggle
  const handleToggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  const handleClearWishlist = () => {
    if (window.confirm("Are you sure you want to clear all items from your saved list?")) {
      setWishlist([]);
    }
  };

  const handleProductDetailOpen = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView("product-details");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-transparent text-slate-800 dark:text-slate-200 font-sans flex flex-col transition-colors duration-200">
      
      {/* Dynamic Header Navigation */}
      <Header
        currentView={currentView}
        setCurrentView={(view) => {
          setCurrentView(view);
          setSelectedPostSlug(null);
          setSelectedProduct(null);
        }}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={handleCategoryChange}
        wishlistCount={wishlist.length}
        openWishlist={() => setWishlistOpen(true)}
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
      />

      {/* Main View Port router mapping */}
      <main className="flex-1 pb-16">
        {currentView === "home" && (
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
            <HomeView
              setCurrentView={setCurrentView}
              setSelectedCategory={handleCategoryChange}
              setSelectedPostSlug={setSelectedPostSlug}
              onProductClick={handleProductDetailOpen}
              onQuickView={setQuickViewProduct}
              wishlist={wishlist}
              onToggleWishlist={handleToggleWishlist}
            />
          </div>
        )}

        {currentView === "categories" && (
          <CategoriesView
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={handleCategoryChange}
            filters={filters}
            setFilters={handleFiltersChange}
            onProductClick={handleProductDetailOpen}
            onQuickView={setQuickViewProduct}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
            viewMode="catalog"
          />
        )}

        {currentView === "deals" && (
          <CategoriesView
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={handleCategoryChange}
            filters={filters}
            setFilters={handleFiltersChange}
            onProductClick={handleProductDetailOpen}
            onQuickView={setQuickViewProduct}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
            viewMode="deals"
          />
        )}

        {currentView === "product-details" && selectedProduct && (
          <ProductDetailsView
            product={selectedProduct}
            onBack={() => {
              setCurrentView("categories");
              setSelectedProduct(null);
            }}
            isWishlisted={wishlist.includes(selectedProduct.id)}
            onToggleWishlist={handleToggleWishlist}
            onProductClick={handleProductDetailOpen}
            onQuickView={setQuickViewProduct}
            wishlist={wishlist}
          />
        )}

        {currentView === "blog" && (
          <BlogView
            selectedPostSlug={selectedPostSlug}
            setSelectedPostSlug={setSelectedPostSlug}
            onProductClick={handleProductDetailOpen}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
            onQuickView={setQuickViewProduct}
          />
        )}

        {/* Static Content router conditions */}
        {["about", "faq", "privacy", "terms", "disclosure"].includes(currentView) && (
          <StaticViews view={currentView as any} />
        )}

        {currentView === "contact" && (
          <ContactView />
        )}
      </main>

      {/* Global Footer */}
      <Footer 
        setCurrentView={(view) => {
          setCurrentView(view);
          setSelectedPostSlug(null);
          setSelectedProduct(null);
        }}
        setSelectedCategory={handleCategoryChange}
      />

      {/* Dynamic Slide Drawers and Overlays */}
      <WishlistDrawer
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        wishlistIds={wishlist}
        onToggleWishlist={handleToggleWishlist}
        onProductClick={handleProductDetailOpen}
        onClearAll={handleClearWishlist}
      />

      <ProductQuickView
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        isWishlisted={quickViewProduct ? wishlist.includes(quickViewProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* Privacy and marketing popups */}
      <CookieConsent />
      <NewsletterPopup />

      {/* Floaters: WhatsApp + Back to Top */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Floating WhatsApp Contact */}
        <a
          href={SITE_CONFIG.socials.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full flex items-center justify-center shadow-2xl transition transform hover:scale-105 active:scale-95 cursor-pointer hover:rotate-6 duration-200"
          title="Contact expert deal researcher on WhatsApp"
        >
          <MessageSquare className="w-5.5 h-5.5 fill-white stroke-none" />
        </a>

        {/* Back to top scroll button */}
        {showScrollBtn && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-full flex items-center justify-center shadow-2xl transition transform hover:scale-105 active:scale-95 cursor-pointer duration-200"
            title="Scroll Back to Top"
          >
            <ArrowUp className="w-5 h-5 stroke-[2.5]" />
          </button>
        )}
      </div>

    </div>
  );
}
