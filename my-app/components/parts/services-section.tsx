'use client';

import { motion } from 'framer-motion';
import {
  Sparkles,
  Scissors,
  Heart,
  Baby,
  Wand2,
  Eye,
} from 'lucide-react';
// @ts-ignore

const services = [
  {
    title: 'Manicures',
    description:
      'Professional manicure services that shape, clean, and perfect your nails for a polished look.',
    icon: Sparkles,
  },
  {
    title: 'Artificial Nails',
    description:
      'Nail extensions improve length, shape, and strength, providing a sophisticated appearance.',
    icon: Wand2,
  },
  {
    title: 'Lash Lift',
    description:
      'Enhance thicker, fuller curls and elevate lashes for a natural, lifted look.',
    icon: Eye,
  },
  {
    title: 'Scalp Therapy Spa',
    description:
      'Scalp massage relieves tension, alleviates headaches, and stimulates hair growth.',
    icon: Heart,
  },
  {
    title: 'Kids Nails',
    description:
      'We provide a range of nail care services specifically designed for children.',
    icon: Baby,
  },
  {
    title: 'Waxing',
    description:
      'Remove hair from the follicle for smoother skin and slower regrowth.',
    icon: Scissors,
  },
  {
    title: 'Facials',
    description:
      'Brighter, smoother lifts and a radiant glow tailored to your skin.',
    icon: Sparkles,
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-300/15 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Nail Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Premium beauty treatments designed to enhance your confidence
            and relaxation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* Service Card Component              */
/* ---------------------------------- */

function ServiceCard({ service, index }: any) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-[#f5f1ed] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#8b2f4a]/10 mb-6">
        <Icon className="w-6 h-6 text-[#8b2f4a]" />
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {service.title}
      </h3>

      <p className="text-gray-600 leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
}
