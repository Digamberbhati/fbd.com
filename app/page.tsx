"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Testimonials } from "@/components/testimonials";
import { Marquee } from "@/components/marquee";
import Link from "next/link";
import {
  ArrowRight,
  Star,
  Heart,
  Users,
  Briefcase,
  Camera,
  Moon,
  User,
  X,
  Award,
  Shield,
  Plane,
  Clock,
  CheckCircle,
  Calendar,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [selectedPkg, setSelectedPkg] = useState<any>(null);
  const [showForm, setShowForm] = useState(false);

  // Show form on page load
  useEffect(() => {
    setShowForm(true);
  }, []);

  // Web3Forms submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "f3b8a9c1-2d4e-5f6g-7h8i-9j0k1l2m3n4o",
          subject: "New Package Inquiry - FBDTravels",
          from_name: formData.get("name"),
          replyto: formData.get("email"),
          message: `
            Name: ${formData.get("name")}
            Email: ${formData.get("email")}
            Phone: ${formData.get("phone")}
            Package: ${formData.get("destination")}
            Travel Dates: ${formData.get("dates")}
            Message: ${formData.get("message") || "None"}
          `.trim(),
        }),
      });

      if (response.ok) {
        alert("Thank you! Your inquiry has been sent. We'll call you with pricing.");
        setShowForm(false);
        form.reset();
      } else {
        alert("Failed to send. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please check your connection.");
    }
  };

  const locations = [
    { name: "India – Taj Mahal", flag: "IN" },
    { name: "Dubai", flag: "AE" },
    { name: "Thailand", flag: "TH" },
    { name: "Lakshadweep", flag: "Island" },
    { name: "Maldives", flag: "MV" },
  ];

  const specialPackages = [
    {
      id: 1,
      title: "Romantic Package",
      icon: Heart,
      locations,
      desc: "Experience eternal love with candlelight dinner, private heritage walk, luxury suite, and champagne sunset.",
      duration: "4 Days / 3 Nights",
      img: "/packages/romantic-taj-mahal.jpg",
    },
    {
      id: 2,
      title: "Family Package",
      icon: Users,
      locations,
      desc: "Desert safari, waterpark, Burj Khalifa tour, private villa with kids club and nanny service.",
      duration: "6 Days / 5 Nights",
      img: "/packages/family-dubai.jpg",
    },
    {
      id: 3,
      title: "Corporate Package",
      icon: Briefcase,
      locations,
      desc: "Beachfront boardroom, team-building yoga, private villa meetings, 5-star resort with WiFi & catering.",
      duration: "5 Days / 4 Nights",
      img: "/packages/corporate-bali.jpg",
    },
    {
      id: 4,
      title: "Vlogging Package",
      icon: Camera,
      locations,
      desc: "Drone-friendly islands, street food tours, influencer suite, professional photographer, viral content spots.",
      duration: "7 Days / 6 Nights",
      img: "/packages/vlog-thailand.jpg",
    },
    {
      id: 5,
      title: "Honeymoon Package",
      icon: Moon,
      locations,
      desc: "Private coral island villa, sunset cruise, couple spa, romantic beach dinner, underwater photoshoot.",
      duration: "5 Days / 4 Nights",
      img: "/packages/honeymoon-lakshadweep.jpg",
    },
    {
      id: 6,
      title: "Solo Package",
      icon: User,
      locations,
      desc: "Overwater bungalow, scuba diving, personal concierge, wellness yoga, private island hopping.",
      duration: "6 Days / 5 Nights",
      img: "/packages/solo-maldives.jpg",
    },
  ];

  return (
    <>
      <Header />

      {/* ====================== ULTRA COMPACT ENQUIRY POPUP ====================== */}
      {showForm && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center p-3 z-50"
          onClick={() => setShowForm(false)}
        >
          <div
            className="bg-white rounded-xl w-full max-w-xs shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-2.5 border-b bg-gradient-to-r from-primary/5 to-primary/10">
              <h3 className="text-base font-bold text-gray-900">Get Pricing</h3>
              <button
                onClick={() => setShowForm(false)}
                className="p-1.5 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-3 max-h-[75vh] overflow-y-auto">
              {/* Mobile Image */}
              <div className="md:hidden mb-2">
                <img
                  src="/hero.jpg"
                  alt="Luxury"
                  className="w-full h-24 object-cover rounded-md"
                />
              </div>

              <form onSubmit={handleSubmit} className="space-y-2.5 text-xs">
                {/* Name */}
                <div>
                  <label className="flex items-center gap-1.5 font-medium text-gray-700">
                    <User className="w-3 h-3" /> Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="mt-0.5 w-full px-2.5 py-1.5 text-xs border border-gray-300 rounded-md focus:ring-1 focus:ring-primary focus:border-primary"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="flex items-center gap-1.5 font-medium text-gray-700">
                    <Mail className="w-3 h-3" /> Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="mt-0.5 w-full px-2.5 py-1.5 text-xs border border-gray-300 rounded-md focus:ring-1 focus:ring-primary focus:border-primary"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="flex items-center gap-1.5 font-medium text-gray-700">
                    <Phone className="w-3 h-3" /> Phone
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="mt-0.5 w-full px-2.5 py-1.5 text-xs border border-gray-300 rounded-md focus:ring-1 focus:ring-primary focus:border-primary"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Package */}
                <div>
                  <label className="flex items-center gap-1.5 font-medium text-gray-700">
                    <MapPin className="w-3 h-3" /> Package
                  </label>
                  <select
                    name="destination"
                    required
                    className="mt-0.5 w-full px-2.5 py-1.5 text-xs border border-gray-300 rounded-md focus:ring-1 focus:ring-primary focus:border-primary"
                  >
                    <option value="">Select</option>
                    {specialPackages.map((pkg) =>
                      pkg.locations.map((loc) => (
                        <option key={`${pkg.id}-${loc.name}`} value={`${pkg.title} - ${loc.name}`}>
                          {pkg.title} - {loc.flag} {loc.name}
                        </option>
                      ))
                    )}
                  </select>
                </div>

                {/* Dates */}
                <div>
                  <label className="flex items-center gap-1.5 font-medium text-gray-700">
                    <Calendar className="w-3 h-3" /> Dates
                  </label>
                  <input
                    name="dates"
                    type="text"
                    className="mt-0.5 w-full px-2.5 py-1.5 text-xs border border-gray-300 rounded-md focus:ring-1 focus:ring-primary focus:border-primary"
                    placeholder="15-22 Dec"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="flex items-center gap-1.5 font-medium text-gray-700">
                    <MessageSquare className="w-3 h-3" /> Message
                  </label>
                  <textarea
                    name="message"
                    rows={1}
                    className="mt-0.5 w-full px-2.5 py-1.5 text-xs border border-gray-300 rounded-md focus:ring-1 focus:ring-primary focus:border-primary resize-none"
                    placeholder="Optional"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full mt-3 py-2 text-sm font-bold text-white bg-gradient-to-r from-primary to-primary/80 rounded-md hover:shadow-md transition-all flex items-center justify-center gap-1.5"
                >
                  Enquire Now
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* ======== HERO SECTION ======== */}
      <section className="bg-orange-50 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                Your Journey to{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Luxury
                </span>{" "}
                Begins Here
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8">
                <strong className="text-primary">FBDTravels</strong> — Where Dreams Meet Destinations
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowForm(true)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary/70 text-white font-bold rounded-lg hover:shadow-xl transition-all duration-300"
                >
                  Enquire Now
                  <ArrowRight size={22} />
                </button>
                <Link
                  href="/packages"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-800 text-gray-800 font-semibold rounded-lg hover:bg-gray-800 hover:text-white transition-all"
                >
                  View All Packages
                </Link>
              </div>

              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[
                    "https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-1.jpg",
                    "https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-2.jpg",
                    "https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-3.jpg",
                    "https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-4.jpg",
                    "https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-5.jpg",
                    "https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-6.jpg",
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Happy traveler ${i + 1}`}
                      className="w-12 h-12 rounded-full border-4 border-orange-50 object-cover shadow-sm"
                    />
                  ))}
                </div>
                <p className="text-lg font-semibold text-gray-800">
                  <span className="text-primary">250,000+</span> dream trips delivered!
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <img
                src="/hero.jpg"
                alt="Luxury travel experience"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover max-h-96 lg:max-h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ======== SPECIAL PACKAGES SECTION ======== */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Choose Your Experience
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              All packages available in <strong>India, Dubai, Thailand, Lakshadweep & Maldives</strong> — <strong>Enquire on Call</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialPackages.map((pkg) => {
              const Icon = pkg.icon;
              return (
                <div
                  key={pkg.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary/10 hover:border-primary/30 transform hover:-translate-y-2"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={pkg.img}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => (e.currentTarget.src = "/hero.jpg")}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={14} fill="#f59e0b" className="text-amber-500" />
                      ))}
                      <span className="ml-1 text-xs font-bold text-gray-800">Google</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-bold text-gray-900">{pkg.title}</h3>
                    </div>

                    <p className="text-sm text-foreground/70 line-clamp-2 mb-4">{pkg.desc}</p>

                    <div className="flex items-center justify-between text-sm font-medium mb-4">
                      <span className="text-primary">{pkg.duration}</span>
                      <span className="text-lg font-bold text-primary">Enquire on Call</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {pkg.locations.map((loc) => (
                        <span
                          key={loc.name}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full flex items-center gap-1"
                        >
                          {loc.flag} {loc.name}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => setSelectedPkg(pkg)}
                        className="flex-1 flex items-center justify-center gap-1 px-4 py-2 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-all text-sm"
                      >
                        Read More
                      </button>
                      <button
                        onClick={() => setShowForm(true)}
                        className="flex-1 flex items-center justify-center gap-1 px-4 py-2 bg-gradient-to-r from-primary to-primary/70 text-white font-medium rounded-lg hover:shadow-lg transition-all text-sm"
                      >
                        Enquire Now
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======== READ MORE MODAL ======== */}
      {selectedPkg && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 overflow-y-auto"
          onClick={() => setSelectedPkg(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full my-8 max-h-screen overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-900">{selectedPkg.title}</h3>
              <button
                onClick={() => setSelectedPkg(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6">
              <img
                src={selectedPkg.img}
                alt={selectedPkg.title}
                className="w-full h-72 object-cover rounded-xl mb-6 shadow-lg"
                onError={(e) => (e.currentTarget.src = "/hero.jpg")}
              />

              <div className="flex items-center gap-2 mb-4">
                {(() => {
                  const Icon = selectedPkg.icon;
                  return <Icon className="w-6 h-6 text-primary" />;
                })()}
                <p className="text-lg font-semibold text-primary">Available in 5 Locations</p>
              </div>

              <p className="text-foreground/80 mb-6 leading-relaxed">{selectedPkg.desc}</p>

              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="text-xs text-foreground/60">Duration</p>
                  <p className="font-semibold text-gray-900">{selectedPkg.duration}</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="text-xs text-foreground/60">Price</p>
                  <p className="font-bold text-xl text-primary">Enquire on Call</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedPkg.locations.map((loc: any) => (
                  <span
                    key={loc.name}
                    className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full flex items-center gap-1"
                  >
                    {loc.flag} {loc.name}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowForm(true)}
                  className="flex-1 text-center px-6 py-3 bg-gradient-to-r from-primary to-primary/70 text-white font-bold rounded-lg hover:shadow-xl transition-all"
                >
                  Enquire Now
                </button>
                <button
                  onClick={() => setSelectedPkg(null)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Marquee>
        <span className="text-primary font-bold">Luxury Redefined</span> •
        <span className="text-primary/80"> 5-Star Service</span> •
        <span className="text-primary/70"> All 5 Locations</span> •
        <span className="text-primary"> Enquire on Call</span>
      </Marquee>

      {/* ======== WHY CHOOSE US ======== */}
      <section className="py-20 bg-gradient-to-b from-white to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Why FBDTravels?
            </h2>
            <p className="text-lg text-foreground/70">
              We craft <strong>legends</strong>, not just trips.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "Award-Winning", desc: "#1 Luxury Agency 2024" },
              { icon: Shield, title: "100% Secure", desc: "SSL • Refund Guarantee" },
              { icon: Star, title: "VIP Concierge", desc: "24/7 Assistant" },
              { icon: Plane, title: "Private Transfers", desc: "Luxury Cars" },
              { icon: Users, title: "Expert Curated", desc: "Handpicked by Pros" },
              { icon: Clock, title: "Instant Booking", desc: "60 Seconds or Less" },
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

      {/* ======== HOW IT WORKS ======== */}
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
                desc: "Share your travel style, package, and preferred location",
                color: "from-primary to-primary/70",
              },
              {
                step: "02",
                title: "Get Custom Quote",
                desc: "Receive personalized pricing within 2 hours",
                color: "from-primary/80 to-primary/50",
              },
              {
                step: "03",
                title: "Travel Like Royalty",
                desc: "Enjoy VIP treatment from arrival to departure",
                color: "from-primary/60 to-primary/40",
              },
            ].map((s, i) => (
              <div key={i} className="relative group text-center">
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

      {/* ======== FEATURED PACKAGES ======== */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Experiences</h2>
            <p className="text-lg text-foreground/70">Handpicked for the discerning traveler</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Romantic Package – Maldives",
                img: "/maldives-overwater-bungalow-tropical-island.jpg",
                tag: "Most Romantic",
                duration: "5 Days",
              },
              {
                title: "Family Package – Dubai",
                img: "/luxury-dubai-resort-pool.jpg",
                tag: "Family Favorite",
                duration: "6 Days",
              },
              {
                title: "Honeymoon Package – Lakshadweep",
                img: "/packages/honeymoon-package.jpg",
                tag: "Honeymoon Special",
                duration: "5 Days",
              },
            ].map((pkg, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pkg.img}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => (e.currentTarget.src = "/hero.jpg")}
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
                  <p className="text-3xl font-bold text-primary mb-4">Enquire on Call</p>
                  <button
                    onClick={() => setShowForm(true)}
                    className="w-full block text-center px-6 py-3 bg-gradient-to-r from-primary to-primary/70 text-white font-bold rounded-lg hover:shadow-lg transition-all"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all text-lg"
            >
              View All 30+ Combinations
              <ArrowRight size={22} />
            </Link>
          </div>
        </div>
      </section>

      {/* ======== TRUST BADGES ======== */}
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

      {/* ======== FINAL CTA ======== */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Limited spots for 2025 luxury departures — Enquire Now!
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-primary font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-white/30 transition-all transform hover:scale-105"
          >
            Enquire Now
            <ArrowRight size={24} />
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}