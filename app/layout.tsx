import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Life Changers Care & LIFT Initiative | Premium Mental Wellness Services Nigeria",
  description:
    "Professional, compassionate mental health care in Nigeria. Individual counseling, family therapy, youth programs, corporate wellness, and more. Healing Minds. Restoring Hope. Transform your life today.",
  keywords:
    "mental health Nigeria, counseling services, therapy Lagos, family therapy, youth mental health, corporate wellness, trauma support",
  openGraph: {
    title: "Life Changers Care & LIFT Initiative",
    description: "Premium mental health and wellness services across Nigeria",
    type: "website",
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${openSans.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
