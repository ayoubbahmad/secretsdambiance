import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { serverT } from '@/lib/t';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = serverT(locale);

  const values = [t('about.v1'), t('about.v2'), t('about.v3'), t('about.v4')];
  const stats = [
    { num: t('about.stat1_num'), label: t('about.stat1_label') },
    { num: t('about.stat2_num'), label: t('about.stat2_label') },
    { num: t('about.stat3_num'), label: t('about.stat3_label') },
  ];

  return (
    <>
      <Header locale={locale} />

      {/* Hero */}
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src="/images/about/brand.jpg"
          alt="Touch by Secrets D'Ambiance"
          fill
          priority
          className="object-cover object-right-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-black/55" />
        <div className="absolute inset-0 flex items-end px-6 pb-10 pt-28">
          <div className="max-w-7xl mx-auto w-full">
            <h1 className="text-4xl font-light text-white">{t('about.hero_title')}</h1>
            <p className="text-white/50 text-sm mt-2 max-w-lg">{t('about.hero_subtitle')}</p>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-16 flex flex-col gap-16">
        {/* Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-square overflow-hidden bg-brand-cream">
            <Image
              src="/images/about/brand-2.jpg"
              alt="Touch Logo"
              fill
              className="object-cover object-left"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs tracking-widest2 uppercase text-brand-orange mb-3">{t('about.s1_title')}</p>
              <p className="text-brand-black/70 leading-relaxed text-sm">{t('about.s1_text')}</p>
            </div>
            <div>
              <p className="text-xs tracking-widest2 uppercase text-brand-orange mb-3">{t('about.s2_title')}</p>
              <p className="text-brand-black/70 leading-relaxed text-sm">{t('about.s2_text')}</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 py-10 border-t border-b border-brand-black/10">
          {stats.map((s) => (
            <div key={s.label} className="text-center flex flex-col gap-1">
              <p className="font-script text-4xl text-brand-orange">{s.num}</p>
              <p className="text-xs tracking-widest uppercase text-brand-black/50">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div>
          <p className="text-xs tracking-widest2 uppercase text-brand-orange mb-8">{t('about.values_title')}</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {values.map((v) => (
              <div key={v} className="bg-brand-cream p-6 flex items-center justify-center text-center">
                <p className="font-medium text-brand-black tracking-wide text-sm">{v}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center flex flex-col items-center gap-4">
          <h2 className="font-script text-4xl text-brand-black">Touch</h2>
          <p className="text-sm text-brand-black/50">La touche qui fait la différence</p>
          <Link
            href={`/${locale}/contact`}
            className="mt-2 inline-block bg-brand-orange text-white text-xs tracking-widest uppercase px-8 py-3 hover:bg-brand-orange/90 transition-colors"
          >
            {t('nav.quote')}
          </Link>
        </div>
      </main>

      <Footer locale={locale} />
    </>
  );
}
