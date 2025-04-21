"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

export default function TestimonialSection() {
  // Update the testimonials with placeholder content
  const testimonials = [
    {
      quote:
        "Archit's technical expertise in cloud infrastructure and microservices architecture transformed our deployment pipeline. His ability to balance technical requirements with business needs is exceptional.",
      author: "Former Manager",
      position: "Engineering Director, Salesforce",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Working with Archit on our cloud migration was a game-changer. His deep knowledge of Kubernetes, Terraform, and multi-cloud environments helped us deliver a robust solution on time and under budget.",
      author: "Team Member",
      position: "Senior Engineer, Salesforce",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Archit has a rare combination of deep technical knowledge and product management skills. He consistently delivered solutions that met both our technical and business objectives while mentoring junior team members.",
      author: "Product Manager",
      position: "Product Director, Salesforce",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative">
      <Card className="border-none shadow-lg bg-background">
        <CardContent className="pt-10 pb-10">
          <div className="text-primary mb-6">
            <Quote className="h-12 w-12" />
          </div>
          <blockquote className="text-xl md:text-2xl mb-8 italic">{testimonials[currentIndex].quote}</blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].author}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-bold">{testimonials[currentIndex].author}</p>
              <p className="text-sm text-muted-foreground">{testimonials[currentIndex].position}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center mt-6 gap-2">
        <Button variant="outline" size="icon" onClick={prevTestimonial} aria-label="Previous testimonial">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant={index === currentIndex ? "default" : "outline"}
            size="icon"
            className="w-2 h-2 rounded-full p-0"
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          >
            <span className="sr-only">Testimonial {index + 1}</span>
          </Button>
        ))}
        <Button variant="outline" size="icon" onClick={nextTestimonial} aria-label="Next testimonial">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
