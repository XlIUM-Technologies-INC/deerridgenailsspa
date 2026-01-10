
'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Clock, Heart, Sparkles, Shield, Users, Instagram } from 'lucide-react';
// @ts-ignore
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

// Why Choose Us Section
const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const benefits = [
    {
      icon: Award,
      title: "Expert Technicians",
      description: "Certified professionals with 10+ years of experience in nail artistry and care.",
      color: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Sparkles,
      title: "Premium Products",
      description: "We use only high-quality, salon-grade products that are safe and long-lasting.",
      color: "bg-yellow-100",
      iconColor: "text-yellow-600"
    },
    {
      icon: Shield,
      title: "Hygiene First",
      description: "Hospital-grade sterilization and single-use tools for your safety and peace of mind.",
      color: "bg-green-50",
      iconColor: "text-green-700"
    },
    {
      icon: Heart,
      title: "Personalized Service",
      description: "Custom nail designs tailored to your style and preferences every visit.",
      color: "bg-yellow-50",
      iconColor: "text-yellow-700"
    },
    {
      icon: Clock,
      title: "Convenient Hours",
      description: "Open 7 days a week with flexible scheduling to fit your busy lifestyle.",
      color: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Users,
      title: "500+ Happy Clients",
      description: "Join our community of satisfied customers who trust us with their nail care.",
      color: "bg-yellow-100",
      iconColor: "text-yellow-600"
    }
  ];

  return (
    <section ref={sectionRef} className="bg-white py-20 px-6 relative overflow-hidden">
      {/* Background Decorations */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-green-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-[#008009] font-semibold mb-2 uppercase tracking-wider text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Why Choose Us
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Why Deer Ridge Nails Spa?
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the Deer Ridge difference with our commitment to excellence, 
            safety, and personalized care in Kitchener.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <CardContent className="p-6">
                  <motion.div
                    className={`${benefit.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <benefit.icon className={`w-8 h-8 ${benefit.iconColor}`} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;