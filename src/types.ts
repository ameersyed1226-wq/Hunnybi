export interface Product {
  id: string;
  name: string;
  category: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  description: string;
  image: string;
  source: string;
  honeyType: string;
  benefits: string[];
  details: {
    size: string;
    weight: string;
    jarType: string;
    certification: string;
  };
  inStock: boolean;
  colorTheme?: string;
  tasteProfile: {
    sweetness: number; // out of 5
    tanginess: number; // out of 5
    thickness: number; // out of 5
    aroma: string;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
  verified: boolean;
  productName: string;
}

export interface SourcingRegion {
  id: string;
  name: string;
  honeyName: string;
  description: string;
  altitude: string;
  notes: string;
  taste: string;
  color: string; // Tailwind color class for markers
  indiaX: number; // Percentage X coordinate on India SVG Map representation
  indiaY: number; // Percentage Y coordinate on India SVG Map representation
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
