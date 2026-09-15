import Link from 'next/link';

interface LogoProps {
  locale: string;
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ locale, variant = 'dark', size = 'md' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-brand-black';
  const accentColor = variant === 'light' ? 'border-white/60' : 'border-brand-black/40';

  const scriptSizes = { sm: 'text-3xl', md: 'text-4xl', lg: 'text-5xl' };
  const tagSizes = { sm: 'text-[0.42rem]', md: 'text-[0.48rem]', lg: 'text-[0.55rem]' };

  return (
    <Link href={`/${locale}`} className="flex flex-col items-start leading-none group">
      <span
        className={`font-script ${scriptSizes[size]} ${textColor} transition-opacity group-hover:opacity-80`}
        style={{ lineHeight: 1.1 }}
      >
        Touch
      </span>
      <div className={`flex items-center gap-1.5 -mt-1`}>
        <span className={`${tagSizes[size]} ${textColor} font-light tracking-widest opacity-70`}>
          by
        </span>
        <span
          className={`${tagSizes[size]} ${textColor} font-medium tracking-widest2 uppercase border-b ${accentColor} pb-px`}
        >
          Secrets D&apos;Ambiance
        </span>
      </div>
    </Link>
  );
}
