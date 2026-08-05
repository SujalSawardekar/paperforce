import { Container } from "@/components/common/container";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export function KnowledgeTimeline() {
  const steps = [
    {
      title: "Raw Material",
      desc: "Sourcing premium sustainable paper and FSC-certified core materials.",
      link: "/blog?category=raw-materials"
    },
    {
      title: "Manufacturing",
      desc: "Automated flexo printing, ruling, and precision cutting at scale.",
      link: "/blog?category=manufacturing"
    },
    {
      title: "Quality Inspection",
      desc: "Rigorous AQL standard checks to ensure zero-defect production.",
      link: "/blog?category=quality"
    },
    {
      title: "Packaging",
      desc: "Retail-ready shrink wrapping, carton boxing, and palletizing.",
      link: "/blog?category=packaging"
    },
    {
      title: "Export",
      desc: "Container loading optimization and global shipping logistics.",
      link: "/blog?category=export"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1E3261] mb-6">
            The Manufacturing Journey
          </h2>
          <p className="text-lg text-slate-600">
            Follow our premium notebook production process from sustainable forest to final destination port. Explore educational articles at each step.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <Link href={step.link} className="w-full">
                <div className="bg-white border border-slate-100 rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <h3 className="text-2xl font-serif font-bold text-[#1E3261] mb-3 group-hover:text-blue-700 transition-colors">{step.title}</h3>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
              </Link>
              
              {idx !== steps.length - 1 && (
                <div className="py-6 text-slate-300">
                  <ArrowDown size={32} />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
