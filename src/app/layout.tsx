import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://arus.io'),
  title: {
    default: 'Patrick Ortell | AI Infrastructure & Platform Architect',
    template: '%s | Patrick Ortell'
  },
  description: 'AI Infrastructure & Platform Architect at myCOI. In-house LLM fine-tuning, GraphRAG, MLOps, enterprise AI platforms - 14 years shipping, 3 exits. Advising startups through Techstars and beyond.',
  keywords: [
    'AI infrastructure architect',
    'LLM fine-tuning',
    'LoRA',
    'GraphRAG',
    'technical advisor',
    'AI consultant',
    'MLOps',
    'technical due diligence',
    'engineering leadership',
    'Techstars mentor'
  ],
  authors: [{ name: 'Patrick Ortell', url: 'https://linkedin.com/in/patrickortell' }],
  creator: 'Patrick Ortell',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arus.io',
    siteName: 'Patrick Ortell - AI Infrastructure & Platform Architect',
    title: 'Patrick Ortell | AI Infrastructure & Platform Architect',
    description: 'In-house LLM fine-tuning, GraphRAG, MLOps, enterprise AI platforms - 14 years shipping, 3 exits.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Patrick Ortell - AI Infrastructure & Platform Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patrick Ortell | AI Infrastructure & Platform Architect',
    description: 'In-house LLM fine-tuning, GraphRAG, MLOps, enterprise AI platforms - 14 years shipping, 3 exits.',
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
      jobTitle: 'AI Infrastructure & Platform Architect',
      worksFor: { '@type': 'Organization', name: 'myCOI' },
      email: 'patrick.ortell@arus.io',
      url: 'https://arus.io',
      sameAs: ['https://linkedin.com/in/patrickortell'],
      knowsAbout: ['Artificial Intelligence', 'Machine Learning', 'LLM Fine-Tuning', 'LoRA', 'GraphRAG', 'Knowledge Graphs', 'MLOps', 'Cloud Architecture', 'AWS', 'Kubernetes', 'Technical Leadership', 'Startup Advisory'],
      description: 'AI Infrastructure & Platform Architect with 14+ years of experience, 3 successful exits, and expertise in LLM fine-tuning, GraphRAG, MLOps, and engineering leadership.'
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://arus.io/#service',
      name: 'Patrick Ortell - Technical Advisory',
      provider: { '@id': 'https://arus.io/#person' },
      url: 'https://arus.io',
      description: 'Technical advisory and AI/ML consulting for startups — strategy, architecture reviews, and technical due diligence.',
      areaServed: 'Worldwide',
      serviceType: ['Technical Advisory', 'AI/ML Consulting', 'Architecture Review', 'Technical Due Diligence']
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
