import { motion } from 'framer-motion';
const ease = [0.22, 1, 0.36, 1] as const;
export function HeroHeadline() { return <h1 aria-label="Beauty is Art" className="max-w-[min(94vw,900px)] text-warm-white">
  <motion.span className="block font-display text-[clamp(4.6rem,14vw,15rem)] font-black uppercase leading-[.72] tracking-[-.105em]" initial={{ opacity: 0, y: 42 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, ease }}>Beauty</motion.span>
  <span className="mt-2 flex items-end gap-[clamp(.9rem,3vw,2.4rem)] pl-[clamp(1.5rem,11vw,9rem)]"><motion.span className="pb-[clamp(.6rem,1.4vw,1.5rem)] text-[clamp(1.1rem,2vw,2rem)] font-light tracking-[.22em]" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .25, ease }}>is</motion.span><motion.span className="font-art text-[clamp(4.8rem,11vw,12rem)] italic leading-[.78] tracking-[-.06em] text-rose" initial={{ opacity: 0, filter: 'blur(8px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} transition={{ duration: 1.1, delay: .42, ease }}>Art</motion.span></span>
</h1>; }
