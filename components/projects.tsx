"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export function Projects() {
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

  const projects = [
    {
      title: "University Course Management System",
      description:
        "A comprehensive web-based system for managing university courses, built as a capstone project. Features include course registration, grade tracking, and an intuitive student dashboard with modern UI design.",
      image: "/placeholder.svg?height=240&width=400",
      technologies: ["React", "Node.js", "MySQL", "Express.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Personal Finance Tracker",
      description:
        "A responsive web application for tracking personal expenses and income with real-time data visualization and budget management features. Built with modern technologies for optimal performance.",
      image: "/placeholder.svg?height=240&width=400",
      technologies: ["Next.js", "Chart.js", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Algorithm Visualizer",
      description:
        "An interactive educational tool that visualizes sorting and searching algorithms, helping students understand complex algorithmic concepts through visual representation and step-by-step execution.",
      image: "/placeholder.svg?height=240&width=400",
      technologies: ["JavaScript", "HTML5", "CSS3", "Canvas API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Campus Event Management",
      description:
        "A collaborative platform for managing campus events and activities with features for event creation, registration, and notification systems. Designed to streamline university event coordination.",
      image: "/placeholder.svg?height=240&width=400",
      technologies: ["PHP", "Laravel", "Bootstrap", "MySQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ]

  return (
    <section ref={sectionRef} id="projects" className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-gradient-blue-start to-gradient-purple-end mx-auto rounded-full"></div>
          <p className="text-brand-gray mt-4 max-w-2xl mx-auto leading-relaxed">
            A selection of projects that demonstrate my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden card-shadow-gradient rounded-xl border border-white/20 h-full flex flex-col bg-white/80 backdrop-blur-sm card-interactive tilt-hover ${
                isVisible ? "animate-zoomIn" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 * index + 0.2}s` }}
            >
              <div className="aspect-video overflow-hidden bg-gray-100 flex-shrink-0">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 hover:rotate-1"
                />
              </div>
              <CardHeader className="pb-4 flex-shrink-0">
                <CardTitle className="text-brand-dark font-semibold text-xl leading-tight mb-2">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-brand-gray leading-relaxed text-sm line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-white border border-brand-border text-brand-gray font-medium text-xs px-3 py-1 rounded-full whitespace-nowrap"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-gradient-blue-start to-gradient-blue-end hover:from-gradient-purple-start hover:to-gradient-purple-end text-white flex-1 rounded-lg shadow-lg hover:shadow-xl btn-interactive bounce-on-hover"
                    asChild
                  >
                    <Link href={project.liveUrl} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-2 border-gradient-blue-start/30 text-brand-dark hover:bg-gradient-to-r hover:from-gradient-blue-start hover:to-gradient-blue-end hover:text-white bg-transparent flex-1 rounded-lg shadow-lg hover:shadow-xl btn-interactive wiggle-on-hover"
                    asChild
                  >
                    <Link href={project.githubUrl} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
