"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CareersSection() {
    return (
        <section className="py-0 bg-black min-h-[600px] flex items-stretch border-t border-white/10">
            <div className="flex-1 hidden lg:block relative">
                {/* Placeholder for Image */}
                <div className="absolute inset-0 bg-neutral-900 bg-[url('/office-bg.jpg')] bg-cover bg-center opacity-50" />
            </div>

            <div className="flex-1 flex items-center bg-black">
                <div className="p-12 md:p-24 max-w-2xl">
                    <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">CAREERS</h2>
                    <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-8">
                        Build a career that's as exciting as the world we're shaping.
                    </h3>
                    <p className="text-xl text-secondary-text mb-12">
                        Grow personally and professionally in a global company that helps you unlock your full potential.
                    </p>
                    <Button variant="primary">
                        Join us
                    </Button>
                </div>
            </div>
        </section>
    );
}
