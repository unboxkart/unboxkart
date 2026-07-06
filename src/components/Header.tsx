import React, { useState } from "react";
import { 
  Search, Menu, X, Sun, Moon, Heart, ChevronDown, 
  Cpu, Utensils, Shirt, Sparkles, HeartPulse, Dumbbell, Gamepad2, BookOpen, LayoutGrid, ShoppingBag
} from "lucide-react";
import { SITE_CONFIG, CATEGORIES } from "../config";

interface HeaderProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  wishlistCount: number;
  openWishlist: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({
  currentView,
  setCurrentView,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  wishlistCount,
  openWishlist,
  darkMode,
  toggleDarkMode,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [catDropdownOpen, setCatDropdownOpen] = useState(false);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu": return <Cpu className="w-4 h-4 mr-2 text-sky-500" />;
      case "Utensils": return <Utensils className="w-4 h-4 mr-2 text-amber-500" />;
      case "Shirt": return <Shirt className="w-4 h-4 mr-2 text-rose-500" />;
      case "Sparkles": return <Sparkles className="w-4 h-4 mr-2 text-purple-500" />;
      case "HeartPulse": return <HeartPulse className="w-4 h-4 mr-2 text-emerald-500" />;
      case "Dumbbell": return <Dumbbell className="w-4 h-4 mr-2 text-indigo-500" />;
      case "Gamepad2": return <Gamepad2 className="w-4 h-4 mr-2 text-violet-500" />;
      case "BookOpen": return <BookOpen className="w-4 h-4 mr-2 text-orange-500" />;
      default: return <LayoutGrid className="w-4 h-4 mr-2 text-slate-500" />;
    }
  };

  const handleNavClick = (view: string) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
    setCatDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategorySelect = (catId: string) => {
    setSelectedCategory(catId);
    setCatDropdownOpen(false);
    handleNavClick("categories");
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 bg-slate-900/80 dark:bg-slate-950/80 backdrop-blur-lg text-white shadow-md border-b border-slate-800/50">
      {/* Top micro announcement bar */}
      <div className="w-full bg-amber-500 py-1.5 px-4 text-center text-xs font-semibold text-slate-950 tracking-wide select-none animate-pulse">
        ⚡ Today's Mega Deals: Save up to 70% on Top Rated Tech & Home Essentials. Limited Time Only!
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          
          {/* Logo */}
          <div 
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 cursor-pointer select-none group"
            id="site-logo"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white p-1.5 shadow-md transform group-hover:scale-105 transition-transform duration-200">
              <img 
                src="/favicon.svg" 
                alt="unboxkart logo" 
                className="h-full w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight bg-gradient-to-r from-white via-slate-100 to-amber-500 bg-clip-text text-transparent">
                {SITE_CONFIG.siteName}
                <span className="text-amber-500">.</span>
              </span>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg items-center relative">
            <div className="absolute left-3.5 text-slate-400 pointer-events-none">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="Search best sellers, deals, brands..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (currentView !== "categories" && currentView !== "home") {
                  setCurrentView("categories");
                }
              }}
              className="w-full h-10 pl-10 pr-4 bg-slate-800/40 dark:bg-slate-950/40 border border-slate-700/50 text-slate-100 rounded-full text-sm placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all shadow-inner backdrop-blur-sm"
              id="search-input"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 text-xs text-slate-400 hover:text-white transition"
              >
                Clear
              </button>
            )}
          </div>

          {/* Right Navigation Controls */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <button 
              onClick={() => handleNavClick("home")}
              className={`hover:text-amber-500 transition-colors py-1 cursor-pointer ${currentView === "home" ? "text-amber-500 border-b-2 border-amber-500" : "text-slate-200"}`}
            >
              Home
            </button>

            {/* Categories Dropdown Trigger */}
            <div className="relative">
              <button 
                onClick={() => setCatDropdownOpen(!catDropdownOpen)}
                className="flex items-center gap-1 hover:text-amber-500 text-slate-200 py-1 cursor-pointer transition-colors"
              >
                Categories <ChevronDown className={`w-4 h-4 transform transition-transform ${catDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              
              {catDropdownOpen && (
                <div className="absolute top-8 left-0 w-56 rounded-xl bg-slate-900/95 dark:bg-slate-950/95 backdrop-blur-md border border-slate-800/60 text-slate-200 shadow-2xl p-2 py-3 z-50">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategorySelect(cat.id)}
                      className={`flex items-center w-full text-left px-3 py-2 rounded-lg text-xs hover:bg-slate-800 hover:text-white transition-all ${selectedCategory === cat.id ? "bg-slate-800 text-amber-500" : ""}`}
                    >
                      {getCategoryIcon(cat.icon)}
                      {cat.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button 
              onClick={() => {
                setSelectedCategory("all");
                handleNavClick("deals");
              }}
              className={`hover:text-amber-500 transition-colors py-1 cursor-pointer ${currentView === "deals" ? "text-amber-500 border-b-2 border-amber-500" : "text-slate-200"}`}
            >
              Deals
            </button>
            <button 
              onClick={() => handleNavClick("blog")}
              className={`hover:text-amber-500 transition-colors py-1 cursor-pointer ${currentView === "blog" ? "text-amber-500 border-b-2 border-amber-500" : "text-slate-200"}`}
            >
              Blog
            </button>
            <button 
              onClick={() => handleNavClick("about")}
              className={`hover:text-amber-500 transition-colors py-1 cursor-pointer ${currentView === "about" ? "text-amber-500 border-b-2 border-amber-500" : "text-slate-200"}`}
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick("contact")}
              className={`hover:text-amber-500 transition-colors py-1 cursor-pointer ${currentView === "contact" ? "text-amber-500 border-b-2 border-amber-500" : "text-slate-200"}`}
            >
              Contact
            </button>
            <button 
              onClick={() => handleNavClick("faq")}
              className={`hover:text-amber-500 transition-colors py-1 cursor-pointer ${currentView === "faq" ? "text-amber-500 border-b-2 border-amber-500" : "text-slate-200"}`}
            >
              FAQ
            </button>
          </nav>

          {/* Actions: Theme Toggle, Wishlist, Mobile menu */}
          <div className="flex items-center gap-3">
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle theme"
              id="theme-toggle"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-300" />}
            </button>

            {/* Wishlist Trigger */}
            <button
              onClick={openWishlist}
              className="p-2 rounded-full hover:bg-slate-800 text-slate-300 hover:text-rose-400 transition-all relative flex items-center justify-center cursor-pointer"
              aria-label="View Wishlist"
              id="wishlist-btn"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white text-[10px] font-bold rounded-full w-4.5 h-4.5 flex items-center justify-center border border-slate-900 animate-bounce">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Search Bar Row (only visible on mobile/tablet) */}
      <div className="md:hidden w-full px-4 pb-3 pt-1 border-t border-slate-800">
        <div className="relative w-full">
          <div className="absolute left-3.5 top-2.5 text-slate-400 pointer-events-none">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Search products, deals, categories..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (currentView !== "categories" && currentView !== "home") {
                setCurrentView("categories");
              }
            }}
            className="w-full h-9 pl-10 pr-4 bg-slate-800/40 dark:bg-slate-950/40 border border-slate-700/50 text-slate-100 rounded-full text-sm placeholder-slate-400 focus:outline-none focus:border-amber-500 backdrop-blur-sm"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-2.5 text-xs text-slate-400"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/95 dark:bg-slate-950/95 backdrop-blur-md text-slate-100 border-t border-slate-800/60 px-4 py-4 space-y-4 shadow-xl">
          <div className="space-y-1">
            <button 
              onClick={() => handleNavClick("home")}
              className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${currentView === "home" ? "bg-slate-800 text-amber-500" : "hover:bg-slate-800"}`}
            >
              Home
            </button>
            <button 
              onClick={() => {
                setSelectedCategory("all");
                handleNavClick("deals");
              }}
              className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${currentView === "deals" ? "bg-slate-800 text-amber-500" : "hover:bg-slate-800"}`}
            >
              Today's Deals
            </button>
            <button 
              onClick={() => handleNavClick("blog")}
              className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${currentView === "blog" ? "bg-slate-800 text-amber-500" : "hover:bg-slate-800"}`}
            >
              Blog Buying Guides
            </button>
            <button 
              onClick={() => handleNavClick("about")}
              className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${currentView === "about" ? "bg-slate-800 text-amber-500" : "hover:bg-slate-800"}`}
            >
              About Us
            </button>
            <button 
              onClick={() => handleNavClick("contact")}
              className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${currentView === "contact" ? "bg-slate-800 text-amber-500" : "hover:bg-slate-800"}`}
            >
              Contact
            </button>
            <button 
              onClick={() => handleNavClick("faq")}
              className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${currentView === "faq" ? "bg-slate-800 text-amber-500" : "hover:bg-slate-800"}`}
            >
              FAQ
            </button>
          </div>

          <div className="border-t border-slate-800 pt-3">
            <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">
              Browse Categories
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat.id)}
                  className={`flex items-center text-left px-3 py-2 rounded-lg text-xs hover:bg-slate-800 hover:text-white transition-all ${selectedCategory === cat.id ? "bg-slate-800 text-amber-500" : ""}`}
                >
                  {getCategoryIcon(cat.icon)}
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
