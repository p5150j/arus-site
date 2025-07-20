"use client";

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Loader from '@/components/Loader';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import ServicesSection from '@/components/ServicesSection';
import CaseStudies from '@/components/CaseStudies';
import EngagementModels from '@/components/EngagementModels';
import GlobalPresence from '@/components/GlobalPresence';
import Philosophy from '@/components/Philosophy';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const PageWrapper = styled.div`
  position: relative;
  overflow-x: hidden;
`;

const SectionTransition = styled.div<{ $index: number }>`
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(26, 26, 26, 0.1) 20%,
      rgba(26, 26, 26, 0.1) 80%,
      transparent 100%
    );
    opacity: 0;
    animation: fadeIn 1s ease-out forwards;
    animation-delay: ${props => props.$index * 0.2}s;
  }
`;

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Loader />;
  }

  return (
    <PageWrapper>
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(1deg);
          }
          75% {
            transform: translateY(20px) rotate(-1deg);
          }
        }

        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Override any conflicting styles */
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        /* Ensure sections stack properly */
        section {
          position: relative;
          width: 100%;
        }

        /* Fix grid layouts */
        .problem-grid {
          display: grid !important;
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 2px !important;
        }

        .services-grid {
          display: grid !important;
          grid-template-columns: repeat(3, 1fr) !important;
          gap: 4rem !important;
        }

        .models-container {
          display: grid !important;
          grid-template-columns: repeat(3, 1fr) !important;
          gap: 2px !important;
        }

        @media (max-width: 768px) {
          .problem-grid {
            grid-template-columns: 1fr !important;
          }

          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }

          .models-container {
            grid-template-columns: 1fr !important;
          }
        }

        /* Ensure fonts are applied */
        h1, h2 {
          font-family: var(--font-playfair), serif !important;
        }

        .mono {
          font-family: var(--font-jetbrains), monospace !important;
        }

        /* Fix navigation */
        nav {
          position: fixed !important;
          top: 0 !important;
          width: 100% !important;
          z-index: 1000 !important;
        }

        /* Ensure hero is full height */
        .hero {
          min-height: 100vh !important;
          display: flex !important;
          align-items: center !important;
        }
      `}</style>
      
      <Loader />
      <Navigation />
      
      <SectionTransition $index={0}>
        <Hero />
      </SectionTransition>
      
      <SectionTransition $index={1}>
        <ProblemSection />
      </SectionTransition>
      
      <SectionTransition $index={2}>
        <ServicesSection />
      </SectionTransition>
      
      <SectionTransition $index={3}>
        <CaseStudies />
      </SectionTransition>
      
      <SectionTransition $index={4}>
        <EngagementModels />
      </SectionTransition>
      
      <SectionTransition $index={5}>
        <GlobalPresence />
      </SectionTransition>
      
      <SectionTransition $index={6}>
        <Philosophy />
      </SectionTransition>
      
      <SectionTransition $index={7}>
        <Contact />
      </SectionTransition>
      
      <Footer />
    </PageWrapper>
  );
}