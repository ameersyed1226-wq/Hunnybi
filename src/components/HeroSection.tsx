import { ArrowRight, ArrowDown } from "lucide-react";
import { motion } from "motion/react";

interface HeroSectionProps {
  onExploreClick: () => void;
  onShopClick: () => void;
}

export default function HeroSection({ onExploreClick, onShopClick }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-luxury-black text-white pt-20"
    >
      {/* Background Image with Ken Burns effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/55 z-10"></div>
        {/* Decorative golden ambient backlights */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-honey-gold/10 rounded-full blur-[150px] animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-honey-dark/15 rounded-full blur-[150px] animate-pulse-slow"></div>
        
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.75 }}
          transition={{ duration: 12, ease: "easeOut" }}
          src="/src/assets/images/hero_dripping_1781249943882.jpg"
          alt="Premium raw honey dripping macro cinematic close-up"
          className="w-full h-full object-cover select-none"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Interactive Floating Honeycomb Cells & Falling Pure Drips */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {/* Top-Right Hanging Hive Silhouette */}
        <svg
          className="absolute top-0 right-0 w-64 h-64 text-honey-gold/5 transform translate-x-12 -translate-y-12 select-none"
          fill="currentColor"
          viewBox="0 0 100 100"
        >
          <polygon points="50,15 90,35 90,75 50,95 10,75 10,35" />
          <polygon points="50,25 80,42 80,70 50,85 20,70 20,42" className="opacity-50" />
        </svg>

        {/* Animated Dripping SVGs to simulate cinematic pouring action */}
        <div className="absolute inset-0 flex justify-around">
          {[1, 2, 3, 4, 5].map((item) => (
            <motion.div
              key={item}
              initial={{ y: -50, opacity: 0 }}
              animate={{ 
                y: ["0%", "100%"], 
                opacity: [0, 0.4, 0.4, 0] 
              }}
              transition={{
                duration: 6 + item * 2,
                repeat: Infinity,
                delay: item * 1.5,
                ease: "linear"
              }}
              className="w-0.5 bg-gradient-to-b from-honey-yellow via-honey-gold to-transparent h-48 rounded"
              style={{
                marginLeft: `${item * 15}%`,
                filter: "blur(0.5px)",
              }}
            >
              {/* Miniature droplet at tip */}
              <div className="w-1.5 h-1.5 bg-honey-yellow rounded-full absolute bottom-0 -left-0.5 shadow-[0_0_10px_#f2c752]"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Pure & Certified Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-flex items-center space-x-2 bg-luxury-card/60 backdrop-blur-md border border-honey-gold/20 px-4 py-1.5 rounded-full mb-8 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-honey-yellow animate-ping"></span>
          <span className="text-[11px] font-bold text-honey-yellow uppercase tracking-[0.2em]">
            Premium forest yield • Season 2026 Batch
          </span>
        </motion.div>

        {/* Main Headline with Serif Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-none font-serif max-w-4xl"
        >
          Nature's Purest Honey, <br />
          <span className="font-semibold italic luxury-gold-shimmer block mt-1">
            Straight From The Forest
          </span>
        </motion.h1>

        {/* Brand Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 text-sm sm:text-xl font-medium tracking-[0.1em] text-honey-light/95 uppercase max-w-xl flex items-center justify-center flex-wrap gap-x-3 gap-y-1.5"
        >
          <span>100% Raw</span>
          <span className="text-honey-gold">•</span>
          <span>Unprocessed</span>
          <span className="text-honey-gold">•</span>
          <span>Sustainably Sourced</span>
        </motion.p>

        {/* Conversion CTA buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            id="btn-hero-shop"
            onClick={onShopClick}
            className="w-full sm:w-auto bg-gradient-to-r from-honey-gold via-honey-yellow to-honey-gold hover:opacity-95 text-luxury-black font-semibold tracking-wider text-sm uppercase px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-[1.03] luxury-border-glow-intense flex items-center justify-center space-x-2 cursor-pointer shadow-lg"
          >
            <span>Shop Now</span>
            <ArrowRight className="w-4 h-4 text-luxury-black" />
          </button>

          <button
            id="btn-hero-explore"
            onClick={onExploreClick}
            className="w-full sm:w-auto bg-luxury-black/45 hover:bg-luxury-card/75 text-white border border-honey-gold/30 hover:border-honey-yellow font-semibold tracking-wider text-sm uppercase px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm cursor-pointer hover:shadow-xl"
          >
            <span>Explore Our Honey</span>
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute bottom-10 flex flex-col items-center cursor-pointer opacity-40 hover:opacity-100 z-10"
          onClick={onExploreClick}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-honey-light/60 mb-2">Scroll To Explore</span>
          <ArrowDown className="w-4 h-4 text-honey-gold animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
