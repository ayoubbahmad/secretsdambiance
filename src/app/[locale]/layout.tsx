import { TranslationsProvider } from '@/components/TranslationsProvider';
import { DirectionProvider } from '@/components/DirectionProvider';
import { getLocaleMessages } from '@/lib/t';

export function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'ar' }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = getLocaleMessages(locale);

  return (
    <TranslationsProvider messages={messages}>
      <DirectionProvider locale={locale}>{children}</DirectionProvider>
    </TranslationsProvider>
  );
}
