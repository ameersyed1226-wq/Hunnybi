import { Product, Review, SourcingRegion, FAQ } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "premium-nuts-honey",
    name: "Premium Nuts & Honey Infusion",
    category: "Gourmet Blends",
    tagline: "Crunchy Gourmet Warmth",
    price: 899,
    originalPrice: 1099,
    rating: 4.9,
    reviewCount: 148,
    description: "A decadent infusion of the finest hand-selected Californian almonds, premium Kashmiri walnuts, and buttery roasted cashews slow-soaked in our pure wildflower forest honey. A power-packed gourmet delicacy that beautifully balances crunchy premium nut textures with thick, velvety honey sweetness. Perfect as a healthy morning energy booster or an elegant, guilt-free dessert topper.",
    image: "https://ik.imagekit.io/ne01g61mjf/Screenshot_20260612_141643.jpg",
    source: "Kashmir Valleys",
    honeyType: "Wildflower Nectar Blend",
    benefits: [
      "Boosts cognitive function & memory",
      "Instant, sustained organic energy launch",
      "High-protein, heart-healthy mineral profile",
      "Deeply satisfying guilt-free dessert substitute"
    ],
    details: {
      size: "450g",
      weight: "720g Gross",
      jarType: "Premium Heavy-Duty Glass Jar",
      certification: "FSSAI Certified, 100% Organic, Zero Preservatives"
    },
    inStock: true,
    tasteProfile: {
      sweetness: 5,
      tanginess: 1,
      thickness: 5,
      aroma: "Toasted almonds, woody honey and wildflower hints"
    }
  },
  {
    id: "raw-forest-honey",
    name: "Pure Raw Forest Honey",
    category: "Single-Origin Raw",
    tagline: "Bold, Earthy & Untouched",
    price: 549,
    originalPrice: 699,
    rating: 4.8,
    reviewCount: 324,
    description: "Sourced directly from deep deciduous valleys of Jharkhand and Chhattisgarh's dense woods. This multi-floral honey has a strong, deep-amber color with rich, woody notes. It contains active natural pollens from indigenous medicinal flora, harvested carefully using ethical squeeze-and-filter methods, preserving all living enzymes, trace minerals, and vitamins.",
    image: "https://ik.imagekit.io/ne01g61mjf/Screenshot_20260612_141701.jpg",
    source: "Jharkhand & Chhattisgarh Forests",
    honeyType: "Wild Deciduous Multi-floral",
    benefits: [
      "Rich in live therapeutic enzymes & antioxidants",
      "Soothes coughs, tickles, and throat rasps",
      "Excellent natural immunity fortifier",
      "Slightly raises metabolism & aids smooth digestion"
    ],
    details: {
      size: "500g",
      weight: "780g Gross",
      jarType: "Sturdy French Hexagonal Glass Glassware",
      certification: "FSSAI & Lab Certified (No pesticide/adulteration residues)"
    },
    inStock: true,
    tasteProfile: {
      sweetness: 4,
      tanginess: 2,
      thickness: 4,
      aroma: "Distinct wet wood, damp soil and sweet wild herbs"
    }
  },
  {
    id: "stingless-bee-honey",
    name: "Rare Stingless Bee Honey (Putzka)",
    category: "Medicinal Sacred Elixir",
    tagline: "Elixir of Sacred Healing",
    price: 1499,
    originalPrice: 1850,
    rating: 5.0,
    reviewCount: 89,
    description: "Our crowning jewel. Produced by the tiny, stingless bees (Meliponini), who construct complex, propolis-rich pots instead of traditional combs. Sourced in micro-batches from the Western Ghats and deep parts of Chhattisgarh, this extremely rare honey possesses a unique thin-fluid, tangy citrus finish. Lab-tested to contain six times higher antimicrobial and antioxidant activity than regular forest honey.",
    image: "/src/assets/images/jar_stingless_1781249987157.jpg",
    source: "Chhattisgarh & Western Ghats",
    honeyType: "Melipona Multi-Botanical Elixir",
    benefits: [
      "6x higher natural antimicrobial capability",
      "Promotes extremely fast cell repair and throat relief",
      "Nourishing and calming for the stomach microbiome",
      "Highly prized in Ayurvedic formulations for respiratory wellness"
    ],
    details: {
      size: "250g",
      weight: "460g Gross",
      jarType: "Uterine-Amber MIRON Violet-Glass Apothecary Bottle",
      certification: "Ayurvedic Medical Reference Standard Compliant"
    },
    inStock: true,
    tasteProfile: {
      sweetness: 3,
      tanginess: 5,
      thickness: 2,
      aroma: "Primal, sharp, slightly fermented, wild cherry and lemon"
    }
  }
];

export const SOURCING_REGIONS: SourcingRegion[] = [
  {
    id: "kashmir",
    name: "Kashmir Valleys",
    honeyName: "Premium Nuts & Honey Base",
    description: "Sourced from the pristine sub-Alpine valleys of Kashmir, where honeybees feed on wild Acacia and Apple blossoms during late spring. The cool climate results in crystal-clear, incredibly light wildflower honey that pairs perfectly with high-grade hand-shelled nuts.",
    altitude: "1,800m - 2,200m",
    notes: "Acacia blossoms, high mountain wildflowers, delicate sweetness",
    taste: "Gentle, buttery wildflower notes, silky smooth palette",
    color: "from-amber-400 to-yellow-500",
    indiaX: 35,
    indiaY: 12
  },
  {
    id: "jharkhand",
    name: "Jharkhand Forests",
    honeyName: "Raw Forest Honey Origin",
    description: "Deep within the deciduous belts of Jharkhand, local tribes sustainably gather this dark honey from naturally occurring forest hives. The bees feed predominantly on rich medicinal forest trees like Mahua, Palash, and Karanja.",
    altitude: "350m - 500m",
    notes: "Deep forest bark, medicinal herbs, heavy pollens",
    taste: "Robust dark malt profile, earthy sweetness, rich aftertaste",
    color: "from-amber-600 to-amber-700",
    indiaX: 62,
    indiaY: 48
  },
  {
    id: "chhattisgarh",
    name: "Chhattisgarh Woodlands",
    honeyName: "Stingless Bee Honey & Raw Forest Base",
    description: "The dense forest canopies of Bastar, Chhattisgarh are home to the elusive stingless Melipona bees. Sourced in tiny micro-lots, these bees store raw nectar inside propolis flasks, imbuing the honey with massive anti-inflammatory flavonoids.",
    altitude: "400m - 600m",
    notes: "Dense herbal undergrowths, tangy citrus leaves, propolis",
    taste: "Unique sour-sweet tang, citrusy, complex medicinal body",
    color: "from-yellow-500 to-amber-600",
    indiaX: 52,
    indiaY: 55
  }
];

export const TESTIMONIALS: Review[] = [
  {
    id: "rev-1",
    name: "Dr. Anirudh Sen",
    rating: 5,
    date: "June 2, 2026",
    comment: "Simply spectacular. The Stingless Bee Honey is unlike anything I've tried. It's incredibly therapeutic for my chronic throat sensitivity. Its tangy taste is so fresh, and you can instantly feel the purity. The violet apothecary jar is a work of art as well.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    verified: true,
    productName: "Rare Stingless Bee Honey"
  },
  {
    id: "rev-2",
    name: "Priya Sharma",
    rating: 5,
    date: "May 28, 2026",
    comment: "I replace all processed sugars with Hunnybi's Raw Forest Honey. The dark amber nectar has genuine depth and woodsy aromas. My kids love the Premium Nuts & Honey version on pancakes. Incredible branding and prompt delivery!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    verified: true,
    productName: "Pure Raw Forest Honey"
  },
  {
    id: "rev-3",
    name: "Rohan Malhotra",
    rating: 5,
    date: "June 10, 2026",
    comment: "Absolutely authentic. I was skeptical about nuts and honey being crunchy, but Hunnybi has perfected the packaging and soaking times. The walnuts are crisp, the honey is highly viscous and sweet, and you can sense raw natural harvesting.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    verified: true,
    productName: "Premium Nuts & Honey"
  }
];

export const FAQS: FAQ[] = [
  {
    id: "faq-1",
    question: "Is Hunnybi honey truly 100% raw, organic, and unfiltered?",
    answer: "Yes, absolutely. We do not heat, micro-filter, pasteurize, or blend our honey with industrial corn syrup or sugar. It is extracted by cold-pressing the handpicked forest hives, then passing it through a double steel mesh sieve to remove wax debris while retaining all natural pollen, live enzymes, and propolis."
  },
  {
    id: "faq-2",
    question: "Why does raw honey sometimes crystallize, and what should I do?",
    answer: "Crystallization is the signature of 100% pure, natural, raw honey! It occurs when natural glucose molecules bind with micro-pollens. Adulterated honey or glucose-syrup mixtures do not crystallize. To liquefy your crystallized raw honey, simply set the glass jar in a warm water bowl (below 45°C) for a few minutes. Never microwave it, as excessive heat kills the precious living enzymes."
  },
  {
    id: "faq-3",
    question: "How does Hunnybi source its honey, and is it eco-friendly?",
    answer: "We support sustainable tribal beekeeping and wild gathering. Local indigenous forest communities ethically harvest honey from wild hives. Care is taken to never damage the colony or harvest completely. We ensure the bees have ample reserves left inside the hive. The gatherers are paid premium, ethical fair-trade wages, ensuring the forest and the bee populations continue to thrive."
  },
  {
    id: "faq-4",
    question: "What is Putzka or Stingless Bee Honey, and why is it expensive?",
    answer: "Stingless Bee Honey is a rare medicinal nectar produced by the tiny Meliponini bee species. These bees gather nectar from deep medicinal undergrowths, storing it inside propolis (bee-glue) nests instead of wax combs. They produce less than 500g of honey per hive annually (compared to 30-40kg from normal hives). It is sweet-and-sour, water-like in consistency, and possesses exceptionally higher bioactive properties, serving as an ancient Ayurvedic shield."
  }
];

export const INSTAGRAM_IMAGES = [
  {
    id: "insta-1",
    url: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=600",
    caption: "Sunset hive check in Kashmir orchards"
  },
  {
    id: "insta-2",
    url: "https://images.unsplash.com/photo-1473081556163-2a17de81fc97?auto=format&fit=crop&q=80&w=600",
    caption: "Wild forest blossoms, Jharkhand flora"
  },
  {
    id: "insta-3",
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600",
    caption: "Misty mountains where Putzka bees fly"
  },
  {
    id: "insta-4",
    url: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=600",
    caption: "Dripping raw thick golden syrup"
  },
  {
    id: "insta-5",
    url: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=600",
    caption: "Organic walnuts slow-marinated in golden honey"
  },
  {
    id: "insta-6",
    url: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=600",
    caption: "Sustainable hive curation by native forest clans"
  }
];
