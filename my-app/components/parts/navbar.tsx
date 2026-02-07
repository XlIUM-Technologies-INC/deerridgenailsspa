"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Image from "next/image";
import { NAV_ITEMS, BOOKING_URL, CONTACT_INFO } from "@/lib/constants";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] transition-all duration-700 pointer-events-none">
      <div className={`mx-auto transition-all duration-700 pointer-events-auto ${isScrolled ? "max-w-[1200px]" : "max-w-[1600px]"}`}>
        <div className={`relative flex items-center justify-between transition-all duration-700 px-6 py-4 ${isScrolled
          ? "bg-brand-green/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] smooth-gradient-border md:mt-4"
          : "bg-transparent py-8 smooth-gradient-border"
          } ${isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
          {/* Logo Section */}
          <Link href="/" className="relative z-[110] group flex items-center gap-3">
            {/* Removed Sparkles motion.div */}
            <h1 className={`font-italiana text-white flex flex-col leading-none transition-all duration-700 whitespace-nowrap ${isScrolled ? "text-lg md:text-xl tracking-[0.2em]" : "text-xl md:text-2xl tracking-[0.25em]"
              }`}>
              <span>DEER RIDGE NAILS SPA</span>
              <span className="text-[10px] tracking-[0.6em] text-white/40 pl-0.5 mt-2 font-inter font-light">EST. 2024</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 relative">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
                className="relative px-4 xl:px-5 py-2 text-[10px] tracking-[0.2em] font-inter text-white uppercase transition-all duration-300 hover:opacity-100 opacity-70"
              >
                <span className="relative z-10">{item.label}</span>
                {hoveredItem === item.label && (
                  <motion.div
                    layoutId="nav-hover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-white/5"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 xl:gap-6">
            <Button
              asChild
              className={`hidden md:flex rounded-none h-11 px-8 font-italiana text-[10px] tracking-[0.3em] transition-all duration-700 overflow-hidden relative group uppercase border-none ${isScrolled
                ? "bg-white text-brand-green hover:bg-white/90"
                : "bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white hover:text-brand-green"
                }`}
            >
              <Link href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                <span className="relative z-10">BOOK NOW</span>
                <motion.div className="absolute inset-0 bg-brand-sage/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
            </Button>

            <Sheet onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <button className="lg:hidden group flex flex-col gap-2 p-2 focus:outline-none cursor-pointer">
                  <div className={`h-0.5 transition-all duration-500 bg-white ${isScrolled ? "w-6" : "w-8"}`} />
                  <div className={`h-0.5 transition-all duration-500 bg-white/60 ${isScrolled ? "w-4" : "w-6"}`} />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-brand-green border-none w-full p-0 flex flex-col overflow-y-auto"
              >
                {/* Mobile Menu Background Asset */}
                <div className="absolute inset-0 opacity-15 pointer-events-none grayscale brightness-50">
                  <Image
                    src="/33315ea658fe92c84152b3dcb44ec35e.jpg"
                    fill
                    alt="Menu Background"
                    className="object-cover"
                  />
                </div>

                <div className="relative z-20 flex flex-col min-h-full px-8 md:px-12 py-20 justify-between">
                  <div className="space-y-10">
                    <p className="text-[10px] tracking-[0.5em] text-white/40 uppercase font-inter mb-8">Navigation Menu</p>
                    <nav className="flex flex-col gap-10">
                      {NAV_ITEMS.map((item, i) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                          <SheetClose asChild>
                            <Link
                              href={item.href}
                              className="text-5xl md:text-7xl font-italiana text-white hover:text-brand-sage tracking-widest transition-all hover:pl-6 block uppercase"
                            >
                              {item.label}
                            </Link>
                          </SheetClose>
                        </motion.div>
                      ))}
                    </nav>
                  </div>

                  <div className="space-y-8">
                    <SheetClose asChild>
                      <Button
                        asChild
                        className="w-full bg-white text-brand-green h-20 text-xl font-italiana tracking-[0.3em] rounded-none hover:bg-brand-sage transition-all shadow-2xl border-none"
                      >
                        <Link href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                          BOOK AN EXPERIENCE
                        </Link>
                      </Button>
                    </SheetClose>
                    <div className="flex justify-between items-end border-t border-white/10 pt-10">
                      <div>
                        <p className="text-[10px] tracking-[0.3em] text-white/40 uppercase font-inter font-light">KITCHENER SALON</p>
                        <p className="text-white/80 font-inter font-light text-sm mt-1">{CONTACT_INFO.address.street}, {CONTACT_INFO.address.province}</p>
                      </div>
                      {/* Removed Sparkles icon */}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
