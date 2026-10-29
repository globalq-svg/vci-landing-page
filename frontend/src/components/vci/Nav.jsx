import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { NAV, LINKS } from "./data";
import { ApplyButton } from "./Buttons";

export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -70, duration: 1.4 });
  else el.scrollIntoView({ behavior: "smooth" });
};

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      data-testid="site-header"
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,padding] duration-500 ${
        scrolled ? "bg-navy/95 backdrop-blur-xl border-b border-gold/15 py-3" : "py-6 border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[88rem] items-center justify-between px-5 sm:px-8 lg:px-12" aria-label="Main">
        <Logo />
        <ul className="hidden xl:flex items-center gap-8">
          {NAV.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} onClick={go(n.id)} data-testid={`nav-link-${n.id}`} className="nav-link text-sm text-ivory/80 hover:text-ivory">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a href={LINKS.apply} target="_blank" rel="noopener noreferrer" data-testid="nav-cta-apply-button" className="btn-gold hidden sm:inline-flex rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide text-navy">
            Apply to Partner
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            data-testid="nav-mobile-menu-toggle"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="xl:hidden grid h-11 w-11 place-items-center rounded-full border border-ivory/20 text-ivory"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="xl:hidden mx-4 mt-3 rounded-3xl border border-gold/20 bg-navy-deep/95 backdrop-blur-xl p-6"
            data-testid="nav-mobile-menu"
          >
            <ul className="flex flex-col">
              {NAV.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} onClick={go(n.id)} data-testid={`mobile-nav-link-${n.id}`} className="block border-b border-ivory/10 py-4 font-display text-2xl text-ivory">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
            <ApplyButton testId="mobile-nav-apply-button" className="mt-6 w-full" />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
