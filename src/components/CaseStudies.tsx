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

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Section = styled.section`
  background: ${theme.colors.beige};
  padding: clamp(4rem, 10vw, 8rem) 0;
  position: relative;
  overflow: hidden;
`;

const SectionIntro = styled.div`
  max-width: 800px;
  margin: 0 auto 5rem;
  text-align: center;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
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
`;

const Subtitle = styled.p`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.textSecondary};
  font-weight: ${theme.fontWeights.light};
  line-height: ${theme.lineHeights.relaxed};
`;

const CaseStudy = styled.div<{ $even?: boolean }>`
  padding: clamp(3rem, 8vw, 6rem) clamp(1.5rem, 5vw, 3rem);
  background: ${props => props.$even ? theme.colors.lightGrey : 'transparent'};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, rgba(26, 26, 26, 0.1) 50%, transparent 100%);
  }
`;

const CaseContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(3rem, 8vw, 6rem);
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const CaseText = styled.div<{ $inView?: boolean }>`
  opacity: 0;
  animation: ${props => props.$inView ? slideIn : 'none'} 0.8s ease-out forwards;
`;

const CaseTitle = styled.h3`
  font-family: ${theme.fonts.serif};
  font-size: clamp(${theme.fontSizes['3xl']}, 3vw, ${theme.fontSizes['4xl']});
  margin-bottom: 2rem;
  color: ${theme.colors.charcoal};
  font-weight: ${theme.fontWeights.normal};
  letter-spacing: ${theme.letterSpacing.tight};
`;

const CaseDescription = styled.p`
  font-size: ${theme.fontSizes.lg};
  line-height: ${theme.lineHeights.relaxed};
  color: ${theme.colors.textSecondary};
  margin-bottom: 1.5rem;
  font-weight: ${theme.fontWeights.normal};
`;

const CaseResult = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: ${theme.colors.textPrimary};
  margin-bottom: 3rem;
  font-weight: 500;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
`;

const Metric = styled.div`
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  padding: 2rem;
  text-align: center;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    
    .metric-value {
      transform: scale(1.05);
    }
  }
`;

const MetricValue = styled.span`
  font-family: ${theme.fonts.serif};
  font-size: clamp(${theme.fontSizes['4xl']}, 4vw, ${theme.fontSizes['5xl']});
  color: ${theme.colors.accent};
  display: block;
  margin-bottom: 0.5rem;
  transition: transform 0.3s ease;
  font-weight: ${theme.fontWeights.light};
  letter-spacing: ${theme.letterSpacing.tighter};
`;

const MetricLabel = styled.span`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${theme.colors.textSecondary};
`;

const CaseVisual = styled.div<{ $inView?: boolean }>`
  position: relative;
  height: 500px;
  background: ${theme.colors.warmGrey};
  border-radius: 16px;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.95);
  animation: ${props => props.$inView ? fadeIn : 'none'} 0.8s ease-out forwards;
  animation-delay: 0.2s;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 300px;
  }
`;

const VisualPattern = styled.div`
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(45deg, transparent 40%, rgba(255, 107, 53, 0.05) 50%, transparent 60%),
    linear-gradient(-45deg, transparent 40%, rgba(26, 26, 26, 0.05) 50%, transparent 60%);
  background-size: 30px 30px;
  animation: slide 20s linear infinite;
  
  @keyframes slide {
    from { transform: translate(0, 0); }
    to { transform: translate(30px, 30px); }
  }
`;

const VisualShape = styled.div<{ $index: number }>`
  position: absolute;
  border: 2px solid rgba(26, 26, 26, 0.1);
  animation: float ${props => 10 + props.$index * 2}s ease-in-out infinite;
  animation-delay: ${props => props.$index}s;
  
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    33% { transform: translateY(-20px) rotate(120deg); }
    66% { transform: translateY(20px) rotate(240deg); }
  }
`;

const CaseNumber = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  font-family: ${theme.fonts.mono};
  font-size: 0.875rem;
  color: ${theme.colors.accent};
  z-index: 10;
  background: rgba(255, 255, 255, 0.9);
  padding: 0.5rem 1rem;
  border-radius: 20px;
`;

const ReferenceNote = styled.div`
  text-align: center;
  padding: clamp(4rem, 8vw, 6rem) clamp(1.5rem, 5vw, 3rem) clamp(2rem, 4vw, 3rem);
  max-width: 600px;
  margin: 0 auto;
  font-family: ${theme.fonts.serif};
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.textSecondary};
  font-style: italic;
  letter-spacing: ${theme.letterSpacing.wide};
  line-height: ${theme.lineHeights.relaxed};
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: 0.5s;
  
  span {
    font-weight: ${theme.fontWeights.medium};
    color: ${theme.colors.textPrimary};
  }
`;

export default function CaseStudies() {
  const [inViewElements, setInViewElements] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll('.case-observe');
    elements?.forEach(el => observer.observe(el));

    return () => {
      elements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  const cases = [
    {
      title: "Agricultural Intelligence",
      description: "Private capital sought to transform farming through AI. Previous team consumed 18 months on research papers.",
      result: "Built production system in 12 weeks. Now processing data for 10,000+ agricultural operations daily.",
      metrics: [
        { value: "12", label: "Weeks to Production" },
        { value: "10K+", label: "Daily Active Users" }
      ]
    },
    {
      title: "Fintech Fraud Detection",
      description: "New venture required enterprise-grade ML capabilities. Traditional consultants quoted $2M and 9 months.",
      result: "Delivered complete solution for $400K in 3 months. Processing $50M daily with 94% accuracy.",
      metrics: [
        { value: "80%", label: "Cost Reduction" },
        { value: "$50M", label: "Daily Volume" }
      ]
    },
    {
      title: "SaaS Transformation",
      description: "Portfolio company with compelling vision but failing execution. Required complete rebuild during operations.",
      result: "Zero downtime migration. 40% infrastructure cost reduction. Successful exit in 18 months.",
      metrics: [
        { value: "40%", label: "OpEx Reduction" },
        { value: "18mo", label: "To Exit" }
      ]
    }
  ];

  return (
    <Section ref={sectionRef} id="cases">
      <SectionIntro>
        <Title>Recent Work</Title>
        <Subtitle>
          Confidential engagements. Measurable outcomes.
        </Subtitle>
      </SectionIntro>

      {cases.map((caseStudy, index) => (
        <CaseStudy key={index} $even={index % 2 === 1} className="case-observe" data-index={index}>
          <CaseContent>
            <CaseText $inView={inViewElements.has(index)}>
              <CaseTitle>{caseStudy.title}</CaseTitle>
              <CaseDescription>{caseStudy.description}</CaseDescription>
              <CaseResult>{caseStudy.result}</CaseResult>
              <MetricsGrid>
                {caseStudy.metrics.map((metric, metricIndex) => (
                  <Metric key={metricIndex}>
                    <MetricValue className="metric-value">{metric.value}</MetricValue>
                    <MetricLabel>{metric.label}</MetricLabel>
                  </Metric>
                ))}
              </MetricsGrid>
            </CaseText>
            
            <CaseVisual $inView={inViewElements.has(index)}>
              <CaseNumber>0{index + 1}</CaseNumber>
              <VisualPattern />
              
              {/* Floating geometric shapes - abstractly matching engagement type */}
              {index === 0 && (
                <>
                  {/* Agricultural Intelligence - data nodes, growth rings, network connections */}
                  {/* Central data hub */}
                  <VisualShape
                    $index={0}
                    style={{
                      top: '30%',
                      left: '30%',
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(255, 107, 53, 0.05) 0%, transparent 70%)',
                      border: '2px solid rgba(26, 26, 26, 0.1)',
                    }}
                  />
                  {/* Growth rings */}
                  <VisualShape
                    $index={1}
                    style={{
                      top: '25%',
                      left: '25%',
                      width: '160px',
                      height: '160px',
                      borderRadius: '50%',
                      borderStyle: 'dashed',
                      borderWidth: '1px',
                      opacity: 0.5,
                    }}
                  />
                  <VisualShape
                    $index={2}
                    style={{
                      top: '20%',
                      left: '20%',
                      width: '200px',
                      height: '200px',
                      borderRadius: '50%',
                      borderWidth: '1px',
                      borderColor: 'rgba(26, 26, 26, 0.05)',
                      opacity: 0.3,
                    }}
                  />
                  {/* Data nodes */}
                  <VisualShape
                    $index={3}
                    style={{
                      top: '15%',
                      right: '25%',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(255, 107, 53, 0.03)',
                      border: 'none',
                    }}
                  />
                  <VisualShape
                    $index={4}
                    style={{
                      bottom: '20%',
                      left: '15%',
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      background: 'rgba(26, 26, 26, 0.03)',
                      border: 'none',
                    }}
                  />
                </>
              )}
              
              {index === 1 && (
                <>
                  {/* Fintech Fraud Detection - shields, barriers, detection grids */}
                  {/* Main shield */}
                  <VisualShape
                    $index={0}
                    style={{
                      top: '25%',
                      left: '35%',
                      width: '100px',
                      height: '120px',
                      borderRadius: '0 0 50% 50%',
                      transform: 'rotate(0deg)',
                      background: 'linear-gradient(180deg, transparent 0%, rgba(255, 107, 53, 0.03) 100%)',
                      border: '2px solid rgba(26, 26, 26, 0.1)',
                    }}
                  />
                  {/* Detection grid */}
                  <VisualShape
                    $index={1}
                    style={{
                      bottom: '20%',
                      right: '15%',
                      width: '150px',
                      height: '150px',
                      borderRadius: '0',
                      transform: 'rotate(45deg)',
                      borderStyle: 'dashed',
                      borderWidth: '1px',
                      opacity: 0.4,
                    }}
                  />
                  <VisualShape
                    $index={2}
                    style={{
                      bottom: '25%',
                      right: '20%',
                      width: '120px',
                      height: '120px',
                      borderRadius: '0',
                      transform: 'rotate(45deg)',
                      borderWidth: '1px',
                      borderColor: 'rgba(26, 26, 26, 0.05)',
                    }}
                  />
                  {/* Security nodes */}
                  <VisualShape
                    $index={3}
                    style={{
                      top: '15%',
                      right: '30%',
                      width: '40px',
                      height: '40px',
                      borderRadius: '4px',
                      transform: 'rotate(45deg)',
                      background: 'rgba(26, 26, 26, 0.02)',
                      border: 'none',
                    }}
                  />
                  <VisualShape
                    $index={4}
                    style={{
                      bottom: '35%',
                      left: '20%',
                      width: '50px',
                      height: '50px',
                      borderRadius: '4px',
                      borderStyle: 'dotted',
                    }}
                  />
                </>
              )}
              
              {index === 2 && (
                <>
                  {/* SaaS Transformation - arrows, transitions, migration paths */}
                  {/* Transformation path */}
                  <VisualShape
                    $index={0}
                    style={{
                      top: '40%',
                      left: '25%',
                      width: '50%',
                      height: '2px',
                      background: 'linear-gradient(90deg, rgba(26, 26, 26, 0.1) 0%, rgba(26, 26, 26, 0.05) 50%, rgba(255, 107, 53, 0.1) 100%)',
                      border: 'none',
                      transform: 'none',
                    }}
                  />
                  {/* Before state */}
                  <VisualShape
                    $index={1}
                    style={{
                      top: '30%',
                      left: '15%',
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      borderStyle: 'dotted',
                      borderWidth: '2px',
                      opacity: 0.5,
                    }}
                  />
                  {/* After state */}
                  <VisualShape
                    $index={2}
                    style={{
                      top: '25%',
                      right: '20%',
                      width: '100px',
                      height: '100px',
                      borderRadius: '12px',
                      background: 'rgba(255, 107, 53, 0.03)',
                      border: '2px solid rgba(255, 107, 53, 0.1)',
                    }}
                  />
                  {/* Migration nodes */}
                  <VisualShape
                    $index={3}
                    style={{
                      bottom: '30%',
                      left: '40%',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(26, 26, 26, 0.02)',
                      border: 'none',
                    }}
                  />
                  <VisualShape
                    $index={4}
                    style={{
                      bottom: '25%',
                      right: '35%',
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      borderStyle: 'dashed',
                      opacity: 0.6,
                    }}
                  />
                </>
              )}
            </CaseVisual>
          </CaseContent>
        </CaseStudy>
      ))}
      
      <ReferenceNote>
        Full client list and detailed references available under <span>mutual NDA</span>
      </ReferenceNote>
    </Section>
  );
}