"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { SERVICE_SUMMARIES as services } from "@/lib/constants";

export default function ServicesSection() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={containerRef}
      className="py-32 px-6 bg-white overflow-hidden relative"
    >
      {/* Background Geometric Figures */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Circle */}
        <motion.div
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-20 w-80 h-80 border border-brand-green/5 rounded-full"
        />
        {/* Angled Line Accent */}
        <div className="absolute top-[15%] left-[5%] w-[1px] h-64 bg-brand-green/10 -rotate-45" />
        <div className="absolute bottom-[20%] right-[10%] w-32 h-32 border border-brand-green/5 flex items-center justify-center">
          <div className="w-16 h-16 border border-brand-green/5 rotate-45" />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header Section */}
        <div className="max-w-xl mb-32">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-brand-sage font-inter font-light mb-6 uppercase tracking-[0.4em] text-[10px]"
          >
            The Art of Beauty
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-italiana text-brand-green leading-[0.9] tracking-tighter"
          >
            BESPOKE <br />
            EXPERIENCES
          </motion.h2>
        </div>

        {/* Services List - Alternating Layout */}
        <div className="space-y-40 md:space-y-64">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
            >
              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full md:w-1/2"
              >
                <div className="relative aspect-[3/4] overflow-hidden shadow-2xl group transition-all duration-700">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-[2s] group-hover:scale-110 contrast-[1.05]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                  />
                  <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none" />
                </div>
              </motion.div>

              {/* Text Side */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="w-full md:w-1/2 flex flex-col items-start space-y-8"
              >
                <div className="space-y-4">
                  <span className="text-brand-green/20 font-inter font-light text-5xl md:text-7xl">
                    0{index + 1}
                  </span>
                  <h3 className="text-5xl md:text-7xl font-italiana text-brand-green leading-none">
                    {service.title}
                  </h3>
                  <div className="w-24 h-[1px] bg-brand-green/20" />
                </div>

                <p className="text-brand-green/70 font-inter font-light text-lg md:text-xl max-w-lg leading-relaxed">
                  {service.description}
                </p>

                <Link href={service.href}>
                  <Button className="bg-brand-green text-white hover:bg-brand-green/95 px-12 py-7 font-inter font-medium text-[11px] tracking-[0.4em] uppercase rounded-none shadow-xl transition-all duration-500 group relative overflow-hidden">
                    <span className="relative z-10">VIEW DETAILS</span>
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-48 pt-32 border-t border-brand-green/5 flex flex-col items-center text-center space-y-12"
        >
          <p className="text-brand-green/40 font-inter font-light text-xl max-w-2xl leading-relaxed">
            Every treatment is a ritual of precision, hygiene, and artistic expression. Discover the full extent of our craftsmanship.
          </p>
          <Link href="/services">
            <Button variant="outline" className="h-18 px-16 border-brand-green/20 text-brand-green hover:bg-brand-green hover:text-white font-inter font-medium text-[11px] tracking-[0.5em] uppercase rounded-none transition-all duration-700">
              EXPLORE FULL MENU +
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
