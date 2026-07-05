import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Check, AlertCircle } from "lucide-react";
import { SITE_CONFIG } from "../config";

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "deals",
    message: ""
  });

  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    // Simple validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError("All fields are strictly required.");
      return;
    }

    if (!formData.email.includes("@")) {
      setFormError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setFormSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "deals",
        message: ""
      });
    }, 1500);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 space-y-12 animate-in fade-in duration-300">
      
      {/* Headings */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-amber-500 font-extrabold text-[10px] uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full">
          Get In Touch
        </span>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          How Can We Help You Today?
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          Have a hot deal submission? Spot a price error we should post? Want us to audit a specific product category? Send our editorial team a message.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left Columns: Contact cards */}
        <div className="lg:col-span-1 space-y-6">
          <div className="p-6 rounded-2xl glass-card space-y-4 shadow-sm">
            <h3 className="font-bold text-base text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
              Contact Details
            </h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-amber-500/10 text-amber-500 rounded-lg shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Our Head Office</h4>
                  <p className="text-slate-500 dark:text-slate-400 mt-1">{SITE_CONFIG.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-amber-500/10 text-amber-500 rounded-lg shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Editorial Inquiries</h4>
                  <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-slate-500 dark:text-slate-400 hover:text-amber-500 transition mt-1 block font-semibold">{SITE_CONFIG.contactEmail}</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-amber-500/10 text-amber-500 rounded-lg shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Hotline Support</h4>
                  <a href={`tel:${SITE_CONFIG.contactPhone}`} className="text-slate-500 dark:text-slate-400 hover:text-amber-500 transition mt-1 block font-semibold">{SITE_CONFIG.contactPhone}</a>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-amber-500/5 dark:bg-amber-500/5 border border-amber-500/10 backdrop-blur-md space-y-2">
            <h4 className="font-bold text-xs uppercase tracking-wider text-amber-600 dark:text-amber-500">Business Hours</h4>
            <p className="text-xs text-slate-600 dark:text-slate-350 leading-relaxed">
              Our review monitoring team is active <strong>Monday through Friday, 8:00 AM – 5:00 PM PST</strong>. We typically respond to email inquires within 24–48 business hours.
            </p>
          </div>
        </div>

        {/* Right Columns: Interactive Form */}
        <div className="lg:col-span-2">
          <div className="p-8 rounded-2xl glass-card shadow-sm relative overflow-hidden">
            
            {formSuccess ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">Message Sent Successfully!</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
                  Thank you for contacting us. Our editors have received your message and will review it promptly. We appreciate you taking the time to write.
                </p>
                <button
                  onClick={() => setFormSuccess(false)}
                  className="px-5 py-2.5 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-white text-white dark:text-slate-950 text-xs font-bold rounded-xl transition cursor-pointer shadow-sm"
                >
                  Write Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {formError && (
                  <div className="flex items-center gap-2.5 p-3.5 bg-rose-50 border border-rose-200 text-rose-600 rounded-xl text-xs font-semibold">
                    <AlertCircle className="w-4 h-4" />
                    <span>{formError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-11 px-4 rounded-xl glass-input text-slate-900 dark:text-white text-xs placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-11 px-4 rounded-xl glass-input text-slate-900 dark:text-white text-xs placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1.5">
                    What are you writing about?
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full h-11 px-4 rounded-xl glass-input text-slate-900 dark:text-white text-xs focus:outline-none focus:border-amber-500 transition-all cursor-pointer"
                  >
                    <option value="deals">Submit an Amazon Deal / Price Leak</option>
                    <option value="advertising">Affiliate Partnership / Advertising Inquiry</option>
                    <option value="review">Request a Product Category Audit</option>
                    <option value="general">General Support / Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Provide detailed information so our team can help you efficiently..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-4 rounded-xl glass-input text-slate-900 dark:text-white text-xs placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full md:w-auto px-6 h-12 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Send Message"}
                  <Send className="w-3.5 h-3.5" />
                </button>

              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
}
export { ContactView };
