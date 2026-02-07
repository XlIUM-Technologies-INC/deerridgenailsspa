"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  Star,
  Quote,
  ThumbsUp,
  MessageCircle,
  TrendingUp,
  Award,
  Users,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
// @ts-ignore
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BUSINESS_RATING, BOOKING_URL } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function ReviewsPage() {
  const heroRef = useRef(null);
  const reviewsRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const reviewsInView = useInView(reviewsRef, { once: true, amount: 0.1 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  const [selectedFilter, setSelectedFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Reviews" },
    { id: "5-star", label: "5 Stars" },
    { id: "recent", label: "Most Recent" },
  ];

  const reviews = [
    {
      id: 1,
      name: "Elizabeth Gawel",
      rating: 5,
      date: "Jan 19, 2026",
      verified: true,
      review:
        "I have been having Sue-Anne do my nails for a few years. She always takes so much care and does an awesome job. I would recommend going here.",
      service: "Precision Nail Care",
    },
    {
      id: 2,
      name: "Jane D.",
      rating: 5,
      date: "Jan 11, 2026",
      verified: true,
      review: "First visit. Loved our experience. The atmosphere is purely relaxing. Will certainly be back!",
      service: "Spa Pedicure",
    },
    {
      id: 3,
      name: "Hannah S.",
      rating: 5,
      date: "Dec 21, 2025",
      verified: true,
      review:
        "Amazing experience the girls there are so kind, and have great humour. Super sweet atmosphere as well!",
      service: "Manicure & Art",
    },
    {
      id: 4,
      name: "Tina Cunningham",
      rating: 5,
      date: "Dec 19, 2025",
      verified: true,
      review:
        "Teena and her girls are absolutely awesome. Have never been given the opportunity to just sit and chill in the massage chair after a spa pedicure. “Take your time” Thank you it was wonderful.",
      service: "Luxury Pedicure",
    },
    {
      id: 5,
      name: "Linda Howlett",
      rating: 5,
      date: "Dec 15, 2025",
      verified: true,
      review:
        "Clean tidy salon and very friendly staff. Amazing work on my nails, definitely the best in Kitchener.",
      service: "Gel Manicure",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden bg-brand-green"
      >
        {/* Background Texture & Geometric Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-green via-brand-green/80 to-white z-1" />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Floating Geometric Figures */}
        <div className="absolute inset-0 z-1 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 0.1, x: 0 }}
            transition={{ duration: 2 }}
            className="absolute top-1/4 right-[10%] w-[500px] h-[500px] border border-white/20 rounded-full hidden lg:block"
          />
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 0.05, y: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute top-0 left-1/3 w-[1px] h-[30vh] bg-gradient-to-b from-white to-transparent hidden xl:block"
          />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            className="space-y-8"
          >
            <Badge variant="outline" className="text-white/60 border-white/20 rounded-none px-6 py-2 font-inter font-light tracking-[0.5em] uppercase text-[10px]">
              Voices of our community
            </Badge>
            <h1 className="text-5xl md:text-7xl font-italiana text-white leading-[0.85] tracking-tighter">
              TRUSTED <br />
              <span className="italic opacity-80">ARTISTRY</span>
            </h1>
            <div className="flex flex-col items-center space-y-4 pt-8">
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-white text-white opacity-90" />
                ))}
              </div>
              <p className="text-2xl font-italiana text-white tracking-widest">{BUSINESS_RATING.score} / 5.0 RATING</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section ref={reviewsRef} className="py-32 px-6 bg-white overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto relative z-10">
          {/* Filters */}
          <div className="flex flex-wrap justify-start gap-4 mb-24 items-center">
            <span className="text-[10px] tracking-[0.3em] font-inter uppercase text-brand-green/40 mr-4">Filter By</span>
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-8 py-3 text-[10px] tracking-[0.2em] font-inter uppercase transition-all duration-300 rounded-none border ${selectedFilter === filter.id
                  ? "bg-brand-green text-white border-brand-green"
                  : "bg-transparent text-brand-green/40 border-brand-green/10 hover:border-brand-green/40"
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="p-10 border border-brand-green/5 bg-brand-green/[0.01] hover:bg-brand-green/[0.03] transition-all duration-500 h-full flex flex-col justify-between">
                  <div className="space-y-8">
                    <Quote className="w-10 h-10 text-brand-green/10" />

                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-brand-green text-brand-green opacity-70" />
                      ))}
                    </div>

                    <p className="text-brand-green/70 text-lg font-inter font-light leading-relaxed">
                      "{review.review}"
                    </p>
                  </div>

                  <div className="pt-12 mt-12 border-t border-brand-green/5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-italiana text-2xl text-brand-green leading-none mb-2">{review.name}</h4>
                        <p className="text-[10px] tracking-[0.2em] font-inter uppercase text-brand-sage">{review.service}</p>
                      </div>
                      {review.verified && (
                        <div className="w-8 h-8 rounded-full border border-brand-green/20 flex items-center justify-center">
                          <Badge className="bg-transparent text-brand-green p-0 shadow-none">
                            <Star className="w-3 h-3 fill-brand-green" />
                          </Badge>
                        </div>
                      )}
                    </div>
                    <p className="text-[9px] font-inter uppercase tracking-widest text-brand-green/30 mt-6">{review.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-40 px-6 bg-brand-green text-white relative overflow-hidden">
        {/* Texture Overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />

        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-white/40 font-inter font-light tracking-[0.5em] uppercase text-[10px]">Your experience awaits</span>
            <h2 className="text-5xl md:text-8xl font-italiana leading-[0.9] tracking-tight text-white mb-12">
              BECOME OUR NEXT <br />
              <span className="italic">STORY.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center space-y-8"
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
                <div className="absolute inset-0 bg-brand-green/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
            </Button>

            <button className="text-[10px] tracking-[0.4em] font-inter uppercase text-white/40 hover:text-white transition-opacity">
              Share your own feedback →
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
