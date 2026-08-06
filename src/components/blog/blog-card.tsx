import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog-data";
import { cn } from "@/lib/utils";
import { Clock, ArrowRight } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
  imageClassName?: string;
  titleClassName?: string;
  excerptClassName?: string;
}

export function BlogCard({ post, className, imageClassName, titleClassName, excerptClassName }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className={cn("group flex flex-col h-full", className)}>
      <div className={cn("relative w-full overflow-hidden rounded-2xl bg-slate-100 mb-6", imageClassName)}>
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      
      <div className="flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-4 mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
          <span className="text-[#1E3261] whitespace-nowrap">{post.category}</span>
          <span className="w-1 h-1 rounded-full bg-slate-300 shrink-0" />
          <span className="whitespace-nowrap">{post.publishedDate}</span>
          <span className="w-1 h-1 rounded-full bg-slate-300 shrink-0" />
          <span className="flex items-center gap-1.5 whitespace-nowrap"><Clock size={14} className="shrink-0" /> {post.readTime}</span>
        </div>
        
        <h3 className={cn("font-serif font-bold text-[#1E3261] mb-3 group-hover:text-blue-700 transition-colors line-clamp-3", titleClassName)}>
          {post.title}
        </h3>
        
        <p className={cn("text-slate-600 mb-6 line-clamp-3", excerptClassName)}>
          {post.excerpt}
        </p>
        
        <div className="mt-auto flex items-center text-sm font-bold text-[#1E3261] group-hover:text-blue-700 transition-colors">
          Read Article <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
