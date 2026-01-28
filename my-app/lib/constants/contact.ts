import type { ContactInfo, BusinessHours } from "@/lib/types";


export const CONTACT_INFO: ContactInfo = {
  phone: "(519) 573-0707",
  email: "deerridge4195@gmail.com",
  address: {
    street: "4195 King Street East",
    city: "Kitchener",
    province: "ON",
    postalCode: "N2P 2E8",
    full: "4195 King Street East, Kitchener, ON N2P 2E8",
  },
};


export const FOOTER_BUSINESS_HOURS = {
  weekday: "Mon - Fri: 10:00 AM - 7:00 PM",
  saturday: "Saturday: 10:00 AM - 7:00 PM",
  sunday: "Sunday: 10:00 AM - 7:00 PM",
};


export const BUSINESS_HOURS: BusinessHours[] = [
  { day: "Monday", hours: "10:00 AM - 7:00 PM", open: true },
  { day: "Tuesday", hours: "10:00 AM - 7:00 PM", open: true },
  { day: "Wednesday", hours: "10:00 AM - 7:00 PM", open: true },
  { day: "Thursday", hours: "10:00 AM - 7:00 PM", open: true },
  { day: "Friday", hours: "10:00 AM - 7:00 PM", open: true },
  { day: "Saturday", hours: "10:00 AM - 7:00 PM", open: true },
  { day: "Sunday", hours: "10:00 AM - 7:00 PM", open: true },
];


export const PROMOTIONS = {
  newClient: "10% off for new clients or referrals",
  birthday: "10% off for birthday special - no minimum purchase required",
  hotStone: "Complimentary hot stone massage with pedicures during grand opening promotion",
  pricingNote: "Prices subject to change. As of March 1, 2025, pricing may be updated due to inflation and supply costs.",
};


export const BUSINESS_RATING = {
  score: 4.80,
  totalReviews: 96,
  verified: true,
};
