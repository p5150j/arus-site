"use client";

import { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '@/styles/theme';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const scrollDown = keyframes`
  0% { transform: translateY(-20px); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(20px); opacity: 0; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-20px) rotate(1deg); }
  75% { transform: translateY(20px) rotate(-1deg); }
`;

const GraphPaper = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.03;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px),
    linear-gradient(rgba(255, 255, 255, 0.2) 2px, transparent 2px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.2) 2px, transparent 2px);
  background-size: 
    20px 20px,
    20px 20px,
    100px 100px,
    100px 100px;
  background-position:
    0 0,
    0 0,
    0 0,
    0 0;
  transform: perspective(500px) rotateX(15deg);
  transform-origin: center 60%;
  mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
`;

const HeroSection = styled.section`
  height: 100vh;
  position: relative;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const BackgroundCanvas = styled.div`
  position: absolute;
  inset: 0;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.03) 0%, transparent 40%),
      radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.02) 0%, transparent 40%);
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(255, 255, 255, 0.01) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.01) 1px, transparent 1px);
    background-size: 60px 60px;
  }
`;

const FloatingShape = styled.div<{ $delay?: number }>`
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 50%;
  backdrop-filter: blur(1px);
  animation: ${float} ${props => 15 + (props.$delay || 0)}s ease-in-out infinite;
  animation-delay: ${props => props.$delay || 0}s;
  
  &::after {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 50%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.05), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::after {
    opacity: 1;
  }
`;

const HeroContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 3rem;
  position: relative;
  z-index: 2;
  width: 100%;
`;

const Title = styled.h1<{ $delay?: number }>`
  font-family: ${theme.fonts.serif};
  font-size: clamp(${theme.fontSizes['5xl']}, 8vw, 8rem);
  line-height: ${theme.lineHeights.tight};
  color: white;
  margin: 0;
  font-weight: ${theme.fontWeights.normal};
  letter-spacing: ${theme.letterSpacing.tighter};
  
  span {
    display: block;
    opacity: 0;
    animation: ${fadeInUp} 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation-delay: ${props => props.$delay || 0}s;
  }
`;

const Subtitle = styled.p`
  font-size: clamp(${theme.fontSizes.lg}, 2vw, ${theme.fontSizes['2xl']});
  font-weight: ${theme.fontWeights.light};
  color: rgba(255, 255, 255, 0.7);
  margin: 2.5rem 0 3rem;
  max-width: 600px;
  line-height: ${theme.lineHeights.relaxed};
  letter-spacing: ${theme.letterSpacing.tight};
  opacity: 0;
  animation: ${fadeInUp} 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: 0.8s;
`;

const CodeLine = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: 1s;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const Code = styled.span<{ $accent?: boolean }>`
  font-family: ${theme.fonts.mono};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.normal};
  color: ${props => props.$accent ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.4)'};
  letter-spacing: ${theme.letterSpacing.wide};
  text-decoration: ${props => props.$accent ? 'none' : 'line-through'};
  opacity: ${props => props.$accent ? 1 : 0.6};
  
  ${props => props.$accent && `
    padding: 0.25rem 0.75rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  `}
`;

const Arrow = styled.span`
  color: rgba(255, 255, 255, 0.3);
  font-size: 1.5rem;
  font-weight: 200;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    transform: rotate(90deg);
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 1.5s;
`;

const ScrollText = styled.span`
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.medium};
  letter-spacing: ${theme.letterSpacing.widest};
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  writing-mode: vertical-lr;
`;

const ScrollLine = styled.div`
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%);
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: -20px;
    left: 0;
    width: 100%;
    height: 20px;
    background: white;
    animation: ${scrollDown} 2s ease-in-out infinite;
  }
`;

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <HeroSection>
      <BackgroundCanvas />
      <GraphPaper />
      
      {/* Floating decorative shapes */}
      <FloatingShape 
        style={{
          top: '15%',
          right: '10%',
          width: '300px',
          height: '300px',
          transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
        }}
        $delay={0}
      />
      <FloatingShape 
        style={{
          bottom: '20%',
          left: '5%',
          width: '200px',
          height: '200px',
          transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)`,
        }}
        $delay={2}
      />
      <FloatingShape 
        style={{
          top: '50%',
          left: '50%',
          width: '150px',
          height: '150px',
          borderRadius: '0',
          transform: `rotate(45deg) translate(${-75 + mousePos.x * 0.2}px, ${-75 + mousePos.y * 0.2}px)`,
        }}
        $delay={4}
      />
      
      <HeroContent ref={contentRef} style={{
        transform: `translate(${mousePos.x * 0.05}px, ${mousePos.y * 0.05}px)`,
      }}>
        <Title>
          <span style={{ animationDelay: '0.3s' }}>Building What</span>
          <span style={{ animationDelay: '0.5s' }}>Others Pitch</span>
        </Title>
        
        <Subtitle>
          Technical execution for sophisticated capital
        </Subtitle>
        
        <CodeLine>
          <Code $accent>ship_code()</Code>
          <Arrow>→</Arrow>
          <Code>strategy_deck.pdf</Code>
        </CodeLine>
      </HeroContent>
      
      <ScrollIndicator>
        <ScrollText>scroll</ScrollText>
        <ScrollLine />
      </ScrollIndicator>
    </HeroSection>
  );
}