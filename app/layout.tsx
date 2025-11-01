import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FBDTravels - Luxury Tour & Holiday Packages in India & Abroad",
  description:
    "Explore premium travel packages with FBDTravels. We offer luxury trips to Dubai, Thailand, Bali, Kashmir, and more. Discover unforgettable experiences with personalized itineraries and professional travel assistance.",
  keywords: [
    "FBDTravels",
    "Luxury Travel",
    "Holiday Packages",
    "Dubai Tour",
    "Thailand Trip",
    "Bali Vacation",
    "India Tours",
    "Faridabad Travel Agency",
    "Travel Booking",
    "Tour Packages",
    "Couple Trip",
    "Family Vacation",
    "Group Tours",
  ],
  metadataBase: new URL("https://www.fbdtravels.com"),
  alternates: {
    canonical: "https://www.fbdtravels.com",
  },
  openGraph: {
    title: "FBDTravels - Luxury Travel & Tour Packages",
    description:
      "Book your next luxury trip with FBDTravels. Explore Dubai, Thailand, Bali, and India with exclusive packages.",
    url: "https://www.fbdtravels.com",
    siteName: "FBDTravels",
    images: [
      {
        url: "/logo.png",
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
      "Plan your dream vacation with FBDTravels. Explore luxury destinations like Dubai, Thailand, and Bali.",
    creator: "@fbdtravels",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  themeColor: "#facc15",
  generator: "GreaterTechHub",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon and basic SEO */}
        <link rel="icon" href="/logo.png" sizes="any" type="image/png" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="FBDTravels" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
