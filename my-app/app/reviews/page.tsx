'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
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
  ChevronRight
} from 'lucide-react';
// @ts-ignore
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export default function ReviewsPage() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const reviewsRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const reviewsInView = useInView(reviewsRef, { once: true, amount: 0.1 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  const [selectedFilter, setSelectedFilter] = useState('all');

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const stats = [
    { 
      icon: Star, 
      value: "4.9", 
      label: "Average Rating",
      color: "text-yellow-500"
    },
    { 
      icon: Users, 
      value: "500+", 
      label: "Happy Clients",
      color: "text-blue-500"
    },
    { 
      icon: ThumbsUp, 
      value: "98%", 
      label: "Satisfaction Rate",
      color: "text-green-500"
    },
    { 
      icon: Award, 
      value: "10+", 
      label: "Years Experience",
      color: "text-purple-500"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Reviews' },
    { id: '5-star', label: '5 Stars' },
    { id: 'recent', label: 'Most Recent' },
    { id: 'verified', label: 'Verified' }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      rating: 5,
      date: 'November 15, 2025',
      verified: true,
      review: 'I absolutely loved my experience at Deer Ridge Nails Spa! My nails have never looked better. The attention to detail and the quality of service is outstanding.',
      service: 'Gel Manicure',
      helpful: 24,
      images: [
        'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400',
        'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400'
      ]
    },
    {
      id: 2,
      name: 'Emily Chen',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      rating: 5,
      date: 'November 12, 2025',
      verified: true,
      review: 'The staff is so friendly and the atmosphere is incredibly relaxing. Highly recommend! Every visit feels like a mini spa retreat.',
      service: 'Spa Pedicure',
      helpful: 18,
      images: []
    },
    {
      id: 3,
      name: 'Jessica Martinez',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
      rating: 5,
      date: 'November 10, 2025',
      verified: true,
      review: 'Deer Ridge Nails Spa always exceeds my expectations! Best nail care I\'ve ever received. The technicians are true artists and professionals.',
      service: 'Luxury Manicure',
      helpful: 32,
      images: [
        'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=400'
      ]
    },
    {
      id: 4,
      name: 'Amanda Wilson',
      avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150',
      rating: 5,
      date: 'November 8, 2025',
      verified: true,
      review: 'Amazing experience! The gel manicure lasted for 3 weeks without chipping. The staff is professional, talented, and really listens to what you want.',
      service: 'Gel Manicure',
      helpful: 21,
      images: []
    },
    {
      id: 5,
      name: 'Rachel Thompson',
      avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150',
      rating: 5,
      date: 'November 5, 2025',
      verified: true,
      review: 'I\'ve been coming here for over a year and they never disappoint. The quality is consistently excellent and the prices are very reasonable.',
      service: 'Acrylic Extensions',
      helpful: 15,
      images: [
        'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=400',
        'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=400'
      ]
    },
    {
      id: 6,
      name: 'Linda Davis',
      avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150',
      rating: 5,
      date: 'November 2, 2025',
      verified: true,
      review: 'The attention to hygiene and safety is impressive. All tools are properly sterilized and the salon is spotless. I feel completely comfortable here.',
      service: 'Classic Pedicure',
      helpful: 19,
      images: []
    },
    {
      id: 7,
      name: 'Maria Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=150',
      rating: 5,
      date: 'October 30, 2025',
      verified: true,
      review: 'Best nail salon in Kitchener! The nail art designs are stunning and the service is top-notch. I always leave feeling pampered and beautiful.',
      service: 'Custom Nail Art',
      helpful: 28,
      images: [
        'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400'
      ]
    },
    {
      id: 8,
      name: 'Jennifer Lee',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      rating: 5,
      date: 'October 28, 2025',
      verified: true,
      review: 'I brought my mom here for her birthday and we both had an amazing experience. The luxury pedicure was absolutely divine!',
      service: 'Luxury Pedicure',
      helpful: 22,
      images: []
    },
    {
      id: 9,
      name: 'Ashley Brown',
      avatar: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=150',
      rating: 5,
      date: 'October 25, 2025',
      verified: true,
      review: 'Professional, clean, and welcoming. The staff genuinely cares about their clients and it shows in every detail. Highly recommended!',
      service: 'Shellac Manicure',
      helpful: 17,
      images: []
    }
  ];

  const featuredReviews = reviews.slice(0, 3);

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
            alt="Reviews background"
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
            Client Reviews
          </motion.p>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What Our Clients Say
          </motion.h1>
          <motion.p
            className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Real experiences from our valued clients who trust us with their nail care
          </motion.p>

          {/* Star Rating Display */}
          <motion.div
            className="flex items-center justify-center gap-2 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
            ))}
          </motion.div>
          <motion.p
            className="text-2xl font-bold text-gray-900"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            4.9 out of 5 stars
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="inline-block mb-4"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon className={`w-12 h-12 ${stat.color}`} />
                    </motion.div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Reviews Section */}
      <section className="bg-[#f5f1ed] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#8b2f4a] font-semibold mb-2 uppercase tracking-wider text-sm">
              Featured Reviews
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
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
                    <Quote className="w-12 h-12 text-[#8b2f4a]/20 mb-4" />
                    
                    {/* Star Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      "{review.review}"
                    </p>

                    {/* Reviewer Info */}
                    <div className="flex items-center gap-4 pt-6 border-t">
                      <Avatar className="w-14 h-14">
                        <AvatarImage src={review.avatar} alt={review.name} />
                        <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 flex items-center gap-2">
                          {review.name}
                          {review.verified && (
                            <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                              Verified
                            </Badge>
                          )}
                        </div>
                        <div className="text-sm text-gray-500">{review.service}</div>
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
      <section ref={reviewsRef} className="bg-white py-20 px-6">
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
                  className={selectedFilter === filter.id 
                    ? "bg-[#8b2f4a] text-white hover:bg-[#6d2439]" 
                    : "border-gray-300 hover:border-[#8b2f4a]"
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
                      {/* Avatar */}
                      <Avatar className="w-12 h-12 flex-shrink-0">
                        <AvatarImage src={review.avatar} alt={review.name} />
                        <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                      </Avatar>

                      <div className="flex-1">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="font-bold text-gray-900 flex items-center gap-2">
                              {review.name}
                              {review.verified && (
                                <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                                  Verified
                                </Badge>
                              )}
                            </div>
                            <div className="text-sm text-gray-500">{review.date}</div>
                          </div>
                          <div className="flex gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>

                        {/* Service Badge */}
                        <Badge variant="outline" className="mb-3 text-[#8b2f4a] border-[#8b2f4a]">
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
                              <div key={idx} className="relative w-24 h-24 rounded-lg overflow-hidden">
                                <Image
                                  src={img}
                                  alt={`Review image ${idx + 1}`}
                                  fill
                                  className="object-cover hover:scale-110 transition-transform cursor-pointer"
                                  quality={85}
                                />
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Footer Actions */}
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <button className="flex items-center gap-1 hover:text-[#8b2f4a] transition-colors">
                            <ThumbsUp className="w-4 h-4" />
                            <span>Helpful ({review.helpful})</span>
                          </button>
                          <button className="flex items-center gap-1 hover:text-[#8b2f4a] transition-colors">
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
              className="border-2 border-[#8b2f4a] text-[#8b2f4a] hover:bg-[#8b2f4a] hover:text-white px-8 py-6 text-lg"
            >
              Load More Reviews
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="bg-[#8b2f4a] py-20 px-6">
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
            <Button
              className="bg-white text-[#8b2f4a] hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
              size="lg"
            >
              Book Appointment
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#8b2f4a] px-8 py-6 text-lg font-semibold"
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