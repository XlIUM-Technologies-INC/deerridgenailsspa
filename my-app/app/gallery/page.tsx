"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import {
  X,
  Heart,
  Share2,
  Download,
  ZoomIn,
  Filter,
  Grid3x3,
  Rows,
} from "lucide-react";
// @ts-ignore
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function GalleryPage() {
  const heroRef = useRef(null);
  const galleryRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const galleryInView = useInView(galleryRef, { once: true, amount: 0.1 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'masonry'

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const categories = [
    { id: "all", label: "All Work", count: 24 },
    { id: "manicure", label: "Manicure", count: 8 },
    { id: "pedicure", label: "Pedicure", count: 6 },
    { id: "nail-art", label: "Nail Art", count: 7 },
    { id: "extensions", label: "Extensions", count: 3 },
  ];

  const galleryImages = [
    {
      id: 1,
      category: "manicure",
      image:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800",
      title: "Classic French Manicure",
      likes: 234,
      featured: true,
    },
    {
      id: 2,
      category: "nail-art",
      image:
        "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800",
      title: "Elegant Nail Art Design",
      likes: 456,
      featured: true,
    },
    {
      id: 3,
      category: "pedicure",
      image:
        "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800",
      title: "Luxury Spa Pedicure",
      likes: 189,
      featured: false,
    },
    {
      id: 4,
      category: "extensions",
      image:
        "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800",
      title: "Gel Nail Extensions",
      likes: 567,
      featured: true,
    },
    {
      id: 5,
      category: "nail-art",
      image:
        "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=800",
      title: "Geometric Nail Art",
      likes: 345,
      featured: false,
    },
    {
      id: 6,
      category: "manicure",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800",
      title: "Chrome Finish Manicure",
      likes: 423,
      featured: true,
    },
    {
      id: 7,
      category: "nail-art",
      image:
        "https://images.unsplash.com/photo-1599206676335-193c82b13c9e?w=800",
      title: "Floral Nail Design",
      likes: 298,
      featured: false,
    },
    {
      id: 8,
      category: "pedicure",
      image:
        "https://images.unsplash.com/photo-1583001308411-3e1972e0c18a?w=800",
      title: "Summer Pedicure Style",
      likes: 512,
      featured: true,
    },
    {
      id: 9,
      category: "manicure",
      image:
        "https://images.unsplash.com/photo-1606462322168-82d71064e94b?w=800",
      title: "Matte Nude Manicure",
      likes: 267,
      featured: false,
    },
    {
      id: 10,
      category: "nail-art",
      image:
        "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=800",
      title: "Ombre Nail Design",
      likes: 445,
      featured: true,
    },
    {
      id: 11,
      category: "extensions",
      image:
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800",
      title: "Acrylic Extensions",
      likes: 389,
      featured: false,
    },
    {
      id: 12,
      category: "manicure",
      image:
        "https://images.unsplash.com/photo-1612831200102-cd38753908bf?w=800",
      title: "Glossy Red Nails",
      likes: 678,
      featured: true,
    },
    {
      id: 13,
      category: "nail-art",
      image: "https://images.unsplash.com/photo-1542992015-4a0b729b1385?w=800",
      title: "Glitter Accent Nails",
      likes: 334,
      featured: false,
    },
    {
      id: 14,
      category: "pedicure",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800",
      title: "Classic Pedicure",
      likes: 223,
      featured: false,
    },
    {
      id: 15,
      category: "manicure",
      image:
        "https://images.unsplash.com/photo-1604902396830-aca29e19b067?w=800",
      title: "Pastel Manicure",
      likes: 456,
      featured: true,
    },
    {
      id: 16,
      category: "nail-art",
      image:
        "https://images.unsplash.com/photo-1598969901534-4f5d4c982f9e?w=800",
      title: "Abstract Nail Art",
      likes: 389,
      featured: false,
    },
    {
      id: 17,
      category: "extensions",
      image:
        "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800",
      title: "Long Gel Extensions",
      likes: 512,
      featured: true,
    },
    {
      id: 18,
      category: "pedicure",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800",
      title: "Spa Pedicure Treatment",
      likes: 267,
      featured: false,
    },
    {
      id: 19,
      category: "manicure",
      image:
        "https://images.unsplash.com/photo-1522337094846-8a818192de1f?w=800",
      title: "Elegant White Nails",
      likes: 445,
      featured: true,
    },
    {
      id: 20,
      category: "nail-art",
      image:
        "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=800",
      title: "Marble Effect Nails",
      likes: 523,
      featured: true,
    },
    {
      id: 21,
      category: "pedicure",
      image:
        "https://images.unsplash.com/photo-1591160690555-5debfba289f0?w=800",
      title: "Luxury Foot Spa",
      likes: 298,
      featured: false,
    },
    {
      id: 22,
      category: "manicure",
      image:
        "https://images.unsplash.com/photo-1583001308594-2d2111ff937b?w=800",
      title: "Pink Chrome Manicure",
      likes: 434,
      featured: true,
    },
    {
      id: 23,
      category: "nail-art",
      image:
        "https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?w=800",
      title: "Crystal Nail Design",
      likes: 612,
      featured: true,
    },
    {
      id: 24,
      category: "manicure",
      image:
        "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800",
      title: "Natural Look Manicure",
      likes: 356,
      featured: false,
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="bg-[#ffffff]">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-20 px-6"
      >
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{ y, opacity }}
        >
          <Image
            src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200"
            alt="Gallery background"
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
            className="text-brand-green font-semibold mb-4 uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Our Gallery
          </motion.p>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Best Work
          </motion.h1>
          <motion.p
            className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore our portfolio of stunning nail designs and transformations
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className="bg-brand-yellow py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Filter Bar */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  variant={selectedCategory === cat.id ? "default" : "outline"}
                  className={
                    selectedCategory === cat.id
                      ? "bg-brand-green text-white hover:bg-brand-green"
                      : "border-[#d0d0d0] hover:border-brand-green"
                  }
                >
                  {cat.label}
                  <Badge variant="secondary" className="ml-2 bg-white/20">
                    {cat.count}
                  </Badge>
                </Button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "bg-brand-green" : ""}
              >
                <Grid3x3 className="w-5 h-5" />
              </Button>
              <Button
                variant={viewMode === "masonry" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("masonry")}
                className={viewMode === "masonry" ? "bg-brand-green" : ""}
              >
                <Rows className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
            }
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className={
                    viewMode === "grid"
                      ? "relative group cursor-pointer"
                      : "relative group cursor-pointer break-inside-avoid mb-6"
                  }
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    {item.featured && (
                      <Badge className="absolute top-4 left-4 z-10 bg-brand-green hover:bg-brand-green">
                        Featured
                      </Badge>
                    )}

                    <div
                      className={
                        viewMode === "grid" ? "aspect-square" : "aspect-[3/4]"
                      }
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        quality={85}
                      />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h3 className="text-white font-bold text-lg mb-2">
                        {item.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-white">
                          <Heart className="w-5 h-5" />
                          <span className="text-sm">{item.likes}</span>
                        </div>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-none"
                        >
                          <ZoomIn className="w-4 h-4 mr-1" />
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </Button>

              {/* Image */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>

              {/* Info Bar */}
              <div className="bg-white p-6 rounded-b-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedImage.title}
                    </h3>
                    <div className="flex items-center gap-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Heart className="w-5 h-5 text-brand-green" />
                        <span>{selectedImage.likes} likes</span>
                      </div>
                      <Badge>{selectedImage.category}</Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Share2 className="w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Download className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section ref={ctaRef} className="bg-brand-green py-20 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Want Nails Like These?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 opacity-90"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Book your appointment now and let our expert technicians create your
            perfect look
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/contact">
              <Button
                className="bg-white text-brand-green hover:bg-[#e0e0e0] px-8 py-6 text-lg font-semibold"
                size="lg"
              >
                Book Your Appointment
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
