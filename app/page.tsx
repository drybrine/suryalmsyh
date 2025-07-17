"use client"

import { useState, useEffect } from "react"
import { LoadingScreen } from "@/components/loading-screen"
import { Hero } from "@/components/hero"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500) // Simulate loading for 2.5 seconds

    return () => clearTimeout(timer)
  }, [])

  return <>{isLoading ? <LoadingScreen /> : <Hero />}</>
}
