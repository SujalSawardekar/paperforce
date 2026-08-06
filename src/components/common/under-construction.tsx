"use client";

import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Wrench, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function UnderConstruction({ pageName }: { pageName?: string }) {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-slate-50 overflow-hidden pt-24">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 opacity-30 mix-blend-multiply pointer-events-none" style={{ backgroundImage: "url('/images/paper-texture.png')", backgroundSize: "400px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100 rounded-full blur-[100px] opacity-40 -z-10" />

      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center mb-8 border border-slate-100"
          >
            <Wrench className="w-10 h-10 text-[#1E3261]" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1E3261] mb-6">
              Crafting Excellence
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-light">
              We are currently engineering the <span className="font-semibold text-blue-600">{pageName ? pageName : 'requested'}</span> experience. This section is undergoing premium renovations to meet our export standards.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <Link href="/">
              <Button size="lg" className="bg-[#1E3261] hover:bg-blue-800 text-white px-8 h-14 rounded-full font-bold shadow-lg shadow-blue-900/10 transition-all hover:scale-105">
                <ArrowLeft size={20} className="mr-2" /> Return to Homepage
              </Button>
            </Link>
          </motion.div>
          
        </div>
      </Container>
    </div>
  );
}
