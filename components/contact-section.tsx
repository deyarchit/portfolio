"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Linkedin } from "lucide-react"
import Link from "next/link"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <p className="text-lg mb-6">
          I'm always interested in hearing about new projects and opportunities. Whether you have a question or just
          want to say hello, I'll try my best to get back to you!
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <span>dey.archit@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Linkedin className="h-5 w-5 text-primary" />
            <Link href="https://www.linkedin.com/in/archit-dey-b412365a/" className="hover:underline">
              linkedin.com/in/archit-dey-b412365a
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            <span>San Francisco, California, United States</span>
          </div>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-2">Expertise Areas</h3>
          <p className="mb-4">I specialize in:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Multi-Cloud Infrastructure Engineering</li>
            <li>Kubernetes & Container Orchestration</li>
            <li>Microservices Architecture</li>
            <li>Infrastructure as Code (Terraform)</li>
            <li>Product Ownership</li>
            <li>Developer Experience Optimization</li>
          </ul>
        </div>
      </div>

      <Card>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
