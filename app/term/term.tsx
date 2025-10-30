import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

import { CheckCircle, Shield, Calendar, Plane, MapPin, FileText } from "lucide-react"

export default function term() {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <FileText className="w-12 h-12 text-primary" />
              <h1 className="text-5xl md:text-6xl font-bold">Terms & Conditions</h1>
            </div>
            <p className="text-xl text-foreground/70">
              Please read these terms carefully before booking with FBDTravels
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Last Updated */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-16 text-center">
              <p className="text-sm text-foreground/60">
                Last Updated: <span className="font-semibold">October 30, 2025</span>
              </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Table of Contents</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                {[
                  "1. Booking & Payments",
                  "2. Cancellation Policy",
                  "3. Travel Insurance",
                  "4. Visa & Documentation",
                  "5. Health & Safety",
                  "6. Liability",
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={`#section-${idx + 1}`}
                    className="flex items-center gap-3 p-4 border border-muted/50 rounded-lg hover:bg-primary/5 hover:border-primary/50 transition-all group"
                  >
                    <span className="w-6 text-right font-mono text-primary">{`0${idx + 1}`}</span>
                    <span className="group-hover:text-primary">{item}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-16">
              {/* 1. Booking & Payments */}
              <div id="section-1" className="scroll-mt-20">
                <h2 className="flex items-center gap-3 text-3xl font-bold mb-8">
                  <span className="text-primary font-mono">01</span>
                  Booking & Payments
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Booking Process</h3>
                    <ul className="space-y-3 text-foreground/80">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Booking confirmation within 24 hours</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>50% advance payment required</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Balance payment 15 days before travel</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Payment Methods</h3>
                    <ul className="space-y-2 text-sm text-foreground/70">
                      <li>• Bank Transfer (NEFT/RTGS)</li>
                      <li>• Credit/Debit Cards (+2% fee)</li>
                      <li>• UPI Payments</li>
                      <li>• Cash (at Faridabad office only)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2. Cancellation Policy */}
              <div id="section-2" className="scroll-mt-20">
                <h2 className="flex items-center gap-3 text-3xl font-bold mb-8">
                  <span className="text-primary font-mono">02</span>
                  Cancellation Policy
                </h2>
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-200">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    {[
                      { days: "30+ days", refund: "90%" },
                      { days: "15-30 days", refund: "70%" },
                      { days: "7-15 days", refund: "50%" },
                      { days: "3-7 days", refund: "30%" },
                      { days: "0-3 days", refund: "0%" },
                    ].map((item, idx) => (
                      <div key={idx} className="p-4 bg-white rounded-xl shadow-sm">
                        <div className="text-2xl font-bold text-orange-600">{item.refund}</div>
                        <div className="text-sm text-foreground/70 mt-1">{item.days} before departure</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 3. Travel Insurance */}
              <div id="section-3" className="scroll-mt-20">
                <h2 className="flex items-center gap-3 text-3xl font-bold mb-8">
                  <span className="text-primary font-mono">03</span>
                  Travel Insurance
                </h2>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Shield className="w-6 h-6" />
                        Included in Every Package
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Medical emergencies (up to ₹50 Lakhs)</li>
                        <li>• Trip cancellation/interruption</li>
                        <li>• Lost baggage coverage</li>
                        <li>• 24/7 emergency assistance</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-lg text-foreground/80 mb-4">
                        Insurance provided by leading global insurers. Policy details sent with booking confirmation.
                      </p>
                      <p className="text-sm text-foreground/60">
                        <strong>Note:</strong> Pre-existing conditions not covered. Please disclose medical history.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Visa & Documentation */}
              <div id="section-4" className="scroll-mt-20">
                <h2 className="flex items-center gap-3 text-3xl font-bold mb-8">
                  <span className="text-primary font-mono">04</span>
                  Visa & Documentation
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border">
                      <Plane className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <strong>Passport:</strong> Valid for 6+ months from return date
                      </div>
                    </li>
                    <li className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border">
                      <Calendar className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <strong>Visa Assistance:</strong> We assist but visa approval not guaranteed
                      </div>
                    </li>
                  </ul>
                  <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                    <h3 className="font-semibold mb-3">Documents Required</h3>
                    <ul className="space-y-1 text-sm text-foreground/80">
                      <li>• Valid passport (6+ months)</li>
                      <li>• 2 passport photos (recent)</li>
                      <li>• PAN Card copy</li>
                      <li>• Bank statements (3 months)</li>
                      <li>• ITR / Salary slips</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 5. Health & Safety */}
              <div id="section-5" className="scroll-mt-20">
                <h2 className="flex items-center gap-3 text-3xl font-bold mb-8">
                  <span className="text-primary font-mono">05</span>
                  Health & Safety
                </h2>
                <div className="space-y-4 text-foreground/80">
                  <p>
                    Travelers must follow local health guidelines and government advisories. FBDTravels reserves the right
                    to cancel/reschedule trips due to pandemics, natural disasters, or security concerns.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {[
                      "COVID-19 vaccination proof may be required",
                      "Travelers bear personal health responsibility",
                      "Force majeure events not covered by refunds",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                        <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 6. Liability */}
              <div id="section-6" className="scroll-mt-20">
                <h2 className="flex items-center gap-3 text-3xl font-bold mb-8">
                  <span className="text-primary font-mono">06</span>
                  Liability & Force Majeure
                </h2>
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl border">
                  <p className="text-lg mb-6">
                    FBDTravels acts as an agent only. We cannot be held liable for:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="space-y-2">
                      <li>• Airline delays/cancellations</li>
                      <li>• Hotel overbookings</li>
                      <li>• Weather-related disruptions</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• Personal injuries or losses</li>
                      <li>• Visa rejections</li>
                      <li>• Government restrictions</li>
                    </ul>
                  </div>
                  <p className="mt-6 text-sm text-foreground/60">
                    <strong>Our liability is limited to the package cost paid.</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-20 p-12 bg-gradient-to-r from-primary to-primary/80 rounded-2xl text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Questions About Our Terms?</h2>
              <p className="text-xl mb-8 opacity-90">
                Contact our team for clarification before booking
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <a
                  href="tel:+917217649995"
                  className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg font-semibold hover:bg-white/30 transition-all"
                >
                  Call: +91 7217649995
                </a>
                <a
                  href="https://wa.me/917217649995"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:shadow-xl transition-all"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}