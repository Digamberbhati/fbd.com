"use client"

import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Calendar, Users, MapPin, Send, Loader2 } from "lucide-react"

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    startDate: "",
    endDate: "",
    people: "1",
    specialRequests: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const WEB3FORMS_ACCESS_KEY = "9a8b054f-2aed-4028-976b-e1025b966253"

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const submissionData = {
      access_key: WEB3FORMS_ACCESS_KEY,
      name: formData.name,
      email: formData.email,
      destination: formData.destination,
      start_date: formData.startDate,
      end_date: formData.endDate,
      people: formData.people,
      special_requests: formData.specialRequests || "None",
      subject: `Booking: ${formData.destination} (${formData.startDate} to ${formData.endDate})`,
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      })

      const result = await response.json()

      if (result.success) {
        alert("Thank you! Your booking request has been sent.")
        setFormData({
          name: "",
          email: "",
          destination: "",
          startDate: "",
          endDate: "",
          people: "1",
          specialRequests: "",
        })
      } else {
        alert("Failed! Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Failed! Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const destinations = [
    "Dubai, UAE",
    "Maldives",
    "Switzerland",
    "Paris, France",
    "Tokyo, Japan",
    "Bali, Indonesia",
  ]

  return (
    <>
      <Header />

      <main className="min-h-screen">
        <section className="bg-gradient-to-b from-primary/10 to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Book Your Adventure</h1>
            <p className="text-xl text-foreground/70">
              Fill out the form to start planning your dream vacation
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-8">
                <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />

                <div>
                  <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-6">Travel Details</h2>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="destination" className="block text-sm font-medium mb-2 flex items-center gap-2">
                        <MapPin size={16} className="text-primary" /> Destination
                      </label>
                      <select
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        <option value="">Select a destination</option>
                        {destinations.map((dest) => (
                          <option key={dest} value={dest}>{dest}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="startDate" className="block text-sm font-medium mb-2 flex items-center gap-2">
                          <Calendar size={16} className="text-primary" /> Start Date
                        </label>
                        <input
                          type="date"
                          id="startDate"
                          name="startDate"
                          value={formData.startDate}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split("T")[0]}
                          className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      <div>
                        <label htmlFor="endDate" className="block text-sm font-medium mb-2 flex items-center gap-2">
                          <Calendar size={16} className="text-primary" /> End Date
                        </label>
                        <input
                          type="date"
                          id="endDate"
                          name="endDate"
                          value={formData.endDate}
                          onChange={handleChange}
                          required
                          min={formData.startDate || new Date().toISOString().split("T")[0]}
                          className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="people" className="block text-sm font-medium mb-2 flex items-center gap-2">
                        <Users size={16} className="text-primary" /> People
                      </label>
                      <select
                        id="people"
                        name="people"
                        value={formData.people}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        {[1,2,3,4,5,6,7,8,9,10].map(n => (
                          <option key={n} value={n}>{n} {n===1?"Person":"People"}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="specialRequests" className="block text-sm font-medium mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    placeholder="Vegetarian meals, honeymoon setup, etc..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-primary to-primary/70 text-foreground font-semibold rounded-lg hover:shadow-lg transition-all text-lg disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Complete Booking
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
                <p className="text-foreground/70">
                  <span className="font-semibold text-foreground">Note:</span> We&apos;ll contact you within <strong>24 hours</strong> to confirm.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}