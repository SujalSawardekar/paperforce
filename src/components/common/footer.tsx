"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { footerLinks } from "@/data";
import { Container } from "./container";
import { MapPin, Mail, ArrowRight, Phone, MessageSquare, Globe } from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";
import { Button } from "../ui/button";
import { useRef, useEffect } from "react";

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
  </svg>
);

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const PinterestIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0a12 12 0 0 0-4.37 23.17c-.07-.93-.13-2.36.03-3.38l1.4-5.95s-.35-.71-.35-1.76c0-1.65.96-2.88 2.15-2.88 1.02 0 1.5.76 1.5 1.68 0 1.02-.65 2.56-.99 3.98-.28 1.19.6 2.16 1.77 2.16 2.12 0 3.76-2.24 3.76-5.46 0-2.86-2.06-4.86-4.99-4.86-3.4 0-5.39 2.55-5.39 5.18 0 1.03.4 2.13.89 2.73.1.12.11.23.08.35l-.29 1.19c-.04.16-.13.19-.29.12-1.09-.51-1.77-2.12-1.77-3.41 0-2.77 2.01-5.32 5.82-5.32 3.06 0 5.45 2.18 5.45 5.09 0 3.05-1.92 5.5-4.58 5.5-1 0-1.95-.53-2.28-1.15l-.62 2.37c-.22.84-.82 1.89-1.23 2.53A12 12 0 1 0 12 0z"/>
  </svg>
);

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
    <footer ref={footerRef} className="relative z-20 bg-[#172554] text-white pt-12 md:pt-16">
      {/* Organic Curved Top Border - Animated Growth */}
      <div className="absolute top-0 left-0 w-full leading-none -translate-y-full transform z-0">
        <svg
          className="relative block w-full h-[60px] md:h-[100px] lg:h-[150px] text-[#172554] fill-current overflow-visible"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <motion.path 
            initial={{ d: "M0,100 Q720,100 1440,100 Z" }}
            whileInView={{ d: "M0,100 Q720,0 1440,100 Z" }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: 1.8, type: "spring", bounce: 0.65 }}
          />
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        >
          {/* Company */}
          <motion.div variants={itemVariants} className="flex flex-col items-start text-left">
            <h4 className="text-base font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-sm text-blue-200/70 hover:text-white transition-colors block">About Us</Link></li>
              <li><Link href="/reach-markets" className="text-sm text-blue-200/70 hover:text-white transition-colors block">Markets</Link></li>
              <li><Link href="/products" className="text-sm text-blue-200/70 hover:text-white transition-colors block">Products</Link></li>
              <li><Link href="/blog" className="text-sm text-blue-200/70 hover:text-white transition-colors block">Blog</Link></li>
              <li><Link href="/contact" className="text-sm text-blue-200/70 hover:text-white transition-colors block">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div variants={itemVariants} className="flex flex-col items-start text-left">
            <h4 className="text-base font-semibold text-white mb-6">Products</h4>
            <ul className="space-y-4">
              <li><Link href="/products" className="text-sm text-blue-200/70 hover:text-white transition-colors block">Exercise Books</Link></li>
              <li><Link href="/products" className="text-sm text-blue-200/70 hover:text-white transition-colors block">Spiral Bound</Link></li>
              <li><Link href="/products" className="text-sm text-blue-200/70 hover:text-white transition-colors block">Double Wire Bound</Link></li>
              <li><Link href="/products" className="text-sm text-blue-200/70 hover:text-white transition-colors block">Hard Cover</Link></li>
              <li><Link href="/products" className="text-sm text-blue-200/70 hover:text-white transition-colors block">Centre Stitch</Link></li>
              <li><Link href="/products" className="text-sm text-blue-200/70 hover:text-white transition-colors block">Private Label</Link></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="flex flex-col items-start text-left">
            <h4 className="text-base font-semibold text-white mb-6">Contact</h4>
            <div className="space-y-4 text-sm text-blue-200/70">
              <strong className="text-white font-medium text-base block mb-2">Paperforce India LLP</strong>
              <div className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone size={16} className="text-blue-400 shrink-0" />
                <span>+91 97699 66770</span>
              </div>
              <div className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={16} className="text-blue-400 shrink-0" />
                <a href="mailto:vedant@paperforce.in" className="hover:underline">vedant@paperforce.in</a>
              </div>
              <div className="flex items-center gap-3 hover:text-white transition-colors">
                <MapPin size={16} className="text-blue-400 shrink-0" />
                <span>Andheri West, Mumbai</span>
              </div>
            </div>
          </motion.div>

          {/* Addresses */}
          <motion.div variants={itemVariants} className="flex flex-col items-start text-left">
            <h4 className="text-base font-semibold text-white mb-6">Address</h4>
            <div className="space-y-4 text-sm text-blue-200/70">
              <ul className="space-y-4">
                <li><Link href="/contact#map-section" className="text-sm text-blue-200/70 hover:text-white transition-colors block">Corporate Office</Link></li>
                <li><Link href="/contact#map-section" className="text-sm text-blue-200/70 hover:text-white transition-colors block">Branch Office</Link></li>
                <li><Link href="/contact#map-section" className="text-sm text-blue-200/70 hover:text-white transition-colors block">Factory</Link></li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-blue-900/50 mt-16 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6 text-sm text-blue-200/60"
        >
          <span>
            &copy; 2026 Paperforce India LLP. All Rights Reserved.
          </span>
          <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-8">
            <div className="flex gap-5 items-center md:border-r border-blue-900/50 md:pr-8">
              <a href="https://www.linkedin.com/in/paperforce-india-llp-536a15426?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <LinkedinIcon size={18} />
              </a>
              <a href="https://www.facebook.com/share/1EpdqK5Zve/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
                <FacebookIcon size={18} />
              </a>
              <a href="https://www.instagram.com/paperforceindia?igsh=eG10NWp6NDVhbGQ=" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                <InstagramIcon size={18} />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="Pinterest">
                <PinterestIcon size={18} />
              </a>
            </div>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </motion.div>
        
      </Container>
    </footer>
  );
}

