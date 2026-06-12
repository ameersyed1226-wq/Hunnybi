import { useState } from "react";
import { TESTIMONIALS, FAQS } from "../data";
import { Star, ChevronDown, ChevronUp, Quote, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function TestimonialsAndFaq() {
  const [activeFaqId, setActiveFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setActiveFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {/* 5. Customer Testimonials */}
      <section
        id="testimonials"
        className="py-24 bg-luxury-black bg-honeycomb-mesh relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,168,56,0.04),transparent_60%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-honey-yellow font-bold">
              The Hunnybi Circle
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white mt-3 font-serif">
              Trusted by Wellness Seekers <br />
              <span className="font-semibold italic text-honey-gold">& Connoisseurs</span>
            </h2>
            <div className="w-16 h-0.5 bg-honey-gold mx-auto mt-6"></div>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((review) => (
              <div
                key={review.id}
                className="rounded-3xl p-8 glassmorphism hover:border-honey-gold/30 transition-all duration-300 text-left flex flex-col justify-between relative shadow-xl h-full bg-luxury-card/25"
              >
                {/* Quote Icon decorative top-right */}
                <div className="absolute top-6 right-8 text-honey-gold/15">
                  <Quote className="w-10 h-10" />
                </div>

                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center text-honey-yellow space-x-1 mb-5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4.5 h-4.5 fill-current" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-honey-light/85 text-sm leading-relaxed font-light italic mb-8">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                {/* Profile Header */}
                <div className="flex items-center space-x-4 border-t border-white/5 pt-5">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-honey-gold/25 relative flex-shrink-0 select-none">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      style={{ contentVisibility: "auto" }}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-1.5">
                      <span className="text-sm font-semibold text-white tracking-wide">{review.name}</span>
                      {review.verified && (
                        <div className="w-3.5 h-3.5 rounded-full bg-honey-gold/20 flex items-center justify-center text-honey-yellow" title="Verified Hunnybi Purchaser">
                          <CheckCircle className="w-2.5 h-2.5" />
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] text-honey-light/40 uppercase tracking-widest mt-0.5">{review.productName} buyer</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. FAQ Section */}
      <section
        id="faqs"
        className="py-24 bg-luxury-dark relative overflow-hidden border-t border-white/5"
      >
        <div className="absolute top-0 left-0 w-80 h-80 bg-honey-gold/5 rounded-full blur-[160px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-honey-yellow font-bold">
              Inquiries & Details
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white mt-3 font-serif">
              Answering Your Questions about <span className="font-semibold italic text-honey-gold">Authentic Honey</span>
            </h2>
            <div className="w-16 h-0.5 bg-honey-gold mx-auto mt-6"></div>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {FAQS.map((faq) => {
              const isOpen = activeFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-white/5 bg-luxury-card/35 overflow-hidden transition-all duration-300"
                >
                  <button
                    id={`btn-faq-trigger-${faq.id}`}
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none transition-colors duration-300 group cursor-pointer hover:bg-orange-950/5"
                  >
                    <span className="text-sm sm:text-base font-semibold text-honey-light/95 group-hover:text-honey-yellow transition-colors duration-300">
                      {faq.question}
                    </span>
                    <span className="p-1 rounded-lg bg-white/5 text-honey-yellow border border-white/5 group-hover:bg-honey-gold/10 transition-colors">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden border-t border-white/5"
                      >
                        <div className="p-6 text-xs sm:text-sm text-honey-light/75 leading-relaxed font-light text-left bg-orange-950/[0.01]">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
