import { Instagram, Facebook } from "lucide-react";
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
    href: "https://www.instagram.com/deerridgenailsspa?igsh=cXZybWo5aWh5bjUy&utm_source=qr",
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/deerridgenailsspa?mibextid=wwXIfr&rdid=cVn6LiBjRUjyY3XS&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1bYrgQq6vZ%2F%3Fmibextid%3DwwXIfr%26ref%3D1#",
    icon: Facebook,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@deerridgenailsspa",
    icon: "TikTok" as any, // We will handle this in the Footer component
  },
];

/**
 * Booking URL
 * Central location for the Dash Booking system URL
 * Source: Official Dash Booking page
 */
export const BOOKING_URL = "https://www.dashbooking.com/salon/deer-ridge-nails-and-spa";
