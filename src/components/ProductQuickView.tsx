import React, { useState, useEffect } from "react";
import { X, Star, Heart, ExternalLink, ShieldCheck, Truck, RefreshCw, Layers } from "lucide-react";
import { Product } from "../types";

interface ProductQuickViewProps {
  product: Product | null;
  onClose: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
}

export default function ProductQuickView({
  product,
  onClose,
  isWishlisted,
  onToggleWishlist,
}: ProductQuickViewProps) {
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
    }
  }, [product]);

  if (!product) return null;

  // Render stars
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.4;
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0 opacity-50" />); // simplify
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-slate-300 dark:text-slate-700 shrink-0" />);
      }
    }
    return stars;
  };

  const imagesList = product.images && product.images.length > 0 ? product.images : [product.image];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm transition-opacity duration-300">
      
      {/* Outer Click Closer */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl glass-panel text-slate-900 dark:text-slate-100 shadow-2xl flex flex-col z-10 animate-in fade-in zoom-in-95 duration-255">
        
        {/* Header (close button only) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors z-20 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Column: Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square w-full rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 flex items-center justify-center">
              <img
                src={activeImage || product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Thumbnails */}
            {imagesList.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto pb-1">
                {imagesList.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`aspect-square w-16 shrink-0 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImage === img 
                        ? "border-amber-500 scale-95" 
                        : "border-slate-200 dark:border-slate-800 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Information */}
          <div className="flex flex-col space-y-4">
            {/* Dept and Brand */}
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
              <span>{product.category}</span>
              <span>•</span>
              <span className="text-amber-500">{product.brand}</span>
            </div>

            {/* Name */}
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-950 dark:text-white leading-snug">
              {product.name}
            </h2>

            {/* Ratings row */}
            <div className="flex items-center gap-1.5 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center">
                {renderStars(product.rating)}
              </div>
              <span className="text-sm font-semibold ml-1 text-slate-800 dark:text-slate-200">{product.rating} / 5.0</span>
              <span className="text-xs text-slate-400">({product.reviewsCount.toLocaleString()} verified ratings)</span>
            </div>

            {/* Pricing Section */}
            <div className="space-y-1">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-black text-slate-950 dark:text-white">${product.price.toFixed(2)}</span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-base text-slate-400 line-through">${product.originalPrice.toFixed(2)}</span>
                    <span className="text-xs font-black bg-rose-500 text-white px-2 py-0.5 rounded uppercase">
                      Save {(product.originalPrice - product.price).toFixed(2)} ({product.discount}%)
                    </span>
                  </>
                )}
              </div>
              {product.prime && (
                <div className="text-xs text-sky-500 font-extrabold">✓ Prime eligible for Free Fast Shipping</div>
              )}
            </div>

            {/* Features lists */}
            <div className="space-y-2">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Key Features</h4>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                {product.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Specifications Details */}
            <div className="pt-2">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">Specifications</h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-950/50 p-3 border border-slate-100 dark:border-slate-850">
                {Object.entries(product.specifications).map(([key, val]) => (
                  <div key={key} className="flex justify-between border-b border-slate-100 dark:border-slate-850 pb-1 last:border-0 last:pb-0">
                    <span className="text-slate-400 font-medium">{key}:</span>
                    <span className="text-slate-700 dark:text-slate-200 font-bold text-right">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4 border-t border-slate-100 dark:border-slate-800 mt-auto">
              <a
                href={product.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 h-12 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                Buy Now on Amazon
                <ExternalLink className="w-4 h-4 stroke-[2.5]" />
              </a>

              <button
                onClick={() => onToggleWishlist(product.id)}
                className={`p-3 rounded-xl border flex items-center justify-center cursor-pointer transition-all ${
                  isWishlisted 
                    ? "bg-rose-50 border-rose-200 text-rose-500 hover:bg-rose-100" 
                    : "bg-slate-50 border-slate-200 dark:bg-slate-850 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-rose-500 dark:hover:text-rose-300"
                }`}
                title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? "fill-rose-500" : ""}`} />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-1.5 text-[10px] font-bold text-slate-400 dark:text-slate-500 pt-2 text-center">
              <div className="flex flex-col items-center p-2 rounded bg-slate-50 dark:bg-slate-950/20">
                <ShieldCheck className="w-4 h-4 text-emerald-500 mb-1" />
                <span>Verified Deal</span>
              </div>
              <div className="flex flex-col items-center p-2 rounded bg-slate-50 dark:bg-slate-950/20">
                <Truck className="w-4 h-4 text-sky-500 mb-1" />
                <span>Fast Transit</span>
              </div>
              <div className="flex flex-col items-center p-2 rounded bg-slate-50 dark:bg-slate-950/20">
                <RefreshCw className="w-4 h-4 text-amber-500 mb-1" />
                <span>Price Match</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
