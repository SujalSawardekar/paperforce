import { Metadata } from "next";
import { UnderConstruction } from "@/components/common/under-construction";
import { allArticles, getArticleBySlug, getRelatedArticles } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/container";
import { BlogCard } from "@/components/blog/blog-card";
import { ReadingProgress } from "@/components/blog/reading-progress";
import { BlogContactCta } from "@/components/blog/blog-contact-cta";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);
  if (!article) return {};

  return {
    title: article.seoTitle,
    description: article.seoDescription,
    openGraph: {
      title: article.seoTitle,
      description: article.seoDescription,
      type: "article",
      publishedTime: article.publishedDate,
      authors: ["Paperforce India"],
      images: [
        {
          url: article.coverImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.seoDescription,
      images: [article.coverImage],
    }
  };
}

export default async function ArticlePage({ params }: Props) {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);
  if (!article) notFound();
  
  if (true as boolean) {
    return <UnderConstruction pageName="Blog Article" />;
  }

  const relatedArticles = getRelatedArticles(article, 3);

  // Generate JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.seoTitle,
    "description": article.seoDescription,
    "image": [
      `https://www.paperforce.in${article.coverImage}`
    ],
    "datePublished": article.publishedDate,
    "author": [{
        "@type": "Organization",
        "name": "Paperforce India",
        "url": "https://www.paperforce.in"
    }]
  };

  return (
    <main className="w-full bg-white relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReadingProgress />

      {/* Hero Banner Area */}
      <div className="w-full bg-slate-50 pt-32 pb-16">
        <Container>
          <Link href="/blog" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-[#1E3261] mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to Blog
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm font-semibold uppercase tracking-wider text-slate-500">
              <span className="text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full">{article.category}</span>
              <span className="flex items-center gap-2"><Calendar size={16} /> {article.publishedDate}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              <span className="flex items-center gap-2"><Clock size={16} /> {article.readTime}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-[#1E3261] leading-[1.1] mb-8">
              {article.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
              {article.excerpt}
            </p>
          </div>
        </Container>
      </div>

      {/* Featured Image */}
      <Container className="relative -mt-8 mb-16 z-10">
        <div className="w-full aspect-[16/9] lg:aspect-[21/9] relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-100">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </Container>

      {/* Rich Text Content */}
      <Container className="mb-24">
        <div className="max-w-3xl mx-auto">
          {/* Note: In a real app with markdown, this would use a Markdown renderer like next-mdx-remote or react-markdown. We are using dangerouslySetInnerHTML for the mock HTML content. */}
          <article 
            className="prose prose-lg md:prose-xl prose-slate max-w-none prose-headings:font-serif prose-headings:font-bold prose-headings:text-[#1E3261] prose-a:text-blue-600 prose-blockquote:border-blue-600 prose-blockquote:bg-blue-50/50 prose-blockquote:py-2 prose-blockquote:rounded-r-xl"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          
          {/* Tags */}
          <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap gap-3">
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mr-4 py-2">Tags:</span>
            {article.tags.map(tag => (
              <span key={tag} className="bg-slate-50 text-slate-600 px-4 py-2 rounded-full text-sm font-medium border border-slate-100 hover:bg-slate-100 cursor-default transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Container>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-24 bg-slate-50 border-y border-slate-100">
          <Container>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1E3261] mb-4">Related Articles</h2>
                <p className="text-lg text-slate-600">Continue exploring our manufacturing insights.</p>
              </div>
              <Link href="/blog" className="inline-flex items-center font-bold text-[#1E3261] hover:text-blue-700 transition-colors">
                View all articles <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map(related => (
                <BlogCard key={related.id} post={related} imageClassName="aspect-[4/3]" />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Contact CTA */}
      <BlogContactCta />
      
    </main>
  );
}
