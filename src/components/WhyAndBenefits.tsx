import { ShieldCheck, Snowflake, HeartPulse, Sparkles, Smile, Flame, Layers, Lock, ShieldAlert, BadgeCheck } from "lucide-react";
import { motion } from "motion/react";

export default function WhyAndBenefits() {
  const whyPoints = [
    {
      title: "100% Natural",
      description: "Direct forest nectars collected from blossoms, completely free from industrial flavor additives, artificial essences, or preservatives.",
      icon: BadgeCheck,
    },
    {
      title: "No Added Sugar",
      description: "Absolutely zero adulteration with high-fructose corn syrups, rice syrups, or sugarcane solutions. We bottle only what the bees make.",
      icon: ShieldAlert,
    },
    {
      title: "Raw & Unfiltered",
      description: "Cold-harvested and double-sieved to maintain healthy micro-pollens and live probiotic enzymes naturally found inside pure hives.",
      icon: Snowflake,
    },
    {
      title: "Ethical Beekeeping",
      description: "Fair-trade pacts with forest tribes. Hives are protected, bees are never harmed, and harvesting occurs only when surplus exists.",
      icon: HeartPulse,
    },
    {
      title: "Lab Tested Quality",
      description: "Every batch is strictly lab certified. Tested for adulteration, pesticide residues, and moisture level bounds for absolute trust.",
      icon: ShieldCheck,
    }
  ];

  const benefits = [
    {
      title: "Boosts Immunity",
      detail: "Packed with active phytonutrients and anti-bacterial floral enzymes that fortify your body's immune boundaries.",
      tag: "Defense Shield",
    },
    {
      title: "Natural Energy",
      detail: "An elegant combination of natural fructose and glucose that releases sustainable glycogen fuel without insulin spikes.",
      tag: "Pure Energy",
    },
    {
      title: "Rich in Antioxidants",
      detail: "Contains rich organic compounds like flavonoids and organic acids that defend blood cells from active oxidative damage.",
      tag: "Anti-Aging Cell repair",
    },
    {
      title: "Supports Wellness",
      detail: "Excellent as a digestive pre-biotic, respiratory fluid regulator, throat-tickle reliever, and nighttime sleep companion.",
      tag: "Aura Balance",
    }
  ];

  return (
    <>
      {/* 3. Why Choose Hunnybi Section */}
      <section
        id="why-us"
        className="py-24 bg-luxury-black relative overflow-hidden border-t border-white/5"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-honey-gold/5 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-honey-yellow font-bold">
              Uncompromising Integrity
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white mt-3 font-serif">
              Why Discerning Palates <br />
              <span className="font-semibold italic text-honey-gold">Choose Hunnybi</span>
            </h2>
            <div className="w-16 h-0.5 bg-honey-gold mx-auto mt-6"></div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyPoints.map((point, index) => {
              const IconComp = point.icon;
              return (
                <div
                  key={point.title}
                  className="rounded-2xl p-6 glassmorphism bg-luxury-card/30 hover:border-honey-gold/30 transition-all duration-300 text-left flex flex-col justify-between group h-full shadow-lg"
                >
                  <div className="flex flex-col">
                    <div className="w-11 h-11 rounded-xl bg-honey-gold/10 border border-honey-gold/20 flex items-center justify-center text-honey-yellow group-hover:scale-105 transition-transform duration-300 shadow-md">
                      <IconComp className="w-5 h-5" />
                    </div>
                    
                    <h3 className="text-sm font-semibold text-white tracking-wide mt-5 mb-2 group-hover:text-honey-yellow transition-colors duration-300">
                      {point.title}
                    </h3>
                    
                    <p className="text-xs text-honey-light/65 leading-relaxed font-light">
                      {point.description}
                    </p>
                  </div>

                  <span className="text-[10px] text-honey-gold/30 mt-6 font-mono self-end group-hover:text-honey-gold/60 transition-colors duration-300">
                    0{index + 1}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Benefits Section */}
      <section
        id="benefits"
        className="py-24 sm:py-32 bg-luxury-dark relative overflow-hidden text-white"
      >
        {/* Subtle decorative mesh background and center glowing blob */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-luxury-black to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-honey-gold/5 rounded-full blur-[200px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Hand: Decorative Text */}
            <div className="lg:col-span-4 flex flex-col items-start text-left">
              <span className="text-xs uppercase tracking-[0.3em] text-honey-yellow font-bold">
                Nectar Therapeutics
              </span>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white mt-3 font-serif leading-tight">
                An Ancient Shield for <br />
                <span className="font-semibold italic text-honey-gold">Modern Longevity</span>
              </h2>
              <div className="w-16 h-0.5 bg-honey-gold mt-6 mb-8"></div>
              
              <p className="text-honey-light/80 text-sm leading-relaxed font-light">
                For millennia, wild-pressed honey served as humanity&rsquo;s principal therapeutic elixir. Hunnybi preserves these vital living components in unheated jars so they actively work to sustain your lifestyle.
              </p>

              <div className="mt-8 flex items-center space-x-3 text-xs bg-luxury-card/60 backdrop-blur-md border border-honey-gold/15 p-4 rounded-xl">
                <ShieldCheck className="w-5 h-5 text-honey-yellow flex-shrink-0" />
                <p className="text-honey-light/75 leading-relaxed font-light">
                  Direct organic certification and laboratory clearance logs for each season&rsquo;s extraction batches exist on our manifests.
                </p>
              </div>
            </div>

            {/* Right Hand: 2x2 Bento Box Grid of Benefits */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-3xl p-8 glassmorphism hover:border-honey-gold/30 transition-all duration-500 text-left flex flex-col justify-between group overflow-hidden relative shadow-xl"
                >
                  {/* Subtle inner cell vector */}
                  <div className="absolute right-0 top-0 opacity-[0.03] text-honey-gold group-hover:scale-110 group-hover:opacity-10 transition-all duration-700">
                    <svg
                      className="w-48 h-48"
                      fill="currentColor"
                      viewBox="0 0 100 100"
                    >
                      <polygon points="50,15 90,35 90,75 50,95 10,75 10,35" />
                    </svg>
                  </div>

                  <div>
                    <span className="bg-honey-gold/10 text-honey-yellow text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-honey-gold/15 inline-block">
                      {benefit.tag}
                    </span>
                    
                    <h3 className="text-xl font-medium text-white font-serif mt-6 tracking-wide group-hover:text-honey-yellow transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-xs text-honey-light/75 leading-relaxed mt-3 font-light">
                      {benefit.detail}
                    </p>
                  </div>

                  {/* Visual trigger indicator */}
                  <div className="mt-8 flex items-center text-[10px] uppercase tracking-wider text-honey-light/40 group-hover:text-honey-yellow font-bold transition-colors duration-300">
                    <span>Explore Benefit Study</span>
                    <span className="ml-1 text-honey-gold group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
