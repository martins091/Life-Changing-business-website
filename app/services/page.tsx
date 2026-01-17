"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Brain,
  Briefcase,
  AlertTriangle,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: 7,
      title: "Substance Use Disorder (SUD) Support",
      icon: AlertTriangle,
      shortDesc:
        "Compassionate care for youth and adults facing substance challenges",
      fullDesc:
        "Our licensed SUD professionals provide confidential assessment, therapy, and support for individuals struggling with substance use concerns. We focus on root causes, emotional well-being, relapse prevention, and building healthier coping skills.",
      image: "/african-woman-youth-counselor-supportive.jpg",
      benefits: [
        "Specialized adolescent-focused SUD treatment",
        "Relapse prevention and recovery planning",
        "Family involvement and education",
        "Safe, stigma-free environment",
      ],
    },

    {
      id: 1,
      title: "Individual Counseling & Therapy",
      icon: Brain,
      shortDesc: "One-on-one professional support for personal growth",
      fullDesc:
        "Our experienced therapists provide confidential, evidence-based counseling for anxiety, depression, trauma, relationship issues, career challenges, and personal development. We use various therapeutic approaches tailored to your unique needs.",
      image: "/african-individual-therapy-session-private.jpg",
      benefits: [
        "Personalized treatment plans",
        "Evidence-based approaches",
        "Flexible scheduling",
        "Confidential environment",
      ],
    },
    {
      id: 2,
      title: "Family & Couples Therapy",
      icon: Users,
      shortDesc: "Heal relationships and strengthen family bonds",
      fullDesc:
        "We help families and couples navigate conflict, improve communication, and rebuild trust. Our family therapists specialize in resolving parenting challenges, marriage difficulties, sibling conflicts, and intergenerational issues.",
      image: "/african-family-counseling-session-unity.jpg",
      benefits: [
        "Improved communication",
        "Conflict resolution",
        "Trust building",
        "Lasting relationships",
      ],
    },
    {
      id: 3,
      title: "Youth & Adolescent Programs",
      icon: Users,
      shortDesc: "Specialized support for teens and young adults",
      fullDesc:
        "Understanding the unique challenges young people face, we offer programs addressing academic stress, peer pressure, identity issues, emotional regulation, and life transitions. Our youth-centered approach builds resilience and confidence.",
      image: "/african-youth-support-group-empowerment.jpg",
      benefits: [
        "Age-appropriate strategies",
        "Peer support groups",
        "Life skills training",
        "Mental resilience building",
      ],
    },

    {
      id: 5,
      title: "Group Therapy & Support Circles",
      icon: Users,
      shortDesc: "Powerful healing through shared experiences",
      fullDesc:
        "Join supportive communities working through similar challenges. Our group programs address depression, grief, parenting, anxiety, trauma recovery, and life transitions. The power of shared experience accelerates healing.",
      image: "/african-support-group-circle-community.jpg",
      benefits: [
        "Reduced isolation",
        "Peer support",
        "Cost effective",
        "Community connection",
      ],
    },
    {
      id: 6,
      title: "Trauma & Crisis Support",
      icon: AlertTriangle,
      shortDesc: "Specialized care for trauma and acute crisis",
      fullDesc:
        "We provide immediate and ongoing support for individuals experiencing trauma, grief, loss, or crisis. Our trauma-informed approach helps you process difficult experiences and rebuild sense of safety.",
      image: "/african-crisis-support-compassionate-care.jpg",
      benefits: [
        "Trauma processing",
        "Crisis intervention",
        "Safety planning",
        "Recovery support",
      ],
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/african-healthcare-professionals-unity.jpg"
            alt="Background"
            fill
            className="object-cover"
            quality={85}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Comprehensive mental health and wellness solutions tailored to your
            unique needs
          </p>
        </div>
      </section>

      {/* Services Grid with Links to Details */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              What We Offer
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Click on any service to learn more details and how we can help you
            </p>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <Link key={service.id} href={`/services/${service.id}`}>
                <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl hover:border-accent transition-all duration-300 cursor-pointer h-full flex flex-col group">
                  <div className="relative h-48 bg-primary/10 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-accent mb-3 group-hover:scale-110 transition-transform">
                      <service.icon size={40} />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-foreground/70 mb-4 flex-1">
                      {service.shortDesc}
                    </p>
                    <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                      Learn More <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              How It Works
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                desc: "Schedule a confidential consultation to discuss your needs and goals.",
              },
              {
                step: "2",
                title: "Assessment",
                desc: "Our professionals conduct a thorough assessment to understand your situation.",
              },
              {
                step: "3",
                title: "Personalized Plan",
                desc: "We create a tailored treatment plan designed specifically for you.",
              },
              {
                step: "4",
                title: "Ongoing Support",
                desc: "Regular sessions and adjustments ensure continuous progress and growth.",
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-card p-8 rounded-xl border border-border text-center">
                  <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground/70">{item.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg
                      className="w-8 h-8 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Formats */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Flexible Service Delivery
            </h2>
            <p className="text-foreground/70">
              Access care in the way that works best for you
            </p>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏥",
                title: "In-Person Sessions",
                desc: "Visit our comfortable, private offices for face-to-face therapy in a safe, welcoming environment.",
              },
              {
                icon: "💻",
                title: "Virtual Sessions",
                desc: "Receive professional care from the comfort of your home via secure video conferencing.",
              },
              {
                icon: "📞",
                title: "Phone Sessions",
                desc: "Connect with your therapist via confidential phone calls for flexible, accessible support.",
              },
            ].map((format, i) => (
              <div
                key={i}
                className="bg-card p-8 rounded-xl border border-border text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{format.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {format.title}
                </h3>
                <p className="text-foreground/70 text-sm">{format.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Transparent Pricing
            </h2>
            <p className="text-foreground/70">
              Investment in your mental health
            </p>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Individual Sessions",
                price: "₦50,000",
                duration: "per 60-minute session",
                features: [
                  "Confidential 1-on-1 therapy",
                  "Flexible scheduling",
                  "Initial assessment included",
                ],
              },
              {
                name: "Family Packages",
                price: "₦150,000",
                duration: "per month (4 sessions)",
                features: [
                  "Family or couples therapy",
                  "Customized treatment plan",
                  "Crisis support included",
                ],
              },
              {
                name: "Corporate Programs",
                price: "Custom",
                duration: "based on organization size",
                features: [
                  "Employee wellness training",
                  "Leadership coaching",
                  "Organizational consultation",
                ],
              },
            ].map((plan, i) => (
              <div
                key={i}
                className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {plan.name}
                </h3>
                <p className="text-3xl font-bold text-accent mb-1">
                  {plan.price}
                </p>
                <p className="text-sm text-foreground/70 mb-6">
                  {plan.duration}
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li
                      key={j}
                      className="text-sm text-foreground/80 flex gap-2"
                    >
                      <span className="text-primary font-bold">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-foreground/70 mb-6">
              Financial constraints shouldn't prevent you from getting care
            </p>
            <p className="text-sm text-foreground/70 mb-6">
              We offer sliding scale fees, payment plans, and scholarship
              opportunities for those in need.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Book your consultation today and take the first step towards better
            mental health
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors inline-block"
            >
              Schedule Now
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const TrendingUp = Users; // placeholder
