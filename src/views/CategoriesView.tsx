import React, { useState, useMemo, useEffect } from "react";
import { Filter, ChevronDown, LayoutGrid, ListFilter, AlertTriangle, ArrowRight, Star } from "lucide-react";
import { PRODUCTS } from "../data/products";
import { Product } from "../types";
import ProductCard from "../components/ProductCard";
import SidebarFilters, { FilterState } from "../components/SidebarFilters";

interface CategoriesViewProps {
  searchQuery: string;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
  onProductClick: (product: Product) => void;
  onQuickView: (product: Product) => void;
  wishlist: string[];
  onToggleWishlist: (productId: string) => void;
  viewMode?: "deals" | "catalog";
}

export default function CategoriesView({
  searchQuery,
  selectedCategory,
  setSelectedCategory,
  filters,
  setFilters,
  onProductClick,
  onQuickView,
  wishlist,
  onToggleWishlist,
  viewMode = "catalog",
}: CategoriesViewProps) {
  
  const [sortBy, setSortBy] = useState<string>("featured");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState<boolean>(false);
  const itemsPerPage = 6;

  // Reset page when search, category, or filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, filters, sortBy]);

  // Dynamically calculate which brands exist in database
  const brandsList = useMemo(() => {
    const brands = PRODUCTS.map((p) => p.brand);
    return Array.from(new Set(brands)).sort();
  }, []);

  // Filter products based on search queries, side filters, and categories
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // If viewing today's deals view mode, pre-filter
    if (viewMode === "deals") {
      result = result.filter((p) => p.isTodayDeal || p.discount >= 15);
    }

    // Category filter
    if (filters.category && filters.category !== "all") {
      result = result.filter((p) => p.category === filters.category);
    }

    // Search query filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.shortDescription.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    // Prime Only filter
    if (filters.primeOnly) {
      result = result.filter((p) => p.prime);
    }

    // Min Rating filter
    if (filters.minRating > 0) {
      result = result.filter((p) => p.rating >= filters.minRating);
    }

    // Min Discount filter
    if (filters.minDiscount > 0) {
      result = result.filter((p) => p.discount >= filters.minDiscount);
    }

    // Selected Brands checkboxes
    if (filters.selectedBrands.length > 0) {
      result = result.filter((p) => filters.selectedBrands.includes(p.brand));
    }

    // Price Range filter
    if (filters.priceRange && filters.priceRange !== "all") {
      switch (filters.priceRange) {
        case "under-1000":
          result = result.filter((p) => p.price < 1000);
          break;
        case "1000-2500":
          result = result.filter((p) => p.price >= 1000 && p.price <= 2500);
          break;
        case "2500-5000":
          result = result.filter((p) => p.price >= 2500 && p.price <= 5000);
          break;
        case "5000-10000":
          result = result.filter((p) => p.price >= 5000 && p.price <= 10000);
          break;
        case "over-10000":
          result = result.filter((p) => p.price > 10000);
          break;
        default:
          break;
      }
    }

    // Sort algorithm implementations
    switch (sortBy) {
      case "price-low-high":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "discount":
        result.sort((a, b) => b.discount - a.discount);
        break;
      case "reviews":
        result.sort((a, b) => b.reviewsCount - a.reviewsCount);
        break;
      case "featured":
      default:
        // Featured priorities
        result.sort((a, b) => {
          const scoreA = (a.isFeatured ? 2 : 0) + (a.isBestSeller ? 1 : 0);
          const scoreB = (b.isFeatured ? 2 : 0) + (b.isBestSeller ? 1 : 0);
          return scoreB - scoreA;
        });
        break;
    }

    return result;
  }, [filters, searchQuery, sortBy, viewMode]);

  // Paginate filtered results
  const paginatedProducts = useMemo(() => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIdx, startIdx + itemsPerPage);
  }, [filteredProducts, currentPage]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const activeCategoryName = useMemo(() => {
    if (filters.category === "all") return "All Departments";
    if (filters.category === "electronics") return "Electronics Department";
    if (filters.category === "home-kitchen") return "Home & Kitchen Appliances";
    if (filters.category === "fashion") return "Fashion & Apparel";
    if (filters.category === "beauty") return "Beauty & Care Store";
    if (filters.category === "health") return "Health & Care Essentials";
    if (filters.category === "sports-fitness") return "Sports & Fitness Store";
    if (filters.category === "gaming") return "Gaming & Consoles";
    if (filters.category === "books") return "Books & Literary Collection";
    return "Products";
  }, [filters.category]);

  const handleResetAllFilters = () => {
    setFilters({
      category: "all",
      priceRange: "all",
      minRating: 0,
      minDiscount: 0,
      selectedBrands: [],
      primeOnly: false,
    });
    setSelectedCategory("all");
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8 animate-in fade-in duration-300">
      
      {/* 1. Header Banner of Categories */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-150 dark:border-slate-850 pb-5">
        <div>
          <span className="text-amber-500 font-extrabold text-[10px] uppercase tracking-widest">
            {viewMode === "deals" ? "🔥 Mega Savings" : "Amazon Affiliate Catalog"}
          </span>
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mt-1">
            {viewMode === "deals" ? "Today's Hot Deals" : activeCategoryName}
          </h1>
          <p className="text-xs text-slate-450 mt-1">
            Showing <strong className="text-slate-750 dark:text-slate-350">{filteredProducts.length}</strong> vetted products matching criteria.
          </p>
        </div>

        {/* Sorting selection and Filter Toggles */}
        <div className="flex items-center gap-2.5 w-full md:w-auto">
          {/* Mobile Filter toggle */}
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="lg:hidden flex-1 md:flex-none px-4 h-10 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-center gap-2 bg-slate-50 dark:bg-slate-950/20"
          >
            <Filter className="w-4 h-4 text-amber-500" />
            Filters
          </button>

          <div className="flex items-center gap-2 relative flex-1 md:flex-none">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 hidden sm:inline">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full h-10 px-3 pr-8 rounded-xl glass-input text-slate-700 dark:text-slate-300 text-xs font-bold focus:outline-none focus:border-amber-500 cursor-pointer"
            >
              <option value="featured">Featured (Prioritized)</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="rating">Avg. Customer Review</option>
              <option value="discount">Biggest Discount</option>
              <option value="reviews">Number of Reviews</option>
            </select>
          </div>
        </div>
      </div>

      {/* 2. Split Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Left Column: Side filters (Desktop Only) */}
        <div className="hidden lg:block lg:col-span-1">
          <SidebarFilters
            filters={filters}
            onFilterChange={setFilters}
            availableBrands={brandsList}
          />
        </div>

        {/* Right Column: Product grid catalog & pagination (span 3) */}
        <div className="lg:col-span-3 space-y-8 flex flex-col">
          
          {/* Active Search/Category filter summaries */}
          {(searchQuery || filters.category !== "all" || filters.primeOnly || filters.minRating > 0 || filters.minDiscount > 0 || filters.selectedBrands.length > 0 || filters.priceRange !== "all") && (
            <div className="flex flex-wrap items-center gap-2 p-3 glass-card rounded-xl">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1.5">Active Tags:</span>
              
              {searchQuery && (
                <span className="px-2.5 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-500 text-[10px] font-bold rounded-lg uppercase">
                  Search: "{searchQuery}"
                </span>
              )}
              {filters.category !== "all" && (
                <span className="px-2.5 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-500 text-[10px] font-bold rounded-lg uppercase">
                  Dept: {filters.category}
                </span>
              )}
              {filters.primeOnly && (
                <span className="px-2.5 py-1 bg-sky-500/15 text-sky-500 text-[10px] font-bold rounded-lg uppercase">
                  ✓ Prime
                </span>
              )}
              {filters.minRating > 0 && (
                <span className="px-2.5 py-1 bg-amber-500/15 text-amber-600 dark:text-amber-500 text-[10px] font-bold rounded-lg uppercase">
                  ★ {filters.minRating}+
                </span>
              )}
              {filters.minDiscount > 0 && (
                <span className="px-2.5 py-1 bg-rose-500/15 text-rose-500 text-[10px] font-bold rounded-lg uppercase">
                  {filters.minDiscount}%+ Off
                </span>
              )}
              {filters.selectedBrands.map((b) => (
                <span key={b} className="px-2.5 py-1 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-bold rounded-lg uppercase">
                  {b}
                </span>
              ))}
              {filters.priceRange !== "all" && (
                <span className="px-2.5 py-1 bg-emerald-500/15 text-emerald-500 text-[10px] font-bold rounded-lg uppercase">
                  Price: {
                    filters.priceRange === "under-1000" ? "Under ₹1,000" :
                    filters.priceRange === "1000-2500" ? "₹1,000 - ₹2,500" :
                    filters.priceRange === "2500-5000" ? "₹2,500 - ₹5,000" :
                    filters.priceRange === "5000-10000" ? "₹5,000 - ₹10,000" :
                    filters.priceRange === "over-10000" ? "Over ₹10,000" :
                    filters.priceRange
                  }
                </span>
              )}

              <button
                onClick={handleResetAllFilters}
                className="text-[10px] font-black uppercase text-rose-500 hover:underline cursor-pointer ml-auto px-2"
              >
                Clear All Tags
              </button>
            </div>
          )}

          {/* No products placeholder state */}
          {filteredProducts.length === 0 ? (
            <div className="py-16 text-center space-y-4 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800">
              <div className="w-14 h-14 bg-amber-500/5 text-amber-500 flex items-center justify-center rounded-full mx-auto">
                <AlertTriangle className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-base font-extrabold text-slate-950 dark:text-white">No Matching Deals Found</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
                We couldn't find any products matching your specific query. Try adjusting your sidebar filters or resetting search tags.
              </p>
              <button
                onClick={handleResetAllFilters}
                className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl shadow cursor-pointer transition"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <>
              {/* Grid cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedProducts.map((p) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    onQuickView={onQuickView}
                    isWishlisted={wishlist.includes(p.id)}
                    onToggleWishlist={onToggleWishlist}
                    onProductClick={onProductClick}
                  />
                ))}
              </div>

              {/* Dynamic Pagination slider buttons */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-1.5 pt-8 border-t border-slate-100 dark:border-slate-850 mt-auto">
                  <button
                    onClick={() => {
                      setCurrentPage((prev) => Math.max(1, prev - 1));
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    disabled={currentPage === 1}
                    className="h-10 px-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-500 dark:text-slate-450 hover:border-slate-300 dark:hover:border-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
                  >
                    Previous
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => {
                        setCurrentPage(page);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className={`w-10 h-10 rounded-xl text-xs font-black transition cursor-pointer ${
                        currentPage === page
                          ? "bg-amber-500 text-slate-950 shadow-sm"
                          : "border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-950/40"
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => {
                      setCurrentPage((prev) => Math.min(totalPages, prev + 1));
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    disabled={currentPage === totalPages}
                    className="h-10 px-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-500 dark:text-slate-450 hover:border-slate-300 dark:hover:border-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}

        </div>

      </div>

      {/* Mobile Drawer (Absolute overlay modal for side filters) */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-55 lg:hidden overflow-hidden bg-slate-950/60 backdrop-blur-xs flex justify-start">
          <div className="absolute inset-0" onClick={() => setMobileFiltersOpen(false)} />
          
          <div className="relative w-80 h-full glass-panel overflow-y-auto p-5 space-y-4 shadow-2xl z-10 animate-in slide-in-from-left duration-200">
            <div className="flex justify-between items-center border-b border-slate-150 dark:border-slate-800 pb-3">
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider">Refine Products</h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="p-1 text-slate-400 hover:text-slate-900 dark:hover:text-white transition cursor-pointer">
                ✕
              </button>
            </div>
            
            <SidebarFilters
              filters={filters}
              onFilterChange={setFilters}
              availableBrands={brandsList}
            />
          </div>
        </div>
      )}

    </div>
  );
}
