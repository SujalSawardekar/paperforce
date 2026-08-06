import { BlogResource } from "@/lib/blog-data";
import { Container } from "@/components/common/container";
import { FileText, Download, BookOpen, Settings } from "lucide-react";

interface ResourcesSectionProps {
  resources: BlogResource[];
}

export function ResourcesSection({ resources }: ResourcesSectionProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'document': return <FileText size={24} className="text-blue-500" />;
      case 'guide': return <BookOpen size={24} className="text-indigo-500" />;
      case 'specs': return <Settings size={24} className="text-slate-500" />;
      default: return <FileText size={24} className="text-blue-500" />;
    }
  };

  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1E3261] mb-4">Popular Resources</h2>
            <p className="text-lg text-slate-600 max-w-2xl">Download our premium guides, specifications, and quality standard documents to aid your sourcing process.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource) => (
            <div key={resource.id} className="group flex flex-col bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {getIcon(resource.icon)}
              </div>
              <h3 className="font-bold text-[#1E3261] text-xl mb-3">{resource.title}</h3>
              <p className="text-slate-600 text-sm mb-8 flex-1">{resource.description}</p>
              
              <a href={resource.fileUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-bold text-blue-600 group-hover:text-blue-800 transition-colors pt-4 border-t border-slate-200">
                <Download size={16} className="mr-2" /> Download PDF
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
