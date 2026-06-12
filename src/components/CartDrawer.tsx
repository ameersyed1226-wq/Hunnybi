import { CartItem } from "../types";
import { X, Trash2, Plus, Minus, ShieldCheck, ShoppingBag, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, newQty: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}: CartDrawerProps) {
  const subtotal = cartItems.reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0);
  const freeShippingThreshold = 999; // Free shipping above ₹999
  const distanceToFreeShipping = freeShippingThreshold - subtotal;
  const deliveryCharges = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 80;
  const total = subtotal + deliveryCharges;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs"
          ></motion.div>

          {/* Drawer Content */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 z-50 w-full sm:max-w-md h-full bg-luxury-dark border-l border-honey-gold/20 shadow-2xl flex flex-col justify-between"
          >
            {/* Header */}
            <div className="p-5 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <ShoppingBag className="w-5.5 h-5.5 text-honey-yellow" />
                <h3 className="text-lg font-bold tracking-wide text-white">Your Shopping Cart ({cartItems.length})</h3>
              </div>
              <button
                id="btn-close-cart-drawer"
                onClick={onClose}
                className="p-2 rounded-full bg-white/5 text-honey-light hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main scrollable item listing */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-honey-light/40">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-white font-serif italic text-lg font-medium">Your cart is dry</h4>
                    <p className="text-xs text-honey-light/60 mt-1 max-w-[240px] leading-relaxed">
                      Explore our single-origin collections and health boosters to load up on pristine nectar.
                    </p>
                  </div>
                  <button
                    id="btn-cart-continue-shopping"
                    onClick={onClose}
                    className="text-xs font-bold uppercase tracking-wider text-honey-yellow border border-honey-gold/30 hover:bg-honey-gold/10 px-6 py-2.5 rounded-full cursor-pointer"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  {/* Delivery progress bar */}
                  <div className="p-3.5 rounded-xl bg-luxury-card border border-honey-gold/10 text-xs text-left mb-6">
                    {distanceToFreeShipping > 0 ? (
                      <p className="text-honey-light/80">
                        Add <strong className="text-honey-yellow font-bold">₹{distanceToFreeShipping}</strong> more to qualify for <strong className="text-white">Free Premium Home Delivery</strong>.
                      </p>
                    ) : (
                      <p className="text-[#10b981] font-semibold flex items-center space-x-1.5">
                        <ShieldCheck className="w-4 h-4 text-[#10b981]" />
                        <span>Congratulations! Your batch qualifies for Free Shipping.</span>
                      </p>
                    )}
                    <div className="w-full bg-white/5 h-1.5 rounded-full mt-3 overflow-hidden">
                      <div
                        className="bg-honey-gold h-full rounded-full transition-all duration-500"
                        style={{ width: `${Math.min((subtotal / freeShippingThreshold) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Cart items list */}
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.product.id}
                        className="flex items-center space-x-4 p-3 bg-luxury-card/40 rounded-2xl border border-white/5"
                      >
                        {/* Square image wrapper */}
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-black/20 flex-shrink-0 select-none">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        {/* Title, qty selection and pricing */}
                        <div className="flex-1 min-w-0 text-left">
                          <h4 className="text-sm font-semibold text-white tracking-wide truncate">
                            {item.product.name}
                          </h4>
                          <span className="text-[10px] text-honey-light/40">{item.product.details.size} jar</span>

                          {/* Controls */}
                          <div className="flex items-center justify-between mt-2.5">
                            <div className="flex items-center space-x-2.5 bg-white/5 px-2 py-1 rounded-lg border border-white/5">
                              <button
                                id={`btn-qty-minus-${item.product.id}`}
                                onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                                className="p-0.5 text-honey-light/60 hover:text-white cursor-pointer"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="text-xs font-bold text-white min-w-[12px] text-center">
                                {item.quantity}
                              </span>
                              <button
                                id={`btn-qty-plus-${item.product.id}`}
                                onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                                className="p-0.5 text-honey-light/60 hover:text-white cursor-pointer"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <button
                              id={`btn-cart-remove-${item.product.id}`}
                              onClick={() => onRemoveItem(item.product.id)}
                              className="p-1.5 text-honey-light/30 hover:text-red-500 hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {/* Pricing product total */}
                        <div className="text-right flex-shrink-0">
                          <span className="text-sm font-bold text-honey-yellow">₹{item.product.price * item.quantity}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Calculations & Secure action block */}
            {cartItems.length > 0 && (
              <div className="p-5 border-t border-white/5 text-left space-y-4">
                <div className="space-y-2 text-sm text-honey-light/80">
                  <div className="flex justify-between">
                    <span className="font-light">Subtotal</span>
                    <span className="font-semibold text-white">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-light">Sustainable Delivery</span>
                    <span className="font-semibold text-white">
                      {deliveryCharges === 0 ? <span className="text-[#10b981]">FREE</span> : `₹${deliveryCharges}`}
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-white/5 pt-3 text-base text-white">
                    <span className="font-bold">Total (incl. GST)</span>
                    <span className="font-extrabold text-honey-yellow">₹{total}</span>
                  </div>
                </div>

                <button
                  id="btn-cart-checkout"
                  onClick={onCheckout}
                  className="w-full bg-gradient-to-r from-honey-gold via-honey-yellow to-honey-gold hover:opacity-95 text-luxury-black font-semibold text-xs tracking-wider uppercase py-4 rounded-xl flex items-center justify-center space-x-2 shadow-lg transition-transform hover:scale-[1.01] cursor-pointer"
                >
                  <ShieldCheck className="w-4.5 h-4.5" />
                  <span>Secure Checkout with Stripe</span>
                  <ArrowRight className="w-4 h-4 text-luxury-black" />
                </button>

                <p className="text-[10px] text-honey-light/35 text-center flex items-center justify-center space-x-1 font-light">
                  <span>SSL secures your checkout terminals instantly.</span>
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
