"use client"

import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    // {
    //   name: "Sarah Johnson",
    //   role: "CEO, Tech Company",
    //   image: "/professional-woman-portrait.png",
    //   rating: 5,
    //   text: "FBDTravels transformed my vacation into an unforgettable experience. Every detail was perfectly planned and executed. Highly recommended!",
    // },
    // {
    //   name: "Michael Chen",
    //   role: "Entrepreneur",
    //   image: "/professional-man-portrait.png",
    //   rating: 5,
    //   text: "The Dubai package was absolutely incredible. The luxury accommodations and personalized service exceeded all my expectations.",
    // },
    // {
    //   name: "Emma Williams",
    //   role: "Travel Blogger",
    //   image: "/woman-travel-blogger-portrait.jpg",
    //   rating: 5,
    //   text: "I've traveled with many agencies, but FBDTravels stands out for their attention to detail and customer care. Simply the best!",
    // },
    // {
    //   name: "David Martinez",
    //   role: "Business Executive",
    //   image: "/professional-businessman-portrait.png",
    //   rating: 5,
    //   text: "The Maldives retreat was the perfect escape. The team handled everything seamlessly, allowing me to fully relax and enjoy.",
    // },
    // {
    //   name: "Lisa Anderson",
    //   role: "Luxury Lifestyle Consultant",
    //   image: "/woman-consultant-portrait.jpg",
    //   rating: 5,
    //   text: "FBDTravels offers unparalleled luxury experiences. Their curated packages are worth every penny. I'm already planning my next trip!",
    // },
    // {
    //   name: "James Wilson",
    //   role: "Investment Manager",
    //   image: "/professional-man-manager-portrait.jpg",
    //   rating: 5,
    //   text: "Exceptional service from start to finish. The Paris package was romantic, elegant, and perfectly tailored to our needs.",
    // },
    {
      name: "Digamber Bhati",
      role: "Owner, GreaterTechHub",
      rating: 5,
      text: "An amazing experience! I often take my company team on trips organized by them, and every time the arrangements are perfect — from travel to stay. Highly recommended for corporate and leisure tours!",
    },
    {
      name: "Dipanshu Rajput",
      role: "Businessman",
      rating: 5,
      text: "Great travel services with excellent support. They always ensure everything runs smoothly. I've been on multiple trips with them, and every time it's been a memorable experience.",
    },
    {
      name: "Lokesh Rajput",
      role: "Professional Bodybuilder",
      rating: 5,
      text: "I travel often for competitions, and they handle all my bookings with great care. From flights to hotels — everything is well-planned and hassle-free!",
    },
    {
      name: "Rohit",
      role: "Travel Enthusiast",
      rating: 5,
      text: "As someone who loves to travel, I've had some of my best trips arranged by them. Highly professional team and great deals!",
    },
    {
      name: "Aman Goad",
      role: "Travel Enthusiast",
      rating: 5,
      text: "The team provides excellent trip planning. Each journey has been comfortable, exciting, and well-managed!",
    },
    {
      name: "Sagar Thakur",
      role: "Frequent Traveler",
      rating: 5,
      text: "I've joined many trips with them, and it's always a fun and stress-free experience. Highly trustworthy and budget-friendly travel service!",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg text-foreground/70">Hear from our satisfied travelers around the world</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 mb-6 italic">"{testimonial.text}"</p>

              {/* Author */}
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
