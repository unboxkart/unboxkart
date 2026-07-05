import React from "react";
import { Filter, RotateCcw, ShieldCheck } from "lucide-react";
import { CATEGORIES, BRANDS } from "../config";

export interface FilterState {
  category: string;
  priceRange: string; // "all" | "under-25" | "25-50" | "50-100" | "100-200" | "over-200"
  minRating: number; // 0 | 3.5 | 4 | 4.5
  minDiscount: number; // 0 | 10 | 25 | 40
  selectedBrands: string[];
  primeOnly: boolean;
}

interface SidebarFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  availableBrands?: string[];
}

export default function SidebarFilters({
  filters,
  onFilterChange,
  availableBrands = BRANDS,
}: SidebarFiltersProps) {
  
  const handleReset = () => {
    onFilterChange({
      category: "all",
      priceRange: "all",
      minRating: 0,
      minDiscount: 0,
      selectedBrands: [],
      primeOnly: false,
    });
  };

  const handleCategoryChange = (catId: string) => {
    onFilterChange({ ...filters, category: catId });
  };

  const handlePriceChange = (rangeId: string) => {
    onFilterChange({ ...filters, priceRange: rangeId });
  };

  const handleRatingChange = (rating: number) => {
    onFilterChange({ ...filters, minRating: rating });
  };

  const handleDiscountChange = (discount: number) => {
    onFilterChange({ ...filters, minDiscount: discount });
  };

  const handleBrandToggle = (brand: string) => {
    const brands = [...filters.selectedBrands];
    if (brands.includes(brand)) {
      onFilterChange({
        ...filters,
        selectedBrands: brands.filter((b) => b !== brand),
      });
    } else {
      onFilterChange({
        ...filters,
        selectedBrands: [...brands, brand],
      });
    }
  };

  const handlePrimeToggle = () => {
    onFilterChange({ ...filters, primeOnly: !filters.primeOnly });
  };

  return (
    <div className="space-y-6 glass-card p-5 rounded-2xl">
      
      {/* Title & Clear buttons */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-850 pb-4">
        <div className="flex items-center gap-1.5 font-black text-slate-900 dark:text-white uppercase tracking-wider text-xs">
          <Filter className="w-4 h-4 text-amber-500" />
          <span>Filters</span>
        </div>

        <button
          onClick={handleReset}
          className="flex items-center gap-1 text-[11px] font-bold text-slate-500 hover:text-amber-500 transition cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset All
        </button>
      </div>

      {/* Prime Badge Fast Filter Toggle */}
      <div className="flex items-center justify-between p-3 rounded-xl bg-white/30 dark:bg-slate-900/30 border border-slate-200/30 dark:border-slate-800/30 shadow-sm backdrop-blur-md">
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] font-extrabold text-sky-500 uppercase tracking-tight">✓ prime</span>
          <span className="text-[10px] text-slate-400 font-medium">Eligible items only</span>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            checked={filters.primeOnly} 
            onChange={handlePrimeToggle} 
            className="sr-only peer" 
          />
          <div className="w-9 h-5 bg-slate-200 dark:bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-sky-500"></div>
        </label>
      </div>

      {/* Department/Category listing */}
      <div>
        <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
          Department
        </h4>
        <div className="space-y-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filters.category === cat.id
                  ? "bg-amber-500 text-slate-950 font-bold"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price Tiers checkboxes */}
      <div>
        <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
          Price Range
        </h4>
        <div className="space-y-2">
          {[
            { id: "all", label: "Any Price" },
            { id: "under-25", label: "Under $25" },
            { id: "25-50", label: "$25 to $50" },
            { id: "50-100", label: "$50 to $100" },
            { id: "100-200", label: "$100 to $200" },
            { id: "over-200", label: "Over $200" },
          ].map((range) => (
            <label key={range.id} className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300 cursor-pointer">
              <input
                type="radio"
                name="priceRange"
                checked={filters.priceRange === range.id}
                onChange={() => handlePriceChange(range.id)}
                className="rounded-full border-slate-300 dark:border-slate-800 text-amber-500 focus:ring-amber-500"
              />
              <span>{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Ratings threshold checkboxes */}
      <div>
        <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
          Minimum Rating
        </h4>
        <div className="space-y-2">
          {[
            { value: 0, label: "All Ratings" },
            { value: 4.5, label: "4.5 Stars & Up" },
            { value: 4.0, label: "4.0 Stars & Up" },
            { value: 3.5, label: "3.5 Stars & Up" },
          ].map((rat) => (
            <label key={rat.value} className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300 cursor-pointer">
              <input
                type="radio"
                name="minRating"
                checked={filters.minRating === rat.value}
                onChange={() => handleRatingChange(rat.value)}
                className="rounded-full border-slate-300 dark:border-slate-800 text-amber-500 focus:ring-amber-500"
              />
              <span>{rat.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Discount Bracket selection */}
      <div>
        <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
          Special Discounts
        </h4>
        <div className="space-y-2">
          {[
            { value: 0, label: "All Products" },
            { value: 10, label: "10% Off or More" },
            { value: 25, label: "25% Off or More" },
            { value: 40, label: "40% Off or More" },
          ].map((disc) => (
            <label key={disc.value} className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300 cursor-pointer">
              <input
                type="radio"
                name="minDiscount"
                checked={filters.minDiscount === disc.value}
                onChange={() => handleDiscountChange(disc.value)}
                className="rounded-full border-slate-300 dark:border-slate-800 text-amber-500 focus:ring-amber-500"
              />
              <span>{disc.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Brand lists */}
      <div>
        <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
          Popular Brands
        </h4>
        <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
          {availableBrands.map((brand) => (
            <label key={brand} className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.selectedBrands.includes(brand)}
                onChange={() => handleBrandToggle(brand)}
                className="rounded border-slate-300 dark:border-slate-800 text-amber-500 focus:ring-amber-500"
              />
              <span>{brand}</span>
            </label>
          ))}
        </div>
      </div>

    </div>
  );
}

