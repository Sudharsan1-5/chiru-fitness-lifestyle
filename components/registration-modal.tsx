"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface RegistrationModalProps {
  isOpen: boolean
  onClose: () => void
}

const experienceOptions = ["Below 1 year", "Above 2 years", "Above 5 years"]
const goalOptions = ["Fat loss", "Muscle building", "Body recomposition", "Competition prep"]
const occupationOptions = ["Student", "Working professional", "Business owner"]

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    height: "",
    weight: "",
    age: "",
    whatsapp: "",
    experience: "",
    goal: "",
    occupation: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleRadioChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const message = `Hi Chiru, I want to join the Fat to Fit Programme.

Name: ${formData.name}
Height: ${formData.height}
Weight: ${formData.weight}
Age: ${formData.age}
WhatsApp Number: ${formData.whatsapp}
Experience: ${formData.experience}
Goal: ${formData.goal}
Occupation: ${formData.occupation}`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/919876543210?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-card border border-border rounded-t-2xl sm:rounded-2xl p-6 animate-in slide-in-from-bottom duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <h2 className="text-2xl font-bold text-primary mb-6">Start Your Transformation</h2>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="bg-input border-border text-foreground h-12 text-base"
              placeholder="Your full name"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="height" className="text-foreground">Height (cm)</Label>
              <Input
                id="height"
                name="height"
                type="number"
                value={formData.height}
                onChange={handleInputChange}
                required
                className="bg-input border-border text-foreground h-12 text-base"
                placeholder="170"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="weight" className="text-foreground">Weight (kg)</Label>
              <Input
                id="weight"
                name="weight"
                type="number"
                value={formData.weight}
                onChange={handleInputChange}
                required
                className="bg-input border-border text-foreground h-12 text-base"
                placeholder="75"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="age" className="text-foreground">Age</Label>
              <Input
                id="age"
                name="age"
                type="number"
                value={formData.age}
                onChange={handleInputChange}
                required
                className="bg-input border-border text-foreground h-12 text-base"
                placeholder="25"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="whatsapp" className="text-foreground">WhatsApp</Label>
              <Input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                value={formData.whatsapp}
                onChange={handleInputChange}
                required
                className="bg-input border-border text-foreground h-12 text-base"
                placeholder="+91..."
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label className="text-foreground">Fitness Experience</Label>
            <div className="flex flex-wrap gap-2">
              {experienceOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleRadioChange("experience", option)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    formData.experience === option
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <Label className="text-foreground">Fitness Goal</Label>
            <div className="flex flex-wrap gap-2">
              {goalOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleRadioChange("goal", option)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    formData.goal === option
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <Label className="text-foreground">Occupation</Label>
            <div className="flex flex-wrap gap-2">
              {occupationOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleRadioChange("occupation", option)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    formData.occupation === option
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <Button
            type="submit"
            className="w-full h-14 text-lg font-bold bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl mt-6"
          >
            Submit on WhatsApp
          </Button>
        </form>
      </div>
    </div>
  )
}
