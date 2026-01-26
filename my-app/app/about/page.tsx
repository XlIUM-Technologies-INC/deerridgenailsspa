"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Award,
  Heart,
  Shield,
  Sparkles,
  Star,
  Users,
  Clock,
  Target,
} from "lucide-react";
import Link from "next/link";
// @ts-ignore
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

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
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We love what we do and it shows in every nail we perfect.",
      color: "bg-rose-100",
      iconColor: "text-rose-600",
    },
    {
      icon: Shield,
      title: "Safety",
      description:
        "Your health and safety are our top priorities with hospital-grade sterilization.",
      color: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Sparkles,
      title: "Excellence",
      description: "We strive for perfection in every service we provide.",
      color: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Building lasting relationships with our clients and community.",
      color: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Lead Nail Technician",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      experience: "12 years",
    },
    {
      name: "Emily Chen",
      role: "Nail Artist Specialist",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      experience: "8 years",
    },
    {
      name: "Maria Rodriguez",
      role: "Senior Technician",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
      experience: "10 years",
    },
    {
      name: "Jessica Lee",
      role: "Nail Care Expert",
      image:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400",
      experience: "7 years",
    },
  ];


  return (
    <div className="bg-[#ffffff]">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-20 px-6 bg-gradient-to-br from-brand-green via-brand-green to-green-400"
      >
        <motion.div
          className="absolute inset-0 opacity-0"
          style={{ y, opacity }}
        ></motion.div>

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
            ease: "easeInOut",
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
            delay: 1,
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.p
            className="text-white font-semibold mb-4 uppercase tracking-wider"
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
            4195 King St E, Kitchener, ON
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="inline-block bg-white/20 backdrop-blur-md border border-white/30 px-6 py-2 rounded-full text-white mb-8">
              Now Under New Management & Newly Renovated
            </div>
            <br />
            <Button
              asChild
              className="bg-brand-green text-white hover:bg-brand-green px-8 py-6 text-lg font-semibold"
              size="lg"
            >
              <Link href="https://www.dashbooking.com/salon/deer-ridge-nails-and-spa" target="_blank" rel="noopener noreferrer">
                Book Your Appointment
              </Link>
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
              <p className="text-brand-green font-semibold mb-2 uppercase tracking-wider text-sm">
                Our Story
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Excellence in Nail Care
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Deer Ridge Nails Spa is Kitchener's premier destination for
                  professional nail care and spa services. We are dedicated to
                  providing exceptional beauty treatments in a welcoming and
                  relaxing environment.
                </p>
                <p>
                  Our team of experienced and certified nail technicians takes
                  pride in delivering outstanding service with attention to
                  detail. We use only high-quality products and maintain the
                  highest standards of hygiene and sanitation to ensure the
                  safety and satisfaction of our clients.
                </p>
                <p>
                  Whether you're looking for a classic manicure, creative nail
                  art, gel extensions, or any of our specialty spa services,
                  we're here to make you feel pampered and beautiful. Your
                  satisfaction is our top priority.
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
                className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-green flex items-center justify-center text-white shadow-2xl"
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


      {/* Meet Our Team Section - Simplified */}
      <section ref={teamRef} className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={teamInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800"
                  alt="Our Expert Team"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={teamInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <p className="text-brand-green font-semibold mb-2 uppercase tracking-wider text-sm">
                Our Team
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Expert Technicians
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our salon is proud to be under <strong>new management</strong> and has been <strong>newly renovated</strong> to provide you with the best experience possible.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We have a dedicated team of highly skilled and experienced nail technicians who are passionate about their craft. Whether you need a simple manicure or intricate nail art, our staff is here to bring your vision to life with precision and care.
              </p>
              <div className="flex gap-4">
                <div className="bg-brand-green/5 p-4 rounded-lg border border-brand-green/10">
                  <p className="font-bold text-brand-green text-xl mb-1">10+</p>
                  <p className="text-sm text-gray-600">Years Combined Exp.</p>
                </div>
                <div className="bg-brand-green/5 p-4 rounded-lg border border-brand-green/10">
                  <p className="font-bold text-brand-green text-xl mb-1">100%</p>
                  <p className="text-sm text-gray-600">Satisfaction Focus</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>





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
            Book your appointment today and join our community of satisfied
            clients in Kitchener
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              asChild
              className="bg-brand-green text-white hover:bg-brand-green px-8 py-6 text-lg font-semibold"
              size="lg"
            >
              <Link href="https://www.dashbooking.com/salon/deer-ridge-nails-and-spa" target="_blank" rel="noopener noreferrer">
                Book Now
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
