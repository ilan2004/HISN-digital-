import { Container } from "@/components/ui/container";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'IT Infrastructure Solutions',
  description: 'Design and manage robust IT infrastructure with HISN Digital. Data center management, server & storage solutions, network design, virtualization, and 24/7 infrastructure monitoring.',
  keywords: ['IT Infrastructure', 'Data Center', 'Server Management', 'Storage Solutions', 'Network Design', 'Virtualization', 'Containerization', 'Infrastructure Monitoring', 'IT Asset Management'],
  openGraph: {
    title: 'IT Infrastructure Solutions | HISN Digital',
    description: 'Robust IT infrastructure that ensures performance, availability, and scalability.',
    images: ['/og-infrastructure.png'],
  },
};

export default function ITInfrastructurePage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <Container>
        {/* Breadcrumb */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-secondary-text hover:text-white transition-colors mb-8">
          <span>Home</span>
          <ChevronRight className="h-4 w-4" />
          <span>Services</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-white">IT Infrastructure</span>
        </Link>

        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-bold tracking-widest text-hisn-red uppercase block mb-4">
            CORE SERVICE
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            IT Infrastructure Solutions
          </h1>
          <p className="text-xl text-secondary-text max-w-3xl">
            We design and manage robust IT infrastructure that ensures performance, availability, and scalability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Infrastructure Services Include:</h2>
            <ul className="space-y-4">
              {[
                "Data Center Design & Management",
                "Server & Storage Solutions",
                "Network Design & Implementation",
                "Virtualization & Containerization",
                "IT Asset Management",
                "Infrastructure Monitoring & Support"
              ].map((service) => (
                <li key={service} className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-hisn-red flex-shrink-0 mt-0.5" />
                  <span className="text-secondary-text">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Key Benefits:</h2>
            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-semibold mb-2">High Availability</h3>
                <p className="text-sm text-secondary-text">Enterprise-grade infrastructure designed for maximum uptime and reliability.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-semibold mb-2">Scalable Architecture</h3>
                <p className="text-sm text-secondary-text">Infrastructure that grows with your business needs seamlessly.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-semibold mb-2">Optimal Performance</h3>
                <p className="text-sm text-secondary-text">Fine-tuned systems delivering peak performance for your operations.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-black to-[#D32F2F] border border-white/10 rounded-lg p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-4">Build a foundation for growth</h3>
          <p className="text-secondary-text mb-6 max-w-2xl">
            Let's design an IT infrastructure that powers your business operations with reliability and efficiency.
          </p>
          <button className="group flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm hover:text-gray-300 transition-colors">
            Get in touch
            <span className="bg-accent-light p-1 transition-transform duration-300 group-hover:translate-x-1">
              <ChevronRight className="h-4 w-4 text-white stroke-[3px]" />
            </span>
          </button>
        </div>
      </Container>
    </div>
  );
}
