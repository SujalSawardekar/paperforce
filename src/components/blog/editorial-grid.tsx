import { BlogPost } from "@/lib/blog-data";
import { BlogCard } from "./blog-card";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight } from "lucide-react";

interface EditorialGridProps {
  articles: BlogPost[];
}

export function EditorialGrid({ articles }: EditorialGridProps) {
  // We expect at least 9 articles for the full layout. If less, we map what we have gracefully, but the design is optimized for this exact 9-piece sequence.
  
  const [
    medium1, medium2, 
    wide1, 
    compact1, compact2, compact3, 
    editorial1, 
    offset1, offset2
  ] = articles;

  return (
    <div className="w-full flex flex-col gap-24 my-24">
      
      {/* 1. Two Medium */}
      {(medium1 || medium2) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {medium1 && (
            <BlogCard 
              post={medium1} 
              imageClassName="aspect-[4/3]" 
              titleClassName="text-2xl lg:text-3xl"
            />
          )}
          {medium2 && (
            <BlogCard 
              post={medium2} 
              imageClassName="aspect-[4/3]" 
              titleClassName="text-2xl lg:text-3xl"
            />
          )}
        </div>
      )}

      {/* 2. Wide Banner */}
      {wide1 && (
        <Link href={`/blog/${wide1.slug}`} className="group relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden flex items-end p-8 lg:p-16">
          <Image 
            src={wide1.coverImage} 
            alt={wide1.title} 
            fill 
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C3F]/90 via-[#0B1C3F]/40 to-transparent" />
          
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-4 mb-6 text-sm font-semibold uppercase tracking-wider text-blue-200">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full">{wide1.category}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>{wide1.publishedDate}</span>
            </div>
            <h3 className="text-3xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight group-hover:text-blue-200 transition-colors">
              {wide1.title}
            </h3>
            <div className="flex items-center text-lg font-bold text-white group-hover:text-blue-200 transition-colors">
              Read Article <ArrowRight size={20} className="ml-3 transition-transform group-hover:translate-x-2" />
            </div>
          </div>
        </Link>
      )}

      {/* 3. Three Compact */}
      {(compact1 || compact2 || compact3) && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {compact1 && <BlogCard post={compact1} imageClassName="aspect-square" titleClassName="text-xl" />}
          {compact2 && <BlogCard post={compact2} imageClassName="aspect-square" titleClassName="text-xl" />}
          {compact3 && <BlogCard post={compact3} imageClassName="aspect-square" titleClassName="text-xl" />}
        </div>
      )}

      {/* 4. Editorial Feature (Split Layout) */}
      {editorial1 && (
        <Link href={`/blog/${editorial1.slug}`} className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center bg-slate-50 rounded-3xl overflow-hidden border border-slate-100">
          <div className="lg:col-span-5 p-8 lg:p-16 flex flex-col h-full justify-center">
             <div className="flex items-center gap-4 mb-6 text-sm font-semibold uppercase tracking-wider text-slate-500">
              <span className="text-blue-600">{editorial1.category}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              <span className="flex items-center gap-1.5"><Clock size={16} /> {editorial1.readTime}</span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-serif font-bold text-[#1E3261] mb-6 leading-tight group-hover:text-blue-700 transition-colors">
              {editorial1.title}
            </h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              {editorial1.excerpt}
            </p>
            <div className="flex items-center text-lg font-bold text-[#1E3261] group-hover:text-blue-700 transition-colors">
              Read Article <ArrowRight size={20} className="ml-3 transition-transform group-hover:translate-x-2" />
            </div>
          </div>
          <div className="lg:col-span-7 relative h-[400px] lg:h-[600px] w-full overflow-hidden">
            <Image 
              src={editorial1.coverImage} 
              alt={editorial1.title} 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
        </Link>
      )}

      {/* 5. Two Offset Cards */}
      {(offset1 || offset2) && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start pt-12">
          {offset1 && (
            <div className="md:col-span-7">
              <BlogCard 
                post={offset1} 
                imageClassName="aspect-[16/10]" 
                titleClassName="text-3xl"
                excerptClassName="text-lg"
              />
            </div>
          )}
          {offset2 && (
            <div className="md:col-span-5 md:mt-32">
              <BlogCard 
                post={offset2} 
                imageClassName="aspect-[4/5]" 
                titleClassName="text-2xl"
              />
            </div>
          )}
        </div>
      )}

    </div>
  );
}
