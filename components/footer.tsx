import Link from "next/link";
import Image from "next/image";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Life Changers Care Logo"
                width={150}
                height={60}
                className="h-60 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-primary-foreground/90 mt-4 font-semibold">
              Healing Minds. Restoring Hope.
            </p>
            <p className="text-sm text-primary-foreground/70 mt-2">
              Dedicated to transforming mental health across Nigeria
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="hover:text-accent transition-colors"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="hover:text-accent transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/services/1"
                  className="hover:text-accent transition-colors"
                >
                  Individual Counseling
                </Link>
              </li>
              <li>
                <Link
                  href="/services/2"
                  className="hover:text-accent transition-colors"
                >
                  Family & Couples Therapy
                </Link>
              </li>
              <li>
                <Link
                  href="/services/3"
                  className="hover:text-accent transition-colors"
                >
                  Youth Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/services/4"
                  className="hover:text-accent transition-colors"
                >
                  Corporate Wellness
                </Link>
              </li>
              <li>
                <Link
                  href="/services/5"
                  className="hover:text-accent transition-colors"
                >
                  Group Therapy
                </Link>
              </li>
              <li>
                <Link
                  href="/services/6"
                  className="hover:text-accent transition-colors"
                >
                  Trauma Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <Mail size={20} className="flex-shrink-0 mt-1 text-accent" />
                <div>
                  <p className="text-xs text-primary-foreground/70 font-semibold">
                    Email
                  </p>
                  <p className="text-sm">lifechanger26@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Phone size={20} className="flex-shrink-0 mt-1 text-accent" />
                <div>
                  <p className="text-xs text-primary-foreground/70 font-semibold">
                    Phone
                  </p>
                  <p className="text-sm">08084711113, +2349074769274</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <MapPin size={20} className="flex-shrink-0 mt-1 text-accent" />
                <div>
                  <p className="text-xs text-primary-foreground/70 font-semibold">
                    Location
                  </p>
                  <p className="text-sm">
                    Suit 35 ShopRite Mall
                    <br />
                    Adeniran Ogunsanya St, Surulere
                    <br />
                    Lagos 100001, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="text-sm text-primary-foreground/80">
                <span className="font-semibold">
                  24/7 Crisis Support Available
                </span>
                <br />
                Mental health emergencies:0808 471 1113
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-primary-foreground/80">
                Your mental health is our priority. We're committed to
                accessible, compassionate care.
              </p>
            </div>
            <div className="text-right">
              <div className="flex gap-4 justify-end items-center">
                <Heart size={20} className="text-accent" />
                <p className="text-sm text-primary-foreground/80">
                  Made with care for Nigeria
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
            <p>
              &copy; 2026 Life Changers Care & LIFT Initiative. All rights
              reserved.
            </p>
            <p className="mt-2 text-xs text-primary-foreground/60">
              Developed by{" "}
              <span className="font-semibold text-primary-foreground/80">
                Tinzwave Technology
              </span>
            </p>
            <p className="mt-3 flex gap-4 justify-center text-xs">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
              <span>•</span>
              <a href="#" className="hover:text-accent transition-colors">
                Professional Standards
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
