import Link from 'next/link';
import { Phone, Mail, Globe } from 'lucide-react';
import { Logo } from './Logo';
import { serverT } from '@/lib/t';

interface FooterProps {
  locale: string;
}

export function Footer({ locale }: FooterProps) {
  const t = serverT(locale);

  return (
    <footer className="bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Logo locale={locale} variant="light" size="md" />
            <p className="text-sm text-white/50 mt-2 leading-relaxed">
              {t('footer.rental')}
            </p>
            <p className="text-xs text-white/30 tracking-widest uppercase">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs tracking-widest2 uppercase text-white/40 mb-5">{t('footer.links')}</p>
            <div className="flex flex-col gap-3">
              {[
                { href: `/${locale}/catalogue`, label: t('nav.catalogue') },
                { href: `/${locale}/a-propos`,  label: t('nav.about') },
                { href: `/${locale}/contact`,   label: t('nav.contact') },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-white/60 hover:text-brand-orange transition-colors tracking-wide"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-widest2 uppercase text-white/40 mb-5">Contact</p>
            <div className="flex flex-col gap-3">
              <a href="tel:+212665924744" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors">
                <Phone size={14} className="text-brand-orange shrink-0" />
                +212 (0) 6 65 92 47 44
              </a>
              <a href="tel:+212614966063" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors">
                <Phone size={14} className="text-brand-orange shrink-0" />
                +212 (0) 6 14 96 60 63
              </a>
              <a href="mailto:touch@touch.ma" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors">
                <Mail size={14} className="text-brand-orange shrink-0" />
                touch@touch.ma
              </a>
              <a href="https://www.touch.ma" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors">
                <Globe size={14} className="text-brand-orange shrink-0" />
                www.touch.ma
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Touch {t('footer.by')} — {t('footer.rights')}
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-orange" />
            <span className="text-xs text-white/30">Maroc</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
