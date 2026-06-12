import { Calendar, ShieldAlert, Award, Compass, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function BrandStory() {
  return (
    <section
      id="brand-story"
      className="py-24 sm:py-32 bg-luxury-black relative overflow-hidden bg-honeycomb-mesh"
    >
      {/* Decorative large glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-honey-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="text-xs uppercase tracking-[0.3em] text-honey-yellow font-bold">
              The Sacred Source
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white mt-3 font-serif leading-tight">
              Honoring the Ancient Forests, <br />
              <span className="font-semibold italic text-honey-gold">Sustaining Forest Beekeepers</span>
            </h2>
            <div className="w-16 h-0.5 bg-honey-gold mt-6 mb-8"></div>

            <p className="text-honey-light/85 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              Hunnybi was born out of a simple resolve: to preserve the delicate forest ecosystems of India while delivering completely untouched, pure honey elixirs straight from wild mountain hives.
            </p>
            
            <p className="text-honey-light/70 text-sm leading-relaxed mt-4 max-w-2xl font-light">
              We travel into deep deciduous valleys of <span className="text-honey-yellow font-semibold">Jharkhand</span>, dense forest buffer-zones of <span className="text-honey-yellow font-semibold">Chhattisgarh</span>, and high wildflowers of <span className="text-honey-yellow font-semibold">Kashmir</span>. By forming fair-trade, sustainable pacts with indigenous forest gatherers and traditional apiarists, we ensure the honeybees are respected, the forest reserves remain wild, and you receive pure medicinal nectar with absolute trust.
            </p>

            {/* Core Values Icons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 w-full">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-luxury-card border border-honey-gold/15 flex-shrink-0 text-honey-yellow shadow-md">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wide">Pure Single-Origin</h4>
                  <p className="text-xs text-honey-light/65 mt-1 leading-relaxed">Never blended, ultra-clarified or combined. Harvested, bottled, and tracked by region batches.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-luxury-card border border-honey-gold/15 flex-shrink-0 text-honey-yellow shadow-md">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wide">Ethical Fair-Trade</h4>
                  <p className="text-xs text-honey-light/65 mt-1 leading-relaxed font-light">Supporting local tribal beekeepers inside forest buffers with premium, fair wages and equipment.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-luxury-card border border-honey-gold/15 flex-shrink-0 text-honey-yellow shadow-md">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wide">No Adulterants</h4>
                  <p className="text-xs text-honey-light/65 mt-1 leading-relaxed font-light">Zero high-fructose corn syrups, zero rice syrups, and zero heat processing. Just pure nectar.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-luxury-card border border-honey-gold/15 flex-shrink-0 text-honey-yellow shadow-md">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wide">Seasonal Micro-harvests</h4>
                  <p className="text-xs text-honey-light/65 mt-1 leading-relaxed font-light">Bottled in limited quantities based on flowering cycles, preserving authentic flora tastes.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Visual Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden glassmorphism p-3 luxury-border-glow select-none">
              <div className="relative rounded-xl overflow-hidden group">
                <img
                  src="/src/assets/images/forest_bg_1781250009027.jpg"
                  alt="Lush ancient forests of Kashmir"
                  className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Glass overlays with metadata tags */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col items-start text-left">
                  <div className="bg-honey-gold/25 backdrop-blur-md text-[10px] text-honey-yellow border border-honey-gold/30 font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-2 shadow-inner">
                    Active Protection
                  </div>
                  <h3 className="text-xl font-semibold text-white font-serif">Kashmir Wilderness Reserve</h3>
                  <p className="text-xs text-honey-light/75 mt-1 font-light leading-relaxed">
                    Surrounded by snow-capped peaks and pristine Alpine forest pastures, home to wild acacia hives.
                  </p>
                </div>
              </div>
            </div>

            {/* Under decoration element */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-honey-gold/20 via-honey-yellow/10 to-transparent rounded-2xl filter blur-sm -z-10"></div>
            
            {/* Absolute badge detail */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 z-20 bg-luxury-card border border-honey-gold/35 rounded-2xl p-4 shadow-xl flex items-center space-x-3 text-left max-w-[200px]"
            >
              <div className="w-10 h-10 rounded-xl bg-honey-gold/10 flex items-center justify-center text-honey-yellow font-bold text-lg">
                100
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-wider text-honey-gold font-bold">Percent</span>
                <span className="text-[10px] text-white/80 uppercase font-bold tracking-wider leading-none">Cold Pressed Raw</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
