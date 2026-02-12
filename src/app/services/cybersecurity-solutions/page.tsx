import { Container } from "@/components/ui/container";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CybersecuritySolutionsPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <Container>
        {/* Breadcrumb */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-secondary-text hover:text-white transition-colors mb-8">
          <span>Home</span>
          <ChevronRight className="h-4 w-4" />
          <span>Services</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-white">Cybersecurity Solutions</span>
        </Link>

        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-bold tracking-widest text-hisn-red uppercase block mb-4">
            CORE SERVICE
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            Cybersecurity Solutions
          </h1>
          <p className="text-xl text-secondary-text max-w-3xl">
            We protect businesses from evolving cyber threats with proactive, layered security strategies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Cybersecurity Services Include:</h2>
            <ul className="space-y-4">
              {[
                "Security Risk Assessment & Audits",
                "Network & Endpoint Security",
                "Identity & Access Management (IAM)",
                "Security Operations Center (SOC)",
                "Vulnerability Assessment & Penetration Testing (VAPT)",
                "Compliance & Regulatory Support (ISO, GDPR, HIPAA, etc.)",
                "Incident Response & Digital Forensics"
              ].map((service) => (
                <li key={service} className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-hisn-red flex-shrink-0 mt-0.5" />
                  <span className="text-secondary-text">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Why Choose Our Security Solutions?</h2>
            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-semibold mb-2">Proactive Protection</h3>
                <p className="text-sm text-secondary-text">Multi-layered security frameworks to prevent threats before they impact your business.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-semibold mb-2">Compliance Ready</h3>
                <p className="text-sm text-secondary-text">Meet regulatory requirements with our comprehensive compliance support.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-semibold mb-2">24/7 Monitoring</h3>
                <p className="text-sm text-secondary-text">Round-the-clock threat detection and incident response capabilities.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-black to-[#B11C24] border border-white/10 rounded-lg p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-4">Secure your digital assets today</h3>
          <p className="text-secondary-text mb-6 max-w-2xl">
            Let's build a comprehensive security strategy tailored to your organization's unique needs.
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
