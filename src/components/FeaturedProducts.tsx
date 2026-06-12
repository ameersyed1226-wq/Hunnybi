import React, { useState } from "react";
import { PRODUCTS } from "../data";
import { Product } from "../types";
import { Star, ShieldCheck, Heart, Info, X, Sparkles, CheckCircle, Flame, Droplets } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FeaturedProductsProps {
  onAddToCart: (product: Product) => void;
  openProduct?: Product | null;
  onCloseDetailModal?: () => void;
  onOpenDetailModal?: (product: Product) => void;
}

export default function FeaturedProducts({ onAddToCart }: FeaturedProductsProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [likedProducts, setLikedProducts] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedProducts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="products"
      className="py-24 sm:py-32 bg-luxury-black bg-honeycomb-mesh relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_900px,rgba(232,168,56,0.06),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-honey-yellow font-bold">
            The collection
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white mt-3 font-serif">
            Premium Reserve <span className="font-semibold italic text-honey-gold">Forest Honey</span>
          </h2>
          <p className="text-honey-light/75 text-sm sm:text-base mt-4 font-light max-w-xl mx-auto leading-relaxed">
            Unpasteurized, cold-pressed, and entirely free of sugar adulteration. Packed in exquisite, eye-safe UV/luxury glassware to safeguard living enzymes.
          </p>
          <div className="w-16 h-0.5 bg-honey-gold mx-auto mt-6"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => {
            const isLiked = likedProducts[product.id] || false;
            return (
              <motion.div
                key={product.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl overflow-hidden glassmorphism flex flex-col justify-between h-full bg-orange-950/5 hover:-translate-y-2 pb-6 cursor-pointer transform transition-all duration-300 hover:shadow-2xl"
                onClick={() => setSelectedProduct(product)}
              >
                {/* Product Image Stage */}
                <div className="relative bg-gradient-to-b from-orange-950/20 to-black/30 w-full pt-[100%] overflow-hidden select-none">
                  {/* Decorative honeycomb element */}
                  <div className="absolute top-4 right-4 z-10 flex flex-col items-end space-y-2">
                    <button
                      id={`btn-like-${product.id}`}
                      onClick={(e) => toggleLike(product.id, e)}
                      className="p-2.5 rounded-full bg-luxury-black/60 backdrop-blur-md border border-white/5 text-white hover:text-red-500 hover:border-red-500/30 transition-all duration-300"
                    >
                      <Heart className={`w-4 h-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
                    </button>
                    {product.rating >= 4.9 && (
                      <span className="bg-honey-gold/90 text-luxury-black font-extrabold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center space-x-1 shadow-md">
                        <Flame className="w-3 h-3 text-luxury-black fill-current animate-pulse" />
                        <span>Best Seller</span>
                      </span>
                    )}
                  </div>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Hover Quick detail tag overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-luxury-black/95 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-center text-xs">
                    <span className="text-honey-yellow font-bold uppercase tracking-wider">{product.source}</span>
                    <span className="text-honey-light/70 font-light flex items-center space-x-1">
                      <Star className="w-3.5 h-3.5 fill-honey-gold text-honey-gold" />
                      <span>{product.rating} / 5.0</span>
                    </span>
                  </div>
                </div>

                {/* Info block */}
                <div className="px-6 pt-5 text-left flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-honey-yellow font-bold uppercase tracking-[0.2em]">
                      {product.category}
                    </span>
                    <span className="text-xs text-honey-light/50 font-normal">
                      {product.details.size}
                    </span>
                  </div>

                  <h3 className="text-xl font-medium text-white font-serif mt-2 tracking-wide group-hover:text-honey-yellow transition-colors duration-300">
                    {product.name}
                  </h3>

                  <p className="text-xs text-honey-light/70 mt-1 line-clamp-1 italic font-light">
                    &ldquo;{product.tagline}&rdquo;
                  </p>

                  <p className="text-xs text-honey-light/65 leading-relaxed mt-3 line-clamp-2 font-light">
                    {product.description}
                  </p>

                  <div className="flex items-baseline space-x-3 mt-4">
                    <span className="text-2xl font-semibold text-honey-yellow">₹{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-honey-light/35 line-through">₹{product.originalPrice}</span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="px-6 mt-4 pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                  <button
                    id={`btn-product-info-${product.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(product);
                    }}
                    className="p-3 bg-white/5 hover:bg-white/10 text-honey-light/90 border border-white/10 rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center"
                    title="View technical details"
                  >
                    <Info className="w-4.5 h-4.5" />
                  </button>

                  <button
                    id={`btn-product-add-${product.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(product);
                    }}
                    className="flex-1 bg-gradient-to-r from-honey-gold to-honey-yellow text-luxury-black font-semibold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all duration-300 hover:opacity-95 shadow-md flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Add to Cart</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Description Product Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
            >
              <motion.div
                initial={{ y: 50, scale: 0.95 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: 50, scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-luxury-dark border border-honey-gold/30 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl text-left"
              >
                {/* Close Button */}
                <button
                  id="btn-close-product-modal"
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-honey-light hover:text-white hover:bg-white/10 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                  {/* Left Column Image */}
                  <div className="relative rounded-2xl overflow-hidden bg-luxury-black border border-white/5 p-2">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-auto object-cover rounded-xl"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-honey-gold/90 text-luxury-black font-extrabold text-[9px] uppercase tracking-wider px-3 py-1 rounded-full shadow">
                      {selectedProduct.category}
                    </div>
                  </div>

                  {/* Right Column Specifications */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-light text-white font-serif tracking-wide">
                        {selectedProduct.name}
                      </h3>
                      <div className="flex items-center space-x-2 mt-2">
                        <div className="flex items-center text-honey-gold">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current text-honey-yellow" />
                          ))}
                        </div>
                        <span className="text-xs text-honey-light/60 font-light">
                          ({selectedProduct.reviewCount} Verified Reviews)
                        </span>
                      </div>

                      <p className="text-sm text-honey-light/85 mt-4 leading-relaxed font-light">
                        {selectedProduct.description}
                      </p>

                      {/* Technical details tags */}
                      <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-6 text-xs bg-white/5 p-4 rounded-2xl border border-white/5">
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase text-honey-light/40">Sourcing Region</span>
                          <span className="text-white font-medium mt-0.5">{selectedProduct.source}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase text-honey-light/40">Nectar Type</span>
                          <span className="text-white font-medium mt-0.5">{selectedProduct.honeyType}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase text-honey-light/40">Appetite Net</span>
                          <span className="text-white font-medium mt-0.5">{selectedProduct.details.size}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase text-honey-light/40">Glass Type</span>
                          <span className="text-white font-medium mt-0.5">{selectedProduct.details.jarType.split(" ")[0]} glassware</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <div className="flex items-baseline space-x-3">
                        <span className="text-3xl font-bold text-honey-yellow">₹{selectedProduct.price}</span>
                        {selectedProduct.originalPrice && (
                          <span className="text-sm text-honey-light/40 line-through">₹{selectedProduct.originalPrice}</span>
                        )}
                        <span className="text-[10px] font-semibold text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 rounded-full border border-[#10b981]/20">In Stock</span>
                      </div>

                      {/* Taste profile charts block */}
                      <div className="mt-4 border-t border-white/5 pt-4">
                        <span className="text-[10px] uppercase text-honey-light/50 tracking-wider">Flavour Signature</span>
                        <div className="grid grid-cols-3 gap-2 mt-2 text-center">
                          <div className="bg-white/[0.02] p-2 rounded-xl">
                            <span className="text-[9px] uppercase text-honey-light/40 block">Sweetness</span>
                            <span className="text-xs font-bold text-white mt-1 block">{"★".repeat(selectedProduct.tasteProfile.sweetness)}</span>
                          </div>
                          <div className="bg-white/[0.02] p-2 rounded-xl">
                            <span className="text-[9px] uppercase text-honey-light/40 block">Sour/Tang</span>
                            <span className="text-xs font-bold text-white mt-1 block">{"★".repeat(selectedProduct.tasteProfile.tanginess) || "None"}</span>
                          </div>
                          <div className="bg-white/[0.02] p-2 rounded-xl">
                            <span className="text-[9px] uppercase text-honey-light/40 block">Viscosity</span>
                            <span className="text-xs font-bold text-white mt-1 block">{"★".repeat(selectedProduct.tasteProfile.thickness)}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 flex gap-3">
                        <button
                          id="btn-add-to-cart-modal"
                          onClick={() => {
                            onAddToCart(selectedProduct);
                            setSelectedProduct(null);
                          }}
                          className="flex-1 bg-gradient-to-r from-honey-gold to-honey-yellow hover:opacity-95 text-luxury-black font-semibold text-xs uppercase tracking-wider py-4 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer"
                        >
                          <span>Add to Shopping Cart</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botanical Integrity Certificate Indicator */}
                <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between text-xs text-honey-light/60 bg-honey-gold/5 p-4 rounded-2xl border border-honey-gold/15">
                  <div className="flex items-center space-x-3">
                    <ShieldCheck className="w-5 h-5 text-honey-yellow" />
                    <div>
                      <span className="text-white font-medium block">Hunnybi Integrity Verification</span>
                      <span className="text-[10px] text-honey-light/40">{selectedProduct.details.certification}</span>
                    </div>
                  </div>
                  <div className="text-[10px] uppercase tracking-wider font-extrabold bg-honey-gold/15 text-honey-yellow px-2 py-1 rounded border border-honey-gold/25 font-mono">
                    100% PURE
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
