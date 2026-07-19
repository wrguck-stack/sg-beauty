import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { siteConfig } from '../config/siteConfig';

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.body.style.overflow = 'hidden'; document.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', onKey); };
  }, [open, onClose]);
  return <AnimatePresence>{open && <motion.div className="fixed inset-0 z-50 bg-ink text-warm-white" role="dialog" aria-modal="true" aria-label="Mobile Navigation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <div className="flex items-center justify-between p-5 pt-[max(1.25rem,env(safe-area-inset-top))]"><BrandLogo light /><button className="focus-ring rounded-sm p-2" onClick={onClose} aria-label="Menü schließen"><X /></button></div>
    <nav className="flex min-h-[70svh] flex-col justify-center px-8">
      {siteConfig.navItems.map((item, i) => <motion.a key={item.href} href={item.href} onClick={onClose} className="border-b border-warm-white/15 py-6 font-display text-[clamp(2.4rem,14vw,5rem)] font-black uppercase leading-none tracking-[-0.08em]" initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * .06 }}>{item.label}</motion.a>)}
    </nav>
  </motion.div>}</AnimatePresence>;
}
