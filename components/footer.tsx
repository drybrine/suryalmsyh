"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const socialLinks = [
    { href: "https://github.com/drybrine", icon: Github, label: "GitHub" },
    { href: "https://id.linkedin.com/in/surya-alamsyah-putera-pratama-a32168176", icon: Linkedin, label: "LinkedIn" },
    { href: "https://mail.google.com/mail/?view=cm&fs=1&to=aasurya.app@gmail.com", icon: Mail, label: "Email" },
  ]

  return (
    <footer className="bg-brand-dark text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Surya Alamsyah Putera Pratama</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Computer Science student passionate about creating innovative digital solutions and learning new
              technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="p-2 text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform rounded-full"
                  aria-label={label}
                  target="_blank" // Open in new tab
                  rel="noopener noreferrer" // Security best practice for target="_blank"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact Information</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>Bandung, Indonesia</p>
              <p>aasurya.app@gmail.com</p>
              <p>+6285156081438</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">© 2025 Surya Alamsyah Putera Pratama. All rights reserved.</p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-brand-primary hover:bg-blue-700 shadow-lg z-50 transition-all duration-300 hover:scale-110"
          size="icon"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </footer>
  )
}
