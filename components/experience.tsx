"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

export function Experience() {
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

  const experiences = [
    {
      title: "Computer Science Student",
      company: "Indonesian Computer University",
      location: "Bandung, Indonesia",
      period: "2022 - Present",
      description:
        "Pursuing a comprehensive degree in Computer Science with focus on software engineering, algorithms, and data structures. Maintaining strong academic performance while actively participating in programming courses and practical projects.",
      technologies: ["Java", "Python", "C++", "JavaScript", "HTML/CSS"],
    },
    {
      title: "Computer and Network Engineering",
      company: "SMK NEGERI 13 BANDUNG",
      location: "Bandung, Indonesia",
      period: "2019 - 2022", // Assuming a 3-year program before university
      description:
        "Completed vocational high school education with a specialization in Computer and Network Engineering. Gained foundational knowledge in computer hardware, networking, operating systems, and basic programming.",
      technologies: ["Networking", "Hardware", "Operating Systems", "Basic Programming"],
    },
    {
      title: "Academic Projects & Coursework",
      company: "University Projects",
      location: "Indonesian Computer University",
      period: "2022 - Present",
      description:
        "Developed multiple academic projects including web applications, desktop software, and algorithm implementations. Collaborated effectively with team members on group projects and technical presentations.",
      technologies: ["React", "Node.js", "MySQL", "Git", "VS Code"],
    },
    {
      title: "Self-Directed Learning",
      company: "Independent Study",
      location: "Remote",
      period: "2021 - Present",
      description:
        "Continuously expanding technical knowledge through online courses, tutorials, and hands-on practice. Building personal projects to apply theoretical concepts and stay current with industry trends.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Vercel"],
    },
  ]

  return (
    <section ref={sectionRef} id="experience" className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 bg-brand-light">
      <div className="container mx-auto max-w-4xl">
        <div className={`text-center mb-16 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">Experience & Education</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-gradient-purple-start to-gradient-pink-end mx-auto rounded-full"></div>
          <p className="text-brand-gray mt-4 max-w-2xl mx-auto leading-relaxed">
            My academic journey and learning experiences in computer science and software development.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`card-shadow-gradient rounded-xl border border-white/20 hover-glow bg-white/90 backdrop-blur-sm ${
                isVisible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 * index + 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-grow min-w-0">
                    <CardTitle className="text-brand-dark font-semibold text-xl leading-tight mb-2">
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="text-brand-primary font-medium text-base leading-tight">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col lg:items-end gap-1 flex-shrink-0">
                    <div className="flex items-center text-sm text-brand-gray whitespace-nowrap">
                      <CalendarDays className="mr-2 h-4 w-4 flex-shrink-0" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center text-sm text-brand-gray">
                      <MapPin className="mr-2 h-4 w-4 flex-shrink-0" />
                      <span className="break-words">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray leading-relaxed mb-4 text-sm">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-white border border-brand-border text-brand-gray font-medium text-xs px-3 py-1 rounded-full whitespace-nowrap"
                    >
                      {tech}
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
