'use client';

import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';

export default function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, amount: 0.3 });

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const sparkleVariants = {
    animate: (i) => ({
      scale: [1, 1.5, 1],
      opacity: [0.3, 1, 0.3],
      rotate: [0, 180, 360],
      transition: {
        duration: 2,
        repeat: Infinity,
        delay: i * 0.3,
        ease: "easeInOut"
      }
    })
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Belleza&family=Meow+Script&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
      `}</style>

      <section 
        ref={sectionRef}
        className="bg-white px-6 py-16 min-h-[85vh] flex flex-col justify-center relative overflow-hidden"
        style={{ fontFamily: 'Open Sans, sans-serif' }}
      >
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{ y, opacity }}
        >
          {/* Floating Sparkles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={sparkleVariants}
              animate="animate"
              className="absolute"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 20}%`,
              }}
            >
              <Sparkles className="text-yellow-300/40 w-6 h-6" />
            </motion.div>
          ))}

          {/* Floating Stars */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`star-${i}`}
              variants={floatingVariants}
              animate="animate"
              className="absolute"
              style={{
                right: `${10 + i * 18}%`,
                top: `${15 + (i % 2) * 30}%`,
                transitionDelay: `${i * 0.2}s`
              }}
            >
              <Star className="text-yellow-400/30 w-5 h-5" fill="currentColor" />
            </motion.div>
          ))}

          {/* Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-300/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-yellow-400/15 rounded-full blur-3xl"
          />
        </motion.div>

        <motion.div 
          className="max-w-7xl mx-auto w-full relative z-10"
          style={{ scale }}
        >
          {/* Header Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-8">
            {/* Left Side - Text Content */}
            <div className="flex-1" ref={titleRef}>
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight"
                style={{ fontFamily: 'Belleza, sans-serif' }}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {['DEER RIDGE', 'NAILS SPA'].map((line, lineIndex) => (
                  <span key={lineIndex} className="block">
                    {line.split(' ').map((word, wordIndex) => (
                      <motion.span
                        key={wordIndex}
                        className="inline-block mr-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent hover:from-green-500 hover:to-emerald-500 transition-all duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                          duration: 0.5,
                          delay: lineIndex * 0.3 + wordIndex * 0.1,
                          ease: "easeOut"
                        }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed"
                style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Premium nail care and spa services in Kitchener, Ontario.
              </motion.p>

              {/* Customer Avatars */}
              <motion.div 
                className="flex items-center space-x-3 mb-8"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <div className="flex -space-x-3">
                  {[
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"
                  ].map((src, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: 1 + i * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      <Avatar className="border-2 border-white w-12 h-12">
                        <AvatarImage src={src} alt={`Customer ${i + 1}`} />
                        <AvatarFallback>C{i + 1}</AvatarFallback>
                      </Avatar>
                    </motion.div>
                  ))}
                </div>
                <div className="text-sm text-gray-600" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>
                  <div className="font-semibold">500+ SATISFIED</div>
                  <div>CUSTOMERS</div>
                </div>
              </motion.div>
            </div>
            
            {/* Right Side - Big Square with Image Text Mask + Overlapping Papers */}
            <motion.div 
              className="relative w-full h-[500px] lg:h-[600px]"
              initial={{ opacity: 0, x: 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Big Square - Full Image Background with Text Mask */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Full Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800"
                    alt="Nail salon background"
                    fill
                    className="object-cover"
                    quality={85}
                  />
                </div>

                {/* Green Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-[#008009] opacity-60"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 0.6 } : {}}
                  transition={{ duration: 0.8, delay: 0.7 }}
                />

                {/* Text with Image Mask */}
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',
                  }}
                >
                  <motion.h2 
                    className="text-7xl md:text-8xl lg:text-9xl font-black leading-none text-center px-4"
                    style={{ fontFamily: 'Belleza, sans-serif' }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.9 }}
                  >
                    RED
                    <br />
                    NAIL
                  </motion.h2>
                </div>
              </div>

              {/* Overlapping Paper Images */}
              <motion.div
                className="absolute -right-8 top-20 w-64 h-80 overflow-hidden shadow-2xl z-10 bg-white p-2"
                style={{ rotate: 8 }}
                initial={{ opacity: 0, y: -50, rotate: 8 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: 8 } : {}}
                transition={{ duration: 0.8, delay: 1.1 }}
                whileHover={{ scale: 1.05, rotate: 10, zIndex: 50 }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400"
                    alt="Nail care service"
                    fill
                    className="object-cover"
                    quality={85}
                  />
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-12 bottom-16 w-60 h-72 overflow-hidden shadow-2xl z-10 bg-white p-2"
                style={{ rotate: -6 }}
                initial={{ opacity: 0, y: 50, rotate: -6 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: -6 } : {}}
                transition={{ duration: 0.8, delay: 1.3 }}
                whileHover={{ scale: 1.05, rotate: -4, zIndex: 50 }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=400"
                    alt="Professional manicure"
                    fill
                    className="object-cover"
                    quality={85}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* CTA Button */}
          <motion.div 
            className="flex justify-end mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.div
              whileHover={{ scale: 1.08, boxShadow: "0 20px 40px rgba(0, 128, 9, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact">
                <Button
                  className="rounded-full px-8 py-6 h-auto group bg-[#008009] text-white hover:bg-[#006400] shadow-lg hover:shadow-2xl transition-all duration-300 text-lg font-bold"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                  aria-label="Make an appointment for nail services"
                >
                  <motion.span 
                    className="inline-block"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    MAKE APPOINTMENT
                  </motion.span>
                  <motion.svg 
                    className="w-5 h-5 ml-3 inline-block" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Image Gallery */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {[
              { src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400", alt: "Professional manicure service" },
              { src: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400", alt: "Nail art design" },
              { src: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=400", alt: "Nail polish application" },
              { src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=400", alt: "Beautiful nail care results" }
            ].map((image, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.5, type: "spring" },
                  },
                }}
                whileHover={{ 
                  scale: 1.08, 
                  rotate: 2,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)"
                }}
                className="aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer group shadow-md"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  width={300}
                  height={300}
                  loading={i < 2 ? "eager" : "lazy"}
                  quality={85}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}