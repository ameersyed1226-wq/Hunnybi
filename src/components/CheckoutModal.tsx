import React, { useState, useEffect } from "react";
import { CartItem } from "../types";
import { X, Lock, Check, Sparkles, ShieldCheck, Mail, Calendar, CreditCard, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onSuccessClearCart: () => void;
}

type CheckoutStep = "details" | "processing" | "success";

export default function CheckoutModal({
  isOpen,
  onClose,
  cartItems,
  onSuccessClearCart,
}: CheckoutModalProps) {
  const [step, setStep] = useState<CheckoutStep>("details");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  
  const [processingText, setProcessingText] = useState("Securing gateway connection...");
  const [orderId, setOrderId] = useState("");

  const subtotal = cartItems.reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0);
  const deliveryFee = subtotal >= 999 ? 0 : 80;
  const total = subtotal + deliveryFee;

  // Set card icon based on entry
  const getCardTypeSymbol = () => {
    if (cardNumber.startsWith("4")) return "Visa";
    if (cardNumber.startsWith("5")) return "Mastercard";
    return "CreditCard";
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 16) value = value.slice(0, 16);
    // Format into clusters of 4
    const formatted = value.match(/.{1,4}/g)?.join(" ") || value;
    setCardNumber(formatted);
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 4) value = value.slice(0, 4);
    if (value.length >= 2) {
      value = value.slice(0, 2) + "/" + value.slice(2);
    }
    setExpiry(value);
  };

  const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 3) setCvc(value);
  };

  const startCheckoutSimulation = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("processing");

    // Cycle processing textual messages for ultra realism
    const interval_1 = setTimeout(() => {
      setProcessingText("Syncing credit vectors with Stripe servers...");
    }, 1500);

    const interval_2 = setTimeout(() => {
      setProcessingText("Authorizing token transactions safely...");
    }, 3200);

    const complete = setTimeout(() => {
      // Create random invoice order ID
      const num = Math.floor(100000 + Math.random() * 900000);
      setOrderId(`HB-${num}-26`);
      setStep("success");
    }, 5000);

    return () => {
      clearTimeout(interval_1);
      clearTimeout(interval_2);
      clearTimeout(complete);
    };
  };

  // Reset steps when closed & clear carts on success
  const finishOrderAndClose = () => {
    onSuccessClearCart();
    setStep("details");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
        >
          {/* Card Frame Container */}
          <motion.div
            initial={{ scale: 0.95, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 30 }}
            className="w-full max-w-xl bg-luxury-dark border border-honey-gold/30 rounded-3xl overflow-hidden shadow-2xl relative"
          >
            {/* Header / Cancel Cross */}
            {step !== "processing" && (
              <button
                id="btn-close-checkout-modal"
                onClick={onClose}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-honey-light hover:text-white cursor-pointer"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            )}

            {/* STAGE 1: Detail entry and card information form */}
            {step === "details" && (
              <div className="p-6 sm:p-8 text-left">
                {/* Brand Badge details */}
                <div className="flex items-center space-x-2.5 mb-6 border-b border-white/5 pb-4">
                  <div className="w-8 h-8 rounded-lg bg-honey-gold flex items-center justify-center text-luxury-black font-extrabold text-xs font-serif shadow">HB</div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-wide">SECURE STRIPE CHECKOUT</h3>
                    <span className="text-[10px] uppercase text-honey-yellow/70 tracking-widest font-mono">256-bit SSL secured channel</span>
                  </div>
                </div>

                <form onSubmit={startCheckoutSimulation} className="space-y-4">
                  {/* Personal Contact fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="customer-email" className="block text-[10px] uppercase text-honey-light/50 tracking-wider mb-1.5 font-medium">Email Address</label>
                      <input
                        id="customer-email"
                        type="email"
                        required
                        placeholder="buyer@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-luxury-black/60 border border-honey-gold/20 hover:border-honey-gold/45 focus:border-honey-yellow focus:outline-none rounded-xl px-4 py-3 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="customer-phone" className="block text-[10px] uppercase text-honey-light/50 tracking-wider mb-1.5 font-medium">Mobile Phone</label>
                      <input
                        id="customer-phone"
                        type="tel"
                        required
                        placeholder="+91 98XXX XXXXX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-luxury-black/60 border border-honey-gold/20 hover:border-honey-gold/45 focus:border-honey-yellow focus:outline-none rounded-xl px-4 py-3 text-xs text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="customer-address" className="block text-[10px] uppercase text-honey-light/50 tracking-wider mb-1.5 font-medium">Shipping Address</label>
                    <input
                      id="customer-address"
                      type="text"
                      required
                      placeholder="Street, Block, City, pincode (Standard Delivery)"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full bg-luxury-black/60 border border-honey-gold/20 hover:border-honey-gold/45 focus:border-honey-yellow focus:outline-none rounded-xl px-4 py-3 text-xs text-white"
                    />
                  </div>

                  {/* Card payment detail block resembling Stripe Elements */}
                  <div className="border border-honey-gold/25 rounded-2xl p-5 bg-luxury-black/40 space-y-4">
                    <span className="text-[10px] font-bold text-honey-yellow uppercase tracking-widest flex items-center space-x-1 mb-2">
                      <CreditCard className="w-3.5 h-3.5" />
                      <span>Stripe Payment Card Details</span>
                    </span>

                    <div>
                      <label htmlFor="cardholder-name" className="sr-only">Cardholder name</label>
                      <input
                        id="cardholder-name"
                        type="text"
                        required
                        placeholder="Cardholder Name"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        className="w-full bg-luxury-black/80 border border-white/5 focus:border-honey-yellow focus:outline-none rounded-xl px-4 py-3 text-xs text-white"
                      />
                    </div>

                    <div className="relative">
                      <label htmlFor="customer-card-number" className="sr-only">Card number</label>
                      <input
                        id="customer-card-number"
                        type="text"
                        required
                        placeholder="•••• •••• •••• ••••"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        className="w-full bg-luxury-black/80 border border-white/5 focus:border-honey-yellow focus:outline-none rounded-xl px-4 py-3 text-xs text-white pr-10"
                      />
                      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[10px] uppercase font-bold text-honey-light/40 font-mono">
                        {getCardTypeSymbol()}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="card-expiry" className="sr-only">Expiration date</label>
                        <input
                          id="card-expiry"
                          type="text"
                          required
                          placeholder="MM/YY"
                          value={expiry}
                          onChange={handleExpiryChange}
                          className="w-full bg-luxury-black/80 border border-white/5 focus:border-honey-yellow focus:outline-none rounded-xl px-4 py-3 text-xs text-white text-center"
                        />
                      </div>
                      <div>
                        <label htmlFor="card-cvc" className="sr-only">CVC</label>
                        <input
                          id="card-cvc"
                          type="password"
                          required
                          placeholder="CVC"
                          value={cvc}
                          onChange={handleCvcChange}
                          maxLength={3}
                          className="w-full bg-luxury-black/80 border border-white/5 focus:border-honey-yellow focus:outline-none rounded-xl px-4 py-3 text-xs text-white text-center"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Calculations breakdown */}
                  <div className="pt-4 border-t border-white/5 text-xs text-honey-light/75 flex justify-between items-baseline mb-6">
                    <div className="space-y-1">
                      <span>Purchasing {cartItems.length} forest items (inclusive of GST)</span>
                      <div className="text-[10px] text-honey-light/40">Includes free shipment coverage if over ₹999</div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-honey-light/35 block font-light">GRAND TOTAL</span>
                      <span className="text-xl font-bold text-honey-yellow mt-1 block">₹{total}</span>
                    </div>
                  </div>

                  <button
                    id="btn-confirm-checkout-simulation"
                    type="submit"
                    className="w-full bg-gradient-to-r from-honey-gold to-honey-yellow text-luxury-black font-semibold text-xs uppercase tracking-wider py-4 rounded-xl shadow-lg hover:opacity-95 transition-all flex items-center justify-center space-x-2.5 cursor-pointer"
                  >
                    <Lock className="w-4 h-4 text-luxury-black" />
                    <span>Pay ₹{total} via Secured Stripe Elements</span>
                  </button>
                </form>
              </div>
            )}

            {/* STAGE 2: Secure server processing overlay */}
            {step === "processing" && (
              <div className="p-12 text-center min-h-[380px] flex flex-col items-center justify-center">
                <div className="relative w-16 h-16 mb-6">
                  {/* Outer spinning ring */}
                  <div className="absolute inset-0 border-[3px] border-white/10 rounded-full"></div>
                  <div className="absolute inset-0 border-[3px] border-t-honey-yellow rounded-full animate-spin"></div>
                  <div className="absolute inset-4 bg-luxury-black rounded-full flex items-center justify-center">
                    <Lock className="w-4.5 h-4.5 text-honey-gold animate-pulse" />
                  </div>
                </div>

                <h4 className="text-lg font-bold text-white tracking-wide">Processing Stripe Transaction</h4>
                <p className="text-xs text-honey-light/60 mt-2 max-w-sm mx-auto animate-pulse">
                  {processingText}
                </p>
                <span className="text-[9px] text-honey-light/30 uppercase tracking-widest mt-6 block">Standard Secure Connection (TLS 1.3)</span>
              </div>
            )}

            {/* STAGE 3: Final confirmation receipt card */}
            {step === "success" && (
              <div className="p-8 text-center flex flex-col items-center">
                {/* Glowing Check Shield */}
                <div className="w-14 h-14 rounded-full bg-honey-gold/15 border border-honey-gold/25 flex items-center justify-center text-honey-yellow mb-6">
                  <Check className="w-7 h-7" />
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-honey-yellow uppercase tracking-[0.25em]">Transaction Authorized</span>
                  <h3 className="text-2xl font-serif italic text-white font-semibold">Payment Completed Successfully!</h3>
                  <p className="text-xs text-honey-light/75 max-w-sm mt-2 leading-relaxed font-light">
                    Your organic nectar request is safely queued on our packaging line. Fast door-step courier tags are flying to your mailbox.
                  </p>
                </div>

                {/* Simulated Invoice Card */}
                <div className="mt-8 w-full bg-luxury-card/30 border border-honey-gold/20 p-5 rounded-2xl text-left text-xs space-y-3 relative overflow-hidden">
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-honey-gold/3 rotate-45"></div>

                  <div className="flex justify-between text-[10px] text-honey-light/40 font-mono tracking-widest border-b border-white/5 pb-2.5">
                    <span>INVOICE RECEIPT</span>
                    <span>{orderId}</span>
                  </div>

                  <div className="flex justify-between pt-1 font-light">
                    <span className="text-honey-light/60">Registered Customer</span>
                    <span className="text-white font-medium">{cardName || "Honored Customer"}</span>
                  </div>

                  <div className="flex justify-between font-light">
                    <span className="text-honey-light/60">Phone Contact</span>
                    <span className="text-white font-medium">{phone || "Not specified"}</span>
                  </div>

                  <div className="flex justify-between font-light">
                    <span className="text-honey-light/60">Shipping Way</span>
                    <span className="text-white font-medium max-w-[160px] truncate">{address || "Standard Base, India"}</span>
                  </div>

                  <div className="flex justify-between border-t border-white/5 pt-3.5 items-baseline">
                    <span className="font-bold text-white">Amount Settle</span>
                    <span className="text-base font-extrabold text-honey-yellow">₹{total}</span>
                  </div>
                </div>

                <div className="mt-8 w-full">
                  <button
                    id="btn-checkout-finish-order"
                    onClick={finishOrderAndClose}
                    className="w-full bg-gradient-to-r from-honey-gold to-honey-yellow text-luxury-black font-semibold text-xs uppercase tracking-wider py-4 rounded-xl shadow-lg hover:opacity-95 transition-all cursor-pointer"
                  >
                    Return to Emporium
                  </button>
                </div>
              </div>
            )}

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
