import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { products, getProductBySlug, getRelatedProducts } from '@/data/products';
import { getCategoryBySlug } from '@/data/categories';
import { serverT } from '@/lib/t';
import { Mail, Phone } from 'lucide-react';

export function generateStaticParams() {
  return products.map((p) => ({ id: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const product = getProductBySlug(id);
  if (!product) notFound();

  const t = serverT(locale);
  const category = getCategoryBySlug(product.category);
  const related = getRelatedProducts(product, 4);
  const catLabel = category
    ? locale === 'ar' ? category.labelAr : category.labelFr
    : product.category;

  const details = [
    { label: t('product.reference'),  value: product.reference },
    { label: t('product.material'),   value: product.material },
    ...(product.dimensions !== '—'
      ? [{ label: t('product.dimensions'), value: product.dimensions }]
      : []),
    { label: t('product.category'),   value: catLabel },
  ];

  return (
    <>
      <Header locale={locale} />

      <main className="pt-24 pb-0">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 py-3 border-b border-brand-black/10">
          <p className="text-xs text-brand-black/40">
            <Link href={`/${locale}/catalogue`} className="hover:text-brand-orange transition-colors">
              {t('nav.catalogue')}
            </Link>
            {' / '}
            {category && (
              <>
                <Link href={`/${locale}/catalogue/${product.category}`} className="hover:text-brand-orange transition-colors">
                  {catLabel}
                </Link>
                {' / '}
              </>
            )}
            {product.name}
          </p>
        </div>

        {/* Product detail */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="relative aspect-square bg-brand-cream overflow-hidden">
            <Image
              src={product.image}
              alt={`${product.name} — ${product.material}`}
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs tracking-widest2 uppercase text-brand-orange mb-2">{catLabel}</p>
              <h1 className="text-3xl font-light text-brand-black mb-1">{product.name}</h1>
              <p className="text-brand-black/50 text-sm">{product.material}</p>
            </div>

            <div className="border-t border-brand-black/10">
              {details.map((d, i) => (
                <div key={i} className="flex justify-between py-3 border-b border-brand-black/10 text-sm">
                  <span className="text-brand-black/50 text-xs tracking-widest uppercase">{d.label}</span>
                  <span className="text-brand-black font-medium">{d.value}</span>
                </div>
              ))}
            </div>

            <div className="bg-brand-cream p-6 flex flex-col gap-4">
              <h3 className="font-medium text-brand-black">{t('product.quoteTitle')}</h3>
              <p className="text-sm text-brand-black/55 leading-relaxed">{t('product.quoteDesc')}</p>
              <a
                href={`mailto:touch@touch.ma?subject=Devis — ${product.name} (${product.reference})`}
                className="flex items-center justify-center gap-2 bg-brand-orange text-white text-xs tracking-widest uppercase px-6 py-3 hover:bg-brand-orange/90 transition-colors"
              >
                <Mail size={14} />
                {t('product.quoteBtn')}
              </a>
              <a
                href="tel:+212665924744"
                className="flex items-center justify-center gap-2 border border-brand-black/20 text-brand-black text-xs tracking-widest uppercase px-6 py-3 hover:border-brand-orange hover:text-brand-orange transition-colors"
              >
                <Phone size={14} />
                +212 (0) 6 65 92 47 44
              </a>
            </div>

            <Link
              href={`/${locale}/catalogue/${product.category}`}
              className="text-xs tracking-widest uppercase text-brand-black/50 hover:text-brand-orange transition-colors"
            >
              ← {t('catalogue.backCatalogue')}
            </Link>
          </div>
        </div>

        {related.length > 0 && (
          <section className="bg-brand-cream py-14 px-6">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-sm tracking-widest uppercase text-brand-black/50 mb-8">
                {t('product.related')}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {related.map((p) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    locale={locale}
                    viewLabel={t('featured.viewProduct')}
                    refLabel={t('catalogue.reference')}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer locale={locale} />
    </>
  );
}
