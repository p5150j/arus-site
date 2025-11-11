"use client";

import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '@/styles/theme';
import GradientBlobs from './GradientBlobs';

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

const progressFlow = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const Section = styled.section`
  background: #0a0a0a;
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
  color: rgba(255, 255, 255, 0.95);
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
  color: rgba(255, 255, 255, 0.6);
  font-weight: ${theme.fontWeights.light};
  line-height: ${theme.lineHeights.relaxed};
  letter-spacing: ${theme.letterSpacing.normal};
`;

const PipelineContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto 6rem;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: 0.3s;
`;

const PipelineTrack = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  position: relative;
  padding: 3rem 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    overflow-x: auto;
    overflow-y: hidden;
    padding: 2rem 0;
    margin: 0 -1.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    /* Hide scrollbar but keep functionality */
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const PipelineStage = styled.div<{ $index: number; $inView: boolean }>`
  flex: 1;
  position: relative;
  opacity: ${props => props.$inView ? 1 : 0};
  transform: ${props => props.$inView ? 'translateY(0)' : 'translateY(20px)'};
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: ${props => props.$index * 0.15}s;

  @media (max-width: ${theme.breakpoints.tablet}) {
    min-width: 280px;
    flex-shrink: 0;
  }
`;

const StageCard = styled.div`
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(34, 197, 94, 0.4);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(34, 197, 94, 0.2), 0 0 40px rgba(34, 197, 94, 0.15);
    transform: translateY(-2px);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 2rem;
  }
`;

const StageHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

const StageIcon = styled.div<{ $completed: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${props => props.$completed ? '#22c55e' : 'rgba(26, 26, 26, 0.1)'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.875rem;
  font-weight: bold;
  transition: all 0.4s ease;
`;

const StageNumber = styled.div`
  font-family: ${theme.fonts.mono};
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const StageTitle = styled.h3`
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.medium};
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 0.5rem;
  letter-spacing: ${theme.letterSpacing.tight};
`;

const StageMetric = styled.div`
  font-family: ${theme.fonts.mono};
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.375rem;

  span {
    color: #22c55e;
    font-weight: ${theme.fontWeights.medium};
  }
`;

const ProgressBar = styled.div`
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  margin-top: 1rem;
  position: relative;
`;

const ProgressFill = styled.div<{ $progress: number; $delay: number }>`
  height: 100%;
  background: linear-gradient(90deg, #22c55e, #10b981);
  width: ${props => props.$progress}%;
  transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: ${props => props.$delay}s;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: ${progressFlow} 1.5s ease-in-out infinite;
  }
`;

const PipelineConnector = styled.div`
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, #22c55e 0%, #22c55e 100%);
  position: relative;
  margin: 0 -1px;
  z-index: 0;
  flex-shrink: 0;

  &::after {
    content: '→';
    position: absolute;
    right: -8px;
    top: 50%;
    transform: translateY(-50%);
    color: #22c55e;
    font-size: 1rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 30px;
    margin: 0 -2px;
  }
`;

const BackgroundDecoration = styled.div<{ $side: 'left' | 'right' }>`
  position: absolute;
  ${props => props.$side === 'left' ? 'left: -10%' : 'right: -10%'};
  ${props => props.$side === 'left' ? 'top: -20%' : 'bottom: -20%'};
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(34, 197, 94, 0.08) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(60px);
  pointer-events: none;
  animation: ${float} 20s ease-in-out infinite;
  animation-delay: ${props => props.$side === 'left' ? '0s' : '10s'};
`;

const AnimatedPath = styled.path<{ $inView: boolean }>`
  stroke: rgba(34, 197, 94, 0.2);
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
            setInViewElements(prev => new Set([...prev, 0]));
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const pipelineStages = [
    {
      number: "01",
      title: "Discover",
      metric: "3-5 days",
      value: "Deep technical audit",
      progress: 100,
      icon: "✓"
    },
    {
      number: "02",
      title: "Build",
      metric: "8-12 weeks",
      value: "Production-ready MVP",
      progress: 100,
      icon: "✓"
    },
    {
      number: "03",
      title: "Deploy",
      metric: "< 48 hours",
      value: "Live in production",
      progress: 100,
      icon: "✓"
    },
    {
      number: "04",
      title: "Scale",
      metric: "Ongoing",
      value: "Revenue generating",
      progress: 100,
      icon: "✓"
    }
  ];

  return (
    <Section ref={sectionRef} id="services">
      <GradientBlobs theme="dark" />
      <BackgroundCanvas>
        <GridPattern viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.5"/>
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
            Twenty years shipping production code. Zero bullshit delivered.
          </Subtitle>
        </SectionIntro>

        <PipelineContainer>
          <PipelineTrack>
            {pipelineStages.map((stage, index) => (
              <React.Fragment key={index}>
                <PipelineStage
                  $index={index}
                  $inView={inViewElements.size > 0}
                >
                  <StageCard>
                    <StageHeader>
                      <StageIcon $completed={true}>
                        {stage.icon}
                      </StageIcon>
                      <StageNumber>Stage {stage.number}</StageNumber>
                    </StageHeader>
                    <StageTitle>{stage.title}</StageTitle>
                    <StageMetric>
                      Timeline: <span>{stage.metric}</span>
                    </StageMetric>
                    <StageMetric>
                      Output: <span>{stage.value}</span>
                    </StageMetric>
                    <ProgressBar>
                      <ProgressFill $progress={stage.progress} $delay={0.5 + index * 0.2} />
                    </ProgressBar>
                  </StageCard>
                </PipelineStage>
                {index < pipelineStages.length - 1 && <PipelineConnector />}
              </React.Fragment>
            ))}
          </PipelineTrack>
        </PipelineContainer>
      </Container>
    </Section>
  );
}