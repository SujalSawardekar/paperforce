"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent, Variants } from "framer-motion";
import { Button } from "../ui/button";

const desktopPillLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Markets", href: "/reach-markets" },
  { name: "Blog", href: "/blog" },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const isCollectionPage = pathname.startsWith('/products/') && pathname !== '/products';

  const { scrollY } = useScroll();
  const [isHidden, setIsHidden] = React.useState(false);
  const [isCompact, setIsCompact] = React.useState(false);
  const [isFooterVisible, setIsFooterVisible] = React.useState(false);

  React.useEffect(() => {
    const handleFooterVisibility = (e: CustomEvent<{ isVisible: boolean }>) => {
      setIsFooterVisible(e.detail.isVisible);
    };

    window.addEventListener('footerVisibilityChange', handleFooterVisibility as EventListener);
    return () => {
      window.removeEventListener('footerVisibilityChange', handleFooterVisibility as EventListener);
    };
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    // Reset to default at the very top
    if (latest <= 20) {
      setIsHidden(false);
      setIsCompact(false);
      return;
    }

    // Scrolling down
    if (latest > previous) {
      if (latest > 150) setIsHidden(true);
      setIsCompact(false); // Keep logo big, curve untouched, no bg
    } 
    // Scrolling up
    else if (latest < previous) {
      setIsHidden(false);
      setIsCompact(true); // Show glass bg, flatten curve, shrink logo
    }
  });

  const navVariants: Variants = {
    visible: { transition: { staggerChildren: 0.05 } },
    hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
  };

  const itemVariants: Variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    hidden: { opacity: 0, y: -20, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  };

  if (isCollectionPage) {
    return (
      <header className="fixed top-0 left-0 right-0 w-full z-50 pt-5 bg-transparent pointer-events-none transition-all duration-300">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 h-[80px] pt-2 flex items-center justify-center pointer-events-auto px-4">
          <Link href="/" className="transition-transform hover:scale-105 active:scale-95 flex items-center justify-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
            <Image
              src="/logo.png"
              alt="Paperforce Logo"
              width={140}
              height={36}
              className="w-auto object-contain h-8"
              priority
              loading="eager"
            />
          </Link>
        </div>
      </header>
    );
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: isFooterVisible ? 0 : 1, 
        y: isFooterVisible ? "-100%" : 0 
      }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 pointer-events-none transition-all duration-300",
        isCompact 
          ? "bg-white/70  backdrop-blur-2xl shadow-[0_10px_40px_rgba(11,28,63,0.05)] py-1" 
          : "pt-5 bg-transparent"
      )}
    >
      {/* The continuous thin line that curves and flattens */}
      <div className="absolute top-0 left-0 w-full h-[84px] pointer-events-none">
        {/* Left line: transitions from gradient to solid and moves down */}
        <motion.div 
          className="absolute left-0 h-[1.5px]" 
          style={{ width: "calc(50% - 200px)" }}
          initial={false}
          animate={{
            top: isCompact ? 58 : 0.75,
            background: isCompact 
              ? "linear-gradient(to right, #cbd5e1, #cbd5e1)" // solid slate-300
              : "linear-gradient(to right, transparent, #cbd5e1)"
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
        
        {/* True glassmorphism blur for the curve using clip-path */}
        <motion.div 
          className="absolute left-1/2 -translate-x-1/2 w-[400px] h-[84px] bg-white/70  backdrop-blur-md pointer-events-none"
          initial={false}
          animate={{
            clipPath: isCompact
              ? "path('M 0 58 C 60 58, 70 58, 120 58 L 280 58 C 330 58, 340 58, 400 58 L 400 0 L 0 0 Z')"
              : "path('M 0 0.75 C 60 0.75, 70 80, 120 80 L 280 80 C 330 80, 340 0.75, 400 0.75 L 400 0 L 0 0 Z')",
            opacity: isCompact ? 0 : 1
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />

        {/* Center SVG stroke that flattens */}
        <svg 
          className="absolute left-1/2 -translate-x-1/2 w-[400px] h-[84px] pointer-events-none" 
          viewBox="0 0 400 84"
        >
          {/* Stroke path */}
          <motion.path 
            initial={false}
            animate={{
              d: isCompact
                ? "M 0 58 C 60 58, 70 58, 120 58 L 280 58 C 330 58, 340 58, 400 58" // flat line at bottom of header
                : "M 0 0.75 C 60 0.75, 70 80, 120 80 L 280 80 C 330 80, 340 0.75, 400 0.75" // curved
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            fill="none" 
            className="stroke-slate-300 " 
            strokeWidth="1.5" 
          />
        </svg>

        {/* Right line: transitions from gradient to solid and moves down */}
        <motion.div 
          className="absolute right-0 h-[1.5px]" 
          style={{ width: "calc(50% - 200px)" }}
          initial={false}
          animate={{
            top: isCompact ? 58 : 0.75,
            background: isCompact 
              ? "linear-gradient(to left, #cbd5e1, #cbd5e1)" // solid slate-300
              : "linear-gradient(to left, transparent, #cbd5e1)"
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </div>

      {/* The center logo */}
      <div className={cn(
        "absolute left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-auto px-4 transition-all duration-300",
        isCompact ? "top-1/2 -translate-y-1/2 h-full" : "top-0 h-[80px] pt-2"
      )}>
        <Link href="/" className="transition-transform hover:scale-105 active:scale-95 flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="Paperforce Logo"
            width={140}
            height={36}
            className={cn("w-auto object-contain transition-all duration-300", isCompact ? "h-6" : "h-8")}
            priority
            loading="eager"
          />
        </Link>
      </div>

      <motion.div 
        variants={navVariants}
        initial="visible"
        animate={isHidden ? "hidden" : "visible"}
        className={cn(
        "max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between w-full relative pointer-events-none z-10 transition-all duration-300",
        isCompact ? "h-[50px]" : "h-[60px]"
      )}>
        
        {/* Left Cluster: Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1.5 pointer-events-auto shrink-0 w-[40%]">
          {desktopPillLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <motion.div key={link.href} variants={itemVariants}>
                  <Button 
                    variant={isActive ? "default" : "ghost"} 
                    className={cn(
                      "text-[12px] font-bold h-8 px-4",
                      isActive ? "border-transparent" : "border-transparent text-slate-600 hover:text-slate-900"
                    )}
                    onClick={() => router.push(link.href)}
                  >
                    {link.name}
                  </Button>
              </motion.div>
            );
          })}
        </nav>

        {/* Mobile Left Brand Logo placeholder so mobile layout aligns correctly */}
        <div className="md:hidden pointer-events-auto shrink-0" />

        {/* Center Space so flex-between works correctly (remaining width) */}
        <div className="hidden md:block flex-1" />

        {/* Right Cluster: Action Buttons */}
        <div className="flex justify-end items-center gap-3 pointer-events-auto shrink-0 w-[40%]">
          <motion.div variants={itemVariants} className="hidden md:flex items-center gap-2">
              <Button 
                variant="ghost" 
                className="font-bold text-[13px] px-4 h-9 text-slate-600 hover:text-slate-900"
                onClick={() => window.open("/Cellpage cateloge.pdf", "_blank")}
              >
                <Download size={16} className="mr-1.5" />
                Catalogue
              </Button>
              <Button 
                variant="outline" 
                className="font-bold text-[13px] px-7 h-9 border-slate-300"
                onClick={() => router.push("/contact")}
              >
                Request Quote
              </Button>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.div variants={itemVariants} className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-full p-2 bg-slate-100  text-slate-800  cursor-pointer transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Nav Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="px-4">
          <nav className="md:hidden pointer-events-auto border border-slate-200  bg-white  rounded-2xl mt-8 p-4 flex flex-col space-y-2 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 relative z-[60]">
            {[...desktopPillLinks, { name: "Contact Us", href: "/contact" }].map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-2.5 rounded-xl text-sm font-bold transition-colors",
                    isActive
                      ? "bg-[#18294a] text-white"
                      : "text-slate-700  hover:bg-slate-100"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </motion.header>
  );
}

