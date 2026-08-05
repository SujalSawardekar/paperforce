import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ProductCard } from "@/components/common/product-card";

export default function ProductsPage() {
  return (
    <main className="flex-1 py-24 md:py-32 relative overflow-hidden bg-white ">
      <Container className="space-y-20 relative z-10">
        
        <ScrollReveal direction="up">
          <div className="space-y-6 max-w-3xl text-left">

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0b1c3f]  font-serif">
              Our Manufacturing Portfolio
            </h1>
            <p className="text-lg text-slate-600  leading-relaxed">
              Precision-engineered paper stationery produced at massive scale.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ScrollReveal direction="up" delay={0.1}>
            <ProductCard
              title="Composition Books"
              description="Durable, center-sewn composition notebooks tailored for the US educational sector."
              image=""
              tags={["Education", "Export"]}
            />
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <ProductCard
              title="Wire-O Notebooks"
              description="Premium lay-flat spiral and wire-bound notebooks for corporate and retail."
              image=""
              tags={["Corporate", "Retail"]}
            />
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <ProductCard
              title="Graph & Ruled Books"
              description="High-precision grid and ruled paper books manufactured with advanced web presses."
              image=""
              tags={["Wholesale"]}
            />
          </ScrollReveal>
        </div>

      </Container>
    </main>
  );
}
