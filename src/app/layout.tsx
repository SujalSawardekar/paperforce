import * as React from "react";
import type { Metadata } from "next";
import "@/app/globals.css";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Paperforce India - Global Stationery Manufacturer",
  description: "B2B OEM Private Label Manufacturer supplying high-volume paper stationery globally.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased overflow-x-hidden" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} forcedTheme="light" disableTransitionOnChange>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
