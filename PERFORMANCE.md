# Lighthouse results — 2026-11-09

Audited live URL: https://raj-microsoft.github.io/obsidian-templates/
Lighthouse 13.6.0; installed Microsoft Edge, headless; default mobile and desktop presets; production bundle `index-Dcgu9-kb.js` verified live before audit.

| Preset | Performance | Accessibility | Best practices | LCP | CLS | TBT |
|---|---:|---:|---:|---:|---:|---:|
| Mobile | 95 | 100 | 100 | 1.099 s | 0.00460 | 59 ms |
| Desktop | 100 | 100 | 100 | 0.931 s | 0.00573 | 0 ms |

Both measured guide budgets pass: LCP <2.5 seconds, CLS <0.05. Results vary with network/CPU. The deliberate three-second loader still delays normal-motion presentation; these lab measurements do not measure the intro-completion time. Lighthouse identifies the hero italic headline as LCP.

Remaining advisory opportunities: main-thread work (canvas/animation), render-blocking CSS, and GitHub Pages cache lifetimes. No accessibility or best-practices failures in this run.

Fixed from first audit: marquee div required a semantic role for its aria-label; preview buttons now derive accessible names from visible content; supplied SVG favicon eliminates 404. Original prompt sections 05–13 cross-checked. Exact guide marquee verified pausing on hover. Mobile hover transforms simplified.

Reproduce: `node --no-use-env-proxy lighthouse-check.mjs`. Reports: `.impeccable/review/lighthouse-mobile.json` and `lighthouse-desktop.json` (local, gitignored). Review output includes computed metrics and failing audit IDs.
