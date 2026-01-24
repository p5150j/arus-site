"use client";

import { useEffect, useState } from "react";

interface Particle {
  id: number;
  left: string;
  top: string;
  size: number;
  delay: number;
  duration: number;
}

export default function Particles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    const generated = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 6 + 3,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 15,
    }));
    setParticles(generated);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-float"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            backgroundColor: 'rgba(184, 149, 108, 0.5)',
            boxShadow: `0 0 ${p.size * 2}px rgba(184, 149, 108, 0.6)`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
