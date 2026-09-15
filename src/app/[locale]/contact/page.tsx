import { Phone, Mail, Globe, MapPin, Clock } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { serverT } from '@/lib/t';

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = serverT(locale);

  const contactItems = [
    { icon: Phone, label: t('contact.phone'),   values: ['+212 (0) 6 65 92 47 44', '+212 (0) 6 14 96 60 63'], href: 'tel:+212665924744' },
    { icon: Mail,  label: t('contact.email'),   values: ['touch@touch.ma'],        href: 'mailto:touch@touch.ma' },
    { icon: Globe, label: t('contact.web'),     values: ['www.touch.ma'],           href: 'https://www.touch.ma' },
    { icon: MapPin,label: 'Adresse',            values: [t('contact.address')],    href: undefined },
    { icon: Clock, label: 'Disponibilité',      values: [t('contact.hours')],      href: undefined },
  ];

  return (
    <>
      <Header locale={locale} />

      <div className="pt-28 pb-12 px-6 bg-brand-black text-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest2 uppercase text-brand-orange mb-3">
            Touch by Secrets D&apos;Ambiance
          </p>
          <h1 className="text-4xl font-light mb-3">{t('contact.title')}</h1>
          <p className="text-white/50 text-sm max-w-md">{t('contact.subtitle')}</p>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact info */}
        <div className="flex flex-col gap-6">
          {contactItems.map((item) => (
            <div key={item.label} className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-brand-orange/10 flex items-center justify-center shrink-0">
                <item.icon size={16} className="text-brand-orange" />
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-brand-black/40 mb-1">{item.label}</p>
                {item.values.map((v) =>
                  item.href ? (
                    <a
                      key={v}
                      href={item.href}
                      className="block text-sm text-brand-black hover:text-brand-orange transition-colors"
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {v}
                    </a>
                  ) : (
                    <p key={v} className="text-sm text-brand-black">{v}</p>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contact form */}
        <form
          action="mailto:touch@touch.ma"
          method="post"
          encType="text/plain"
          className="flex flex-col gap-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs tracking-widest uppercase text-brand-black/50">{t('contact.form_name')}</label>
              <input
                type="text" name="name" required
                className="border border-brand-black/20 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-brand-orange transition-colors"
                placeholder={t('contact.form_name')}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs tracking-widest uppercase text-brand-black/50">{t('contact.form_email')}</label>
              <input
                type="email" name="email" required
                className="border border-brand-black/20 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-brand-orange transition-colors"
                placeholder={t('contact.form_email')}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs tracking-widest uppercase text-brand-black/50">{t('contact.form_event')}</label>
              <input
                type="text" name="event"
                className="border border-brand-black/20 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-brand-orange transition-colors"
                placeholder="Mariage, Conférence…"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs tracking-widest uppercase text-brand-black/50">{t('contact.form_date')}</label>
              <input
                type="date" name="date"
                className="border border-brand-black/20 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-brand-orange transition-colors"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs tracking-widest uppercase text-brand-black/50">{t('contact.form_message')}</label>
            <textarea
              name="message" rows={5} required
              className="border border-brand-black/20 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-brand-orange transition-colors resize-none"
              placeholder={t('contact.form_message')}
            />
          </div>
          <button
            type="submit"
            className="bg-brand-orange text-white text-xs tracking-widest uppercase px-6 py-4 hover:bg-brand-orange/90 transition-colors self-start"
          >
            {t('contact.form_send')}
          </button>
        </form>
      </main>

      <Footer locale={locale} />
    </>
  );
}
