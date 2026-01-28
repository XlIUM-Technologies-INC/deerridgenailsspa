import { Instagram, Facebook, Twitter } from "lucide-react";
import type { NavItem, FooterLink, SocialLink } from "@/lib/types";

/**
 * Main navigation menu items
 * Used in navbar for both desktop and mobile navigation
 */
export const NAV_ITEMS: NavItem[] = [
  { label: "SERVICES", href: "/services" },
  { label: "GALLERY", href: "/gallery" },
  { label: "REVIEWS", href: "/reviews" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

/**
 * Footer navigation links
 * Used in footer "Explore" section
 */
export const FOOTER_LINKS: FooterLink[] = [
  { label: "Our Services", href: "/services" },
  { label: "Lookbook", href: "/gallery" },
  { label: "Our Story", href: "/about" },
  {
    label: "Book Appointment",
    href: "https://www.dashbooking.com/salon/deer-ridge-nails-and-spa",
    external: true
  },
];

/**
 * Social media links
 * Source: Verified from Dash Booking and social media
 */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/deer_ridge_nails/?hl=en",
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/17StngAYek/?mibextid=wwXIfr",
    icon: Facebook,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@deerridgenailsspa",
    icon: Twitter, // Using Twitter icon as placeholder for TikTok
  },
];

/**
 * Booking URL
 * Central location for the Dash Booking system URL
 * Source: Official Dash Booking page
 */
export const BOOKING_URL = "https://www.dashbooking.com/salon/deer-ridge-nails-and-spa";
