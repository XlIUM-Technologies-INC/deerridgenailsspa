'use client';

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Award, Heart, Shield, Sparkles, Star, Users, Clock, Target } from 'lucide-react';
// @ts-ignore
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';

export default function AboutPage() {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const statsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const storyInView = useInView(storyRef, { once: true, amount: 0.3 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.2 });
  const teamInView = useInView(teamRef, { once: true, amount: 0.2 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We love what we do and it shows in every nail we perfect.",
      color: "bg-rose-100",
      iconColor: "text-rose-600"
    },
    {
      icon: Shield,
      title: "Safety",
      description: "Your health and safety are our top priorities with hospital-grade sterilization.",
      color: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Sparkles,
      title: "Excellence",
      description: "We strive for perfection in every service we provide.",
      color: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building lasting relationships with our clients and community.",
      color: "bg-emerald-100",
      iconColor: "text-emerald-600"
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Lead Nail Technician",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      experience: "12 years"
    },
    {
      name: "Emily Chen",
      role: "Nail Artist Specialist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      experience: "8 years"
    },
    {
      name: "Maria Rodriguez",
      role: "Senior Technician",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
      experience: "10 years"
    },
    {
      name: "Jessica Lee",
      role: "Nail Care Expert",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400",
      experience: "7 years"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "10+", label: "Years Experience", icon: Award },
    { number: "4.9", label: "Rating", icon: Star },
    { number: "24/7", label: "Support", icon: Clock }
  ];

  return (
    <div className="bg-[#f5f1ed]">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-20 px-6">
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{ y, opacity }}
        >
          <Image
            src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200"
            alt="Nail salon background"
            fill
            className="object-cover"
            quality={85}
            priority
          />
        </motion.div>

        {/* Floating decorations */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-pink-300/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-10 w-40 h-40 bg-rose-400/15 rounded-full blur-3xl"
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

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.p
            className="text-[#8b2f4a] font-semibold mb-4 uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.p>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Deer Ridge Nails Spa
          </motion.h1>
          <motion.p
            className="text-xl text-white mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Premium nail care and spa services in Kitchener, Ontario
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              className="bg-[#8b2f4a] text-white hover:bg-[#6d2439] px-8 py-6 text-lg font-semibold"
              size="lg"
            >
              Book Your Appointment
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={storyRef} className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[#8b2f4a] font-semibold mb-2 uppercase tracking-wider text-sm">
                Our Story
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Excellence in Nail Care
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Deer Ridge Nails Spa is Kitchener's premier destination for professional nail care and spa services. We are dedicated to providing exceptional beauty treatments in a welcoming and relaxing environment.
                </p>
                <p>
                  Our team of experienced and certified nail technicians takes pride in delivering outstanding service with attention to detail. We use only high-quality products and maintain the highest standards of hygiene and sanitation to ensure the safety and satisfaction of our clients.
                </p>
                <p>
                  Whether you're looking for a classic manicure, creative nail art, gel extensions, or any of our specialty spa services, we're here to make you feel pampered and beautiful. Your satisfaction is our top priority.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative h-[500px]"
              initial={{ opacity: 0, x: 50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative h-full">
                <Image
                  src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800"
                  alt="Deer Ridge Nails Spa interior"
                  fill
                  className="object-cover shadow-2xl"
                  quality={85}
                />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#8b2f4a] flex items-center justify-center text-white shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <div className="text-center">
                  <div className="text-5xl font-bold">Deer Ridge</div>
                  <div className="text-lg">Kitchener, ON</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section ref={valuesRef} className="bg-[#f5f1ed] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#8b2f4a] font-semibold mb-2 uppercase tracking-wider text-sm">
              Our Values
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide every decision we make and every service we provide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className={`${value.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <value.icon className={`w-10 h-10 ${value.iconColor}`} />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section ref={teamRef} className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#8b2f4a] font-semibold mb-2 uppercase tracking-wider text-sm">
              Our Team
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Expert Technicians
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Skilled professionals dedicated to making you look and feel amazing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center group"
              >
                <div className="relative mb-4 mx-auto w-48 h-48 overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    quality={85}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-[#8b2f4a] font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.experience} experience
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="bg-[#8b2f4a] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  className="inline-block mb-4"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <stat.icon className="w-12 h-12 mx-auto" />
                </motion.div>
                <motion.div
                  className="text-5xl font-bold mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Experience the Deer Ridge Difference?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Book your appointment today and join our community of satisfied clients in Kitchener
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              className="bg-[#8b2f4a] text-white hover:bg-[#6d2439] px-8 py-6 text-lg font-semibold"
              size="lg"
            >
              Book Now
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}