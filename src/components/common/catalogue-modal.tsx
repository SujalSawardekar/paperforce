"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone, User, CheckCircle, AlertCircle, Loader2, Send } from "lucide-react";
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
    const trimmedName = formData.name.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedEmail = formData.email.trim();

    // Name Validation
    if (!trimmedName) return "Full name is required.";
    if (trimmedName.length < 2) return "Full name must be at least 2 characters.";
    if (trimmedName.length > 60) return "Full name cannot exceed 60 characters.";
    const nameRegex = /^[a-zA-Z\s.'-]+$/;
    if (!nameRegex.test(trimmedName)) {
      return "Please enter a valid name (letters only, no numbers or special symbols).";
    }

    // Phone Validation
    if (!trimmedPhone) return "Phone number is required.";
    const digitsOnly = trimmedPhone.replace(/\D/g, "");
    if (digitsOnly.length < 7 || digitsOnly.length > 15) {
      return "Please enter a valid phone number (between 7 and 15 digits).";
    }
    const phoneStructureRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
    if (!phoneStructureRegex.test(trimmedPhone)) {
      return "Please enter a valid phone number format (e.g. +91 9876543210 or +1 555-0199).";
    }

    // Email Validation
    if (!trimmedEmail) return "Email address is required.";
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(trimmedEmail)) {
      return "Please enter a valid email address (e.g. buyer@company.com).";
    }

    return null;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers, +, spaces, hyphens, and parentheses
    const sanitized = e.target.value.replace(/[^0-9+\s\-()]/g, "");
    setFormData((prev) => ({ ...prev, phone: sanitized }));
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow letters, spaces, hyphens, apostrophes, and dots
    const sanitized = e.target.value.replace(/[^a-zA-Z\s.'-]/g, "");
    setFormData((prev) => ({ ...prev, name: sanitized }));
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
        }),
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.success) {
        setStatus("success");
      } else {
        setErrorMessage(result?.message || "Failed to submit request. Please try again.");
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
              /* Success Screen — Email Sent Confirmation */
              <div className="text-center space-y-6 py-4">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-serif text-[#1E3261]">
                    Catalogue Sent to Your Email!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                    We have successfully dispatched our complete B2B Product Catalogue to:
                    <br />
                    <span className="font-bold text-[#1E3261] break-all">{formData.email}</span>
                  </p>
                  <p className="text-xs text-slate-400 pt-1">
                    Please check your inbox (including Promotions or Spam folders).
                  </p>
                </div>
                <div className="pt-2">
                  <Button 
                    variant="default" 
                    onClick={handleClose} 
                    className="w-full font-bold h-12"
                  >
                    Done
                  </Button>
                </div>
              </div>
            ) : (
              /* Form / Error Screen */
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1E3261] text-[10px] font-bold uppercase tracking-wider">
                    <Mail size={10} /> Delivered To Your Inbox
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-[#1E3261]">
                    Request Catalogue
                  </h3>
                  <p className="text-xs text-slate-500">
                    Fill in your details below to receive the complete export catalogue directly on your email address.
                  </p>
                </div>

                {status === "error" && errorMessage && (
                  <div className="p-4 rounded-xl bg-rose-50 border border-rose-100 text-rose-700 text-xs flex items-start gap-3">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form 
                  onSubmit={handleSubmit} 
                  className="space-y-4"
                >

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <input
                        type="text"
                        name="name"
                        required
                        disabled={status === "submitting"}
                        placeholder="e.g. Robert Smith"
                        value={formData.name}
                        onChange={handleNameChange}
                        maxLength={60}
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
                        name="phone"
                        inputMode="tel"
                        required
                        disabled={status === "submitting"}
                        placeholder="e.g. +1 555-0199"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        maxLength={20}
                        className="w-full bg-white border border-slate-200/80 rounded-xl py-3 pl-10 pr-4 text-sm outline-none focus:border-[#1E3261]/60 focus:ring-1 focus:ring-[#1E3261]/20 transition-all font-medium text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <input
                        type="email"
                        name="email"
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
                          Sending to Your Email...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Catalogue to My Email
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


