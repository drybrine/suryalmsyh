"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Server, Smartphone } from "lucide-react"

export function Skills() {
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

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "HTML5", "CSS3", "JavaScript"],
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: ["Node.js", "Python", "Express.js", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL", "Docker"],
      iconColor: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research", "Wireframing", "Design Systems"],
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["React Native", "Flutter", "iOS", "Android", "Mobile UI", "App Store", "Play Store"],
      iconColor: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ]

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-light">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1.5 bg-brand-primary mx-auto rounded-full"></div>
          <p className="text-brand-gray mt-4 max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and the technologies I work with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`card-shadow rounded-lg border-none card-hover-effect ${
                isVisible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 * index + 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-brand-dark font-semibold text-lg">
                  <div className={`p-3 rounded-full ${category.bgColor}`}>
                    <category.icon className={`h-6 w-6 ${category.iconColor}`} />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-white border border-brand-border text-brand-gray hover:bg-gray-50 transition-colors duration-200 font-medium text-sm px-3 py-1 rounded-full"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
