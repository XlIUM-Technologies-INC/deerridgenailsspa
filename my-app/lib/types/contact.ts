/**
 * Contact and business info type definitions
 */

export interface ContactInfo {
  phone: string;
  email?: string;
  address: {
    street: string;
    city: string;
    province: string;
    postalCode: string;
    full: string;
  };
}

export interface BusinessHours {
  day: string;
  hours: string;
  open: boolean;
  promo?: boolean;
}

export interface Feature {
  icon: any; // Lucide icon component
  title: string;
  description: string;
}
