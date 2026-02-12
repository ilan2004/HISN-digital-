"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    hoverEffect?: boolean;
}

export function Card({ children, className, hoverEffect = true, ...props }: CardProps) {
    return (
        <motion.div
            className={cn(
                "relative flex flex-col overflow-hidden border-t border-border bg-surface p-8 transition-colors duration-500",
                "before:absolute before:inset-x-0 before:top-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
                hoverEffect && "hover:border-accent-light",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
}
