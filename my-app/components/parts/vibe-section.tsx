"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function VibeSection() {
    return (
        <section className="py-24 px-6 bg-brand-green text-white overflow-hidden relative">
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />

            <div className="max-w-[1400px] mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Artistic Image Composition */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="relative h-[600px] w-full rounded-none overflow-hidden border border-white/20 p-4">
                            <div className="absolute top-0 left-0 w-full h-full border-t border-l border-white/40 z-10" />
                            <div className="relative h-full w-full overflow-hidden">
                                <Image
                                    src="/33315ea658fe92c84152b3dcb44ec35e.jpg"
                                    alt="Salon Atmosphere"
                                    fill
                                    className="object-cover scale-110 hover:scale-100 transition-transform duration-[2000ms]"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    quality={85}
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/40 to-transparent" />
                            </div>
                        </div>

                        {/* Floating Decorative Label */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-8 -right-8 bg-white text-brand-green p-10 shadow-[0_30px_60px_rgba(0,0,0,0.2)] z-20 hidden md:block border-l-4 border-brand-sage/20"
                        >
                            <h3 className="text-3xl font-italiana tracking-widest uppercase leading-none mb-3">
                                Pure<br />Atmosphere
                            </h3>
                            <p className="text-[10px] font-inter tracking-[0.4em] text-brand-sage uppercase font-light">
                                Designed for Serenity
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right: Narrative Content */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-white/40 border-white/20 mb-6 px-4 py-1 font-inter tracking-[0.4em] uppercase text-[10px] font-light block">
                                THE VIBE
                            </span>
                            <h2 className="text-5xl md:text-7xl font-italiana mb-8 leading-[0.9] tracking-tight">
                                WHERE ARTISTRY <br />
                                MEETS ELEGANCE
                            </h2>
                            <div className="space-y-6 text-base font-inter font-light text-white/80 leading-relaxed max-w-xl">
                                <p>
                                    At Deer Ridge Nails Spa, we believe that beauty is an experience, not just a result. Our space is meticulously designed to transport you to a world of calm and luxury from the moment you step through our doors.
                                </p>
                                <p>
                                    Every detail—from the soft lighting to the curated textures of our newly renovated interior—is crafted to provide the ultimate sanctuary for your self-care journey.
                                </p>
                            </div>
                        </motion.div>

                        {/* Aesthetic Stats/Highlights */}
                        <div className="grid grid-cols-2 gap-8 pt-8">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="border-t border-white/10 pt-6"
                            >
                                <p className="text-4xl font-italiana mb-2">100%</p>
                                <p className="text-[10px] font-inter uppercase tracking-[0.3em] text-white/40 font-light">Hygienic Focus</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7 }}
                                className="border-t border-white/10 pt-6"
                            >
                                <p className="text-4xl font-italiana mb-2">PREMIUM</p>
                                <p className="text-[10px] font-inter uppercase tracking-[0.3em] text-white/40 font-light">Product Selection</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Badge({ children, variant, className }: { children: React.ReactNode, variant: string, className?: string }) {
    return (
        <span className={`inline-block ${className}`}>
            {children}
        </span>
    );
}
