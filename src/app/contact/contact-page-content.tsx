"use client";

import { Suspense } from "react";
import { Container } from "@/components/common/container";
import { ContactForm } from "./contact-form";
import { ContactMap } from "./contact-map";
import { MapPin, Mail, Phone, MessageSquare, Clock } from "lucide-react";
import { motion, Variants } from "framer-motion";

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  }
};

const cardContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

export function ContactPageContent() {
  return (
    <main className="flex-1 w-full min-h-screen flex flex-col">
      {/* Top Header Section */}
      <section className="w-full relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0f4f8] via-[#e6f0fa] to-[#f4f7fb] -z-10" />
        <Container>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
            className="w-full max-w-4xl space-y-8 text-center mx-auto"
          >
            <motion.h1 variants={revealVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0b1c3f] font-serif leading-tight">
              Let's Build Your<br />Next Export Partnership
            </motion.h1>
            
            <motion.div variants={revealVariants} className="space-y-5 text-base lg:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              <p>
                Paperforce India LLP manufactures premium notebooks and paper stationery for importers, distributors, wholesalers, retailers, educational institutions, and private-label brands across global markets.
              </p>
              <p>
                Whether you're looking for OEM manufacturing, bulk exports, private labeling, or customized stationery solutions, our export team is ready to assist.
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <div className="flex flex-col lg:flex-row w-full items-start relative bg-white">
        
        {/* Left Column: Info (Scrolls naturally) */}
        <div className="w-full lg:w-1/2 relative flex items-start justify-center p-8 pt-16 lg:p-16 xl:p-24 overflow-hidden bg-white/50">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            transition={{ staggerChildren: 0.15 }}
            className="w-full max-w-lg space-y-16"
          >
            <motion.div variants={revealVariants} className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0b1c3f] font-serif">Contact Information</h2>
              <p className="text-slate-600">Let's discuss your requirements.</p>
            </motion.div>

            {/* Contact Information Grid */}
            <motion.div variants={revealVariants} className="pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
                
                {/* Corporate Office */}
                <div className="group flex flex-col gap-2 text-sm col-span-1 sm:col-span-2 cursor-default">
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:animate-bounce transition-colors" />
                    Corporate Office
                  </span>
                  <span className="text-slate-700 leading-relaxed block max-w-[280px] pl-6 transition-colors">
                    C-210, Morya House<br/>
                    Off. New Link Road<br/>
                    Andheri West, Mumbai – 400053
                  </span>
                </div>

                {/* Branch Office */}
                <div className="group flex flex-col gap-2 text-sm col-span-1 sm:col-span-2 cursor-default">
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:animate-bounce transition-colors" />
                    Branch Office
                  </span>
                  <span className="text-slate-700 leading-relaxed block max-w-[280px] pl-6 transition-colors">
                    403-B, Venus Tower<br/>
                    Veera Desai Road<br/>
                    Andheri (W), Mumbai
                  </span>
                </div>

                {/* Manufacturing Facility */}
                <div className="group flex flex-col gap-2 text-sm col-span-1 sm:col-span-2 cursor-default">
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:animate-bounce transition-colors" />
                    Manufacturing Facility
                  </span>
                  <span className="text-slate-700 leading-relaxed block max-w-[280px] pl-6 transition-colors">
                    Plot No. 19–20, Dewan {"&"} Shah Industrial Estate<br/>
                    Palghar Udyog Nagar<br/>
                    Palghar
                  </span>
                </div>

                {/* Phone */}
                <div className="group flex flex-col gap-2 text-sm cursor-default">
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Phone className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors duration-300" />
                    Phone
                  </span>
                  <span className="text-slate-700 font-medium pl-6 group-hover:text-blue-700 transition-colors">+91 97699 66770</span>
                </div>

                {/* WhatsApp */}
                <div className="group flex flex-col gap-2 text-sm cursor-pointer">
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-slate-400 group-hover:text-green-500 transition-colors duration-300" />
                    WhatsApp
                  </span>
                  <span className="text-slate-700 font-medium pl-6 group-hover:text-green-600 transition-colors">+91 97699 66770</span>
                </div>

                {/* Email */}
                <div className="group flex flex-col gap-2 text-sm col-span-1 sm:col-span-2">
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Mail className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors duration-300" />
                    Email
                  </span>
                  <a href="mailto:vedant@paperforce.in" className="text-[#1E3261] font-medium hover:text-blue-600 pl-6 relative after:absolute after:bottom-0 after:left-6 after:right-0 after:h-[2px] after:bg-blue-600 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:origin-left inline-block w-max">
                    vedant@paperforce.in
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={revealVariants} className="pt-8">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('map-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#1E3261] hover:text-blue-700 transition-all duration-300"
              >
                View Company Locations
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-y-1"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column: Contact Form (Sticky on Desktop) */}
        <div className="w-full lg:w-1/2 bg-slate-50 flex items-center justify-center p-8 pt-16 lg:p-16 xl:p-24 shadow-[inset_20px_0_40px_-15px_rgba(0,0,0,0.05)] z-10 relative lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto custom-scrollbar border-l border-slate-100">
          <div className="w-full max-w-xl my-auto">
            <Suspense fallback={<div className="h-96 flex items-center justify-center text-slate-400">Loading form...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>

      </div>

      {/* Our Locations Section */}
      <section id="map-section" className="bg-slate-50 pt-32 pb-48 border-t border-slate-100 overflow-hidden">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto mb-20 space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#0b1c3f] font-serif tracking-tight">Visit Our Locations</h2>
            <p className="text-lg text-slate-600">
              Find our Corporate Office, Branch Office and Manufacturing Facility across Maharashtra.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ContactMap />
          </motion.div>
          <motion.div 
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-24 max-w-6xl mx-auto relative z-20 transform translate-y-24 lg:translate-y-36 -mb-24 lg:-mb-36"
          >
            {/* Corporate Office */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group bg-white p-10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] flex flex-col text-left transition-all duration-300 rounded-3xl lg:rounded-bl-[60px] lg:-translate-x-3 lg:w-[105%] relative overflow-hidden"
            >
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-100/40 to-transparent pointer-events-none" />
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <MapPin className="w-5 h-5 text-[#1E3261] group-hover:text-blue-600 group-hover:scale-105 transition-all duration-300" />
                <h4 className="text-xl font-bold text-[#1E3261] group-hover:text-blue-600 transition-colors duration-300">Corporate Office</h4>
              </div>
              <p className="text-base text-slate-600 leading-loose relative z-10">
                C-210, Morya House<br/>
                Andheri West<br/>
                Mumbai
              </p>
            </motion.div>
            
            {/* Branch Office */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group bg-white p-10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] flex flex-col text-left transition-all duration-300 relative z-10 rounded-3xl lg:rounded-b-[40px] overflow-hidden"
            >
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-100/40 to-transparent pointer-events-none" />
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <MapPin className="w-5 h-5 text-[#1E3261] group-hover:text-blue-600 group-hover:scale-105 transition-all duration-300" />
                <h4 className="text-xl font-bold text-[#1E3261] group-hover:text-blue-600 transition-colors duration-300">Branch Office</h4>
              </div>
              <p className="text-base text-slate-600 leading-loose relative z-10">
                403-B, Venus Tower<br/>
                Veera Desai Road<br/>
                Andheri (W), Mumbai
              </p>
            </motion.div>
            
            {/* Manufacturing Facility */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group bg-white p-10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] flex flex-col text-left transition-all duration-300 rounded-3xl lg:rounded-br-[60px] lg:translate-x-3 lg:w-[105%] relative overflow-hidden"
            >
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-100/40 to-transparent pointer-events-none" />
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <MapPin className="w-5 h-5 text-[#1E3261] group-hover:text-blue-600 group-hover:scale-105 transition-all duration-300" />
                <h4 className="text-xl font-bold text-[#1E3261] group-hover:text-blue-600 transition-colors duration-300">Manufacturing Facility</h4>
              </div>
              <p className="text-base text-slate-600 leading-loose relative z-10">
                Plot No. 19–20<br/>
                Dewan {"&"} Shah Industrial Estate<br/>
                Palghar Udyog Nagar<br/>
                Palghar
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
