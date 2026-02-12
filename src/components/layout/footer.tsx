"use client";

import { Container } from "@/components/ui/container";
import Link from "next/link";
import dynamic from "next/dynamic";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
    ssr: false,
});

export function Footer() {
    const globeConfig = {
        pointSize: 4,
        globeColor: "#1a1a1a",
        showAtmosphere: true,
        atmosphereColor: "#D32F2F",
        atmosphereAltitude: 0.15,
        emissive: "#D32F2F",
        emissiveIntensity: 0.15,
        shininess: 0.9,
        polygonColor: "rgba(255,255,255,0.8)",
        ambientLight: "#ffffff",
        directionalLeftLight: "#ffffff",
        directionalTopLight: "#ffffff",
        pointLight: "#D32F2F",
        arcTime: 1000,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        initialPosition: { lat: 22.3193, lng: 114.1694 },
        autoRotate: true,
        autoRotateSpeed: 0.5,
    };

    const colors = ["#D32F2F", "#B11C24", "#4A0F14"];
    const sampleArcs = [
        {
            order: 1,
            startLat: -19.885592,
            startLng: -43.951191,
            endLat: -22.9068,
            endLng: -43.1729,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
            order: 1,
            startLat: 28.6139,
            startLng: 77.209,
            endLat: 3.139,
            endLng: 101.6869,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
            order: 2,
            startLat: 1.3521,
            startLng: 103.8198,
            endLat: 35.6762,
            endLng: 139.6503,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
            order: 2,
            startLat: 51.5072,
            startLng: -0.1276,
            endLat: 3.139,
            endLng: 101.6869,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
            order: 3,
            startLat: -33.8688,
            startLng: 151.2093,
            endLat: 22.3193,
            endLng: 114.1694,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
            order: 3,
            startLat: 21.3099,
            startLng: -157.8581,
            endLat: 40.7128,
            endLng: -74.006,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
            order: 4,
            startLat: -34.6037,
            startLng: -58.3816,
            endLat: 22.3193,
            endLng: 114.1694,
            arcAlt: 0.7,
            color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
            order: 4,
            startLat: 51.5072,
            startLng: -0.1276,
            endLat: 48.8566,
            endLng: -2.3522,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
            order: 5,
            startLat: 14.5995,
            startLng: 120.9842,
            endLat: 51.5072,
            endLng: -0.1276,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
            order: 6,
            startLat: 37.5665,
            startLng: 126.978,
            endLat: 35.6762,
            endLng: 139.6503,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
            order: 6,
            startLat: 22.3193,
            startLng: 114.1694,
            endLat: 51.5072,
            endLng: -0.1276,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
            order: 7,
            startLat: 48.8566,
            startLng: -2.3522,
            endLat: 52.52,
            endLng: 13.405,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
            order: 8,
            startLat: 49.2827,
            startLng: -123.1207,
            endLat: 52.3676,
            endLng: 4.9041,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
            order: 9,
            startLat: 51.5072,
            startLng: -0.1276,
            endLat: 34.0522,
            endLng: -118.2437,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
            order: 10,
            startLat: 34.0522,
            startLng: -118.2437,
            endLat: 31.2304,
            endLng: 121.4737,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * colors.length)],
        },
    ];

    return (
        <footer className="relative bg-black border-t border-white/10 overflow-hidden">
            {/* Top Section with Company Info and Links */}
            <Container className="relative z-10 pt-16 pb-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                    {/* Logo and Description */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-hisn-red rounded flex items-center justify-center">
                                <span className="text-white font-black text-lg">H</span>
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-white font-bold text-base">HISN DIGITAL</span>
                                <span className="text-hisn-red font-semibold text-[10px] tracking-wide">IT SOLUTIONS</span>
                            </div>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Empowering businesses with cutting-edge IT solutions. From cloud infrastructure to cybersecurity, we deliver excellence worldwide.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="text-sm font-bold text-white mb-4">Product</h3>
                        <ul className="space-y-3">
                            {["Overview", "Pricing", "Marketplace", "Features"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-sm font-bold text-white mb-4">Company</h3>
                        <ul className="space-y-3">
                            {["About", "Team", "Blog", "Careers"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>

            {/* Globe Section - Bottom Half */}
            <div className="relative h-[300px] md:h-[400px]">
                {/* Globe - Only bottom half visible */}
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-[300px] md:-bottom-[400px] w-full h-[600px] md:h-[800px]">
                    <div className="absolute w-full h-full">
                        <World data={sampleArcs} globeConfig={globeConfig} />
                    </div>
                    {/* Gradient overlay to blend globe with footer */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Copyright at bottom */}
                <Container className="relative z-10 h-full flex items-end pb-6">
                    <p className="text-xs text-gray-500">
                        © Copyright HISN Digital IT Solutions 2026. All rights reserved.
                    </p>
                </Container>
            </div>
        </footer>
    );
}
