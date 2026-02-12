"use client";

import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "link";
    icon?: boolean;
}

export function Button({
    children,
    className,
    variant = "primary",
    icon = true,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(
                "group flex items-center gap-2 rounded-none px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] transition-all duration-300",
                variant === "primary" && "bg-white text-black hover:bg-gray-200",
                variant === "secondary" && "border border-white/20 bg-transparent text-white hover:bg-white/10",
                variant === "link" && "px-0 text-hisn-red hover:text-red-400",
                className
            )}
            {...props}
        >
            {children}
            {icon && (
                <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <ChevronRight className={cn("h-4 w-4", variant === "link" ? "text-hisn-red" : "text-current")} />
                </motion.span>
            )}
        </button>
    );
}
