"use client"

import Image from "next/image"
import { Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      quote:
        "Life Changers Care transformed my perspective on mental health. The compassion and professionalism of the team is unmatched. I came in broken and left with hope.",
      author: "Ngozi Okafor",
      role: "Corporate Professional",
      location: "Lagos",
      image: "/testimonial-person-1.jpg",
      service: "Individual Counseling",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "My family was falling apart. After therapy sessions here, we've rebuilt our communication and trust. Their culturally sensitive approach really resonated with us.",
      author: "Chukwu Adeyemi",
      role: "Business Owner",
      location: "Port Harcourt",
      image: "/testimonial-person-2.jpg",
      service: "Family Therapy",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "The best investment I made was in my mental health through Life Changers Care. Highly recommended! I can finally sleep peacefully again.",
      author: "Amara Hassan",
      role: "Entrepreneur",
      location: "Abuja",
      image: "/testimonial-person-3.jpg",
      service: "Trauma Support",
      rating: 5,
    },
    {
      id: 4,
      quote:
        "As a parent, I was struggling with my teenager. Their youth programs have helped him find confidence and direction. Grateful for this service.",
      author: "Dr. Adekunle Bello",
      role: "Healthcare Professional",
      location: "Lagos",
      image: "/testimonial-person-4.jpg",
      service: "Youth Programs",
      rating: 5,
    },
    {
      id: 5,
      quote:
        "Our company wellness program has been a game-changer. Employee engagement is up, stress is down, and the team feels genuinely cared for.",
      author: "Victoria Okonkwo",
      role: "HR Director",
      location: "Lagos",
      image: "/testimonial-person-5.jpg",
      service: "Corporate Wellness",
      rating: 5,
    },
    {
      id: 6,
      quote:
        "I joined the support group and finally felt less alone. Hearing others' stories and sharing mine has been incredibly healing. A true community.",
      author: "Tunde Adeyemi",
      role: "Creative Professional",
      location: "Ibadan",
      image: "/testimonial-person-6.jpg",
      service: "Group Therapy",
      rating: 5,
    },
  ]

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/african-people-healing-wellness-community-wellness.jpg"
            alt="Background"
            fill
            className="object-cover"
            quality={85}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Success Stories</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Hear from real people who've transformed their lives through our services
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={18} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/80 italic mb-6">{`"${testimonial.quote}"`}</p>
                <div className="border-t border-border pt-6">
                  <p className="font-semibold text-primary text-lg">{testimonial.author}</p>
                  <p className="text-sm text-accent font-medium">{testimonial.role}</p>
                  <p className="text-xs text-foreground/60 mt-1">{testimonial.location}</p>
                  <p className="text-xs text-foreground/50 mt-2 bg-primary/5 px-2 py-1 rounded inline-block mt-3">
                    {testimonial.service}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "5000+", label: "Lives Transformed" },
              { number: "99%", label: "Client Satisfaction" },
              { number: "50+", label: "Dedicated Professionals" },
              { number: "8+", label: "Years of Excellence" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-5xl font-bold mb-2 text-accent">{stat.number}</p>
                <p className="text-lg text-primary-foreground/90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary mb-6">Your Story Could Be Next</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Join thousands who've started their healing journey with Life Changers Care
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Get Started Today
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
