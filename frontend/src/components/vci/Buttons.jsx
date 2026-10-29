import { ArrowUpRight, CalendarDays } from "lucide-react";
import { LINKS } from "./data";

export const ApplyButton = ({ testId, label = "Apply to Become an International Training Partner", className = "" }) => (
  <a
    href={LINKS.apply}
    target="_blank"
    rel="noopener noreferrer"
    data-testid={testId}
    className={`btn-gold group inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-semibold text-navy ${className}`}
  >
    <span>{label}</span>
    <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
  </a>
);

export const TalkButton = ({ testId, dark = false, className = "" }) => (
  <a
    href={LINKS.talk}
    target="_blank"
    rel="noopener noreferrer"
    data-testid={testId}
    className={`group inline-flex items-center justify-center gap-3 rounded-full border px-7 py-4 text-sm font-semibold transition-colors duration-300 ${
      dark ? "border-navy/30 text-navy hover:bg-navy hover:text-ivory" : "border-ivory/30 text-ivory hover:border-gold hover:text-gold"
    } ${className}`}
  >
    <CalendarDays className="h-4 w-4 shrink-0" aria-hidden="true" />
    <span>Schedule a Conversation with VCI Leadership</span>
  </a>
);
