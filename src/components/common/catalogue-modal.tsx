"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone, User, Download, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "../ui/button";

export function CatalogueDownloadModal() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

  React.useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setStatus("idle");
      setFormData({ name: "", email: "", phone: "" });
      setErrorMessage("");
    };
    
    window.addEventListener("open-catalogue-modal", handleOpen);
    return () => window.removeEventListener("open-catalogue-modal", handleOpen);
  }, []);

  const handleClose = () => {
    if (status !== "submitting") {
      setIsOpen(false);
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Full name is required.";
    if (!formData.phone.trim()) return "Phone number is required.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      return "Please enter a valid email address.";
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/catalogue", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
      } else {
        setErrorMessage(result.message || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch (err) {
      console.error("[CATALOGUE_SUBMIT_ERROR]", err);
      setErrorMessage("Network connection failed. Please check your internet and try again.");
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-md bg-[#f6f7fb] border border-slate-200/80 rounded-[2rem] overflow-hidden shadow-2xl z-10 p-8"
          >
            {/* Close Button */}
            {status !== "submitting" && (
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 transition-all duration-300 cursor-pointer"
                aria-label="Close Modal"
              >
                <X size={18} />
              </button>
            )}

            {status === "success" ? (
              /* Success Screen */
              <div className="text-center space-y-6 py-6">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-serif text-[#1E3261]">
                    Catalogue Sent!
                  </h3>
                  <p className="text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
                    We have successfully sent our B2B Product Catalogue to:
                    <br />
                    <span className="font-bold text-[#1E3261] break-all">{formData.email}</span>
                  </p>
                </div>
                <div className="pt-2">
                  <Button variant="default" onClick={handleClose} className="w-full font-bold">
                    Done
                  </Button>
                </div>
              </div>
            ) : (
              /* Form / Error Screen */
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1E3261] text-[10px] font-bold uppercase tracking-wider">
                    <Download size={10} /> Secure Sourcing Access
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-[#1E3261]">
                    Request Catalogue
                  </h3>
                  <p className="text-xs text-slate-500">
                    Provide your professional details to receive our premium catalogue directly in your inbox.
                  </p>
                </div>

                {status === "error" && errorMessage && (
                  <div className="p-4 rounded-xl bg-rose-50 border border-rose-100 text-rose-700 text-xs flex items-start gap-3">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <input
                        type="text"
                        required
                        disabled={status === "submitting"}
                        placeholder="e.g. Robert Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-slate-200/80 rounded-xl py-3 pl-10 pr-4 text-sm outline-none focus:border-[#1E3261]/60 focus:ring-1 focus:ring-[#1E3261]/20 transition-all font-medium text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Phone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <input
                        type="tel"
                        required
                        disabled={status === "submitting"}
                        placeholder="e.g. +1 555-0199"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-slate-200/80 rounded-xl py-3 pl-10 pr-4 text-sm outline-none focus:border-[#1E3261]/60 focus:ring-1 focus:ring-[#1E3261]/20 transition-all font-medium text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Email ID
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <input
                        type="email"
                        required
                        disabled={status === "submitting"}
                        placeholder="e.g. buyer@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-slate-200/80 rounded-xl py-3 pl-10 pr-4 text-sm outline-none focus:border-[#1E3261]/60 focus:ring-1 focus:ring-[#1E3261]/20 transition-all font-medium text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full font-bold h-12 flex items-center justify-center gap-2"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Processing Security Delivery...
                        </>
                      ) : (
                        <>
                          <Mail size={16} />
                          Request Product Catalogue
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
