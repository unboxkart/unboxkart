import React, { useState, useEffect } from "react";
import { 
  Sparkles, Flame, Clock, Award, CheckCircle2, ChevronRight, ArrowRight, ShieldCheck, 
  HelpCircle, ThumbsUp, ShoppingBag, Cpu, Utensils, Shirt, Sparkles as BeautyIcon, Dumbbell, Gamepad2, BookOpen
} from "lucide-react";
import { PRODUCTS } from "../data/products";
import { BLOG_POSTS } from "../data/blog";
import { SITE_CONFIG, CATEGORIES } from "../config";
import { Product } from "../types";
import ProductCard from "../components/ProductCard";

interface HomeViewProps {
  setCurrentView: (view: string) => void;
  setSelectedCategory: (cat: string) => void;
  setSelectedPostSlug: (slug: string | null) => void;
  onProductClick: (product: Product) => void;
  onQuickView: (product: Product) => void;
  wishlist: string[];
  onToggleWishlist: (productId: string) => void;
}

export default function HomeView({
  setCurrentView,
  setSelectedCategory,
  setSelectedPostSlug,
  onProductClick,
  onQuickView,
  wishlist,
  onToggleWishlist,
}: HomeViewProps) {
  
  // Set up a dynamic countdown timer for today's mega deals
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 32, seconds: 45 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 }; // loop
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Format time digits
  const padZero = (num: number) => num.toString().padStart(2, "0");

  // Filter specific product collections
  const flashSaleProducts = PRODUCTS.filter(p => p.isTodayDeal).slice(0, 4);
  const bestSellers = PRODUCTS.filter(p => p.isBestSeller).slice(0, 4);
  const editorsPicks = PRODUCTS.filter(p => p.isEditorsPick).slice(0, 4);
  const trendingProducts = PRODUCTS.filter(p => p.isFeatured).slice(0, 4);

  const handleCategoryClick = (catId: string) => {
    setSelectedCategory(catId);
    setCurrentView("categories");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePostClick = (slug: string) => {
    setSelectedPostSlug(slug);
    setCurrentView("blog");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu": return <Cpu className="w-5 h-5 text-sky-500" />;
      case "Utensils": return <Utensils className="w-5 h-5 text-amber-500" />;
      case "Shirt": return <Shirt className="w-5 h-5 text-rose-500" />;
      case "Sparkles": return <BeautyIcon className="w-5 h-5 text-purple-500" />;
      case "Dumbbell": return <Dumbbell className="w-5 h-5 text-indigo-500" />;
      case "Gamepad2": return <Gamepad2 className="w-5 h-5 text-violet-500" />;
      case "BookOpen": return <BookOpen className="w-5 h-5 text-orange-500" />;
      default: return <ShoppingBag className="w-5 h-5 text-slate-500" />;
    }
  };

  return (
    <div className="space-y-16 animate-in fade-in duration-300">
      
      {/* 1. Hero Promo Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-slate-900/75 dark:bg-slate-950/75 border border-slate-800/40 shadow-2xl backdrop-blur-md text-white">
        {/* Background ambient lighting */}
        <div className="absolute -left-16 -top-16 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -right-16 -bottom-16 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 md:p-12 items-center">
          
          {/* Hero text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 text-amber-500 px-3.5 py-1 text-xs font-black uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5" /> TODAY'S MEGA DEALS
            </span>

            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Save Up To <span className="text-amber-500 underline decoration-amber-500/30 decoration-wavy">70% Off</span> Amazon's Best Sellers
            </h1>

            <p className="text-slate-350 text-xs md:text-sm leading-relaxed max-w-xl">
              Tired of digging through endless products? We compile top-vetted, highest-rated Amazon discounts daily. Hand-verified for quality, reviews integrity, and real value.
            </p>

            {/* Countdown timer */}
            <div className="flex items-center gap-4 py-2 border-y border-slate-800 max-w-md">
              <span className="text-xs text-slate-400 font-bold flex items-center gap-1">
                <Clock className="w-4 h-4 text-rose-500" /> Flash Sale ends in:
              </span>
              <div className="flex items-center gap-2 font-mono text-xs font-black text-slate-100">
                <span className="bg-slate-800 px-2.5 py-1.5 rounded-lg border border-slate-750 text-amber-500">{padZero(timeLeft.hours)}</span>
                <span>:</span>
                <span className="bg-slate-800 px-2.5 py-1.5 rounded-lg border border-slate-750 text-amber-500">{padZero(timeLeft.minutes)}</span>
                <span>:</span>
                <span className="bg-slate-800 px-2.5 py-1.5 rounded-lg border border-slate-750 text-amber-500">{padZero(timeLeft.seconds)}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setCurrentView("deals");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="px-6 h-12 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl transition shadow-lg cursor-pointer flex items-center gap-1"
              >
                Explore Flash Deals
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setCurrentView("categories");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="px-5 h-12 bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-200 text-xs font-bold rounded-xl transition cursor-pointer"
              >
                Browse Catalog
              </button>
            </div>
          </div>

          {/* Featured product spotlight illustration (or hero slider) (grid span 5) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 md:w-80 aspect-square rounded-2xl overflow-hidden border border-slate-850 bg-slate-950 p-3 flex items-center justify-center shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80" 
                alt="Product Showcase" 
                className="max-h-full max-w-full object-cover rounded-xl opacity-90"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/95 border border-slate-800 rounded-xl p-3 flex items-center justify-between">
                <div>
                  <h4 className="text-[10px] text-amber-500 font-bold uppercase tracking-wider">Spotlight Deal</h4>
                  <p className="text-xs font-bold text-white truncate max-w-[150px]">Sony WH-1000XM5</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 line-through block">₹29,990</span>
                  <span className="text-sm font-black text-amber-500">₹24,990</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Top Department/Categories Tiles */}
      <section className="space-y-6">
        <div className="flex items-end justify-between">
          <div className="space-y-1">
            <span className="text-amber-500 font-extrabold text-[10px] uppercase tracking-widest">Departments</span>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Browse Popular Categories</h2>
          </div>
          <button 
            onClick={() => handleCategoryClick("all")} 
            className="text-xs font-bold text-slate-500 hover:text-amber-500 flex items-center gap-1 transition cursor-pointer"
          >
            All Categories <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {CATEGORIES.slice(1).map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className="group p-4 glass-card rounded-2xl flex flex-col items-center justify-center text-center gap-3 shadow-sm hover:shadow-lg hover:border-amber-500/40 transition-all cursor-pointer select-none"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850 flex items-center justify-center group-hover:scale-105 transition-transform">
                {getCategoryIcon(cat.icon)}
              </div>
              <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Flash Sale Section */}
      {flashSaleProducts.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-150 dark:border-slate-850 pb-4">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-rose-500/10 text-rose-500">
                <Flame className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase">🔥 Today's Mega Flash Sales</h2>
            </div>
            
            <button
              onClick={() => handleCategoryClick("all")}
              className="text-xs font-bold text-amber-500 hover:text-amber-400 flex items-center gap-1 transition"
            >
              See All Deals <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {flashSaleProducts.map((p) => (
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
        </section>
      )}

      {/* 4. Why Shop With Us Trust Badges */}
      <section className="rounded-3xl bg-slate-50 dark:bg-slate-950 p-8 border border-slate-200 dark:border-slate-850">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-amber-500 shrink-0 shadow-sm">
              <Award className="w-6 h-6 stroke-[2]" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">Expertly Vetted Advice</h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-450 leading-relaxed">
                We spend hours reading user comments, tracking historical cost charts, and verifying brand reliability before suggesting any item.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-sky-500 shrink-0 shadow-sm">
              <ShieldCheck className="w-6 h-6 stroke-[2]" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">100% Secure Amazon Route</h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-450 leading-relaxed">
                We link directly to secure official Amazon listings. Your checkout details, standard pricing guarantee, shipping, and returns are handled 100% by Amazon.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-rose-500 shrink-0 shadow-sm">
              <Flame className="w-6 h-6 stroke-[2]" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">Real-Time Daily Updates</h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-450 leading-relaxed">
                Amazon prices fluctuate hourly. Our automated scrapers and research editors review listing details constantly to ensure our discount percentages are accurate.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Trending / Best Seller Split Showcases */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Left Side: Best Sellers */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-150 dark:border-slate-850 pb-4">
            <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight uppercase">
              👑 Best Sellers
            </h3>
            <button onClick={() => handleCategoryClick("all")} className="text-xs font-bold text-slate-400 hover:text-amber-500 transition">
              See All
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {bestSellers.map((p) => (
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
        </div>

        {/* Right Side: Editor's Picks */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-150 dark:border-slate-850 pb-4">
            <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight uppercase">
              ✨ Editor's Top Picks
            </h3>
            <button onClick={() => handleCategoryClick("all")} className="text-xs font-bold text-slate-400 hover:text-amber-500 transition">
              See All
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {editorsPicks.map((p) => (
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
        </div>

      </section>

      {/* 6. Recent Buying Guides & Blog Articles */}
      <section className="space-y-6">
        <div className="flex items-end justify-between border-b border-slate-150 dark:border-slate-850 pb-4">
          <div className="space-y-1">
            <span className="text-amber-500 font-extrabold text-[10px] uppercase tracking-widest">Expert Advice</span>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase">Latest Product Roundups</h2>
          </div>
          <button 
            onClick={() => {
              setSelectedCategory("all");
              setCurrentView("blog");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }} 
            className="text-xs font-bold text-slate-500 hover:text-amber-500 flex items-center gap-1 transition cursor-pointer"
          >
            Read All Articles <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(0, 3).map((post) => (
            <div
              key={post.id}
              onClick={() => handlePostClick(post.slug)}
              className="group glass-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-amber-500/40 transition-all cursor-pointer flex flex-col"
            >
              <div className="aspect-video w-full overflow-hidden bg-slate-100">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform group-hover:scale-102" />
              </div>

              <div className="p-5 flex flex-col flex-1 gap-2.5">
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-500">{post.category}</span>
                <h4 className="text-sm font-bold text-slate-950 dark:text-white line-clamp-2 leading-snug group-hover:text-amber-500 transition-colors">
                  {post.title}
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {post.summary}
                </p>
                
                <span className="mt-auto pt-3 border-t border-slate-50 dark:border-slate-850 text-[10px] font-bold text-slate-400 flex items-center justify-between">
                  <span>Read Time: {post.readTime}</span>
                  <span className="flex items-center gap-1 text-amber-500 group-hover:translate-x-1 transition-transform">
                    Read Guide <ArrowRight className="w-3 h-3" />
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Footer FAQ Preview Accordion */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <span className="text-amber-500 font-extrabold text-[10px] uppercase tracking-widest">Help & FAQ</span>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase">Quick Shopping Help</h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {[
            { q: "Is this website owned by Amazon?", a: "No. We are an independent review site and member of the Amazon Services Associates program. We do not sell items directly." },
            { q: "How much does shipping cost?", a: "All order fulfillments are handled by Amazon. If you have active Amazon Prime, you are eligible for free 2-day, 1-day, or same-day shipping on Prime-badged items." },
            { q: "Are reviews on your site authentic?", a: "Yes. We filter out sponsored reviews and analyze real buyer satisfaction rates to ensure recommendations are highly reputable." }
          ].map((faq, idx) => (
            <div key={idx} className="p-4 glass-card rounded-xl space-y-1 shadow-xs">
              <h4 className="text-xs font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-amber-500 shrink-0" />
                {faq.q}
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed pl-5">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => {
              setSelectedCategory("all");
              setCurrentView("faq");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="px-5 py-2 rounded-xl border border-slate-250 dark:border-slate-800 text-slate-600 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-slate-950 text-xs font-bold transition cursor-pointer"
          >
            Read Full FAQ Panel
          </button>
        </div>
      </section>

    </div>
  );
}
export { HomeView };
