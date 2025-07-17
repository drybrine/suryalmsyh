import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function MainContent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-700 text-center p-4">
      <div className="space-y-6 animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Hello, I'm <span className="text-professional-primary">Surya Alamsyah</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          A Computer Science student passionate about creating innovative software solutions.
        </p>
        <div className="flex justify-center space-x-6 pt-4">
          {[
            { href: "https://github.com", icon: Github, label: "GitHub" },
            { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:surya.alamsyah@example.com", icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <Link
              key={label}
              href={href}
              className="p-3 text-gray-400 hover:text-professional-primary transition-colors duration-200 hover:bg-gray-100 rounded-lg"
              aria-label={label}
            >
              <Icon className="h-6 w-6" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
