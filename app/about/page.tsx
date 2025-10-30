import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Users, Globe, Heart, Zap, Shield, Plane, Calendar, CheckCircle } from "lucide-react"

export default function About() {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About FBDTravels</h1>
            <p className="text-xl text-foreground/70">Crafting unforgettable journeys since 2020</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-foreground/70 mb-4">
                  FBDTravels was founded with a simple mission: to create extraordinary travel experiences that
                  transform lives. We believe that travel is more than just visiting places—it's about connecting with
                  cultures, people, and yourself.
                </p>
                <p className="text-lg text-foreground/70 mb-4">
                  With over 5 years of expertise in luxury travel, we've curated the finest destinations and experiences
                  for our discerning clients worldwide. Our team of passionate travel experts works tirelessly to ensure
                  every journey is nothing short of magical.
                </p>
                <p className="text-lg text-foreground/70">
                  From intimate boutique hotels to exclusive resort experiences, we handle every detail so you can focus
                  on creating memories that last a lifetime.
                </p>
              </div>
              <div className="h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl overflow-hidden shadow-lg">
                <img src="/luxury-travel-experience-couple-vacation.jpg" alt="Our Story" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              {[
                {
                  icon: Heart,
                  title: "Trust",
                  description: "Your satisfaction and safety are our top priorities",
                },
                {
                  icon: Globe,
                  title: "Experience",
                  description: "Decades of combined expertise in luxury travel",
                },
                {
                  icon: Zap,
                  title: "Excellence",
                  description: "We deliver nothing but the best in every detail",
                },
                {
                  icon: Users,
                  title: "Community",
                  description: "Building lasting relationships with our travelers",
                },
              ].map((value, idx) => {
                const Icon = value.icon
                return (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <Icon className="w-8 h-8 text-primary mb-3" />
                    <h3 className="text-xl font-bold mb-2 text-primary">{value.title}</h3>
                    <p className="text-foreground/70 text-sm">{value.description}</p>
                  </div>
                )
              })}
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-12 mb-16">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                {[
                  { number: "5000+", label: "Happy Travelers" },
                  { number: "50+", label: "Destinations" },
                  { number: "100%", label: "Satisfaction" },
                  { number: "24/7", label: "Support" },
                ].map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-foreground/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Travel Insurance Section */}
            <div className="mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-10 border border-blue-100">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-12 h-12 text-primary" />
                <h2 className="text-3xl font-bold">Travel with Complete Peace of Mind</h2>
              </div>
              <p className="text-lg text-foreground/80 mb-4">
                At FBDTravels, we offer <strong>comprehensive travel insurance</strong> with every package to ensure your journey is fully protected.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {[
                  "Medical emergencies coverage",
                  "Trip cancellation & interruption",
                  "Lost baggage & personal belongings",
                  "Flight delays & missed connections",
                  "24/7 emergency assistance",
                  "COVID-19 related coverage",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-foreground/60">
                *Insurance provided in partnership with leading global insurers. Terms & conditions apply.
              </p>
            </div>

            {/* How It Works - Steps */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-12 text-center">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Calendar,
                    step: "01",
                    title: "Tell Us Your Dream",
                    desc: "Share your travel dates, preferences, and budget. We listen carefully.",
                  },
                  {
                    icon: Plane,
                    step: "02",
                    title: "Get Custom Itinerary",
                    desc: "Receive a personalized travel plan with handpicked experiences.",
                  },
                  {
                    icon: CheckCircle,
                    step: "03",
                    title: "Travel Worry-Free",
                    desc: "Enjoy your trip with 24/7 support and full insurance coverage.",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={idx}
                      className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all text-center"
                    >
                      {idx < 2 && (
                        <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/20 -translate-y-1/2" />
                      )}
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-5xl font-bold text-primary/20 mb-2">{item.step}</div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-foreground/70">{item.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "Do you provide travel insurance with every booking?",
                    a: "Yes! Every FBDTravels package includes comprehensive travel insurance covering medical emergencies, trip cancellation, lost baggage, and more.",
                  },
                  {
                    q: "Can I customize my travel itinerary?",
                    a: "Absolutely. All our trips are 100% customizable based on your preferences, budget, and travel style.",
                  },
                  {
                    q: "What destinations do you cover?",
                    a: "We offer luxury travel experiences to over 50 destinations worldwide, including Europe, Asia, Middle East, Africa, and the Americas.",
                  },
                  {
                    q: "Is 24/7 support really available?",
                    a: "Yes. Our dedicated support team is available round the clock via phone, WhatsApp, and email during your entire trip.",
                  },
                  {
                    q: "How do I book a trip?",
                    a: "Simply fill out the inquiry form, call us, or message on WhatsApp. We'll create your dream itinerary within 24 hours.",
                  },
                ].map((faq, idx) => (
                  <details
                    key={idx}
                    className="bg-white rounded-xl shadow-md p-6 cursor-pointer group"
                  >
                    <summary className="text-lg font-semibold flex justify-between items-center marker:content-none">
                      {faq.q}
                      <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="mt-4 text-foreground/70 pl-6 border-l-4 border-primary/30">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}