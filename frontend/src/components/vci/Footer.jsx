import { Mail, MapPin } from "lucide-react";
import { LINKS, IMG } from "./data";
import { MaskText, Reveal } from "./Motion";
import { ApplyButton, TalkButton } from "./Buttons";
import { Logo } from "./Logo";

const COLS = [
  { h: "Get started", items: [["Apply as a Training Partner", LINKS.apply], ["Ask a regional coordinator", LINKS.talk], ["How to start a VCI school", LINKS.start], ["Partner benefits", LINKS.benefits]] },
  { h: "Explore", items: [["Beliefs & cultural values", LINKS.beliefs], ["Schools by nation", LINKS.schools], ["Global Partner Network", LINKS.directory], ["Guest teachers", LINKS.guest]] },
  { h: "Apply in your language", items: [["English", LINKS.apply], ["Español", LINKS.es], ["Français", LINKS.fr], ["Português", LINKS.pt]] },
];

export const Closing = () => (
  <section id="contact" data-testid="contact-section" className="relative overflow-hidden bg-navy py-28 text-ivory lg:py-44">
    <img src={IMG.celebration} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-15" />
    <div className="spotlight absolute inset-0" aria-hidden="true" />
    <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
      <p className="font-label text-xs tracking-[0.32em] text-gold">THE CALL IS STILL GOING OUT</p>
      <MaskText lines={["Together, we will train", "the leaders the world", "needs most."]} className="mt-8 font-display text-4xl leading-[1.02] sm:text-6xl lg:text-7xl" />
      <Reveal delay={0.2} className="mt-12 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap sm:items-center">
        <ApplyButton testId="closing-apply-cta" />
        <TalkButton testId="closing-talk-cta" />
      </Reveal>
    </div>
  </section>
);

export const Footer = () => (
  <footer data-testid="site-footer" className="border-t border-gold/15 bg-navy-deep text-ivory">
    <div className="mx-auto grid max-w-[88rem] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:px-12">
      <div className="lg:col-span-4">
        <Logo />
        <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/75">A ministry of Victory Church, Tulsa, Oklahoma. Equipping Bible schools around the world.</p>
        <address className="mt-8 space-y-3 not-italic text-sm text-ivory/85">
          <a href="mailto:vci@victory.com" data-testid="footer-email-link" className="flex items-center gap-3 hover:text-gold"><Mail className="h-4 w-4 text-gold" aria-hidden="true" />vci@victory.com</a>
          <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-gold" aria-hidden="true" />7700 S Lewis, Tulsa, OK 74136, USA</p>
        </address>
      </div>
      {COLS.map((c) => (
        <nav key={c.h} aria-label={c.h} className="lg:col-span-2 lg:first-of-type:col-start-6">
          <h2 className="font-label text-xs tracking-[0.28em] text-gold">{c.h.toUpperCase()}</h2>
          <ul className="mt-6 space-y-3">
            {c.items.map(([l, h]) => (
              <li key={l}>
                <a href={h} target="_blank" rel="noopener noreferrer" className="text-sm text-ivory/80 hover:text-gold" data-testid={`footer-link-${l.toLowerCase().replace(/[^a-z]+/g, "-")}`}>{l}</a>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </div>
    <div className="border-t border-ivory/10">
      <div className="mx-auto flex max-w-[88rem] flex-col gap-3 px-5 py-6 text-xs text-ivory/70 sm:flex-row sm:justify-between sm:px-8 lg:px-12">
        <p>© {new Date().getFullYear()} Victory College International. All rights reserved.</p>
        <p className="font-display italic text-sm text-gold/90">Ephesians 4:12 · 2 Timothy 2:2</p>
      </div>
    </div>
  </footer>
);
