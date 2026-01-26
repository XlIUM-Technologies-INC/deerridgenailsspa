"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Manicures",
    description: "Classic & Gel Care",
    image: "/nails.jpg",
    href: "/services"
  },
  {
    title: "Pedicures",
    description: "Rejuvenating Foot Spa",
    image: "/pundicure.jpg",
    href: "/services"
  },
  {
    title: "Extensions",
    description: "Bio Gel, UV Gel & Acrylics",
    image: "/artificiall-nails.jpg",
    href: "/services"
  },
  {
    title: "Lashes & Brows",
    description: "Lash Lift & Tint",
    image: "/lash-lifting.jpg",
    href: "/services"
  },
  {
    title: "Waxing",
    description: "Smooth Hair Removal",
    image: "/Waxing.jpg",
    href: "/services"
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-6 bg-[#f9f9f7]">
      <div className="max-w-[1400px] mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-italiana text-brand-green mb-16">
          Overview of Services
        </h2>

        <div className="flex flex-wrap justify-center gap-12 md:gap-16">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group flex flex-col items-center gap-6"
            >
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-500 group-hover:scale-105 border border-[#e5e5e0]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-green/0 group-hover:bg-brand-green/10 transition-colors duration-300" />
              </div>

              <div className="text-center">
                <h3 className="text-xl font-italiana text-brand-green mb-1 group-hover:tracking-wider transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-sm font-old-standard text-brand-sage uppercase tracking-wide">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16">
          <Link href="/services">
            <Button variant="outline" className="rounded-none border-brand-green text-brand-green hover:bg-brand-green hover:text-white px-8 py-6 font-italiana tracking-widest uppercase transition-all duration-300">
              View All Services
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
