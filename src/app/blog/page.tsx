import { Metadata } from "next";
import { UnderConstruction } from "@/components/common/under-construction";
import { BlogPageContent } from "./blog-page-content";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Industry Insights & Manufacturing Blog | Paperforce India",
  description: "Expert insights on notebook manufacturing, export trends, quality assurance, and sustainable paper sourcing from Paperforce India.",
  openGraph: {
    title: "Industry Insights & Manufacturing Blog | Paperforce India",
    description: "Expert insights on notebook manufacturing, export trends, quality assurance, and sustainable paper sourcing from Paperforce India.",
    type: "website",
  },
};

export default function BlogPage() {
  return <UnderConstruction pageName="Blogs" />;
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50" />}>
      <BlogPageContent />
    </Suspense>
  );
}
