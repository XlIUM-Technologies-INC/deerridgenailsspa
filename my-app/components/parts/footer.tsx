'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook, 
  Twitter,
  Heart,
  Sparkles
} from 'lucide-react';
// @ts-ignore
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      category: 'Quick Links',
      links: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'Contact', href: '/contact' }
      ]
    },
    {
      category: 'Services',
      links: [
        { label: 'Manicures', href: '/services' },
        { label: 'Pedicures', href: '/services' },
        { label: 'Gel Extensions', href: '/services' },
        { label: 'Nail Art', href: '/services' },
        { label: 'Spa Treatments', href: '/services' }
      ]
    },
    {
      category: 'Business Hours',
      links: [
        { label: 'Monday - Friday: 9:00 AM - 9:00 PM', href: '#' },
        { label: 'Saturday: 9:00 AM - 9:00 PM', href: '#' },
        { label: 'Sunday: 10:00 AM - 7:00 PM', href: '#' },
        { label: 'Closed on Holidays', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-gradient-to-b from-[#2d1b24] to-[#1a0f15] text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-0 left-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"
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
        className="absolute bottom-0 right-10 w-52 h-52 bg-rose-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            className="grid md:grid-cols-5 gap-12 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-6 h-6 text-pink-400" />
                </motion.div>
                <h3 className="text-2xl font-bold">Deer Ridge</h3>
              </div>
              <p className="text-gray-300 text-sm mb-6">
                Premium nail care and spa services in Kitchener, Ontario.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="bg-pink-500/20 hover:bg-pink-500/40 p-3 rounded-full transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Links Sections */}
            {footerLinks.map((section) => (
              <motion.div key={section.category} variants={itemVariants}>
                <h4 className="text-lg font-semibold mb-4 text-pink-300">
                  {section.category}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Contact Section */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-4 text-pink-300">
                Contact Us
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 text-pink-400 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">
                    Kitchener, Ontario, Canada
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-1 text-pink-400 flex-shrink-0" />
                  <a href="tel:5198888888" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                    (519) 888-8888
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-1 text-pink-400 flex-shrink-0" />
                  <a href="mailto:info@deerridgenailsspa.ca" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                    info@deerridgenailsspa.ca
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            className="border-t border-pink-500/20 pt-12 mb-8"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="max-w-md">
              <h4 className="text-lg font-semibold mb-3 text-pink-300">
                Stay Updated
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                Subscribe to get special offers and updates.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-pink-500/10 border border-pink-500/30 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-pink-400 transition-colors"
                />
                <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 rounded-lg">
                  Subscribe
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          className="border-t border-pink-500/20 py-8 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Deer Ridge Nails Spa. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-pink-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-pink-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-pink-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
              <span>in Kitchener</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
