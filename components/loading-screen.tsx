import { Loader2 } from "lucide-react"

export function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-brand-light text-brand-dark text-center p-4">
      <div className="flex flex-col items-center space-y-4 animate-fadeInUp">
        <Loader2 className="h-10 w-10 animate-spin text-brand-primary" />
        <p className="text-xl font-medium text-brand-gray">Materializing your experience...</p>
      </div>
      <footer className="absolute bottom-8 text-sm text-brand-gray animate-fadeIn" style={{ animationDelay: "1.5s" }}>
        Designed and coded by Surya Alamsyah Putera Pratama © 2024
      </footer>
    </div>
  )
}
