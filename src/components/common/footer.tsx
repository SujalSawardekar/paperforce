"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { footerLinks } from "@/data";
import { Container } from "./container";
import { MapPin, Mail, ArrowRight } from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";
import { Button } from "../ui/button";
import { useRef, useEffect } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { margin: "0px" });

  useEffect(() => {
    const event = new CustomEvent('footerVisibilityChange', { detail: { isVisible: isInView } });
    window.dispatchEvent(event);
  }, [isInView]);

  return (
    <footer ref={footerRef} className="relative bg-[#172554] text-white pt-12">
      {/* Organic Curved Top Border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-full transform">
        <svg
          className="relative block w-full h-[60px] md:h-[100px] lg:h-[150px] text-[#172554] fill-current"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path d="M0,100 Q720,0 1440,100 Z" />
        </svg>
      </div>

      <Container className="relative z-10 pb-8">
        
        {/* Integrated CTA Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto pb-12 border-b border-blue-900/50 mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Ready to Manufacture with Paperforce?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-blue-200/80 mb-10">
            Let&apos;s build your next stationery product together.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button variant="default" size="lg" className="px-10 h-14 text-base md:text-lg">
              Request Quote
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Main Footer Links */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8"
        >
          {/* Brand & Description */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6 flex flex-col items-start pr-0 lg:pr-12">
            <div className="inline-block bg-white p-3 rounded-2xl shadow-lg">
              <Image
                src="/logo.png"
                alt="Paperforce Logo"
                width={160}
                height={42}
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-sm md:text-base text-blue-200/80 leading-relaxed text-left">
              Paperforce India LLP is a trusted notebook and paper stationery manufacturer exporting to importers, chain stores, and distributors across the USA, UK, Middle East, West Africa, and Latin America.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="flex flex-col items-start text-left lg:col-span-2">
            <h4 className="text-base font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-blue-200/70 hover:text-white transition-colors block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div variants={itemVariants} className="flex flex-col items-start text-left lg:col-span-2">
            <h4 className="text-base font-semibold text-white mb-6">Products</h4>
            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-blue-200/70 hover:text-white transition-colors block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Markets */}
          <motion.div variants={itemVariants} className="flex flex-col items-start text-left lg:col-span-2">
            <h4 className="text-base font-semibold text-white mb-6">Markets</h4>
            <ul className="space-y-4">
              {footerLinks.markets?.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-blue-200/70 hover:text-white transition-colors block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div variants={itemVariants} className="flex flex-col items-start text-left lg:col-span-2">
            <h4 className="text-base font-semibold text-white mb-6">Contact</h4>
            <div className="space-y-4 text-sm text-blue-200/70">
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={18} className="text-blue-400" />
                {siteConfig.contact.email}
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-400 shrink-0 mt-0.5" />
                <span>Palghar, Maharashtra<br/>Mumbai, India</span>
              </div>
            </div>
            
            <div className="flex gap-4 mt-8 pt-6 border-t border-blue-900/50 w-full">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-blue-300 hover:text-white transition-all">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-blue-300 hover:text-white transition-all">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-blue-300 hover:text-white transition-all">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-blue-900/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200/60"
        >
          <span>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </span>
          <div className="flex gap-6">
            {footerLinks.support?.map(link => (
               <Link key={link.name} href={link.href} className="hover:text-white transition-colors">{link.name}</Link>
            ))}
          </div>
        </motion.div>
        
      </Container>
    </footer>
  );
}

