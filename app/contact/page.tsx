"use client";

import type React from "react";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceInterest: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        serviceInterest: "",
        message: "",
      });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/african-hands-reaching-support-connection.jpg"
            alt="Background"
            fill
            className="object-cover"
            quality={85}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            We're here to listen, support, and guide you on your mental wellness
            journey
          </p>
        </div>
      </section>

      {/* Contact Information */}
      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: MapPin,
                title: "Visit Us",
                details: [
                  "Suite 35, Shoprite Mall",
                  "Adeniran Ogunsanya Street, Surulere",
                  "Lagos 100001, Nigeria",
                ],
              },
              {
                icon: Phone,
                title: "Call Us",
                details: [
                  "0810 461 3357",
                  "Mon – Fri: 9AM – 6PM",
                  "Weekend emergency support available",
                ],
              },
              {
                icon: Mail,
                title: "Email Us",
                details: ["lifechanger26@gmail.com"],
              },
            ].map((contact, i) => (
              <div
                key={i}
                className="bg-card p-8 rounded-xl border border-border text-center hover:shadow-lg transition-shadow"
              >
                <contact.icon className="text-accent mx-auto mb-4" size={40} />
                <h3 className="text-xl font-bold text-primary mb-4">
                  {contact.title}
                </h3>
                <div className="space-y-2 text-foreground/80 text-sm">
                  {contact.details.map((detail, j) => (
                    <p key={j}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-semibold text-foreground mb-2"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-semibold text-foreground mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="serviceInterest"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Service of Interest
                  </label>
                  <select
                    id="serviceInterest"
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a service</option>
                    <option value="individual">Individual Counseling</option>
                    <option value="family">Family & Couples Therapy</option>
                    <option value="youth">Youth Programs</option>
                    <option value="corporate">Organizational Wellness</option>
                    <option value="group">Group Therapy</option>
                    <option value="trauma">Trauma Support</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us about your needs and how we can help..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 disabled:bg-primary/50 transition-colors"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm flex gap-3 items-start">
                    <CheckCircle size={20} className="flex-shrink-0" />
                    <div>
                      <p className="font-semibold">
                        Message Sent Successfully!
                      </p>
                      <p>
                        Thank you for reaching out! We'll respond within 24
                        hours.
                      </p>
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                    There was an error submitting the form. Please try again.
                  </div>
                )}
              </form>
            </div>

            {/* Image & Info */}
            <div className="space-y-8">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/african-office-wellness-environment-calm.jpg"
                  alt="Our Office"
                  fill
                  className="object-cover"
                  quality={85}
                />
              </div>

              <div className="bg-card p-8 rounded-xl border border-border">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-4 text-foreground/80">
                  <li className="flex gap-3 items-start">
                    <span className="text-accent font-bold text-xl flex-shrink-0">
                      1
                    </span>
                    <span>
                      <strong>Initial Contact:</strong> We'll respond within 24
                      hours to acknowledge your message
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-accent font-bold text-xl flex-shrink-0">
                      2
                    </span>
                    <span>
                      <strong>Consultation:</strong> We'll discuss your needs
                      and find the best service for you
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-accent font-bold text-xl flex-shrink-0">
                      3
                    </span>
                    <span>
                      <strong>Scheduling:</strong> We'll work with you to find
                      convenient appointment times
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-accent font-bold text-xl flex-shrink-0">
                      4
                    </span>
                    <span>
                      <strong>Confidentiality:</strong> Your privacy is
                      protected under professional standards
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary text-primary-foreground p-8 rounded-xl mt-8">
                <div className="flex gap-4 items-start mb-4">
                  <AlertCircle
                    className="text-accent flex-shrink-0"
                    size={28}
                  />
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      Emergency Support
                    </h3>
                    <p className="text-sm text-primary-foreground/90 mb-4">
                      If you're experiencing a mental health crisis or
                      emergency, please contact emergency services or reach out
                      to our 24/7 crisis line immediately.
                    </p>
                    <p className="font-bold text-accent">
                      Crisis Hotline: +234 XXXX XXXX
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How much do your services cost?",
                answer:
                  "Our pricing varies based on service type. Individual sessions start at ₦50,000. We offer payment plans and sliding scale fees for those with financial constraints.",
              },
              {
                question: "Is my information confidential?",
                answer:
                  "Absolutely. We maintain strict confidentiality within professional and legal standards. Your privacy is paramount to us.",
              },
              {
                question: "How long until I see results?",
                answer:
                  "Results vary by individual, but most clients report feeling better after 4-6 sessions. Mental health is a journey—we support you at your own pace.",
              },
              {
                question: "Can I access services virtually?",
                answer:
                  "Yes! We offer in-person, virtual, and phone sessions. Choose what works best for your lifestyle and needs.",
              },
              {
                question: "Do you work with insurance?",
                answer:
                  "We can provide documentation for insurance claims. Contact us to discuss your specific insurance coverage.",
              },
              {
                question: "What if I miss an appointment?",
                answer:
                  "We understand life happens. We require 24-hour notice for cancellations to avoid cancellation fees.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="bg-card rounded-lg border border-border overflow-hidden group hover:shadow-md transition-shadow"
              >
                <summary className="p-6 cursor-pointer font-semibold text-primary flex justify-between items-center">
                  {faq.question}
                  <span className="text-accent group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="px-6 pb-6 text-foreground/80 border-t border-border">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Join Thousands Who've Started Their Healing Journey
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Your first step towards mental wellness is just a message away
          </p>
          <button
            onClick={() =>
              document
                .querySelector("#firstName")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            Get Started Today
          </button>
        </div>
      </section>
    </main>
  );
}
