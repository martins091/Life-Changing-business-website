"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Heart,
  Users,
  Shield,
  Zap,
  Lightbulb,
  Award,
  ArrowRight,
  Check,
  Brain,
  TrendingUp,
  Briefcase,
} from "lucide-react";
import HeroCarousel from "@/components/hero-carousel";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <HeroCarousel />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
              Guiding every interaction and decision we make
            </p>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Compassion",
                desc: "Deep empathy and care in every interaction",
                color: "text-red-500",
              },
              {
                icon: Award,
                title: "Professional Excellence",
                desc: "High standards of expertise and service",
                color: "text-yellow-600",
              },
              {
                icon: Shield,
                title: "Confidentiality",
                desc: "Your privacy and trust are paramount",
                color: "text-blue-500",
              },
              {
                icon: Users,
                title: "Empathy",
                desc: "Understanding and validation of your journey",
                color: "text-green-600",
              },
              {
                icon: Zap,
                title: "Advocacy",
                desc: "Supporting mental health awareness and change",
                color: "text-accent",
              },
              {
                icon: Lightbulb,
                title: "Hope & Healing",
                desc: "Empowering transformation and growth",
                color: "text-amber-500",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-8 bg-card rounded-xl text-center hover:shadow-lg transition-shadow border border-border group"
              >
                <div
                  className={`${value.color} mb-4 mx-auto w-fit group-hover:scale-110 transition-transform`}
                >
                  <value.icon size={40} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/african-woman-youth-counselor-supportive.jpg"
                alt="Professional Support"
                width={500}
                height={500}
                className="rounded-xl shadow-lg"
                quality={85}
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Why Choose Life Changers Care?
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  "Licensed mental health professionals with years of experience",
                  "Tailored treatment plans for each individual and family",
                  "Culturally sensitive approach rooted in African values",
                  "Safe, confidential, and judgment-free environment",
                  "Flexible scheduling for busy professionals and families",
                  "Proven track record of positive outcomes",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <Check
                      className="text-accent flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Learn More About Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "5000+", label: "Lives Transformed" },
              { number: "99%", label: "Client Satisfaction" },
              { number: "50+", label: "Professional Staff" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-5xl font-bold mb-2 text-accent">
                  {stat.number}
                </p>
                <p className="text-lg text-primary-foreground/90">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Comprehensive mental health solutions tailored to your unique
              needs. Click on any service to learn more.
            </p>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Brain,
                title: "Individual Counseling",
                desc: "One-on-one professional therapy sessions",
                id: 1,
              },
              {
                icon: Users,
                title: "Family Therapy",
                desc: "Strengthen relationships and communication",
                id: 2,
              },
              {
                icon: TrendingUp,
                title: "Youth Programs",
                desc: "Support for teens and young adults",
                id: 3,
              },
              {
                icon: Briefcase,
                title: "Corporate Wellness",
                desc: "Employee mental health programs",
                id: 4,
              },
              {
                icon: Heart,
                title: "Group Support",
                desc: "Healing through shared experiences",
                id: 5,
              },
              {
                icon: Shield,
                title: "Crisis Support",
                desc: "Specialized trauma and crisis care",
                id: 6,
              },
            ].map((service) => (
              <Link key={service.id} href={`/services/${service.id}`}>
                <div className="bg-card p-8 rounded-xl border border-border hover:shadow-lg hover:border-accent transition-all cursor-pointer h-full group">
                  <service.icon
                    className="text-accent mb-4 group-hover:scale-110 transition-transform"
                    size={40}
                  />
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-4">
                    {service.desc}
                  </p>
                  <p className="text-accent font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Learn More <ArrowRight size={16} />
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              View All Services in Detail
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Success Stories
            </h2>
            <p className="text-foreground/70">
              Real transformations from real people
            </p>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                quote:
                  "Life Changers Care transformed my perspective on mental health. The compassion and professionalism is unmatched.",
                author: "Ngozi, Lagos",
              },
              {
                quote:
                  "My family was falling apart. After therapy, we've rebuilt communication and trust. Highly recommended!",
                author: "Chukwu, Port Harcourt",
              },
              {
                quote:
                  "The best investment I made was in my mental health. I can finally sleep peacefully and enjoy life again.",
                author: "Amara, Abuja",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4 justify-center">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-accent text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-foreground/80 italic mb-6">{`"${testimonial.quote}"`}</p>
                <p className="font-semibold text-primary text-center">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Read More Success Stories
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Take the first step towards better mental health and wellness today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            Schedule a Consultation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
