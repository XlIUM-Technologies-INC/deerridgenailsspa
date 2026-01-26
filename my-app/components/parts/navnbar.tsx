"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // @ts-ignore
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Navbar Component (to be used in Layout)
const Navbar = () => {
  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "about" },
    { label: "SERVICES", href: "services" },
    { label: "GALLERY", href: "gallery" },
    { label: "CONTACT", href: "contact" },
  ];

  return (
    <nav className="bg-brand-yellow px-6 py-4 border-b border-brand-green sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          className="text-2xl roboto-700 bg-gradient-to-r from-brand-green to-brand-green bg-clip-text text-transparent hover:from-brand-green hover:to-brand-green transition-all duration-300 cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Deer Ridge Nails Spa
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList className="space-x-2">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink
                    href={item.href}
                    className="px-4 py-2 text-[#9f9f91] hover:text-brand-green font-semibold roboto-500 transition-all duration-300 relative group"
                  >
                    {item.label}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-brand-green w-0 group-hover:w-full transition-all duration-300"
                      layoutId={`underline-${item.label}`}
                    />
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Book Now Button */}
        <div>
          <Link href="/contact">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="hidden md:inline-flex bg-brand-green text-white hover:bg-brand-green rounded-full px-8 py-6 h-auto roboto-bold shadow-lg hover:shadow-xl transition-all duration-300">
                BOOK NOW
              </Button>
            </motion.div>
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-brand-yellow">
            <div className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-lg text-[#9f9f91] hover:text-brand-green transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Link href="/contact" className="w-full">
                <Button className="bg-brand-green text-white hover:bg-brand-green rounded-full w-full mt-4 roboto-bold">
                  BOOK NOW
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
export default Navbar;
