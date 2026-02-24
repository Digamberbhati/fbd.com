import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Users, Globe, Heart, Zap, Shield, Plane, Calendar, CheckCircle, Train, Car, Utensils } from "lucide-react"

const WEB3FORMS_ACCESS_KEY = "9a8b054f-2aed-4028-976b-e1025b966253"

export default function About() {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Coprabrate Travel</h1>
            <p className="text-xl text-foreground/70">Your perfect trip, crafted just for you — since 2020</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-foreground/70 mb-4">
                  Coprabrate Travel was founded with one clear goal: to make every journey simple, joyful, and perfectly suited to you. Whether it's a weekend getaway or a big international adventure, we arrange everything according to your wishes.
                </p>
                <p className="text-lg text-foreground/70 mb-4">
                  We handle domestic and international trips of all kinds — from budget-friendly to luxury. Hotel (2★ to 5★), taxi, train, flight, food, sightseeing — everything is 100% customizable. You tell us what you want, and we make it happen.
                </p>
                <p className="text-lg text-foreground/70">
                  Our team takes care of every detail so you can relax and enjoy quality time with family, friends, or your partner — stress-free.
                </p>
              </div>
              <div className="h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/hero.jpg" 
                  alt="Happy travelers enjoying their journey" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              {[
                {
                  icon: Heart,
                  title: "Trust",
                  description: "Your comfort, safety and happiness come first",
                },
                {
                  icon: Globe,
                  title: "Flexibility",
                  description: "Fully customizable trips — domestic or international",
                },
                {
                  icon: Zap,
                  title: "Hassle-Free",
                  description: "We arrange hotel, transport, food & everything",
                },
                {
                  icon: Users,
                  title: "Personal Touch",
                  description: "Tailored for families, couples, solo & groups",
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
                  { number: "10000+", label: "Happy Travelers" },
                  { number: "200+", label: "Destinations Covered" },
                  { number: "100%", label: "Customized Trips" },
                  { number: "24/7", label: "Support" },
                ].map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-foreground/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Travel Protection Section */}
            <div className="mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-10 border border-blue-100">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-12 h-12 text-primary" />
                <h2 className="text-3xl font-bold">Travel with Complete Peace of Mind</h2>
              </div>
              <p className="text-lg text-foreground/80 mb-4">
                Every Coprabrate Travel package includes reliable <strong>travel protection / insurance options</strong> (as per your requirement) to keep your journey safe.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {[
                  "Medical emergencies & hospitalization",
                  "Trip cancellation & interruption cover",
                  "Lost baggage & personal items",
                  "Flight / train delays",
                  "24/7 emergency helpline",
                  "Coverage for unexpected events",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-foreground/60">
                *Protection / insurance arranged in partnership with trusted providers. Optional / included based on package.
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
                    title: "Share Your Plan",
                    desc: "Tell us where, when, budget, hotel stars, food & travel style.",
                  },
                  {
                    icon: Plane,
                    step: "02",
                    title: "Receive Custom Plan",
                    desc: "Get a complete personalized itinerary with hotel, taxi/train/flight, food & sightseeing options.",
                  },
                  {
                    icon: CheckCircle,
                    step: "03",
                    title: "Travel Happily",
                    desc: "We handle bookings & support — you just enjoy the journey.",
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

            {/* Inquiry Form */}
            <div className="mb-20 bg-white rounded-xl shadow-xl p-8 md:p-12 border border-primary/10">
              <h2 className="text-4xl font-bold mb-8 text-center">Plan Your Trip Today</h2>
              <p className="text-center text-foreground/70 mb-10">
                Fill this form — we will create your dream itinerary within 24 hours!
              </p>

              <form 
                action="https://api.web3forms.com/submit" 
                method="POST"
                className="space-y-6"
              >
                <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                <input type="hidden" name="subject" value="New Trip Inquiry - Coprabrate Travel" />
                <input type="hidden" name="from_name" value="Coprabrate Travel Website" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required 
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Travel Type *</label>
                    <select 
                      name="travel_type" 
                      required 
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select</option>
                      <option value="Domestic">Domestic (India)</option>
                      <option value="International">International</option>
                      <option value="Both">Looking for options</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Destination(s) you want to visit</label>
                  <input 
                    type="text" 
                    name="destination" 
                    placeholder="e.g. Goa, Himachal, Dubai, Europe tour..." 
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Travel Dates / Month</label>
                    <input 
                      type="text" 
                      name="dates" 
                      placeholder="e.g. 15-22 Dec 2025 or Dec 2025" 
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Approx. Budget (per person)</label>
                    <select 
                      name="budget" 
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select range</option>
                      <option value="Under 20k">Under ₹20,000</option>
                      <option value="20k-50k">₹20,000 – ₹50,000</option>
                      <option value="50k-1L">₹50,000 – ₹1 Lakh</option>
                      <option value="1L-2L">₹1 Lakh – ₹2 Lakh</option>
                      <option value="2L+">Above ₹2 Lakh</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">No. of People</label>
                    <input 
                      type="number" 
                      name="people" 
                      min="1"
                      placeholder="e.g. 2, 4, 6..." 
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Hotel Category</label>
                  <select 
                    name="hotel_star" 
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select</option>
                    <option value="2 Star">2 Star (Budget)</option>
                    <option value="3 Star">3 Star (Comfort)</option>
                    <option value="4 Star">4 Star (Premium)</option>
                    <option value="5 Star">5 Star (Luxury)</option>
                    <option value="Any">Any / Mix</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Transport</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Flight", "Train", "Taxi/Car", "Bus", "Mix", "No preference"].map((opt) => (
                      <label key={opt} className="flex items-center gap-2">
                        <input type="checkbox" name="transport" value={opt} className="rounded" />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Food Preference</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Veg", "Jain", "Non-Veg", "Any", "Local Cuisine", "No preference"].map((opt) => (
                      <label key={opt} className="flex items-center gap-2">
                        <input type="checkbox" name="food" value={opt} className="rounded" />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tell us more about your dream trip...</label>
                  <textarea 
                    name="message" 
                    rows={4}
                    placeholder="Any special requests, places to visit, number of days, family/couple/solo, etc."
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-lg font-bold text-lg hover:opacity-90 transition"
                >
                  Send Inquiry → Get Your Custom Plan
                </button>

                <p className="text-xs text-center text-foreground/60 mt-4">
                  We respect your privacy — your details are safe with us.
                </p>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "Do you arrange both domestic and international trips?",
                    a: "Yes! We specialize in both — anywhere in India or abroad, fully customized as per your choice.",
                  },
                  {
                    q: "Can everything be customized — hotel, food, transport?",
                    a: "Absolutely. 2★ to 5★ hotels, veg/jain/non-veg food, flight/train/taxi — you decide, we arrange.",
                  },
                  {
                    q: "What destinations do you cover?",
                    a: "All major places in India + 50+ international countries — Europe, Dubai, Thailand, Maldives, Bali, USA, and more.",
                  },
                  {
                    q: "Is support available during the trip?",
                    a: "Yes — 24/7 support via call, WhatsApp, email. We're with you from booking to return.",
                  },
                  {
                    q: "How do I start planning my trip?",
                    a: "Just fill the form above or message us on WhatsApp/call. We'll send a personalized plan very quickly.",
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