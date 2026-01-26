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

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col bg-gradient-to-br from-brand-green via-brand-green to-green-400 overflow-hidden">

      {/* Main Content Container */}
      <div className="relative flex-1 max-w-[1600px] mx-auto w-full px-6 grid lg:grid-cols-2 gap-12 items-center py-12 mt-20">

        {/* Left: Text & Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start space-y-8 lg:pr-12 z-10"
        >


          {/* Heading with Gradient Text */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-7xl lg:text-8xl font-italiana leading-[0.95]"
          >
            <span className="text-white drop-shadow-lg">
              DEER RIDGE
            </span>
            <br />
            <span className="text-white/90 italic relative inline-block">
              NAILS & SPA
              <motion.span
                animate={{ scaleX: [0, 1] }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-2 left-0 w-full h-1 bg-white/40 origin-left"
              />
            </span>
          </motion.h1>

          {/* Description with Enhanced Typography */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg text-white/90 font-old-standard max-w-md leading-relaxed relative pl-4 border-l-2 border-white/40"
          >
            Your premier destination for luxury nail care and relaxation in Kitchener.
            Experience professional artistry in a serene, hygienic environment.
          </motion.p>

          {/* Action Buttons with Hover Effects */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button asChild className="group w-full sm:w-auto h-14 px-8 rounded-full bg-gradient-to-r from-brand-green to-emerald-600 text-white hover:from-brand-green/90 hover:to-emerald-700 text-lg font-italiana tracking-widest transition-all shadow-lg hover:shadow-2xl hover:scale-105">
              <Link href="https://www.dashbooking.com/salon/deer-ridge-nails-and-spa" target="_blank" rel="noopener noreferrer">
                <span className="relative z-10">BOOK APPOINTMENT</span>
                <motion.span 
                  className="absolute inset-0 bg-white/20 rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </Button>
            <Button asChild variant="outline" className="group w-full sm:w-auto h-14 px-8 rounded-full border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white text-lg font-italiana tracking-widest transition-all hover:scale-105 backdrop-blur-sm bg-white/50">
              <Link href="/services">
                VIEW SERVICES
              </Link>
            </Button>
          </motion.div>

          {/* Enhanced Info Cards */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="pt-8 w-full grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
     
          </motion.div>

        </motion.div>

        {/* Right: Feature Image with Artistic Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[400px] lg:h-[500px] w-full z-10"
        >
          {/* Decorative Elements Behind Image */}
          <motion.div 
            animate={{ rotate: [0, 180, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -top-8 -right-8 w-32 h-32 border-2 border-brand-green/20 rounded-full"
          />
          <motion.div 
            animate={{ rotate: [360, 180, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-8 -left-8 w-40 h-40 border-2 border-brand-sage/20 rounded-full"
          />

          {/* Main Image with Artistic Mask */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 rounded-t-[10rem] md:rounded-t-[20rem] overflow-hidden border-2 border-white bg-gradient-to-br from-white to-emerald-50 p-3 shadow-2xl"
          >
            <div className="relative w-full h-full rounded-t-[9.5rem] md:rounded-t-[19.5rem] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=2000&auto=format&fit=crop"
                alt="Deer Ridge Salon Interior"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/20 via-transparent to-transparent" />
              
              {/* Shimmer Effect */}
              <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
            </div>
          </motion.div>

          {/* Enhanced Floating Service Card */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            whileHover={{ y: -5, scale: 1.03 }}
            className="absolute bottom-12 -left-6 md:-left-12 max-w-[300px]"
          >
            <Card className="border-none shadow-2xl bg-white/95 backdrop-blur-md overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-green via-emerald-500 to-brand-sage" />
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-xs font-bold text-brand-green tracking-widest uppercase mb-1 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Featured Service
                    </p>
                    <h3 className="text-2xl font-italiana bg-gradient-to-r from-brand-green to-brand-sage bg-clip-text text-transparent">
                      Gel Extensions
                    </h3>
                  </div>
                  <motion.div 
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-sage/20 to-emerald-100 flex items-center justify-center border border-brand-sage/30"
                  >
                    <Star className="w-5 h-5 text-brand-sage fill-brand-sage" />
                  </motion.div>
                </div>
                <p className="text-sm text-brand-gray-medium font-old-standard leading-relaxed mb-4">
                  Durable, lightweight, and natural-looking extensions sculpted to perfection.
                </p>
                <Separator className="bg-gradient-to-r from-brand-green/20 via-brand-green/40 to-transparent mb-4" />
                <div className="w-full h-2 bg-brand-green/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '75%' }}
                    transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-brand-green to-emerald-500 rounded-full relative"
                  >
                    <motion.span 
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute right-0 top-0 w-full h-full bg-gradient-to-r from-transparent to-white/50"
                    />
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}