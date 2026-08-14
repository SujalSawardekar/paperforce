export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML or Markdown for the rich text content
  category: string; // Maps to BlogCategory.name
  coverImage: string;
  publishedDate: string;
  readTime: string;
  seoTitle: string;
  seoDescription: string;
  featured: boolean;
  tags: string[];
}

export interface BlogResource {
  id: string;
  title: string;
  description: string;
  fileUrl: string;
  icon: 'document' | 'guide' | 'specs';
}

export const blogCategories: BlogCategory[] = [
  { id: "c1", name: "Manufacturing", slug: "manufacturing" },
  { id: "c2", name: "Export", slug: "export" },
  { id: "c3", name: "OEM", slug: "oem" },
  { id: "c4", name: "Private Label", slug: "private-label" },
  { id: "c5", name: "Quality", slug: "quality" },
  { id: "c6", name: "Stationery", slug: "stationery" },
  { id: "c7", name: "Industry News", slug: "industry-news" },
  { id: "c8", name: "Buying Guide", slug: "buying-guide" },
];

export const blogResources: BlogResource[] = [
  {
    id: "r1",
    title: "Export Buyer's Guide",
    description: "Comprehensive guide to global sourcing and shipping logistics.",
    fileUrl: "/PaperForce%20Catalogue.pdf",
    icon: "guide"
  },
  {
    id: "r2",
    title: "How OEM Notebook Manufacturing Works",
    description: "Step-by-step breakdown of private label production processes.",
    fileUrl: "/PaperForce%20Catalogue.pdf",
    icon: "specs"
  },
  {
    id: "r3",
    title: "Choosing Notebook GSM",
    description: "Technical paper standards and how they affect final product weight.",
    fileUrl: "/PaperForce%20Catalogue.pdf",
    icon: "document"
  },
  {
    id: "r4",
    title: "AQL Quality Standards Explained",
    description: "Learn how we inspect and assure premium export quality.",
    fileUrl: "/PaperForce%20Catalogue.pdf",
    icon: "guide"
  }
];

// Rich Text Mock Content
const sampleContent = `
  <p class="text-xl text-slate-600 mb-8 leading-relaxed">The global paper market is evolving rapidly. As wholesale buyers look for higher quality, sustainable materials, and rigorous manufacturing standards, understanding the nuances of notebook production is essential.</p>
  
  <h2 class="text-3xl font-serif font-bold text-[#1E3261] mt-12 mb-6">1. Paper GSM and Core Quality</h2>
  <p class="text-lg text-slate-600 mb-6 leading-relaxed">Grams per Square Meter (GSM) directly dictates the bleed-through resistance and weight of the final notebook. For premium export markets, 70 GSM and 80 GSM papers are standard, providing excellent opacity.</p>
  
  <blockquote class="border-l-4 border-blue-600 pl-6 my-10 italic text-2xl font-serif text-[#1E3261]">
    "Precision in paper cutting and ruling is not a luxury—it is the baseline requirement for any export-grade stationery product."
  </blockquote>
  
  <h2 class="text-3xl font-serif font-bold text-[#1E3261] mt-12 mb-6">2. Automated Binding Processes</h2>
  <p class="text-lg text-slate-600 mb-6 leading-relaxed">Automation ensures perfect alignment, strong spine integrity, and rapid production at scale. Centre-stitch, perfect binding, and twin-wire loop binding all require specialized machinery calibrated to exact specifications.</p>
  
  <p class="text-lg text-slate-600 mb-6 leading-relaxed">By partnering with an experienced manufacturer, you eliminate sourcing inconsistencies and ensure retail-ready products arrive in your destination ports.</p>
`;

export const featuredArticle: BlogPost = {
  id: "f1",
  slug: "global-export-trends-notebook-manufacturing",
  title: "Global Export Trends in Premium Notebook Manufacturing",
  excerpt: "Discover how advanced automation and rigorous AQL quality standards are reshaping the global export market for premium stationery.",
  content: sampleContent,
  category: "Export",
  coverImage: "/images/blog/featured-new.png",
  publishedDate: "October 12, 2026",
  readTime: "6 min read",
  seoTitle: "Global Export Trends in Notebook Manufacturing | Paperforce",
  seoDescription: "An in-depth look at automation and quality standards in the stationery export market.",
  featured: true,
  tags: ["Export", "Manufacturing", "Trends"]
};

// 9 articles for the specific editorial grid:
// 2 Medium, 1 Wide, 3 Compact, 1 Editorial Feature, 2 Offset
export const latestArticles: BlogPost[] = [
  {
    id: "a1",
    slug: "understanding-aql-quality-standards",
    title: "Understanding AQL Quality Standards in Mass Production",
    excerpt: "Why precision matters in every batch and how we maintain zero defect rates.",
    content: sampleContent,
    category: "Quality",
    coverImage: "/images/blog/medium-1.png",
    publishedDate: "October 08, 2026",
    readTime: "5 min read",
    seoTitle: "AQL Quality Standards in Manufacturing",
    seoDescription: "Learn about AQL quality standards in paper manufacturing.",
    featured: false,
    tags: ["Quality Control", "Manufacturing"]
  },
  {
    id: "a2",
    slug: "oem-private-label-guide",
    title: "The Ultimate Guide to OEM & Private Label Stationery",
    excerpt: "Everything you need to know about building your own notebook brand with our manufacturing capabilities.",
    content: sampleContent,
    category: "OEM",
    coverImage: "/images/blog/medium-2.png",
    publishedDate: "October 05, 2026",
    readTime: "8 min read",
    seoTitle: "OEM & Private Label Stationery Guide",
    seoDescription: "The complete guide to private label manufacturing.",
    featured: false,
    tags: ["OEM", "Branding"]
  },
  {
    id: "a3",
    slug: "sustainable-paper-sourcing",
    title: "Sustainable Paper Sourcing for Global Export",
    excerpt: "How environmentally conscious raw materials are driving the future of B2B stationery sourcing.",
    content: sampleContent,
    category: "Manufacturing",
    coverImage: "/images/blog/wide-1.png",
    publishedDate: "October 02, 2026",
    readTime: "4 min read",
    seoTitle: "Sustainable Paper Sourcing",
    seoDescription: "Sustainable paper sourcing in the global market.",
    featured: false,
    tags: ["Sustainability", "Raw Materials"]
  },
  {
    id: "a4",
    slug: "container-loading-optimization",
    title: "Container Loading Optimization",
    excerpt: "Maximizing volume and protecting cargo during global sea freight.",
    content: sampleContent,
    category: "Export",
    coverImage: "/images/blog/compact-1.png",
    publishedDate: "September 28, 2026",
    readTime: "3 min read",
    seoTitle: "Container Loading Optimization",
    seoDescription: "Export logistics and container loading.",
    featured: false,
    tags: ["Logistics", "Export"]
  },
  {
    id: "a5",
    slug: "choosing-right-binding",
    title: "Choosing the Right Binding",
    excerpt: "Spiral, perfect bound, or stitched: what works best for your market?",
    content: sampleContent,
    category: "Stationery",
    coverImage: "/images/blog/compact-2.png",
    publishedDate: "September 25, 2026",
    readTime: "4 min read",
    seoTitle: "Choosing Notebook Binding",
    seoDescription: "A guide to notebook binding methods.",
    featured: false,
    tags: ["Design", "Binding"]
  },
  {
    id: "a6",
    slug: "fsc-certification-importance",
    title: "The Importance of FSC Certification",
    excerpt: "Why modern distributors require certified supply chains.",
    content: sampleContent,
    category: "Industry News",
    coverImage: "/images/blog/compact-3.png",
    publishedDate: "September 20, 2026",
    readTime: "5 min read",
    seoTitle: "FSC Certification Importance",
    seoDescription: "Understanding FSC certification in paper.",
    featured: false,
    tags: ["Certifications", "Sustainability"]
  },
  {
    id: "a7",
    slug: "future-of-automated-printing",
    title: "The Future of Automated Flexo Printing in Mass Production",
    excerpt: "Step inside our facility to see how advanced flexo technology delivers flawless ruling precision at 500 meters per minute.",
    content: sampleContent,
    category: "Manufacturing",
    coverImage: "/images/blog/editorial-1.png",
    publishedDate: "September 15, 2026",
    readTime: "7 min read",
    seoTitle: "Automated Flexo Printing",
    seoDescription: "Advanced flexo printing technology for notebooks.",
    featured: false,
    tags: ["Machinery", "Printing"]
  },
  {
    id: "a8",
    slug: "evaluating-factory-capacity",
    title: "Evaluating Factory Capacity",
    excerpt: "How to audit a supplier's true volume capabilities before ordering.",
    content: sampleContent,
    category: "Buying Guide",
    coverImage: "/images/blog/offset-1.png",
    publishedDate: "September 10, 2026",
    readTime: "6 min read",
    seoTitle: "Evaluating Factory Capacity",
    seoDescription: "Auditing factory volume capabilities.",
    featured: false,
    tags: ["Sourcing", "Capacity"]
  },
  {
    id: "a9",
    slug: "custom-cover-finishes",
    title: "Premium Cover Finishes",
    excerpt: "UV, Foil, and Embossing: Elevating private label aesthetics.",
    content: sampleContent,
    category: "Private Label",
    coverImage: "/images/blog/offset-2.png",
    publishedDate: "September 05, 2026",
    readTime: "3 min read",
    seoTitle: "Premium Cover Finishes",
    seoDescription: "Cover finishes for private label stationery.",
    featured: false,
    tags: ["Design", "Finishes"]
  }
];

export const allArticles = [featuredArticle, ...latestArticles];

export function getArticleBySlug(slug: string): BlogPost | undefined {
  return allArticles.find(a => a.slug === slug);
}

export function getRelatedArticles(currentArticle: BlogPost, limit: number = 3): BlogPost[] {
  // Match by category or tags, exclude current
  const related = allArticles.filter(a => {
    if (a.id === currentArticle.id) return false;
    if (a.category === currentArticle.category) return true;
    return a.tags.some(tag => currentArticle.tags.includes(tag));
  });
  
  // Fill with latest if not enough related
  if (related.length < limit) {
    const remaining = allArticles.filter(a => a.id !== currentArticle.id && !related.find(r => r.id === a.id));
    return [...related, ...remaining].slice(0, limit);
  }
  
  return related.slice(0, limit);
}
