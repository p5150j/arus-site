declare module 'react-globe.gl' {
  import { FC } from 'react';
  
  interface GlobeProps {
    ref?: any;
    width?: number;
    height?: number;
    backgroundColor?: string;
    globeImageUrl?: string;
    bumpImageUrl?: string;
    arcsData?: any[];
    arcColor?: string | ((d: any) => string);
    arcDashLength?: number;
    arcDashGap?: number;
    arcDashAnimateTime?: number;
    arcStroke?: number;
    arcsTransitionDuration?: number;
    pointsData?: any[];
    pointAltitude?: number | ((d: any) => number);
    pointColor?: string | ((d: any) => string);
    pointRadius?: number;
    pointsMerge?: boolean;
    hexPolygonsData?: any[];
    atmosphereColor?: string;
    atmosphereAltitude?: number;
  }
  
  const Globe: FC<GlobeProps>;
  export default Globe;
}