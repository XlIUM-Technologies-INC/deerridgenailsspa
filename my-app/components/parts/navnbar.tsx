import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
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
    <nav className="bg-[#f5f1ed] px-6 py-4 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-900">Deer Ridge Nails Spa</div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="space-x-1">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink
                  href={item.href}
                  className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Book Now Button */}
        <Button className="hidden md:inline-flex bg-[#8b2f4a] text-white hover:bg-[#6d2439] rounded-full px-8">
          BOOK NOW
        </Button>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#f5f1ed]">
            <div className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-lg text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Button className="bg-[#8b2f4a] text-white hover:bg-[#6d2439] rounded-full w-full mt-4">
                BOOK NOW
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
export default Navbar;
