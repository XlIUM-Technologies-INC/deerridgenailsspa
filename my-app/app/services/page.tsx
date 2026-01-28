"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  Star,
  Heart,
  Palette,
  Scissors,
  Check,
  ArrowRight,
  Clock,
  DollarSign,
  Zap,
} from "lucide-react";
// @ts-ignore
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

import {
  SERVICE_CATEGORIES as categories,
  SERVICES as services,
  PROCESS_STEPS as process,
  SERVICE_ADDONS as addons,
  BOOKING_URL
} from "@/lib/constants";

export default function ServicesPage() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const addonsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.1 });
  const processInView = useInView(processRef, { once: true, amount: 0.2 });
  const addonsInView = useInView(addonsRef, { once: true, amount: 0.2 });

  const [selectedCategory, setSelectedCategory] = useState("all");

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  return (
    <div className="bg-white min-h-screen">
      {/* Cinematic Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden bg-brand-green"
      >
        {/* Full-bleed Optimized Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/8f7b18b46378234ab97d8c5a74458c51.jpg"
            alt="Deer Ridge Nails Spa Sanctuary"
            fill
            className="object-cover contrast-[1.1] brightness-[0.7]"
            priority
            sizes="100vw"
            quality={90}
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-green via-brand-green/60 to-transparent z-1" />
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white via-white/20 to-transparent z-[2]" />
        </div>

        {/* Decorative Geometric Figures */}
        <div className="absolute inset-0 z-1 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute top-[15%] right-[10%] w-96 h-96 border border-white/20 rounded-full hidden lg:block"
          />
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 0.05, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute bottom-[20%] left-0 w-[400px] h-[1px] bg-white hidden xl:block"
          />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 flex flex-col items-start pt-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="flex flex-col items-start text-left space-y-10 max-w-4xl"
          >
            <div className="space-y-6">
              <Badge variant="outline" className="text-white/60 border-white/20 rounded-none px-6 py-2 font-inter font-light tracking-[0.5em] uppercase text-[10px]">
                A Bespoke Collection
              </Badge>
              <h1 className="text-7xl md:text-9xl font-italiana text-white leading-[0.85] tracking-tighter">
                <span className="block">ARTFUL</span>
                <span className="italic text-white/90 ml-12 md:ml-32">SERVICES.</span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-brand-sage font-inter font-light italic tracking-[0.4em] uppercase leading-none">
              Precision. Passion. Perfection.
            </p>

            <div className="h-[1px] w-32 bg-white/30" />


          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          {/* Header & Filter */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 max-w-xl"
            >
              <span className="text-brand-sage font-inter font-light tracking-[0.4em] uppercase text-[10px]">Your treatment</span>
              <h2 className="text-5xl md:text-7xl font-italiana text-brand-green leading-[0.9] tracking-tight">
                THE SERVICE <br />MENU
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-2"
            >
              <span className="w-full text-[9px] tracking-[0.4em] font-inter uppercase text-brand-green/30 mb-2 md:hidden">Filter By Category</span>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-8 py-3 text-[10px] tracking-[0.2em] font-inter uppercase transition-all duration-300 rounded-none border ${selectedCategory === cat.id
                    ? "bg-brand-green text-white border-brand-green"
                    : "bg-transparent text-brand-green/40 border-brand-green/10 hover:border-brand-green/40"
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="space-y-8 h-full flex flex-col">
                    <div className="relative aspect-[4/5] overflow-hidden bg-brand-green/[0.02]">
                      {service.popular && (
                        <div className="absolute top-6 left-6 z-20 bg-brand-green text-white px-6 py-2 text-[9px] tracking-[0.3em] font-inter uppercase font-medium shadow-2xl">
                          Highly Coveted
                        </div>
                      )}
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={85}
                      />
                      <div className="absolute inset-0 bg-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>

                    <div className="flex-1 space-y-6 border-l border-brand-green/5 pl-8 transition-all duration-700 group-hover:border-brand-green/20">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-3xl font-italiana text-brand-green leading-none">
                          {service.name}
                        </h3>
                        <span className="text-xl font-italiana text-brand-green/40">{service.price}</span>
                      </div>

                      <p className="text-brand-green/60 font-inter font-light text-sm leading-relaxed">
                        {service.description}
                      </p>

                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-[11px] text-brand-sage font-inter font-light uppercase tracking-wider">
                            <div className="w-1.5 h-1.5 border border-brand-sage/40 rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="pt-6">
                        <Link
                          href={BOOKING_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-4 text-[10px] tracking-[0.4em] font-inter font-medium text-brand-green uppercase group/link"
                        >
                          Book Experience
                          <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover/link:translate-x-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-32 px-6 bg-brand-green relative overflow-hidden">
        {/* Subtle Texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />

        <div className="max-w-[1400px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-24"
          >
            <div className="space-y-6">
              <span className="text-white/40 font-inter font-light tracking-[0.5em] uppercase text-[10px]">Our Metier</span>
              <h2 className="text-6xl md:text-8xl font-italiana text-white leading-none tracking-tight">THE PROCESS</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-8 group"
                >
                  <div className="relative">
                    <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-8xl font-italiana text-white/5 group-hover:text-white/10 transition-colors duration-700">
                      0{index + 1}
                    </span>
                    <div className="w-16 h-16 mx-auto bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md relative z-10">
                      <item.icon className="w-8 h-8 text-white stroke-1" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-italiana text-white">{item.title}</h3>
                    <p className="text-white/40 font-inter font-light text-sm leading-relaxed max-w-[240px] mx-auto uppercase tracking-widest text-[10px]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section ref={addonsRef} className="py-32 px-6 bg-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-brand-green/[0.02] -z-1" />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24 space-y-6"
          >
            <span className="text-brand-sage font-inter font-light tracking-[0.4em] uppercase text-[10px]">Artistic Accents</span>
            <h2 className="text-5xl md:text-7xl font-italiana text-brand-green leading-[0.9] tracking-tight">ENHANCEMENTS</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-24 gap-y-12">
            {addons.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-between border-b border-brand-green/10 pb-6 group"
              >
                <div className="space-y-1">
                  <span className="font-italiana text-2xl text-brand-green transition-all duration-300 group-hover:tracking-widest">
                    {addon.name}
                  </span>
                  <p className="text-[9px] tracking-[0.2em] font-inter uppercase text-brand-sage opacity-60">Signature Detail</p>
                </div>
                <span className="font-italiana text-xl text-brand-green/40">{addon.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-40 px-6 bg-brand-green relative overflow-hidden text-white">
        {/* Background Geometric Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.03] rounded-full -z-1" />

        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.h2
            className="text-6xl md:text-9xl font-italiana leading-none tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            RESERVE <br /><span className="italic opacity-80 pl-16">YOUR TIME.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              asChild
              className="group h-20 px-16 rounded-none bg-white text-brand-green hover:bg-white/95 text-[12px] tracking-[0.5em] font-inter font-medium transition-all duration-500 shadow-2xl relative overflow-hidden"
            >
              <Link
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10 uppercase">BOOK AN EXPERIENCE</span>
                <div className="absolute inset-0 bg-brand-sage/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
            </Button>
          </motion.div>

          <p className="text-white/40 font-inter font-light uppercase tracking-[0.3em] text-[10px]">
            Elegance is expected. Artistry is guaranteed.
          </p>
        </div>
      </section>
    </div>
  );
}
