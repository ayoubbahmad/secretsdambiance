export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  material: string;
  dimensions: string;
  reference: string;
  image: string;
  featured?: boolean;
}

export const products: Product[] = [
  // ─── CANAPÉS ───────────────────────────────────────────────────────────────
  { id: 'ca-00100', slug: 'canape-coline-tissu-gris',            name: 'Canapé Coline',              category: 'canapes',   material: 'Tissu Gris',            dimensions: '240×135×78 cm', reference: 'CA 00100', image: '/images/catalogue/canapes-1.jpg', featured: true  },
  { id: 'ca-00101', slug: 'canape-aura-toile-beige',             name: 'Canapé Aura',                category: 'canapes',   material: 'Toile Beige',           dimensions: '—',             reference: 'CA 00101', image: '/images/catalogue/canapes-1.jpg', featured: true  },
  { id: 'ca-00103', slug: 'canape-sienne-cuir-cogna',            name: 'Canapé Sienne',              category: 'canapes',   material: 'Cuir Cogna',            dimensions: '195×103×80 cm', reference: 'CA 00103', image: '/images/catalogue/canapes-1.jpg', featured: true  },
  { id: 'ca-00105', slug: 'canape-sienne-cuir-noir',             name: 'Canapé Sienne',              category: 'canapes',   material: 'Cuir Noir',             dimensions: '195×103×80 cm', reference: 'CA 00105', image: '/images/catalogue/canapes-1.jpg'                 },
  { id: 'ca-00102', slug: 'canape-oslo-tissu-gris',              name: 'Canapé Oslo',                category: 'canapes',   material: 'Tissu Gris',            dimensions: '180×103×80 cm', reference: 'CA 00102', image: '/images/catalogue/canapes-1.jpg'                 },
  { id: 'ca-00106', slug: 'canape-bea-velours-beige',            name: 'Canapé Bea',                 category: 'canapes',   material: 'Velours Beige',         dimensions: '186×100×60 cm', reference: 'CA 00106', image: '/images/catalogue/canapes-1.jpg'                 },
  { id: 'ca-00143', slug: 'canape-sultan-velours-grege',         name: 'Canapé Sultan',              category: 'canapes',   material: 'Velours Grège',         dimensions: '270×98×70 cm',  reference: 'CA 00143', image: '/images/catalogue/canapes-2.jpg', featured: true  },
  { id: 'ca-00144', slug: 'canape-diva-velours-bleu-clair',      name: 'Canapé Diva',                category: 'canapes',   material: 'Velours Bleu Clair',    dimensions: '270×98×70 cm',  reference: 'CA 00144', image: '/images/catalogue/canapes-2.jpg'                 },
  { id: 'ca-00145', slug: 'canape-sultan-velours-vert-royal',    name: 'Canapé Sultan',              category: 'canapes',   material: 'Velours Vert Royal',    dimensions: '270×98×70 cm',  reference: 'CA 00145', image: '/images/catalogue/canapes-2.jpg'                 },
  { id: 'ca-00125', slug: 'canape-chesterfield-prime-vert',      name: 'Canapé Chesterfield Prime',  category: 'canapes',   material: 'Velours Vert',          dimensions: '200×90×80 cm',  reference: 'CA 00125', image: '/images/catalogue/canapes-3.jpg'                 },
  { id: 'ca-00126', slug: 'canape-chesterfield-vert-royal',      name: 'Canapé Chesterfield',        category: 'canapes',   material: 'Velours Vert Royal',    dimensions: '200×90×80 cm',  reference: 'CA 00126', image: '/images/catalogue/canapes-3.jpg'                 },
  { id: 'ca-00127', slug: 'canape-chesterfield-bleu-roi',        name: 'Canapé Chesterfield',        category: 'canapes',   material: 'Velours Bleu Roi',      dimensions: '200×90×80 cm',  reference: 'CA 00127', image: '/images/catalogue/canapes-3.jpg'                 },

  // ─── FAUTEUILS ─────────────────────────────────────────────────────────────
  { id: 'fat-00206', slug: 'fauteuil-duchesse-velours-bleu',      name: 'Fauteuil Duchesse',          category: 'fauteuils', material: 'Velours Bleu',          dimensions: '94×94×77 cm',   reference: 'FAT 00206', image: '/images/catalogue/fauteuils-1.jpg', featured: true },
  { id: 'fat-00207', slug: 'fauteuil-duchesse-velours-beige',     name: 'Fauteuil Duchesse',          category: 'fauteuils', material: 'Velours Beige',         dimensions: '94×94×77 cm',   reference: 'FAT 00207', image: '/images/catalogue/fauteuils-1.jpg'                },
  { id: 'fat-00212', slug: 'fauteuil-field-toile-moutarde',       name: 'Fauteuil Field',             category: 'fauteuils', material: 'Toile Fond Moutarde',   dimensions: '65×48×82 cm',   reference: 'FAT 00212', image: '/images/catalogue/fauteuils-1.jpg'                },
  { id: 'fat-00208', slug: 'fauteuil-duchesse-velours-vert',      name: 'Fauteuil Duchesse',          category: 'fauteuils', material: 'Velours Vert Royal',    dimensions: '94×94×77 cm',   reference: 'FAT 00208', image: '/images/catalogue/fauteuils-1.jpg', featured: true },
  { id: 'fat-00216', slug: 'fauteuil-field-velours-beige',        name: 'Fauteuil Field',             category: 'fauteuils', material: 'Velours Beige',         dimensions: '66×62×83 cm',   reference: 'FAT 00216', image: '/images/catalogue/fauteuils-1.jpg'                },
  { id: 'fat-00217', slug: 'fauteuil-andrew-martin',              name: 'Fauteuil Andrew Martin',     category: 'fauteuils', material: 'Velours / Toile Greige', dimensions: '70×50×90 cm',  reference: 'FAT 00217', image: '/images/catalogue/fauteuils-1.jpg'                },

  // ─── TABLES ────────────────────────────────────────────────────────────────
  { id: 'tab-01226', slug: 'table-basse-margerite',              name: 'Table Basse Margerite',      category: 'tables',    material: 'Bois',                  dimensions: 'Ø80×40 cm',     reference: 'TAB 01226', image: '/images/catalogue/tables-1.jpg', featured: true  },
  { id: 'tab-01228', slug: 'table-basse-gaya',                   name: 'Table Basse Gaya',           category: 'tables',    material: 'Bois',                  dimensions: 'Ø80×35 cm',     reference: 'TAB 01228', image: '/images/catalogue/tables-1.jpg'                  },
  { id: 'tab-01235', slug: 'table-basse-eli',                    name: 'Table Basse Eli',            category: 'tables',    material: 'Bois',                  dimensions: '140×140×35 cm', reference: 'TAB 01235', image: '/images/catalogue/tables-1.jpg'                  },
  { id: 'tab-01236', slug: 'table-basse-audre',                  name: 'Table Basse Audré',          category: 'tables',    material: 'Verre / Bois Noyer',    dimensions: '170×45×35 cm',  reference: 'TAB 01236', image: '/images/catalogue/tables-1.jpg', featured: true  },
  { id: 'tab-01229', slug: 'tables-basses-exa',                  name: 'Tables Basses Exa',          category: 'tables',    material: 'Marbre / Métal Noir',   dimensions: 'Ø50×50 cm',     reference: 'TAB 01229', image: '/images/catalogue/tables-1.jpg'                  },
  { id: 'tab-01231', slug: 'tables-basses-marm',                 name: 'Tables Basses Marm',         category: 'tables',    material: 'Marbre / Métal Noir',   dimensions: 'A:60×35 cm',    reference: 'TAB 01231', image: '/images/catalogue/tables-1.jpg'                  },
  { id: 'tab-01239', slug: 'table-basse-goya',                   name: 'Table Basse Goya',           category: 'tables',    material: 'Bois',                  dimensions: '100×60×42 cm',  reference: 'TAB 01239', image: '/images/catalogue/tables-1.jpg'                  },
  { id: 'tab-01238', slug: 'table-basse-citrine',                name: 'Tablebasse Citrine',         category: 'tables',    material: 'Bois Noir / Plateau Marbre', dimensions: '170×120×40 cm', reference: 'TAB 01238', image: '/images/catalogue/tables-1.jpg'           },

  // ─── CHAISES ───────────────────────────────────────────────────────────────
  { id: 'ch-01701', slug: 'chaise-nest-blanc',                   name: 'Chaise Nest',                category: 'chaises',   material: 'Polypropylène / Bois',  dimensions: '53×47×82 cm',   reference: 'CH 01701', image: '/images/catalogue/chaises-1.jpg', featured: true  },
  { id: 'ch-01703', slug: 'chaise-nest-rouge',                   name: 'Chaise Nest',                category: 'chaises',   material: 'Polypropylène Rouge / Bois', dimensions: '53×47×82 cm', reference: 'CH 01703', image: '/images/catalogue/chaises-1.jpg'               },
  { id: 'ch-01706', slug: 'chaise-colombe',                      name: 'Chaise Colombe',             category: 'chaises',   material: 'Polypropylène / Bois',  dimensions: '56×51×80 cm',   reference: 'CH 01706', image: '/images/catalogue/chaises-1.jpg'                 },
  { id: 'ch-01711', slug: 'chaise-sai',                          name: 'Chaise Saï',                 category: 'chaises',   material: 'Polypropylène',         dimensions: '54×52×79 cm',   reference: 'CH 01711', image: '/images/catalogue/chaises-1.jpg'                 },
  { id: 'ch-01712', slug: 'chaise-meety',                        name: 'Chaise Meety',               category: 'chaises',   material: 'Métal / Tissu',         dimensions: '49×50×76 cm',   reference: 'CH 01712', image: '/images/catalogue/chaises-1.jpg', featured: true  },
  { id: 'ch-01714', slug: 'chaise-maura',                        name: 'Chaise Maura',               category: 'chaises',   material: 'Polypropylène / Bois',  dimensions: '52×47×83 cm',   reference: 'CH 01714', image: '/images/catalogue/chaises-1.jpg'                 },
  { id: 'ch-01708', slug: 'chaise-noise-terre-cuite',            name: 'Chaise Noise',               category: 'chaises',   material: 'Polypropylène / Bois',  dimensions: '52×35×83 cm',   reference: 'CH 01708', image: '/images/catalogue/chaises-1.jpg'                 },

  // ─── ACCESSOIRES LUMINEUX ──────────────────────────────────────────────────
  { id: 'acl-00801', slug: 'lampe-carvi-verre',                  name: 'Lampe Carvi',                category: 'lumineux',  material: 'Verre',                 dimensions: 'Ø23×26 cm',     reference: 'ACL 00801', image: '/images/catalogue/lumineux-1.jpg', featured: true },
  { id: 'acl-00802', slug: 'lampe-tovi-rose',                    name: 'Lampe Tovi Rose',            category: 'lumineux',  material: 'Verre / Cuivre',        dimensions: 'Ø21×26 cm',     reference: 'ACL 00802', image: '/images/catalogue/lumineux-1.jpg'                },
  { id: 'acl-00810', slug: 'chandelier-zeno',                    name: 'Chandelier Zeno',            category: 'lumineux',  material: 'Argent',                dimensions: 'Ø42×82 cm',     reference: 'ACL 00810', image: '/images/catalogue/lumineux-1.jpg', featured: true },
  { id: 'acl-00811', slug: 'bougeoire-leone',                    name: 'Bougeoire Leone',            category: 'lumineux',  material: 'Argent',                dimensions: 'Ø6.5×19 cm',    reference: 'ACL 00811', image: '/images/catalogue/lumineux-1.jpg'                },
  { id: 'acl-00814', slug: 'chandelier-tito',                    name: 'Chandelier Tito',            category: 'lumineux',  material: 'Métal et Verre',        dimensions: 'Ø42×82 cm',     reference: 'ACL 00814', image: '/images/catalogue/lumineux-1.jpg'                },
  { id: 'acl-00818', slug: 'lanterne-dai',                       name: 'Lanterne Dai',               category: 'lumineux',  material: 'Verre',                 dimensions: 'Ø15×35 cm',     reference: 'ACL 00818', image: '/images/catalogue/lumineux-1.jpg'                },

  // ─── OBJETS DÉCORATIFS ─────────────────────────────────────────────────────
  { id: 'dc-00696', slug: 'koifish-porcelaine',                  name: 'Koifish',                    category: 'objets',    material: 'Porcelaine',            dimensions: 'Ø20×27 cm',     reference: 'DC 00696', image: '/images/catalogue/objets-1.jpg'                  },
  { id: 'dc-00699', slug: 'leo-set',                             name: 'Leo Set',                    category: 'objets',    material: 'Porcelaine',            dimensions: 'Ø17×37 cm',     reference: 'DC 00699', image: '/images/catalogue/objets-1.jpg'                  },
  { id: 'dc-00708', slug: 'gourde-set',                          name: 'Gourde Set',                 category: 'objets',    material: 'Porcelaine',            dimensions: 'A: 28×10×31 cm', reference: 'DC 00708', image: '/images/catalogue/objets-1.jpg', featured: true },
  { id: 'dc-00700', slug: 'ricci-set',                           name: 'Ricci Set',                  category: 'objets',    material: 'Porcelaine',            dimensions: 'Ø18×28 cm',     reference: 'DC 00700', image: '/images/catalogue/objets-1.jpg'                  },
  { id: 'dc-00712', slug: 'shield-porcelaine',                   name: 'Shield',                     category: 'objets',    material: 'Porcelaine Dorée',      dimensions: 'Ø38×46 cm',     reference: 'DC 00712', image: '/images/catalogue/objets-1.jpg', featured: true  },
  { id: 'dc-00706', slug: 'blue-a',                              name: 'Blue A',                     category: 'objets',    material: 'Porcelaine',            dimensions: 'Ø12×15 cm',     reference: 'DC 00706', image: '/images/catalogue/objets-1.jpg'                  },
];

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, limit);
}
