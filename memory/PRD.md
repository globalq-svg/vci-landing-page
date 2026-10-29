# PRD — Victory College International Landing Page

## Original problem statement
Build a responsive, polished landing page for Victory College International at victorycollege.international, aimed at international Christian leaders considering establishing a local Bible college or ministry training program. Present the mission as biblical and theological education, discipleship, church planting, and leadership development that equips leaders to train others and impact nations. Highlight partnerships providing curriculum and educational resources, guidance on establishing local training centers, faculty and leadership development, mentoring, and ongoing academic and ministry support; clearly state that VCI does not provide financial support or sponsorship. Use the supplied authentic photographs of graduations, gatherings, and ministry activities where available, with a prestigious yet inspirational and welcoming design using navy blue, gold, white, elegant typography, and generous space. Include a striking hero, vision and mission, overview of the partnership model, benefits and process, photo gallery, FAQ, and contact/footer sections. Make the main calls to action Apply to Become an International Training Partner and Schedule a Conversation with VCI Leadership, linking to existing relevant site pathways where available; information requests are already handled on the existing website. Ensure mobile responsiveness, accessibility, and basic SEO.

User choices: pull photos from existing site; CTAs link to matching existing site pages; footer email vci@victory.com.

## Architecture
Frontend-only React (CRA + Tailwind), framer-motion, lenis. Components in /app/frontend/src/components/vci/. No backend use.

## Implemented (2026-10-29)
- Hero with masked line reveal, parallax background, 3D tilt arch photo frame, dual CTAs
- Slow editorial marquee; Vision & Mission; Partnership model + no-financial-support notice
- Benefits bento; 4-step process with scroll-linked progress line; gallery with spotlight + lightbox; FAQ; closing CTA; footer
- SVG crest logo + favicon; SEO meta, OG, JSON-LD, robots.txt; skip link, focus styles, reduced-motion support
- CTA links: Apply -> /vci-director-application; Conversation -> /ask-a-regional-coordinator

## Notes / placeholders
- Photos are STOCK STAND-INS (site gallery is a third-party widget that couldn't be extracted) — replace in data.js IMG
- Address 7700 S Lewis, Tulsa (from current site footer)

## Backlog
- P0: swap in authentic VCI photos
- P1: confirm best page for "Schedule a Conversation"; translated versions (ES/FR/PT)
- P2: testimonials from partner schools, schools-by-nation map
