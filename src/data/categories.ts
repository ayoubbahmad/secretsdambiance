export interface Category {
  id: string;
  slug: string;
  labelFr: string;
  labelAr: string;
  image: string;
  count: number;
}

export const categories: Category[] = [
  {
    id: 'canapes',
    slug: 'canapes',
    labelFr: 'Canapés',
    labelAr: 'الأرائك',
    image: '/images/catalogue/cat-canapes.jpg',
    count: 12,
  },
  {
    id: 'fauteuils',
    slug: 'fauteuils',
    labelFr: 'Fauteuils',
    labelAr: 'الكراسي الوثيرة',
    image: '/images/catalogue/fauteuils-1.jpg',
    count: 6,
  },
  {
    id: 'tables',
    slug: 'tables',
    labelFr: 'Tables',
    labelAr: 'الطاولات',
    image: '/images/catalogue/tables-1.jpg',
    count: 8,
  },
  {
    id: 'chaises',
    slug: 'chaises',
    labelFr: 'Chaises',
    labelAr: 'الكراسي',
    image: '/images/catalogue/cat-chaises.jpg',
    count: 10,
  },
  {
    id: 'lumineux',
    slug: 'lumineux',
    labelFr: 'Accessoires Lumineux',
    labelAr: 'الإكسسوارات المضيئة',
    image: '/images/catalogue/lumineux-1.jpg',
    count: 6,
  },
  {
    id: 'objets',
    slug: 'objets',
    labelFr: 'Objets Décoratifs',
    labelAr: 'الديكور والتحف',
    image: '/images/catalogue/objets-1.jpg',
    count: 8,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
