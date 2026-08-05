"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { EnquirySchema, EnquiryInput } from "@/lib/validations";
import { submitEnquiryAction } from "@/actions";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Send, CheckCircle, AlertCircle, Loader2, ChevronDown } from "lucide-react";

function CustomSelect({ 
  value, 
  onChange, 
  options 
}: { 
  value: string, 
  onChange: (v: string) => void,
  options: {value: string, label: string}[]
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  
  React.useEffect(() => {
    const clickOut = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
    }
    document.addEventListener("mousedown", clickOut);
    return () => document.removeEventListener("mousedown", clickOut);
  }, []);

  const selectedOption = options.find(o => o.value === value);

  return (
    <div className="relative" ref={ref}>
      <button 
        type="button" 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full rounded-sm border border-border p-3.5 px-4 text-sm bg-background text-foreground focus:ring-1 focus:ring-primary focus:outline-hidden transition-all flex items-center justify-between text-left"
      >
        <span className={selectedOption ? "" : "text-muted-foreground"}>{selectedOption ? selectedOption.label : "Select product..."}</span>
        <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-border rounded-sm shadow-[0_8px_30px_rgb(0,0,0,0.08)] z-50 overflow-hidden py-1">
          {options.map(opt => (
            <button
              key={opt.value}
              type="button"
              onClick={() => {
                onChange(opt.value);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${value === opt.value ? 'bg-slate-50 font-bold text-[#1E3261]' : 'hover:bg-slate-50 text-slate-700'}`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
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
      productInterest: "exercise-books",
      moq: "",
      message: ""
    }
  });

  // Prefill dynamic interest if referenced from product cards
  React.useEffect(() => {
    if (interestParam) {
      const validOptions = [
        "exercise-books",
        "spiral-bound",
        "double-wire-bound",
        "gally-bound",
        "centre-stitched",
        "glue-bound",
        "packaging"
      ];
      if (validOptions.includes(interestParam)) {
        setValue("productInterest", interestParam as EnquiryInput["productInterest"]);
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
              Email ID *
            </label>
            <input
              id="email-field"
              type="email"
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
              Phone / WhatsApp *
            </label>
            <input
              id="phone-field"
              type="text"
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
            <CustomSelect
              value={watch("productInterest") || ""}
              onChange={(val) => setValue("productInterest", val as any, { shouldValidate: true })}
              options={[
                { value: "exercise-books", label: "Exercise Books" },
                { value: "spiral-bound", label: "Spiral Bound" },
                { value: "double-wire-bound", label: "Double Wire Bound" },
                { value: "gally-bound", label: "Hard Cover Gally Bound" },
                { value: "centre-stitched", label: "Centre Stitched" },
                { value: "glue-bound", label: "Glue Bound" },
                { value: "packaging", label: "Paper Packaging" }
              ]}
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
              Required Volume / MOQ *
            </label>
            <input
              id="moq-field"
              type="text"
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
            Message & Custom Specifications *
          </label>
          <textarea
            id="msg-field"
            rows={4}
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
              Send B2B Enquiry
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

