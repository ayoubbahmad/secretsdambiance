import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Sparkles, Layers, Wand2 } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { categories } from '@/data/categories';
import { getFeaturedProducts } from '@/data/products';
import { serverT } from '@/lib/t';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = serverT(locale);
  const featured = getFeaturedProducts().slice(0, 8);

  const whyItems = [
    { icon: Wand2,    title: t('why.s1_title'), desc: t('why.s1_desc') },
    { icon: Layers,   title: t('why.s2_title'), desc: t('why.s2_desc') },
    { icon: Sparkles, title: t('why.s3_title'), desc: t('why.s3_desc') },
  ];

  return (
    <>
      <Header locale={locale} />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero/hero.jpg"
          alt="Touch by Secrets D'Ambiance"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-black/55" />

        <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
          <p className="text-xs tracking-widest3 uppercase text-white/60 mb-6">
            Touch by Secrets D&apos;Ambiance
          </p>
          <h1 className="font-script text-6xl sm:text-7xl md:text-8xl leading-none mb-6">
            Touch
          </h1>
          <p className="text-xs sm:text-sm tracking-widest2 uppercase text-white/90 mb-4">
            {t('hero.tagline')}
          </p>
          <p className="text-sm text-white/60 mb-10 max-w-md mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <Link
            href={`/${locale}/catalogue`}
            className="inline-block bg-brand-orange text-white text-xs tracking-widest uppercase px-8 py-4 hover:bg-brand-orange/90 transition-colors"
          >
            {t('hero.cta')}
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-[0.6rem] tracking-widest uppercase">{t('hero.scroll')}</span>
          <ChevronDown size={16} className="animate-bounce" />
        </div>
      </section>

      {/* ── CATEGORIES ───────────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest2 uppercase text-brand-orange mb-3">
            {t('categories.title')}
          </p>
          <p className="text-brand-black/50 text-sm max-w-md mx-auto">
            {t('categories.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/${locale}/catalogue/${cat.slug}`}
              className="group relative overflow-hidden aspect-[4/3] bg-brand-black"
            >
              <Image
                src={cat.image}
                alt={cat.labelFr}
                fill
                className="object-cover object-center opacity-75 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6">
                <p className="text-white font-medium text-lg mb-1">
                  {locale === 'ar' ? cat.labelAr : cat.labelFr}
                </p>
                <p className="text-white/50 text-xs tracking-widest">
                  {cat.count} {t('catalogue.products')}
                </p>
                <p className="text-brand-orange text-[0.65rem] tracking-widest uppercase mt-3 group-hover:underline">
                  {t('categories.explore')} →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ─────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs tracking-widest2 uppercase text-brand-orange mb-2">
                {t('featured.title')}
              </p>
              <h2 className="text-2xl font-light text-brand-black">
                {t('featured.subtitle')}
              </h2>
            </div>
            <Link
              href={`/${locale}/catalogue`}
              className="hidden sm:block text-xs tracking-widest uppercase border-b border-brand-black/30 pb-0.5 hover:border-brand-orange hover:text-brand-orange transition-colors"
            >
              {t('featured.viewAll')}
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featured.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                locale={locale}
                viewLabel={t('featured.viewProduct')}
                refLabel={t('catalogue.reference')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY TOUCH ────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-brand-cream">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-2xl font-light text-brand-black mb-14">
            {t('why.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {whyItems.map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-brand-orange/10 text-brand-orange">
                  <item.icon size={22} />
                </div>
                <h3 className="font-medium text-brand-black tracking-wide">{item.title}</h3>
                <p className="text-sm text-brand-black/55 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden bg-brand-black">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/catalogue/cat-canapes.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <h2 className="font-script text-5xl mb-4">La touche qui fait la différence</h2>
          <p className="text-white/60 text-sm mb-8 max-w-sm mx-auto">
            {t('hero.subtitle')}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-block border border-brand-orange text-brand-orange text-xs tracking-widest uppercase px-8 py-4 hover:bg-brand-orange hover:text-white transition-colors"
          >
            {t('nav.quote')}
          </Link>
        </div>
      </section>

      <Footer locale={locale} />
    </>
  );
}
