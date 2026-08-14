import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export function BlogContactCta() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="max-w-5xl mx-auto bg-slate-50 rounded-[3rem] p-10 md:p-20 text-center border border-slate-100">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1E3261] mb-6 leading-tight">
            Need help sourcing notebooks?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Talk directly with our export specialists. We provide tailored manufacturing solutions for global distributors and OEM brands.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-[#1E3261] hover:bg-blue-800 text-white px-10 h-16 text-lg font-bold rounded-full">
                Contact Us <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
            <a href="/PaperForce%20Catalogue.pdf" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-100 text-[#1E3261] px-10 h-16 text-lg font-bold rounded-full">
                <Download size={20} className="mr-2" /> Request Catalogue
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
