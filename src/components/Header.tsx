'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { useT } from './TranslationsProvider';

interface HeaderProps {
  locale: string;
}

export function Header({ locale }: HeaderProps) {
  const t = useT('nav');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const otherLocale = locale === 'fr' ? 'ar' : 'fr';

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navLinks = [
    { href: `/${locale}/catalogue`, label: t('catalogue') },
    { href: `/${locale}/a-propos`, label: t('about') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-brand-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
        {/* Logo */}
        <Logo locale={locale} variant={scrolled || menuOpen ? 'dark' : 'light'} size="sm" />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-widest uppercase transition-opacity hover:opacity-60 ${
                scrolled ? 'text-brand-black' : 'text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language toggle */}
          <Link
            href={`/${otherLocale}`}
            className={`text-xs font-medium tracking-widest uppercase border px-3 py-1.5 transition-colors ${
              scrolled
                ? 'border-brand-black/30 text-brand-black hover:bg-brand-black hover:text-white'
                : 'border-white/50 text-white hover:bg-white hover:text-brand-black'
            }`}
          >
            {otherLocale.toUpperCase()}
          </Link>
          {/* CTA */}
          <Link
            href={`/${locale}/contact`}
            className="bg-brand-orange text-white text-xs tracking-widest uppercase px-5 py-2.5 hover:bg-brand-orange/90 transition-colors"
          >
            {t('quote')}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 ${scrolled || menuOpen ? 'text-brand-black' : 'text-white'}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-white border-t border-brand-cream px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-brand-black hover:text-brand-orange transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 pt-2 border-t border-brand-cream">
            <Link
              href={`/${otherLocale}`}
              className="text-xs border border-brand-black/30 px-3 py-1.5 tracking-widest uppercase"
            >
              {otherLocale.toUpperCase()}
            </Link>
            <Link
              href={`/${locale}/contact`}
              onClick={() => setMenuOpen(false)}
              className="bg-brand-orange text-white text-xs tracking-widest uppercase px-5 py-2.5"
            >
              {t('quote')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
