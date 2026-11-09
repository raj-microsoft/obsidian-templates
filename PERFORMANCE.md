# Lighthouse results — photoreal pass, 2026-11-09

Audited live URL: https://raj-microsoft.github.io/obsidian-templates/
Lighthouse 13.6.0; installed Microsoft Edge, headless; default mobile and desktop presets; production bundle `index-CuB187id.js` verified live before audit.

| Preset | Performance | Accessibility | Best practices | LCP | CLS | TBT |
|---|---:|---:|---:|---:|---:|---:|
| Mobile | 100 | 100 | 100 | 1.081 s | 0.00460 | 3 ms |
| Desktop | 100 | 100 | 100 | 1.234 s | 0.00582 | 75 ms |

Both guide budgets pass: LCP <2.5 seconds, CLS <0.05. Lab results vary with CPU/network. The prescribed three-second monogram loader is retained; these metrics do not represent intro-completion time.

Poster is preloaded responsively (29.9 KB mobile / 64.1 KB desktop). Video source is assigned only after window load plus 800ms, plain H.264 loop (32.9 KB mobile / 76.6 KB desktop). Reduced-motion uses the still and skips loader/animation. Eight 16:10 photographic previews and three method images use WebP srcset, lazy loading, explicit dimensions. All 24 WebP variants total 611,822 bytes; both videos bring the media inventory to 721,295 bytes, not a single-page transfer size.

Remaining advisory opportunities: GitHub Pages cache lifetimes, additional image-size tuning, render-blocking CSS. No accessibility/best-practices failures in final run. Motion button accessible name was aligned with its visible label after the initial audit.

Live verification: headless Edge at 390 and 1440 widths; screenshots inspected; no horizontal overflow or JavaScript errors; 8 previews and 8 FAQ items, dialog Escape, mobile menu, package comparison and reduced-motion behavior tested. All 12 images decoded, video played with readyState 4, no HTTP failures. Both external links (Hyliox source prompt and public GitHub repository) returned HTTP 200.

Reproduce: `node --no-use-env-proxy lighthouse-check.mjs`, `node --no-use-env-proxy verify.mjs https://raj-microsoft.github.io/obsidian-templates/`, and `node --no-use-env-proxy photoreal-check.mjs https://raj-microsoft.github.io/obsidian-templates/`. Reports/screenshots: `.impeccable/review/` (gitignored). Asset provenance and Veo upload-failure fallback: PHOTOREAL.md.
