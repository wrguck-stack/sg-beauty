import { motion } from 'framer-motion';
const ease = [0.22, 1, 0.36, 1] as const;
export function HeroHeadline() { return <h1 aria-label="Beauty is Art" className="max-w-[min(100%,900px)] overflow-visible py-[clamp(.4rem,1.5vw,1rem)] text-warm-white drop-shadow-[0_10px_34px_rgba(0,0,0,.42)]">
  <motion.span className="block font-display text-[clamp(4rem,9vw,10rem)] font-black uppercase leading-[.84] tracking-[-.09em]" initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease }}>Beauty</motion.span>
  <span className="mt-[clamp(.15rem,.8vw,.7rem)] flex items-end gap-[clamp(.75rem,2.4vw,2.2rem)] overflow-visible pl-[clamp(.75rem,7vw,7rem)]"><motion.span className="pb-[clamp(.7rem,1.4vw,1.45rem)] text-[clamp(1rem,1.8vw,1.75rem)] font-light tracking-[.22em] text-warm-white/95" initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .12, ease }}>is</motion.span><motion.span className="font-art text-[clamp(5rem,11vw,12rem)] italic leading-[.92] tracking-[-.055em] text-rose" initial={false} animate={{ opacity: 1, filter: 'blur(0px)' }} transition={{ duration: .9, delay: .22, ease }}>Art</motion.span></span>
</h1>; }
