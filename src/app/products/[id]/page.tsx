import { collections } from "@/components/products/data";
import { notFound } from "next/navigation";
import { CollectionView } from "./collection-view";

// Generate static params for all collections (both new slugs and legacy set IDs)
export function generateStaticParams() {
  const params: { id: string }[] = [];
  for (const collection of collections) {
    params.push({ id: collection.id });
    if (collection.legacyId) {
      params.push({ id: collection.legacyId });
    }
  }
  return params;
}

export default async function ProductCollectionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const collection = collections.find((c) => c.id === id || (c.legacyId && c.legacyId.toLowerCase() === id.toLowerCase()));
  
  if (!collection) {
    notFound();
  }
  
  return (
    <main className="min-h-screen bg-white">
      <CollectionView collection={collection} />
    </main>
  );
}
