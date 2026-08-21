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
  { name: "Certifications", href: "/certifications" },
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
        
        {/* Center SVG stroke & background that flattens */}
        <svg 
          className="absolute left-1/2 -translate-x-1/2 w-[400px] h-[84px] pointer-events-none" 
          viewBox="0 0 400 84"
        >
          <defs>
            <clipPath id="navbar-curve-clip">
              <motion.path
                initial={false}
                animate={{
                  d: isCompact
                    ? "M 0 58 C 60 58, 70 58, 120 58 L 280 58 C 330 58, 340 58, 400 58 L 400 0 L 0 0 Z"
                    : "M 0 0.75 C 60 0.75, 70 80, 120 80 L 280 80 C 330 80, 340 0.75, 400 0.75 L 400 0 L 0 0 Z"
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </clipPath>
          </defs>

          {/* True glassmorphism blur for the curve using native SVG clipPath */}
          <g clipPath="url(#navbar-curve-clip)" className="pointer-events-none">
            <foreignObject x="0" y="0" width="400" height="84">
              <motion.div 
                className="w-full h-full bg-white/70 backdrop-blur-md"
                initial={false}
                animate={{ opacity: isCompact ? 0 : 1 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </foreignObject>
          </g>

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
            className="stroke-slate-300" 
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
            width={240}
            height={64}
            className={cn("w-auto object-contain transition-all duration-300", isCompact ? "h-10" : "h-16")}
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
        <div className="hidden md:flex items-center justify-start space-x-0.5 lg:space-x-1 pointer-events-auto shrink-0 w-[41%] lg:w-[37%]">
          {!isCollectionPage && desktopPillLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <motion.div key={link.href} variants={itemVariants}>
                  <Button 
                    variant={isActive ? "default" : "ghost"} 
                    className={cn(
                      "text-[10px] lg:text-[11px] font-bold h-8 px-1.5 lg:px-2.5 whitespace-nowrap",
                      isActive ? "border-transparent" : "border-transparent text-slate-600 hover:text-slate-900"
                    )}
                    onClick={() => router.push(link.href)}
                  >
                    {link.name}
                  </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Left Brand Logo placeholder so mobile layout aligns correctly */}
        <div className="md:hidden pointer-events-auto shrink-0" />

        {/* Center Space so flex-between works correctly (remaining width) */}
        <div className="hidden md:block flex-1" />

        {/* Right Cluster: Action Buttons & Social Icons */}
        <div className="flex justify-end items-center gap-2 lg:gap-3 pointer-events-auto shrink-0 w-[44%] lg:w-[41%]">
          {!isCollectionPage && (
            <>
              <motion.div variants={itemVariants} className="hidden md:flex items-center gap-2 lg:gap-3">
                  {/* Social Icons */}
                  <div className="flex items-center gap-3 mr-2 border-r border-slate-200 pr-4 h-5">
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <svg className="w-4 h-4 fill-slate-500 hover:fill-[#1E3261] transition-colors" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <svg className="w-4 h-4 stroke-slate-500 hover:stroke-[#1E3261] transition-colors stroke-2" viewBox="0 0 24 24" fill="none">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                      </svg>
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <svg className="w-4 h-4 fill-slate-500 hover:fill-[#1E3261] transition-colors" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                      </svg>
                    </a>
                    <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                      <svg className="w-4 h-4 fill-slate-500 hover:fill-[#1E3261] transition-colors" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.162 0 7.396 2.967 7.396 6.93 0 4.135-2.607 7.462-6.227 7.462-1.215 0-2.358-.631-2.75-1.378l-.749 2.853c-.271 1.033-.997 2.327-1.488 3.12 1.124.348 2.311.537 3.541.537 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>

                  <Button 
                    variant="ghost" 
                    className="font-bold text-[12px] lg:text-[13px] px-2 lg:px-3 h-9 text-slate-600 hover:text-slate-900"
                    onClick={() => window.dispatchEvent(new CustomEvent("open-catalogue-modal"))}
                  >
                    <Download size={15} className="mr-1.5" />
                    Catalogue
                  </Button>
                  <Button 
                    variant="outline" 
                    className="font-bold text-[12px] lg:text-[13px] px-3.5 lg:px-5 h-9 border-slate-300"
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
            </>
          )}
        </div>
      </motion.div>

      {/* Mobile Nav Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="px-4">
          <nav className="md:hidden pointer-events-auto border border-slate-200  bg-white  rounded-2xl mt-8 p-4 flex flex-col space-y-2 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 relative z-[60]">
            {[...desktopPillLinks, { name: "Catalogue", href: "/PaperForce%20Catalogue.pdf" }, { name: "Contact Us", href: "/contact" }].map((link) => {
              const isActive = pathname === link.href;
              // Handle Catalogue differently since it's a PDF
              if (link.name === "Catalogue") {
                return (
                  <button
                    key={link.name}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      window.dispatchEvent(new CustomEvent("open-catalogue-modal"));
                    }}
                    className="px-4 py-2.5 rounded-xl text-sm font-bold transition-colors text-slate-700 hover:bg-slate-100 flex items-center w-full text-left cursor-pointer"
                  >
                    <Download size={16} className="mr-2" />
                    {link.name}
                  </button>
                );
              }
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

