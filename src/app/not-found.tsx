import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-4xl sm:text-6xl font-bold font-serif text-[#0b1c3f]  mb-4">404</h1>
      <h2 className="text-xl sm:text-2xl font-bold text-slate-800  mb-6">Page Not Found</h2>
      <p className="text-slate-600  max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link href="/">
        <Button size="lg">Return to Homepage</Button>
      </Link>
    </div>
  );
}
