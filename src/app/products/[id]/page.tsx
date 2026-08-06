import { collections } from "@/components/products/data";
import { UnderConstruction } from "@/components/common/under-construction";
import { notFound } from "next/navigation";
import { CollectionView } from "./collection-view";

// Generate static params for all 9 collections
export function generateStaticParams() {
  return collections.map((collection) => ({
    id: collection.id,
  }));
}

export default async function ProductCollectionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const collection = collections.find((c) => c.id === id);
  
  if (!collection) {
    notFound();
  }
  
  if (process.env.NODE_ENV === 'production') {
    return <UnderConstruction pageName="Product Collection" />;
  }

  return (
    <main className="min-h-screen bg-white">
      <CollectionView collection={collection} />
    </main>
  );
}
