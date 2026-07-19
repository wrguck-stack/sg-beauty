import { motion } from 'framer-motion';
export function SectionHeading({ eyebrow, headline, children }: { eyebrow: string; headline: string; children: string }) {
  return <motion.div className="mx-auto max-w-3xl px-5 text-center" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-120px' }} transition={{ duration: .8, ease: [0.22,1,0.36,1] }}>
    <p className="mb-4 text-xs font-bold uppercase tracking-[0.34em] text-champagne">{eyebrow}</p>
    <h2 className="font-display text-[clamp(2.4rem,6vw,6rem)] font-black leading-[0.9] tracking-[-0.07em] text-ink">{headline}</h2>
    <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-ink/65 md:text-lg">{children}</p>
  </motion.div>;
}
