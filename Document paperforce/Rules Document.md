Rules Document
Paperforce India LLP – AI Development Rules & Boundaries
This document defines the rules, constraints, coding standards, approved libraries, error-handling strategy, and AI boundaries for developing the Paperforce India corporate website.

1. Project Philosophy
The website must represent Paperforce India as a premium global manufacturer, not a generic stationery seller.
Every design and development decision should prioritize:
Simplicity
Performance
Accessibility
Scalability
SEO
Maintainability
Reusability
Premium user experience

2. AI Responsibilities
The AI should:
✅ Build reusable components
✅ Write clean TypeScript
✅ Follow App Router architecture
✅ Optimize performance
✅ Follow accessibility standards
✅ Keep components modular
✅ Reuse existing UI
✅ Prefer Server Components
✅ Use semantic HTML
✅ Keep styling consistent

3. AI Must NOT
❌ Generate duplicate components
❌ Create inline CSS
❌ Use deprecated React APIs
❌ Use JavaScript when TypeScript is required
❌ Create hardcoded content inside components
❌ Ignore responsive design
❌ Install unnecessary packages
❌ Mix different styling systems
❌ Create components larger than necessary
❌ Ignore SEO
❌ Ignore accessibility
❌ Use "any" type unless unavoidable

4. Tech Stack Rules
Framework
Next.js 15
React 19
TypeScript
Only use App Router.
Do NOT use Pages Router.

Styling
Allowed
Tailwind CSS
CSS Modules (only if absolutely necessary)
Avoid
Bootstrap
Material UI
Chakra UI
Ant Design
Inline styles

Animations
Allowed
Framer Motion
GSAP (only for complex scroll interactions)
Lenis
Avoid
Anime.js
WOW.js
jQuery animations

Icons
Allowed
Lucide React
Avoid
Font Awesome
Bootstrap Icons
Random SVG libraries

Forms
Allowed
React Hook Form
Zod
Avoid
Manual form validation

Images
Use
next/image
Never use
<img>
unless absolutely required.

Fonts
Use
next/font
Never import fonts manually.

5. Component Rules
Every component should
Have one responsibility
Be reusable
Be typed
Accept props
Avoid duplicated logic
Maximum recommended size
≈200 lines
Split larger components.

Naming
Good
Hero.tsx

ProductCard.tsx

Timeline.tsx

CTASection.tsx
Avoid
NewComponent.tsx

Test.tsx

Demo.tsx

6. Folder Rules
Keep everything inside its correct folder.
Never place:
Business logic inside UI
API calls inside components
Utilities inside pages
Components inside app

7. Server vs Client Rules
Default
Server Component
Use Client Components only when needed.
Examples
Need animation
→ Client
Need state
→ Client
Need useEffect
→ Client
Need click handlers
→ Client
Static content
→ Server
SEO pages
→ Server

8. State Management
Preferred order
URL State
React State
Context API
Avoid global state unless necessary.
Do NOT install Redux unless explicitly required.

9. API Rules
Always
Validate input
Sanitize data
Return proper status codes
Use try/catch
Return meaningful errors
Never expose secrets.

10. Error Handling
Every async operation must include
try

↓

catch

↓

log error

↓

return user-friendly message
Never
Crash the page
Expose stack traces
Return raw errors

User messages
Good
"Something went wrong. Please try again."
Bad
TypeError:
Cannot read property...

11. Form Validation
Use
Zod
React Hook Form
Validate
Email
Phone
Required fields
Message length
Company name
Country

12. SEO Rules
Every page must include
Title
Description
Open Graph
Twitter Card
Canonical URL
Structured Data
Robots
Sitemap
Proper headings

Never skip metadata.

13. Accessibility Rules
Always
Use semantic HTML
Keyboard navigation
Alt text
Visible focus states
Proper labels
ARIA only when necessary
Meet WCAG AA contrast standards

14. Performance Rules
Always
Use next/image
Lazy load media
Optimize fonts
Split heavy components
Use dynamic imports
Minimize client-side JavaScript

Avoid unnecessary re-renders.

15. Animation Rules
Animations should
Be subtle
Support the content
Run at ~60 FPS
Respect reduced-motion preferences
Avoid long delays and excessive motion.

16. Responsive Rules
Design mobile-first.
Support
Mobile
Tablet
Laptop
Desktop
Large screens
No horizontal scrolling.

17. Reusable UI Rules
Create reusable components for
Buttons
Cards
Inputs
Badges
Timeline
Section titles
Containers
Icons
CTA sections
Statistics
Avoid repeating identical markup.

18. Content Rules
Keep content separate from components.
Store
Products
Company information
Markets
Blog posts
Metadata
in dedicated data or CMS files.
Do not hardcode copy into UI components.

19. Security Rules
Never expose
API keys
Tokens
Environment variables
Passwords
Validate and sanitize all user input.
Protect forms against spam (e.g., Cloudflare Turnstile or reCAPTCHA).

20. Logging Rules
Log detailed errors on the server.
Show simple, user-friendly messages on the client.
Never expose internal implementation details in production.

21. Testing Rules
Test
Navigation
Forms
Responsive layouts
SEO metadata
Accessibility
Animations
Performance
Cross-browser compatibility

22. Code Quality Rules
Use
ESLint
Prettier
Strict TypeScript
Consistent imports
Avoid dead code.

23. Git Rules
Branch naming
feature/homepage
feature/products
feature/contact
fix/navbar
refactor/animations
Commit format
feat: add products page
fix: resolve mobile navigation
refactor: simplify hero component
docs: update README

24. Libraries Allowed
Core
Next.js
React
TypeScript
Styling
Tailwind CSS
clsx
tailwind-merge
Animation
Framer Motion
GSAP
Lenis
Forms
React Hook Form
Zod
Icons
Lucide React
Utilities
date-fns
class-variance-authority (CVA)
Email
Resend
CMS
Sanity CMS (preferred)
Analytics
Google Analytics 4
Google Search Console
Microsoft Clarity

25. Libraries to Avoid
jQuery
Bootstrap
Material UI
Chakra UI
Ant Design
Redux (unless project scope expands)
Moment.js (prefer date-fns)
Lodash (unless a specific utility is genuinely required)

26. AI Decision Boundaries
The AI may:
Refactor code without changing behavior.
Create reusable components.
Improve performance.
Improve accessibility.
Optimize SEO.
Fix bugs while preserving functionality.
The AI must not:
Change branding, colors, typography, or visual identity without explicit instruction.
Modify business logic or project requirements.
Introduce new dependencies without justification.
Store secrets in the codebase.
Remove existing functionality unless requested.
Invent company data, certifications, statistics, addresses, or contact details not provided in the project documentation.
Replace approved content with placeholder or fabricated information.

27. Definition of Done (DoD)
A feature is complete only when it:
Meets the approved design.
Is fully responsive.
Passes TypeScript, ESLint, and build checks.
Includes SEO metadata where applicable.
Meets accessibility requirements.
Handles loading, empty, and error states.
Is optimized for performance.
Uses reusable components where appropriate.
Has no console errors or warnings.
Is reviewed and ready for production deployment.
