"use client";

import { useRef } from 'react';
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
  background: ${theme.colors.beige};
  padding: clamp(4rem, 10vw, 8rem) clamp(1.5rem, 5vw, 3rem);
  position: relative;
  overflow: hidden;

  * {
    font-feature-settings: 'tnum', 'zero';
  }
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

const AccentUnderline = styled.span`
  text-decoration: underline;
  text-decoration-color: ${theme.colors.accent};
  text-underline-offset: 4px;
  text-decoration-thickness: 2px;
  font-weight: ${theme.fontWeights.semibold};
`;

const TerminalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const TerminalWindow = styled.div<{ $delay: number }>`
  background: rgba(26, 26, 26, 0.98);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: ${props => props.$delay}s;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 80px rgba(0, 0, 0, 0.4);
  }
`;

const TerminalHeader = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 0.75rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TerminalControls = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const TerminalButton = styled.div<{ $color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.$color};
  opacity: 0.4;
`;

const TerminalTitle = styled.div`
  font-family: ${theme.fonts.mono};
  font-size: ${theme.fontSizes.xs};
  color: rgba(255, 255, 255, 0.5);
  margin-left: 0.5rem;
  letter-spacing: 0.05em;
`;

const TerminalBody = styled.div`
  padding: 1.5rem;
  font-family: ${theme.fonts.mono};
  font-size: ${theme.fontSizes.sm};
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 1.25rem;
    font-size: ${theme.fontSizes.xs};
  }
`;

const CommandLine = styled.div`
  display: flex;
  margin-bottom: 0.25rem;

  &:hover {
    .command-text {
      color: rgba(255, 255, 255, 0.95);
    }
  }
`;

const Prompt = styled.span`
  color: #22c55e;
  margin-right: 0.5rem;
  user-select: none;
`;

const CommandText = styled.span`
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.2s ease;
`;

const OutputLine = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 1rem;
  margin-bottom: 0.25rem;
`;

const OutputPrefix = styled.span`
  color: rgba(255, 255, 255, 0.4);
  margin-right: 0.75rem;
  min-width: 3rem;
  user-select: none;
`;

const OutputText = styled.span`
  color: rgba(255, 255, 255, 0.65);
`;

const ErrorLine = styled.div`
  margin-left: 1rem;
  margin-top: 0.75rem;
  margin-bottom: 0.5rem;
`;

const ErrorPrefix = styled.span`
  color: #ef4444;
  font-weight: ${theme.fontWeights.semibold};
  margin-right: 0.5rem;
`;

const ErrorText = styled.span`
  color: #fca5a5;
`;



export default function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const attempts = [
    {
      command: "execute --strategy consulting",
      args: [
        { key: "vendor", value: "McKinsey" },
        { key: "duration", value: "6mo" },
        { key: "output", value: "200-page deck" }
      ],
      error: "ExecutionError: No working product shipped"
    },
    {
      command: "hire --role ai-expert",
      args: [
        { key: "process", value: "workshops" },
        { key: "duration", value: "12mo+" },
        { key: "status", value: "planning" }
      ],
      error: "TimeoutError: Still in planning phase"
    },
    {
      command: "build --type innovation-lab",
      args: [
        { key: "investment", value: "$5M" },
        { key: "duration", value: "18mo" },
        { key: "revenue", value: "$0" }
      ],
      error: "ValidationError: Zero revenue generated"
    },
    {
      command: "partner --with startups",
      args: [
        { key: "demos", value: "excellent" },
        { key: "duration", value: "9mo" },
        { key: "scale", value: "failed" }
      ],
      error: "ScaleError: Couldn't scale to production"
    }
  ];

  return (
    <Section ref={sectionRef} id="problem">
      <GradientBlobs
        blobs={[
          {
            size: 700,
            top: '5%',
            left: '10%',
            color: 'radial-gradient(circle, rgba(255, 107, 53, 0.3) 0%, rgba(255, 107, 53, 0.1) 50%, transparent 70%)',
            duration: 20,
            delay: 0,
          },
          {
            size: 650,
            top: '40%',
            left: '70%',
            color: 'radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, rgba(139, 92, 246, 0.08) 50%, transparent 70%)',
            duration: 25,
            delay: 5,
          },
          {
            size: 600,
            top: '75%',
            left: '20%',
            color: 'radial-gradient(circle, rgba(34, 197, 94, 0.2) 0%, rgba(34, 197, 94, 0.06) 50%, transparent 70%)',
            duration: 22,
            delay: 10,
          },
        ]}
      />

      <Container>
        <SectionIntro>
          <Title>The Execution Gap</Title>
          <Subtitle>
            Every sophisticated investor faces the same paradox: unlimited access to strategic thinking, <AccentUnderline>severe scarcity of technical execution</AccentUnderline>.
          </Subtitle>
        </SectionIntro>

        <TerminalGrid>
          {attempts.map((attempt, index) => (
            <TerminalWindow key={index} $delay={0.4 + index * 0.1}>
              <TerminalHeader>
                <TerminalControls>
                  <TerminalButton $color="#ff5f56" />
                  <TerminalButton $color="#ffbd2e" />
                  <TerminalButton $color="#27c93f" />
                </TerminalControls>
                <TerminalTitle>attempt-{index + 1}.log</TerminalTitle>
              </TerminalHeader>

              <TerminalBody>
                <CommandLine>
                  <Prompt>$</Prompt>
                  <CommandText className="command-text">{attempt.command}</CommandText>
                </CommandLine>

                {attempt.args.map((arg, argIndex) => (
                  <OutputLine key={argIndex}>
                    <OutputPrefix>{arg.key}:</OutputPrefix>
                    <OutputText>{arg.value}</OutputText>
                  </OutputLine>
                ))}

                <ErrorLine>
                  <ErrorPrefix>Error:</ErrorPrefix>
                  <ErrorText>{attempt.error}</ErrorText>
                </ErrorLine>
              </TerminalBody>
            </TerminalWindow>
          ))}
        </TerminalGrid>
      </Container>
    </Section>
  );
}