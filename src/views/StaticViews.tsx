import React, { useState } from "react";
import { ShieldCheck, HelpCircle, FileText, Scale, Heart, Award, Users, BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import { SITE_CONFIG, CATEGORIES } from "../config";

interface StaticViewProps {
  view: "about" | "faq" | "privacy" | "terms" | "disclosure";
}

export default function StaticViews({ view }: StaticViewProps) {
  const [activeFaqIdx, setActiveFaqIdx] = useState<number | null>(null);
  const [faqCategory, setFaqCategory] = useState<string>("all");

  const FAQS = [
    {
      question: "How does your affiliate website work?",
      answer: "We are a product discovery and comparison platform. We browse Amazon daily, review feedback, check price graphs, and select the highest quality products. When you find a product you like and click 'Buy Now', you are redirected to Amazon.com. If you purchase the item, we receive a small referral commission from Amazon at absolutely zero additional cost to you.",
      category: "general"
    },
    {
      question: "Are the prices on your website accurate?",
      answer: "We pull approximate prices from Amazon; however, Amazon prices fluctuate frequently due to supply, demand, and flash sales. Any price and availability displayed on Amazon.com at the actual time of purchase will apply.",
      category: "pricing"
    },
    {
      question: "Will I pay more if I buy through your links?",
      answer: "No, absolutely not. The price of the product is exactly the same whether you use our affiliate links or navigate to Amazon directly. Amazon pays our referral fee out of their advertising budget.",
      category: "general"
    },
    {
      question: "Can I return a product I purchased?",
      answer: "Yes, all purchases, deliveries, returns, and customer support are handled directly by Amazon in accordance with Amazon's standard Return Policies. We do not ship, process, or handle any physical stock ourselves.",
      category: "shipping"
    },
    {
      question: "Is my personal data safe on your website?",
      answer: "We prioritize your data security. We do not sell or share any of your personal details. If you subscribe to our newsletter, we only use your email to send curated deals and you can unsubscribe in one click at any time.",
      category: "privacy"
    },
    {
      question: "How do you select your 'Editor's Picks' and 'Best Sellers'?",
      answer: "Our editorial process involves a minimum of 4-6 hours of research per category. We analyze user satisfaction rates, return rates, historical price stability, and manufacturer reputability. We do not accept sponsored placements to ensure unbiased suggestions.",
      category: "general"
    }
  ];

  const filteredFaqs = faqCategory === "all" ? FAQS : FAQS.filter(f => f.category === faqCategory);

  const renderAbout = () => (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-amber-500 font-extrabold text-xs uppercase tracking-widest bg-amber-500/10 px-3.5 py-1.5 rounded-full">
          Who We Are
        </span>
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Helping You Shop Smarter, Faster, and Cheaper
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed">
          {SITE_CONFIG.siteName} is an independent review and deal-monitoring platform. We filter through millions of products on Amazon so you don't have to, surfacing only top-tier deals and highest-quality products.
        </p>
      </div>

      {/* Grid Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
        <div className="p-6 rounded-2xl glass-card text-center space-y-3 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-base text-slate-900 dark:text-white">Expert Editorial Curation</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            We spend hours investigating customer reviews, return ratios, and brand reputation for every single item listed.
          </p>
        </div>

        <div className="p-6 rounded-2xl glass-card text-center space-y-3 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center mx-auto">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-base text-slate-900 dark:text-white">Unbiased & Independent</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            We do not accept payments from brands for product placement. Our opinions are entirely our own and based on customer satisfaction data.
          </p>
        </div>

        <div className="p-6 rounded-2xl glass-card text-center space-y-3 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-base text-slate-900 dark:text-white">Driven by Community</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            We cross-reference scores against actual long-term usage reviews to guarantee our recommendations stand the test of time.
          </p>
        </div>
      </div>

      {/* Editorial Guidelines */}
      <div className="rounded-3xl glass-card p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 space-y-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our 5-Step Integrity Checklist</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Before we write a single buying guide or suggest a discount, each item goes through our meticulous vetting standard:
          </p>
          <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-[10px] font-black">1</span>
              <span>Minimum 4.3 Star user satisfaction rating.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-[10px] font-black">2</span>
              <span>At least 500+ verified customer reviews.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-[10px] font-black">3</span>
              <span>Analysis of historical price charts to avoid fake discounts.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-[10px] font-black">4</span>
              <span>Check for active manufacturer warranties.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-[10px] font-black">5</span>
              <span>Verification that products are sold by highly-rated suppliers.</span>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80" 
            alt="Vetting process"
            className="w-full h-64 object-cover rounded-2xl shadow"
          />
        </div>
      </div>
    </div>
  );

  const renderFaq = () => (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">Got Questions? We Have Answers.</h1>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Learn how {SITE_CONFIG.siteName} works, how we manage links, and how to verify shipping or deal safety.
        </p>
      </div>

      {/* FAQ Category Filters */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {["all", "general", "pricing", "shipping", "privacy"].map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setFaqCategory(cat);
              setActiveFaqIdx(null);
            }}
            className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              faqCategory === cat 
                ? "bg-amber-500 text-slate-950" 
                : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Expandable list */}
      <div className="max-w-3xl mx-auto space-y-3">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = activeFaqIdx === idx;
          return (
            <div 
              key={idx}
              className="rounded-xl glass-card overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => setActiveFaqIdx(isOpen ? null : idx)}
                className="w-full px-5 py-4 flex items-center justify-between text-left text-sm font-bold text-slate-950 dark:text-white cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-950/40"
              >
                <span>{faq.question}</span>
                {isOpen ? <ChevronUp className="w-4 h-4 text-amber-500 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-50 dark:border-slate-950">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderPrivacy = () => (
    <div className="max-w-3xl mx-auto space-y-6 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
      <h1 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
        <FileText className="w-6 h-6 text-amber-500" />
        Privacy Policy
      </h1>
      <p className="text-[10px] text-slate-400 font-bold">Effective Date: July 3, 2026</p>
      
      <section className="space-y-2">
        <h3 className="font-bold text-sm text-slate-900 dark:text-white">1. Introduction</h3>
        <p>
          At {SITE_CONFIG.siteName}, we respect your personal privacy and are fully committed to protecting any information you share with us. This Privacy Policy details how we collect, store, utilize, and protect your information when you visit our online affiliate catalog.
        </p>
      </section>

      <section className="space-y-2">
        <h3 className="font-bold text-sm text-slate-900 dark:text-white">2. Information We Collect</h3>
        <p>
          We collect two categories of information when you interact with us:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong>Personal Information:</strong> If you voluntarily sign up for our daily deals newsletter, we request and store your Email address.</li>
          <li><strong>Non-Personal Information:</strong> We automatically track standard usage metrics via web browser cookies (e.g., your IP address, browser type, pages viewed, time spent, referring link) to improve the layout and load speed.</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h3 className="font-bold text-sm text-slate-900 dark:text-white">3. How We Use Information</h3>
        <p>
          We use your information strictly for the following purposes:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>To distribute newsletters featuring handpicked Amazon discount lists.</li>
          <li>To analyze aggregated web traffic patterns and optimize responsive structures.</li>
          <li>To prevent fraudulent clicks and ensure the safety of our server.</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h3 className="font-bold text-sm text-slate-900 dark:text-white">4. Third-Party Links & Services</h3>
        <p>
          Our catalog contains multiple outbound buttons pointing to Amazon.com. Please be aware that once you exit our site and click onto Amazon, you are bound by Amazon's proprietary Privacy Policy and cookies systems. We highly recommend reviewing their terms when purchasing. We also employ third-party analytics trackers (such as Google Analytics) which deploy separate cookie variables.
        </p>
      </section>

      <section className="space-y-2">
        <h3 className="font-bold text-sm text-slate-900 dark:text-white">5. Your Choices</h3>
        <p>
          You are free to disable cookies in your browser settings at any time. If you have subscribed to our newsletter and wish to remove your address from our active database, click the 'Unsubscribe' link located at the bottom of any automated newsletter or contact us directly at <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-amber-500 underline font-bold">{SITE_CONFIG.contactEmail}</a>.
        </p>
      </section>
    </div>
  );

  const renderTerms = () => (
    <div className="max-w-3xl mx-auto space-y-6 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
      <h1 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
        <Scale className="w-6 h-6 text-amber-500" />
        Terms & Conditions
      </h1>
      <p className="text-[10px] text-slate-400 font-bold">Last Updated: July 3, 2026</p>

      <section className="space-y-2">
        <h3 className="font-bold text-sm text-slate-900 dark:text-white">1. Agreement to Terms</h3>
        <p>
          By accessing or utilizing {SITE_CONFIG.siteName}, you unconditionally agree to comply with and be bound by these Terms & Conditions. If you do not agree to these terms, you must immediately cease accessing this website.
        </p>
      </section>

      <section className="space-y-2">
        <h3 className="font-bold text-sm text-slate-900 dark:text-white">2. Nature of Services</h3>
        <p>
          {SITE_CONFIG.siteName} is a purely informational, non-commercial portfolio showcasing affiliate product discoverability. We are not an eCommerce shop, we do not ship products, we do not collect payment details, and we do not maintain physical stock. All physical processing, deliveries, billing, and order modifications are carried out by Amazon.com.
        </p>
      </section>

      <section className="space-y-2">
        <h3 className="font-bold text-sm text-slate-900 dark:text-white">3. Intellectual Property</h3>
        <p>
          All unique editorial articles, graphics design files, and database structures are the exclusive intellectual property of {SITE_CONFIG.siteName}. All brand trademarks, logos, and product catalog photos are the property of their respective owners (e.g., Apple, Sony, Amazon) and are used here purely for descriptive product review purposes.
        </p>
      </section>

      <section className="space-y-2">
        <h3 className="font-bold text-sm text-slate-900 dark:text-white">4. Limitation of Liability</h3>
        <p>
          While we do our utmost to keep product specifications and pricing accurate, we make no guarantees of price, availability, or suitability of items. We are not liable for any issues, defectiveness, shipping delays, or financial damages resulting from orders made on Amazon.com after clicking our links.
        </p>
      </section>
    </div>
  );

  const renderDisclosure = () => (
    <div className="max-w-3xl mx-auto space-y-6 text-xs text-slate-600 dark:text-slate-400 leading-relaxed bg-amber-500/5 dark:bg-amber-500/5 p-6 rounded-2xl border border-amber-500/20 backdrop-blur-md">
      <h1 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2 border-b border-amber-500/20 pb-3">
        <BookOpen className="w-6 h-6 text-amber-500" />
        Amazon Affiliate Disclosure
      </h1>
      <p className="text-[10px] text-slate-400 font-bold">Official Amazon Compliance Notice</p>

      <p className="font-bold text-slate-800 dark:text-slate-200">
        In complete compliance with the Federal Trade Commission (FTC) guidelines and Amazon Associates Operating Agreement, please review the following affiliate relationship disclosure statement.
      </p>

      <div className="space-y-4">
        <p>
          We believe in complete transparency on the internet. As such, you should assume that every single product link, 'Buy Now' button, and category tile on {SITE_CONFIG.siteName} is an affiliate link.
        </p>
        
        <p>
          <strong>What does this mean for you?</strong> Whenever you click on one of our product cards or links and complete a purchase on Amazon.com within 24 hours of that click, we receive a small commission (ranging from 1% to 10% depending on the department) directly from Amazon.
        </p>

        <p className="p-4 glass-card rounded-xl font-bold text-slate-900 dark:text-white">
          Important: This referral fee comes at absolutely ZERO additional cost to you. The price you pay for the product remains identical whether you use our link or find it yourself.
        </p>

        <p>
          Our commission is paid out of Amazon's corporate marketing budget. These micro-commissions allow our independent review team to pay for hosting, domain fees, development, and hundreds of hours of editorial research to bring you authentic, top-performing deals.
        </p>

        <p>
          We strictly evaluate products based on their specifications, ratings, and customer reviews to ensure we recommend items of genuine value. We appreciate your incredible support in choosing to use our affiliate links. Thank you!
        </p>
      </div>
    </div>
  );

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {view === "about" && renderAbout()}
      {view === "faq" && renderFaq()}
      {view === "privacy" && renderPrivacy()}
      {view === "terms" && renderTerms()}
      {view === "disclosure" && renderDisclosure()}
    </div>
  );
}
export { StaticViews };
