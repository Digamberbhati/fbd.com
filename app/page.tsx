"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Testimonials } from "@/components/testimonials"
import { Marquee } from "@/components/marquee"
import Link from "next/link"
import { ArrowRight, MapPin, Users, Award } from "lucide-react"

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero.jpg')",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Discover Luxury Travel</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Experience the world's most exclusive destinations with FBDTravels
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary/70 text-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
          >
            Book Your Trip
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Marquee Section */}
      <Marquee>
        ✨ Luxury Dubai Tour • Best Travel Deals • Book Now • Unforgettable Experiences • Limited Time Offers
      </Marquee>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose FBDTravels?</h2>
            <p className="text-lg text-foreground/70">Premium service, unforgettable experiences</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Award-Winning Service",
                description: "Recognized globally for excellence in luxury travel planning and execution",
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Dedicated travel consultants with decades of combined experience",
              },
              {
                icon: MapPin,
                title: "Exclusive Destinations",
                description: "Access to premium locations and experiences not available elsewhere",
              },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-xl hover:shadow-lg transition-all"
                >
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Packages Preview */}
      <section className="py-20 bg-gradient-to-b from-white to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Packages</h2>
            <p className="text-lg text-foreground/70">Handpicked luxury experiences for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Dubai Luxury",
                price: "$2,499",
                image: "/luxury-dubai-resort-pool.jpg",
                description:
                  "Experience the opulence of Dubai with 5-star accommodations, desert safaris, and yacht cruises",
                duration: "5 Days",
              },
              {
                title: "Maldives Paradise",
                price: "$3,299",
                image: "/maldives-overwater-bungalow-tropical-island.jpg",
                description:
                  "Tropical bliss in the Indian Ocean with overwater bungalows, diving, and pristine beaches",
                duration: "7 Days",
              },
              {
                title: "Swiss Alps",
                price: "$2,799",
                image: "/swiss-alps-mountains-skiing-snow.jpg",
                description: "Alpine adventure with world-class skiing, mountain trains, and charming Swiss villages",
                duration: "6 Days",
              },
            ].map((pkg, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-semibold text-primary">
                    {pkg.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                  <p className="text-foreground/70 mb-4 text-sm">{pkg.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                      {pkg.price}
                    </span>
                    <Link
                      href="/packages"
                      className="px-4 py-2 bg-gradient-to-r from-primary to-primary/70 text-foreground font-semibold rounded-lg hover:shadow-lg transition-all"
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-foreground transition-all"
            >
              View All Packages
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Destinations Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Popular Destinations</h2>
            <p className="text-lg text-foreground/70">Explore our most sought-after travel locations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Dubai", image: "/dubai-burj-khalifa-skyline.jpg" },
              { name: "Maldives", image: "/maldives-tropical-beach-sunset.jpg" },
              { name: "Paris", image: "/paris-eiffel-tower-night.png" },
              { name: "Tokyo", image: "/tokyo-shibuya-neon-lights.jpg" },
              { name: "Bali", image: "/bali-temple-rice-terraces.jpg" },
              { name: "Switzerland", image: "/swiss-alps-lake.png" },
              { name: "Thailand", image: "/thailand-temple-bangkok.jpg" },
              { name: "Greece", image: "/greece-santorini-white-buildings.jpg" },
            ].map((dest, idx) => (
              <div
                key={idx}
                className="group relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                <img
                  src={dest.image || "/placeholder.svg"}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white text-center">{dest.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
