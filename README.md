# OBSIDIAN/LIME

An original fictional template studio following **The Complete AI Website Prompt (Hyliox)** by **Horyx Studio**: https://hyliox.io/prompt

Live: https://raj-microsoft.github.io/obsidian-templates/

## Run
`npm install`, `npm run dev`, `npm run build` (static output in `docs/`). Vite base is `/obsidian-templates/`.

## Method
Full prompt was read from the supplied design-library data.json HTML field, saved in SOURCE-PROMPT.html, and executed with React 18, Vite, TypeScript, Tailwind, GSAP ScrollTrigger and Framer Motion. All nine prescribed sections are present including a 3s monogram loader (skip button, skipped under reduced motion). Eight original fictional template directions have expanded native-dialog previews. Three illustrative packages and eight FAQ items have working interactions.

Original generated canvas contours and dust replace HLS background video; no video, hls.js, paid service or API key. Template artwork is original HTML/CSS geometry, not third-party imagery. No shipping raster images, hence no image-format/lazy-loading obligations. Fonts are self-hosted via Fontsource: Geist, Geist Mono and Instrument Serif (SIL Open Font License; package distributions contain license texts).

All prices, template concepts and testimonial quotes are explicitly illustrative. There is no checkout or personal-data collection.

## Verification
`npm run build` performs TypeScript validation and production bundling. `node verify.mjs [URL]` uses installed headless Microsoft Edge to test 1440/390 layouts, eight previews/FAQ count, preview Escape behavior, FAQ opening, package state, mobile menu and reduced motion. Screenshots are saved locally under `.impeccable/review/` (not published).

Impeccable context and detector ran. Detector returned three font-style warnings (Geist, Instrument Serif, Geist Mono), all retained because the user explicitly requires them. It warned that the root-relative production CSS URL is not locally resolvable by its HTML parser; the same invocation also scanned actual source CSS and TSX directly. Real UI metadata legibility and an aria-controls relationship were corrected. The supplied guide wins where it prescribes eyebrows, glass, neon, and the FAQ left edge.

Review and documentation were performed inline because this researcher's operating instructions prohibit further delegation. PRODUCT.md was inferred from the explicit assigned brief, without a separate interview. DESIGN.md and .impeccable/design.json document the shipped system.

## Lighthouse follow-up (2026-11-09)
Live-site Lighthouse 13.6.0 with headless Edge: mobile performance 95, accessibility 100, best practices 100, LCP 1.099s, CLS 0.00460; desktop performance 100, accessibility 100, best practices 100, LCP 0.931s, CLS 0.00573. Both measured budgets pass (LCP <2.5s, CLS <0.05). The specified 3-second intro still delays normal-motion presentation; laboratory LCP is not equivalent to intro completion. Lighthouse's LCP node was the hero's italic headline. Remaining advisories concern main-thread work, render-blocking CSS and GitHub Pages cache policy.

The supplied original sections 05–13 were cross-checked. Marquee now uses exact guide text `BUILT WITH AI · NOT BY AI`, with verified pause-on-hover. Mobile hover transforms are disabled. Lighthouse findings on accessible names and marquee ARIA were fixed, and a missing favicon was supplied. Run `node --no-use-env-proxy lighthouse-check.mjs` to reproduce on this proxy-configured host. Full local JSON reports live in `.impeccable/review/`. The public summary is PERFORMANCE.md.
