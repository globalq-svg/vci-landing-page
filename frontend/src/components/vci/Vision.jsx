import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IMG } from "./data";
import { Eyebrow, MaskText, Reveal } from "./Motion";

const PILLARS = [
  { t: "Biblical & theological education", d: "Sound, Spirit-filled teaching across the full breadth of Scripture and ministry." },
  { t: "Discipleship", d: "Forming character, conviction and calling, not just transferring information." },
  { t: "Church planting", d: "Preparing leaders to plant and pastor healthy, Word-based churches." },
  { t: "Leadership development", d: "Equipping leaders who will train others, multiplying ministry for generations." },
];

export const Vision = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="vision" ref={ref} data-testid="vision-section" className="bg-ivory py-24 text-navy lg:py-40">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow dark>VISION & MISSION</Eyebrow>
            <MaskText
              lines={["Leaders trained", "in their own nations,", "for their own nations."]}
              className="mt-8 font-display text-4xl leading-[1.02] sm:text-5xl lg:text-7xl"
            />
            <Reveal delay={0.2} className="mt-10 grid gap-10 sm:grid-cols-2">
              <div>
                <h3 className="font-label text-xs tracking-[0.3em] text-gold-deep">OUR VISION</h3>
                <p className="mt-4 text-base leading-relaxed text-navy/80">
                  A generation of leaders from every culture carrying the Gospel with boldness, wisdom and conviction, through Bible schools that take root locally and keep raising up ministers for generations to come.
                </p>
              </div>
              <div>
                <h3 className="font-label text-xs tracking-[0.3em] text-gold-deep">OUR MISSION</h3>
                <p className="mt-4 text-base leading-relaxed text-navy/80">
                  To come alongside churches, pastors and ministry leaders with curriculum, guidance, mentoring and ongoing support, equipping them to train others and impact their nations.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal className="relative">
              <div className="arch-frame relative aspect-[4/5] overflow-hidden">
                <motion.img style={{ y: imgY }} src={IMG.study} alt="Believers studying the Bible together" className="absolute inset-0 h-[116%] w-full -top-[8%] object-cover" />
              </div>
              <figure className="absolute -bottom-10 left-4 right-4 rounded-2xl bg-navy p-6 text-ivory shadow-2xl sm:-left-10 sm:right-auto sm:max-w-xs">
                <blockquote className="font-display text-xl italic leading-snug">“The things that you have heard from me… commit these to faithful men who will be able to teach others also.”</blockquote>
                <figcaption className="mt-3 font-label text-[11px] tracking-[0.3em] text-gold">2 TIMOTHY 2:2</figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        <ol className="mt-32 grid gap-px overflow-hidden rounded-3xl border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-4" data-testid="vision-pillars">
          {PILLARS.map((p, i) => (
            <li key={p.t} className="group bg-ivory p-8 transition-colors duration-500 hover:bg-navy">
              <Reveal delay={i * 0.08}>
                <span className="font-display text-5xl text-gold-deep transition-colors duration-500 group-hover:text-gold">0{i + 1}</span>
                <h3 className="mt-6 font-display text-2xl leading-tight transition-colors duration-500 group-hover:text-ivory">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/75 transition-colors duration-500 group-hover:text-ivory/80">{p.d}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
