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

// List of images found in public folder
const galleryFiles = [
  "363760529_18008067190867785_6322537394649714655_n.jpg",
  "366688913_18008067169867785_4562004202908627054_n.jpg",
  "367679259_18008539366867785_4716558780392524522_n.jpg",
  "368151428_18008884765867785_4806903141760562174_n.jpg",
  "368206462_18008884774867785_1668657091598782031_n.jpg",
  "375459854_18011645065867785_1644597701547125449_n.jpg",
  "434992809_18034953046867785_4534326392542744034_n.jpg",
  "435012687_18034953061867785_8486869466282521895_n.jpg",
  "435126404_18034953052867785_6987261395090016248_n.jpg",
  "466786095_18057392815867785_6103533066389598665_n.jpg",
  "466836349_18057393733867785_3027911172887877350_n.jpg",
  "466891912_18057393811867785_4941190805721564248_n.jpg",
  "466900047_18057394642867785_601373246350179658_n.jpg",
  "466969770_18057392449867785_2155404678587419419_n.jpg",
  "466972425_18057393586867785_5709059318694293699_n.jpg",
  "466974033_18057393967867785_1994136894267509756_n.jpg",
  "466976704_18057392131867785_8730887579058261969_n.jpg",
  "466977889_18057393646867785_3548476978440714016_n.jpg",
  "466980093_18057392827867785_1655188658371323277_n.jpg",
  "466986970_18057393565867785_8094297659461004980_n.jpg",
  "466989922_18057394006867785_6896155988782801239_n.jpg",
  "466992879_18057393826867785_1002312029320489223_n.jpg",
  "466993434_18057393913867785_281426255929084428_n.jpg",
  "467007079_18057393484867785_3683537530460305422_n.jpg",
  "467008425_18057393898867785_5952291892641651009_n.jpg",
  "467008841_18057394849867785_2792478462567055390_n.jpg",
  "467117608_18057394054867785_2931082966158837162_n.jpg",
  "467118321_18057394813867785_8988571380331620289_n.jpg",
  "467118949_18057392281867785_3092116512666638425_n.jpg",
  "467119306_18057394867867785_7821581844295679066_n.jpg",
  "467148841_18057393970867785_4775207303434343089_n.jpg",
  "467176838_18057393835867785_8439958454526103444_n.jpg",
  "467212298_18057392230867785_5895265332255004869_n.jpg",
  "467228006_18057393727867785_3436430414751729846_n.jpg",
  "467230057_18057392386867785_5861514994490925770_n.jpg",
  "467244436_18057392140867785_5644691824339973614_n.jpg",
  "467256616_18057393595867785_487236460051476649_n.jpg",
  "467256996_18057394531867785_3740794291647720130_n.jpg",
  "467301510_18057393988867785_130373221137337181_n.jpg",
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
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-24 px-6 bg-brand-green"
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
            className="text-5xl md:text-7xl lg:text-8xl font-italiana text-white mb-8 leading-[0.9] tracking-tight"
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
      <section id="gallery-grid" className="py-20 px-6 max-w-[1600px] mx-auto">
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
                src={`/${filename}`}
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
