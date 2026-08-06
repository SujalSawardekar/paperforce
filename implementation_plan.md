# Architecture Revision: Premium Editorial Catalogue

## 1. Data Architecture
- **Independent Collections**: Do not map Set_01–Set_09 to 6 product categories. The image sets are independent collections.
- **Completely Data-Driven**: The system will be built dynamically.
- **Collection Structure**: Each collection will strictly contain:
  - id
  - title
  - description
  - coverImage
  - galleryImages
  - specifications
- **Temporary Naming**: We will use `Set_01`–`Set_09`. We will not assume which set belongs to Exercise Books, Spiral Bound, etc.

## 2. Navigation & Filtering
- **Remove Filters**: The category filter (All, Exercise Books, Spiral, etc.) will be removed completely. This is a B2B catalogue, not an e-commerce website.
- **Natural Flow**: All collections will be displayed naturally within the page structure.

## 3. Dedicated Collection Pages (`/products/[id]`)
- **No Overlays**: We will not build or use a CollectionModal.
- **Dedicated Route**: Each collection will open its own dedicated page (`/products/[id]`). This provides a premium experience, improves SEO, allows richer storytelling, and avoids overlay limitations.
- **Detail Page Structure**:
  - Large hero image
  - Collection overview
  - Horizontal gallery
  - Product specifications (Available sizes, Paper GSM, Binding options, Packaging, OEM / Private Label)
  - Downloads (Catalogue)
  - Request Quote CTA

## 4. Editorial Magazine Layout
- **No Repetitive Grids**: The basic card grid will be replaced. We will not use repetitive equal-sized cards.
- **Visual Hierarchy**: We will create an editorial magazine-style layout.
- **Page Flow**:
  1. Hero
  2. Product Philosophy
  3. Featured Collection
  4. Editorial Collection Showcase (9 collections)
  5. Paper Packaging
  6. OEM & Private Label
  7. Quality Assurance Process
  8. Catalogue Downloads
  9. Final CTA
- *Every section will have a unique layout.*

## 5. Performance Improvements
- Focus on performance first to eliminate lag:
  - Use Next.js Image for all images.
  - Lazy-load all gallery images.
  - Optimize assets (WebP/AVIF).
  - Minimize client-side state.
  - Use lightweight reveal animations only.
  - Ensure smooth scrolling at 60 FPS.

## 6. Premium Design Direction
- The UI will be completely stripped of generic React/e-commerce/retail templates.
- **Inspiration**: Apple, Herman Miller, Porsche, Nothing, Stripe, Linear.
- **Avoid**: Retail UI, Marketplace layouts, Shopping interactions, Generic card grids, Template-like sections.
- **Core Objective**: Immediately communicate that Paperforce India is a premium notebook manufacturer for global importers, distributors, wholesalers, and OEM buyers—not an online store.
