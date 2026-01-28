"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Calendar,
  User,
  Instagram,
  Facebook,
  Twitter,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
// @ts-ignore
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  CONTACT_INFO,
  BUSINESS_HOURS,
  SERVICE_TYPES,
  BOOKING_URL
} from "@/lib/constants";

export default function Page() {
  const heroRef = useRef(null);
  const contactRef = useRef(null);
  const formRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const contactInView = useInView(contactRef, { once: true, amount: 0.2 });
  const formInView = useInView(formRef, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfoTiles = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: CONTACT_INFO.address.full,
      link: `https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address.full)}`,
      color: "text-red-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: CONTACT_INFO.phone,
      link: `tel:${CONTACT_INFO.phone.replace(/[^0-9]/g, "")}`,
      color: "text-blue-500",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: CONTACT_INFO.email,
      link: `mailto:${CONTACT_INFO.email}`,
      color: "text-purple-500",
    },
  ];

  return (
    <div className="bg-[#ffffff] min-h-screen flex flex-col">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-24 px-6 bg-brand-green"
      >
        <motion.div
          className="absolute inset-0 opacity-0"
          style={{ y, opacity }}
        ></motion.div>

        {/* Floating decorations */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"
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

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.p
            className="text-white/60 mb-6 uppercase tracking-[0.4em] text-[10px] font-inter font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-italiana text-white mb-8 leading-[0.9] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            CONTACT <br />
            OUR TEAM
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto font-inter font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Any questions or special requests? Our dedicated team is here to assist you in planning your visit.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              asChild
              className="bg-white text-brand-green hover:bg-white/95 px-12 py-8 font-inter font-medium text-[11px] tracking-[0.4em] uppercase rounded-none shadow-xl transition-all"
              size="lg"
            >
              <Link
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                BOOK ONLINE
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area: Info Cards & Form Side-by-Side */}
      <section ref={contactRef} className="py-16 px-6 -mt-10 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left Side: Contact Form */}
            <div className="lg:col-span-3">
              <motion.div
                ref={formRef}
                initial={{ opacity: 0, x: -30 }}
                animate={contactInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="h-full"
              >
                <Card className="border border-brand-green/5 shadow-2xl rounded-none overflow-hidden bg-white h-full">
                  <CardContent className="p-10">
                    <div className="mb-10">
                      <h2 className="text-4xl font-italiana text-brand-green mb-3">
                        Send us a Message
                      </h2>
                      <p className="text-brand-green/60 font-inter font-light text-sm">
                        We'll get back to you as soon as possible, typically within 24 hours.
                      </p>
                    </div>

                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-20 bg-brand-green/5 border border-brand-green/10"
                      >
                        <CheckCircle2 className="w-16 h-16 text-brand-green mx-auto mb-6 stroke-1" />
                        <h3 className="text-3xl font-italiana text-brand-green mb-2">
                          Message Sent!
                        </h3>
                        <p className="text-brand-green/60 font-inter font-light">
                          Thank you for reaching out. We'll be in touch shortly.
                        </p>
                      </motion.div>
                    ) : (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-inter font-light text-brand-sage mb-2 uppercase tracking-[0.2em]">
                              Full Name
                            </label>
                            <div className="relative">
                              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-green/30" />
                              <Input
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Name"
                                className="pl-12 h-14 bg-brand-green/[0.02] border-brand-green/10 rounded-none focus:bg-white transition-all font-inter font-light"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-[10px] font-inter font-light text-brand-sage mb-2 uppercase tracking-[0.2em]">
                              Email
                            </label>
                            <div className="relative">
                              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-green/30" />
                              <Input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email"
                                className="pl-12 h-14 bg-brand-green/[0.02] border-brand-green/10 rounded-none focus:bg-white transition-all font-inter font-light"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-inter font-light text-brand-sage mb-2 uppercase tracking-[0.2em]">
                              Phone
                            </label>
                            <div className="relative">
                              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-green/30" />
                              <Input
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="Phone"
                                className="pl-12 h-14 bg-brand-green/[0.02] border-brand-green/10 rounded-none focus:bg-white transition-all font-inter font-light"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-[10px] font-inter font-light text-brand-sage mb-2 uppercase tracking-[0.2em]">
                              Service
                            </label>
                            <div className="relative">
                              <select
                                name="service"
                                value={formData.service}
                                onChange={handleInputChange}
                                suppressHydrationWarning
                                className="w-full h-14 pl-4 pr-10 bg-brand-green/[0.02] border border-brand-green/10 rounded-none focus:ring-1 focus:ring-brand-green/20 outline-none transition-all appearance-none cursor-pointer text-brand-green/70 text-sm font-inter font-light"
                              >
                                <option value="">Select Service...</option>
                                {SERVICE_TYPES.map((s, i) => (
                                  <option key={i} value={s}>
                                    {s}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-inter font-light text-brand-sage mb-2 uppercase tracking-[0.2em]">
                            Message
                          </label>
                          <div className="relative">
                            <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-brand-green/30" />
                            <textarea
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              placeholder="How can we help you?"
                              rows={4}
                              className="w-full pl-12 pt-4 pr-4 pb-4 bg-brand-green/[0.02] border border-brand-green/10 rounded-none focus:ring-1 focus:ring-brand-green/20 outline-none transition-all resize-none text-sm font-inter font-light"
                            />
                          </div>
                        </div>

                        <Button
                          onClick={handleSubmit}
                          className="w-full bg-brand-green hover:bg-brand-green/95 text-white h-16 font-inter font-medium text-[11px] tracking-[0.4em] rounded-none shadow-xl transition-all uppercase"
                        >
                          Send Message
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Right Side: Info Cards */}
            <div className="lg:col-span-2 h-full flex flex-col justify-between gap-6">
              {contactInfoTiles.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={contactInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex-1"
                >
                  <Card className="border border-brand-green/5 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white rounded-none overflow-hidden group h-full">
                    <CardContent className="p-8 flex items-center gap-6 h-full">
                      <div className="bg-brand-green/5 p-5 rounded-none flex-shrink-0 group-hover:scale-105 transition-transform">
                        <info.icon
                          className={`w-6 h-6 ${info.color} opacity-70`}
                          strokeWidth={1}
                        />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-xl font-italiana text-brand-green mb-1">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-brand-green/70 hover:text-brand-green transition-colors text-sm font-inter font-light"
                            target={
                              info.link.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              info.link.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-brand-green/70 text-sm font-inter font-light">
                            {info.content}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Map Section */}
      <section className="relative h-[400px] md:h-[500px] w-full bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2898.3910302895015!2d-80.4012809!3d43.41065619999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b8a5c9c07a3a7%3A0xeae1386a726a9515!2sDeer%20Ridge%20Nails%20And%20Spa!5e0!3m2!1sen!2s!4v1769445858387!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(0.2)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Deer Ridge Nails Spa Location"
          className="absolute inset-0 z-0"
        />
        {/* Floating Card on Map (Optional, good for UX) */}
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10 hidden md:block">
          <Card className="shadow-2xl border-none">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="bg-brand-green p-3 rounded-none text-white">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="font-italiana text-brand-green text-lg">Locate Us</p>
                <p className="text-sm text-gray-500">
                  {CONTACT_INFO.address.street}, {CONTACT_INFO.address.city}
                </p>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="ml-2 rounded-none font-italiana tracking-widest uppercase border-brand-green text-brand-green"
                onClick={() =>
                  window.open(
                    `https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address.full)}`,
                    "_blank",
                  )
                }
              >
                Get Directions
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
