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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function ReviewsPage() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const reviewsRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const reviewsInView = useInView(reviewsRef, { once: true, amount: 0.1 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  const [selectedFilter, setSelectedFilter] = useState("all");

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);



  const filters = [
    { id: "all", label: "All Reviews" },
    { id: "5-star", label: "5 Stars" },
    { id: "recent", label: "Most Recent" },
    { id: "verified", label: "Verified" },
  ];

  const reviews = [
    {
      id: 1,
      name: "Elizabeth Gawel",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
      rating: 5,
      date: "Jan 19, 2026",
      verified: true,
      review: "I have been having Sue-Anne do my nails for a few years. She always takes so much care and does an awesome job. I would recommend going here.",
      service: "Nail Care",
      helpful: 12,
      images: [],
    },
    {
      id: 2,
      name: "jane",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      rating: 5,
      date: "Jan 11, 2026",
      verified: true,
      review: "First visit. Loved our experience. Will certainly be back!",
      service: "Visitor",
      helpful: 5,
      images: [],
    },
    {
      id: 3,
      name: "Hannah",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150",
      rating: 5,
      date: "Dec 21, 2025",
      verified: true,
      review: "Amazing experience the girls there are so kind, and have great humour. Super sweet atmosphere as well!",
      service: "Group Appointment",
      helpful: 8,
      images: [],
    },
    {
      id: 4,
      name: "Tina Cunningham",
      avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150",
      rating: 5,
      date: "Dec 19, 2025",
      verified: true,
      review: "Teena and her girls are absolutely awesome. Have never been given the opportunity to just sit and chill in the massage chair after a spa pedicure. “Take your time and take a few more minutes for yourself” Thank you it was wonderful.",
      service: "Spa Pedicure",
      helpful: 15,
      images: [],
    },
    {
      id: 5,
      name: "Linda Howlett",
      avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150",
      rating: 5,
      date: "Dec 15, 2025",
      verified: true,
      review: "Clean tidy salon and very friendly staff Amazing work on my nails",
      service: "Manicure",
      helpful: 7,
      images: [],
    },
    {
      id: 6,
      name: "Elena Michael Reynolds",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150",
      rating: 5,
      date: "Dec 12, 2025",
      verified: true,
      review: "Thank you ladies !",
      service: "Service",
      helpful: 2,
      images: [],
    },
    {
      id: 7,
      name: "Caylin",
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150",
      rating: 5,
      date: "Dec 10, 2025",
      verified: true,
      review: "Very kind lady’s",
      service: "Nail Art",
      helpful: 4,
      images: [],
    },
    {
      id: 8,
      name: "Elizabeth Gawel",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
      rating: 5,
      date: "Nov 18, 2025",
      verified: true,
      review: "Sue-Anne has been doing my nails for a few years. She always takes great care with the quality of her work. She is friendly and easy to talk to. I would recommend going here.",
      service: "Nail Care",
      helpful: 6,
      images: [],
    },
    {
      id: 9,
      name: "Chainar",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
      rating: 5,
      date: "Nov 10, 2025",
      verified: true,
      review: "amazing!!",
      service: "Service",
      helpful: 1,
      images: [],
    },
    {
      id: 10,
      name: "Suman",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
      rating: 5,
      date: "Nov 03, 2025",
      verified: true,
      review: "Excellent staff !!",
      service: "Service",
      helpful: 3,
      images: [],
    },
    {
      id: 11,
      name: "Carol",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
      rating: 5,
      date: "Oct 18, 2025",
      verified: true,
      review: "Best nail place in the region! The staff are so kind and excellent at their job. Highly recommend. Thank you again for a wonderful experience ❤️",
      service: "Service",
      helpful: 9,
      images: [],
    },
    {
      id: 12,
      name: "Bri Rogers",
      avatar: "https://images.unsplash.com/photo-1554151228-14d9def656ec?w=150",
      rating: 5,
      date: "Oct 04, 2025",
      verified: true,
      review: "They always have great service and very friendly staff. I always get my nails done because they always do such a great job. Totally reccomend going!!",
      service: "Manicure",
      helpful: 5,
      images: [],
    },
    {
      id: 13,
      name: "Doris Litch",
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150",
      rating: 5,
      date: "Sep 29, 2025",
      verified: true,
      review: "Wonderful attention to detail and I love the nude color with the chrome finish. Always professional will be back definitely!",
      service: "Chrome Nails",
      helpful: 4,
      images: [],
    },
    {
      id: 14,
      name: "Heather Albrecht",
      avatar: "https://images.unsplash.com/photo-1619895862047-e64331523546?w=150",
      rating: 5,
      date: "Sep 24, 2025",
      verified: true,
      review: "Relaxing pedicure as always with attention to detail. I really appreciated that my late request to adjust my appointment time was kindly accommodated. Thank you!\n\nResponse from salon: It’s our pleasure to accommodate your busy schedules. Thank you for taking the time to share your experience. We're delighted that you enjoyed our services.",
      service: "Pedicure",
      helpful: 10,
      images: [],
    },
    {
      id: 15,
      name: "Linda Howlett",
      avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150",
      rating: 5,
      date: "Sep 16, 2025",
      verified: true,
      review: "Lovely clean bright salon Sue Ann is fantastic always happy with her work. Friendly Staff Would definitely recommend it",
      service: "Nail Care",
      helpful: 3,
      images: [],
    },
    {
      id: 16,
      name: "Christine Fry",
      avatar: "https://images.unsplash.com/photo-1552058544-f2b084996f99?w=150",
      rating: 5,
      date: "Sep 14, 2025",
      verified: true,
      review: "Great service. Did a wonderful job on my nails.",
      service: "Service",
      helpful: 2,
      images: [],
    },
    {
      id: 17,
      name: "Elena Michael Reynolds",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150",
      rating: 5,
      date: "Sep 11, 2025",
      verified: true,
      review: "Sweet ladies ! It’s nice that they can speak and understand English. Can actually have a conversation with these ladies .",
      service: "Visit",
      helpful: 6,
      images: [],
    },
    {
      id: 18,
      name: "Dianne",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150",
      rating: 5,
      date: "Sep 09, 2025",
      verified: true,
      review: "Dianne did an amazing job!",
      service: "Service",
      helpful: 1,
      images: [],
    },
    {
      id: 19,
      name: "Christina",
      avatar: "https://images.unsplash.com/photo-1534759846116-5799c33ce36a?w=150",
      rating: 5,
      date: "Sep 05, 2025",
      verified: true,
      review: "A++++Highly recommended",
      service: "Service",
      helpful: 2,
      images: [],
    },
    {
      id: 20,
      name: "Mary Batista",
      avatar: "https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?w=150",
      rating: 5,
      date: "Sep 05, 2025",
      verified: true,
      review: "Enjoy this salon very much. Have only been going there a short while, but the new owner is amazing, the staff is very attentive and listen to what you want.",
      service: "Service",
      helpful: 7,
      images: [],
    },
    {
      id: 21,
      name: "Anita",
      avatar: "https://images.unsplash.com/photo-1549479320-fa0560c0c84c?w=150",
      rating: 5,
      date: "Aug 30, 2025",
      verified: true,
      review: "Super friendly and amazing service. Nails turned out amazing as always!",
      service: "Service",
      helpful: 4,
      images: [],
    },
  ];

  const featuredReviews = reviews.slice(0, 3);

  return (
    <div className="bg-[#ffffff]">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center bg-brand-green justify-center overflow-hidden py-20 px-6"
      >


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
            Client Reviews
          </motion.p>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What Our Clients Say
          </motion.h1>
          <motion.p
            className="text-xl text-[#5a5a5a] mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Real experiences from our valued clients who trust us with their
            nail care
          </motion.p>


          <motion.p
            className="text-2xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            4.9 out of 5 stars
          </motion.p>
        </div>
      </section>



      {/* Featured Reviews Section */}
      <section className="bg-[#ffffff] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-brand-green font-semibold mb-2 uppercase tracking-wider text-sm">
              Featured Reviews
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2a2a2a] mb-4">
              Hear From Our Clients
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full group">
                  <CardContent className="p-8">
                    <Quote className="w-12 h-12 text-brand-green/20 mb-4" />

                    {/* Star Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-brand-yellow text-brand-yellow"
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      "{review.review}"
                    </p>

                    {/* Reviewer Info */}
                    <div className="flex items-center gap-4 pt-6 border-t">

                      <div className="flex-1">
                        <div className="font-bold text-gray-900 flex items-center gap-2">
                          {review.name}
                          {review.verified && (
                            <Badge
                              variant="secondary"
                              className="bg-[#e0e0e0] text-brand-green text-xs"
                            >
                              Verified
                            </Badge>
                          )}
                        </div>
                        <div className="text-sm text-[#7a7a7a]">
                          {review.service}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Reviews Section */}
      <section ref={reviewsRef} className="bg-brand-yellow py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={reviewsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              All Reviews
            </h2>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  variant={selectedFilter === filter.id ? "default" : "outline"}
                  className={
                    selectedFilter === filter.id
                      ? "bg-brand-green text-white hover:bg-brand-green"
                      : "border-[#d0d0d0] hover:border-brand-green"
                  }
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Reviews List */}
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={reviewsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">


                      <div className="flex-1">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="font-bold text-gray-900 flex items-center gap-2">
                              {review.name}
                              {review.verified && (
                                <Badge
                                  variant="secondary"
                                  className="bg-[#e0e0e0] text-brand-green text-xs"
                                >
                                  Verified
                                </Badge>
                              )}
                            </div>
                            <div className="text-sm text-[#7a7a7a]">
                              {review.date}
                            </div>
                          </div>
                          <div className="flex gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 fill-brand-yellow text-brand-yellow"
                              />
                            ))}
                          </div>
                        </div>

                        {/* Service Badge */}
                        <Badge
                          variant="outline"
                          className="mb-3 text-brand-green border-brand-green"
                        >
                          {review.service}
                        </Badge>

                        {/* Review Text */}
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          {review.review}
                        </p>

                        {/* Review Images */}
                        {review.images.length > 0 && (
                          <div className="flex gap-2 mb-4">
                            {review.images.map((img, idx) => (
                              <div
                                key={idx}
                                className="relative w-24 h-24 rounded-lg overflow-hidden"
                              >

                              </div>
                            ))}
                          </div>
                        )}

                        {/* Footer Actions */}
                        <div className="flex items-center gap-4 text-sm text-[#7a7a7a]">
                          <button className="flex items-center gap-1 hover:text-brand-green transition-colors">
                            <ThumbsUp className="w-4 h-4" />
                            <span>Helpful ({review.helpful})</span>
                          </button>
                          <button className="flex items-center gap-1 hover:text-brand-green transition-colors">
                            <MessageCircle className="w-4 h-4" />
                            <span>Reply</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Button
              variant="outline"
              className="border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white px-8 py-6 text-lg"
            >
              Load More Reviews
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="bg-brand-green py-20 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Ready to Experience It Yourself?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 opacity-90"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join hundreds of satisfied clients and book your appointment today
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="https://www.dashbooking.com/salon/deer-ridge-nails-and-spa" target="_blank" rel="noopener noreferrer">
              <Button
                className="bg-white text-brand-green hover:bg-[#e0e0e0] px-8 py-6 text-lg font-semibold"
                size="lg"
              >
                Book Appointment
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-brand-green px-8 py-6 text-lg font-semibold"
              size="lg"
            >
              Leave a Review
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
