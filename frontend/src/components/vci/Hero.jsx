import { useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { IMG } from "./data";
import { MaskText, EASE } from "./Motion";
import { ApplyButton, TalkButton } from "./Buttons";
import { Crest } from "./Logo";
import { scrollToId } from "./Nav";

const FACTS = [
  { k: "30+", v: "Spirit-filled courses" },
  { k: "Free", v: "curriculum for partner schools" },
  { k: "Hundreds", v: "of missionaries & national ministers served" },
];

const TiltFrame = () => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [9, -9]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-11, 11]), { stiffness: 120, damping: 18 });
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.6, delay: 0.5, ease: EASE }}
      className="relative mx-auto w-full max-w-[22rem] [perspective:1200px]"
      onMouseMove={onMove}
      onMouseLeave={reset}
      data-testid="hero-3d-frame"
    >
      <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }} className="relative">
        <div className="arch-frame relative aspect-[3/4] overflow-hidden border border-gold/50 p-2">
          <div className="arch-frame h-full w-full overflow-hidden">
            <img src={IMG.graduates} alt="Graduates in academic gowns celebrating" className="h-full w-full object-cover" />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
        </div>
        <div style={{ transform: "translateZ(70px)" }} className="absolute -bottom-8 -left-8 grid h-24 w-24 place-items-center rounded-full border border-gold/40 bg-navy-deep/90 backdrop-blur-md">
          <Crest className="h-12 w-11" />
        </div>
        <div style={{ transform: "translateZ(40px)" }} className="absolute -right-4 top-10 rounded-full border border-gold/30 bg-navy/80 px-4 py-2 font-label text-[11px] tracking-[0.25em] text-gold backdrop-blur-md">
          2 TIM 2:2
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  return (
    <section id="top" ref={ref} data-testid="hero-section" className="relative min-h-[100svh] overflow-hidden bg-navy text-ivory">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[10%] h-[120%]" aria-hidden="true">
        <img src={IMG.hero} alt="" className="h-full w-full object-cover opacity-30 grayscale-[30%]" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/50" aria-hidden="true" />
      <div className="spotlight absolute inset-0" aria-hidden="true" />
      <div className="grain absolute inset-0" aria-hidden="true" />

      <motion.div style={{ y: textY }} className="relative z-10 mx-auto grid max-w-[88rem] gap-16 px-5 pb-20 pt-36 sm:px-8 lg:grid-cols-12 lg:items-center lg:px-12 lg:pt-44">
        <div className="lg:col-span-8">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.1 }} className="mb-8 flex items-center gap-3 font-label text-[11px] tracking-[0.32em] text-gold sm:text-xs">
            <span className="h-px w-10 bg-gold" aria-hidden="true" />
            INTERNATIONAL TRAINING PARTNERSHIPS
          </motion.p>
          <MaskText
            as="h1"
            onLoad
            lines={["Raise up leaders", <>who <em className="text-gold not-italic font-display italic">train others</em></>, "& impact nations."]}
            className="font-display text-[2.9rem] leading-[0.98] tracking-tight sm:text-7xl lg:text-[6.2rem]"
          />
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.9, ease: EASE }} className="mt-8 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg">
            Victory College International partners with Christian leaders around the world to establish local Bible colleges and ministry training programs, grounded in the Word, empowered by the Spirit, and built to last.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 1.1, ease: EASE }} className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <ApplyButton testId="hero-primary-cta" />
            <TalkButton testId="hero-secondary-cta" />
          </motion.div>
        </div>
        <div className="lg:col-span-4">
          <TiltFrame />
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[88rem] px-5 pb-10 sm:px-8 lg:px-12">
        <dl className="grid gap-6 border-t border-ivory/15 pt-8 sm:grid-cols-3" data-testid="hero-facts">
          {FACTS.map((f, i) => (
            <motion.div key={f.v} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 + i * 0.12, duration: 0.9, ease: EASE }} className="flex items-baseline gap-3">
              <dt className="font-display text-3xl text-gold">{f.k}</dt>
              <dd className="text-sm text-ivory/75">{f.v}</dd>
            </motion.div>
          ))}
        </dl>
        <button type="button" onClick={() => scrollToId("vision")} data-testid="hero-scroll-indicator" className="mt-10 hidden items-center gap-3 font-label text-[11px] tracking-[0.3em] text-ivory/70 hover:text-gold sm:flex">
          <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" /> DISCOVER THE PARTNERSHIP
        </button>
      </div>
    </section>
  );
};
