'use client';

import { useState } from 'react';
import { useT } from '@/components/TranslationsProvider';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { categories } from '@/data/categories';
import { products } from '@/data/products';

export default function CataloguePage() {
  const params = useParams();
  const locale = params.locale as string;
  const t = useT();
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all' ? products : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <Header locale={locale} />

      {/* Page header */}
      <div className="pt-32 pb-10 px-6 bg-brand-cream border-b border-brand-black/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-widest2 uppercase text-brand-orange mb-2">
            Touch by Secrets D&apos;Ambiance
          </p>
          <h1 className="text-3xl font-light text-brand-black">{t('catalogue.title')}</h1>
          <p className="text-sm text-brand-black/50 mt-2">{t('catalogue.subtitle')}</p>
        </div>
      </div>

      {/* Category filters */}
      <div className="sticky top-20 z-30 bg-white border-b border-brand-black/10 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-6 flex gap-2 py-3 min-w-max">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 text-xs tracking-widest uppercase transition-colors ${
              activeCategory === 'all'
                ? 'bg-brand-black text-white'
                : 'text-brand-black/60 hover:text-brand-black'
            }`}
          >
            {t('catalogue.all')}
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs tracking-widest uppercase transition-colors whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-brand-orange text-white'
                  : 'text-brand-black/60 hover:text-brand-black'
              }`}
            >
              {locale === 'ar' ? cat.labelAr : cat.labelFr}
            </button>
          ))}
        </div>
      </div>

      {/* Products grid */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <p className="text-xs text-brand-black/40 mb-6">
          {filtered.length} {t('catalogue.products')}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              locale={locale}
              viewLabel={t('featured.viewProduct')}
              refLabel={t('catalogue.reference')}
            />
          ))}
        </div>
      </main>

      <Footer locale={locale} />
    </>
  );
}
