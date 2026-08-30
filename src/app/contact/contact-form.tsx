"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { EnquirySchema, EnquiryInput } from "@/lib/validations";
import { submitEnquiryAction } from "@/actions";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Send, CheckCircle, AlertCircle, Loader2, Search, ChevronDown, Check, X, Package } from "lucide-react";
import Image from "next/image";
import { collections } from "@/components/products/data";

interface ProductOption {
  id: string;
  name: string;
  category: string;
  image: string;
  keywords: string[];
}

const catalogProducts: ProductOption[] = [
  ...collections.map((c) => ({
    id: c.id,
    name: c.name,
    category: c.id.replace("_", " Set "),
    image: c.coverImage,
    keywords: [
      c.name.toLowerCase(),
      c.description.toLowerCase(),
      ...c.features.map((f) => f.toLowerCase()),
    ],
  })),
  {
    id: "sub_01",
    name: "Legal Pads & Shorthand Notebooks",
    category: "Writing Pads",
    image: "/Images of Product/Set_06/Set_06 (1).png",
    keywords: ["legal", "steno", "shorthand", "writing pad", "notepad", "yellow pad"],
  },
  {
    id: "sub_02",
    name: "Executive Hardcover Journals (A4 / A5)",
    category: "Casebound",
    image: "/Images of Product/Set_07/Set_07 (2).png",
    keywords: ["hardcover", "journal", "diary", "executive", "casebound", "ribbon"],
  },
  {
    id: "sub_03",
    name: "School Exercise Books (Saddle Stitched)",
    category: "Center Pinned",
    image: "/Images of Product/Set_03/Set_03 (1).png",
    keywords: ["school", "exercise book", "stitched", "tender", "student", "pin"],
  },
  {
    id: "sub_04",
    name: "Custom OEM & Private Label Production",
    category: "Custom Branding",
    image: "/Images of Product/Set_02/Set_02 (1).png",
    keywords: ["oem", "private label", "custom", "branding", "bespoke", "bulk"],
  },
];

function ProductSearchAutocomplete({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [query, setQuery] = React.useState(value || "");
  const [highlightIndex, setHighlightIndex] = React.useState(-1);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Synchronize internal query state with form value
  React.useEffect(() => {
    setQuery(value || "");
  }, [value]);

  // Click outside listener
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter suggestions based on query input
  const filteredProducts = React.useMemo(() => {
    if (!query.trim()) return catalogProducts;
    const q = query.toLowerCase().trim();
    return catalogProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.keywords.some((k) => k.includes(q))
    );
  }, [query]);

  const handleSelect = (productName: string) => {
    setQuery(productName);
    onChange(productName);
    setIsOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    onChange(val);
    setIsOpen(true);
    setHighlightIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        setIsOpen(true);
      }
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightIndex((prev) => (prev < filteredProducts.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightIndex((prev) => (prev > 0 ? prev - 1 : filteredProducts.length - 1));
    } else if (e.key === "Enter" && highlightIndex >= 0 && filteredProducts[highlightIndex]) {
      e.preventDefault();
      handleSelect(filteredProducts[highlightIndex].name);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative w-full" ref={containerRef}>
      <div className="relative flex items-center">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        <input
          ref={inputRef}
          type="text"
          suppressHydrationWarning
          value={query}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Type product name (e.g. Counter Books, Spiral, Index Cards)..."
          className="w-full rounded-sm border border-border py-3.5 pl-10 pr-10 text-sm bg-background text-foreground focus:ring-1 focus:ring-primary focus:outline-hidden transition-all"
        />
        {query ? (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              onChange("");
              inputRef.current?.focus();
            }}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Clear product selection"
          >
            <X className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
          >
            <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </button>
        )}
      </div>

      {/* Floating Live Product Suggestions Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] z-50 overflow-hidden max-h-[340px] overflow-y-auto py-2 divide-y divide-slate-100">
          <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between bg-slate-50/80">
            <span>Catalogue Suggestions ({filteredProducts.length})</span>
            <span>Type or select below</span>
          </div>

          {filteredProducts.length > 0 ? (
            filteredProducts.map((prod, idx) => {
              const isSelected = query.toLowerCase().trim() === prod.name.toLowerCase().trim();
              const isHighlighted = idx === highlightIndex;

              return (
                <button
                  key={prod.id}
                  type="button"
                  onClick={() => handleSelect(prod.name)}
                  onMouseEnter={() => setHighlightIndex(idx)}
                  className={`w-full text-left px-3.5 py-2.5 flex items-center justify-between gap-3 transition-colors ${
                    isHighlighted || isSelected ? "bg-blue-50/70" : "hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="relative w-9 h-9 rounded-lg border border-slate-200 bg-white overflow-hidden shrink-0 flex items-center justify-center p-0.5">
                      <Image
                        src={prod.image}
                        alt={prod.name}
                        width={32}
                        height={32}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className={`text-xs font-bold truncate ${isSelected ? "text-[#1E3261]" : "text-slate-800"}`}>
                        {prod.name}
                      </p>
                      <p className="text-[10px] text-slate-400 font-medium truncate">
                        {prod.category}
                      </p>
                    </div>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-[#1E3261] shrink-0" />}
                </button>
              );
            })
          ) : (
            <div className="px-4 py-4 text-center">
              <Package className="w-6 h-6 text-slate-300 mx-auto mb-1" />
              <p className="text-xs font-bold text-slate-700">Custom Entry: &quot;{query}&quot;</p>
              <p className="text-[11px] text-slate-400">
                Your custom specifications will be sent directly to our commercial team.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const interestParam = searchParams.get("interest") || "";

  const [serverMessage, setServerMessage] = React.useState<string | null>(null);
  const [serverSuccess, setServerSuccess] = React.useState<boolean | null>(null);
  const [isSubmittingState, setIsSubmittingState] = React.useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset
  } = useForm<EnquiryInput>({
    resolver: zodResolver(EnquirySchema),
    defaultValues: {
      name: "",
      company: "",
      country: "",
      email: "",
      phone: "",
      productInterest: "",
      moq: "",
      message: ""
    }
  });

  // Prefill dynamic interest if referenced from product cards or URL query params
  React.useEffect(() => {
    if (interestParam) {
      // Find matching catalog product name
      const matched = catalogProducts.find(
        (p) =>
          p.id.toLowerCase() === interestParam.toLowerCase() ||
          p.name.toLowerCase().includes(interestParam.toLowerCase().replace(/-/g, " "))
      );
      if (matched) {
        setValue("productInterest", matched.name);
      } else {
        const cleanName = interestParam.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
        setValue("productInterest", cleanName);
      }
    }
  }, [interestParam, setValue]);

  const onSubmit = async (data: EnquiryInput) => {
    setIsSubmittingState(true);
    setServerMessage(null);
    setServerSuccess(null);
    
    try {
      const response = await submitEnquiryAction(data);
      setServerSuccess(response.success);
      setServerMessage(response.message);
      if (response.success) {
        reset();
      }
    } catch {
      setServerSuccess(false);
      setServerMessage("An unexpected system error occurred. Please submit your request directly to info@paperforce.in.");
    } finally {
      setIsSubmittingState(false);
    }
  };

  return (
    <Card className="p-8 sm:p-10 border border-border/80 rounded-[32px] shadow-sm">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        
        {/* Full Name */}
        <div className="space-y-1">
          <label htmlFor="name-field" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Full Name *
          </label>
          <input
            id="name-field"
            type="text"
            suppressHydrationWarning
            placeholder="John Doe"
            className="w-full rounded-sm border border-border p-3.5 px-4 text-sm bg-background text-foreground focus:ring-1 focus:ring-primary focus:outline-hidden transition-all"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-[10px] text-red-500 font-semibold flex items-center gap-1 mt-0.5">
              <AlertCircle size={10} />
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Company & Country Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label htmlFor="company-field" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Company Name *
            </label>
            <input
              id="company-field"
              type="text"
              suppressHydrationWarning
              placeholder="Enterprise LLC"
              className="w-full rounded-sm border border-border p-3.5 px-4 text-sm bg-background text-foreground focus:ring-1 focus:ring-primary focus:outline-hidden transition-all"
              {...register("company")}
            />
            {errors.company && (
              <p className="text-[10px] text-red-500 font-semibold flex items-center gap-1 mt-0.5">
                <AlertCircle size={10} />
                {errors.company.message}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <label htmlFor="country-field" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Country *
            </label>
            <input
              id="country-field"
              type="text"
              suppressHydrationWarning
              placeholder="United States"
              className="w-full rounded-sm border border-border p-3.5 px-4 text-sm bg-background text-foreground focus:ring-1 focus:ring-primary focus:outline-hidden transition-all"
              {...register("country")}
            />
            {errors.country && (
              <p className="text-[10px] text-red-500 font-semibold flex items-center gap-1 mt-0.5">
                <AlertCircle size={10} />
                {errors.country.message}
              </p>
            )}
          </div>
        </div>

        {/* Email & Phone Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label htmlFor="email-field" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Email Address *
            </label>
            <input
              id="email-field"
              type="email"
              suppressHydrationWarning
              placeholder="buyer@company.com"
              className="w-full rounded-sm border border-border p-3.5 px-4 text-sm bg-background text-foreground focus:ring-1 focus:ring-primary focus:outline-hidden transition-all"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-[10px] text-red-500 font-semibold flex items-center gap-1 mt-0.5">
                <AlertCircle size={10} />
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <label htmlFor="phone-field" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Phone Number *
            </label>
            <input
              id="phone-field"
              type="text"
              suppressHydrationWarning
              placeholder="+1 555 0199"
              className="w-full rounded-sm border border-border p-3.5 px-4 text-sm bg-background text-foreground focus:ring-1 focus:ring-primary focus:outline-hidden transition-all"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-[10px] text-red-500 font-semibold flex items-center gap-1 mt-0.5">
                <AlertCircle size={10} />
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Product Interest & MOQ Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label htmlFor="interest-field" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Product Interest
            </label>
            <ProductSearchAutocomplete
              value={watch("productInterest") || ""}
              onChange={(val) => setValue("productInterest", val, { shouldValidate: true })}
            />
            {errors.productInterest && (
              <p className="text-[10px] text-red-500 font-semibold flex items-center gap-1 mt-0.5">
                <AlertCircle size={10} />
                {errors.productInterest.message}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <label htmlFor="moq-field" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Estimated Order Quantity *
            </label>
            <input
              id="moq-field"
              type="text"
              suppressHydrationWarning
              placeholder="e.g. 1 FCL Container"
              className="w-full rounded-sm border border-border p-3.5 px-4 text-sm bg-background text-foreground focus:ring-1 focus:ring-primary focus:outline-hidden transition-all"
              {...register("moq")}
            />
            {errors.moq && (
              <p className="text-[10px] text-red-500 font-semibold flex items-center gap-1 mt-0.5">
                <AlertCircle size={10} />
                {errors.moq.message}
              </p>
            )}
          </div>
        </div>

        {/* Message / Specifications */}
        <div className="space-y-1">
          <label htmlFor="msg-field" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Project Requirements *
          </label>
          <textarea
            id="msg-field"
            rows={4}
            suppressHydrationWarning
            placeholder="Specify target sizing, cover GSM, lines, and discharge ports..."
            className="w-full rounded-sm border border-border p-4 text-sm bg-background text-foreground focus:ring-1 focus:ring-primary focus:outline-hidden transition-all"
            {...register("message")}
          />
          {errors.message && (
            <p className="text-[10px] text-red-500 font-semibold flex items-center gap-1 mt-0.5">
              <AlertCircle size={10} />
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <Button
          type="submit"
          variant="default"
          className="w-full mt-2 py-6"
          disabled={isSubmittingState}
          id="submit-enquiry-btn"
        >
          {isSubmittingState ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting Enquiry...
            </>
          ) : (
            <>
              Request a Quote
              <Send size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </Button>

        {/* Server response banner */}
        {serverMessage && (
          <div 
            className={`p-4 rounded-2xl flex items-start gap-2.5 text-xs ${
              serverSuccess 
                ? "bg-green-500/10 text-green-600 border border-green-500/20" 
                : "bg-red-500/10 text-red-600 border border-red-500/20"
            }`}
          >
            {serverSuccess ? <CheckCircle size={16} className="shrink-0 mt-0.5" /> : <AlertCircle size={16} className="shrink-0 mt-0.5" />}
            <span>{serverMessage}</span>
          </div>
        )}

      </form>
    </Card>
  );
}

