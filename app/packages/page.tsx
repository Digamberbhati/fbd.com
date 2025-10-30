"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Testimonials } from "@/components/testimonials"
import Link from "next/link"
import { Star, MapPin, Clock, Users } from "lucide-react"

export default function Packages() {
  const packages = [
    {
      id: 1,
      title: "Dubai Luxury Experience",
      location: "Dubai, UAE",
      priceINR: "₹65,000",
      priceUSD: "$780",
      duration: "5 Days / 4 Nights",
      rating: 4.9,
      reviews: 128,
      image: "/dubai-burj-khalifa-luxury-resort.jpg",
      description:
        "Experience the epitome of luxury in Dubai with 5-star accommodations, desert safaris, yacht cruises, and world-class shopping at the Dubai Mall.",
      highlights: ["5-Star Hotel", "Desert Safari", "Yacht Cruise", "Shopping Tour", "Burj Khalifa"],
      groupSize: "2-6 people",
      bestFor: "Luxury seekers & adventure lovers",
      included: ["Flights", "5-Star Hotel", "Daily Breakfast", "Desert Safari", "Yacht Cruise"],
    },
    {
      id: 2,
      title: "India Heritage Tour",
      location: "India (Delhi, Agra, Jaipur)",
      priceINR: "Custom",
      priceUSD: "On Request",
      duration: "7 Days / 6 Nights",
      rating: 4.8,
      reviews: 142,
      image: "/taj-mahal-agra-india-monument.jpg",
      description:
        "Discover India's rich cultural heritage with visits to the iconic Taj Mahal, ancient temples, vibrant markets, and authentic Indian cuisine experiences.",
      highlights: ["Taj Mahal", "Temple Tours", "Palace Visits", "Local Markets", "Cooking Class"],
      groupSize: "2-8 people",
      bestFor: "Culture & history enthusiasts",
      included: ["Flights", "Hotel", "Daily Breakfast", "Guided Tours", "Meals"],
    },
    {
      id: 3,
      title: "Thailand Adventure",
      location: "Thailand (Bangkok, Phuket, Krabi)",
      priceINR: "₹30,000",
      priceUSD: "$360",
      duration: "6 Days / 5 Nights",
      rating: 4.9,
      reviews: 167,
      image: "/thailand-phuket-beach-tropical-island.jpg",
      description:
        "Explore Thailand's vibrant culture, pristine beaches, ancient temples, and thrilling water sports in Bangkok, Phuket, and the stunning Krabi islands.",
      highlights: ["Temple Tours", "Island Hopping", "Beach Resorts", "Water Sports", "Night Markets"],
      groupSize: "2-10 people",
      bestFor: "Beach lovers & adventure seekers",
      included: ["Flights", "Resort Stay", "Daily Breakfast", "Island Tours", "Water Activities"],
    },
    {
      id: 4,
      title: "Bali Paradise Retreat",
      location: "Bali, Indonesia",
      priceINR: "₹30,000",
      priceUSD: "$360",
      duration: "5 Days / 4 Nights",
      rating: 4.8,
      reviews: 187,
      image: "/bali-rice-terraces-temple-tropical.jpg",
      description:
        "Relax in Bali with yoga retreats, ancient temple visits, stunning rice terraces, beachfront resorts, and traditional Balinese spa treatments.",
      highlights: ["Yoga Retreat", "Temple Tours", "Rice Terraces", "Beach Resort", "Spa Treatment"],
      groupSize: "2-10 people",
      bestFor: "Wellness & relaxation seekers",
      included: ["Flights", "Resort Stay", "Daily Breakfast", "Yoga Classes", "Spa Session"],
    },
    {
      id: 5,
      title: "Maldives Paradise",
      location: "Maldives",
      priceINR: "₹70,000",
      priceUSD: "$840",
      duration: "7 Days / 6 Nights",
      rating: 5.0,
      reviews: 156,
      image: "/maldives-overwater-bungalow-tropical-island-sunset.jpg",
      description:
        "Escape to tropical paradise with overwater bungalows, pristine white-sand beaches, world-class diving, snorkeling, and luxury water sports.",
      highlights: ["Overwater Bungalow", "Diving", "Snorkeling", "Water Sports", "Spa"],
      groupSize: "2-4 people",
      bestFor: "Honeymoon & luxury travelers",
      included: ["Flights", "Overwater Bungalow", "All Meals", "Diving", "Water Sports"],
    },
    {
      id: 6,
      title: "Lakshadweep Island Escape",
      location: "Lakshadweep, India",
      priceINR: "₹30,000",
      priceUSD: "$360",
      duration: "4 Days / 3 Nights",
      rating: 4.7,
      reviews: 98,
      image: "/lakshadweep-islands-coral-reef-beach.jpg",
      description:
        "Discover the hidden gem of Lakshadweep with pristine coral reefs, crystal-clear waters, water sports, and untouched island beauty away from crowds.",
      highlights: ["Coral Reefs", "Water Sports", "Island Hopping", "Snorkeling", "Beach Relaxation"],
      groupSize: "2-6 people",
      bestFor: "Nature lovers & adventure enthusiasts",
      included: ["Ferry", "Island Resort", "Daily Breakfast", "Water Sports", "Guided Tours"],
    },
  ]

  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Packages</h1>
            <p className="text-xl text-foreground/70 mb-4">
              Curated luxury experiences across Dubai, India, Thailand, Bali, Maldives & Lakshadweep
            </p>
            <p className="text-sm text-foreground/60 italic">
              All prices are starting rates and may vary based on travel dates and inclusions.
            </p>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4 bg-white/90 px-3 py-2 rounded-lg text-sm font-semibold text-primary text-center">
                      <div>{pkg.priceINR}</div>
                      <div className="text-xs text-foreground/70">{pkg.priceUSD}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>

                    <div className="flex items-center gap-2 text-foreground/70 mb-3">
                      <MapPin size={16} />
                      <span className="text-sm">{pkg.location}</span>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={i < Math.floor(pkg.rating) ? "fill-primary text-primary" : "text-muted"}
                            size={16}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-foreground/70">({pkg.reviews})</span>
                    </div>

                    <p className="text-foreground/70 mb-4 text-sm">{pkg.description}</p>

                    <p className="text-sm font-semibold text-primary mb-3">Best for: {pkg.bestFor}</p>

                    <div className="flex gap-4 mb-4 text-sm text-foreground/70">
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={14} />
                        <span>{pkg.groupSize}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-semibold text-foreground/70 mb-2">Highlights:</p>
                      <div className="flex flex-wrap gap-2">
                        {pkg.highlights.map((highlight, idx) => (
                          <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-semibold text-foreground/70 mb-2">What's Included:</p>
                      <ul className="text-xs text-foreground/70 space-y-1">
                        {pkg.included.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="text-primary">✓</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/booking"
                      className="w-full px-4 py-2 bg-gradient-to-r from-primary to-primary/70 text-foreground font-semibold rounded-lg hover:shadow-lg transition-all text-center"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />
      </main>

      <Footer />
    </>
  )
}
