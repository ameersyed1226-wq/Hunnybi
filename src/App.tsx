/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Product, CartItem } from "./types";

// Import Custom components
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BrandStory from "./components/BrandStory";
import FeaturedProducts from "./components/FeaturedProducts";
import WhyAndBenefits from "./components/WhyAndBenefits";
import SourcingMap from "./components/SourcingMap";
import TestimonialsAndFaq from "./components/TestimonialsAndFaq";
import SocialAndNewsletter from "./components/SocialAndNewsletter";
import CartDrawer from "./components/CartDrawer";
import CheckoutModal from "./components/CheckoutModal";
import HoneyRecommender from "./components/HoneyRecommender";

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [recommenderOpen, setRecommenderOpen] = useState(false);

  // Load cart on component mounting
  useEffect(() => {
    try {
      const stored = localStorage.getItem("hunnybi_cart");
      if (stored) {
        setCartItems(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load Hunnybi cart states:", e);
    }
  }, []);

  // Save cart modifications
  const saveCart = (items: CartItem[]) => {
    setCartItems(items);
    try {
      localStorage.setItem("hunnybi_cart", JSON.stringify(items));
    } catch (e) {
      console.error("Failed to save Hunnybi cart states:", e);
    }
  };

  const handleAddToCart = (product: Product) => {
    const existingIdx = cartItems.findIndex((item) => item.product.id === product.id);
    if (existingIdx > -1) {
      const updated = [...cartItems];
      updated[existingIdx].quantity += 1;
      saveCart(updated);
    } else {
      saveCart([...cartItems, { product, quantity: 1 }]);
    }
    // High-converting micro UX feedback: open the drawer instantly!
    setCartOpen(true);
  };

  // Safe handler to inject quiz recommendations with 10% coupon
  const handleQuizAddWithDiscount = (product: Product, discountedPrice: number) => {
    const discountedProduct = {
      ...product,
      price: discountedPrice,
    };
    
    // Check if matching already exists
    const existingIdx = cartItems.findIndex((item) => item.product.id === product.id);
    if (existingIdx > -1) {
      const updated = [...cartItems];
      updated[existingIdx].product = discountedProduct;
      updated[existingIdx].quantity += 1;
      saveCart(updated);
    } else {
      saveCart([...cartItems, { product: discountedProduct, quantity: 1 }]);
    }
    
    setCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(productId);
      return;
    }
    const updated = cartItems.map((item) => {
      if (item.product.id === productId) {
        return { ...item, quantity: newQty };
      }
      return item;
    });
    saveCart(updated);
  };

  const handleRemoveItem = (productId: string) => {
    const filtered = cartItems.filter((item) => item.product.id !== productId);
    saveCart(filtered);
  };

  const handleSuccessClearCart = () => {
    saveCart([]);
  };

  const handleScrollToProducts = () => {
    const el = document.getElementById("products");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToStory = () => {
    const el = document.getElementById("brand-story");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="relative min-h-screen bg-luxury-black text-honey-light selection:bg-honey-gold selection:text-luxury-black font-sans antialiased overflow-x-hidden">
      
      {/* Header Sticky Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenRecommender={() => setRecommenderOpen(true)}
      />

      {/* Hero landing segment */}
      <HeroSection
        onExploreClick={handleScrollToStory}
        onShopClick={handleScrollToProducts}
      />

      {/* Section 1: Brand Story */}
      <BrandStory />

      {/* Section 2: Featured Products Grid Selection (with spec sheets overlay) */}
      <FeaturedProducts
        onAddToCart={handleAddToCart}
      />

      {/* Section 3 & 4: Reasons & Benefits details */}
      <WhyAndBenefits />

      {/* Section 6: Sourcing Provence interactive geography */}
      <SourcingMap />

      {/* Section 5 & 7: Customer reviews cards and Accordion FAQs */}
      <TestimonialsAndFaq />

      {/* Section 8, 9, 10: Social grids, Email collectors & premium terms and policies */}
      <SocialAndNewsletter />

      {/* Interactive Sliders and Dialovers */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={() => {
          setCartOpen(false);
          setCheckoutOpen(true);
        }}
      />

      {/* Stripe payment mockup validations */}
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        cartItems={cartItems}
        onSuccessClearCart={handleSuccessClearCart}
      />

      {/* Honey Match finder Quiz overlay */}
      <HoneyRecommender
        isOpen={recommenderOpen}
        onClose={() => setRecommenderOpen(false)}
        onAddProductDiscount={handleQuizAddWithDiscount}
      />

    </div>
  );
}
