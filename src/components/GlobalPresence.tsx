"use client";

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import styled, { keyframes } from 'styled-components';
import { theme } from '@/styles/theme';

// Dynamic import to avoid SSR issues with Three.js
const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

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

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.4;
  }
`;

const Section = styled.section`
  background: #050505;
  color: white;
  padding: clamp(6rem, 12vw, 10rem) clamp(1.5rem, 5vw, 3rem);
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const BackgroundGradient = styled.div`
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse at center top, rgba(255, 107, 53, 0.05) 0%, transparent 50%),
    radial-gradient(ellipse at center bottom, rgba(255, 255, 255, 0.02) 0%, transparent 50%);
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  width: 100%;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: clamp(4rem, 8vw, 8rem);
  align-items: center;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const TextContent = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;
`;

const Title = styled.h2`
  font-family: ${theme.fonts.serif};
  font-size: clamp(${theme.fontSizes['4xl']}, 4vw, ${theme.fontSizes['5xl']});
  margin-bottom: 1.5rem;
  letter-spacing: ${theme.letterSpacing.tight};
  line-height: ${theme.lineHeights.tight};
  font-weight: ${theme.fontWeights.medium};
`;

const Subtitle = styled.p`
  font-size: ${theme.fontSizes.lg};
  color: rgba(255, 255, 255, 0.7);
  font-weight: ${theme.fontWeights.light};
  line-height: ${theme.lineHeights.relaxed};
  margin-bottom: 3rem;
`;

const LocationsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LocationItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(10px);
    border-bottom-color: rgba(255, 255, 255, 0.1);
    
    .location-marker {
      background: ${theme.colors.accent};
      transform: scale(1.2);
    }
  }
`;

const LocationMarker = styled.div`
  width: 8px;
  height: 8px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transition: all 0.3s ease;
`;

const LocationName = styled.span`
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.normal};
  color: rgba(255, 255, 255, 0.9);
`;

const LocationDate = styled.span`
  font-size: ${theme.fontSizes.sm};
  color: rgba(255, 255, 255, 0.5);
  margin-left: auto;
  font-family: ${theme.fonts.mono};
`;

const GlobeContainer = styled.div`
  position: relative;
  height: 600px;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 0.3s;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 400px;
  }
`;

const GlobeWrapper = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function GlobalPresence() {
  const globeEl = useRef<any>();
  const [arcsData, setArcsData] = useState<any[]>([]);
  const [mounted, setMounted] = useState(false);

  // 2025 Travel locations with coordinates
  const locations = [
    { city: "Manila", country: "Philippines", lat: 14.5995, lng: 120.9842, date: "Jan 2025" },
    { city: "Melbourne", country: "Australia", lat: -37.8136, lng: 144.9631, date: "Feb 2025" },
    { city: "Berlin", country: "Germany", lat: 52.5200, lng: 13.4050, date: "Mar 2025" },
    { city: "Amsterdam", country: "Netherlands", lat: 52.3676, lng: 4.9041, date: "Apr 2025" },
    { city: "Los Angeles", country: "USA", lat: 34.0522, lng: -118.2437, date: "May 2025" },
    { city: "Ho Chi Minh City", country: "Vietnam", lat: 10.8231, lng: 106.6297, date: "Jun 2025" },
    { city: "Singapore", country: "Singapore", lat: 1.3521, lng: 103.8198, date: "Jul 2025" },
    { city: "New York", country: "USA", lat: 40.7128, lng: -74.0060, date: "Aug 2025" },
    { city: "Denver", country: "USA", lat: 39.7392, lng: -104.9903, date: "Sep 2025" },
  ];

  useEffect(() => {
    setMounted(true);
    
    // Create arcs between consecutive locations
    const arcs = [];
    for (let i = 0; i < locations.length - 1; i++) {
      arcs.push({
        startLat: locations[i].lat,
        startLng: locations[i].lng,
        endLat: locations[i + 1].lat,
        endLng: locations[i + 1].lng,
        color: ['rgba(255, 107, 53, 0.5)', 'rgba(255, 107, 53, 0.8)'],
      });
    }
    setArcsData(arcs);

    // Auto-rotate globe
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
    }
  }, []);

  if (!mounted) return null;

  return (
    <Section id="global-presence">
      <BackgroundGradient />
      
      <Container>
        <ContentGrid>
          <TextContent>
            <Title>Global Presence</Title>
            <Subtitle>
              Building systems across continents. Available wherever sophisticated capital needs execution.
            </Subtitle>
            
            <LocationsList>
              {locations.map((location, index) => (
                <LocationItem key={index}>
                  <LocationMarker className="location-marker" />
                  <LocationName>
                    {location.city}, {location.country}
                  </LocationName>
                  <LocationDate>{location.date}</LocationDate>
                </LocationItem>
              ))}
            </LocationsList>
          </TextContent>
          
          <GlobeContainer>
            <GlobeWrapper>
              <Globe
                ref={globeEl}
                width={600}
                height={600}
                backgroundColor="rgba(0,0,0,0)"
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                arcsData={arcsData}
                arcColor="color"
                arcDashLength={0.4}
                arcDashGap={0.2}
                arcDashAnimateTime={1500}
                arcStroke={0.5}
                arcsTransitionDuration={0}
                pointsData={locations}
                pointAltitude={0.01}
                pointColor={() => '#ff6b35'}
                pointRadius={0.3}
                pointsMerge={true}
                hexPolygonsData={[]}
                atmosphereColor="#ffffff"
                atmosphereAltitude={0.15}
              />
            </GlobeWrapper>
          </GlobeContainer>
        </ContentGrid>
      </Container>
    </Section>
  );
}