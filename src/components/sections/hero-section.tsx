"use client";

import { useRef, useState, useEffect } from "react";
import { Container } from "@/components/ui/container";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Service data derived from Core Services content
const services = [
    {
        type: "CORE SERVICE",
        title: "Cloud Solutions",
        description: "Migrate, optimize, and manage cloud environments for agility and cost efficiency.",
        hoverDescription: "We help businesses transition to the cloud seamlessly, optimizing infrastructure for performance and cost-effectiveness. Our cloud solutions ensure scalability, security, and operational excellence across AWS, Azure, and Google Cloud platforms.",
        image: "/cube.png",
        gradientFrom: "#000000",
        gradientTo: "#4A0F14",
        href: "/services/cloud-solutions",
    },
    {
        type: "CORE SERVICE",
        title: "Cybersecurity Solutions",
        description: "Protect businesses from evolving cyber threats with proactive, layered security strategies.",
        hoverDescription: "Our comprehensive cybersecurity approach combines threat detection, prevention, and response strategies. We implement multi-layered security frameworks to protect your digital assets, data, and infrastructure from sophisticated cyber threats.",
        image: "/pulses.png",
        gradientFrom: "#000000",
        gradientTo: "#B11C24",
        href: "/services/cybersecurity-solutions",
    },
    {
        type: "CORE SERVICE",
        title: "IT Infrastructure",
        description: "Design and manage robust infrastructure ensuring performance, availability, and scalability.",
        hoverDescription: "We design and maintain enterprise-grade IT infrastructure that powers your business operations. From network architecture to server management, we ensure high availability, optimal performance, and seamless scalability as your business grows.",
        image: "/pulso.png",
        gradientFrom: "#000000",
        gradientTo: "#D32F2F",
        href: "/services/it-infrastructure",
    },
];

// ServiceCard Component
function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
    return (
        <Link href={service.href}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (index * 0.1) }}
                whileHover="hover"
                className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg group cursor-pointer bg-black"
                style={{ 
                    transformStyle: "preserve-3d",
                    perspective: "1000px"
                }}
            >
            {/* Background Image - comes out towards viewer with 3D effect and fade */}
            <motion.div
                className="absolute inset-0"
                variants={{
                    hover: {
                        scale: 1.3,
                        x: "30%",
                        y: "30%",
                        z: 100,
                        opacity: 0,
                        transition: {
                            duration: 0.6,
                            ease: [0.16, 1, 0.3, 1]
                        }
                    }
                }}
                style={{ 
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                    transformOrigin: "center center"
                }}
            >
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    unoptimized
                    priority={index === 0}
                    className="object-cover"
                />
                {/* Subtle Gradient Overlay - Only at bottom for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </motion.div>

            {/* Gradient Background - appears on hover with delay */}
            <motion.div 
                className="absolute inset-0"
                style={{
                    background: `linear-gradient(135deg, ${service.gradientFrom} 0%, ${service.gradientTo} 100%)`
                }}
                variants={{
                    hover: {
                        opacity: 1,
                        transition: {
                            duration: 0.8,
                            delay: 0.5,
                            ease: "easeOut"
                        }
                    }
                }}
                initial={{ opacity: 0 }}
            />

            {/* Text Content */}
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col">
                {/* Top section - always visible */}
                <div>
                    <span className="text-xs font-bold tracking-widest text-white uppercase block mb-4">
                        {service.type}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                        {service.title}
                    </h3>
                </div>
                
                {/* Bottom section - only on hover */}
                <div className="mt-auto">
                    {/* Detailed description - slides in from right on hover */}
                    <motion.div
                        className="absolute inset-x-6 md:inset-x-8 bottom-20"
                        variants={{
                            hover: {
                                x: 0,
                                opacity: 1,
                                transition: {
                                    duration: 0.5,
                                    delay: 0.2,
                                    ease: [0.16, 1, 0.3, 1]
                                }
                            }
                        }}
                        initial={{ x: 100, opacity: 0 }}
                    >
                        <p className="text-white/90 text-sm md:text-base leading-relaxed">
                            {service.hoverDescription}
                        </p>
                    </motion.div>
                    
                    {/* Expand button - slides up from bottom */}
                    <motion.button
                        className="absolute bottom-6 md:bottom-8 left-6 md:left-8 text-white text-sm font-semibold inline-flex items-center gap-2"
                        variants={{
                            hover: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                    duration: 0.4,
                                    delay: 0.3,
                                    ease: [0.16, 1, 0.3, 1]
                                }
                            }
                        }}
                        initial={{ y: 50, opacity: 0 }}
                    >
                        Expand
                        <ChevronRight className="h-4 w-4" />
                    </motion.button>
                </div>
            </div>
        </motion.div>
        </Link>
    );
}

export function HeroSection() {
    const ref = useRef<HTMLDivElement>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    // Autoplay for mobile carousel
    useEffect(() => {
        const autoplayInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % services.length);
        }, 2000); // 2 second gap

        return () => clearInterval(autoplayInterval);
    }, []);

    return (
        <section ref={ref} className="relative bg-black min-h-screen flex flex-col pt-8 overflow-hidden">
            {/* Background Parallax */}
            <motion.div
                style={{ y: bgY }}
                className="absolute inset-0 z-0 select-none pointer-events-none"
            >
                <div className="absolute inset-0 bg-black" />
            </motion.div>

            {/* Main Hero Content - Compact vertical spacing to fit cards */}
            <Container className="relative z-10 flex-1 flex flex-col justify-center py-8 md:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">

                    {/* Left Column: Big Title */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-7"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-[clamp(3.5rem,7vw,6.5rem)] font-black tracking-tighter text-white leading-[0.9]">
                            SECURE YOUR <br />
                            <span className="flex items-center gap-2">
                                DIGITAL
                            </span>
                            <span className="text-hisn-red">
                                FUTURE
                            </span>
                        </h1>
                    </motion.div>

                    {/* Right Column: Description & CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="lg:col-span-5 lg:pl-8 flex flex-col justify-center"
                    >
                        <div className="w-12 h-1 bg-hisn-red mb-6" />
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                            Enterprise IT Solutions & Cybersecurity
                        </h2>
                        <p className="text-secondary-text text-base md:text-lg leading-relaxed mb-6 max-w-sm">
                            We deliver comprehensive cloud solutions, robust cybersecurity, and scalable IT infrastructure that empowers businesses to thrive in the digital age with confidence and security.
                        </p>
                        <button className="group flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs md:text-sm hover:text-gray-300 transition-colors">
                            Explore our services
                            <span className="bg-accent-light p-1 transition-transform duration-300 group-hover:translate-x-1">
                                <ChevronRight className="h-3 w-3 md:h-4 md:w-4 text-white stroke-[3px]" />
                            </span>
                        </button>
                    </motion.div>

                </div>
            </Container>

            {/* Services Cards - Grid on desktop, Carousel on mobile */}
            <div className="relative z-20 w-full bg-black pt-12 pb-24">
                <Container>
                    {/* Desktop Grid - hidden on mobile */}
                    <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <ServiceCard key={service.title} service={service} index={index} />
                        ))}
                    </div>

                    {/* Mobile Carousel */}
                    <div className="md:hidden relative">
                        <div className="overflow-hidden">
                            <motion.div
                                className="flex"
                                animate={{ x: `-${currentSlide * 100}%` }}
                                transition={{ 
                                    duration: 0.8, 
                                    ease: [0.25, 0.1, 0.25, 1],
                                    type: "tween"
                                }}
                            >
                                {services.map((service, index) => (
                                    <div key={service.title} className="w-full flex-shrink-0 px-2">
                                        <ServiceCard service={service} index={index} />
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Carousel Dots */}
                        <div className="flex justify-center gap-2 mt-6">
                            {services.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`h-1 rounded-full transition-all duration-300 ${
                                        currentSlide === index 
                                            ? 'w-8 bg-hisn-red' 
                                            : 'w-1 bg-white/30'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </Container>
            </div>

        </section>
    );
}

