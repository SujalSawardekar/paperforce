# Paperforce India — Master Recovery Plan

## Background

This is a full restoration task. The site has drifted from the approved design system due to repeated edits. The goal is to restore it to a premium B2B manufacturing website following the project documents exactly.

---

## Critical Issues Found

### 1. Typography — WRONG
| Current | Required (Design System §5 + User) |
|---------|--------------------------------------|
| `Fraunces` (Google Fonts serif) | **Recoleta** for headings |
| `Poppins` | **Poppins** ✅ (already correct for body) |
| `font-serif` utility uses Fraunces | Must map `font-serif` → Recoleta via `@font-face` |

**Solution**: Load Recoleta via `@font-face` from a CDN (Bunny Fonts / Google-compatible) or self-host. Recoleta is not on Google Fonts — use the closest available: `Playfair Display` as a temporary fallback with a note, OR load via `@font-face` from a CDN.

> **IMPORTANT**: The user explicitly said "Recoleta" for headings. Recoleta is available via Bunny Fonts CDN. We will add it via `@import` in globals.css and map `--font-serif` to it.

### 2. Colors — PARTIAL FIX (previous session fixed #1E3261, but dark mode is inverted)
The dark mode CSS variables make the site look dark/inverted as default. Must:
- Force `defaultTheme="light"` in ThemeProvider (already done ✅)
- Remove dark-mode inverted backgrounds from dark `globals.css` variables
- The `.dark` block in globals.css set `--background: 225 53% 8%` (very dark) — should be light only since site is light-mode by default

### 3. Homepage Sections — Need Cleanup
Per user instructions:
- **COMMENT OUT**: ManufacturingSection (Manufacturing Excellence)
- **COMMENT OUT**: Image after Hero (hero-mockup — already 54 bytes/empty)
- **KEEP GlobalReachSection** but move it to Markets page (comment out from homepage)
- **ADD**: FAQ section back to homepage
- **Re-order**: Hero → Corporate Profile → Sourcing Advantages → Products → Industries → Why Choose → FAQ → Blog → CTA

### 4. CorporateProfile — Enrich content
Add manufacturing capability info naturally within existing design (not a redesign)

### 5. Markets Page — Needs GlobalReachSection
Add the `GlobalReachSection` component to `/reach-markets/page.tsx` and build it out fully

### 6. All pages need color sweep
Replace remaining `#0b1c3f` references with `#1E3261` everywhere

---

## Files to Modify

### Phase 1: Foundation (Typography + Colors)

#### [MODIFY] `src/app/globals.css`
- Add Recoleta font via `@font-face` from Bunny Fonts CDN
- Update `--font-serif` to use Recoleta
- Fix dark mode not being inverted (site stays light)
- Add utility classes: `.section-eyebrow`, `.section-title`, `.section-body`

#### [MODIFY] `src/app/layout.tsx`
- Remove `Fraunces` import from next/font/google
- Keep `Poppins`
- Apply Recoleta from globals.css
- Fix body class names

---

### Phase 2: Homepage Restructure

#### [MODIFY] `src/app/page.tsx`
- Comment out `<ManufacturingSection />` 
- Comment out `<GlobalReachSection />` (moved to markets)
- Add `<FaqSection />` (per content draft)
- Fix section order: Hero → CorporateProfile → SourcingAdvantages → Products → Industries → WhyChoose → FAQ → Blog → CTA
- Add Trust Strip after hero (4 stat tiles from content draft)

---

### Phase 3: Component Fixes

#### [MODIFY] `src/components/home/corporate-profile-section.tsx`
- Enrich copy with manufacturing capability info
- Keep exact same design/layout

#### [MODIFY] `src/components/home/faq-section.tsx`
- Build out full FAQ section with Q&A from content draft
- Add proper container and section header

#### [MODIFY] `src/components/home/why-choose-section.tsx`
- Already has 4 correct value props ✅
- Only fix: cleanup any remaining non-brand colors

#### [MODIFY] `src/components/ui/button.tsx`
- Verify correct #1E3261 and proper hover animations
- Ensure consistent across all pages

---

### Phase 4: Markets Page

#### [MODIFY] `src/app/reach-markets/page.tsx`
- Add `<GlobalReachSection />` component
- Build proper markets page structure per content draft

---

### Phase 5: About Page Brand Consistency

#### [MODIFY] `src/app/about/about-mission-vision.tsx`
- Change dark `bg-[#0b1c3f]` background to `bg-[#1E3261]` ✅

#### Sweep all about/*.tsx files for `#0b1c3f`

---

### Phase 6: Contact Page
- Sweep for brand color fixes
- Verify form, typography, spacing

---

## Verification Plan
1. `npm run build` — 0 errors
2. Visual check all pages
3. Verify Recoleta loads on headings
4. Verify no dark/inverted sections unless intentional (footer, CTA)
5. Verify GlobalReachSection appears on /reach-markets, NOT on homepage

---

## Open Items

> [!IMPORTANT]
> **Recoleta Font**: Recoleta is a commercial/web font not on Google Fonts. Options:
> 1. Self-host font files if the user has a license (best)
> 2. Use Bunny Fonts CDN which hosts Recoleta
> 3. Use `Playfair Display` as a close alternative available on Google Fonts
> 
> **Decision needed**: Does the project have Recoleta font files locally? Or should we use Bunny Fonts CDN?

