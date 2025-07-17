"use client"

import { usePathname } from "next/navigation"
import { Header } from "./header"

export function AdaptiveHeader() {
  const pathname = usePathname()
  const isDarkPage = pathname === "/"
  
  return <Header isDarkPage={isDarkPage} />
}