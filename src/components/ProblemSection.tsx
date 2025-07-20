"use client";

import { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '@/styles/theme';

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
  background: ${theme.colors.beige};
  padding: clamp(4rem, 10vw, 8rem) clamp(1.5rem, 5vw, 3rem);
  position: relative;
  overflow: hidden;
`;

const BackgroundGradient = styled.div`
  position: absolute;
  top: -50%;
  right: -20%;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(255, 107, 53, 0.05) 0%, transparent 60%);
  border-radius: 50%;
  filter: blur(60px);
  pointer-events: none;
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
  animation-delay: 0.2s;
`;

const Title = styled.h2`
  font-family: ${theme.fonts.serif};
  font-size: clamp(${theme.fontSizes['4xl']}, 4vw, ${theme.fontSizes['5xl']});
  margin-bottom: 1.5rem;
  color: ${theme.colors.charcoal};
  letter-spacing: ${theme.letterSpacing.tight};
  line-height: ${theme.lineHeights.tight};
  font-weight: ${theme.fontWeights.medium};
`;

const Subtitle = styled.p`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.textSecondary};
  font-weight: ${theme.fontWeights.light};
  line-height: ${theme.lineHeights.relaxed};
  letter-spacing: ${theme.letterSpacing.normal};
  max-width: 600px;
  margin: 0 auto;
`;

const ProblemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3px;
  background: rgba(26, 26, 26, 0.08);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: 0.4s;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ProblemCard = styled.div<{ $index: number }>`
  background: ${theme.colors.beige};
  padding: 3rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, ${theme.colors.lightGrey} 0%, rgba(255, 107, 53, 0.05) 100%);
    opacity: 0;
    transition: opacity 0.6s ease;
  }
  
  &:hover {
    transform: scale(1.02);
    z-index: 10;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    
    &::before {
      opacity: 1;
    }
    
    .icon {
      transform: scale(1.2) rotate(10deg);
      opacity: 0.2;
    }
    
    .arrow {
      transform: translateX(8px);
      color: ${theme.colors.accent};
    }
    
    .outcome {
      color: ${theme.colors.accent};
      font-weight: 600;
    }
    
    h3 {
      color: ${theme.colors.accent};
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 2rem;
  }
`;

const ProblemIcon = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 2.5rem;
  opacity: 0.1;
  transition: all 0.4s ease;
  user-select: none;
`;

const ProblemContent = styled.div`
  position: relative;
  z-index: 1;
`;

const ProblemTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  margin-bottom: 1.5rem;
  color: ${theme.colors.charcoal};
  font-weight: ${theme.fontWeights.semibold};
  letter-spacing: ${theme.letterSpacing.tight};
  transition: color 0.3s ease;
`;

const ProblemFlow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ProblemText = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.normal};
  line-height: ${theme.lineHeights.normal};
  margin: 0;
`;

const Arrow = styled.span`
  display: inline-block;
  color: ${theme.colors.accent};
  font-size: 1.25rem;
  font-weight: 300;
  transition: all 0.3s ease;
`;

const Outcome = styled.p`
  color: ${theme.colors.textPrimary};
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.medium};
  line-height: ${theme.lineHeights.normal};
  margin: 0;
  transition: all 0.3s ease;
`;

const CornerDecoration = styled.div`
  position: absolute;
  bottom: -40px;
  right: -40px;
  width: 80px;
  height: 80px;
  background: ${theme.colors.accent};
  opacity: 0;
  transform: rotate(45deg);
  transition: all 0.4s ease;
  
  ${ProblemCard}:hover & {
    opacity: 0.1;
    bottom: 0;
    right: 0;
  }
`;

export default function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const problems = [
    { 
      title: "Engaged McKinsey", 
      result: "Received 200-page deck", 
      outcome: "No working product",
      icon: "📊"
    },
    { 
      title: 'Hired "AI Experts"', 
      result: "Months of workshops", 
      outcome: "Still planning phase",
      icon: "🤖"
    },
    { 
      title: "Built Innovation Lab", 
      result: "$5M invested", 
      outcome: "Zero revenue",
      icon: "🏢"
    },
    { 
      title: "Partnered with Startups", 
      result: "Great demos", 
      outcome: "Couldn&apos;t scale",
      icon: "🚀"
    }
  ];

  return (
    <Section ref={sectionRef} id="problem">
      <BackgroundGradient />
      
      <Container>
        <SectionIntro>
          <Title>The Execution Gap</Title>
          <Subtitle>
            Every sophisticated investor faces the same paradox: unlimited access to strategic thinking, severe scarcity of technical execution.
          </Subtitle>
        </SectionIntro>

        <ProblemGrid className="problem-grid">
          {problems.map((problem, index) => (
            <ProblemCard key={index} $index={index}>
              <ProblemIcon className="icon">
                {problem.icon}
              </ProblemIcon>
              
              <ProblemContent>
                <ProblemTitle>{problem.title}</ProblemTitle>
                <ProblemFlow>
                  <ProblemText>{problem.result}</ProblemText>
                  <Arrow className="arrow">→</Arrow>
                  <Outcome className="outcome">{problem.outcome}</Outcome>
                </ProblemFlow>
              </ProblemContent>
              
              <CornerDecoration />
            </ProblemCard>
          ))}
        </ProblemGrid>
      </Container>
    </Section>
  );
}