"use client"

import Link from "next/link"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "aasurya.app@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=aasurya.app@gmail.com",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+6285156081438",
      href: "tel:+6285156081438", // Use tel: for phone numbers
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bandung, Indonesia",
      href: "https://www.google.com/maps/search/Bandung,+Indonesia", // Example map link
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
  ]

  return (
    <section ref={sectionRef} id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-gradient-blue-start to-gradient-purple-end mx-auto rounded-full"></div>
          <p className="text-brand-gray mt-4 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div
            className={`space-y-6 ${isVisible ? "animate-slideInLeft" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-2xl font-semibold text-brand-dark mb-6 leading-tight">Let's Connect</h3>
            <p className="text-brand-gray leading-relaxed mb-8 text-base">
              I'm always interested in new opportunities and exciting projects. Whether you have a question or just want
              to say hello, feel free to reach out.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Link
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg border border-brand-border hover:border-brand-primary/20 card-shadow group interactive-hover magnetic-hover"
                >
                  <div
                    className={`flex items-center justify-center w-12 h-12 ${info.bgColor} rounded-full flex-shrink-0 group-hover:scale-105 transition-transform`}
                  >
                    <info.icon className={`h-6 w-6 ${info.iconColor}`} />
                  </div>
                  <div className="min-w-0 flex-grow">
                    <h4 className="font-semibold text-brand-dark leading-tight mb-1">{info.title}</h4>
                    <p className="text-brand-gray text-sm break-all group-hover:text-brand-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Card
            className={`card-shadow rounded-lg border-none ${isVisible ? "animate-slideInRight" : "opacity-0"}`}
            style={{ animationDelay: "0.4s" }}
          >
            <CardHeader>
              <CardTitle className="text-brand-dark leading-tight text-2xl">Send a Message</CardTitle>
              <CardDescription className="text-brand-gray leading-relaxed">
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-brand-dark font-medium text-sm">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-brand-border focus:border-brand-primary focus:ring-brand-primary text-sm rounded-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-brand-dark font-medium text-sm">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-brand-border focus:border-brand-primary focus:ring-brand-primary text-sm rounded-md"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-brand-dark font-medium text-sm">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="border-brand-border focus:border-brand-primary focus:ring-brand-primary text-sm rounded-md"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-brand-dark font-medium text-sm">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border-brand-border focus:border-brand-primary focus:ring-brand-primary resize-none text-sm rounded-md"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gradient-blue-start to-gradient-blue-end hover:from-gradient-purple-start hover:to-gradient-purple-end text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl btn-interactive ripple-effect"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
