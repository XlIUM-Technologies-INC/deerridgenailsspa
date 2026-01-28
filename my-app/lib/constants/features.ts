import { Award, Clock, Shield, Sparkles } from "lucide-react";
import type { Feature } from "@/lib/types";

/**
 * Company benefits and features
 * Used in "Why Choose Us" section
 * Source: Based on Dash Booking description and business values
 */
export const FEATURES: Feature[] = [
  {
    icon: Award,
    title: "Expert Technicians",
    description: "Certified professionals dedicated to perfection.",
  },
  {
    icon: Sparkles,
    title: "Premium Products",
    description: "We use only high-quality, salon-grade products.",
  },
  {
    icon: Shield,
    title: "Hygiene First",
    description: "Hospital-grade sterilization for your safety.",
  },
  {
    icon: Clock,
    title: "Relaxing Atmosphere",
    description: "A serene environment to unwind and recharge.",
  },
];
