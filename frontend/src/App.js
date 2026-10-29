import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { MotionConfig } from "framer-motion";
import { Nav } from "@/components/vci/Nav";
import { Hero } from "@/components/vci/Hero";
import { Marquee } from "@/components/vci/Marquee";
import { Vision } from "@/components/vci/Vision";
import { Partnership } from "@/components/vci/Partnership";
import { Benefits } from "@/components/vci/Benefits";
import { Process } from "@/components/vci/Process";
import { Gallery } from "@/components/vci/Gallery";
import { Faq } from "@/components/vci/Faq";
import { Closing, Footer } from "@/components/vci/Footer";

function useLenis() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const lenis = new Lenis({ duration: 1.25, smoothWheel: true });
    window.__lenis = lenis;
    let id;
    const raf = (t) => { lenis.raf(t); id = requestAnimationFrame(raf); };
    id = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(id); lenis.destroy(); window.__lenis = null; };
  }, []);
}

export default function App() {
  useLenis();
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="skip-link" data-testid="skip-to-content-link">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <Vision />
        <Partnership />
        <Benefits />
        <Process />
        <Gallery />
        <Faq />
        <Closing />
      </main>
      <Footer />
    </MotionConfig>
  );
}
