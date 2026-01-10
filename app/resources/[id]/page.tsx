"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Share2, Heart, ArrowRight } from "lucide-react"
import { useState } from "react"

interface ArticleParams {
  params: { id: string }
}

const articles: Record<string, any> = {
  "1": {
    id: 1,
    title: "Understanding Anxiety: Causes and Coping Strategies",
    author: "Dr. Chioma Eze",
    date: "January 8, 2025",
    readTime: "5 min read",
    category: "Mental Health",
    image: "/article-anxiety-african-mental-health.jpg",
    content: `
      Anxiety is one of the most common mental health challenges affecting millions of people today. It's characterized by persistent worry, fear, and physical symptoms that can impact daily life. Understanding the root causes and learning effective coping strategies is essential for managing anxiety effectively.

      Types of Anxiety Disorders

      There are several types of anxiety disorders, each with unique characteristics:

      • Generalized Anxiety Disorder (GAD): Persistent worry about various aspects of daily life
      • Social Anxiety Disorder: Fear of social situations and public scrutiny
      • Panic Disorder: Sudden, intense episodes of fear with physical symptoms
      • Phobias: Extreme fear of specific objects or situations

      Causes of Anxiety

      Anxiety can stem from multiple sources including genetic factors, brain chemistry, life experiences, and chronic stress. Understanding your specific triggers is the first step toward managing anxiety effectively.

      Evidence-Based Coping Strategies

      1. Cognitive Behavioral Therapy (CBT): Identifying and changing negative thought patterns
      2. Mindfulness and Meditation: Grounding techniques to manage present-moment awareness
      3. Physical Exercise: Regular activity reduces anxiety symptoms significantly
      4. Breathing Exercises: Simple techniques like the 4-7-8 breathing method
      5. Professional Support: Working with a therapist provides personalized strategies

      Building Your Support System

      Creating a strong support network of family, friends, and professionals is crucial. Don't hesitate to reach out and seek help when you need it.

      Taking the Next Steps

      If anxiety is affecting your daily life, professional support can make a significant difference. At Life Changers Care, our therapists specialize in anxiety disorders and can help you develop personalized strategies for lasting relief.
    `,
  },
  "2": {
    id: 2,
    title: "Building Resilience: A Guide to Emotional Strength",
    author: "Ngozi Okafor",
    date: "January 5, 2025",
    readTime: "8 min read",
    category: "Personal Growth",
    image: "/article-resilience-african-strength-growth.jpg",
    content: `
      Resilience is the ability to bounce back from challenges and adversity. It's a skill that can be developed and strengthened over time through intentional practice and mindset shifts.

      What is Resilience?

      Resilience isn't about never experiencing difficulty—it's about how you respond to challenges when they arise. Emotionally resilient people don't avoid problems; instead, they face them with courage and adaptability.

      The Four Pillars of Resilience

      1. Self-Awareness: Understanding your emotions, strengths, and limitations
      2. Self-Regulation: Managing your emotions effectively in challenging situations
      3. Social Connection: Building strong relationships and support networks
      4. Purpose: Having clear values and meaning in your life

      Practical Exercises for Building Resilience

      Exercise 1: Mindfulness Meditation
      Start with just 10 minutes daily to increase emotional awareness and reduce stress.

      Exercise 2: Gratitude Practice
      Write down three things you're grateful for each day to shift your perspective.

      Exercise 3: Progressive Exposure
      Gradually face fears and challenges in manageable steps to build confidence.

      Exercise 4: Active Problem-Solving
      Break challenges into smaller, manageable parts and tackle them systematically.

      Mindset Shifts for Lasting Change

      From "This is impossible" to "This is a challenge to overcome"
      From "I can't handle this" to "I'll learn to handle this"
      From "Bad things always happen to me" to "Challenges help me grow"

      The Role of Self-Compassion

      Being kind to yourself during difficult times is essential. Resilience includes treating yourself with the same compassion you'd offer a good friend.

      Your Resilience Journey

      Building emotional strength is a gradual process. With consistent practice and support, you'll develop greater capacity to handle life's challenges.
    `,
  },
  "3": {
    id: 3,
    title: "Family Communication: Breaking Patterns and Building Connection",
    author: "Dr. Amara Nwosu",
    date: "December 28, 2024",
    readTime: "6 min read",
    category: "Relationships",
    image: "/article-family-communication-african-unity.jpg",
    content: `
      Healthy family relationships are built on the foundation of clear, compassionate communication. Many families struggle with patterns of misunderstanding, conflict, and disconnection that can be transformed through improved communication skills.

      Common Communication Patterns That Hurt Families

      • Defensive reactions: Responding with anger or blame instead of listening
      • Stonewalling: Withdrawing or refusing to engage in conversations
      • Criticism: Attacking character instead of addressing specific behaviors
      • Contempt: Showing disrespect or disdain toward family members

      The Four Elements of Healthy Family Communication

      1. Active Listening: Fully focusing on what others are saying without planning your response
      2. Validation: Acknowledging others' feelings and perspectives as valid
      3. Clear Expression: Using "I" statements to express your own needs and feelings
      4. Respect: Honoring boundaries and showing appreciation for differences

      Breaking Negative Patterns

      Step 1: Identify Current Patterns
      Notice how conversations typically go. What triggers conflict?

      Step 2: Commit to Change
      All family members need to agree that change is desired and important.

      Step 3: Practice New Skills
      Start with low-stakes conversations to practice new communication approaches.

      Step 4: Be Patient
      Changing patterns takes time. Celebrate small wins along the way.

      Tools for Better Conversations

      The "Feelings Check-In": Regular conversations about emotional states
      The "Family Meeting": Structured time to discuss household matters
      The "Apology Practice": Learning to acknowledge mistakes and repair relationships
      The "Appreciation Circle": Taking time to recognize what you value in each other

      Conflict Resolution in Families

      Healthy conflict is normal. Use these steps to resolve disagreements constructively:
      - Approach the conversation with curiosity, not judgment
      - Listen to understand, not to win
      - Focus on solutions rather than blame
      - Work toward compromise and mutual understanding

      Creating Connection

      Remember that the goal isn't to eliminate conflict—it's to navigate it together with respect and care. Strong family bonds develop through authentic communication and mutual support.
    `,
  },
  "4": {
    id: 4,
    title: "Workplace Stress Management for Professionals",
    author: "Tunde Adeyemi",
    date: "December 22, 2024",
    readTime: "7 min read",
    category: "Work & Career",
    image: "/article-workplace-stress-african-professional.jpg",
    content: `
      Work-related stress affects nearly 60% of professionals, impacting both mental health and job performance. Developing effective stress management strategies is essential for career longevity and overall wellbeing.

      Understanding Workplace Stress

      Workplace stress results from the demands of your job exceeding your perceived ability to cope. Common sources include heavy workloads, unclear expectations, lack of control, and poor work relationships.

      The Impact of Chronic Stress

      - Decreased productivity and focus
      - Burnout and exhaustion
      - Physical health problems (headaches, insomnia, hypertension)
      - Relationship strain
      - Increased anxiety and depression

      Strategies for Managing Workplace Stress

      1. Time Management
      - Prioritize tasks using the Eisenhower Matrix (urgent vs. important)
      - Break large projects into manageable steps
      - Set realistic deadlines

      2. Boundary Setting
      - Define work hours and stick to them
      - Learn to say "no" to unreasonable requests
      - Create physical separation between work and personal space

      3. Stress-Relief Techniques
      - Take regular breaks throughout the day
      - Practice deep breathing and stretching
      - Go for walks during lunch
      - Use relaxation apps and meditation

      4. Building Support at Work
      - Develop positive relationships with colleagues
      - Communicate openly with your manager
      - Seek mentorship and guidance
      - Participate in team-building activities

      5. Lifestyle Factors
      - Exercise regularly to reduce stress hormones
      - Get adequate sleep (7-9 hours)
      - Maintain a healthy diet
      - Engage in hobbies and personal interests

      When to Seek Professional Help

      If workplace stress is significantly affecting your health or wellbeing, professional support can help. Consider speaking with a therapist if:
      - You're experiencing persistent anxiety or depression
      - Work is affecting your physical health
      - You're having difficulty coping with job demands
      - You're considering leaving your career

      Creating a Sustainable Career

      Long-term success requires balance between ambition and self-care. Investing in your mental health and stress management skills isn't selfish—it's essential for sustainable professional growth.
    `,
  },
  "5": {
    id: 5,
    title: "Supporting Youth Mental Health: A Parent's Guide",
    author: "Dr. Kemi Olusanya",
    date: "December 15, 2024",
    readTime: "9 min read",
    category: "Youth & Family",
    image: "/article-youth-mental-health-african-parents.jpg",
    content: `
      Adolescence is a transformative period filled with changes and challenges. As a parent, understanding youth mental health and how to support your teenager is crucial for their wellbeing.

      Understanding Teenage Mental Health

      Teenagers face unique pressures including academic stress, peer relationships, identity formation, and social media influence. Mental health challenges in teens are increasingly common and deserve serious attention.

      Common Mental Health Challenges in Youth

      • Depression: Persistent sadness affecting mood, energy, and relationships
      • Anxiety: Excessive worry about academics, social situations, or the future
      • Eating Disorders: Unhealthy relationships with food and body image
      • Self-Harm: Using physical injury to cope with emotional pain
      • Substance Use: Using drugs or alcohol to manage emotions

      Warning Signs to Watch For

      - Withdrawal from friends and family
      - Changes in sleep or appetite
      - Declining grades or school attendance
      - Mood swings or irritability
      - Expressing hopelessness or worthlessness
      - Unusual risk-taking behavior
      - Physical complaints without clear cause

      How to Support Your Teen

      1. Create Open Communication
      - Ask open-ended questions
      - Listen without judgment
      - Share your own experiences when appropriate
      - Validate their feelings even if you don't understand

      2. Model Healthy Coping
      - Show how you manage stress
      - Practice self-care openly
      - Seek help when you need it
      - Demonstrate healthy relationships

      3. Set Healthy Boundaries
      - Establish reasonable rules
      - Be consistent with consequences
      - Allow appropriate independence
      - Respect their privacy while monitoring safety

      4. Encourage Healthy Activities
      - Support sports and hobbies
      - Limit screen time
      - Encourage social connection
      - Promote physical activity and sleep

      5. Know When to Seek Help
      Professional support is important if your teen:
      - Shows persistent signs of depression or anxiety
      - Talks about self-harm or suicide
      - Engages in risky behaviors
      - Experiences significant changes in personality or functioning

      Taking Care of Yourself

      Supporting a struggling teen can be emotionally taxing. Remember to:
      - Seek your own support when needed
      - Practice self-compassion
      - Set limits on what you can control
      - Connect with other parents for understanding

      Building a Supportive Home

      Your home environment significantly impacts your teen's mental health. Prioritize open communication, unconditional love, and professional support when needed. Remember that asking for help is a sign of strength.
    `,
  },
  "6": {
    id: 6,
    title: "Trauma Recovery: Healing from Difficult Experiences",
    author: "Dr. Chidinma Okonkwo",
    date: "December 8, 2024",
    readTime: "10 min read",
    category: "Trauma & Recovery",
    image: "/article-trauma-recovery-african-healing.jpg",
    content: `
      Trauma can leave deep emotional and psychological wounds. Understanding trauma and accessing appropriate healing resources is essential for recovery and reclaiming your life.

      What is Trauma?

      Trauma is a psychological response to experiencing or witnessing overwhelming events. It can result from accidents, violence, loss, abuse, or other terrifying experiences that exceed our coping capacity.

      Common Types of Trauma

      • Single-incident trauma: A specific event like an accident or assault
      • Complex trauma: Repeated traumatic experiences, often from childhood
      • Collective trauma: Experiences shared by communities (war, natural disasters)
      • Intergenerational trauma: Effects passed down through families

      Trauma Responses

      Trauma responses vary and may include:
      - Intrusive memories and flashbacks
      - Avoidance of reminders of the trauma
      - Negative changes in thoughts and mood
      - Changes in physical arousal (hypervigilance, sleep issues)
      - Behavioral changes (risky activities, aggression)

      The Healing Process

      Recovery from trauma is not linear. It involves:

      Phase 1: Safety and Stabilization
      Creating a safe environment and learning coping skills

      Phase 2: Processing and Integration
      Addressing traumatic memories with professional support

      Phase 3: Reconnection and Growth
      Rebuilding relationships and finding meaning

      Evidence-Based Trauma Therapies

      1. Trauma-Focused CBT
      Processing traumatic memories and changing trauma-related thoughts

      2. EMDR (Eye Movement Desensitization and Reprocessing)
      Using bilateral stimulation to process traumatic memories

      3. Somatic Experiencing
      Working with the body's nervous system to release trauma

      4. Narrative Therapy
      Rewriting your story to incorporate strength and resilience

      Self-Care During Recovery

      - Maintain physical health through exercise and sleep
      - Practice grounding techniques
      - Engage in creative expression
      - Build supportive relationships
      - Practice self-compassion

      Building Post-Traumatic Growth

      Many trauma survivors experience growth after processing their experiences:
      - Increased appreciation for life
      - Deeper relationships
      - Greater personal strength
      - Spiritual transformation
      - New life directions

      Seeking Professional Support

      Trauma recovery requires professional expertise. Don't hesitate to seek help from trauma-specialized therapists who can provide evidence-based treatment in a safe, supportive environment.

      Your Healing Matters

      Trauma recovery is possible. With appropriate support, time, and tools, you can heal and build a fulfilling life beyond your trauma.
    `,
  },
}

export default function ArticlePage({ params }: ArticleParams) {
  const article = articles[params.id]
  const [liked, setLiked] = useState(false)

  if (!article) {
    return (
      <main className="pt-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Article Not Found</h1>
          <p className="text-foreground/70 mb-8">The article you're looking for doesn't exist.</p>
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Resources
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-20 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          fill
          className="object-cover"
          quality={85}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10 pb-20">
        <div className="bg-background rounded-xl shadow-lg p-8 md:p-12 mb-12">
          {/* Header */}
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Resources
          </Link>

          <div className="mb-6">
            <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
              {article.category}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">{article.title}</h1>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-border text-foreground/70">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span className="font-medium">{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{article.readTime}</span>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            {article.content.split("\n\n").map((paragraph: string, idx: number) => (
              <p key={idx} className="text-foreground/80 mb-6 leading-relaxed whitespace-pre-wrap">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pb-8 border-b border-border mb-8">
            <button
              onClick={() => setLiked(!liked)}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg transition-colors ${
                liked ? "bg-red-100 text-red-600" : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              <Heart size={18} fill={liked ? "currentColor" : "none"} />
              {liked ? "Liked" : "Like this article"}
            </button>
            <button className="flex items-center gap-2 px-6 py-2 rounded-lg bg-muted text-foreground hover:bg-muted/80 transition-colors">
              <Share2 size={18} />
              Share
            </button>
          </div>

          {/* CTA Section */}
          <div className="bg-primary/5 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Ready for Professional Support?</h3>
            <p className="text-foreground/70 mb-6">
              Combine these insights with professional guidance for optimal results
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Schedule a Session
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-primary mb-8">More Resources</h2>
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Explore All Articles
            <ArrowRight size={18} />
          </Link>
        </div>
      </article>
    </main>
  )
}
