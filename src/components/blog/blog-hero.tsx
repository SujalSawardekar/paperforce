import Image from "next/image";
import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";

export function BlogHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-slate-50 overflow-hidden">
      {/* Subtle paper texture overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: "url('/images/paper-texture.png')", backgroundSize: "400px" }}
      />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-[#1E3261] leading-[1.1] mb-8">
              Industry Insights
              <span className="block mt-4 text-3xl md:text-4xl lg:text-5xl text-slate-500 font-normal">
                Notebook Manufacturing,<br/>Export Trends &<br/>Paper Innovation
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
              Share expert insights, manufacturing knowledge, sourcing guides, and export updates to help buyers make informed decisions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#1E3261] hover:bg-blue-800 text-white px-8 h-14 text-base font-bold">
                Read Articles
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-100 text-[#1E3261] px-8 h-14 text-base font-bold">
                Contact Export Team
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/blog/featured.png"
                alt="Paperforce Manufacturing"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10" />
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-indigo-100 rounded-full blur-3xl opacity-50 -z-10" />
          </div>
          
        </div>
      </Container>
    </section>
  );
}
