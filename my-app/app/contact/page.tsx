'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
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
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export default function Page() {
  const heroRef = useRef(null);
  const contactRef = useRef(null);
  const formRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const contactInView = useInView(contactRef, { once: true, amount: 0.2 });
  const formInView = useInView(formRef, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Kitchener, Ontario, Canada',
      link: 'https://maps.google.com',
      color: 'text-red-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '(519) 888-8888',
      link: 'tel:5198888888',
      color: 'text-blue-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@deerridgenailsspa.ca',
      link: 'mailto:info@deerridgenailsspa.ca',
      color: 'text-purple-500'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon-Sun: 9:00 AM - 8:00 PM',
      link: null,
      color: 'text-green-500'
    }
  ];

  const businessHours = [
    { day: 'Monday', hours: '9:00 AM - 8:00 PM', open: true, promo: true },
    { day: 'Tuesday', hours: '9:00 AM - 8:00 PM', open: true, promo: true },
    { day: 'Wednesday', hours: '9:00 AM - 8:00 PM', open: true },
    { day: 'Thursday', hours: '9:00 AM - 8:00 PM', open: true },
    { day: 'Friday', hours: '9:00 AM - 9:00 PM', open: true },
    { day: 'Saturday', hours: '9:00 AM - 9:00 PM', open: true },
    { day: 'Sunday', hours: '10:00 AM - 7:00 PM', open: true }
  ];

  const services = [
    'Manicure',
    'Pedicure',
    'Nail Art',
    'Gel Extensions',
    'Acrylic Extensions',
    'Spa Treatment',
    'Other'
  ];

  return (
    <div className="bg-[#f5f1ed]">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-20 px-6">
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{ y, opacity }}
        >
          <Image
            src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200"
            alt="Contact background"
            fill
            className="object-cover"
            quality={85}
            priority
          />
        </motion.div>

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
            ease: "easeInOut"
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
            delay: 1
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.p
            className="text-[#8b2f4a] font-semibold mb-4 uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </motion.p>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We'd love to hear from you! Book an appointment or reach out with any questions
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section ref={contactRef} className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={contactInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full group">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <info.icon className={`w-8 h-8 ${info.color}`} />
                    </motion.div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-gray-600 hover:text-[#8b2f4a] transition-colors"
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.content}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="bg-[#f5f1ed] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-none shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Book an Appointment
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below and we'll get back to you shortly
                  </p>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Thank You!
                      </h3>
                      <p className="text-gray-600">
                        We'll contact you shortly to confirm your appointment.
                      </p>
                    </motion.div>
                  ) : (
                    <div className="space-y-6">
                      {/* Name */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="pl-10 h-12 border-gray-300 focus:border-[#8b2f4a] focus:ring-[#8b2f4a]"
                          />
                        </div>
                      </div>

                      {/* Email & Phone */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <Input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="john@example.com"
                              className="pl-10 h-12 border-gray-300 focus:border-[#8b2f4a] focus:ring-[#8b2f4a]"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Phone *
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <Input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="(555) 123-4567"
                              className="pl-10 h-12 border-gray-300 focus:border-[#8b2f4a] focus:ring-[#8b2f4a]"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Service & Date */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Service *
                          </label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            className="w-full h-12 px-4 border border-gray-300 rounded-md focus:border-[#8b2f4a] focus:ring-[#8b2f4a] focus:ring-2 focus:ring-offset-0"
                          >
                            <option value="">Select a service</option>
                            {services.map((service, idx) => (
                              <option key={idx} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Preferred Date *
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <Input
                              type="date"
                              name="date"
                              value={formData.date}
                              onChange={handleInputChange}
                              className="pl-10 h-12 border-gray-300 focus:border-[#8b2f4a] focus:ring-[#8b2f4a]"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Additional Message
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Any special requests or questions?"
                            rows="4"
                            className="w-full pl-10 pt-3 px-4 border border-gray-300 rounded-md focus:border-[#8b2f4a] focus:ring-[#8b2f4a] focus:ring-2 focus:ring-offset-0 resize-none"
                          />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <Button
                        onClick={handleSubmit}
                        className="w-full bg-[#8b2f4a] text-white hover:bg-[#6d2439] h-12 text-lg font-semibold group"
                      >
                        Send Message
                        <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Business Hours & Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Business Hours Card */}
              <Card className="border-none shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="w-8 h-8 text-[#8b2f4a]" />
                    <h2 className="text-3xl font-bold text-gray-900">
                      Business Hours
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {businessHours.map((schedule, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={formInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                        className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-gray-900 w-28">
                            {schedule.day}
                          </span>
                          {schedule.promo && (
                            <Badge className="bg-[#8b2f4a] hover:bg-[#8b2f4a] text-xs">
                              10% OFF
                            </Badge>
                          )}
                        </div>
                        <span className={`font-medium ${schedule.open ? 'text-green-600' : 'text-red-600'}`}>
                          {schedule.hours}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-[#8b2f4a]/10 rounded-lg">
                    <p className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-[#8b2f4a] font-bold">💡</span>
                      <span>
                        <strong>Special Offer:</strong> Get 10% off all services every Monday & Tuesday!
                      </span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Map Card */}
              <Card className="border-none shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative w-full h-[400px] bg-gray-200">
                    {/* Google Maps Embed */}
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2865.652859221849!2d-80.49327892345678!3d43.44142107109275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf48f9a0a0001%3A0xd0a0a0a0a0a0a0!2sKitchener%2C%20ON!5e0!3m2!1sen!2sca!4v1234567890123"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Deer Ridge Nails Spa Location"
                    />
                  </div>
                  <div className="p-6 bg-white">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-6 h-6 text-[#8b2f4a] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">
                          Visit Our Salon
                        </h3>
                        <p className="text-gray-600 mb-3">
                          Kitchener, Ontario, Canada
                        </p>
                        <Button
                          variant="outline"
                          className="border-[#8b2f4a] text-[#8b2f4a] hover:bg-[#8b2f4a] hover:text-white"
                          onClick={() => window.open('https://maps.google.com', '_blank')}
                        >
                          Get Directions
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media Links */}
              <Card className="border-none shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-12 h-12 border-gray-300 hover:border-[#8b2f4a] hover:bg-[#8b2f4a] hover:text-white"
                    >
                      <Instagram className="w-6 h-6" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-12 h-12 border-gray-300 hover:border-[#8b2f4a] hover:bg-[#8b2f4a] hover:text-white"
                    >
                      <Facebook className="w-6 h-6" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-12 h-12 border-gray-300 hover:border-[#8b2f4a] hover:bg-[#8b2f4a] hover:text-white"
                    >
                      <Twitter className="w-6 h-6" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}