const WORDS = ["Biblical & Theological Education", "Discipleship", "Church Planting", "Leadership Development", "Train Those Who Train Others", "Impact Nations"];

const Row = ({ hidden }) => (
  <div className="flex shrink-0 items-center" aria-hidden={hidden}>
    {WORDS.map((w) => (
      <span key={w} className="flex items-center">
        <span className="px-8 font-display text-4xl italic text-navy sm:text-6xl">{w}</span>
        <span className="text-2xl text-gold-deep" aria-hidden="true">✦</span>
      </span>
    ))}
  </div>
);

export const Marquee = () => (
  <section aria-label="Our focus" data-testid="editorial-marquee" className="overflow-hidden border-y border-navy/10 bg-ivory py-10">
    <div className="marquee-track flex w-max">
      <Row />
      <Row hidden />
    </div>
  </section>
);
