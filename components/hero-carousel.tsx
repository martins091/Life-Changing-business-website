"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const heroSlides = [
  {
    id: 1,
    title: "Healing Minds",
    subtitle: "Restoring Hope",
    description:
      "Professional mental health and wellness support for individuals, families, youth, and organizations. Your healing journey starts here.",
    image: "/african-woman-smiling-mental-health-wellness-happy.jpg",
    cta1: "Explore Services",
    cta2: "Get Started",
  },
  {
    id: 2,
    title: "Transform Your Life",
    subtitle: "Start Your Journey Today",
    description:
      "5000+ lives transformed with 99% client satisfaction. Committed to the highest quality mental health care rooted in African values.",
    image: "/african-counselor-woman-listening-empathy.jpg",
    cta1: "Learn More",
    cta2: "Schedule Now",
  },
  {
    id: 3,
    title: "Professional Excellence",
    subtitle: "Compassionate Care",
    description:
      "50+ licensed professionals with years of experience. Flexible scheduling, evidence-based treatments, and a safe environment.",
    image: "/african-doctor-woman-professional-confident.jpg",
    cta1: "Meet Our Team",
    cta2: "Book Session",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlay(false);
  };

  const slide = heroSlides[current];

  return (
    <section className="relative w-full h-screen overflow-hidden bg-primary">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          className="object-cover w-full h-full transition-opacity duration-1000"
          quality={90}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
            {/* Text */}
            <div className="max-w-2xl space-y-6 z-20">
              <p className="text-sm md:text-base font-semibold text-accent tracking-widest uppercase">
                Wellness & Mental Health Support
              </p>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
                {slide.title}
              </h1>

              <h2 className="text-3xl md:text-4xl font-bold text-accent">
                {slide.subtitle}
              </h2>

              <p className="text-base md:text-lg text-primary-foreground/95 leading-relaxed max-w-xl">
                {slide.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 inline-flex items-center gap-2 shadow-lg"
                >
                  {slide.cta1} <ArrowRight size={18} />
                </Link>

                <Link
                  href="/contact"
                  className="px-8 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:bg-primary-foreground/90 transition-all duration-300 inline-flex items-center gap-2 shadow-lg"
                >
                  {slide.cta2}
                </Link>
              </div>
            </div>

            {/* Slide image (desktop only) */}
            <div className="hidden lg:flex justify-center relative z-20 h-full">
              <div className="relative w-full max-w-md h-3/4 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-6 bg-black/20 backdrop-blur-md px-6 py-3 rounded-full">
        {/* Indicators */}
        <div className="flex gap-3">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrent(idx);
                setIsAutoPlay(false);
              }}
              className={`rounded-full transition-all ${
                idx === current
                  ? "w-8 h-2 bg-accent shadow-lg"
                  : "w-2 h-2 bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-2 border-l pl-4 border-white/40">
          <button onClick={prev} className="p-2 hover:bg-white/20 rounded-full">
            <ChevronLeft size={20} />
          </button>
          <button onClick={next} className="p-2 hover:bg-white/20 rounded-full">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
