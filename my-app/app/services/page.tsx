"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Star,
  Heart,
  Palette,
  Scissors,
  Check,
  ArrowRight,
  Clock,
  DollarSign,
  Zap,
} from "lucide-react";
// @ts-ignore
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function ServicesPage() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const pricingRef = useRef(null);
  const addonsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const processInView = useInView(processRef, { once: true, amount: 0.3 });
  const pricingInView = useInView(pricingRef, { once: true, amount: 0.2 });
  const addonsInView = useInView(addonsRef, { once: true, amount: 0.2 });

  const [selectedCategory, setSelectedCategory] = useState("all");

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const categories = [
    { id: "all", label: "All Services" },
    { id: "manicure", label: "Manicure" },
    { id: "pedicure", label: "Pedicure" },
    { id: "extensions", label: "Nail Extensions" },
    { id: "spa", label: "Spa & Scalp" },
    { id: "beauty", label: "Lashes & Waxing" },
  ];

  const services = [
    // Extensions
    {
      category: "extensions",
      name: "Bio Gel Full Set",
      description:
        "Enhance your natural nails with our flexible, breathable Bio Gel extensions. Promotes healthy nail growth while providing a durable, crystal-clear finish that looks and feels completely natural.",
      duration: "60 min",
      price: "$67",
      image: "/artificiall-nails.jpg",
      features: [
        "Natural look & feel",
        "Flexible & breathable",
        "Promotes nail health",
        "Non-yellowing formula",
      ],
      popular: true,
    },
    {
      category: "extensions",
      name: "UV Gel Full Set",
      description:
        "Achieve the perfect length and shape with our robust UV Gel extensions. Cured for instant hardness, these offer a glossy, chip-resistant barrier that protects your natural nails.",
      duration: "60 min",
      price: "$57",
      image:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600",
      features: [
        "Instant hardening",
        "High-gloss finish",
        "Protective barrier",
        "Durable wear",
      ],
      popular: false,
    },
    {
      category: "extensions",
      name: "Solar Nails Full Set",
      description:
        "Experience superior strength and lasting shine. This premium alternative maintains clarity and resists yellowing, perfect for those seeking the classic 'Pink & White' look.",
      duration: "60 min",
      price: "$67",
      image: "/nails.jpg",
      features: [
        "Superior strength",
        "Resists yellowing",
        "Retains shine",
        "Pink & White option",
      ],
      popular: true,
    },
    {
      category: "extensions",
      name: "Acrylic Full Set",
      description:
        "Our traditional acrylic extensions provide a strong, hard protective layer, ideal for creating length and a perfectly sculpted shape for any nail bed.",
      duration: "60 min",
      price: "$55",
      image:
        "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600",
      features: [
        "Custom length sculpting",
        "Hard & protective",
        "Versatile shaping",
        "Classic durability",
      ],
      popular: false,
    },

    // Low maintenance Refills (Generic image usage to avoid repetition)
    {
      category: "extensions",
      name: "Bio Gel / Solar Gel Refill",
      description:
        "Maintain the beauty and integrity of your enhancements. We fill in the growth gap, rebalance the structure, and refresh the design for a flawless look.",
      duration: "60 min",
      price: "$57",
      image:
        "https://images.unsplash.com/photo-1599206676335-193c82b13c9e?w=600",
      features: [
        "Restore structural balance",
        "Seamless fill",
        "Refresh shine",
        "Extend wear",
      ],
      popular: false,
    },
    {
      category: "extensions",
      name: "UV Gel / Acrylic Refill",
      description:
        "Keep your nails looking pristine with our maintenance refill. We smooth out the transition area and reshape the free edge for continuous perfection.",
      duration: "60 min",
      price: "$50",
      image:
        "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=600",
      features: [
        "Correct lifting",
        "Reshape length",
        "Fill growth",
        "Polished finish",
      ],
      popular: false,
    },

    // Manicure
    {
      category: "manicure",
      name: "Classic Manicure",
      description:
        "Treat your hands to essential care. Includes nail shaping, cuticle refinement, and a relaxing hand massage, finished with your choice of regular polish.",
      duration: "30 min",
      price: "$25+",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600",
      features: [
        "Nail shaping & buffing",
        "Cuticle refinement",
        "Hydrating massage",
        "Precision polish",
      ],
      popular: false,
    },
    {
      category: "manicure",
      name: "Shellac/Gel Manicure",
      description:
        "Enjoy zero dry time and a mirror-like shine. Our Shellac/Gel polish cures instantly under LED light for 2+ weeks of chip-free, smudge-proof wear.",
      duration: "45 min",
      price: "$45+",
      image:
        "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600",
      features: [
        "Zero dry time",
        "Mirror shine",
        "14+ day wear",
        "Chip resistant",
      ],
      popular: true,
    },

    // Pedicure
    {
      category: "pedicure",
      name: "Classic Pedicure",
      description:
        "Revitalize tired feet with a warm soak, nail trimming, shaping, and cuticle care. Finished with a light massage and polish for a refreshed feeling.",
      duration: "45 min",
      price: "$35+",
      image: "/pundicure.jpg",
      features: [
        "Relaxing foot soak",
        "Nail & cuticle care",
        "Light massage",
        "Perfect polish",
      ],
      popular: false,
    },
    {
      category: "pedicure",
      name: "Spa Pedicure",
      description:
        "Indulge in deep relaxation. This deluxe treatment adds an exfoliating scrub, callus removal, a hydrating mask, and an extended massage to soothe weary soles.",
      duration: "60 min",
      price: "$50+",
      image:
        "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=600",
      features: [
        "Exfoliating scrub",
        "Callus smoothing",
        "Hydrating mask",
        "Extended massage",
      ],
      popular: true,
    },

    // Spa & Scalp
    {
      category: "spa",
      name: "Scalp Therapy Spa",
      description:
        "Relieve stress and improve scalp health. This treatment stimulates circulation, deeply cleanses follicles, and promotes relaxation for a rejuvenated mind and body.",
      duration: "60 min",
      price: "$85+",
      image: "/Scalp Therapy Spa .jpg",
      features: [
        "Stimulates circulation",
        "Deep cleansing",
        "Stress relief",
        "Promotes hair health",
      ],
      popular: true,
    },
    {
      category: "spa",
      name: "Kids Service (Under 12)",
      description:
        "A gentle and fun pampering session for the little ones. We use non-toxic products and offer safe, simple nail care designed for children.",
      duration: "30 min",
      price: "$20+",
      image: "/kids.jpg",
      features: [
        "Gentle touch",
        "Non-toxic products",
        "Fun colors",
        "Age-appropriate care",
      ],
      popular: false,
    },

    // Beauty (Lashes/Waxing)
    {
      category: "beauty",
      name: "Lashes & Brows",
      description:
        "Awaken your eyes with our lash and brow services. From lifting to tinting, we enhance your natural features for a low-maintenance, polished look.",
      duration: "45 min",
      price: "$45+",
      image: "/lash-lifting.jpg",
      features: [
        "Lash Lift curl",
        "Tinting definition",
        "Brow shaping",
        "Natural enhancement",
      ],
      popular: false,
    },
    {
      category: "beauty",
      name: "Waxing Services",
      description:
        "Experience silky smooth skin with our professional waxing. We use gentle wax to effectively remove hair from the root for long-lasting smoothness.",
      duration: "Var",
      price: "Var",
      image: "/Waxing.jpg",
      features: [
        "Smooth skin",
        "Long-lasting results",
        "Facial waxing",
        "Body waxing",
      ],
      popular: false,
    },
    {
      category: "beauty",
      name: "Facials",
      description:
        "Refresh your complexion with our tailored facial treatments. Deep cleansing and hydration to reveal your best skin.",
      duration: "Var",
      price: "Var",
      image: "/Facials.jpg",
      features: [
        "Deep cleansing",
        "Hydration boost",
        "Relaxation",
        "Glowing skin",
      ],
      popular: false,
    },
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      description:
        "We discuss your preferences, nail health, and desired style",
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

  const addons = [
    { name: "Nail Strengthening Treatment", price: "$10" },
    { name: "Paraffin Wax Treatment", price: "$15" },
    { name: "Hot Stone Massage", price: "$20" },
    { name: "Chrome/Mirror Finish", price: "$15" },
    { name: "Nail Art per Nail", price: "$5" },
    { name: "Gem Application", price: "$3-$10" },
    { name: "French Tips", price: "$10" },
    { name: "Nail Repair", price: "$5" },
  ];

  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  return (
    <div className="bg-[#ffffff]">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-20 px-6 bg-gradient-to-br from-brand-green via-brand-green to-green-400"
      >
        <motion.div
          className="absolute inset-0 opacity-0"
          style={{ y, opacity }}
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
            className="text-white font-semibold mb-4 uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.p>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Premium Nail Care Services
          </motion.h1>
          <motion.p
            className="text-xl text-white mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From classic manicures to custom nail art, we offer a complete range
            of services
          </motion.p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section ref={servicesRef} className="bg-brand-yellow py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#2a2a2a] mb-6">
              Explore Our Services
            </h2>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  variant={selectedCategory === cat.id ? "default" : "outline"}
                  className={
                    selectedCategory === cat.id
                      ? "bg-brand-green text-white hover:bg-brand-green"
                      : "border-[#d0d0d0] hover:border-brand-green"
                  }
                >
                  {cat.label}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    {service.popular && (
                      <Badge className="absolute top-4 right-4 z-10 bg-brand-green hover:bg-brand-green">
                        Popular
                      </Badge>
                    )}
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-2xl font-bold mb-1">
                        {service.name}
                      </h3>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <p className="text-[#5a5a5a] mb-4">{service.description}</p>

                    <div className="flex items-center justify-between mb-4 text-sm text-[#7a7a7a]">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{service.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 text-brand-green font-bold text-lg">
                        <DollarSign className="w-5 h-5" />
                        <span>{service.price.replace("$", "")}</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-[#5a5a5a]"
                        >
                          <Check className="w-4 h-4 text-brand-green flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="https://www.dashbooking.com/salon/deer-ridge-nails-and-spa"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-brand-green text-white hover:bg-brand-green group/btn">
                        Book Now
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="bg-[#ffffff] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-brand-green font-semibold mb-2 uppercase tracking-wider text-sm">
              Our Process
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to ensure perfect results every time
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <Card className="border-none shadow-lg h-full">
                  <CardContent className="p-6 text-center">
                    <div className="text-6xl font-bold text-brand-green/20 mb-4">
                      {item.step}
                    </div>
                    <motion.div
                      className="bg-brand-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>

                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-brand-green/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section ref={addonsRef} className="bg-brand-yellow py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={addonsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-brand-green font-semibold mb-2 uppercase tracking-wider text-sm">
              Enhance Your Experience
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Available Add-Ons
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Customize your service with these premium additions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {addons.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={addonsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
              >
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-brand-green/10 w-10 h-10 rounded-full flex items-center justify-center">
                        <Zap className="w-5 h-5 text-brand-green" />
                      </div>
                      <span className="font-semibold text-gray-900">
                        {addon.name}
                      </span>
                    </div>
                    <span className="text-brand-green font-bold text-lg">
                      {addon.price}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-green py-20 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Treat Yourself?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 opacity-90"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Book your appointment today and experience premium nail care
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="https://www.dashbooking.com/salon/deer-ridge-nails-and-spa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="bg-white text-brand-green hover:bg-[#e0e0e0] px-8 py-6 text-lg font-semibold"
                size="lg"
              >
                Book Appointment
              </Button>
            </Link>
            <Link href="/gallery">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-green px-8 py-6 text-lg font-semibold"
                size="lg"
              >
                View Gallery
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
