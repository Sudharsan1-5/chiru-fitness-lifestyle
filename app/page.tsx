"use client"

import { useState } from "react"
import { Check, Dumbbell, Users, Target, Zap, MessageCircle, ClipboardList, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RegistrationModal } from "@/components/registration-modal"
import { WhatsAppButton } from "@/components/whatsapp-button"

const transformations = [
  { 
    name: "Rahul S.", 
    before: "95kg", 
    after: "75kg", 
    duration: "Lost 20kg in 90 days",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=500&fit=crop"
  },
  { 
    name: "Vikram P.", 
    before: "88kg", 
    after: "72kg", 
    duration: "Lost 16kg in 75 days",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=500&fit=crop"
  },
  { 
    name: "Amit K.", 
    before: "80kg", 
    after: "65kg", 
    duration: "Lost 15kg in 60 days",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=500&fit=crop"
  },
  { 
    name: "Priya M.", 
    before: "92kg", 
    after: "78kg", 
    duration: "Lost 14kg in 70 days",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=500&fit=crop"
  },
  { 
    name: "Suresh R.", 
    before: "85kg", 
    after: "68kg", 
    duration: "Lost 17kg in 80 days",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=400&h=500&fit=crop"
  },
]

const benefits = [
  { icon: ClipboardList, text: "Personalized Workout Plan" },
  { icon: Dumbbell, text: "Simple Indian Diet Plan" },
  { icon: Target, text: "Weekly Progress Tracking" },
  { icon: MessageCircle, text: "Daily WhatsApp Support" },
]

const highlights = [
  { icon: Zap, text: "No Gym Needed" },
  { icon: Users, text: "Beginner Friendly" },
  { icon: Target, text: "Works for Men & Women" },
  { icon: Rocket, text: "Structured Fat Loss System" },
]

const steps = [
  { number: "01", title: "Fill your details", description: "Quick 2-minute form" },
  { number: "02", title: "Get your custom plan", description: "Tailored to your goals" },
  { number: "03", title: "Start your transformation", description: "Results in weeks" },
]

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Chiru, I want to know more about the Fat to Fit Programme.")
    window.open(`https://wa.me/917702316407?text=${message}`, "_blank")
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex flex-col justify-center px-5 py-12">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
        
      
        
        <div className="relative z-10 max-w-lg mx-auto w-full">
          {/* Brand Logo */}
          <div className="flex justify-center mb-6">
            <img 
              src="/logo.jpeg" 
              alt="Chiru Fitness Lifestyle" 
              className="w-20 h-20 object-contain rounded-full border-2 border-primary/30 bg-white/90 p-1"
            />
          </div>
          
          <div className="mb-6 text-center">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-primary/20 text-primary rounded-full">
              Limited Time Offer
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-balance mb-4 text-center">
            <span className="text-primary">Fat to Fit</span>
            <br />
            Transformation Programme
          </h1>
          
          <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground mb-6">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-primary" />
              No Gym Required
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-primary" />
              100% Home Workouts
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-primary" />
              Simple Diet Plan
            </span>
          </div>
          
          <div className="bg-card/50 border border-border rounded-xl p-4 mb-8">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-primary">₹999</span>
              <span className="text-lg text-muted-foreground line-through">₹2,999</span>
              <span className="text-xs text-accent font-semibold">67% OFF</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">One-time payment • Lifetime access</p>
          </div>
          
          <div className="flex flex-col gap-3">
            <Button
              onClick={() => setIsModalOpen(true)}
              className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
            >
              Start Your Transformation
            </Button>
            <Button
              onClick={handleWhatsAppClick}
              variant="outline"
              className="w-full h-14 text-lg font-medium border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Transformations Section */}
      <section className="py-16 bg-card/30">
        <div className="max-w-lg mx-auto px-5">
          <h2 className="text-2xl font-bold text-center mb-2">Real Transformations</h2>
          <p className="text-muted-foreground text-center mb-8">Results from our clients</p>
        </div>
        
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 px-5 pb-4" style={{ width: "max-content" }}>
            {transformations.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-56 bg-card border border-border rounded-xl overflow-hidden"
              >
                <div className="relative h-64 bg-muted">
                  <img
                    src={item.image}
                    alt={`${item.name} transformation`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-white/80 text-sm">{item.before}</span>
                      <span className="text-primary font-bold">→</span>
                      <span className="text-primary font-bold">{item.after}</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 text-center">
                  <p className="font-semibold text-sm mb-1">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <p className="text-xs text-muted-foreground text-center mt-4 px-5">
          Swipe to see more transformations →
        </p>
      </section>

      {/* What You Get Section */}
      <section className="px-5 py-16">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">What You Get</h2>
          
          <div className="space-y-4">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-card border border-border rounded-xl p-4"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary/20 rounded-lg">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Highlights Section */}
      <section className="px-5 py-16 bg-card/30">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Program Highlights</h2>
          
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-card border border-border rounded-xl p-5"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-full mb-3">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-medium text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-5 py-16">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
          
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary text-primary-foreground rounded-full font-bold">
                  {step.number}
                </div>
                <div className="pt-1">
                  <h3 className="font-bold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-5 py-16 bg-gradient-to-t from-primary/10 via-card/30 to-transparent">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">Join the Transformation Now</h2>
          <p className="text-muted-foreground mb-8">Limited spots available at ₹999</p>
          
          <div className="flex flex-col gap-3">
            <Button
              onClick={() => setIsModalOpen(true)}
              className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
            >
              Start Now
            </Button>
            <Button
              onClick={handleWhatsAppClick}
              variant="outline"
              className="w-full h-14 text-lg font-medium border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
          </div>
          
           <div className="mt-8 flex flex-col items-center gap-2">
            <img 
              src="/logo.jpeg" 
              alt="Chiru Fitness Lifestyle" 
              className="w-12 h-12 object-contain rounded-full bg-white/90 p-0.5 opacity-80"
            />
            <p className="text-xs text-muted-foreground">
              © 2026 Chiru Fitness Lifestyle. All rights reserved.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky WhatsApp Button */}
      <WhatsAppButton />

      {/* Registration Modal */}
      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </main>
  )
}
