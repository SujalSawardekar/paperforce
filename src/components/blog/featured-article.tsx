import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog-data";
import { Clock, ArrowRight } from "lucide-react";

export function FeaturedArticle({ article }: { article: BlogPost }) {
  return (
    <div className="w-full mb-24">
      <h2 className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-6">Featured Resource</h2>
      
      <Link href={`/blog/${article.slug}`} className="group flex flex-col lg:flex-row gap-8 lg:gap-12 items-center bg-white rounded-3xl p-4 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100">
        
        <div className="relative w-full lg:w-[60%] aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shrink-0">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            priority
          />
        </div>
        
        <div className="flex flex-col py-6 lg:py-12 pr-4 lg:pr-12">
          <div className="flex flex-nowrap items-center gap-2 xl:gap-4 mb-6 text-[10px] xl:text-sm font-semibold uppercase tracking-wider text-slate-500 whitespace-nowrap overflow-hidden">
            <span className="text-blue-600 bg-blue-50 px-2 xl:px-3 py-1 rounded-full shrink-0">{article.category}</span>
            <span className="w-1 h-1 xl:w-1.5 xl:h-1.5 rounded-full bg-slate-300 shrink-0" />
            <span className="shrink-0">{article.publishedDate}</span>
            <span className="w-1 h-1 xl:w-1.5 xl:h-1.5 rounded-full bg-slate-300 shrink-0" />
            <span className="flex items-center gap-1 xl:gap-1.5 shrink-0"><Clock size={14} className="xl:w-4 xl:h-4 shrink-0" /> {article.readTime}</span>
          </div>
          
          <h3 className="text-3xl lg:text-5xl font-serif font-bold text-[#1E3261] mb-6 leading-tight group-hover:text-blue-700 transition-colors">
            {article.title}
          </h3>
          
          <p className="text-lg lg:text-xl text-slate-600 mb-10 leading-relaxed">
            {article.excerpt}
          </p>
          
          <div className="mt-auto flex items-center text-lg font-bold text-[#1E3261] group-hover:text-blue-700 transition-colors">
            Read Article <ArrowRight size={20} className="ml-3 transition-transform group-hover:translate-x-2" />
          </div>
        </div>
        
      </Link>
    </div>
  );
}
