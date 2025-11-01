"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Testimonials } from "@/components/testimonials";
import { Marquee } from "@/components/marquee";
import Link from "next/link";
import { ArrowRight, MapPin, Users, Award, Star, Shield, Plane, Clock, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero.jpg')",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
            Your Journey to <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Luxury</span> Begins Here
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            <strong className="text-primary">FBDTravels</strong> — Where Dreams Meet Destinations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary/70 text-foreground font-bold rounded-lg hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105"
            >
              Book Your Dream Trip
              <ArrowRight size={22} />
            </Link>
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all"
            >
              Explore Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee Slogans */}
      <Marquee>
        <span className="text-primary font-bold">Luxury Redefined</span> • 
        <span className="text-primary/80"> 5-Star Service</span> • 
        <span className="text-primary/70"> Exclusive Deals</span> • 
        <span className="text-primary"> Unforgettable Memories</span> • 
        <span className="text-primary/80"> Book Now & Save Big</span>
      </Marquee>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-white to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Why Travel with FBDTravels?
            </h2>
            <p className="text-lg text-foreground/70">We don’t just plan trips — we craft <strong>legends</strong></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "Award-Winning Excellence", desc: "Voted #1 Luxury Travel Agency 2024" },
              { icon: Shield, title: "100% Secure Booking", desc: "SSL Encrypted • Refund Guarantee" },
              { icon: Star, title: "VIP Concierge", desc: "24/7 Personal Travel Assistant" },
              { icon: Plane, title: "Private Transfers", desc: "Chauffeur-Driven Luxury Cars" },
              { icon: Users, title: "Expert Curated", desc: "Handpicked by Travel Connoisseurs" },
              { icon: Clock, title: "Instant Confirmation", desc: "Book in 60 Seconds or Less" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary/10 hover:border-primary/30"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-foreground/70 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works - Step-by-Step */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-foreground/70">Your luxury journey in 3 simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Tell Us Your Dream",
                desc: "Share your travel style, budget, and preferences",
                color: "from-primary to-primary/70",
              },
              {
                step: "02",
                title: "Get Custom Itinerary",
                desc: "Receive a tailored luxury plan within 24 hours",
                color: "from-primary/80 to-primary/50",
              },
              {
                step: "03",
                title: "Travel Like Royalty",
                desc: "Enjoy VIP treatment from arrival to departure",
                color: "from-primary/60 to-primary/40",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="relative group text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-xl"
                  style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
                />
                <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-primary/10">
                  <div className={`text-6xl font-bold bg-gradient-to-r ${s.color} bg-clip-text text-transparent mb-4`}>
                    {s.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                  <p className="text-foreground/70">{s.desc}</p>
                  {i < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Luxury Packages</h2>
            <p className="text-lg text-foreground/70">Handpicked for the discerning traveler</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Dubai Royal Escape",
                price: "From $4,999",
                image: "/luxury-dubai-resort-pool.jpg",
                tag: "Most Popular",
                duration: "5 Days",
              },
              {
                title: "Maldives Overwater Villa",
                price: "From $6,799",
                image: "/maldives-overwater-bungalow-tropical-island.jpg",
                tag: "Honeymoon Special",
                duration: "7 Days",
              },
              {
                title: "Swiss Alps Private Chalet",
                price: "From $8,999",
                image: "/swiss-alps-mountains-skiing-snow.jpg",
                tag: "Winter Exclusive",
                duration: "6 Days",
              },
            ].map((pkg, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  {pkg.tag && (
                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                      {pkg.tag}
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 bg-white/90 text-primary px-3 py-1 rounded-full text-sm font-bold">
                    {pkg.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                  <p className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-4">
                    {pkg.price}
                  </p>
                  <Link
                    href="/booking"
                    className="w-full block text-center px-6 py-3 bg-gradient-to-r from-primary to-primary/70 text-foreground font-bold rounded-lg hover:shadow-lg transition-all"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all text-lg"
            >
              View All 50+ Packages
              <ArrowRight size={22} />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: CheckCircle, text: "Licensed & Bonded" },
              { icon: Shield, text: "Secure Payments" },
              { icon: Star, text: "4.9/5 Rating" },
              { icon: Award, text: "Since 2015" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex flex-col items-center">
                  <Icon className="w-10 h-10 text-primary mb-2" />
                  <p className="font-semibold">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Limited spots available for 2025 luxury departures
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-primary font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-white/30 transition-all transform hover:scale-105"
          >
            Get Your Free Quote Now
            <ArrowRight size={24} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}