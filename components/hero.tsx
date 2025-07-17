"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target) // Stop observing once visible
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-12 overflow-hidden
                 bg-gradient-to-br from-brand-light to-white section-gradient-bg"
    >
      <div className="container mx-auto max-w-4xl text-center z-10">
        <div className={`space-y-6 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-tight">
            <span className="block">
              Hi, I'm <span className="text-brand-primary">Surya Alamsyah</span>
            </span>
            <span className="block">Putera Pratama</span>
          </h1>

          <p className="text-lg sm:text-xl text-brand-gray max-w-2xl mx-auto leading-relaxed">
            A passionate Computer Science student at Indonesian Computer University, dedicated to crafting innovative
            software solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              variant="outline"
              size="lg"
              className="border-brand-border text-brand-dark hover:bg-brand-light px-8 py-3 font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-300 w-full sm:w-auto bg-transparent"
              asChild
            >
              <Link href="/resume.pdf" target="_blank" download>
                Download Resume
                <span className="ml-2">↓</span>
              </Link>
            </Button>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            {[
              { href: "https://github.com/drybrine", icon: Github, label: "GitHub" },
              {
                href: "https://id.linkedin.com/in/surya-alamsyah-putera-pratama-a32168176",
                icon: Linkedin,
                label: "LinkedIn",
              },
              {
                href: "https://mail.google.com/mail/?view=cm&fs=1&to=aasurya.app@gmail.com",
                icon: Mail,
                label: "Email",
              },
            ].map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                className="p-3 text-brand-gray hover:text-brand-primary transition-colors duration-200 hover:scale-110 transform rounded-full"
                aria-label={label}
                target="_blank" // Open in new tab
                rel="noopener noreferrer" // Security best practice for target="_blank"
              >
                <Icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
