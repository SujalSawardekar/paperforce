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
    <footer ref={footerRef} className="relative z-20 bg-[#172554] text-white pt-40 md:pt-48 lg:pt-56">
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
          className="border-t border-blue-900/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200/60"
        >
          <span>
            &copy; 2026 Paperforce India LLP. All Rights Reserved.
          </span>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </motion.div>
        
      </Container>
    </footer>
  );
}

