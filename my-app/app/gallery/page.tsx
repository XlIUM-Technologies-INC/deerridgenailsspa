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

// List of images found in public/gallery folder
const galleryFiles = [
  "466850059_18057393760867785_8426354153118395162_n..jpg",
  "467256616_18057393595867785_487236460051476649_n..jpg",
  "482481525_17875740120277123_604495875448994476_n..jpg",
  "482674811_17875740750277123_4238606390998533253_n..jpg",
  "482984180_17875991004277123_8034973766208090483_n..jpg",
  "484795532_17877325989277123_548219346051105134_n..jpg",
  "484814092_17877325449277123_7750020200965375782_n..jpg",
  "485038854_17877326007277123_5184264064599287790_n..jpg",
  "485066385_17877772542277123_4638023479098650462_n..jpg",
  "485508949_17878282713277123_5185625962742895079_n..jpg",
  "485993765_17878282998277123_2216464026521833043_n..jpg",
  "486281601_17878505103277123_9147273239945733185_n..jpg",
  "487121721_17879211090277123_1118713038315285324_n..jpg",
  "487406374_17879097885277123_8811739244721312015_n..jpg",
  "488257060_17879992488277123_8064714646250887811_n..jpg",
  "488513792_17879690328277123_7486831748247705718_n..jpg",
  "502480812_17889075858277123_5081321834489761685_n..jpg",
  "503617588_17889075873277123_7670406551014950943_n..jpg",
  "504366621_17890485426277123_7126516224637758133_n. (1).jpg",
  "504366621_17890485426277123_7126516224637758133_n..jpg",
  "508229803_17888146455277123_7085466682337283941_n..jpg",
  "509655832_17889207369277123_4960910859427068631_n..jpg",
  "511547812_17889442254277123_4128111316724797467_n..jpg",
  "515484347_17890485429277123_5409195796748554632_n..jpg",
  "515700879_17890601205277123_7809002096784032505_n. (1).jpg",
  "515700879_17890601205277123_7809002096784032505_n..jpg",
  "518402867_17891441412277123_3800397768310735628_n. (1).jpg",
  "518402867_17891441412277123_3800397768310735628_n..jpg",
  "518457604_17891441070277123_1840207116195773959_n. (1).jpg",
  "518466438_17891441262277123_541560738538280915_n..jpg",
  "520485980_17892429210277123_33849040778473402_n. (1).jpg",
  "520485980_17892429210277123_33849040778473402_n..jpg",
  "521447414_17892429186277123_5774797332101348723_n. (1).jpg",
  "524490413_17893342557277123_7271812159889482240_n..jpg",
  "524932652_17893342632277123_73801161369037772_n..jpg",
  "525180071_17893342569277123_5281725398178342134_n..jpg",
  "550986519_17899809687277123_4484366555675953511_n..jpg",
  "553443504_17900660961277123_3487058956942358331_n. (1).jpg",
  "553443504_17900660961277123_3487058956942358331_n..jpg",
  "563398902_17902442628277123_831713188093586699_n..jpg",
  "571499027_17903596761277123_6180070309411121641_n..jpg",
  "582409600_17906319255277123_903443494512963298_n..jpg",
  "610707995_17911667940277123_2424532781049660968_n..jpg",
];

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
  }

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
              <Image
                src={`/gallery/${filename}`}
                alt={`Gallery Image ${startIndex + index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
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
              className="relative max-h-[90vh] w-full max-w-5xl aspect-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[80vh]">
                <Image
                  src={`/${selectedImage}`}
                  alt="Gallery View"
                  fill
                  className="object-contain"
                  quality={100}
                />
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
