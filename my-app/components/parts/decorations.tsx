'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface DecorationProps {
  variant?: 'light' | 'dark' | 'accent';
  intensity?: 'low' | 'medium' | 'high';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
}

export const Decoration = ({
  variant = 'light',
  intensity = 'medium',
  position = 'top-left'
}: DecorationProps) => {
  const getColorClasses = () => {
    switch (variant) {
      case 'dark':
        return 'bg-pink-500/10';
      case 'accent':
        return 'bg-rose-400/10';
      default:
        return 'bg-pink-300/20';
    }
  };

  const getSizeClasses = () => {
    switch (intensity) {
      case 'low':
        return 'w-32 h-32';
      case 'high':
        return 'w-96 h-96';
      default:
        return 'w-64 h-64';
    }
  };

  const getPositionClasses = () => {
    switch (position) {
      case 'top-right':
        return 'top-0 right-0';
      case 'bottom-left':
        return 'bottom-0 left-0';
      case 'bottom-right':
        return 'bottom-0 right-0';
      case 'center':
        return 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
      default:
        return 'top-0 left-0';
    }
  };

  return (
    <motion.div
      className={`absolute ${getColorClasses()} ${getSizeClasses()} ${getPositionClasses()} rounded-full blur-3xl pointer-events-none`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

export const WallpaperPattern = ({
  variant = 'dots',
  intensity = 'low'
}: {
  variant?: 'dots' | 'stripes' | 'waves' | 'mesh';
  intensity?: 'low' | 'medium' | 'high';
}) => {
  const getOpacity = () => {
    switch (intensity) {
      case 'high':
        return 'opacity-20';
      case 'medium':
        return 'opacity-10';
      default:
        return 'opacity-5';
    }
  };

  const patternStyles: Record<string, React.CSSProperties> = {
    dots: {
      backgroundImage: `radial-gradient(circle, rgba(200, 100, 150, ${intensity === 'high' ? 0.2 : intensity === 'medium' ? 0.1 : 0.05}) 1px, transparent 1px)`,
      backgroundSize: '20px 20px',
    },
    stripes: {
      backgroundImage: `repeating-linear-gradient(
        45deg,
        rgba(200, 100, 150, ${intensity === 'high' ? 0.15 : intensity === 'medium' ? 0.08 : 0.04}),
        rgba(200, 100, 150, ${intensity === 'high' ? 0.15 : intensity === 'medium' ? 0.08 : 0.04}) 10px,
        transparent 10px,
        transparent 20px
      )`,
    },
    waves: {
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30c10-10 20-10 30 0s20 10 30 0' stroke='%23c86496' stroke-width='1' fill='none' opacity='${intensity === 'high' ? 0.2 : intensity === 'medium' ? 0.1 : 0.05}'/%3E%3C/svg%3E")`,
      backgroundSize: '60px 60px',
    },
    mesh: {
      background: `linear-gradient(135deg, 
        rgba(139, 47, 74, ${intensity === 'high' ? 0.15 : intensity === 'medium' ? 0.08 : 0.04}) 0%,
        rgba(200, 100, 150, ${intensity === 'high' ? 0.15 : intensity === 'medium' ? 0.08 : 0.04}) 25%,
        rgba(255, 192, 203, ${intensity === 'high' ? 0.1 : intensity === 'medium' ? 0.05 : 0.02}) 50%,
        rgba(200, 100, 150, ${intensity === 'high' ? 0.15 : intensity === 'medium' ? 0.08 : 0.04}) 75%,
        rgba(139, 47, 74, ${intensity === 'high' ? 0.15 : intensity === 'medium' ? 0.08 : 0.04}) 100%
      )`,
    }
  };

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={patternStyles[variant]}
    />
  );
};

export const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-pink-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
};
