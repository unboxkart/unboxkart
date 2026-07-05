import React, { useState, useEffect } from "react";
import { X, ShieldAlert } from "lucide-react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent-accepted");
    if (!consent) {
      // Delay display by 2 seconds
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent-accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-40 bg-slate-900/90 dark:bg-slate-950/90 border border-slate-800/60 text-slate-100 rounded-2xl shadow-2xl p-5 flex flex-col gap-3 animate-in slide-in-from-bottom-5 duration-300 backdrop-blur-md">
      
      <div className="flex items-start gap-3">
        <div className="p-2 bg-slate-850 rounded-xl text-amber-500 shrink-0">
          <ShieldAlert className="w-5 h-5" />
        </div>
        
        <div>
          <h4 className="text-xs font-black uppercase tracking-wider text-white">We Value Your Privacy</h4>
          <p className="text-[11px] text-slate-400 leading-relaxed mt-1">
            This website uses cookies, analytical trackers, and Amazon associate links to optimize your shopping experience and deliver high-quality expert buying advice.
          </p>
        </div>
      </div>

      <div className="flex gap-2.5 mt-2 ml-11">
        <button
          onClick={handleAccept}
          className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black rounded-lg transition-colors cursor-pointer"
        >
          Accept & Close
        </button>
        
        <button
          onClick={() => setVisible(false)}
          className="px-3.5 py-2 text-slate-400 hover:text-white text-xs font-bold transition-colors cursor-pointer"
        >
          Dismiss
        </button>
      </div>

    </div>
  );
}
