import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { categories, getCategoryBySlug } from '@/data/categories';
import { getProductsByCategory } from '@/data/products';
import { serverT } from '@/lib/t';

export function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale, category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const t = serverT(locale);
  const catProducts = getProductsByCategory(slug);
  const label = locale === 'ar' ? category.labelAr : category.labelFr;

  return (
    <>
      <Header locale={locale} />

      {/* Hero */}
      <div className="relative h-52 sm:h-64 overflow-hidden">
        <Image
          src={category.image}
          alt={label}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-black/60" />
        <div className="absolute inset-0 flex items-end px-6 pb-8 pt-24">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-xs tracking-widest uppercase text-white/50 mb-2">
              <Link href={`/${locale}/catalogue`} className="hover:text-white transition-colors">
                {t('nav.catalogue')}
              </Link>
              {' / '}
              {label}
            </p>
            <h1 className="text-3xl font-light text-white">{label}</h1>
            <p className="text-white/50 text-xs mt-1">
              {catProducts.length} {t('catalogue.products')}
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-3 border-b border-brand-black/10">
        <Link
          href={`/${locale}/catalogue`}
          className="text-xs text-brand-black/50 hover:text-brand-orange transition-colors tracking-wide"
        >
          {t('catalogue.backCatalogue')}
        </Link>
      </div>

      {/* Products */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {catProducts.map((product) => (
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
