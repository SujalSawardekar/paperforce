"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedGroupProps {
  children: React.ReactNode;
  className?: string;
  delayOffset?: number;
  staggerDelay?: number;
}

export function AnimatedGroup({
  children,
  className,
  delayOffset = 0,
  staggerDelay = 0.1
}: AnimatedGroupProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
        delayChildren: delayOffset
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.3 : 0.7,
        ease: [0.21, 0.47, 0.32, 0.98] as const
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
      className={className}
      style={{ willChange: "opacity, transform" }}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement<{ className?: string }>(child)) return null;
        const childClassName = child.props.className || "";
        const colSpanClasses = childClassName
          .split(" ")
          .filter((c) => c.includes("col-span"))
          .join(" ");

        return (
          <motion.div variants={itemVariants} className={cn("h-full w-full", colSpanClasses)}>
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
}

