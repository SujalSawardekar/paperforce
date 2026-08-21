import { Metadata } from "next";
import { CertificationsViewer } from "@/components/certifications/certifications-viewer";

export const metadata: Metadata = {
  title: "Official Compliance & Certifications | Paperforce India LLP",
  description: "Verify Paperforce India's official credentials, including ISO 9001:2015 quality standards, FIEO registration, DGFT Import-Export Code (IEC), and Udyam manufacturing licenses.",
};

export default function CertificationsPage() {
  return (
    <main className="flex-1 bg-white pt-16 md:pt-20">
      {/* Certification Archive Viewer Section (now at the top) */}
      <CertificationsViewer />
    </main>
  );
}
