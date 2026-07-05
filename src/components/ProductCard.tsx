import React, { useState } from "react";
import { Star, StarHalf, Heart, Eye, Share2, ExternalLink, Sparkles } from "lucide-react";
import { Product } from "../types";

interface ProductCardProps {
  key?: string | number;
  product: Product;
  onQuickView: (product: Product) => void;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
  onProductClick: (product: Product) => void;
}

export default function ProductCard({
  product,
  onQuickView,
  isWishlisted,
  onToggleWishlist,
  onProductClick,
}: ProductCardProps) {
  const [shareTooltip, setShareTooltip] = useState(false);

  // Render Star ratings
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.4;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<StarHalf key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />);
      } else {
        stars.push(<Star key={i} className="w-3.5 h-3.5 text-slate-300 dark:text-slate-700 shrink-0" />);
      }
    }
    return stars;
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(product.amazonUrl);
    setShareTooltip(true);
    setTimeout(() => setShareTooltip(false), 2000);
  };

  return (
    <div 
      onClick={() => onProductClick(product)}
      className="group relative flex flex-col overflow-hidden rounded-2xl glass-card transition-all duration-300 hover:shadow-2xl hover:border-amber-500/50 dark:hover:border-amber-500/40 cursor-pointer"
      id={`product-card-${product.id}`}
    >
      {/* Absolute Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 pointer-events-none">
        {product.discount > 0 && (
          <span className="inline-flex items-center rounded-md bg-rose-500 px-2 py-0.5 text-[10px] font-black text-white uppercase tracking-wider">
            -{product.discount}% OFF
          </span>
        )}
        {product.isBestSeller && (
          <span className="inline-flex items-center rounded-md bg-amber-500 px-2 py-0.5 text-[10px] font-black text-slate-950 uppercase tracking-wider shadow">
            Best Seller
          </span>
        )}
        {product.isTodayDeal && (
          <span className="inline-flex items-center rounded-md bg-slate-900 dark:bg-white text-white dark:text-slate-950 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider border border-slate-800 dark:border-slate-200 shadow">
            Today's Deal
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleWishlist(product.id);
        }}
        className={`absolute top-3 right-3 z-10 p-2 rounded-full border shadow-sm transition-all cursor-pointer ${
          isWishlisted 
            ? "bg-rose-50 border-rose-200 text-rose-500" 
            : "bg-white/80 dark:bg-slate-850 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-rose-500 dark:hover:text-rose-400"
        }`}
        aria-label="Add to wishlist"
      >
        <Heart className={`w-4 h-4 ${isWishlisted ? "fill-rose-500" : ""}`} />
      </button>

      {/* Image container */}
      <div className="relative aspect-square w-full overflow-hidden bg-slate-50 dark:bg-slate-950/40 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Hover action overlay */}
        <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white text-slate-900 text-xs font-bold shadow-lg hover:bg-amber-500 hover:text-slate-950 transition transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
          >
            <Eye className="w-3.5 h-3.5" />
            Quick View
          </button>
        </div>
      </div>

      {/* Content wrapper */}
      <div className="flex flex-col flex-1 p-4">
        {/* Category & Brand */}
        <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">
          <span>{product.subCategory || product.category}</span>
          <span>{product.brand}</span>
        </div>

        {/* Product Title */}
        <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 line-clamp-2 min-h-[40px] group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
          {product.name}
        </h3>

        {/* Star Rating and Reviews count */}
        <div className="flex items-center gap-1 mt-2">
          <div className="flex items-center">
            {renderStars(product.rating)}
          </div>
          <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 ml-1">
            {product.rating}
          </span>
          <span className="text-[10px] text-slate-400">
            ({product.reviewsCount.toLocaleString()})
          </span>
        </div>

        {/* Short description */}
        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-2 leading-relaxed">
          {product.shortDescription}
        </p>

        {/* Price & Primebadge spacer */}
        <div className="mt-auto pt-4 flex flex-col gap-2">
          <div className="flex items-baseline justify-between gap-1.5">
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-black text-slate-950 dark:text-white">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-xs text-slate-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            {product.prime && (
              <span className="inline-flex items-center text-[9px] font-extrabold text-sky-500 select-none tracking-tight">
                ✓ prime
              </span>
            )}
          </div>

          {/* Quick Details indicator (availability) */}
          <div className="flex items-center justify-between text-[10px] text-slate-400">
            <span>{product.available ? "In Stock" : "Temporarily Out of Stock"}</span>
          </div>

          {/* Buttons footer */}
          <div className="grid grid-cols-5 gap-2 mt-2 pt-2 border-t border-slate-100 dark:border-slate-850">
            {/* Amazon Affiliate Buy Now Button */}
            <a
              href={product.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="col-span-4 h-9 flex items-center justify-center gap-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold shadow-sm transition-colors"
            >
              Buy Now on Amazon
              <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>

            {/* Copy link button */}
            <div className="relative flex items-center justify-center">
              <button
                onClick={handleShare}
                className="w-full h-9 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50 dark:bg-slate-850 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 flex items-center justify-center cursor-pointer"
                title="Copy Affiliate Link"
              >
                <Share2 className="w-4 h-4" />
              </button>

              {shareTooltip && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-950 text-white text-[10px] font-bold px-2 py-1 rounded shadow-md z-30 whitespace-nowrap">
                  Copied URL!
                </span>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
