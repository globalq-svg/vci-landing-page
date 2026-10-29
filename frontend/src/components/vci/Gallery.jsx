import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "../ui/dialog";
import { IMG } from "./data";
import { Eyebrow, MaskText, Reveal } from "./Motion";

const PHOTOS = [
  { src: IMG.gathering, alt: "Leaders and believers gathered together", cap: "Gatherings", span: "sm:col-span-2 sm:row-span-2" },
  { src: IMG.graduate, alt: "Graduate in gown on graduation day", cap: "Graduation" },
  { src: IMG.prayer, alt: "Believers praying and reading Scripture together", cap: "Prayer & the Word" },
  { src: IMG.pastor, alt: "Pastor and church member during a service", cap: "Ministry" },
  { src: IMG.celebration, alt: "A large congregation celebrating together", cap: "Celebration" },
  { src: IMG.graduates, alt: "Two graduates celebrating with caps raised", cap: "Commissioned" },
];

export const Gallery = () => {
  const [active, setActive] = useState(null);
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section id="gallery" data-testid="gallery-section" onMouseMove={onMove} className="gallery-spot relative overflow-hidden bg-navy py-24 text-ivory lg:py-40">
      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Eyebrow>IN THE FIELD</Eyebrow>
            <MaskText lines={["Graduations, gatherings", "& ministry across the nations."]} className="mt-8 font-display text-4xl leading-[1.02] sm:text-5xl lg:text-6xl" />
          </div>
          <p className="text-sm text-ivory/70 lg:col-span-4" data-testid="gallery-placeholder-note">[Placeholder images — to be replaced with authentic VCI photographs.]</p>
        </div>
        <Reveal className="mt-16 grid grid-cols-1 gap-4 auto-rows-[16rem] sm:grid-cols-3 sm:auto-rows-[15rem] lg:auto-rows-[18rem]">
          {PHOTOS.map((p, i) => (
            <button
              key={p.cap}
              type="button"
              onClick={() => setActive(p)}
              data-testid={`gallery-item-${i}`}
              aria-label={`View photo: ${p.alt}`}
              className={`clip-tile group relative overflow-hidden rounded-2xl text-left ${p.span || ""}`}
            >
              <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110" />
              <span className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" aria-hidden="true" />
              <span className="absolute inset-3 rounded-xl border border-gold/0 transition-colors duration-500 group-hover:border-gold/70" aria-hidden="true" />
              <span className="absolute bottom-5 left-6 font-label text-xs tracking-[0.3em] text-ivory">{p.cap.toUpperCase()}</span>
            </button>
          ))}
        </Reveal>
      </div>
      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-5xl border-gold/30 bg-navy-deep p-2 text-ivory" data-testid="gallery-lightbox">
          <DialogTitle className="sr-only">{active?.cap ?? "Photo"}</DialogTitle>
          <DialogDescription className="sr-only">{active?.alt ?? ""}</DialogDescription>
          {active && <img src={active.src} alt={active.alt} className="max-h-[80vh] w-full rounded-lg object-contain" />}
        </DialogContent>
      </Dialog>
    </section>
  );
};
