import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Eyebrow, MaskText, Reveal } from "./Motion";
import { LINKS } from "./data";

const FAQS = [
  { q: "Does VCI provide funding, salaries or sponsorship?", a: "No. Victory College International does not provide financial support or sponsorship of any kind. We provide curriculum, resources, guidance, training, mentoring and ongoing support. Each school is established and sustained locally, so it can take root and last." },
  { q: "Who can become an International Training Partner?", a: "Christian leaders, pastors, churches, missionaries and ministries who sense a call to establish a local Bible college or ministry training program and who align with VCI's Spirit-filled, Word-based ministry values." },
  { q: "What does a partnership include?", a: "Curriculum and educational resources, guidance on establishing your local training center, faculty and leadership development, mentoring, and ongoing academic and ministry support, including connection to regional coordinators and the Global Partner Network." },
  { q: "Is there a cost for the curriculum?", a: "VCI provides its Spirit-filled Bible school curriculum free of charge to partner schools. Local operating costs such as facilities, materials printing and staff remain the responsibility of the local ministry." },
  { q: "Can we teach in our own language?", a: "VCI serves international and non-English communities, and applications are available in English, Español, Français and Português. Talk with us about the language needs of your context." },
  { q: "How do I get started?", a: "Schedule a conversation with VCI leadership or your regional coordinator, then complete the Training Partner (director) application. We'll walk with you through every next step." },
];

export const Faq = () => (
  <section id="faq" data-testid="faq-section" className="bg-ivory py-24 text-navy lg:py-40">
    <div className="mx-auto grid max-w-[88rem] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
      <div className="lg:col-span-4">
        <Eyebrow dark>QUESTIONS</Eyebrow>
        <MaskText lines={["Frequently", "asked."]} className="mt-8 font-display text-4xl leading-[1.02] sm:text-5xl lg:text-6xl" />
        <p className="mt-6 text-sm leading-relaxed text-navy/75">
          More detail on the <a className="underline decoration-gold-deep underline-offset-4 hover:text-gold-deep" href={LINKS.start} target="_blank" rel="noopener noreferrer" data-testid="faq-start-link">how to start a VCI school</a> page and in our <a className="underline decoration-gold-deep underline-offset-4 hover:text-gold-deep" href={LINKS.beliefs} target="_blank" rel="noopener noreferrer" data-testid="faq-beliefs-link">beliefs & cultural values</a>.
        </p>
      </div>
      <Reveal className="lg:col-span-8">
        <Accordion type="single" collapsible defaultValue="item-0" data-testid="faq-accordion">
          {FAQS.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="border-navy/15">
              <AccordionTrigger data-testid={`faq-trigger-${i}`} className="py-7 font-display text-xl hover:no-underline hover:text-gold-deep sm:text-2xl">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="max-w-2xl pb-7 text-base leading-relaxed text-navy/80">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  </section>
);
