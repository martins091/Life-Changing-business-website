"use client"

import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft, Check, Users, Brain, Briefcase, AlertTriangle, ArrowRight } from "lucide-react"

const servicesData = [
  {
    id: 1,
    title: "Individual Counseling & Therapy",
    icon: Brain,
    shortDesc: "One-on-one professional support",
    fullDesc:
      "Our experienced therapists provide confidential, evidence-based counseling for anxiety, depression, trauma, relationship issues, career challenges, and personal development.",
    image: "/african-individual-therapy-session-private.jpg",
    benefits: [
      "Personalized treatment plans",
      "Evidence-based therapeutic approaches",
      "Flexible scheduling options",
      "Completely confidential environment",
      "Professional and empathetic support",
      "Regular progress tracking",
    ],
    process: [
      {
        step: 1,
        title: "Initial Assessment",
        desc: "Comprehensive evaluation of your needs, background, and goals in a safe environment",
      },
      {
        step: 2,
        title: "Treatment Planning",
        desc: "We develop a personalized plan tailored to your specific challenges and objectives",
      },
      {
        step: 3,
        title: "Active Therapy",
        desc: "Regular sessions using evidence-based techniques to facilitate healing and growth",
      },
      {
        step: 4,
        title: "Progress Review",
        desc: "Continuous monitoring and adjustment of your treatment plan based on your progress",
      },
    ],
    pricing: "₦50,000 per 60-minute session",
    duration: "Typically 8-16 sessions, but varies based on individual needs",
    delivery: ["In-person", "Virtual", "Phone"],
    whyChoose: [
      "Specialized training in multiple therapeutic modalities",
      "Proven success rate with various mental health conditions",
      "Culturally competent approach respecting Nigerian values",
      "Commitment to your long-term wellbeing",
    ],
  },
  {
    id: 2,
    title: "Family & Couples Therapy",
    icon: Users,
    shortDesc: "Heal relationships and strengthen bonds",
    fullDesc:
      "We help families and couples navigate conflict, improve communication, and rebuild trust through evidence-based family therapy approaches.",
    image: "/african-family-counseling-session-unity.jpg",
    benefits: [
      "Improved family communication",
      "Conflict resolution strategies",
      "Stronger relationship bonds",
      "Better understanding between members",
      "Healing from past hurts",
      "Prevention of future problems",
    ],
    process: [
      {
        step: 1,
        title: "Family Assessment",
        desc: "Understanding family dynamics, patterns, and specific concerns",
      },
      {
        step: 2,
        title: "Goal Setting",
        desc: "Collaboratively defining what healing and improvement looks like for your family",
      },
      {
        step: 3,
        title: "Active Sessions",
        desc: "Facilitated conversations and exercises to improve relationships",
      },
      {
        step: 4,
        title: "Integration",
        desc: "Learning new patterns and supporting long-term family wellness",
      },
    ],
    pricing: "₦150,000 per month (4 sessions)",
    duration: "Typically 3-6 months, depending on family needs",
    delivery: ["In-person", "Virtual"],
    whyChoose: [
      "Expert in family system dynamics",
      "Experience with diverse family structures",
      "Culturally sensitive to Nigerian family values",
      "Proven strategies for relationship healing",
    ],
  },
  {
    id: 3,
    title: "Youth & Adolescent Programs",
    icon: Brain,
    shortDesc: "Support for teens and young adults",
    fullDesc:
      "Specialized programs addressing the unique challenges young people face including academic stress, peer pressure, identity issues, and life transitions.",
    image: "/african-youth-support-group-empowerment.jpg",
    benefits: [
      "Age-appropriate support and strategies",
      "Peer support group connections",
      "Life skills development",
      "Mental resilience building",
      "Academic performance improvement",
      "Identity and self-esteem development",
    ],
    process: [
      {
        step: 1,
        title: "Youth Assessment",
        desc: "Understanding their specific challenges, interests, and strengths",
      },
      {
        step: 2,
        title: "Customized Program",
        desc: "Design relevant interventions matching their developmental stage",
      },
      {
        step: 3,
        title: "Peer Connection",
        desc: "Optional group sessions for shared learning and support",
      },
      {
        step: 4,
        title: "Empowerment",
        desc: "Building confidence, resilience, and healthy coping skills",
      },
    ],
    pricing: "₦40,000 per session (special youth rates)",
    duration: "Flexible based on specific needs",
    delivery: ["In-person", "Virtual"],
    whyChoose: [
      "Specialists in adolescent psychology",
      "Understanding of modern youth challenges",
      "Non-judgmental and relatable approach",
      "Focus on building strengths and resilience",
    ],
  },
  {
    id: 4,
    title: "Organizational & Corporate Wellness",
    icon: Briefcase,
    shortDesc: "Mental health support for organizations",
    fullDesc:
      "Comprehensive workplace mental health programs including employee wellness, stress management, and organizational development.",
    image: "/african-corporate-team-wellness-success.jpg",
    benefits: [
      "Reduced employee burnout and stress",
      "Improved productivity and engagement",
      "Healthier workplace culture",
      "Reduced absenteeism",
      "Better employee retention",
      "Enhanced team collaboration",
    ],
    process: [
      {
        step: 1,
        title: "Organizational Assessment",
        desc: "Evaluate current wellness needs and workplace mental health climate",
      },
      {
        step: 2,
        title: "Program Design",
        desc: "Create customized wellness initiatives for your organization",
      },
      {
        step: 3,
        title: "Implementation",
        desc: "Deliver training, workshops, and ongoing support programs",
      },
      {
        step: 4,
        title: "Measurement",
        desc: "Track outcomes and continuously improve programs",
      },
    ],
    pricing: "Custom packages based on organization size",
    duration: "Ongoing programs (typically 6-12 months minimum)",
    delivery: ["On-site", "Hybrid", "Virtual"],
    whyChoose: [
      "Extensive experience with Nigerian businesses",
      "Understanding of workplace dynamics",
      "Customizable solutions",
      "Proven impact on organizational health",
    ],
  },
  {
    id: 5,
    title: "Group Therapy & Support Circles",
    icon: Users,
    shortDesc: "Healing through shared experiences",
    fullDesc:
      "Supportive communities where people work through similar challenges together, accelerating healing through shared experience.",
    image: "/african-support-group-circle-community.jpg",
    benefits: [
      "Reduced feelings of isolation",
      "Peer support and understanding",
      "Cost-effective mental health support",
      "Community connection and belonging",
      "Shared learning from others' experiences",
      "Group accountability and motivation",
    ],
    process: [
      {
        step: 1,
        title: "Group Selection",
        desc: "Choose a group aligned with your specific challenges",
      },
      {
        step: 2,
        title: "Initial Meeting",
        desc: "Get oriented and build trust with group members",
      },
      {
        step: 3,
        title: "Active Participation",
        desc: "Share, support others, and learn from group dynamics",
      },
      {
        step: 4,
        title: "Growth & Healing",
        desc: "Experience transformation through community support",
      },
    ],
    pricing: "₦15,000 per session or ₦50,000/month unlimited",
    duration: "Ongoing, members can join anytime",
    delivery: ["In-person", "Virtual"],
    whyChoose: [
      "Therapeutic power of group support",
      "Professional facilitators",
      "Safe, confidential space",
      "Diverse support group options",
    ],
  },
  {
    id: 6,
    title: "Trauma & Crisis Support",
    icon: AlertTriangle,
    shortDesc: "Specialized trauma care",
    fullDesc:
      "Immediate and ongoing support for individuals experiencing trauma, grief, loss, or mental health crises with a trauma-informed approach.",
    image: "/african-crisis-support-compassionate-care.jpg",
    benefits: [
      "Immediate crisis intervention",
      "Trauma processing and healing",
      "Safety planning",
      "PTSD recovery support",
      "Grief and loss counseling",
      "Long-term recovery support",
    ],
    process: [
      {
        step: 1,
        title: "Crisis Assessment",
        desc: "Rapid evaluation and immediate support to ensure safety",
      },
      {
        step: 2,
        title: "Stabilization",
        desc: "Grounding techniques and coping strategies",
      },
      {
        step: 3,
        title: "Trauma Processing",
        desc: "Evidence-based trauma therapy to process experiences",
      },
      {
        step: 4,
        title: "Recovery & Integration",
        desc: "Build resilience and move toward healing",
      },
    ],
    pricing: "Variable based on service intensity",
    duration: "Short-term crisis to long-term recovery",
    delivery: ["In-person", "Virtual", "Phone"],
    whyChoose: [
      "Trauma-informed specialized training",
      "24/7 crisis availability",
      "Compassionate emergency response",
      "Proven recovery protocols",
    ],
  },
]

export default function ServiceDetailPage() {
  const params = useParams()
  const serviceId = Number.parseInt(params.id as string)
  const service = servicesData.find((s) => s.id === serviceId)

  if (!service) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Service Not Found</h1>
          <Link href="/services" className="text-accent font-semibold flex items-center gap-2 justify-center">
            <ArrowLeft size={18} />
            Back to Services
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            fill
            className="object-cover"
            quality={85}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6"
          >
            <ArrowLeft size={18} />
            Back to Services
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{service.title}</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">{service.fullDesc}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                width={500}
                height={500}
                className="rounded-xl shadow-lg"
                quality={85}
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">What This Service Includes</h2>
              <div className="space-y-4 mb-8">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span className="text-foreground/80">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="bg-accent/10 border border-accent/20 p-6 rounded-lg">
                <p className="text-sm text-foreground/70 mb-2">Pricing</p>
                <p className="text-2xl font-bold text-accent mb-4">{service.pricing}</p>
                <p className="text-sm text-foreground/70">{service.duration}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">How It Works</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {service.process.map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-card p-8 rounded-xl border border-border text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/70">{item.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="text-accent" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Methods */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Delivery Methods</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.delivery.map((method, i) => (
              <div
                key={i}
                className="bg-card p-8 rounded-xl border border-border text-center hover:shadow-lg transition-shadow"
              >
                <Check className="text-accent mx-auto mb-4" size={40} />
                <h3 className="text-xl font-bold text-primary">{method}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose This Service */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Why Choose Our {service.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.whyChoose.map((reason, i) => (
              <div key={i} className="bg-card p-8 rounded-xl border border-border flex gap-4">
                <Check className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-foreground/80">{reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Schedule your session and begin your journey towards healing and growth today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            Book Now
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
