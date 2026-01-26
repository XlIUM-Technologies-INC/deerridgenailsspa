"use client";

import React from "react";
import { motion } from "framer-motion";

// @ts-ignore
interface DecorationProps {
  variant?: "primary" | "secondary" | "accent";
  intensity?: "low" | "medium" | "high";
  position?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "center";
}

export const Decoration = ({
  variant = "primary",
  intensity = "medium",
  position = "top-left",
}: DecorationProps) => {
  const getColorClasses = () => {
    switch (variant) {
      case "secondary":
        return "bg-secondary/10";
      case "accent":
        return "bg-accent/10";
      default:
        return "bg-primary/20";
    }
  };

  const getSizeClasses = () => {
    switch (intensity) {
      case "low":
        return "w-32 h-32";
      case "high":
        return "w-96 h-96";
      default:
        return "w-64 h-64";
    }
  };

  const getPositionClasses = () => {
    switch (position) {
      case "top-right":
        return "top-0 right-0";
      case "bottom-left":
        return "bottom-0 left-0";
      case "bottom-right":
        return "bottom-0 right-0";
      case "center":
        return "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";
      default:
        return "top-0 left-0";
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
        ease: "easeInOut",
      }}
    />
  );
};

export const WallpaperPattern = ({
  variant = "dots",
  intensity = "low",
}: {
  variant?: "dots" | "stripes" | "waves" | "mesh";
  intensity?: "low" | "medium" | "high";
}) => {
  const getOpacity = () => {
    switch (intensity) {
      case "high":
        return "opacity-20";
      case "medium":
        return "opacity-10";
      default:
        return "opacity-5";
    }
  };

  const patternStyles: Record<string, React.CSSProperties> = {
    dots: {
      backgroundImage: `radial-gradient(circle, rgb(34 197 94 / ${intensity === "high" ? 0.2 : intensity === "medium" ? 0.1 : 0.05}) 1px, transparent 1px)`,
      backgroundSize: "20px 20px",
    },
    stripes: {
      backgroundImage: `repeating-linear-gradient(
        45deg,
        rgb(34 197 94 / ${intensity === "high" ? 0.15 : intensity === "medium" ? 0.08 : 0.04}),
        rgb(34 197 94 / ${intensity === "high" ? 0.15 : intensity === "medium" ? 0.08 : 0.04}) 10px,
        transparent 10px,
        transparent 20px
      )`,
    },
    waves: {
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30c10-10 20-10 30 0s20 10 30 0' stroke='%2322c55e' stroke-width='1' fill='none' opacity='${intensity === "high" ? 0.2 : intensity === "medium" ? 0.1 : 0.05}'/%3E%3C/svg%3E")`,
      backgroundSize: "60px 60px",
    },
    mesh: {
      background: `linear-gradient(135deg, 
        rgb(34 197 94 / ${intensity === "high" ? 0.15 : intensity === "medium" ? 0.08 : 0.04}) 0%,
        rgb(250 204 21 / ${intensity === "high" ? 0.15 : intensity === "medium" ? 0.08 : 0.04}) 25%,
        rgb(34 197 94 / ${intensity === "high" ? 0.1 : intensity === "medium" ? 0.05 : 0.02}) 50%,
        rgb(250 204 21 / ${intensity === "high" ? 0.15 : intensity === "medium" ? 0.08 : 0.04}) 75%,
        rgb(34 197 94 / ${intensity === "high" ? 0.15 : intensity === "medium" ? 0.08 : 0.04}) 100%
      )`,
    },
  };

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={patternStyles[variant]}
    />
  );
};

export const FloatingParticles = () => {
  const particles = React.useMemo(
    () =>
      [...Array(5)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      })),
    [],
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-primary rounded-full"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + particle.id,
            repeat: Infinity,
            delay: particle.id * 0.2,
          }}
        />
      ))}
    </div>
  );
};
