import React, { useState } from "react";
import { ArrowLeft, BookOpen, Calendar, User, Clock, ArrowRight, Share2, Star } from "lucide-react";
import { BLOG_POSTS } from "../data/blog";
import { PRODUCTS } from "../data/products";
import { Product } from "../types";
import ProductCard from "../components/ProductCard";

interface BlogViewProps {
  selectedPostSlug: string | null;
  setSelectedPostSlug: (slug: string | null) => void;
  onProductClick: (product: Product) => void;
  wishlist: string[];
  onToggleWishlist: (productId: string) => void;
  onQuickView: (product: Product) => void;
}

export default function BlogView({
  selectedPostSlug,
  setSelectedPostSlug,
  onProductClick,
  wishlist,
  onToggleWishlist,
  onQuickView,
}: BlogViewProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [shareTooltip, setShareTooltip] = useState(false);

  // Retrieve unique categories
  const categories = ["all", ...Array.from(new Set(BLOG_POSTS.map(post => post.category)))];

  const filteredPosts = activeCategory === "all"
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  const activePost = BLOG_POSTS.find(post => post.slug === selectedPostSlug);

  const handleShareArticle = () => {
    navigator.clipboard.writeText(window.location.href);
    setShareTooltip(true);
    setTimeout(() => setShareTooltip(false), 2000);
  };

  const renderBlogList = () => (
    <div className="space-y-10 animate-in fade-in duration-350">
      
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-amber-500 font-extrabold text-[10px] uppercase tracking-widest bg-amber-500/10 px-3.5 py-1.5 rounded-full">
          Expert Buying Guides
        </span>
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Read Handpicked Buying Advice & Research
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl mx-auto">
          We spend thousands of hours reviewing products, checking price fluctuations, and testing durability so you can purchase with absolute confidence.
        </p>
      </div>

      {/* Category Toggles */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-100 dark:border-slate-850 pb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4.5 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-colors cursor-pointer ${
              activeCategory === cat 
                ? "bg-amber-500 text-slate-950 shadow-sm" 
                : "bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-450 hover:bg-slate-100 dark:hover:bg-slate-900"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid listing */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            onClick={() => {
              setSelectedPostSlug(post.slug);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group rounded-2xl glass-card overflow-hidden shadow-sm hover:shadow-lg hover:border-amber-500/40 transition-all cursor-pointer flex flex-col"
          >
            {/* Thumbnail */}
            <div className="aspect-video w-full overflow-hidden bg-slate-150">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-350 group-hover:scale-102"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1 space-y-3">
              <div className="flex items-center justify-between text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                <span>{post.category}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="text-base font-extrabold text-slate-950 dark:text-white line-clamp-2 leading-snug group-hover:text-amber-500 transition-colors">
                {post.title}
              </h3>

              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">
                {post.summary}
              </p>

              {/* Author & Date footer */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-850 flex items-center justify-between mt-auto text-[11px] text-slate-400 font-semibold">
                <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-350">
                  <User className="w-3.5 h-3.5 text-amber-500" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );

  const renderBlogPostDetail = () => {
    if (!activePost) return null;

    // Fetch products related to this article
    const recommendedProducts = PRODUCTS.filter(prod => 
      activePost.relatedProducts?.includes(prod.id)
    );

    return (
      <div className="space-y-12 animate-in fade-in duration-300">
        
        {/* Breadcrumb / Back button */}
        <button
          onClick={() => setSelectedPostSlug(null)}
          className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-slate-500 hover:text-amber-500 transition cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Buying Guides
        </button>

        {/* Article Meta */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs font-extrabold text-amber-500 uppercase tracking-widest">
            <span className="px-3 py-1 rounded bg-amber-500/10">{activePost.category}</span>
            <span>•</span>
            <span>{activePost.readTime}</span>
          </div>

          <h1 className="text-2xl md:text-4xl font-black text-slate-950 dark:text-white leading-tight">
            {activePost.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-y border-slate-150 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 font-bold">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-slate-900 dark:text-slate-100">
                <User className="w-4 h-4 text-amber-500" />
                Authored by {activePost.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                Published {activePost.date}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Share */}
              <div className="relative">
                <button
                  onClick={handleShareArticle}
                  className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 dark:border-slate-850 hover:border-slate-300 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  Share Article
                </button>

                {shareTooltip && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-950 text-white text-[10px] font-bold px-2 py-1 rounded shadow-md z-30 whitespace-nowrap">
                    URL Copied!
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Hero image banner */}
        <div className="aspect-[21/9] w-full rounded-2xl overflow-hidden bg-slate-150 border border-slate-200 dark:border-slate-850">
          <img
            src={activePost.image}
            alt={activePost.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main article text */}
          <div className="lg:col-span-2 text-slate-700 dark:text-slate-350 text-sm leading-relaxed space-y-6">
            
            {/* Split Content text (highly responsive) */}
            <div className="prose prose-slate dark:prose-invert max-w-none text-xs leading-relaxed space-y-4">
              {activePost.content.split("\n\n").map((para, idx) => {
                const trimmed = para.trim();
                if (!trimmed) return null;

                // Simple custom markdown renderer
                if (trimmed.startsWith("###")) {
                  return (
                    <h2 key={idx} className="text-lg font-black text-slate-900 dark:text-white pt-4 tracking-tight">
                      {trimmed.replace("###", "").trim()}
                    </h2>
                  );
                }
                if (trimmed.startsWith("####")) {
                  return (
                    <h3 key={idx} className="text-base font-extrabold text-slate-900 dark:text-white pt-2">
                      {trimmed.replace("####", "").trim()}
                    </h3>
                  );
                }
                if (trimmed.startsWith("*") || trimmed.startsWith("-")) {
                  return (
                    <ul key={idx} className="list-disc list-inside pl-4 space-y-2 text-xs text-slate-650 dark:text-slate-400">
                      {trimmed.split("\n").map((li, i) => (
                        <li key={i}>{li.replace(/^[*\-\s]+/, "").replace(/\*\*([^*]+)\*\*/g, "$1")}</li>
                      ))}
                    </ul>
                  );
                }
                if (trimmed.startsWith("***")) {
                  return <hr key={idx} className="border-t border-slate-200 dark:border-slate-800 my-6" />;
                }
                
                // Normal paragraph (supports raw bold tags **word**)
                const formattedText = trimmed.split("**").map((text, i) => {
                  if (i % 2 === 1) return <strong key={i} className="font-extrabold text-slate-950 dark:text-white">{text}</strong>;
                  return text;
                });

                return (
                  <p key={idx} className="text-slate-600 dark:text-slate-350 leading-relaxed text-xs">
                    {formattedText}
                  </p>
                );
              })}
            </div>

            {/* Editorial disclosure note */}
            <div className="p-4 rounded-xl glass-card text-[11px] text-slate-500 leading-relaxed mt-10">
              <strong>Editorial Standards Disclosure:</strong> We research, test, and vet our suggestions independently. When you buy through our links, we may receive a small affiliate commission from Amazon. This maintains our writers and funds long-term tests. Thank you for your support.
            </div>
          </div>

          {/* Sidebar - Featured related items */}
          {recommendedProducts.length > 0 && (
            <div className="lg:col-span-1 space-y-6">
              <div className="p-6 rounded-2xl bg-amber-500/5 dark:bg-amber-500/5 border border-amber-500/10 backdrop-blur-md space-y-4">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                  Products Reviewed in Guide
                </h4>

                <div className="space-y-4">
                  {recommendedProducts.map((prod) => (
                    <div
                      key={prod.id}
                      onClick={() => onProductClick(prod)}
                      className="flex gap-3 glass-card p-2.5 rounded-xl cursor-pointer hover:border-amber-500/40 hover:shadow-md transition-all shadow-sm"
                    >
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-16 h-16 object-cover rounded-lg shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex flex-col justify-between overflow-hidden">
                        <h5 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-2 leading-snug">
                          {prod.name}
                        </h5>
                        <div className="flex items-center gap-1 mt-1">
                          <span className="text-xs font-black text-slate-950 dark:text-white">
                            ${prod.price.toFixed(2)}
                          </span>
                          <span className="inline-flex items-center text-[10px] text-amber-500 font-bold ml-1.5">
                            ★ {prod.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Detailed related cards slider */}
        {recommendedProducts.length > 0 && (
          <div className="border-t border-slate-150 dark:border-slate-800 pt-10 space-y-6">
            <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight uppercase">
              Shop Handpicked Recommendations
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recommendedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={onQuickView}
                  isWishlisted={wishlist.includes(product.id)}
                  onToggleWishlist={onToggleWishlist}
                  onProductClick={onProductClick}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    );
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      {selectedPostSlug ? renderBlogPostDetail() : renderBlogList()}
    </div>
  );
}
export { BlogView };
