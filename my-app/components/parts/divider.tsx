'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

// @ts-ignore
interface DividerProps {
  variant?: 'simple' | 'decorated' | 'animated';
  color?: 'pink' | 'rose' | 'purple';
}

export const Divider = ({
  variant = 'simple',
  color = 'pink'
}: DividerProps) => {
  const colorClasses = {
    pink: 'from-pink-400 to-pink-600',
    rose: 'from-rose-400 to-rose-600',
    purple: 'from-purple-400 to-purple-600'
  };

  if (variant === 'simple') {
    return (
      <div className={`h-1 bg-gradient-to-r ${colorClasses[color]} my-12 rounded-full`} />
    );
  }

  if (variant === 'decorated') {
    return (
      <div className="relative flex items-center justify-center my-16">
        <div className={`absolute h-1 w-full bg-gradient-to-r ${colorClasses[color]} rounded-full`} />
        <motion.div
          className="relative bg-white z-10 px-6"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Sparkles className={`w-6 h-6 text-${color}-500`} />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative flex items-center justify-center my-16 overflow-hidden">
      <motion.div
        className={`h-1 bg-gradient-to-r ${colorClasses[color]} rounded-full`}
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      <motion.div
        className="absolute bg-white z-10 px-6"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Sparkles className={`w-6 h-6 text-${color}-500`} />
      </motion.div>
    </div>
  );
};

export default Divider;
