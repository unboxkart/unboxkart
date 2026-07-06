import React from "react";
import { X, Heart, ShoppingCart, Trash2, ExternalLink } from "lucide-react";
import { PRODUCTS } from "../data/products";
import { Product } from "../types";

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
  onProductClick: (product: Product) => void;
  onClearAll: () => void;
}

export default function WishlistDrawer({
  isOpen,
  onClose,
  wishlistIds,
  onToggleWishlist,
  onProductClick,
  onClearAll,
}: WishlistDrawerProps) {
  if (!isOpen) return null;

  // Retrieve matching products
  const wishlistedProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-xs flex justify-end transition-opacity duration-300">
      {/* Outer closer */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Slide Drawer Content */}
      <div className="relative w-full max-w-md h-full glass-panel border-l border-slate-200/40 dark:border-slate-800/40 shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-250">
        
        {/* Drawer Header */}
        <div className="px-5 py-4 border-b border-slate-150/40 dark:border-slate-800/40 flex items-center justify-between bg-white/20 dark:bg-slate-950/20">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <h3 className="font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
              Your Wishlist ({wishlistedProducts.length})
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Close wishlist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wishlisted Items list */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {wishlistedProducts.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
              <div className="w-16 h-16 rounded-full bg-rose-500/5 text-rose-400 flex items-center justify-center">
                <Heart className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Your Wishlist is Empty</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
                Click the heart icon on any product card or quick view panel to save your favorite Amazon deals for comparison.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition cursor-pointer"
              >
                Continue Browsing Deals
              </button>
            </div>
          ) : (
            wishlistedProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onProductClick(product);
                  onClose();
                }}
                className="flex gap-4 p-3.5 rounded-2xl border border-slate-150/30 dark:border-slate-800/30 bg-white/30 dark:bg-slate-950/30 hover:border-amber-500/40 dark:hover:border-amber-500/30 transition-all cursor-pointer relative overflow-hidden group backdrop-blur-sm"
              >
                {/* Image */}
                <div className="w-20 h-20 bg-white dark:bg-slate-950 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-850 shrink-0 flex items-center justify-center">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>

                {/* Meta details */}
                <div className="flex flex-col justify-between overflow-hidden flex-1 py-0.5">
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-2 leading-snug group-hover:text-amber-500 transition-colors">
                      {product.name}
                    </h4>
                    <span className="inline-flex items-center text-[10px] text-amber-500 font-bold">★ {product.rating}</span>
                  </div>

                  <div className="flex items-center justify-between gap-1 mt-1">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-sm font-black text-slate-950 dark:text-white">₹{product.price.toFixed(2)}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-[10px] text-slate-400 line-through">₹{product.originalPrice.toFixed(2)}</span>
                      )}
                    </div>
                    
                    {/* Buy Now small affiliate button */}
                    <a
                      href={product.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-2.5 py-1.5 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 text-[10px] font-black flex items-center gap-1.5 transition-colors"
                    >
                      Buy on Amazon <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Remove single item button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleWishlist(product.id);
                  }}
                  className="absolute top-2 right-2 p-1.5 rounded-lg border border-slate-100 dark:border-slate-800 hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-950/20 text-slate-400 cursor-pointer transition"
                  title="Remove item"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>

              </div>
            ))
          )}
        </div>

        {/* Drawer Footer Actions */}
        {wishlistedProducts.length > 0 && (
          <div className="p-5 border-t border-slate-150/40 dark:border-slate-800/40 bg-white/20 dark:bg-slate-950/20 space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500">
              <span>Total Saved Deals:</span>
              <span className="text-slate-900 dark:text-white font-extrabold">{wishlistedProducts.length} Products</span>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={onClearAll}
                className="h-11 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-950/20 text-slate-500 dark:text-slate-400 text-xs font-bold transition cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Trash2 className="w-4 h-4" />
                Clear Wishlist
              </button>

              <button
                onClick={onClose}
                className="h-11 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-50 text-xs font-bold transition cursor-pointer"
              >
                Close Drawer
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
export { WishlistDrawer };
