import { Award, Globe2, Users, Languages, ArrowUpRight } from "lucide-react";
import { IMG, LINKS } from "./data";
import { Eyebrow, MaskText, Reveal } from "./Motion";

const Tile = ({ icon: Icon, t, d, className = "", testId }) => (
  <div data-testid={testId} className={`group flex flex-col justify-between rounded-3xl border border-navy/10 bg-white p-8 transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(11,19,43,0.35)] ${className}`}>
    <Icon className="h-7 w-7 text-gold-deep transition-transform duration-500 group-hover:scale-110" aria-hidden="true" />
    <div className="mt-10">
      <h3 className="font-display text-2xl leading-tight text-navy">{t}</h3>
      <p className="mt-3 text-sm leading-relaxed text-navy/75">{d}</p>
    </div>
  </div>
);

export const Benefits = () => (
  <section id="benefits" data-testid="benefits-section" className="bg-ivory py-24 lg:py-40">
    <div className="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Eyebrow dark>BENEFITS FOR PARTNERS</Eyebrow>
          <MaskText lines={["Everything you need", "to train faithful leaders."]} className="mt-8 font-display text-4xl leading-[1.02] text-navy sm:text-5xl lg:text-6xl" />
        </div>
        <a href={LINKS.benefits} target="_blank" rel="noopener noreferrer" data-testid="benefits-see-all-link" className="group inline-flex items-center gap-2 self-start border-b border-navy/30 pb-1 text-sm font-semibold text-navy hover:border-gold-deep lg:self-auto">
          See all partner benefits <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
        </a>
      </div>

      <Reveal className="mt-16 grid gap-6 lg:grid-cols-12 lg:auto-rows-[minmax(17rem,auto)]">
        <div data-testid="benefit-curriculum" className="group relative overflow-hidden rounded-3xl bg-navy text-ivory lg:col-span-7 lg:row-span-2 min-h-[26rem]">
          <img src={IMG.worship} alt="Believers worshipping together outdoors" className="absolute inset-0 h-full w-full object-cover opacity-55 transition-transform duration-[1.6s] group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
          <div className="relative flex h-full flex-col justify-end p-8 sm:p-12">
            <p className="font-label text-xs tracking-[0.3em] text-gold">SPIRIT-FILLED CURRICULUM</p>
            <h3 className="mt-4 max-w-lg font-display text-3xl leading-tight sm:text-5xl">Ready-to-teach courses, free for partner schools.</h3>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-ivory/85 sm:text-base">Biblical Foundations, Old & New Testament Survey, the Holy Spirit, Faith & Healing, Pastoral Ministry, Church Planting, Evangelism, Missions, Prayer, Worship and more.</p>
            <a href={LINKS.courses} target="_blank" rel="noopener noreferrer" data-testid="benefit-courses-link" className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-gold hover:text-gold-light">
              Sample course titles <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
        <Tile testId="benefit-certificate" icon={Award} t="International Bible College Partner Certificate" d="Recognition of your school as an International Bible College Partner within the VCI network." className="lg:col-span-5" />
        <Tile testId="benefit-directory" icon={Globe2} t="Global Partner Network Directory" d="A listing that connects your training center with leaders and schools across the nations." className="lg:col-span-5" />
        <Tile testId="benefit-coordinators" icon={Users} t="Regional Coordinator support" d="Training sessions and a coordinator in your region who knows your context." className="lg:col-span-4" />
        <Tile testId="benefit-guest-teachers" icon={GraduationCap2} t="Guest teachers" d="Short-term missionary teachers who can serve in your classroom and invest in your faculty." className="lg:col-span-4" />
        <Tile testId="benefit-languages" icon={Languages} t="Multilingual pathways" d="Applications available in English, Español, Français and Português." className="lg:col-span-4" />
      </Reveal>
    </div>
  </section>
);

function GraduationCap2(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3 2 8l10 5 10-5-10-5Z" />
      <path d="M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" />
    </svg>
  );
}
