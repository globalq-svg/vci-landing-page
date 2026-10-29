import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { LINKS } from "./data";
import { Eyebrow, MaskText, Reveal } from "./Motion";
import { ApplyButton } from "./Buttons";

const STEPS = [
  { t: "Start a conversation", d: "Connect with VCI leadership or a regional coordinator to share your vision, context and calling.", link: { href: LINKS.talk, label: "Schedule a conversation" } },
  { t: "Apply as a Training Partner", d: "Complete the director application so we can understand your church, leadership and plans for a local school.", link: { href: LINKS.apply, label: "Open the application" } },
  { t: "Prepare & equip", d: "Receive curriculum, guidelines and consultation. Build your faculty and leadership team with our training.", link: { href: LINKS.start, label: "How to start a VCI school" } },
  { t: "Launch & multiply", d: "Open your doors, then keep growing with mentoring, ongoing support and a global network of partners.", link: { href: LINKS.coordinator, label: "Find your regional coordinator" } },
];

export const Process = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });

  return (
    <section id="process" data-testid="process-section" className="bg-navy-deep py-24 text-ivory lg:py-40">
      <div className="mx-auto grid max-w-[88rem] gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Eyebrow>THE PROCESS</Eyebrow>
            <MaskText lines={["Four steps from", "calling to classroom."]} className="mt-8 font-display text-4xl leading-[1.02] sm:text-5xl lg:text-6xl" />
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-md text-base leading-relaxed text-ivory/80">A clear, relational pathway. We walk with you at every stage, at a pace that fits your nation and your ministry.</p>
              <ApplyButton testId="process-apply-cta" className="mt-10" />
            </Reveal>
          </div>
        </div>
        <ol ref={ref} className="relative lg:col-span-7" data-testid="process-steps">
          <div className="absolute left-[1.35rem] top-2 bottom-2 w-px bg-ivory/15" aria-hidden="true" />
          <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-[1.35rem] top-2 bottom-2 w-px origin-top bg-gold" aria-hidden="true" />
          {STEPS.map((s, i) => (
            <li key={s.t} className="relative pb-16 pl-20 last:pb-0" data-testid={`process-step-${i + 1}`}>
              <span className="absolute left-0 top-0 grid h-11 w-11 place-items-center rounded-full border border-gold/60 bg-navy-deep font-display text-lg text-gold">{i + 1}</span>
              <Reveal>
                <h3 className="font-display text-3xl sm:text-4xl">{s.t}</h3>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-ivory/80">{s.d}</p>
                <a href={s.link.href} target="_blank" rel="noopener noreferrer" data-testid={`process-step-${i + 1}-link`} className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light">
                  {s.link.label}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
