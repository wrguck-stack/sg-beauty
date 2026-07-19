import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { MobileMenu } from './MobileMenu';
import { siteConfig } from '../config/siteConfig';
import { useActiveSection } from '../hooks/useActiveSection';

export function Header() {
  const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(['home','services','about','contact']);
  useEffect(() => { const on = () => setScrolled(scrollY > 40); addEventListener('scroll', on, { passive: true }); on(); return () => removeEventListener('scroll', on); }, []);
  return <><motion.header className={`fixed inset-x-0 top-0 z-40 transition duration-500 ${scrolled ? 'bg-ink/35 backdrop-blur-xl' : 'bg-transparent'}`} initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
    <div className="mx-auto flex max-w-[1800px] items-center justify-between px-5 py-5 text-warm-white md:px-10"><BrandLogo light />
      <nav className="hidden items-center gap-9 md:flex" aria-label="Hauptnavigation">{siteConfig.navItems.map(item => <a key={item.href} href={item.href} className={`nav-link ${active === item.href.slice(1) ? 'text-rose after:scale-x-100' : ''}`}>{item.label}</a>)}</nav>
      <button className="focus-ring md:hidden" onClick={() => setOpen(true)} aria-label="Menü öffnen" aria-expanded={open}><Menu /></button></div>
  </motion.header><MobileMenu open={open} onClose={() => setOpen(false)} /></>;
}
