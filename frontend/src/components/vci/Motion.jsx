import { motion } from "framer-motion";

export const EASE = [0.16, 1, 0.3, 1];

export const Reveal = ({ children, delay = 0, y = 32, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.12 }}
    transition={{ duration: 1, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

const line = {
  hidden: { y: "110%" },
  show: (i) => ({ y: "0%", transition: { duration: 1.15, delay: 0.12 * i, ease: EASE } }),
};

// Masked line-by-line reveal; observer sits on the unclipped wrapper
export const MaskText = ({ lines, as = "h2", className = "", onLoad = false, delay = 0 }) => {
  const Tag = motion[as];
  const trigger = onLoad ? { animate: "show" } : { whileInView: "show", viewport: { once: true, amount: 0.1 } };
  return (
    <Tag className={className} initial="hidden" {...trigger} transition={{ delayChildren: delay }}>
      {lines.map((l, i) => (
        <span key={i} className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
          <motion.span className="block" variants={line} custom={i + delay * 8}>
            {l}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

export const Eyebrow = ({ children, dark = false, className = "" }) => (
  <p className={`flex items-center gap-3 font-label text-xs tracking-[0.32em] ${dark ? "text-gold-deep" : "text-gold"} ${className}`}>
    <span className="h-px w-10 bg-current" aria-hidden="true" />
    {children}
  </p>
);
