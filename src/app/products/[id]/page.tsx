import { collections } from "@/components/products/data";
import { notFound } from "next/navigation";
import { CollectionView } from "./collection-view";

// Generate static params for all 9 collections
export function generateStaticParams() {
  return collections.map((collection) => ({
    id: collection.id,
  }));
}

export default function ProductCollectionPage({ params }: { params: { id: string } }) {
  const collection = collections.find((c) => c.id === params.id);
  
  if (!collection) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-[100px] pb-12">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <CollectionView collection={collection} />
      </div>
    </main>
  );
}
