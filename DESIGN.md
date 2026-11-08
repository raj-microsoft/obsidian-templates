---
name: OBSIDIAN/LIME
description: A cinematic, independent template studio concept.
colors:
  primary: "#D4FF4F"
  neutral-bg: "#0A0A0A"
  text: "#FAFAFA"
  text-secondary: "rgba(250,250,250,0.64)"
  surface: "rgba(255,255,255,0.03)"
  border: "rgba(255,255,255,0.06)"
typography:
  display:
    fontFamily: "Instrument Serif, serif"
    fontSize: "clamp(48px, 7vw, 88px)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Geist, sans-serif"
    fontSize: "clamp(36px, 5vw, 64px)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Geist, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Geist Mono, monospace"
    fontSize: "13px"
    lineHeight: 1.7
rounded:
  control: "8px"
  surface: "16px"
spacing:
  grid: "24px"
  section: "clamp(80px, 10vw, 160px)"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.control}"
    padding: "17px 26px"
    height: "56px"
  button-ghost:
    backgroundColor: "rgba(255,255,255,0.04)"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    padding: "17px 26px"
---
# Design System: OBSIDIAN/LIME

## Overview
The user-pinned Horyx Studio system: dark cinematic framing, bright purposeful actions and expressive italic display type. Original template previews carry their own visual identities within the consistent studio shell.

## Colors
Acid Lime carries primary actions, focus and selected borders. Obsidian is the page field. Warm white and its translucent secondary token provide a restrained hierarchy with readable contrast.

## Typography
Geist is the functional face, Instrument Serif italic the display voice, and Geist Mono identifies catalog metadata. Body text remains 16px with 1.6 line height; compact UI labels use at least 11–13px. Miniature site artwork is decorative, with accessible descriptions and large external titles.

## Layout
1280px content width plus 24px container padding. Twelve-column collection with 4/6/8-column tiles, 24px gaps and 16:10 thumbnails. At 700px and below, columns stack. Desktop method heading pins at 100px; mobile keeps natural document flow.

## Elevation & Depth
Glass surfaces use backdrop blur with subtle translucent fill. A restrained lime ambient shadow identifies the middle package, as required by the guide. The hero's original contour canvas provides actual motion, not a video imitation.

## Shapes
Surface corners use 16px radii, controls 8px, small directional controls circles. Thin separators define hierarchy without boxing every paragraph.

## Components
Buttons scale to 1.02; template cards lift 6px. Focus uses a 2px lime outline with 5px offset. FAQ opens with a 300ms height/opacity transition and 2px lime left edge. Native dialog provides protected preview focus and Escape dismissal. Three-second loader has a skip control. Reduced-motion mode skips the loader and stops canvas/marquee/scroll motion.

## Do's and Don'ts
- Do retain explicit illustrative labels for packages, template concepts and testimonial quotes.
- Do keep underlying page content visible if motion does not run.
- Do follow the guide's fonts and palette even when style heuristics object.
- Don't introduce real checkout or unverified customer claims.
- Don't convert miniature decorative artwork into essential unreadable text.
