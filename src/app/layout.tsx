import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://arus.io'),
  title: {
    default: 'Patrick Ortell | Fractional CTO & Technical Advisor',
    template: '%s | Patrick Ortell'
  },
  description: 'Senior AI & engineering help without the full-time hire. LLMs, MLOps, architecture, infrastructure - 14 years shipping, 3 exits. Fractional CTO services for startups and small teams.',
  keywords: [
    'fractional CTO',
    'technical advisor',
    'AI consultant',
    'LLM implementation',
    'MLOps',
    'startup CTO',
    'technical due diligence',
    'engineering leadership',
    'Techstars mentor',
    'AWS architect'
  ],
  authors: [{ name: 'Patrick Ortell', url: 'https://linkedin.com/in/patrickortell' }],
  creator: 'Patrick Ortell',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arus.io',
    siteName: 'Patrick Ortell - Fractional CTO',
    title: 'Patrick Ortell | Fractional CTO & Technical Advisor',
    description: 'Senior AI & engineering help without the full-time hire. LLMs, MLOps, architecture, infrastructure - 14 years shipping, 3 exits.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Patrick Ortell - Fractional CTO & Technical Advisor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patrick Ortell | Fractional CTO & Technical Advisor',
    description: 'Senior AI & engineering help without the full-time hire. LLMs, MLOps, architecture - 14 years shipping, 3 exits.',
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
  alternates: {
    canonical: 'https://arus.io',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://arus.io/#person',
      name: 'Patrick Ortell',
      jobTitle: 'Fractional CTO & Technical Advisor',
      email: 'patrick.ortell@arus.io',
      url: 'https://arus.io',
      sameAs: ['https://linkedin.com/in/patrickortell'],
      knowsAbout: ['Artificial Intelligence', 'Machine Learning', 'LLM Implementation', 'MLOps', 'Cloud Architecture', 'AWS', 'Kubernetes', 'Technical Leadership', 'Startup Advisory'],
      description: 'Fractional CTO with 14+ years of experience, 3 successful exits, and expertise in AI/ML, cloud architecture, and engineering leadership.'
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://arus.io/#service',
      name: 'Patrick Ortell - Fractional CTO Services',
      provider: { '@id': 'https://arus.io/#person' },
      url: 'https://arus.io',
      description: 'Fractional CTO and technical advisory services for startups and small teams.',
      areaServed: 'Worldwide',
      serviceType: ['Fractional CTO', 'Technical Advisory', 'AI/ML Consulting', 'Architecture Review', 'Technical Due Diligence'],
      priceRange: '$1,500 - $5,000/month'
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
