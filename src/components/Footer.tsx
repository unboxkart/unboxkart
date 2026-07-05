import React, { useState } from "react";
import { 
  Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Send, ArrowUp
} from "lucide-react";
import { SITE_CONFIG, CATEGORIES } from "../config";

interface FooterProps {
  setCurrentView: (view: string) => void;
  setSelectedCategory: (cat: string) => void;
}

export default function Footer({ setCurrentView, setSelectedCategory }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleLinkClick = (view: string, category: string = "all") => {
    setCurrentView(view);
    setSelectedCategory(category);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300">
      
      {/* Newsletter and Back to Top Row */}
      <div className="border-b border-slate-850 bg-slate-950/40 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md">
            <h3 className="text-lg font-bold text-white tracking-tight">Stay updated with Best Daily Deals</h3>
            <p className="text-xs text-slate-400 mt-1">
              Subscribe to our weekly curated newsletter and never miss up to 70% flash savings and comprehensive buying guides.
            </p>
          </div>
          
          <form onSubmit={handleSubscribe} className="w-full max-w-md flex gap-2">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-3 w-4.5 h-4.5 text-slate-500" />
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-11 pl-10 pr-4 bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 rounded-lg text-sm focus:outline-none focus:border-amber-500 transition-all"
              />
            </div>
            <button
              type="submit"
              className="px-5 h-11 bg-amber-500 text-slate-950 font-bold text-xs rounded-lg hover:bg-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap shadow-md"
            >
              {subscribed ? "Subscribed!" : "Subscribe"}
              {!subscribed && <Send className="w-3.5 h-3.5" />}
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Sitemap Grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand & Contact details */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-widest">{SITE_CONFIG.siteName}</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            We are dedicated to saving your valuable time and money. Our team of product experts monitors Amazon trends, user reviews, and pricing histories daily to surface handpicked, high-quality, top-rated products.
          </p>
          <div className="space-y-2.5 text-xs">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>{SITE_CONFIG.address}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-amber-500 shrink-0" />
              <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="hover:text-amber-500 transition">{SITE_CONFIG.contactEmail}</a>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-amber-500 shrink-0" />
              <a href={`tel:${SITE_CONFIG.contactPhone}`} className="hover:text-amber-500 transition">{SITE_CONFIG.contactPhone}</a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Quick Navigation</h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <button onClick={() => handleLinkClick("home")} className="hover:text-amber-500 transition cursor-pointer">Home Landing Page</button>
            </li>
            <li>
              <button onClick={() => handleLinkClick("deals")} className="hover:text-amber-500 transition cursor-pointer">🔥 Today's Hot Deals</button>
            </li>
            <li>
              <button onClick={() => handleLinkClick("categories", "all")} className="hover:text-amber-500 transition cursor-pointer">Browse All Products</button>
            </li>
            <li>
              <button onClick={() => handleLinkClick("blog")} className="hover:text-amber-500 transition cursor-pointer">Buying Guides & Blog</button>
            </li>
            <li>
              <button onClick={() => handleLinkClick("about")} className="hover:text-amber-500 transition cursor-pointer">About Our Experts</button>
            </li>
            <li>
              <button onClick={() => handleLinkClick("contact")} className="hover:text-amber-500 transition cursor-pointer">Get In Touch</button>
            </li>
            <li>
              <button onClick={() => handleLinkClick("faq")} className="hover:text-amber-500 transition cursor-pointer">Frequently Asked Questions</button>
            </li>
          </ul>
        </div>

        {/* Major Categories */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Top Departments</h4>
          <ul className="space-y-2.5 text-xs">
            {CATEGORIES.slice(1, 7).map((cat) => (
              <li key={cat.id}>
                <button 
                  onClick={() => handleLinkClick("categories", cat.id)} 
                  className="hover:text-amber-500 transition cursor-pointer text-left"
                >
                  {cat.name} Collection
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal & Compliance */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Legal & Information</h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <button onClick={() => handleLinkClick("disclosure")} className="hover:text-amber-500 transition cursor-pointer">Amazon Affiliate Disclosure</button>
            </li>
            <li>
              <button onClick={() => handleLinkClick("privacy")} className="hover:text-amber-500 transition cursor-pointer">Privacy Policy</button>
            </li>
            <li>
              <button onClick={() => handleLinkClick("terms")} className="hover:text-amber-500 transition cursor-pointer">Terms & Conditions</button>
            </li>
          </ul>

          <div className="mt-6">
            <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2.5">Follow Our Feeds</h5>
            <div className="flex items-center gap-3">
              <a href={SITE_CONFIG.socials.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 text-slate-300 hover:text-white hover:bg-amber-500 rounded-lg transition" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={SITE_CONFIG.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 text-slate-300 hover:text-white hover:bg-amber-500 rounded-lg transition" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href={SITE_CONFIG.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 text-slate-300 hover:text-white hover:bg-amber-500 rounded-lg transition" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={SITE_CONFIG.socials.youtube} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 text-slate-300 hover:text-white hover:bg-amber-500 rounded-lg transition" aria-label="Youtube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Official Legal Amazon Disclosure Banner */}
      <div className="border-t border-slate-850 bg-slate-950 px-4 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center md:text-left space-y-4">
          <p className="text-[11px] text-slate-500 leading-relaxed" id="amazon-disclosure-para">
            <strong>Amazon Associate Disclosure Notice:</strong> {SITE_CONFIG.siteName} is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. As an Amazon Associate, we earn commissions from qualifying purchases. This comes at absolutely zero additional cost to you as a shopper. Price and availability of products are accurate as of the date/time indicated and are subject to change. Any price and availability information displayed on Amazon.com at the time of purchase will apply to the purchase of this product.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800/40 text-[11px] text-slate-500">
            <span>© 2026 {SITE_CONFIG.siteName}. All rights reserved worldwide. Hand-crafted shopping helper.</span>
            
            <button 
              onClick={scrollToTop} 
              className="flex items-center gap-1 hover:text-white transition group cursor-pointer text-slate-400"
            >
              Back to Top
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}
