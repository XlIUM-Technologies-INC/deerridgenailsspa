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
import { CONTACT_INFO, BOOKING_URL } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function AboutPage() {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const teamRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const storyInView = useInView(storyRef, { once: true, amount: 0.3 });
  const teamInView = useInView(teamRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const teamNames = ["Teena", "Choal", "Sue Anne", "Jasmine", "Emily"];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden bg-brand-green"
      >
        {/* Full-bleed Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/384fb92fbf579dd14493a3cf1a0731c0.jpg"
            alt="Deer Ridge Nails Spa Sanctuary"
            fill
            className="object-cover contrast-[1.1] brightness-[0.7]"
            priority
            sizes="100vw"
            quality={90}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-green via-brand-green/60 to-transparent z-1" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/20 to-transparent z-[2]" />
        </div>

        {/* Decorative Geometric Figures */}
        <div className="absolute inset-0 z-1 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, rotate: -15 }}
            animate={{ opacity: 0.1, rotate: 0 }}
            transition={{ duration: 2 }}
            className="absolute top-[20%] right-[15%] w-64 h-64 border border-white/30 hidden lg:block"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 2.5, delay: 0.5 }}
            className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] border border-white/20 rounded-full hidden lg:block"
          />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 flex flex-col items-start pt-12 md:pt-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="flex flex-col items-start text-left space-y-8 max-w-4xl"
          >
            <div className="space-y-4">

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-italiana text-white leading-[0.85] tracking-tighter">
                <span className="block">BEYOND</span>
                <span className="italic text-white/90 ml-6 md:ml-24">BEAUTY.</span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-white/50 font-inter font-light italic tracking-[0.4em] uppercase leading-none">
              A Legacy of Artistry & Grace
            </p>

            <div className="h-[1px] w-24 bg-white/30" />


          </motion.div>
        </div>
      </section>

      {/* Narrative Section - Overlap */}
      <section ref={storyRef} className="relative py-16 md:py-32 px-6 bg-white overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-green/[0.02] -z-1" />

        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <span className="text-brand-sage font-inter font-light tracking-[0.4em] uppercase text-[10px]">Our Philosophy</span>
                <h2 className="text-5xl md:text-7xl font-italiana text-brand-green leading-[0.9] tracking-tight">
                  KITCHENER'S <br />
                  PREMIER SANCTUARY
                </h2>
              </div>

              <div className="space-y-6 md:space-y-8 text-base md:text-lg font-inter font-light text-brand-green/70 leading-relaxed border-l border-brand-green/10 pl-6 md:pl-10">
                <p>
                  Deer Ridge Nails Spa is more than just a destination for nail care; it's a testament to the belief that beauty should be a ritual of self-care and artistic expression.
                </p>
                <p>
                  Our newly renovated Kitchener studio combines modern luxury with classic sophistication. Under our new management, we've rededicated ourselves to hospital-grade hygiene, premium non-toxic formulations, and an uncompromising attention to detail.
                </p>
                <p className="italic text-brand-green font-normal">
                  "We don't just shape nails; we craft experiences that linger long after you leave our chairs."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)]">
                <Image
                  src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800"
                  alt="Deer Ridge Nails Spa Artistic Detail"
                  fill
                  className="object-cover transition-transform duration-[3s] hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                />
              </div>
              {/* Floating Geometric Label */}
              <div className="absolute -bottom-10 -left-10 bg-brand-green text-white p-12 shadow-2xl z-20 hidden md:block">
                <p className="font-italiana text-4xl leading-tight mb-2">Est. 2024</p>
                <div className="w-12 h-[1px] bg-white/20 mb-4" />
                <p className="text-[10px] tracking-[0.3em] font-inter uppercase opacity-60">Kitchener, Ontario</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Artisans Section */}
      <section ref={teamRef} className="relative py-16 md:py-32 px-6 bg-brand-green text-white overflow-hidden">
        {/* Texture Overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />

        <div className="max-w-[1400px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-20"
          >
            <div className="space-y-6">
              <span className="text-white/40 font-inter font-light tracking-[0.5em] uppercase text-[10px]">The Artisans</span>
              <h2 className="text-6xl md:text-8xl font-italiana leading-none tracking-tight">MEET OUR TEAM</h2>
            </div>

            <div className="flex flex-wrap justify-center gap-x-12 gap-y-16 lg:gap-x-24">
              {teamNames.map((name, index) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <span className="text-4xl md:text-6xl font-italiana transition-all duration-500 group-hover:tracking-widest group-hover:text-brand-sage">
                    {name}
                  </span>
                  <div className="w-0 h-[1px] bg-brand-sage/40 mt-4 mx-auto group-hover:w-full transition-all duration-500" />
                </motion.div>
              ))}
            </div>

            <p className="max-w-3xl mx-auto text-xl text-white/60 font-inter font-light leading-relaxed">
              Our specialists are a collective of highly skilled artists passionate about precision, care, and the pursuit of handcrafted excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-40 px-6 bg-white relative overflow-hidden">
        {/* Background Geometric Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-brand-green/[0.03] rounded-full -z-1" />

        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.h2
            className="text-5xl md:text-7xl font-italiana text-brand-green leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            READY TO EXPERIENCE<br />THE DIFFERENCE?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              asChild
              className="group h-20 px-16 rounded-none bg-brand-green text-white hover:bg-brand-green/95 text-[12px] tracking-[0.5em] font-inter font-medium transition-all duration-500 shadow-2xl relative overflow-hidden"
            >
              <Link
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10 uppercase">BOOK AN EXPERIENCE</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
            </Button>
          </motion.div>

          <p className="text-brand-green/40 font-inter font-light uppercase tracking-[0.3em] text-[10px]">
            Your sanctuary awaits in Kitchener
          </p>
        </div>
      </section>
    </div>
  );
}
