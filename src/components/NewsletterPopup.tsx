import React, { useState, useEffect } from "react";
import { X, Mail, Sparkles, Send } from "lucide-react";

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const subscribedOrDismissed = localStorage.getItem("newsletter-dismissed-or-subscribed");
    if (!subscribedOrDismissed) {
      // Open popup after a 10-second delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("newsletter-dismissed-or-subscribed", "true");
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      localStorage.setItem("newsletter-dismissed-or-subscribed", "true");
      setSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 2500);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
      
      {/* Absolute closer click block */}
      <div className="absolute inset-0" onClick={handleClose} />

      {/* Main Container */}
      <div className="relative w-full max-w-md rounded-2xl glass-panel p-6 md:p-8 text-slate-900 dark:text-slate-100 shadow-2xl flex flex-col items-center text-center z-10 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4.5 right-4.5 p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            {/* Visual Icon Header */}
            <div className="w-14 h-14 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 stroke-[2]" />
            </div>

            {/* Typography headings */}
            <span className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-600 dark:text-amber-500 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full mb-2">
              <Sparkles className="w-3 h-3" /> VIP Early Access
            </span>
            <h3 className="text-xl font-extrabold text-slate-950 dark:text-white tracking-tight">
              Unlock Up To 70% Extra Savings!
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed max-w-sm">
              Join 45,000+ smart shoppers. Receive our handpicked \"Deals of the Week\" digests and direct alerts for Amazon price errors. No spam, unsubscribe anytime.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full mt-6 space-y-2.5">
              <input
                type="email"
                placeholder="Enter your personal email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-11 px-4 glass-input text-slate-900 dark:text-white rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-all"
              />
              <button
                type="submit"
                className="w-full h-11 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                Get Mega Deals Now
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            <span className="text-[10px] text-slate-400 mt-4 leading-normal">
              By subscribing, you agree to our Privacy Policy and can opt-out at any time. We respect your inbox.
            </span>
          </>
        ) : (
          <div className="py-6 space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center mx-auto">
              ✓
            </div>
            <h3 className="text-lg font-bold text-slate-950 dark:text-white">Welcome Aboard, Smart Shopper!</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto leading-relaxed">
              We've added your address to our VIP database. Check your inbox soon for your first curated list of mega-discounts!
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
