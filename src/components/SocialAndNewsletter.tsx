import React, { useState } from "react";
import { Instagram, Send, Mail, Phone, MapPin, Sparkles, Facebook, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function SocialAndNewsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <>

      {/* 9. Newsletter Subscription */}
      <section
        id="newsletter"
        className="py-24 bg-luxury-dark relative overflow-hidden text-center border-t border-b border-white/5"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-honey-gold/5 rounded-full blur-[200px] pointer-events-none"></div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-honey-gold/10 border border-honey-gold/25 flex items-center justify-center text-honey-yellow mb-6">
            <Mail className="w-6 h-6 animate-pulse" />
          </div>

          <span className="text-xs uppercase tracking-[0.35em] text-honey-yellow font-bold">
            Join the Family
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white mt-3 font-serif">
            A Wild Pact of Purity
          </h2>
          <p className="text-honey-light/70 text-sm sm:text-base mt-4 max-w-xl leading-relaxed font-light">
            Subscribe to join the Hunnybi Family. Receive limited micro-lot harvest notifications, tribal beekeeping blogs, and exclusive members-only wellness journals.
          </p>

          <div className="mt-10 w-full max-w-md">
            <AnimatePresence mode="wait">
              {!subscribed ? (
                <motion.form
                  key="subscription-form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                  <input
                    id="newsletter-email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 bg-luxury-black/60 border border-honey-gold/30 hover:border-honey-gold/50 focus:border-honey-yellow focus:outline-none rounded-xl px-5 py-3.5 text-sm text-white placeholder-honey-light/35 transition-colors"
                  />
                  <button
                    id="btn-newsletter-subscribe"
                    type="submit"
                    className="bg-gradient-to-r from-honey-gold to-honey-yellow text-luxury-black font-semibold text-xs uppercase tracking-wider py-4 px-6 rounded-xl shadow-lg hover:opacity-95 transition-opacity flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="subscription-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-2xl glassmorphism bg-honey-gold/5 border-honey-gold/30 text-center"
                >
                  <span className="text-xl font-serif text-honey-yellow italic font-semibold block mb-2">Welcome to the Hive!</span>
                  <p className="text-xs text-honey-light/80 font-light">
                    Your exclusive member credentials and welcome credentials packet are winging their way to your terminal inbox!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 10. Premium Footer */}
      <footer
        id="footer"
        className="pt-20 pb-10 bg-luxury-black text-honey-light-85 border-t border-white/5 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left mb-16">
            
            {/* Brand block (Col 1) */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-honey-gold flex items-center justify-center text-luxury-black font-bold font-serif text-xs">
                  HB
                </div>
                <span className="text-lg font-bold tracking-widest text-white font-serif">
                  Hunny<span className="text-honey-gold">bi</span>
                </span>
              </div>
              <p className="text-xs text-honey-light/60 font-light leading-relaxed">
                Sellers of 100% Raw, Unprocessed, Single-Origin Therapeutic Forest Honey sourced ethically from remote reserves of India.
              </p>
              
              {/* Social links */}
              <div className="flex items-center space-x-3.5 pt-2">
                <a href="#" className="p-2 bg-white/5 hover:bg-honey-gold/15 hover:text-honey-yellow border border-white/5 rounded-xl transition-all shadow" title="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 bg-white/5 hover:bg-honey-gold/15 hover:text-honey-yellow border border-white/5 rounded-xl transition-all shadow" title="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 bg-white/5 hover:bg-honey-gold/15 hover:text-honey-yellow border border-white/5 rounded-xl transition-all shadow" title="Twitter">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Slices Navigation (Col 2) */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-white/5 pb-2">
                Pure Nectars
              </h4>
              <ul className="space-y-2 text-xs text-honey-light/65 font-light">
                <li><a href="#products" className="hover:text-honey-yellow transition-colors">Premium Nuts & Honey Blend</a></li>
                <li><a href="#products" className="hover:text-honey-yellow transition-colors">Pure Raw Forest Honey</a></li>
                <li><a href="#products" className="hover:text-honey-yellow transition-colors">Rare Stingless Bee Medicine</a></li>
                <li><a href="#why-us" className="hover:text-honey-yellow transition-colors">Lamination & Quality Reports</a></li>
              </ul>
            </div>

            {/* Policies Block (Col 3) */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-white/5 pb-2">
                Secure Commerce
              </h4>
              <ul className="space-y-2 text-xs text-honey-light/65 font-light">
                <li><a href="#" className="hover:text-honey-yellow transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-honey-yellow transition-colors">Shipping Policy (3-5 Days India-wide)</a></li>
                <li><a href="#" className="hover:text-honey-yellow transition-colors">Damages & Secure Return Guarantee</a></li>
                <li><a href="#" className="hover:text-honey-yellow transition-colors">API Terminals & Terms of Use</a></li>
              </ul>
            </div>

            {/* Contact Details (Col 4) */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-white/5 pb-2">
                Converse with Us
              </h4>
              <ul className="space-y-3.5 text-xs text-honey-light/65 font-light">
                <li className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-honey-yellow flex-shrink-0 mt-0.5" />
                  <span>Hunnybi Organic Farms, Wilderness Annex, Srinagar, Kashmir, India</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Mail className="w-4 h-4 text-honey-yellow flex-shrink-0" />
                  <a href="mailto:curator@hunnybi.com" className="hover:text-honey-yellow transition-colors">curator@hunnybi.com</a>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Phone className="w-4 h-4 text-honey-yellow flex-shrink-0" />
                  <span>+91 98451 01227</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Copyright Row */}
          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] text-honey-light/35 font-light">
            <span>&copy; 2026 Hunnybi Organics India. Sourced sustainably. Squeezed and unfiltered.</span>
            <span className="mt-2 sm:mt-0 flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-honey-yellow animate-pulse" />
              <span>Built with React + Framer Motion + Secured Stripe Sandbox</span>
            </span>
          </div>

        </div>
      </footer>
    </>
  );
}
