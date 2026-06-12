import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenRecommender: () => void;
}

export default function Navbar({ cartCount, onOpenCart, onOpenRecommender }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Brand Story", href: "#brand-story" },
    { name: "Products", href: "#products" },
    { name: "Purity & Quality", href: "#why-us" },
    { name: "Health Benefits", href: "#benefits" },
    { name: "Sourcing Map", href: "#sourcing-map" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-luxury-black/90 backdrop-blur-md border-b border-honey-gold/15 py-3 shadow-lg"
            : "bg-gradient-to-b from-black/80 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-2 group">
              <div className="relative w-9 h-9 flex items-center justify-center">
                {/* Honeycomb outline */}
                <div className="absolute inset-0 bg-honey-gold rotate-45 rounded-lg opacity-20 group-hover:rotate-90 group-hover:scale-110 transition-all duration-500"></div>
                <div className="absolute inset-1 bg-gradient-to-br from-honey-yellow to-honey-dark rotate-45 rounded-md flex items-center justify-center">
                  <span className="text-luxury-black font-semibold text-xs rotate-[-45deg] select-none font-serif">HB</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-widest text-white group-hover:text-honey-yellow transition-colors duration-300 font-serif">
                  Hunny<span className="text-honey-gold">bi</span>
                </span>
                <span className="text-[9px] tracking-[0.25em] text-honey-yellow/70 uppercase leading-none">
                  Forest Elixirs
                </span>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-honey-light/85 hover:text-honey-yellow transition-colors duration-300 relative py-1 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-honey-gold group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* CTA & Cart */}
            <div className="hidden md:flex items-center space-x-6">
              {/* AI Helper Button */}
              <button
                id="btn-honey-finder"
                onClick={onOpenRecommender}
                className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-honey-yellow border border-honey-gold/30 hover:border-honey-yellow px-4 py-2 rounded-full bg-honey-dark/10 hover:bg-honey-dark/25 transition-all duration-300 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>Honey Finder</span>
              </button>

              {/* Shopping Cart Trigger */}
              <button
                id="btn-open-cart-desktop"
                onClick={onOpenCart}
                className="relative p-2.5 text-honey-light hover:text-honey-yellow transition-colors duration-300 focus:outline-none cursor-pointer"
              >
                <ShoppingBag className="w-6 h-6" />
                <AnimatePresence>
                  {cartCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-1 -right-1 bg-honey-gold text-luxury-black font-bold text-xs w-5 h-5 flex items-center justify-center rounded-full"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center space-x-4 md:hidden">
              <button
                id="btn-open-cart-mobile"
                onClick={onOpenCart}
                className="relative p-2 text-honey-light hover:text-honey-yellow cursor-pointer"
              >
                <ShoppingBag className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-honey-gold text-luxury-black font-bold text-xs w-4 h-4 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                id="btn-mobile-menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-honey-light hover:text-honey-yellow cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-luxury-black pt-24 px-6 md:hidden flex flex-col justify-between pb-8 h-screen overflow-y-auto"
          >
            <div className="space-y-6 flex flex-col">
              {menuItems.map((item, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-medium text-honey-light/90 hover:text-honey-yellow py-2 border-b border-white/5"
                >
                  {item.name}
                </motion.a>
              ))}

              <motion.button
                id="btn-honey-finder-mobile"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRecommender();
                }}
                className="flex items-center justify-center space-x-2 text-sm font-semibold uppercase tracking-wider text-honey-yellow border border-honey-gold/30 py-3 rounded-xl bg-honey-dark/15 w-full cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Quiz: Find Match Honey</span>
              </motion.button>
            </div>

            <div className="border-t border-white/10 pt-6 flex flex-col items-center">
              <span className="text-xs text-honey-light/50 tracking-wider">Hunnybi 100% Raw Forest Honey</span>
              <span className="text-[10px] text-honey-yellow/60 uppercase tracking-[0.2em] mt-1">Sustainably Sourced from India</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
