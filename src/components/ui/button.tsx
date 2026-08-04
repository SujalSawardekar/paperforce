import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "glass";
  size?: "default" | "sm" | "lg" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative overflow-hidden inline-flex items-center justify-center rounded-full text-sm font-bold tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          {
            // Default (Dark/Primary Button) - slides to white, text to navy
            "bg-[#1E3261] border border-[#1E3261] text-white shadow-md hover:text-[#1E3261]": variant === "default",
            
            // Outline (Light/Secondary Button) - slides to navy, text to white
            "bg-white border border-slate-200 text-[#1E3261] shadow-sm hover:text-white": variant === "outline",
              
            // Ghost (No border or shadow)
            "hover:bg-slate-100 text-slate-900": variant === "ghost",
              
            // Link
            "text-[#1E3261] underline-offset-4 hover:underline p-0 h-auto": variant === "link",
            
            // Glass
            "glass-btn": variant === "glass",
          },
          {
            "h-10 px-5 py-2": size === "default",
            "h-9 px-4": size === "sm",
            "h-12 px-8 text-base": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        {...props}
      >
        {variant === "default" && (
          <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out rounded-full will-change-transform" />
        )}
        {variant === "outline" && (
          <span className="absolute inset-0 bg-[#1E3261] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out rounded-full will-change-transform" />
        )}
        <span className="relative z-10 flex items-center justify-center transition-colors duration-300">
          {children}
        </span>
      </button>
    );
  }
);
Button.displayName = "Button";

