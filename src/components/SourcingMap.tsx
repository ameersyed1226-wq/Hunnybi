import { useState } from "react";
import { SOURCING_REGIONS } from "../data";
import { SourcingRegion } from "../types";
import { MapPin, Thermometer, Wind, Eye, Compass, Layers } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function SourcingMap() {
  const [selectedRegion, setSelectedRegion] = useState<SourcingRegion>(SOURCING_REGIONS[0]);

  return (
    <section
      id="sourcing-map"
      className="py-24 bg-luxury-black relative overflow-hidden border-t border-b border-honey-gold/10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120px,rgba(232,168,56,0.06),transparent_60%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-honey-yellow font-bold">
            Interactive Provenance
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white mt-3 font-serif">
            Trace the Origin of <span className="font-semibold italic text-honey-gold">Your Elixir</span>
          </h2>
          <p className="text-honey-light/75 text-sm sm:text-base mt-4 font-light max-w-xl mx-auto leading-relaxed">
            Every drop is direct, raw, and unblended. Select the glowing sourcing regions to explore forest microclimates, floral blooms, and altitudes.
          </p>
          <div className="w-16 h-0.5 bg-honey-gold mx-auto mt-6"></div>
        </div>

        {/* Layout Grid: Left Sourcing Map Graphic, Right Region Spec Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Map Graphic (lg:col-span-6) */}
          <div className="lg:col-span-6 flex justify-center relative min-h-[460px] sm:min-h-[520px]">
            {/* Elegant SVG schematic of India's coastline & borders for positioning */}
            <div className="relative w-full max-w-[460px] h-[520px] bg-luxury-dark/30 rounded-3xl border border-honey-gold/10 p-6 flex flex-col justify-between overflow-hidden shadow-2xl glassmorphism">
              
              {/* Abstract decorative grid */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(232,168,56,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(232,168,56,0.15)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              
              {/* Compass symbol in background */}
              <div className="absolute top-10 right-10 opacity-10 text-honey-gold">
                <Compass className="w-24 h-24 animate-spin-slow" />
              </div>

              {/* Styled Abstract SVG Silhouette of India Map */}
              <svg
                id="india-map-vector"
                className="w-full h-full text-honey-gold/10 fill-current opacity-85 select-none"
                viewBox="0 0 400 450"
              >
                {/* Simplified vector path representing India */}
                <path d="M 152 45 L 180 32 L 200 48 L 198 75 L 210 90 L 225 105 L 250 112 L 290 120 L 320 102 L 315 130 L 290 142 L 310 162 L 330 152 L 340 185 L 358 190 L 370 210 L 350 240 L 315 235 L 292 225 L 290 190 L 275 180 L 260 195 L 250 200 L 255 230 L 275 250 L 285 280 L 265 292 L 225 280 L 215 255 L 210 230 L 195 210 L 185 220 L 165 242 L 188 275 L 202 305 L 190 340 L 178 375 L 168 395 L 162 422 L 158 392 L 140 345 L 130 310 L 118 285 L 105 255 C 105 255 106 242 110 242 C 114 242 120 250 120 250 L 138 230 L 132 208 L 118 195 L 110 170 L 105 145 C 105 145 92 148 88 145 C 84 142 82 130 82 130 L 105 120 L 125 125 L 145 105 L 152 75 Z" />
                
                {/* Coastal guidelines styling */}
                <path d="M 162 422 L 285 280" stroke="rgba(232, 168, 56, 0.05)" strokeDasharray="3 3" strokeWidth="2" />
                <path d="M 162 422 L 118 285" stroke="rgba(232, 168, 56, 0.05)" strokeDasharray="3 3" strokeWidth="2" />
              </svg>

              {/* Glowing Interactive Sourcing Markers mapped to indiaX & indiaY */}
              {SOURCING_REGIONS.map((region) => {
                const isActive = selectedRegion.id === region.id;
                return (
                  <button
                    id={`btn-map-marker-${region.id}`}
                    key={region.id}
                    onClick={() => setSelectedRegion(region)}
                    className="absolute z-20 group transform -translate-x-1/2 -translate-y-1/2 cursor-pointer focus:outline-none"
                    style={{ left: `${region.indiaX}%`, top: `${region.indiaY}%` }}
                  >
                    {/* Ring Pulse */}
                    <span className={`absolute inline-flex h-10 w-10 rounded-full bg-honey-gold/35 opacity-75 -left-3 -top-3 ${
                      isActive ? "animate-ping scale-125" : "group-hover:animate-ping"
                    }`}></span>
                    
                    {/* Inner glowing pin */}
                    <div className={`relative flex items-center justify-center w-5.5 h-5.5 rounded-full border shadow-xl transition-all duration-500 ${
                      isActive 
                        ? "bg-honey-yellow border-white scale-125 luxury-border-glow-intense" 
                        : "bg-luxury-black border-honey-gold/80 hover:bg-honey-dark hover:scale-110"
                    }`}>
                      <MapPin className={`w-3.5 h-3.5 ${isActive ? "text-luxury-black" : "text-honey-yellow"}`} />
                    </div>

                    {/* Popover label on Hover */}
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap bg-luxury-card border border-honey-gold/30 text-[10px] text-white px-2 py-0.5 rounded-md font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                      {region.name}
                    </span>
                  </button>
                );
              })}

              {/* Sourcing region fast select bar inside the canvas */}
              <div className="absolute inset-x-4 bottom-4 flex justify-between bg-luxury-black/75 backdrop-blur-md border border-white/5 rounded-2xl p-2 z-10">
                {SOURCING_REGIONS.map((reg) => (
                  <button
                    id={`btn-map-fast-select-${reg.id}`}
                    key={reg.id}
                    onClick={() => setSelectedRegion(reg)}
                    className={`py-1.5 px-3 rounded-lg text-[10px] tracking-wider uppercase font-semibold transition-all duration-300 flex-1 text-center cursor-pointer ${
                      selectedRegion.id === reg.id
                        ? "bg-honey-gold text-luxury-black font-extrabold shadow-sm"
                        : "text-honey-light/60 hover:text-white"
                    }`}
                  >
                    {reg.name.split(" ")[0]}
                  </button>
                ))}
              </div>

            </div>
          </div>

          {/* Region Details Panel (lg:col-span-6) */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRegion.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl p-8 glassmorphism luxury-border-glow text-left flex flex-col justify-between min-h-[460px] relative overflow-hidden"
              >
                {/* Shimmer golden glow detail */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-honey-gold/5 rounded-full blur-2xl"></div>

                <div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-3 bg-honey-gold rounded-full"></span>
                    <span className="text-[11px] uppercase tracking-[0.25em] text-honey-yellow font-extrabold"> Sourcing Origin Profile </span>
                  </div>

                  <h3 className="text-3xl font-light text-white font-serif mt-3 tracking-wide flex items-center justify-between">
                    <span>{selectedRegion.name}</span>
                    <span className="text-xs uppercase px-3 py-1 font-sans rounded-full bg-honey-gold/15 text-honey-yellow border border-honey-gold/25">
                      Batch #{selectedRegion.id.toUpperCase()}-26
                    </span>
                  </h3>
                  
                  <div className="text-xl font-medium italic text-honey-light/85 mt-2 font-serif">
                    Origin of &ldquo;{selectedRegion.honeyName}&rdquo;
                  </div>

                  <p className="text-honey-light/80 text-sm leading-relaxed mt-6 font-light">
                    {selectedRegion.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/5">
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-honey-yellow">
                        <Layers className="w-4.5 h-4.5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase text-honey-light/40 leading-none">Altitude Range</span>
                        <span className="text-sm font-semibold text-white mt-1 leading-none">{selectedRegion.altitude}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-honey-yellow">
                        <Thermometer className="w-4.5 h-4.5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase text-honey-light/40 leading-none">Major Flora</span>
                        <span className="text-xs font-semibold text-white mt-1 leading-none truncate max-w-[140px]">{selectedRegion.notes.split(",")[0]}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <span className="text-[10px] uppercase tracking-wider text-honey-light/40">Sensory Taste Profile</span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div className="flex flex-col">
                      <div className="flex justify-between text-xs font-semibold text-honey-light/80 mb-1.5">
                        <span>Aroma Bouquet</span>
                        <span className="text-honey-yellow">Intense</span>
                      </div>
                      <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-honey-dark to-honey-gold h-full rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="flex justify-between text-xs font-semibold text-honey-light/80 mb-1.5">
                        <span>Purity & Density</span>
                        <span className="text-honey-yellow">100% Raw</span>
                      </div>
                      <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-honey-dark to-honey-gold h-full rounded-full" style={{ width: "100%" }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center text-left text-xs bg-honey-gold/5 border border-honey-gold/15 p-3.5 rounded-xl space-x-2.5">
                    <Wind className="w-5 h-5 text-honey-yellow flex-shrink-0 animate-pulse" />
                    <p className="text-honey-light/95 leading-relaxed font-light">
                      <strong className="text-white font-medium">Palate Note:</strong> {selectedRegion.taste}
                    </p>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
