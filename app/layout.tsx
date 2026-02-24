import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "FBDTravels - Luxury Tour & Holiday Packages in India & Abroad",
  description:
    "Explore premium travel packages with FBDTravels. We offer luxury trips to Dubai, Thailand, Bali, Kashmir, Lakshadweep, Maldives, and more. Discover unforgettable experiences with personalized itineraries and professional travel assistance.",
  keywords: [
    "FBDTravels",
    "Luxury Travel",
    "Holiday Packages",
    "Dubai Tour",
    "Thailand Trip",
    "Bali Vacation",
    "Kashmir Packages",
    "Maldives Honeymoon",
    "Lakshadweep Tours",
    "India Luxury Tours",
    "Faridabad Travel Agency",
  ],
  metadataBase: new URL("https://www.fbdtravels.com"),
  alternates: {
    canonical: "https://www.fbdtravels.com",
  },
  openGraph: {
    title: "FBDTravels - Luxury Travel & Tour Packages",
    description:
      "Book your next luxury trip with FBDTravels. Explore Dubai, Thailand, Bali, Kashmir, Maldives, and India with exclusive packages.",
    url: "https://www.fbdtravels.com",
    siteName: "FBDTravels",
    images: [
      {
        url: "/logo.png",  // agar public/logo.png hai toh yeh use karo (openGraph ke liye)
        width: 512,
        height: 512,
        alt: "FBDTravels Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FBDTravels - Luxury Travel & Holiday Packages",
    description:
      "Plan your dream vacation with FBDTravels. Explore luxury destinations like Dubai, Thailand, Bali, Kashmir, and more.",
    images: ["/logo.png"],
  },
  // icons field mat daalo → app/icon.png se auto ho jayega
  themeColor: "#facc15",
  generator: "GreaterTechHub",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        {/* No manual favicon here – Next.js auto-adds from app/icon.png */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="FBDTravels" />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}