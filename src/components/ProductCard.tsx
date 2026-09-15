import Image from 'next/image';
import Link from 'next/link';
import { type Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  locale: string;
  viewLabel?: string;
  refLabel?: string;
}

export function ProductCard({
  product,
  locale,
  viewLabel = 'Voir les détails',
  refLabel = 'Réf.',
}: ProductCardProps) {
  return (
    <Link
      href={`/${locale}/produits/${product.slug}`}
      className="group flex flex-col bg-white hover:shadow-lg transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-brand-cream">
        <Image
          src={product.image}
          alt={`${product.name} — ${product.material}`}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-1 flex-1">
        <p className="text-[0.6rem] text-brand-orange tracking-widest2 uppercase font-medium">
          {refLabel} {product.reference}
        </p>
        <h3 className="font-medium text-sm leading-snug text-brand-black">{product.name}</h3>
        <p className="text-xs text-brand-black/50">{product.material}</p>
        {product.dimensions !== '—' && (
          <p className="text-xs text-brand-black/40 mt-0.5">{product.dimensions}</p>
        )}
        <div className="mt-3 pt-3 border-t border-brand-cream">
          <span className="text-[0.65rem] tracking-widest uppercase text-brand-black/60 group-hover:text-brand-orange transition-colors">
            {viewLabel} →
          </span>
        </div>
      </div>
    </Link>
  );
}
