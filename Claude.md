# CLAUDE.md — Jason Salazar Link Page

## What This Is

A single-page link-in-bio site. One screen. Profile photo, name, and a clean stack of tappable links. That's it. No sections, no paragraphs of text, no service descriptions. Think Linktree but way better looking.

**Stack:** Next.js 14 (App Router) + Tailwind CSS + Framer Motion
**Deploy:** Vercel

---

## Design

Dark theme. Clean. Premium but simple.

- **Background:** Near-black (#0a0a0a) with a very subtle animated gradient glow behind the content — slow-moving, barely noticeable color shifts (blue and gold tones). Atmospheric, not distracting.
- **Card area:** Everything centered in a single column, max-width ~450px. No sidebars, no grid layouts.
- **Colors:** Dark background, white/light text, accent glow on hover using electric blue (#3b82f6) or warm gold (#c9a84c)
- **Font:** One clean, modern font — nothing generic. Try Syne, Outfit, or Cabinet Grotesk via `next/font/google`. Use it for everything.

### The Page (top to bottom)

```
        [Profile Photo]          ← circular, ~120px, subtle glow ring
        Jason Salazar            ← bold, large
   Builder · Developer · Educator  ← small, muted text

   ┌──────────────────────────┐
   │  🎓  Zero to Agents      │  ← link button
   └──────────────────────────┘
   ┌──────────────────────────┐
   │  💼  My Portfolio         │
   └──────────────────────────┘
   ┌──────────────────────────┐
   │  🛒  Amazon Finds         │
   └──────────────────────────┘
   ┌──────────────────────────┐
   │  🛍️  My Etsy Shop         │
   └──────────────────────────┘
   ┌──────────────────────────┐
   │  📺  YouTube              │
   └──────────────────────────┘

      [X] [YT] [GitHub] [Email]   ← small icon row at the bottom
```

That's the entire page. Nothing else.

### Link Buttons

- Full-width within the container, rounded corners, glass-morphism style (semi-transparent background with backdrop-blur and a faint border)
- On hover/tap: glow effect (soft colored box-shadow), slight scale-up, border brightens
- Staggered fade-in animation on page load (each button fades in 100ms after the previous)
- Each link has a small emoji or icon on the left and the label text

### What Makes It Better Than Linktree

1. **Animated gradient background** — subtle but gives it depth and life
2. **Glass-morphism link buttons** — not flat colored rectangles
3. **Hover glow effects** — each button lights up with a soft accent glow
4. **Smooth load animation** — profile fades in, then links cascade in one by one
5. **3D tilt on hover** (desktop only) — links subtly tilt toward the cursor
6. **Mobile-first** — looks and feels great on phones, which is where 90%+ of traffic will come from

---

## Links Data

Put all links in a single `lib/links.ts` file so Jason can easily add, remove, or reorder them:

```typescript
export const links = [
  {
    label: "Zero to Agents",
    url: "https://zerotoagents.vercel.app",
    emoji: "🎓",
  },
  { label: "My Portfolio", url: "#", emoji: "💼" },
  { label: "Amazon Finds", url: "#", emoji: "🛒" },
  { label: "My Etsy Shop", url: "#", emoji: "🛍️" },
  { label: "YouTube", url: "https://youtube.com/@zerotoagents", emoji: "📺" },
];

export const socials = [
  { name: "X", url: "https://x.com/zerotoagent" },
  { name: "YouTube", url: "https://youtube.com/@zerotoagents" },
  { name: "GitHub", url: "https://github.com/Jasonsal23" },
  { name: "Email", url: "mailto:jaysal2789@gmail.com" },
];

export const profile = {
  name: "Jason Salazar",
  tagline: "Builder · Developer · Educator",
  image: "/images/profile.jpg", // replace with real photo
};
```

To add a new link, Jason just adds one line to the array. To reorder, just move lines around. That's it.

---

## Profile Photo

Use a placeholder circle with "JS" initials. Jason will drop his real photo at `public/images/profile.jpg`.

---

## Technical Notes

- Single `page.tsx` — this is a one-page site, keep it simple
- All external links: `target="_blank"` + `rel="noopener noreferrer"`
- Mobile-first responsive — looks perfect at 375px width
- Reduced motion media query — respect user preferences
- Lighthouse 95+
- Page title: "Jason Salazar — Links"
- OG meta so the link previews nicely when shared

---

## Keep It Simple

Do NOT overcomplicate this. No multi-section scrolling page, no service descriptions, no project cards with paragraphs of text, no affiliate disclosures, no footers with copyright. Just the profile, the link stack, and the social icons. Clean, fast, done.
