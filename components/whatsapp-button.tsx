"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Chiru, I want to know more about the Fat to Fit Programme.")
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/30 transition-transform hover:scale-105 active:scale-95"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  )
}
