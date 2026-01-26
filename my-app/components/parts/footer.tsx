"use client";

import React from "react";
import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NewsletterInput } from "@/components/ui/newsletter-input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-green text-white pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <h2 className="text-3xl font-italiana tracking-widest">
              DEER RIDGE
            </h2>
            <p className="text-brand-sage font-old-standard leading-relaxed">
              Experience the art of relaxation and beauty. Our premium salon
              offers dedicated care for your nails and wellness.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/deer_ridge_nails/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-sage transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.facebook.com/share/17StngAYek/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-sage transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.tiktok.com/@deerridgenailsspa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-sage transition-colors"
              >
                <TikTokIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="space-y-6">
            <h3 className="text-lg font-italiana tracking-widest uppercase">
              Explore
            </h3>
            <ul className="space-y-4 font-old-standard text-brand-sage/90">
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-white transition-colors"
                >
                  Lookbook
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.dashbooking.com/salon/deer-ridge-nails-and-spa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-italiana tracking-widest uppercase">
              Contact Us
            </h3>
            <ul className="space-y-4 font-old-standard text-brand-sage/90">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>
                  4195 King St E, Kitchener,
                  <br />
                  ON N2P 2E8
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>(519) 650-0770</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <p>Mon - Fri: 10:00 AM - 7:00 PM</p>
                  <p>Saturday: 10:00 AM - 6:00 PM</p>
                  <p>Sunday: 10:00 AM - 5:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-italiana tracking-widest uppercase">
              Newsletter
            </h3>
            <p className="font-old-standard text-brand-sage/90">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <div className="flex gap-2">
              <NewsletterInput
                type="email"
                placeholder="Email Address"
                className="bg-transparent border-b border-white/30 border-0 border-b-2 rounded-none px-0 focus-visible:ring-0 focus-visible:border-white text-white font-old-standard placeholder:text-brand-sage/50"
              />
              <Button
                variant="ghost"
                className="hover:bg-transparent hover:text-brand-sage p-0 font-italiana uppercase text-sm tracking-widest text-white"
              >
                SEND
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-sage font-old-standard tracking-wider uppercase">
          <p>&copy; {currentYear} DEER RIDGE NAILS SPA.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
