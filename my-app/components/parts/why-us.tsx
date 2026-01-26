"use client";

import React from "react";
import {
  Award,
  Clock,
  Heart,
  Shield,
  Users,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Why Choose Us Section
const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Award,
      title: "Expert Technicians",
      description: "Certified professionals dedicated to perfection.",
    },
    {
      icon: Sparkles,
      title: "Premium Products",
      description: "We use only high-quality, salon-grade products.",
    },
    {
      icon: Shield,
      title: "Hygiene First",
      description: "Hospital-grade sterilization for your safety.",
    },
    {
      icon: Clock,
      title: "Relaxing Atmosphere",
      description: "A serene environment to unwind and recharge.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-italiana text-brand-green mb-6">
            The Deer Ridge Difference
          </h2>
          <p className="text-lg text-brand-sage font-old-standard max-w-2xl mx-auto">
            Experience excellence in every detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 border border-[#f0f0f0] hover:border-brand-green/30 transition-colors duration-300">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-green/5 text-brand-green mb-6">
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-italiana text-brand-green mb-3">
                {benefit.title}
              </h3>
              <p className="text-brand-sage font-old-standard">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
