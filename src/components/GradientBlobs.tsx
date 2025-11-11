"use client";

import styled, { keyframes } from 'styled-components';

const morph = keyframes`
  0%, 100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    transform: translate(0, 0) scale(1);
  }
  25% {
    border-radius: 40% 60% 60% 40% / 40% 50% 50% 60%;
    transform: translate(10%, -10%) scale(1.05);
  }
  50% {
    border-radius: 50% 50% 30% 70% / 30% 60% 40% 70%;
    transform: translate(-5%, 10%) scale(0.95);
  }
  75% {
    border-radius: 70% 30% 50% 50% / 50% 40% 60% 50%;
    transform: translate(-10%, -5%) scale(1.02);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-20px) translateX(10px);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.6;
  }
`;

const BlobsContainer = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`;

const Blob = styled.div<{
  $size: number;
  $top: string;
  $left: string;
  $color: string;
  $duration: number;
  $delay: number;
}>`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  top: ${props => props.$top};
  left: ${props => props.$left};
  background: ${props => props.$color};
  filter: blur(60px);
  opacity: 0.6;
  animation:
    ${morph} ${props => props.$duration}s ease-in-out infinite,
    ${float} ${props => props.$duration * 0.7}s ease-in-out infinite,
    ${pulse} ${props => props.$duration * 0.5}s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
  will-change: transform, border-radius;
  mix-blend-mode: multiply;
`;

interface BlobConfig {
  size: number;
  top: string;
  left: string;
  color: string;
  duration?: number;
  delay?: number;
}

interface GradientBlobsProps {
  blobs?: BlobConfig[];
  theme?: 'dark' | 'light' | 'accent';
}

const defaultDarkBlobs: BlobConfig[] = [
  {
    size: 600,
    top: '-10%',
    left: '-10%',
    color: 'radial-gradient(circle, rgba(255, 107, 53, 0.15) 0%, transparent 70%)',
    duration: 20,
    delay: 0,
  },
  {
    size: 500,
    top: '60%',
    left: '70%',
    color: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
    duration: 25,
    delay: 5,
  },
  {
    size: 400,
    top: '30%',
    left: '50%',
    color: 'radial-gradient(circle, rgba(34, 197, 94, 0.08) 0%, transparent 70%)',
    duration: 22,
    delay: 10,
  },
];

const defaultLightBlobs: BlobConfig[] = [
  {
    size: 600,
    top: '10%',
    left: '10%',
    color: 'radial-gradient(circle, rgba(255, 107, 53, 0.08) 0%, transparent 70%)',
    duration: 20,
    delay: 0,
  },
  {
    size: 500,
    top: '50%',
    left: '80%',
    color: 'radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%)',
    duration: 25,
    delay: 5,
  },
  {
    size: 450,
    top: '70%',
    left: '20%',
    color: 'radial-gradient(circle, rgba(34, 197, 94, 0.05) 0%, transparent 70%)',
    duration: 22,
    delay: 10,
  },
];

const defaultAccentBlobs: BlobConfig[] = [
  {
    size: 700,
    top: '-5%',
    left: '60%',
    color: 'radial-gradient(circle, rgba(255, 107, 53, 0.2) 0%, transparent 60%)',
    duration: 18,
    delay: 0,
  },
  {
    size: 550,
    top: '40%',
    left: '-5%',
    color: 'radial-gradient(circle, rgba(255, 107, 53, 0.15) 0%, transparent 65%)',
    duration: 23,
    delay: 6,
  },
];

export default function GradientBlobs({ blobs, theme = 'dark' }: GradientBlobsProps) {
  let blobsToRender = blobs;

  if (!blobsToRender) {
    switch (theme) {
      case 'light':
        blobsToRender = defaultLightBlobs;
        break;
      case 'accent':
        blobsToRender = defaultAccentBlobs;
        break;
      default:
        blobsToRender = defaultDarkBlobs;
    }
  }

  return (
    <BlobsContainer>
      {blobsToRender.map((blob, index) => (
        <Blob
          key={index}
          $size={blob.size}
          $top={blob.top}
          $left={blob.left}
          $color={blob.color}
          $duration={blob.duration || 20}
          $delay={blob.delay || 0}
        />
      ))}
    </BlobsContainer>
  );
}
