"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { ChevronRight, Globe, Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "What we do", href: "/what-we-do" },
    { name: "What we think", href: "/insights" },
    { name: "Who we are", href: "/about" },
    { name: "Careers", href: "/careers" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled ? "bg-black/80 backdrop-blur-md border-white/10 py-4" : "bg-transparent py-6"
            )}
        >
            <Container className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    {/* Logo */}
                    <div className="flex flex-col leading-none">
                        <span className="text-xl md:text-2xl font-black tracking-tight text-white">HISN DIGITAL</span>
                        <span className="text-xs md:text-sm font-bold tracking-wider text-hisn-red">IT SOLUTIONS</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-hisn-red transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* Utilities */}
                <div className="hidden md:flex items-center gap-6">
                    <button className="text-white hover:text-hisn-red transition-colors">
                        <Search className="h-5 w-5" />
                    </button>
                    <button className="flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300">
                        <Globe className="h-4 w-4" />
                        <span>UAE</span>
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </Container>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-black border-b border-white/10 md:hidden"
                    >
                        <Container className="py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-white hover:text-hisn-red"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
