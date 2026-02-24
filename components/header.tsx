"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/packages", label: "Packages" },
    { href: "/contact", label: "Contact" },
    { href: "/booking", label: "Booking" },
    { href: "/Coprabrate", label: "Coprabrate" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/logo.PNG"
            alt="FBDTravels Logo"
            width={60}
            height={60}
            className="w-16 h-16 object-contain"
            priority
          />
          <span className="text-3xl font-bold text-black">
            FBDTravels
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative font-medium text-black transition-all duration-300 group"
            >
              {link.label}
              {/* Marker-style hover underline */}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[3px] bg-black rounded-md transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-black hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
