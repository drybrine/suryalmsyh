"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  isDarkPage?: boolean
}

export function Header({ isDarkPage = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/contact", label: "Contact" },
  ]

  // Dynamic classes based on page theme
  const getHeaderClasses = () => {
    if (isScrolled) {
      return "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200"
    }
    if (isDarkPage) {
      return "bg-white/10 backdrop-blur-sm md:bg-transparent"
    }
    return "bg-gray-900/10 backdrop-blur-sm md:bg-transparent"
  }

  const getLogoClasses = () => {
    if (isScrolled) {
      return "text-xl font-bold text-gray-900 magnetic-hover"
    }
    if (isDarkPage) {
      return "text-xl font-bold text-white md:gradient-text md:text-shimmer magnetic-hover"
    }
    return "text-xl font-bold gradient-text text-shimmer magnetic-hover"
  }

  const getNavClasses = () => {
    if (isScrolled) {
      return "relative text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-gradient-blue-start hover:to-gradient-purple-end hover:bg-clip-text font-medium text-sm tracking-wide group py-2 slide-up-on-hover"
    }
    if (isDarkPage) {
      return "relative text-gray-200 hover:text-transparent hover:bg-gradient-to-r hover:from-gradient-blue-start hover:to-gradient-purple-end hover:bg-clip-text font-medium text-sm tracking-wide group py-2 slide-up-on-hover"
    }
    return "relative text-brand-gray hover:text-transparent hover:bg-gradient-to-r hover:from-gradient-blue-start hover:to-gradient-purple-end hover:bg-clip-text font-medium text-sm tracking-wide group py-2 slide-up-on-hover"
  }

  const getMobileButtonClasses = () => {
    if (isScrolled) {
      return "md:hidden text-gray-900 bg-gray-100 border border-gray-300 hover:bg-gray-200"
    }
    if (isDarkPage) {
      return "md:hidden text-white bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 hover:text-white"
    }
    return "md:hidden text-gray-900 bg-white/20 backdrop-blur-sm border border-gray-300 hover:bg-white/30"
  }

  const getMobileNavClasses = () => {
    if (isScrolled) {
      return "text-gray-900 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
    }
    if (isDarkPage) {
      return "text-white hover:text-yellow-300 transition-colors duration-200 font-medium py-2"
    }
    return "text-gray-900 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
  }

  const getBorderClasses = () => {
    if (isScrolled) {
      return "border-t border-gray-200 pt-4"
    }
    if (isDarkPage) {
      return "border-t border-white/30 pt-4"
    }
    return "border-t border-gray-300 pt-4"
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${getHeaderClasses()}`}
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center py-4">
          <Link
            href="/"
            className={getLogoClasses()}
          >
            Surya Alamsyah
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={getNavClasses()}
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-gradient-blue-start to-gradient-purple-end transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={getMobileButtonClasses()}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-64 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className={getBorderClasses()}>
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={getMobileNavClasses()}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
