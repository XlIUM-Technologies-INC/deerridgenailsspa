import { Heart, Scissors, Sparkles, Star } from "lucide-react";
import type {
  Service,
  ServiceCategory,
  ServiceSummary,
  ProcessStep,
  Addon
} from "@/lib/types";

/**
 * Service categories for filtering
 */
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  { id: "all", label: "All Services" },
  { id: "manicure", label: "Manicure" },
  { id: "pedicure", label: "Pedicure" },
  { id: "extensions", label: "Nail Extensions" },
  { id: "spa", label: "Spa & Scalp" },
  { id: "beauty", label: "Lashes & Waxing" },
];

/**
 * Complete list of all services
 * Used in services page with full details
 */
export const SERVICES: Service[] = [
  // Extensions
  {
    category: "extensions",
    name: "Bio Gel Full Set",
    description: "BIO GEL is a liquid gel that requires UV lamp curing. It can be used for overlays on natural nails or with artificial tips for added length. Feels light and natural, requires refills every 2-3 weeks.",
    duration: "60 min",
    price: "$65",
    image: "/artificiall-nails.jpg",
    features: ["Natural look & feel", "Flexible & breathable", "UV lamp cured", "Refills every 2-3 weeks"],
    popular: true,
  },
  {
    category: "extensions",
    name: "UV Gel Full Set",
    description: "UV GEL is a type of clear or colored powder mixed with monomer applied to natural nails or tips for extensions. Slightly heavier feel than gel, can be refilled every 2-3 weeks.",
    duration: "60 min",
    price: "$55",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600",
    features: ["Clear or colored", "Natural nails or tips", "Durable", "Refills every 2-3 weeks"],
    popular: false,
  },
  {
    category: "extensions",
    name: "Solar Gel Full Set",
    description: "SOLAR is a lightweight powder used for creating nail enhancements. Mixed with monomer and can be applied to natural nails or used with artificial tips. Refills recommended every 2-3 weeks.",
    duration: "60 min",
    price: "$65",
    image: "/nails.jpg",
    features: ["Lightweight powder", "Natural or with tips", "Durable", "Refills every 2-3 weeks"],
    popular: true,
  },
  {
    category: "extensions",
    name: "Acrylic Full Set",
    description: "Our traditional acrylic extensions provide a strong, hard protective layer, ideal for creating length and a perfectly sculpted shape for any nail bed.",
    duration: "60 min",
    price: "$55",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600",
    features: ["Custom length sculpting", "Hard & protective", "Versatile shaping", "Classic durability"],
    popular: false,
  },
  {
    category: "extensions",
    name: "Bio Gel / Solar Gel Refill",
    description: "Maintain the beauty and integrity of your enhancements. We fill in the growth gap, rebalance the structure, and refresh the design for a flawless look.",
    duration: "60 min",
    price: "$57",
    image: "https://images.unsplash.com/photo-1599206676335-193c82b13c9e?w=600",
    features: ["Restore structural balance", "Seamless fill", "Refresh shine", "Extend wear"],
    popular: false,
  },
  {
    category: "extensions",
    name: "UV Gel / Acrylic Refill",
    description: "Keep your nails looking pristine with our maintenance refill. We smooth out the transition area and reshape the free edge for continuous perfection.",
    duration: "60 min",
    price: "$50",
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=600",
    features: ["Correct lifting", "Reshape length", "Fill growth", "Polished finish"],
    popular: false,
  },
  // Manicure
  {
    category: "manicure",
    name: "Classic Manicure",
    description: "Treat your hands to essential care. Includes nail shaping, cuticle refinement, and a relaxing hand massage, finished with your choice of regular polish.",
    duration: "30 min",
    price: "$25+",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600",
    features: ["Nail shaping & buffing", "Cuticle refinement", "Hydrating massage", "Precision polish"],
    popular: false,
  },
  {
    category: "manicure",
    name: "Shellac/Gel Manicure",
    description: "Enjoy zero dry time and a mirror-like shine. Our Shellac/Gel polish cures instantly under LED light for 2+ weeks of chip-free, smudge-proof wear.",
    duration: "45 min",
    price: "$45+",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600",
    features: ["Zero dry time", "Mirror shine", "14+ day wear", "Chip resistant"],
    popular: true,
  },
  // Pedicure
  {
    category: "pedicure",
    name: "Classic Pedicure",
    description: "Revitalize tired feet with a warm soak, nail trimming, shaping, and cuticle care. Finished with a light massage and polish for a refreshed feeling.",
    duration: "45 min",
    price: "$35+",
    image: "/pundicure.jpg",
    features: ["Relaxing foot soak", "Nail & cuticle care", "Light massage", "Perfect polish"],
    popular: false,
  },
  {
    category: "pedicure",
    name: "Spa Pedicure",
    description: "Indulge in deep relaxation. This deluxe treatment adds an exfoliating scrub, callus removal, a hydrating mask, and a soothing hot stone massage to weary soles.",
    duration: "60 min",
    price: "$50+",
    image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=600",
    features: ["Exfoliating scrub", "Callus smoothing", "Hydrating mask", "Including hot stone massage"],
    popular: true,
  },
  // Spa & Scalp
  {
    category: "spa",
    name: "Scalp Therapy Spa",
    description: "Relieve stress and improve scalp health. This treatment stimulates circulation, deeply cleanses follicles, and promotes relaxation for a rejuvenated mind and body.",
    duration: "60 min",
    price: "$85+",
    image: "/Scalp Therapy Spa .jpg",
    features: ["Stimulates circulation", "Deep cleansing", "Stress relief", "Promotes hair health"],
    popular: true,
  },
  {
    category: "spa",
    name: "Kids Service (Under 12)",
    description: "A gentle and fun pampering session for the little ones. We use non-toxic products and offer safe, simple nail care designed for children.",
    duration: "30 min",
    price: "$20+",
    image: "/kids.jpg",
    features: ["Gentle touch", "Non-toxic products", "Fun colors", "Age-appropriate care"],
    popular: false,
  },
  // Beauty (Lashes/Waxing)
  {
    category: "beauty",
    name: "Lashes & Brows",
    description: "Awaken your eyes with our lash and brow services. From lifting to tinting, we enhance your natural features for a low-maintenance, polished look.",
    duration: "45 min",
    price: "$45+",
    image: "/lash-lifting.jpg",
    features: ["Lash Lift curl", "Tinting definition", "Brow shaping", "Natural enhancement"],
    popular: false,
  },
  {
    category: "beauty",
    name: "Waxing Services",
    description: "Experience silky smooth skin with our professional waxing. We use gentle wax to effectively remove hair from the root for long-lasting smoothness.",
    duration: "Var",
    price: "Var",
    image: "/Waxing.jpg",
    features: ["Smooth skin", "Long-lasting results", "Facial waxing", "Body waxing"],
    popular: false,
  },
  {
    category: "beauty",
    name: "Facials",
    description: "Refresh your complexion with our tailored facial treatments. Deep cleansing and hydration to reveal your best skin.",
    duration: "Var",
    price: "Var",
    image: "/Facials.jpg",
    features: ["Deep cleansing", "Hydration boost", "Relaxation", "Glowing skin"],
    popular: false,
  }
];

/**
 * Service summaries for homepage
 * Simplified list for overview section
 */
export const SERVICE_SUMMARIES: ServiceSummary[] = [
  {
    title: "Manicures",
    description: "Precision shaping, cuticle care, and high-performance polishes that redefine elegance and hand health.",
    image: "/nails.jpg",
    href: "/services"
  },
  {
    title: "Pedicures",
    description: "A restorative sanctuary for your feet, featuring revitalizing soaks, exfoliating treatments, and soothing massage.",
    image: "/pundicure.jpg",
    href: "/services"
  },
  {
    title: "Extensions",
    description: "Artfully sculpted length and durability using our premium Bio Gel, UV Gel, and Solar systems for a flawless finish.",
    image: "/artificiall-nails.jpg",
    href: "/services"
  },
  {
    title: "Lashes & Brows",
    description: "Expert lifting, tinting, and shaping designed to enhance your natural features with effortless everyday sophistication.",
    image: "/lash-lifting.jpg",
    href: "/services"
  },
  {
    title: "Waxing",
    description: "Gentle, professional hair removal for long-lasting smoothness, leaving your skin perfectly refined and pampered.",
    image: "/Waxing.jpg",
    href: "/services"
  },
];

/**
 * Service process steps
 * Describes the service workflow
 */
export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Consultation",
    description: "We discuss your preferences, nail health, and desired style",
    icon: Heart,
  },
  {
    step: "02",
    title: "Preparation",
    description: "Thorough cleaning, shaping, and cuticle care",
    icon: Scissors,
  },
  {
    step: "03",
    title: "Treatment",
    description: "Application of chosen service with premium products",
    icon: Sparkles,
  },
  {
    step: "04",
    title: "Finishing",
    description: "Final touches and care instructions for lasting results",
    icon: Star,
  },
];

/**
 * Service add-ons and enhancements
 */
export const SERVICE_ADDONS: Addon[] = [
  { name: "Nail Strengthening Treatment", price: "$10" },
  { name: "Paraffin Wax Treatment", price: "$15" },
  { name: "Chrome/Mirror Finish", price: "$10" },
  { name: "Nail Art", price: "Starting at $5" },
  { name: "Gem Application", price: "$3-$10" },
  { name: "French Tips", price: "$10" },
  { name: "Nail Repair", price: "$5" },
];

/**
 * Service list for contact form
 * Simplified list of service types
 */
export const SERVICE_TYPES = [
  "Manicure",
  "Pedicure",
  "Nail Art",
  "Gel Extensions",
  "Acrylic Extensions",
  "Spa Treatment",
  "Other",
];
