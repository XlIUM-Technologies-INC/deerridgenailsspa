"use client";

import Image from "next/image";

const services = [
  {
    title: "Manicures",
    description:
      "Professional manicure services that shape, clean, and perfect your nails for a polished look.",
    image: "/nails.jpg",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Artificial Nails",
    description:
      "Nail extensions improve length, shape, and strength, providing a sophisticated appearance.",
    image: "/artificiall-nails.jpg",
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Lash Lift",
    description:
      "Enhance thicker, fuller curls and elevate lashes for a natural, lifted look.",
    image: "/lash-lifting.jpg",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Scalp Therapy Spa",
    description:
      "Scalp massage relieves tension, alleviates headaches, and stimulates hair growth.",
    image: "/Scalp Therapy Spa .jpg",
    color: "from-red-500 to-pink-500",
  },
  {
    title: "Kids Nails",
    description:
      "We provide a range of nail care services specifically designed for children.",
    image: "/kids.jpg",
    color: "from-brand-yellow to-[#d4a574]",
  },
  {
    title: "Waxing",
    description:
      "Remove hair from the follicle for smoother skin and slower regrowth.",
    image: "/Waxing.jpg",
    color: "from-teal-500 to-emerald-500",
  },
  {
    title: "Facials",
    description:
      "Brighter, smoother lifts and a radiant glow tailored to your skin.",
    image: "/Facials.jpg",
    color: "from-violet-500 to-purple-500",
  },
];

export default function ServicesSection() {
  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Belleza&family=Meow+Script&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap");
      `}</style>

      <section
        className="bg-gradient-to-br from-white via-brand-green/10 to-white py-24 px-6 relative overflow-hidden"
        style={{ fontFamily: "Open Sans, sans-serif" }}
      >
        {/* Decorative background */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-yellow/15 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-brand-green to-brand-green bg-clip-text text-transparent"
              style={{ fontFamily: "Belleza, sans-serif" }}
            >
              Our Nail Services
            </h2>
            <p className="text-lg text-[#5a5a5a] max-w-2xl mx-auto">
              Premium beauty treatments designed to enhance your confidence and
              relaxation.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {/* Large Feature Card - Manicures */}
            <div className="col-span-12 md:col-span-7 lg:col-span-8 row-span-2">
              <ServiceCardLarge service={services[0]} />
            </div>

            {/* Right Column - 3 Small Cards */}
            <div className="col-span-12 md:col-span-5 lg:col-span-4 flex flex-col gap-4 md:gap-6">
              <ServiceCardSmall service={services[1]} />
              <ServiceCardSmall service={services[2]} />
              <ServiceCardSmall service={services[3]} />
            </div>

            {/* Bottom Row - 3 Medium Cards */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <ServiceCardMedium service={services[4]} />
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <ServiceCardMedium service={services[5]} />
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <ServiceCardMedium service={services[6]} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Large Featured Card with Image
function ServiceCardLarge({ service }) {
  return (
    <div className="h-full rounded-3xl shadow-2xl cursor-pointer group relative overflow-hidden transition-all hover:scale-[1.02]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          quality={85}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green/90 to-brand-green/90" />
      </div>

      <div className="relative z-10 h-full p-8 md:p-12 flex flex-col justify-end">
        <h3
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          style={{ fontFamily: "Belleza, sans-serif" }}
        >
          {service.title}
        </h3>

        <p className="text-lg text-white/90 leading-relaxed mb-6">
          {service.description}
        </p>
      </div>
    </div>
  );
}

// Small Horizontal Cards with Images
function ServiceCardSmall({ service }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer border border-[#d0d0d0] group hover:scale-[1.02] overflow-hidden">
      <div className="flex items-center gap-0 h-32">
        {/* Image Section */}
        <div className="w-32 h-full relative flex-shrink-0 overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            quality={85}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-30 group-hover:opacity-20 transition-opacity`}
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 p-4">
          <h4
            className="font-bold text-gray-900 mb-1 group-hover:text-brand-green transition-colors text-sm md:text-base"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            {service.title}
          </h4>
          <p className="text-xs md:text-sm text-[#5a5a5a] line-clamp-2">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}

// Medium Vertical Cards with Images
function ServiceCardMedium({ service }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer border border-[#d0d0d0] h-full group hover:-translate-y-2 overflow-hidden">
      {/* Image Section */}
      <div className="h-48 relative overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          quality={85}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20 group-hover:opacity-10 transition-opacity`}
        />
      </div>

      {/* Text Section */}
      <div className="p-6">
        <h4
          className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-green transition-colors"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          {service.title}
        </h4>
        <p className="text-sm text-[#5a5a5a] leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  );
}
