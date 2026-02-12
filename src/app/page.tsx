import { HeroSection } from "@/components/sections/hero-section";
import { Metadata } from "next";
// import { QuoteSection } from "@/components/sections/quote-section";
// import { CareersSection } from "@/components/sections/careers-section";

export const metadata: Metadata = {
  title: 'Home',
  description: 'HISN Digital provides enterprise-grade Cloud Solutions, Cybersecurity Services, and IT Infrastructure Management. Transform your digital infrastructure with our expert team.',
  openGraph: {
    title: 'HISN Digital - Transform Your Digital Infrastructure',
    description: 'Enterprise-grade Cloud Solutions, Cybersecurity Services, and IT Infrastructure Management.',
    images: ['/og-image.png'],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      {/* <QuoteSection /> */}
      {/* <CareersSection /> */}
    </div>
  );
}
