"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
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
    <section ref={sectionRef} id="about" className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-white via-purple-50/20 to-pink-50/20">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-gradient-pink-start to-gradient-purple-end mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div
            className={`card-shadow rounded-lg overflow-hidden lg:max-w-sm lg:mx-auto ${isVisible ? "animate-slideInLeft" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <Card className="border-none">
              <CardContent className="p-0">
                <img
                  src="/images/profile.jpg"
                  alt="Surya Alamsyah Putera Pratama"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </CardContent>
            </Card>
          </div>

          <div
            className={`space-y-6 ${isVisible ? "animate-slideInRight" : "opacity-0"}`}
            style={{ animationDelay: "0.4s" }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-brand-dark mb-4">Passionate Computer Science Student</h3>
              <p className="text-brand-gray leading-relaxed text-base mb-4">
                I'm Surya Alamsyah Putera Pratama, a dedicated Computer Science student at Indonesian Computer
                University with a strong passion for software development and emerging technologies.
              </p>
              <p className="text-brand-gray leading-relaxed text-base">
                My academic journey focuses on building solid foundations in programming, algorithms, and software
                engineering principles. I'm committed to continuous learning and applying theoretical knowledge to
                practical, real-world solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {[
                { label: "University", value: "Indonesian Computer University" },
                { label: "Major", value: "Computer Science" },
                { label: "Status", value: "Active Student" },
                { label: "Focus", value: "Software Development" },
              ].map((stat, index) => (
                <div key={index} className="p-5 bg-white/80 backdrop-blur-sm rounded-xl border border-white/30 card-shadow-gradient card-interactive tilt-hover">
                  <h4 className="font-semibold gradient-text text-shimmer text-sm mb-2">{stat.label}</h4>
                  <p className="text-brand-dark text-base font-medium">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
