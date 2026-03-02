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
  Grid3x3,
  Rows,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// List of assets found in public/gallery folder
const galleryFiles = [
  "C5F3801D-F311-4957-8B12-80A3D7014B4C.JPG",
  "CD8424C5-73A9-48CF-896F-73189EB8CCB5.mp4",
  "E6A435C8-54C6-4FC3-A416-475ABB957911.mp4",
  "IMG_0117.JPG",
  "IMG_0148.JPG",
  "IMG_0149.JPG",
  "IMG_0181.JPG",
  "IMG_0184.JPG",
  "IMG_0200.JPG",
  "IMG_0202.JPG",
  "IMG_0296.jpg",
  "IMG_0397.jpg",
  "IMG_0625.jpeg",
  "IMG_0636.mp4",
  "IMG_0675.jpg",
  "IMG_0938.jpg",
  "IMG_0950.jpg",
  "IMG_1597.jpg",
  "IMG_1624.jpg",
  "IMG_1991.jpg",
  "IMG_2001.jpg",
  "IMG_2371.jpg",
  "IMG_2427.jpg",
  "IMG_2445.jpg",
  "IMG_2596.jpg",
  "IMG_2603.jpg",
  "IMG_5906.mp4",
  "IMG_9561.jpg",
  "att.EapNnRyVgKINH0DxYwvLUvoZdt52x49jORu30RK6z8I.JPG",
  "att.MmoTkC-kWQ0lPivHSgEOHt4f-JAqZoz7XCzQtSBHJz4.mp4",
  "att.SVrisQt3NDIJBi5NUc3XFXQj0YyZH9TtCiglXIjukbw.JPG",
  "att.riAPgXXAJfXqZgFo8Tlk8ef1mSZrgi0WYnanxQrKToA.JPG",
  "cd827bdd87c04c01bd9a2d8353ee63ca.mp4",
  "copy_0D1ABDD8-34FC-4EF1-9CA5-EAE7013FC4A3.mp4",
];

const isVideo = (filename: string) => filename.toLowerCase().endsWith(".mp4");

export default function GalleryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const totalPages = Math.ceil(galleryFiles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentImages = galleryFiles.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const handlePageChange = (e: React.MouseEvent, page: number) => {
    e.preventDefault();
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      const gridElement = document.getElementById("gallery-grid");
      if (gridElement) {
        gridElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Use scroll hook for hero parallax
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden py-16 md:py-24 px-6 bg-brand-green"
      >
        <motion.div
          className="absolute inset-0 opacity-0"
          style={{ y }}
        ></motion.div>

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
            className="text-white/60 mb-6 uppercase tracking-[0.4em] text-[10px] font-inter font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Gallery
          </motion.p>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-italiana text-white mb-8 leading-[0.9] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            OUR WORK
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto font-inter font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A curated collection of our latest designs, artistic transformations, and moments of serenity.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section id="gallery-grid" className="py-12 md:py-20 px-6 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {currentImages.map((filename, index) => (
            <motion.div
              key={startIndex + index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative group aspect-square cursor-pointer overflow-hidden bg-gray-100 rounded-sm"
              onClick={() => setSelectedImage(filename)}
            >
              {isVideo(filename) ? (
                <div className="relative w-full h-full">
                  <video
                    src={`/gallery/${filename}`}
                    className="object-cover w-full h-full"
                    muted
                    loop
                    playsInline
                    onMouseOver={(e) => (e.target as HTMLVideoElement).play()}
                    onMouseOut={(e) => (e.target as HTMLVideoElement).pause()}
                  />
                  <div className="absolute top-3 right-3 z-10 bg-black/40 p-1.5 rounded-full backdrop-blur-md">
                   <div className="w-4 h-4 text-white fill-white">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                   </div>
                  </div>
                </div>
              ) : (
                <Image
                  src={`/gallery/${filename}`}
                  alt={`Gallery Image ${startIndex + index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white w-8 h-8 opacity-80" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => handlePageChange(e, currentPage - 1)}
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href="#"
                      isActive={currentPage === page}
                      onClick={(e) => handlePageChange(e, page)}
                      className="cursor-pointer"
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ),
              )}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => handlePageChange(e, currentPage + 1)}
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-h-[90vh] w-full max-w-5xl aspect-auto flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[80vh] flex items-center justify-center">
                {isVideo(selectedImage) ? (
                  <video
                    src={`/gallery/${selectedImage}`}
                    controls
                    autoPlay
                    className="max-h-full max-w-full"
                  />
                ) : (
                  <Image
                    src={`/gallery/${selectedImage}`}
                    alt="Gallery View"
                    fill
                    className="object-contain"
                    quality={100}
                  />
                )}
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:bg-white/20 rounded-none"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
