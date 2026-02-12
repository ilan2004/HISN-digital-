import { Container } from "@/components/ui/container";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Cloud Solutions',
  description: 'Migrate, optimize, and manage cloud environments with HISN Digital. Expert cloud strategy, migration, architecture, security, and managed services for AWS, Azure, Google Cloud, and Private Cloud.',
  keywords: ['Cloud Migration', 'AWS', 'Azure', 'Google Cloud', 'Cloud Security', 'Hybrid Cloud', 'Cloud Architecture', 'Managed Cloud Services', 'Cloud Consulting'],
  openGraph: {
    title: 'Cloud Solutions | HISN Digital',
    description: 'Expert cloud migration, optimization, and management services for AWS, Azure, and Google Cloud.',
    images: ['/og-cloud.png'],
  },
};

export default function CloudSolutionsPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <Container>
        {/* Breadcrumb */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-secondary-text hover:text-white transition-colors mb-8">
          <span>Home</span>
          <ChevronRight className="h-4 w-4" />
          <span>Services</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-white">Cloud Solutions</span>
        </Link>

        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-bold tracking-widest text-hisn-red uppercase block mb-4">
            CORE SERVICE
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            Cloud Solutions
          </h1>
          <p className="text-xl text-secondary-text max-w-3xl">
            We help organizations migrate, optimize, and manage cloud environments for agility and cost efficiency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Cloud Services Include:</h2>
            <ul className="space-y-4">
              {[
                "Cloud Strategy & Consulting",
                "Cloud Migration (Public, Private & Hybrid)",
                "Cloud Architecture & Design",
                "Cloud Security & Governance",
                "Managed Cloud Services",
                "Backup, Disaster Recovery & Business Continuity"
              ].map((service) => (
                <li key={service} className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-hisn-red flex-shrink-0 mt-0.5" />
                  <span className="text-secondary-text">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Platforms We Support:</h2>
            <div className="grid grid-cols-2 gap-4">
              {["AWS", "Microsoft Azure", "Google Cloud", "Private Cloud"].map((platform) => (
                <div key={platform} className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                  <span className="font-semibold">{platform}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-black to-[#4A0F14] border border-white/10 rounded-lg p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-4">Ready to transform your cloud infrastructure?</h3>
          <p className="text-secondary-text mb-6 max-w-2xl">
            Let's discuss how our cloud solutions can help your organization achieve greater agility and efficiency.
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
