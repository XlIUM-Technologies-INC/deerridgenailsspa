"use client";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useState, useEffect } from "react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { label: "SERVICES", href: "/services" },
        { label: "GALLERY", href: "/gallery" },
        { label: "ABOUT", href: "/about" },
        { label: "CONTACT", href: "/contact" },
    ];

    // Colors change based on scroll
    const textColor = isScrolled ? "text-brand-green" : "text-white";
    const logoColor = isScrolled ? "text-brand-green" : "text-white";
    const bgClass = isScrolled ? "bg-white/95 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6";

    return (
        <nav
            className={`fixed top-0 z-50 w-full transition-all duration-500 ${bgClass}`}
        >
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">

                {/* Logo */}
                <div className="flex-1 flex justify-start">
                    <Link href="/" className="group">
                        <h1 className={`text-2xl md:text-3xl font-italiana tracking-[0.2em] ${logoColor} transition-colors duration-300`}>
                            DEER RIDGE
                        </h1>
                    </Link>
                </div>

                {/* Desktop Nav - Using NavigationMenu for semantic Shadcn structure */}
                <div className="hidden md:flex items-center space-x-4">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {navItems.map((item) => (
                                <NavigationMenuItem key={item.label}>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href={item.href}
                                            className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-white/10 data-[state=open]:bg-transparent ${textColor} text-xs tracking-[0.2em] font-italiana h-10`}
                                        >
                                            {item.label}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    <Button
                        asChild
                        variant={isScrolled ? "default" : "secondary"}
                        className={`rounded-none px-8 py-2 font-italiana text-xs tracking-widest transition-all duration-300 ${!isScrolled && "bg-white text-brand-green hover:bg-white/90"}`}
                    >
                        <Link href="https://www.dashbooking.com/salon/deer-ridge-nails-and-spa" target="_blank" rel="noopener noreferrer">
                            BOOK NOW
                        </Link>
                    </Button>
                </div>

                {/* Mobile Menu Trigger */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="hover:bg-transparent">
                                <Menu className={`h-6 w-6 ${textColor}`} />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-brand-green border-none w-full sm:w-[400px] p-0">
                            <div className="flex flex-col h-full justify-center items-center p-8 space-y-8">
                                {navItems.map((item) => (
                                    <SheetClose key={item.label} asChild>
                                        <Link
                                            href={item.href}
                                            className="text-3xl font-italiana text-white hover:text-brand-sage tracking-widest transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    </SheetClose>
                                ))}
                                <SheetClose asChild>
                                    <Link href="/contact" className="mt-8">
                                        <Button className="bg-white text-brand-green hover:bg-white/90 px-12 py-6 text-xl font-italiana tracking-widest">
                                            BOOK NOW
                                        </Button>
                                    </Link>
                                </SheetClose>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
