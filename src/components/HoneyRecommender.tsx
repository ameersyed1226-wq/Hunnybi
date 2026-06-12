import { useState } from "react";
import { PRODUCTS } from "../data";
import { Product } from "../types";
import { X, Sparkles, AlertCircle, ArrowRight, HeartPulse, Star, ShieldCheck, Flame } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HoneyRecommenderProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProductDiscount: (product: Product, priceWithDiscount: number) => void;
}

export default function HoneyRecommender({
  isOpen,
  onClose,
  onAddProductDiscount,
}: HoneyRecommenderProps) {
  const [step, setStep] = useState<number>(0);
  
  // Quiz Answers State
  const [wellnessGoal, setWellnessGoal] = useState<string>("");
  const [tastePalette, setTastePalette] = useState<string>("");
  const [viscosityPrefer, setViscosityPrefer] = useState<string>("");

  const resetQuiz = () => {
    setStep(0);
    setWellnessGoal("");
    setTastePalette("");
    setViscosityPrefer("");
  };

  // Determine standard match recommendations
  const getProductRecommendation = (): { product: Product; matchScore: number; reason: string } => {
    // Nuts & Honey matches: energy trackers, nutty taste, thick viscosity
    if (wellnessGoal === "energy" || tastePalette === "nutty" || viscosityPrefer === "thick") {
      return {
        product: PRODUCTS[0], // Premium Nuts & Honey
        matchScore: 98,
        reason: "Since you chose high organic energy and favor rich, buttery textures, our Kashmiri walnuts & almonds slow-soaked in raw wildflower natural forest honey is the precise match. This blend provides a luxurious crunch with steady slow-burning glycogen release."
      };
    }
    // Stingless Bee matches: immunites, medicinal sour-sweet taste, light/thin viscosity
    if (wellnessGoal === "immunity" || tastePalette === "citrus" || viscosityPrefer === "med") {
      return {
        product: PRODUCTS[2], // Stingless Bee Honey
        matchScore: 97,
        reason: "You value massive anti-microbial and throat therapeutics paired with a tangy citrus taste. Sourced in micro-lots, our rare Stingless Bee Honey is six times higher in healing bio-actives than standard honeys, delivering an ancient sacred shield."
      };
    }
    // Default to Raw Forest Honey: general respiratory, woody taste, medium/thick viscosity
    return {
      product: PRODUCTS[1], // Raw Forest Honey
      matchScore: 95,
      reason: "Our Pure Raw Forest Honey is your best match. Packed with ancient multi-floral medicinal tree pollens from central India, it has deep earthy woody aromas and rich antioxidants, serving as an exceptional daily digestive and allergy defender."
    };
  };

  const handleQuizAddCart = () => {
    const { product } = getProductRecommendation();
    // Offer 10% member discount on quiz selection
    const discountPrice = Math.floor(product.price * 0.9);
    onAddProductDiscount(product, discountPrice);
    onClose();
  };

  const { product: recommend, matchScore, reason } = getProductRecommendation();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg bg-luxury-dark border border-honey-gold/30 rounded-3xl overflow-hidden shadow-2xl relative p-6 sm:p-8"
          >
            {/* Close Button */}
            <button
              id="btn-close-recommender"
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-honey-light hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Quiz Progress header */}
            <div className="flex items-center space-x-2.5 mb-6 border-b border-white/5 pb-4">
              <div className="p-1.5 rounded-lg bg-honey-gold/10 border border-honey-gold/25 text-honey-yellow">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-wide">HB HONEY BLEND SELECTOR</h3>
                <p className="text-[10px] text-honey-light/40 uppercase tracking-widest font-mono">Sensory wellness profiling</p>
              </div>
            </div>

            {/* STEP 0: Goal setting */}
            {step === 0 && (
              <div className="text-left space-y-6">
                <div>
                  <h4 className="text-lg font-serif italic text-white font-medium">Q1: What is your primary health/wellness goal?</h4>
                  <p className="text-xs text-honey-light/50 mt-1">Select the main healing benefits you want to focus on.</p>
                </div>

                <div className="space-y-3">
                  {[
                    { id: "immunity", title: "Active Immunity & Throat Relief", desc: "Anti-bacterial shielding and respiratory soothing." },
                    { id: "energy", title: "Natural Energy & Cognitive Fuel", desc: "Slow slow release glycogen without crash triggers." },
                    { id: "digestive", title: "Daily Gut Protections & Digestion", desc: "Microbiome wellness and stomach enzyme balance." }
                  ].map((goal) => (
                    <button
                      id={`btn-recommender-goal-${goal.id}`}
                      key={goal.id}
                      onClick={() => {
                        setWellnessGoal(goal.id);
                        setStep(1);
                      }}
                      className="w-full p-4 rounded-xl border border-white/5 hover:border-honey-gold/40 hover:bg-honey-gold/5 flex flex-col cursor-pointer transition-all duration-300"
                    >
                      <span className="text-sm font-semibold text-white group-hover:text-honey-yellow">{goal.title}</span>
                      <span className="text-[11px] text-honey-light/60 mt-1">{goal.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 1: Taste Preferences */}
            {step === 1 && (
              <div className="text-left space-y-6">
                <div>
                  <h4 className="text-lg font-serif italic text-white font-medium">Q2: How do you prefer your honey&rsquo;s taste profile?</h4>
                  <p className="text-xs text-honey-light/50 mt-1">Select your flavor bouquet preferences.</p>
                </div>

                <div className="space-y-3">
                  {[
                    { id: "woody", title: "Earthy, Intensely Woody & Rich", desc: "Dark amber multi-floral forest blossoms." },
                    { id: "nutty", title: "Gourmet, Buttery & Toast Nutty", desc: "Infused with select raw walnuts and almonds." },
                    { id: "citrus", title: "Tangy, citric, Sour-sweet complex", desc: "Rare wild putzka medicinal micro-batches." }
                  ].map((taste) => (
                    <button
                      id={`btn-recommender-taste-${taste.id}`}
                      key={taste.id}
                      onClick={() => {
                        setTastePalette(taste.id);
                        setStep(2);
                      }}
                      className="w-full p-4 rounded-xl border border-white/5 hover:border-honey-gold/40 hover:bg-honey-gold/5 flex flex-col cursor-pointer transition-all duration-300"
                    >
                      <span className="text-sm font-semibold text-white group-hover:text-honey-yellow">{taste.title}</span>
                      <span className="text-[11px] text-honey-light/60 mt-1">{taste.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: Thickness/Viscosity Preferences */}
            {step === 2 && (
              <div className="text-left space-y-6">
                <div>
                  <h4 className="text-lg font-serif italic text-white font-medium">Q3: What consistency of honey do you prefer?</h4>
                  <p className="text-xs text-honey-light/50 mt-1">Pure raw honeys vary naturally in density.</p>
                </div>

                <div className="space-y-3">
                  {[
                    { id: "thick", title: "Exceedingly Thick & Rich", desc: "Spoon clings, heavy texture, and high viscosity." },
                    { id: "med", title: "Fluid & light body (Easy drip)", desc: "Effortless pouring and rapid dissolution." }
                  ].map((vis) => (
                    <button
                      id={`btn-recommender-viscosity-${vis.id}`}
                      key={vis.id}
                      onClick={() => {
                        setViscosityPrefer(vis.id);
                        setStep(3); // Go to results
                      }}
                      className="w-full p-4 rounded-xl border border-white/5 hover:border-honey-gold/40 hover:bg-honey-gold/5 flex flex-col cursor-pointer transition-all duration-300"
                    >
                      <span className="text-sm font-semibold text-white group-hover:text-honey-yellow">{vis.title}</span>
                      <span className="text-[11px] text-honey-light/60 mt-1">{vis.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3: Results Matched Recommend */}
            {step === 3 && (
              <div className="text-left">
                {/* Result header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center space-x-1.5 bg-[#10b981]/10 border border-[#10b981]/25 text-[#10b981] text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">
                    <HeartPulse className="w-3.5 h-3.5" />
                    <span>Calculated Match Recieved</span>
                  </div>

                  <h4 className="text-2xl font-serif italic mt-3 text-white">Your Perfect Botanical Match!</h4>
                </div>

                {/* Match Box */}
                <div className="rounded-2xl glassmorphism bg-luxury-card/35 border-honey-gold/25 p-5 border flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="w-20 h-20 rounded-xl bg-black/20 overflow-hidden flex-shrink-0 select-none">
                    <img
                      src={recommend.image}
                      alt={recommend.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold text-honey-yellow tracking-widest">{recommend.category}</span>
                    <h5 className="text-lg font-bold text-white tracking-wide mt-0.5">{recommend.name}</h5>
                    <div className="flex items-center space-x-1 mt-1 text-honey-yellow">
                      <Star className="w-3.5 h-3.5 fill-current text-honey-yellow" />
                      <span className="text-xs font-semibold text-white/90">{recommend.rating} rating</span>
                      <span className="text-[10px] text-honey-light/40">• {matchScore}% matching fitness</span>
                    </div>
                  </div>
                </div>

                {/* Match Details reason */}
                <p className="text-xs text-honey-light/80 mt-5 leading-relaxed font-light bg-white/[0.02] p-4 rounded-xl border border-white/5">
                  {reason}
                </p>

                {/* Quiz Promo code discount box */}
                <div className="mt-5 p-3.5 rounded-xl bg-honey-gold/5 border border-honey-gold/25 text-left text-xs flex justify-between items-center bg-orange-950/5">
                  <div className="flex items-center space-x-2.5">
                    <Flame className="w-4 h-4 text-honey-yellow animate-bounce" />
                    <div>
                      <span className="text-white font-semibold">Selector 10% Coupon Applied!</span>
                      <span className="text-[10px] text-honey-light/50 block">Exclusive wellness trial rate</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-honey-light/40 line-through text-[10px] block">₹{recommend.price}</span>
                    <span className="text-base font-extrabold text-honey-yellow">₹{Math.floor(recommend.price * 0.9)}</span>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <button
                    id="btn-recommender-retake"
                    onClick={resetQuiz}
                    className="py-3 px-4 rounded-xl border border-white/10 hover:border-honey-gold/30 text-xs font-semibold text-honey-light/80 hover:text-white uppercase tracking-wider text-center cursor-pointer"
                  >
                    Retake Quiz
                  </button>

                  <button
                    id="btn-recommender-buy-discount"
                    onClick={handleQuizAddCart}
                    className="flex-1 bg-gradient-to-r from-honey-gold to-honey-yellow text-luxury-black font-semibold text-xs tracking-wider uppercase py-3.5 rounded-xl shadow-lg flex items-center justify-center space-x-2 cursor-pointer transition-transform hover:scale-[1.01]"
                  >
                    <ShieldCheck className="w-4.5 h-4.5" />
                    <span>Quick Add Recommended Jar</span>
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
