import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { AnimatedButton } from './AnimatedButton';
import { HeroHeadline } from './HeroHeadline';
import { HeroVideo } from './HeroVideo';
export function HeroSection() { return <section id="home" className="relative flex min-h-[100svh] overflow-hidden px-5 pb-10 pt-28 md:px-10"><HeroVideo/><div className="mx-auto grid w-full max-w-[1800px] items-end gap-10 md:grid-cols-[1.25fr_.75fr]"><div><HeroHeadline/></div><motion.div className="mb-10 flex flex-col items-stretch gap-4 justify-self-start md:justify-self-end" initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .9, delay: .65 }}><AnimatedButton href={siteConfig.bookingUrl}>Online Termin buchen</AnimatedButton><AnimatedButton href="#contact" variant="secondary">Kontaktiere mich</AnimatedButton></motion.div></div><a href="#services" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-xs uppercase tracking-[.35em] text-warm-white/75 md:flex">Explore <ChevronDown className="size-4 animate-bounce-subtle"/></a></section>; }
