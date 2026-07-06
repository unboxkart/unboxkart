import React, { useState, useEffect } from "react";
import { ArrowLeft, Star, StarHalf, Heart, ExternalLink, Share2, ShieldCheck, Truck, RefreshCw, BadgePercent } from "lucide-react";
import { Product } from "../types";
import { PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";

interface ProductDetailsViewProps {
  product: Product;
  onBack: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
  onProductClick: (product: Product) => void;
  onQuickView: (product: Product) => void;
  wishlist: string[];
}

export default function ProductDetailsView({
  product,
  onBack,
  isWishlisted,
  onToggleWishlist,
  onProductClick,
  onQuickView,
  wishlist,
}: ProductDetailsViewProps) {
  const [activeImage, setActiveImage] = useState("");
  const [shareTooltip, setShareTooltip] = useState(false);

  useEffect(() => {
    setActiveImage(product.image);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [product]);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.4;
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<StarHalf key={i} className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0" />);
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-slate-300 dark:text-slate-700 shrink-0" />);
      }
    }
    return stars;
  };

  const imagesList = product.images && product.images.length > 0 ? product.images : [product.image];

  // Fetch recommended related products in same category
  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(product.amazonUrl);
    setShareTooltip(true);
    setTimeout(() => setShareTooltip(false), 2000);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 space-y-12 animate-in fade-in duration-300">
      
      {/* Breadcrumbs and back link */}
      <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-slate-500">
        <button onClick={onBack} className="hover:text-amber-500 transition flex items-center gap-1 cursor-pointer">
          <ArrowLeft className="w-4 h-4" /> Back to listings
        </button>
        <span>/</span>
        <span className="text-slate-400 dark:text-slate-500">{product.category}</span>
        <span>/</span>
        <span className="text-slate-900 dark:text-white truncate max-w-[150px] md:max-w-none">{product.name}</span>
      </div>

      {/* Main Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Aspect: Image Gallery (grid span 5) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="aspect-square w-full rounded-2xl glass-card overflow-hidden flex items-center justify-center p-4">
            <img 
              src={activeImage || product.image} 
              alt={product.name} 
              className="max-h-full max-w-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Thumbnails list */}
          {imagesList.length > 1 && (
            <div className="flex gap-2.5 overflow-x-auto pb-1">
              {imagesList.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-18 h-18 rounded-xl border-2 overflow-hidden shrink-0 transition-all cursor-pointer ${
                    activeImage === img 
                      ? "border-amber-500 scale-95 shadow-sm" 
                      : "border-slate-200 dark:border-slate-800 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="Thumbnail product detail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Aspect: Purchasing controls (grid span 7) */}
        <div className="lg:col-span-7 flex flex-col space-y-5">
          
          {/* Dept & Brand */}
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            <span>{product.subCategory || product.category}</span>
            <span className="text-amber-500">Brand: {product.brand}</span>
          </div>

          {/* Title */}
          <h1 className="text-xl md:text-3xl font-black text-slate-950 dark:text-white leading-snug">
            {product.name}
          </h1>

          {/* Ratings row */}
          <div className="flex items-center gap-1.5 border-b border-slate-100 dark:border-slate-850 pb-4">
            <div className="flex items-center">
              {renderStars(product.rating)}
            </div>
            <span className="text-sm font-bold ml-1.5 text-slate-900 dark:text-white">{product.rating}</span>
            <span className="text-xs text-slate-400 font-semibold">({product.reviewsCount.toLocaleString()} verified buyer reviews)</span>
          </div>

          {/* Price Tag with discount details */}
          <div className="space-y-1 glass-card p-4 rounded-2xl">
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-black text-slate-950 dark:text-white">₹{product.price.toFixed(2)}</span>
              {product.originalPrice > product.price && (
                <>
                  <span className="text-lg text-slate-400 line-through">₹{product.originalPrice.toFixed(2)}</span>
                  <span className="text-xs font-black bg-rose-500 text-white px-2.5 py-1 rounded uppercase tracking-wider">
                    Save ₹{(product.originalPrice - product.price).toFixed(2)} ({product.discount}% Off)
                  </span>
                </>
              )}
            </div>

            <div className="flex items-center justify-between pt-2.5 text-xs">
              <div className="flex items-center gap-1">
                {product.prime && <span className="text-sky-500 font-extrabold mr-2">✓ prime eligible</span>}
                <span className={product.available ? "text-emerald-500 font-bold" : "text-rose-500 font-bold"}>
                  {product.available ? "In Stock & Ready to Ship" : "Temporarily Out of Stock"}
                </span>
              </div>
            </div>
          </div>

          {/* Brief Short summary */}
          <p className="text-xs text-slate-600 dark:text-slate-350 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-3">
            <a
              href={product.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 h-13 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2.5 shadow-md transition-colors"
            >
              Buy on Amazon
              <ExternalLink className="w-4 h-4 stroke-[2.5]" />
            </a>

            <button
              onClick={() => onToggleWishlist(product.id)}
              className={`p-3.5 rounded-xl border flex items-center justify-center cursor-pointer transition-all ${
                isWishlisted 
                  ? "bg-rose-50 border-rose-200 text-rose-500 hover:bg-rose-100" 
                  : "bg-slate-50 border-slate-200 dark:bg-slate-850 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-rose-500 dark:hover:text-rose-300"
              }`}
              title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
            >
              <Heart className={`w-5.5 h-5.5 ${isWishlisted ? "fill-rose-500" : ""}`} />
            </button>

            {/* Share link button */}
            <div className="relative">
              <button
                onClick={handleCopyLink}
                className="w-full sm:w-13 h-13 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 flex items-center justify-center cursor-pointer transition"
                title="Copy Link to Clipboard"
              >
                <Share2 className="w-5 h-5" />
              </button>

              {shareTooltip && (
                <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-slate-950 text-white text-[10px] font-bold px-2.5 py-1.5 rounded shadow-lg z-30 whitespace-nowrap">
                  Affiliate Link Copied!
                </span>
              )}
            </div>
          </div>

          {/* Quick trust flags */}
          <div className="grid grid-cols-3 gap-2.5 pt-4 text-center">
            <div className="p-3 glass-card rounded-xl space-y-1">
              <ShieldCheck className="w-5 h-5 text-emerald-500 mx-auto" />
              <h4 className="text-[10px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">A+ Rated</h4>
              <p className="text-[9px] text-slate-400 leading-normal">Vetted for top quality and reliability</p>
            </div>
            <div className="p-3 glass-card rounded-xl space-y-1">
              <Truck className="w-5 h-5 text-sky-500 mx-auto" />
              <h4 className="text-[10px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">Fast Route</h4>
              <p className="text-[9px] text-slate-400 leading-normal">Fulfillment processed directly by Amazon</p>
            </div>
            <div className="p-3 glass-card rounded-xl space-y-1">
              <RefreshCw className="w-5 h-5 text-amber-500 mx-auto" />
              <h4 className="text-[10px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">Safe Order</h4>
              <p className="text-[9px] text-slate-400 leading-normal">Guaranteed standard Amazon warranty</p>
            </div>
          </div>

        </div>

      </div>

      {/* Middle Specs & Long Description */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-8 border-t border-slate-150 dark:border-slate-800">
        
        {/* Left section: Description & bullets (span 7) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight uppercase">Product Overview</h3>
            <p className="text-xs text-slate-650 dark:text-slate-400 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Key Selling Points</h4>
            <ul className="space-y-2 list-disc list-inside text-xs text-slate-650 dark:text-slate-400 pl-2">
              {product.features.map((feat, i) => (
                <li key={i} className="leading-relaxed">{feat}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right section: Specs Table (span 5) */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight uppercase">Technical Details</h3>
          
          <div className="rounded-2xl overflow-hidden glass-card p-4">
            <table className="w-full text-xs">
              <tbody className="divide-y divide-slate-150 dark:divide-slate-850">
                {Object.entries(product.specifications).map(([key, val]) => (
                  <tr key={key} className="first:pt-0">
                    <td className="py-2.5 font-bold text-slate-400 uppercase tracking-wider text-[10px] w-2/5">{key}</td>
                    <td className="py-2.5 font-bold text-slate-900 dark:text-slate-200 text-right w-3/5">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Bottom section: Related products recommendation */}
      {relatedProducts.length > 0 && (
        <div className="pt-12 border-t border-slate-150 dark:border-slate-800 space-y-6">
          <div className="flex items-center gap-2">
            <BadgePercent className="w-5 h-5 text-amber-500" />
            <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight uppercase">You Might Also Like</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
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
      )}

    </div>
  );
}
