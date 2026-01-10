"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/testimonials", label: "Success Stories" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact", cta: true },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group h-full">
            <div className="h-full flex items-center">
              <Image
                src="/logo.png"
                alt="Life Changers Care Logo"
                width={150}
                height={60}
                className="h-60 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.cta ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-medium transition-colors ml-2"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-foreground hover:text-primary font-medium transition-colors hover:bg-muted/50 rounded-lg"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border space-y-1">
            {navLinks.map((link) =>
              link.cta ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-primary font-medium bg-primary/5 rounded-lg mx-2 mb-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 text-foreground hover:text-primary font-medium hover:bg-muted/50 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
