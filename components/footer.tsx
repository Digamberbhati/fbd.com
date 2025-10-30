import Link from "next/link"
import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Gradient Line */}
        <div className="h-1 bg-gradient-to-r from-primary to-primary/70 mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2">
              FBDTravels
            </h3>
            <p className="text-white/70">Creating unforgettable travel experiences since 2020.</p>
            <div className="mt-4 space-y-2 text-sm text-white/70">
              <p>📞 +91 7217649995</p>
              <p>📧 info@fbdtravels.com</p>
              <p className="text-xs mt-3">3rd Floor, Krishna Palace, Faridabad, Haryana 121001</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-primary transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/term" className="hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 hover:bg-primary rounded-lg transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-primary rounded-lg transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-primary rounded-lg transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-primary rounded-lg transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-white/70 space-y-2">
          <p>&copy; 2025 FBDTravels. All Rights Reserved.</p>
          <p className="text-sm">
            Developed & Designed by{" "}
            <a
              href="https://www.greatertechhub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              GreaterTechHub
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
