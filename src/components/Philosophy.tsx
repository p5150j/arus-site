"use client";

import { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '@/styles/theme';

const float = keyframes`
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-20px) scale(1.05);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const Section = styled.section`
  background: linear-gradient(135deg, ${theme.colors.lightGrey} 0%, ${theme.colors.beige} 100%);
  padding: clamp(6rem, 15vw, 10rem) clamp(1.5rem, 5vw, 3rem);
  position: relative;
  overflow: hidden;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackgroundShape = styled.div<{ $top?: string; $left?: string; $size: number; $delay?: number }>`
  position: absolute;
  top: ${props => props.$top || '50%'};
  left: ${props => props.$left || '50%'};
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: radial-gradient(circle, rgba(255, 107, 53, 0.05) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(60px);
  animation: ${float} ${props => 10 + (props.$delay || 0)}s ease-in-out infinite;
  animation-delay: ${props => props.$delay || 0}s;
  pointer-events: none;
`;

const GeometricPattern = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.02;
  background-image: 
    repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(26, 26, 26, 0.5) 35px, rgba(26, 26, 26, 0.5) 70px),
    repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(255, 107, 53, 0.5) 35px, rgba(255, 107, 53, 0.5) 70px);
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const QuoteWrapper = styled.div<{ $isVisible: boolean }>`
  display: inline-block;
  position: relative;
  padding: 0 4rem;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: ${props => props.$isVisible ? 'translateY(0)' : 'translateY(40px)'};
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
`;

const QuoteMark = styled.span<{ $position: 'left' | 'right'; $isVisible: boolean }>`
  position: absolute;
  font-size: 8rem;
  color: ${theme.colors.accent};
  opacity: 0.1;
  font-family: ${theme.fonts.serif};
  line-height: 1;
  user-select: none;
  transform: ${props => {
    const baseRotation = props.$position === 'left' ? -5 : 5;
    return props.$isVisible ? `scale(1) rotate(${baseRotation}deg)` : `scale(0) rotate(${baseRotation * 2}deg)`;
  }};
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${props => props.$position === 'left' ? '0.2s' : '0.4s'};
  
  ${props => props.$position === 'left' ? `
    top: -3rem;
    left: -2rem;
  ` : `
    bottom: -4rem;
    right: -2rem;
  `}
`;

const Quote = styled.p<{ $isVisible: boolean }>`
  font-family: ${theme.fonts.serif};
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  line-height: 1.6;
  color: ${theme.colors.charcoal};
  margin: 0;
  position: relative;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: ${props => props.$isVisible ? 'translateY(0)' : 'translateY(30px)'};
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  
  strong {
    color: ${theme.colors.accent};
    font-weight: 600;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: ${theme.colors.accent};
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
  
  &:hover strong::after {
    transform: scaleX(1);
  }
`;

const AccentLine = styled.span`
  display: block;
  margin-top: 1rem;
  color: ${theme.colors.accent};
  font-weight: 400;
  letter-spacing: -0.02em;
`;

const Attribution = styled.div<{ $isVisible: boolean }>`
  margin-top: 4rem;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: ${props => props.$isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)'};
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s;
`;

const AttributionBadge = styled.div`
  display: inline-block;
  padding: 1rem 2.5rem;
  background: rgba(26, 26, 26, 0.03);
  border: 1px solid rgba(26, 26, 26, 0.08);
  border-radius: 40px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s ease;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 107, 53, 0.1) 50%,
      transparent 100%
    );
    background-size: 200% 100%;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border-color: ${theme.colors.accent};
    
    &::before {
      opacity: 1;
      animation: ${shimmer} 2s linear infinite;
    }
    
    .signature {
      color: ${theme.colors.accent};
    }
  }
`;

const Signature = styled.p`
  font-family: ${theme.fonts.mono};
  font-size: 0.875rem;
  color: ${theme.colors.textSecondary};
  margin: 0;
  letter-spacing: 1px;
  transition: color 0.3s ease;
  position: relative;
  z-index: 1;
`;

const FloatingIcon = styled.div<{ $x: number; $y: number; $delay: number }>`
  position: absolute;
  font-size: 1.5rem;
  opacity: 0.05;
  animation: ${float} 15s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
  left: ${props => props.$x}%;
  top: ${props => props.$y}%;
  pointer-events: none;
  user-select: none;
`;

const OrbitingElement = styled.div<{ $radius: number; $duration: number }>`
  position: absolute;
  width: ${props => props.$radius * 2}px;
  height: ${props => props.$radius * 2}px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${rotate} ${props => props.$duration}s linear infinite;
  pointer-events: none;
  
  &::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background: ${theme.colors.accent};
    border-radius: 50%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.2;
  }
`;

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = sectionRef.current;
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <Section ref={sectionRef}>
      <GeometricPattern />
      
      <BackgroundShape $top="10%" $left="10%" $size={300} $delay={0} />
      <BackgroundShape $top="70%" $left="80%" $size={400} $delay={2} />
      <BackgroundShape $top="50%" $left="50%" $size={200} $delay={4} />
      
      <FloatingIcon $x={10} $y={20} $delay={0}>⚡</FloatingIcon>
      <FloatingIcon $x={85} $y={25} $delay={1}>🎯</FloatingIcon>
      <FloatingIcon $x={15} $y={75} $delay={2}>💡</FloatingIcon>
      <FloatingIcon $x={90} $y={70} $delay={3}>🚀</FloatingIcon>
      
      <OrbitingElement $radius={150} $duration={20} />
      <OrbitingElement $radius={200} $duration={30} />
      <OrbitingElement $radius={250} $duration={40} />
      
      <Container>
        <QuoteWrapper $isVisible={isVisible}>
          <QuoteMark $position="left" $isVisible={isVisible}>&ldquo;</QuoteMark>
          <QuoteMark $position="right" $isVisible={isVisible}>&rdquo;</QuoteMark>
          
          <Quote $isVisible={isVisible}>
            The best consultants make themselves <strong>unnecessary</strong>.
            <AccentLine>
              I build systems and teams that don&apos;t need me.
            </AccentLine>
          </Quote>
        </QuoteWrapper>

        <Attribution $isVisible={isVisible}>
          <AttributionBadge>
            <Signature className="signature">
              — Patrick Ortell
            </Signature>
          </AttributionBadge>
        </Attribution>
      </Container>
    </Section>
  );
}