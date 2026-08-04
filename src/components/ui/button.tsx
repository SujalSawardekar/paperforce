import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "glass";
  size?: "default" | "sm" | "lg" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 active:translate-y-[1px] cursor-pointer",
          {
            // Default (Dark/Primary Button) - subtle white border, inner top highlight, drop shadow
            "bg-primary text-primary-foreground border border-black/10 dark:border-white/10 shadow-[0_2px_4px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-opacity-90 hover:-translate-y-[1px] hover:shadow-[0_4px_8px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.1)] dark:bg-foreground dark:text-background dark:hover:bg-foreground/90":
              variant === "default",
            
            // Outline (Light/Secondary Button) - subtle border, strong inner top highlight, soft drop shadow
            "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_1px_0_rgba(255,255,255,1)] dark:shadow-[0_2px_4px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.05)] hover:-translate-y-[1px] hover:shadow-[0_4px_8px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,1)] dark:hover:shadow-[0_4px_8px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.05)]":
              variant === "outline",
              
            // Ghost (No border or shadow, but tactile background)
            "hover:bg-slate-100 dark:hover:bg-slate-800 text-foreground hover:-translate-y-[1px]": 
              variant === "ghost",
              
            "text-primary dark:text-foreground underline-offset-4 hover:underline p-0 h-auto":
              variant === "link",
            "glass-btn":
              variant === "glass",
          },
          {
            "h-10 px-5 py-2": size === "default",
            "h-9 px-4": size === "sm",
            "h-11 px-8 text-base": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

