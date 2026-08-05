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
    <footer ref={footerRef} className="relative bg-[#172554] text-white pt-12">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8"
        >
          {/* Brand & Description */}
          <motion.div variants={itemVariants} className="lg:col-span-3 space-y-6 flex flex-col items-start pr-0 lg:pr-8">
            <div className="inline-block bg-white p-3 rounded-2xl shadow-lg">
              <Image
                src="/logo.png"
                alt="Paperforce Logo"
                width={160}
                height={42}
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-blue-200/80 leading-relaxed text-left">
              Paperforce India LLP is a trusted notebook and paper stationery manufacturer exporting across the globe.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="flex flex-col items-start text-left lg:col-span-2">
            <h4 className="text-base font-semibold text-white mb-6">Company</h4>
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

          {/* Contact & Social */}
          <motion.div variants={itemVariants} className="flex flex-col items-start text-left lg:col-span-5">
            <h4 className="text-base font-semibold text-white mb-6">Contact Us</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full text-sm text-blue-200/70">
              
              {/* Addresses */}
              <div className="space-y-5">
                <div className="space-y-1.5">
                  <strong className="text-white font-medium block">Paperforce India LLP</strong>
                  <strong className="text-blue-300 font-medium block text-xs uppercase tracking-wider mt-2">Corporate Office</strong>
                  <p className="leading-relaxed">C-210, Morya House, Off. New Link Road, Andheri West, Mumbai – 400053</p>
                </div>
                <div className="space-y-1.5">
                  <strong className="text-blue-300 font-medium block text-xs uppercase tracking-wider">Manufacturing Facility</strong>
                  <p className="leading-relaxed">Plot No. 19–20, Dewan & Shah Industrial Estate, Palghar Udyog Nagar, Palghar – 401404</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone size={16} className="text-blue-400 shrink-0" />
                  <span>+91 97699 66770</span>
                </div>
                <div className="flex items-center gap-3 hover:text-white transition-colors">
                  <MessageSquare size={16} className="text-green-400 shrink-0" />
                  <span>+91 97699 66770</span>
                </div>
                <div className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail size={16} className="text-blue-400 shrink-0" />
                  <a href="mailto:vedant@paperforce.in" className="hover:underline">vedant@paperforce.in</a>
                </div>
                <div className="flex items-center gap-3 hover:text-white transition-colors">
                  <Globe size={16} className="text-blue-400 shrink-0" />
                  <a href="https://www.paperforce.in" className="hover:underline">www.paperforce.in</a>
                </div>
                
                {/* Social */}
                <div className="flex gap-3 pt-2">
                  <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-blue-300 hover:text-white transition-all">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-blue-300 hover:text-white transition-all">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                </div>
              </div>

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

