import { BookOpen, Landmark, GraduationCap, HeartHandshake, LifeBuoy, ShieldAlert } from "lucide-react";
import { Eyebrow, MaskText, Reveal } from "./Motion";

const PROVIDES = [
  { icon: BookOpen, t: "Curriculum & educational resources", d: "Written and video curriculum drawn from 30+ Spirit-filled courses, plus proven resource materials ready for your classroom." },
  { icon: Landmark, t: "Guidance on establishing a local training center", d: "Hands-on consultation and clear, principled guidelines for launching your Bible college or ministry training program." },
  { icon: GraduationCap, t: "Faculty & leadership development", d: "Training for directors and teachers, with short-term guest teachers who can serve alongside you in the classroom." },
  { icon: HeartHandshake, t: "Mentoring", d: "Relationship, not a transaction. Regional coordinators walk with you as you build and grow." },
  { icon: LifeBuoy, t: "Ongoing academic & ministry support", d: "Continued encouragement, training for growth and multiplication, and connection to a global partner network." },
];

export const Partnership = () => (
  <section id="partnership" data-testid="partnership-section" className="relative overflow-hidden bg-navy py-24 text-ivory lg:py-40">
    <div className="grain absolute inset-0" aria-hidden="true" />
    <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Eyebrow>THE PARTNERSHIP MODEL</Eyebrow>
            <MaskText lines={["We equip.", "You establish.", "Together, it lasts."]} className="mt-8 font-display text-4xl leading-[1.02] sm:text-5xl lg:text-6xl" />
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-md text-base leading-relaxed text-ivory/80 sm:text-lg">
                We do not simply send materials and move on. VCI comes alongside International Training Partners to equip, consult, teach and impart, so each school takes root in its own culture and stands on its own foundation.
              </p>
              <div role="note" data-testid="no-financial-support-notice" className="mt-10 rounded-2xl border border-gold/50 bg-gold/10 p-6">
                <div className="flex items-start gap-4">
                  <ShieldAlert className="mt-0.5 h-6 w-6 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <p className="font-label text-xs tracking-[0.25em] text-gold">PLEASE NOTE</p>
                    <p className="mt-2 font-display text-2xl leading-snug">VCI does not provide financial support or sponsorship.</p>
                    <p className="mt-2 text-sm leading-relaxed text-ivory/80">Partnership is about equipping, not funding. Each training center is established and sustained by its local church or ministry. Our goal is never dependency.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
        <ul className="lg:col-span-7" data-testid="partnership-provisions">
          {PROVIDES.map(({ icon: Icon, t, d }, i) => (
            <li key={t}>
              <Reveal delay={i * 0.05} className="group relative border-t border-ivory/15 py-10 last:border-b">
                <span className="absolute left-0 top-0 h-px w-0 bg-gold transition-[width] duration-700 group-hover:w-full" aria-hidden="true" />
                <div className="flex gap-6 sm:gap-10">
                  <span className="font-label text-xs tracking-[0.3em] text-gold/90 pt-2">0{i + 1}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <Icon className="h-6 w-6 text-gold transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110" aria-hidden="true" />
                      <h3 className="font-display text-2xl sm:text-3xl transition-transform duration-500 group-hover:translate-x-1">{t}</h3>
                    </div>
                    <p className="mt-3 max-w-xl text-base leading-relaxed text-ivory/75">{d}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
