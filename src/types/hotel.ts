export interface Hotel {
  id: string;
  name: string;
  slug: string;
  area: 'Da-Nang' | 'Hoi-An' | 'Hue' | string;
  priceFrom: number;
  rating: number;
  tags?: string[];
  tienIch?: string[];
  utilities?: string[];
  coverImage?: string;
  schemaJsonLd?: Record<string, any>;
}
