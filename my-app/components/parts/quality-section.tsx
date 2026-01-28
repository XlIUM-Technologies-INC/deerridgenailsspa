"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const QualitySection = () => {
    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1"
                    >
                        <p className="text-[10px] font-inter tracking-[0.5em] text-brand-sage uppercase font-light mb-6 border-l-2 border-brand-sage/20 pl-4">
                            Our Standards
                        </p>
                        <h2 className="text-5xl md:text-7xl font-italiana mb-8 leading-[0.9] text-brand-green">
                            PRECISION IN <br />
                            EVERY DETAIL
                        </h2>
                        <div className="space-y-8 text-base font-inter font-light text-brand-green/70 leading-relaxed max-w-xl">
                            <p>
                                We believe that the smallest details make the biggest difference. Our technicians are trained in the latest European and international techniques to ensure your nails aren't just beautiful, but healthy.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                                <div className="space-y-3">
                                    <h4 className="font-italiana text-xl text-brand-green">Hospital Grade Hygiene</h4>
                                    <p className="text-sm font-light">Every tool is sterilized in a medical-grade autoclave for your absolute safety.</p>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="font-italiana text-xl text-brand-green">Premium Formulations</h4>
                                    <p className="text-sm font-light">We exclusively use non-toxic, vegan-friendly products that prioritize nail health.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Composite Image Display */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="order-1 lg:order-2 relative"
                    >
                        <div className="relative aspect-[4/5] w-full">
                            <Image
                                src="/8f7b18b46378234ab97d8c5a74458c51.jpg"
                                alt="Precision Nail Art"
                                fill
                                className="object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                quality={85}
                            />

                            {/* Floating Accent */}
                            <motion.div
                                animate={{ y: [20, -20, 20] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-12 -left-12 w-64 h-64 border border-brand-green/5 rounded-full pointer-events-none"
                            />

                            {/* Editorial Text Overlay */}
                            <div className="absolute -bottom-8 right-8 bg-brand-green text-white p-12 shadow-2xl max-w-xs">
                                <p className="font-italiana text-4xl leading-tight mb-4 italic">"The Deer Ridge Standard"</p>
                                <div className="h-0.5 w-12 bg-white/20 mb-4" />
                                <p className="text-[10px] font-inter tracking-[0.3em] uppercase opacity-60">Handcrafted Excellence</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default QualitySection;
