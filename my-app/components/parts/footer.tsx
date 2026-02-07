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
import {
  CONTACT_INFO,
  FOOTER_BUSINESS_HOURS,
  EARLY_APPOINTMENT_NOTE,
  SOCIAL_LINKS,
  FOOTER_LINKS,
  BOOKING_URL
} from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-green text-white pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <h2 className="text-3xl font-italiana tracking-widest text-[#ffffff]">
              DEER RIDGE NAILS SPA
            </h2>
            <p className="text-brand-sage font-inter font-light leading-relaxed">
              Experience the art of relaxation and beauty. Our premium salon
              offers dedicated care for your nails and wellness.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-sage transition-colors"
                >
                  {link.name === "TikTok" ? (
                    <TikTokIcon className="w-5 h-5" />
                  ) : (
                    <link.icon className="w-5 h-5" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="space-y-6">
            <h3 className="text-lg font-italiana tracking-widest uppercase">
              Explore
            </h3>
            <ul className="space-y-4 font-inter font-light text-brand-sage/90">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-italiana tracking-widest uppercase">
              Contact Us
            </h3>
            <ul className="space-y-4 font-inter font-light text-brand-sage/90">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>
                  {CONTACT_INFO.address.street}, {CONTACT_INFO.address.city},
                  <br />
                  {CONTACT_INFO.address.province} {CONTACT_INFO.address.postalCode}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <p>{FOOTER_BUSINESS_HOURS.weekday}</p>
                  <p>{FOOTER_BUSINESS_HOURS.saturday}</p>
                  <p>{FOOTER_BUSINESS_HOURS.sunday}</p>
                  <p className="mt-2 text-[10px] leading-relaxed italic text-white/40">{EARLY_APPOINTMENT_NOTE}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-sage font-inter font-light tracking-wider uppercase">
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
