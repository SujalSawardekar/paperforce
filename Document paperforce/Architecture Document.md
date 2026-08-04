Architecture Document
Paperforce India LLP Corporate Website
The architecture below is based on the project scope described in the website content draft (Home, About, Products, Reach/Markets, Blog, Contact) and is designed to support a scalable, SEO-focused B2B corporate website. 

1. High-Level Architecture


2. User Flow


3. Web Application Architecture


4. Application Layers








5. Folder Structure

6. Component Architecture






7. Page Architecture


8. Data Flow



9. Tech Stack
Frontend
Next.js 15 (App Router) 
React 19 
TypeScript 
Tailwind CSS 
Framer Motion 
GSAP (for advanced scroll storytelling where needed) 
Lenis (smooth scrolling) 
Lucide Icons 

Backend
Next.js Server Actions 
Route Handlers 
Node.js Runtime 

CMS
Choose one:
Sanity CMS (Recommended) 
Contentful 
Strapi 
Payload CMS 

Forms
React Hook Form 
Zod Validation 

Email
Resend 
Nodemailer (SMTP fallback) 

Database (Optional)
For future dynamic features:
PostgreSQL 
Prisma ORM 
The current project scope can operate without a database if content is managed through a CMS and form submissions are handled via email.

Storage
Vercel Blob 
Cloudinary (images/videos) 

Maps
Google Maps Embed 

Analytics
Google Analytics 4 
Google Search Console 
Microsoft Clarity 

SEO
Dynamic Metadata 
Open Graph 
Twitter Cards 
JSON-LD Schema 
XML Sitemap 
Robots.txt 

Deployment
Vercel (Recommended) 
Cloudflare CDN 
GitHub Actions (CI/CD) 

10. Security
HTTPS 
CSP Headers 
Rate Limiting (contact form) 
Bot Protection (Cloudflare Turnstile or reCAPTCHA) 
Input Validation 
Secure Environment Variables 
Secure Email API 

11. Performance Strategy
Server Components by default 
Image optimization with next/image 
Lazy loading for media 
Dynamic imports for heavy sections (e.g., maps, animations) 
Font optimization 
Code splitting 
Incremental Static Regeneration (ISR) for blog content 

12. Scalability Roadmap
Phase 1 (MVP)
Corporate website 
Products 
About 
Markets 
Blog 
Contact 
SEO 
Lead generation 
Phase 2
Product catalogue downloads 
Sample request workflow 
CMS dashboard enhancements 
Multi-language support 
Phase 3
Dealer portal 
Customer login 
CRM integration 
ERP integration 
Shipment tracking 
Analytics dashboard 
This architecture is intentionally modular so new pages and business capabilities can be added without restructuring the application. It also aligns with the six-page site structure and B2B lead-generation goals defined in the supplied project documentation
