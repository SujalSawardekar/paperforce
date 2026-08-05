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
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex gap-4 sm:border-r border-blue-900/50 sm:pr-6">
              <a href="https://www.instagram.com/paperforceindia?igsh=eG10NWp6NDVhbGQ=" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.facebook.com/share/1EpdqK5Zve/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://www.linkedin.com/in/paperforce-india-llp-536a15426?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.195 0 7.457 2.989 7.457 6.981 0 4.175-2.63 7.531-6.282 7.531-1.227 0-2.381-.638-2.775-1.39l-.756 2.876c-.274 1.042-1.021 2.346-1.523 3.143 1.166.36 2.416.554 3.71.554 6.621 0 11.988-5.367 11.988-11.988C24.006 5.367 18.638 0 12.017 0z"/>
                </svg>
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

