# Products Page Premium Redesign Tasks

## Data Architecture
- [ ] Refactor `src/components/products/data.ts`
  - Remove specific category hardcoding.
  - Implement 9 generic data-driven collections (`Set_01` to `Set_09`).
  - Add `coverImage`, `galleryImages`, and specifications to each.

## Products Main Page (`src/app/products/page.tsx`)
- [ ] Remove filter navigation and old grid layout entirely.
- [ ] Implement Hero Section with cinematic typography.
- [ ] Implement Product Philosophy split layout.
- [ ] Implement Editorial Collection Showcase (9 unique layouts).
- [ ] Implement Paper Packaging section.
- [ ] Implement OEM & Private Label capabilities section.
- [ ] Implement Quality Assurance Process section.
- [ ] Implement Catalogue Downloads cards.
- [ ] Implement Final CTA block.

## Dedicated Collection Route (`src/app/products/[id]`)
- [ ] Refactor `collection-view.tsx` into a storytelling layout instead of a gallery.
- [ ] Add Large Hero Image for the collection.
- [ ] Add Collection Overview text block.
- [ ] Build high-performance horizontal Product Gallery (Next.js Image, lazy-load).
- [ ] Create elegant Technical Specifications blocks (no tables).
- [ ] Add OEM & Private Label capabilities module.
- [ ] Add Packaging and Export readiness sections.
- [ ] Add Download Catalogue and Request Quote actions.

## Performance & Motion Audit
- [ ] Verify `next/image` usage everywhere.
- [ ] Strip heavy `framer-motion` layout animations.
- [ ] Test scrolling frame rate and lazy loading.
