import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hisndigital.com'),
  title: {
    default: 'HISN Digital - Cloud, Cybersecurity & IT Infrastructure Solutions',
    template: '%s | HISN Digital'
  },
  description: 'Leading provider of Cloud Solutions, Cybersecurity Services, and IT Infrastructure Management. We help organizations migrate, secure, and optimize their digital infrastructure.',
  keywords: ['Cloud Solutions', 'Cybersecurity', 'IT Infrastructure', 'Cloud Migration', 'AWS', 'Azure', 'Google Cloud', 'Network Security', 'Data Center Management', 'SOC', 'Managed Services'],
  authors: [{ name: 'HISN Digital' }],
  creator: 'HISN Digital',
  publisher: 'HISN Digital',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hisndigital.com',
    title: 'HISN Digital - Cloud, Cybersecurity & IT Infrastructure Solutions',
    description: 'Leading provider of Cloud Solutions, Cybersecurity Services, and IT Infrastructure Management.',
    siteName: 'HISN Digital',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'HISN Digital - Technology Solutions',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HISN Digital - Cloud, Cybersecurity & IT Infrastructure Solutions',
    description: 'Leading provider of Cloud Solutions, Cybersecurity Services, and IT Infrastructure Management.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'HISN Digital',
    url: 'https://hisndigital.com',
    logo: 'https://hisndigital.com/logo.png',
    description: 'Leading provider of Cloud Solutions, Cybersecurity Services, and IT Infrastructure Management.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
    },
    sameAs: [
      'https://www.linkedin.com/company/hisndigital',
      'https://twitter.com/hisndigital'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['English']
    },
    areaServed: 'Worldwide',
    serviceType: ['Cloud Solutions', 'Cybersecurity', 'IT Infrastructure']
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
