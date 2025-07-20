"use client";

import { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '@/styles/theme';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  33% {
    transform: translateY(-10px) rotate(1deg);
  }
  66% {
    transform: translateY(10px) rotate(-1deg);
  }
`;

const Section = styled.section`
  background: ${theme.colors.lightGrey};
  padding: clamp(6rem, 12vw, 10rem) clamp(1.5rem, 5vw, 3rem);
  position: relative;
  overflow: hidden;
`;

const BackgroundCanvas = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.5;
`;

const GridPattern = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.02;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionIntro = styled.div`
  max-width: 800px;
  margin: 0 auto 6rem;
  text-align: center;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;
`;

const Title = styled.h2`
  font-family: ${theme.fonts.serif};
  font-size: clamp(${theme.fontSizes['4xl']}, 4vw, ${theme.fontSizes['5xl']});
  margin-bottom: 1.5rem;
  color: ${theme.colors.charcoal};
  font-weight: ${theme.fontWeights.medium};
  letter-spacing: ${theme.letterSpacing.tight};
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: ${theme.colors.accent};
    transition: width 0.4s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const Subtitle = styled.p`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.textSecondary};
  font-weight: ${theme.fontWeights.light};
  line-height: ${theme.lineHeights.relaxed};
  letter-spacing: ${theme.letterSpacing.normal};
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ServiceBlock = styled.div<{ $index: number; $inView: boolean }>`
  position: relative;
  padding: 2.5rem;
  background: transparent;
  opacity: ${props => props.$inView ? 1 : 0};
  transform: ${props => props.$inView ? 'translateY(0)' : 'translateY(40px)'};
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: ${props => props.$index * 0.15}s;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(26, 26, 26, 0.1) 20%, rgba(26, 26, 26, 0.1) 80%, transparent);
  }
  
  &:hover {
    .service-icon {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }
    
    .service-title {
      &::after {
        width: 100%;
      }
    }
    
    .service-item {
      color: ${theme.colors.textPrimary};
    }
  }
`;

const ServiceIcon = styled.div`
  width: 48px;
  height: 48px;
  background: ${theme.colors.charcoal};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-family: ${theme.fonts.mono};
  font-size: 1.125rem;
  color: white;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const ServiceNumber = styled.span`
  font-family: ${theme.fonts.mono};
  font-size: ${theme.fontSizes.xs};
  color: rgba(26, 26, 26, 0.4);
  margin-bottom: 0.75rem;
  display: block;
  font-weight: ${theme.fontWeights.normal};
  letter-spacing: ${theme.letterSpacing.widest};
  text-transform: uppercase;
`;

const ServiceTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  margin-bottom: 1.25rem;
  color: ${theme.colors.charcoal};
  font-weight: ${theme.fontWeights.medium};
  letter-spacing: ${theme.letterSpacing.tight};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 0;
    height: 1px;
    background: ${theme.colors.accent};
    transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ServiceItem = styled.li`
  padding: 0.5rem 0;
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textSecondary};
  font-weight: ${theme.fontWeights.normal};
  line-height: ${theme.lineHeights.relaxed};
  position: relative;
  padding-left: 1.75rem;
  transition: all 0.3s ease;
  
  &::before {
    content: '—';
    position: absolute;
    left: 0;
    top: 0.5rem;
    color: rgba(26, 26, 26, 0.3);
    font-weight: ${theme.fontWeights.light};
  }
`;


const BackgroundDecoration = styled.div<{ $side: 'left' | 'right' }>`
  position: absolute;
  ${props => props.$side === 'left' ? 'left: -10%' : 'right: -10%'};
  ${props => props.$side === 'left' ? 'top: -20%' : 'bottom: -20%'};
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(255, 107, 53, 0.03) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(40px);
  pointer-events: none;
  animation: ${float} 20s ease-in-out infinite;
  animation-delay: ${props => props.$side === 'left' ? '0s' : '10s'};
`;

const AnimatedPath = styled.path<{ $inView: boolean }>`
  stroke: rgba(255, 107, 53, 0.1);
  stroke-width: 1;
  fill: none;
  stroke-dasharray: 1000;
  stroke-dashoffset: ${props => props.$inView ? 0 : 1000};
  transition: stroke-dashoffset 2s ease-out;
`;

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inViewElements, setInViewElements] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setInViewElements(prev => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.service-observe');
    elements?.forEach(el => observer.observe(el));

    return () => {
      elements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  const services = [
    {
      number: "01",
      title: "New Ventures",
      icon: "{ }",
      items: [
        "Transform thesis to working product",
        "Build scalable technical foundation",
        "Recruit permanent engineering leadership",
        "Complete knowledge transfer"
      ]
    },
    {
      number: "02",
      title: "Portfolio Rescue",
      icon: "⚡",
      items: [
        "Fix stalled technical initiatives",
        "Replace failing development teams",
        "Scale for institutional clients",
        "Prepare technical assets for exit"
      ]
    },
    {
      number: "03",
      title: "Investment Support",
      icon: "◆",
      items: [
        "Technical due diligence with code review",
        "Build versus buy analysis",
        "Post-acquisition integration",
        "Interim technical leadership"
      ]
    }
  ];

  return (
    <Section ref={sectionRef} id="services">
      <BackgroundCanvas>
        <GridPattern viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(26, 26, 26, 0.1)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
          <AnimatedPath 
            $inView={inViewElements.size > 0}
            d="M 10,50 Q 30,20 50,50 T 90,50"
          />
        </GridPattern>
      </BackgroundCanvas>
      
      <BackgroundDecoration $side="left" />
      <BackgroundDecoration $side="right" />
      
      <Container>
        <SectionIntro>
          <Title>A Different Approach</Title>
          <Subtitle>
            Twenty years shipping production code. Zero PowerPoints delivered.
          </Subtitle>
        </SectionIntro>

        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceBlock 
              key={index} 
              $index={index} 
              $inView={inViewElements.has(index)}
              className="service-observe"
              data-index={index}
            >
              <ServiceIcon className="service-icon">
                {service.icon}
              </ServiceIcon>
              <ServiceNumber className="service-number">{service.number}</ServiceNumber>
              <ServiceTitle className="service-title">{service.title}</ServiceTitle>
              <ServiceList>
                {service.items.map((item, itemIndex) => (
                  <ServiceItem key={itemIndex} className="service-item">
                    {item}
                  </ServiceItem>
                ))}
              </ServiceList>
            </ServiceBlock>
          ))}
        </ServicesGrid>
      </Container>
    </Section>
  );
}