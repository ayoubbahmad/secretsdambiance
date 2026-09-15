import type { Metadata } from 'next';
import { DM_Sans, Great_Vibes, Cairo } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-great-vibes',
  display: 'swap',
});

const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-cairo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Touch by Secrets D'Ambiance",
  description:
    "Location de mobilier et décoration pour événements — Aménagement sur mesure, scénographie & mise en ambiance.",
  keywords: ['location mobilier', 'décoration événements', 'Maroc', 'Touch', "Secrets D'Ambiance"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      className={`${dmSans.variable} ${greatVibes.variable} ${cairo.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
