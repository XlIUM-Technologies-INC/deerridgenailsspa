"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Clock, Star, Sparkles } from "lucide-react";
import { BOOKING_URL, CONTACT_INFO } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center bg-brand-green overflow-hidden">
      {/* Full-bleed Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/4cead3b03959332bb6ed66dbc288c899.jpg"
          alt="Deer Ridge Nails Spa Professional Salon"
          fill
          className="object-cover contrast-[1.1] brightness-[0.7]"
          priority
          sizes="100vw"
          quality={90}
        />
        {/* Gradient Overlay: Deep green on the left to transparent on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green via-brand-green/80 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />
        {/* Bottom Fade: Seamless transition to the next white section */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/20 to-transparent z-[2]" />
      </div>
      {/* Background Texture & Grain */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] z-1" />

      {/* Dynamic Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] -left-[5%] w-[40%] h-[60%] bg-emerald-400/20 blur-[120px] rounded-full z-1"
      />

      {/* Decorative Geometric Figures */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        {/* Outlined Square */}
        <motion.div
          initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
          animate={{ opacity: 0.1, rotate: 0, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-[15%] right-[10%] w-64 h-64 border border-white/30 hidden lg:block"
        />
        {/* Large Outlined Circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 0.5 }}
          className="absolute -bottom-[10%] left-[20%] w-[500px] h-[500px] border border-white/20 rounded-full hidden lg:block"
        />
        {/* Decorative Vertical Line */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "40vh" }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
          className="absolute top-0 right-[25%] w-[1px] bg-gradient-to-b from-white/20 to-transparent hidden xl:block"
        />
      </div>
      {/* Removed the second motion.div as per instruction's implied removal */}

      {/* Main Content Container - Left Aligned */}
      <div className="relative z-10 max-w-[1600px] mx-auto w-full px-6 flex flex-col items-start py-12 md:py-20 mt-16 md:mt-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-start text-left space-y-8 md:space-y-12 max-w-4xl"
        >
          <div className="space-y-6 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge variant="outline" className="text-white/60 border-white/20 rounded-none px-6 py-2 font-inter font-light tracking-[0.5em] uppercase text-[10px]">
                EST. 2024 • {CONTACT_INFO.address.city}, {CONTACT_INFO.address.province}
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-italiana leading-[0.8] tracking-tighter"
            >
              <span className="text-white drop-shadow-2xl flex flex-col items-start">
                <span>DEER RIDGE</span>
                <span className="italic text-white/90 ml-6 md:ml-24 mt-2 md:mt-0">NAILS SPA</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/50 font-inter font-light italic tracking-[0.5em] uppercase pl-2 leading-none"
            >
              Professional Nails & Beauty Spa
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col items-start space-y-8"
          >
            <p className="text-base md:text-xl text-white/80 font-inter font-light max-w-xl leading-relaxed text-left border-l border-white/20 pl-6 md:pl-8">
              A sanctuary of sophistication where precision meets relaxation.
              Experience the future of nail artistry in our newly renovated,
              state-of-the-art Kitchener studio.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto pt-4 font-inter">
              <Button
                asChild
                className="group h-18 px-14 rounded-none bg-white text-brand-green hover:bg-white/95 text-[12px] tracking-[0.4em] font-medium transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
              >
                <Link
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative z-10 uppercase">BOOK AN EXPERIENCE</span>
                  <motion.div
                    className="absolute inset-0 bg-brand-sage/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                  />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-16 md:h-18 px-10 md:px-14 rounded-none border-white/30 text-white hover:border-white hover:bg-white/5 text-[11px] md:text-[12px] tracking-[0.4em] font-medium transition-all duration-500 backdrop-blur-md uppercase"
              >
                <Link href="/services">EXPLORE SERVICES</Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
