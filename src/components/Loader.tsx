"use client";

import { useEffect, useState } from 'react';

export default function Loader() {
  const [hide, setHide] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 20;
      });
    }, 200);

    const timer = setTimeout(() => {
      setHide(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      width: '100%',
      height: '100%',
      background: 'var(--charcoal)',
      zIndex: 10000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      opacity: hide ? 0 : 1,
      pointerEvents: hide ? 'none' : 'auto',
      transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <div style={{
        textAlign: 'center',
        position: 'relative'
      }}>
        {/* Progress bar */}
        <div style={{
          width: '200px',
          height: '1px',
          background: 'rgba(255, 255, 255, 0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: `${progress}%`,
            background: 'var(--accent)',
            transition: 'width 0.3s ease-out'
          }} />
        </div>

        {/* Loading text */}
        <p style={{
          fontFamily: 'var(--font-jetbrains), monospace',
          fontSize: '0.75rem',
          color: 'rgba(255, 255, 255, 0.5)',
          marginTop: '1.5rem',
          letterSpacing: '2px',
          textTransform: 'uppercase'
        }}>
          Loading
        </p>
      </div>
    </div>
  );
}