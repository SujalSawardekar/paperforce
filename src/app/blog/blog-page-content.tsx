"use client";

import * as React from "react";
import { BlogHero } from "@/components/blog/blog-hero";
import { FeaturedArticle } from "@/components/blog/featured-article";
import { BlogSearch } from "@/components/blog/blog-search";
import { TopicChips } from "@/components/blog/topic-chips";
import { EditorialGrid } from "@/components/blog/editorial-grid";
import { ResourcesSection } from "@/components/blog/resources-section";
import { KnowledgeTimeline } from "@/components/blog/knowledge-timeline";
import { NewsletterCta } from "@/components/blog/newsletter-cta";
import { BlogContactCta } from "@/components/blog/blog-contact-cta";
import { Container } from "@/components/common/container";
import { blogCategories, featuredArticle, latestArticles, blogResources, BlogPost } from "@/lib/blog-data";
import { useSearchParams } from "next/navigation";
import { BlogCard } from "@/components/blog/blog-card";

export function BlogPageContent() {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get('category');
  
  const [searchQuery, setSearchQuery] = React.useState("");
  
  // Filtering logic
  const filteredArticles = React.useMemo(() => {
    let result = latestArticles;
    
    if (categoryFilter) {
      result = result.filter(a => a.category.toLowerCase().replace(' ', '-') === categoryFilter);
    }
    
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(a => 
        a.title.toLowerCase().includes(q) || 
        a.category.toLowerCase().includes(q) ||
        a.tags.some(tag => tag.toLowerCase().includes(q))
      );
    }
    
    return result;
  }, [categoryFilter, searchQuery]);

  return (
    <main className="w-full bg-white">
      <BlogHero />
      
      <Container className="py-24">
        {/* Only show featured article if not searching/filtering heavily */}
        {!searchQuery && !categoryFilter && (
          <FeaturedArticle article={featuredArticle} />
        )}
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-t border-slate-200 pt-16">
          <div>
            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-[#1E3261]">
              {categoryFilter ? `${blogCategories.find(c => c.slug === categoryFilter)?.name} Articles` : 'Latest Articles'}
            </h2>
          </div>
          <BlogSearch onSearch={setSearchQuery} />
        </div>
        
        <TopicChips categories={blogCategories} activeCategory={categoryFilter || undefined} />
        
        {/* If user is searching or filtering, show standard grid instead of exact editorial layout so it doesn't break if articles < 9 */}
        {(searchQuery || categoryFilter) ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-24">
            {filteredArticles.length > 0 ? (
              filteredArticles.map(article => (
                <BlogCard key={article.id} post={article} imageClassName="aspect-[4/3]" />
              ))
            ) : (
              <div className="col-span-full py-24 text-center">
                <p className="text-xl text-slate-500">No articles found matching your criteria.</p>
              </div>
            )}
          </div>
        ) : (
          <EditorialGrid articles={latestArticles} />
        )}
      </Container>
      
      <ResourcesSection resources={blogResources} />
      
      <KnowledgeTimeline />
      
      <NewsletterCta />
      
      <BlogContactCta />
    </main>
  );
}
