import { ArrowUpRight } from 'lucide-react';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: 'primary' | 'secondary' | 'dark'; children: ReactNode };
export function AnimatedButton({ variant = 'primary', children, className = '', ...props }: Props) {
  return <a className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-sm px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne ${variant === 'primary' ? 'bg-warm-white text-ink hover:bg-rose' : variant === 'secondary' ? 'border border-warm-white/70 text-warm-white hover:bg-warm-white hover:text-ink' : 'bg-ink text-warm-white hover:bg-champagne'} ${className}`} {...props}>{children}<ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden /></a>;
}
