"use client";

import { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '@/styles/theme';
import GradientBlobs from './GradientBlobs';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Section = styled.section`
  background: #0f0f0f;
  color: white;
  padding: clamp(4rem, 10vw, 8rem) clamp(1.5rem, 5vw, 3rem);
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

const BackgroundPattern = styled.div`
  position: absolute;
  inset: 0;
  background: 
    linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.01) 100%),
    radial-gradient(ellipse at top left, rgba(255, 255, 255, 0.015) 0%, transparent 40%),
    radial-gradient(ellipse at bottom right, rgba(255, 255, 255, 0.015) 0%, transparent 40%);
`;


const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionIntro = styled.div`
  max-width: 800px;
  margin: 0 auto 5rem;
  text-align: center;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;
`;

const Title = styled.h2`
  font-family: ${theme.fonts.serif};
  font-size: clamp(1.5rem, 3.5vw, 2.75rem);
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 1.75rem;
  }
`;

const Subtitle = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 300;
  line-height: 1.8;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 0.85rem;
  }
`;

const ModelsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  overflow: hidden;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: 0.2s;

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ModelCard = styled.div<{ $index: number; $hovered: boolean }>`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  padding: 2.5rem 2rem;
  text-align: left;
  position: relative;
  transition: all 0.3s ease;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  
  &:last-child {
    border-right: none;
  }
  
  @media (max-width: ${theme.breakpoints.desktop}) {
    &:nth-child(2n) {
      border-right: none;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.4s ease;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.04);
    
    &::before {
      transform: scaleX(1);
    }
    
    .model-price {
      color: white;
    }
    
    .model-features {
      opacity: 0.9;
      transform: translateY(0);
    }
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    
    &:last-child {
      border-bottom: none;
    }
  }
`;


const ModelTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  transition: color 0.3s ease;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 0.9rem;
  }
`;

const ModelPrice = styled.div`
  font-family: ${theme.fonts.sans};
  font-size: 1.75rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 1rem 0;
  font-weight: 200;
  letter-spacing: -0.02em;
  transition: color 0.3s ease;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 1.5rem;
  }
`;

const ModelDetails = styled.p`
  font-size: 0.75rem;
  opacity: 0.6;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 0.7rem;
  }
`;

const ModelFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0 0;
  opacity: 0.7;
  transform: translateY(10px);
  transition: all 0.3s ease;
`;

const Feature = styled.li`
  font-size: 0.8rem;
  opacity: 0.7;
  padding: 0.5rem 0;
  position: relative;
  padding-left: 1.5rem;

  &::before {
    content: '—';
    position: absolute;
    left: 0;
    color: rgba(255, 255, 255, 0.3);
    font-weight: 200;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 0.75rem;
  }
`;


export default function EngagementModels() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const models = [
    { 
      title: "Venture Partner", 
      price: "$100-200K", 
      details: "Monthly + 2-5% carry",
      icon: "⚡",
      features: [
        "Full technical leadership",
        "Hands-on development",
        "Team building & hiring",
        "Strategic guidance"
      ]
    },
    { 
      title: "Project Rescue", 
      price: "$300-750K", 
      details: "Fixed engagement",
      icon: "🚀",
      features: [
        "Rapid assessment",
        "Crisis intervention",
        "Complete rebuilds",
        "Knowledge transfer"
      ]
    },
    { 
      title: "Technical Advisory", 
      price: "$50-75K", 
      details: "Monthly retainer",
      icon: "💡",
      features: [
        "Architecture reviews",
        "Due diligence",
        "Team mentoring",
        "Strategic planning"
      ]
    },
    { 
      title: "Flexible Engagement", 
      price: "$500-750/hr", 
      details: "Mix & match as needed",
      icon: "🎯",
      features: [
        "Any service on-demand",
        "No minimum commitment",
        "Priority scheduling",
        "Surge support available"
      ]
    }
  ];

  return (
    <Section ref={sectionRef} id="models">
      <BackgroundPattern />
      <GradientBlobs theme="dark" />

      <Container>
        <SectionIntro>
          <Title>Engagement Models</Title>
          <Subtitle>
            Structured for institutional capital requirements
          </Subtitle>
        </SectionIntro>

        <ModelsGrid>
          {models.map((model, index) => (
            <ModelCard
              key={index}
              $index={index}
              $hovered={hoveredIndex === index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <ModelTitle className="model-title">{model.title}</ModelTitle>
              <ModelPrice>{model.price}</ModelPrice>
              <ModelDetails>{model.details}</ModelDetails>
              
              <ModelFeatures className="model-features">
                {model.features.map((feature, featureIndex) => (
                  <Feature key={featureIndex}>{feature}</Feature>
                ))}
              </ModelFeatures>
            </ModelCard>
          ))}
        </ModelsGrid>
      </Container>
    </Section>
  );
}