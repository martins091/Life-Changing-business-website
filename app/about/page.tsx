"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Target,
  Lightbulb,
  Award,
  Users,
  Heart,
  Brain,
  Check,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/african-communal-gathering-support-ubuntu-diversity.jpg"
            alt="Background"
            fill
            className="object-cover"
            quality={85}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Life Changers Care
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            A beacon of hope dedicated to mental health transformation across
            Nigeria
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="text-4xl font-bold text-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Life Changers Care & LIFT Initiative was born from a vision to
                  revolutionize mental health support in Nigeria. Recognizing
                  the critical gap in accessible, compassionate mental wellness
                  services, our team came together with a shared mission: to
                  empower individuals, families, and organizations to achieve
                  mental health transformation.
                </p>
                <p>
                  What started as a small group of dedicated mental health
                  professionals has grown into a trusted beacon of hope for
                  thousands across Nigeria. We believe that mental health is not
                  a luxury—it's a fundamental right that every Nigerian deserves
                  access to.
                </p>
                <p>
                  Today, we continue to evolve, innovate, and deepen our impact,
                  always guided by our core values of compassion, professional
                  excellence, and unwavering commitment to our clients'
                  wellbeing.
                </p>
              </div>
            </div>
            <div
              className={`transition-all duration-1000 delay-300 ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <Image
                src="/ceo-life.png"
                alt="Our Team"
                width={500}
                height={500}
                className="rounded-xl shadow-lg"
                quality={85}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Mission & Vision
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-card p-10 rounded-xl border border-border shadow-lg hover:shadow-xl transition-shadow">
              <Target className="text-accent mb-4" size={48} />
              <h3 className="text-2xl font-bold text-primary mb-4">
                Our Mission
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                To provide accessible, compassionate, and professionally
                excellent mental health and wellness services that empower
                individuals, families, youth, and organizations across Nigeria
                to heal, grow, and thrive in every dimension of their lives.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card p-10 rounded-xl border border-border shadow-lg hover:shadow-xl transition-shadow">
              <Lightbulb className="text-accent mb-4" size={48} />
              <h3 className="text-2xl font-bold text-primary mb-4">
                Our Vision
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                A Nigeria where mental health is prioritized, stigma is
                eliminated, and every person has access to quality care that
                transforms lives and builds resilient, healthier communities
                from the ground up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Why We're Different
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Culturally Rooted",
                description:
                  "We honor African values, traditions, and perspectives while delivering world-class mental health care tailored to the Nigerian context.",
              },
              {
                title: "Holistic Approach",
                description:
                  "We treat the whole person—mind, body, and spirit—recognizing the interconnection between physical and mental wellbeing.",
              },
              {
                title: "Evidence-Based",
                description:
                  "Our treatment methods are grounded in the latest psychological research and proven therapeutic frameworks.",
              },
              {
                title: "Accessible & Affordable",
                description:
                  "We believe everyone deserves mental health care. We offer flexible payment options and various service formats.",
              },
              {
                title: "Collaborative Care",
                description:
                  "We work closely with families, organizations, and other healthcare providers to create comprehensive support systems.",
              },
              {
                title: "Results-Driven",
                description:
                  "Our track record speaks for itself—measurable improvements in mental health outcomes and life satisfaction.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-3">
                  {i === 0 && <Heart className="text-accent" size={48} />}
                  {i === 1 && <Brain className="text-accent" size={48} />}
                  {i === 2 && <Award className="text-accent" size={48} />}
                  {i === 3 && <Users className="text-accent" size={48} />}
                  {i === 4 && <Lightbulb className="text-accent" size={48} />}
                  {i === 5 && <Check className="text-accent" size={48} />}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-foreground/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              What Our Clients Say
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Life Changers Care transformed my perspective on mental health. The compassion and professionalism of the team is unmatched.",
                author: "Ngozi, Lagos",
              },
              {
                quote:
                  "I came here broken and left with hope. Their approach is truly culturally sensitive and effective.",
                author: "Chukwu, Port Harcourt",
              },
              {
                quote:
                  "The best investment I made was in my mental health through Life Changers Care. Highly recommended!",
                author: "Amara, Abuja",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-card p-8 rounded-xl border border-border"
              >
                <div className="flex gap-1 mb-4 justify-center">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-accent text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-foreground/80 italic mb-4">{`"${testimonial.quote}"`}</p>
                <p className="font-semibold text-primary">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">
            Join Our Community of Healing
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Take the first step towards transformation today
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
