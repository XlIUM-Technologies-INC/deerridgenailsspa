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

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "4195 King St E #111, Kitchener, ON N2P 0C1",
      link: "https://maps.google.com/?q=4195+King+St+E+%23111,+Kitchener,+ON+N2P+0C1",
      color: "text-red-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "(519) 888-8888",
      link: "tel:5198888888",
      color: "text-blue-500",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@deerridgenailsspa.ca",
      link: "mailto:info@deerridgenailsspa.ca",
      color: "text-purple-500",
    },
  ];

  const businessHours = [
    { day: "Monday", hours: "9:00 AM - 8:00 PM", open: true, promo: true },
    { day: "Tuesday", hours: "9:00 AM - 8:00 PM", open: true, promo: true },
    { day: "Wednesday", hours: "9:00 AM - 8:00 PM", open: true },
    { day: "Thursday", hours: "9:00 AM - 8:00 PM", open: true },
    { day: "Friday", hours: "9:00 AM - 9:00 PM", open: true },
    { day: "Saturday", hours: "9:00 AM - 9:00 PM", open: true },
    { day: "Sunday", hours: "10:00 AM - 7:00 PM", open: true },
  ];

  const services = [
    "Manicure",
    "Pedicure",
    "Nail Art",
    "Gel Extensions",
    "Acrylic Extensions",
    "Spa Treatment",
    "Other",
  ];

  return (
    <div className="bg-[#ffffff] min-h-screen flex flex-col">
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
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Any questions or special requests? We are here to help.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              asChild
              className="bg-white text-brand-green hover:bg-white/90 px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all rounded-full"
              size="lg"
            >
              <Link
                href="https://www.dashbooking.com/salon/deer-ridge-nails-and-spa"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Online
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
                <Card className="border border-gray-300 shadow-sm rounded-3xl overflow-hidden bg-white h-full">
                  <CardContent className="p-8">
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Send us a Message
                      </h2>
                      <p className="text-gray-600">
                        We'll get back to you as soon as possible.
                      </p>
                    </div>

                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-20 bg-green-50 rounded-xl border border-green-100"
                      >
                        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Message Sent!
                        </h3>
                        <p className="text-gray-600">
                          Thank you for reaching out. We'll be in touch shortly.
                        </p>
                      </motion.div>
                    ) : (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-800 mb-1">
                              Full Name
                            </label>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                              <Input
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Name"
                                className="pl-10 h-12 bg-gray-50 border-gray-200 rounded-xl focus:bg-white transition-colors"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-800 mb-1">
                              Email
                            </label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                              <Input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email"
                                className="pl-10 h-12 bg-gray-50 border-gray-200 rounded-xl focus:bg-white transition-colors"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-800 mb-1">
                              Phone
                            </label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                              <Input
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="Phone"
                                className="pl-10 h-12 bg-gray-50 border-gray-200 rounded-xl focus:bg-white transition-colors"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-800 mb-1">
                              Service
                            </label>
                            <div className="relative">
                              <select
                                name="service"
                                value={formData.service}
                                onChange={handleInputChange}
                                suppressHydrationWarning
                                className="w-full h-12 pl-3 pr-8 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all appearance-none cursor-pointer text-gray-700 text-sm"
                              >
                                <option value="">Select Service...</option>
                                {services.map((s, i) => (
                                  <option key={i} value={s}>
                                    {s}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-800 mb-1">
                            Message
                          </label>
                          <div className="relative">
                            <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                            <textarea
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              placeholder="How can we help you?"
                              rows={4}
                              className="w-full pl-10 pt-3 pr-3 pb-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all resize-none text-sm"
                            />
                          </div>
                        </div>

                        <Button
                          onClick={handleSubmit}
                          className="w-full bg-[#2D3E2F] hover:bg-[#1f2c20] text-white h-12 text-base font-semibold rounded-xl shadow-md hover:shadow-lg transition-all"
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
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={contactInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex-1"
                >
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-3xl overflow-hidden group h-full">
                    <CardContent className="p-6 flex items-center gap-4 h-full">
                      <div className="bg-gray-100 p-4 rounded-full flex-shrink-0 group-hover:scale-105 transition-transform">
                        <info.icon
                          className={`w-6 h-6 ${info.color}`}
                          strokeWidth={1.5}
                        />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-lg font-bold text-gray-900">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-600 hover:text-brand-green transition-colors text-sm"
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
                          <p className="text-gray-600 text-sm">
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
              <div className="bg-brand-green p-3 rounded-full text-white">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-gray-900">Locate Us</p>
                <p className="text-sm text-gray-500">
                  4195 King St E #111, Kitchener
                </p>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="ml-2"
                onClick={() =>
                  window.open(
                    "https://maps.google.com/?q=4195+King+St+E+%23111,+Kitchener,+ON+N2P+0C1",
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
