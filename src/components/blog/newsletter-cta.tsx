import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";

export function NewsletterCta() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0B1C3F] z-0" />
      <div className="absolute inset-0 opacity-20 z-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent" />
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 text-center shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Stay Updated With<br/>Manufacturing Insights
          </h2>
          <p className="text-lg md:text-xl text-blue-200/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Receive updates on export regulations, notebook manufacturing, industry trends, and sourcing best practices directly from our production floor.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your work email..." 
              required
              className="flex-1 h-14 rounded-full bg-white/10 border border-white/20 px-6 text-white placeholder:text-blue-200/50 outline-none focus:bg-white/20 focus:border-white/40 transition-all"
            />
            <Button size="lg" className="h-14 px-8 rounded-full bg-white text-[#0B1C3F] hover:bg-slate-200 font-bold text-base shrink-0">
              Subscribe
            </Button>
          </form>
          <p className="text-sm text-blue-200/50 mt-6">
            We respect your inbox. Unsubscribe at any time.
          </p>
        </div>
      </Container>
    </section>
  );
}
