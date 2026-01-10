"use client"

import Image from "next/image"
import { BookOpen, MessageCircle, FileText, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ResourcesPage() {
  const articles = [
    {
      id: 1,
      title: "Understanding Anxiety: Causes and Coping Strategies",
      excerpt: "Learn about anxiety disorders and discover evidence-based techniques to manage symptoms effectively.",
      category: "Mental Health",
      readTime: "5 min read",
      date: "January 8, 2025",
      image: "/article-anxiety-african-mental-health.jpg",
    },
    {
      id: 2,
      title: "Building Resilience: A Guide to Emotional Strength",
      excerpt:
        "Develop emotional resilience through practical exercises and mindset shifts that empower lasting change.",
      category: "Personal Growth",
      readTime: "8 min read",
      date: "January 5, 2025",
      image: "/article-resilience-african-strength-growth.jpg",
    },
    {
      id: 3,
      title: "Family Communication: Breaking Patterns and Building Connection",
      excerpt: "Transform family relationships through improved communication and conflict resolution techniques.",
      category: "Relationships",
      readTime: "6 min read",
      date: "December 28, 2024",
      image: "/article-family-communication-african-unity.jpg",
    },
    {
      id: 4,
      title: "Workplace Stress Management for Professionals",
      excerpt:
        "Navigate workplace stress and maintain work-life balance with practical strategies for busy professionals.",
      category: "Work & Career",
      readTime: "7 min read",
      date: "December 22, 2024",
      image: "/article-workplace-stress-african-professional.jpg",
    },
    {
      id: 5,
      title: "Supporting Youth Mental Health: A Parent's Guide",
      excerpt: "Understand teen mental health challenges and learn how to support young people effectively.",
      category: "Youth & Family",
      readTime: "9 min read",
      date: "December 15, 2024",
      image: "/article-youth-mental-health-african-parents.jpg",
    },
    {
      id: 6,
      title: "Trauma Recovery: Healing from Difficult Experiences",
      excerpt: "A compassionate guide to understanding trauma and embarking on the healing journey.",
      category: "Trauma & Recovery",
      readTime: "10 min read",
      date: "December 8, 2024",
      image: "/article-trauma-recovery-african-healing.jpg",
    },
  ]

  const resources = [
    {
      icon: BookOpen,
      title: "Self-Help Guides",
      description: "Comprehensive guides on various mental health topics for self-directed learning",
      count: "12 guides",
    },
    {
      icon: MessageCircle,
      title: "Community Forum",
      description: "Connect with others, share experiences, and learn from community discussions",
      count: "Active daily",
    },
    {
      icon: FileText,
      title: "Downloadable Resources",
      description: "Worksheets, journals, and tools for self-reflection and growth",
      count: "20+ resources",
    },
  ]

  return (
    <main className="pt-20">
      {/* Hero */}
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Resources & Insights</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Knowledge and tools to support your mental health journey
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Knowledge Center</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {resources.map((resource, i) => (
              <div
                key={i}
                className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow text-center"
              >
                <resource.icon className="text-accent mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-primary mb-2">{resource.title}</h3>
                <p className="text-foreground/70 text-sm mb-4">{resource.description}</p>
                <p className="text-accent font-semibold text-sm">{resource.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles/Blog */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Latest Articles</h2>
            <p className="text-foreground/70">Expert insights and practical guidance for your wellness journey</p>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link key={article.id} href={`/resources/${article.id}`}>
                <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all group h-full flex flex-col">
                  {/* Article Image */}
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      quality={85}
                    />
                  </div>

                  {/* Article Content */}
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-foreground/60">{article.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-foreground/70 text-sm mb-4 flex-1 line-clamp-2">{article.excerpt}</p>
                    <div className="flex justify-between items-center pt-4 border-t border-border">
                      <span className="text-xs text-foreground/50">{article.date}</span>
                      <span className="text-accent font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Read More <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready for Professional Support?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Combine these resources with professional guidance for optimal results
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            Schedule a Session
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
