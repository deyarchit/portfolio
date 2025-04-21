import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import ExperienceTimeline from "@/components/experience-timeline"
import SkillsSection from "@/components/skills-section"
import TestimonialSection from "@/components/testimonial-section"
import ContactSection from "@/components/contact-section"
import EducationSection from "@/components/education-section"
import CertificationsSection from "@/components/certifications-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-12 flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Archit Dey
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#education" className="text-sm font-medium hover:text-primary transition-colors">
              Education
            </Link>
            {/* <Link href="#certifications" className="text-sm font-medium hover:text-primary transition-colors">
              Certifications
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link> */}
          </nav>
          <div className="flex space-x-4">
            <Link href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/archit-dey-b412365a/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:dey.archit@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Lead Software Engineer & Product Owner
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Multi-Cloud Infrastructure Engineering & Developer Experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="#projects">
                  View my work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <div className="container items-start">
            <h2 className="text-3xl font-bold tracking-tight mb-8">About Archit</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-lg mb-4">
                Software engineer with more than a decade of experience across diverse software domains. 
                A collaborative team player who believes in collective growth and consistently works to enhance services to meet evolving business needs. 
                Brings a strong Product Ownership mindset, continuously seeking ways to improve the product while ensuring alignment with the overall vision.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-64 h-64 rounded-full overflow-hidden">
                  <img
                    src="/Archit.jpeg"
                    alt="Archit Dey"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-6 container">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Work Experience</h2>
          <ExperienceTimeline />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title="Cloud Agnostic Managed Operations at Scale"
                description="Laid the foundation for a a secure & scalable mechanism to provide developers at Salesforce the ability to perform various types of Kubernetes and Cloud resource operations on any cloud provider where Salesforce services get deployed."
                tags={["Go", "Kubernetes", "Terraform", "AWS", "GCP"]}
              />
              <ProjectCard
                title="Cross-Substrate Artifact Management"
                description="Co-architected 15+ microservices using cloud native design patterns for secure artifact replication, permission & lifecycle management of artifacts across multi-cloud environments."
                tags={["Go", "Microservices", "Kubernetes", "AWS", "GCP"]}
              />
              <ProjectCard
                title="Cloud Native Yum Repository"
                description="Conceptualized & developed a Cloud Native Yum Repository which worked efficiently at enterprise scale. Implemented multiple scalability improvements to handle platform growth patterns and reduced repository metadat update times on large yum repos by 66%."
                tags={["Go", "Kubernetes", "Helm", "Spinnaker"]}
              />
              <ProjectCard
                title="Queue-based Autoscaling for Artifact Replicators"
                description="Guided development and adoption of queue-based autoscaling using Keda for improved performance."
                tags={["Keda", "Kubernetes", "Go", "Microservices"]}
              />
              <ProjectCard
                title="Cross Substrate Object Replicator"
                description="Implemented streaming diff functionality which reduced full bucket replication time by 80%."
                tags={["Go", "AWS", "Cloud Storage", "Optimization"]}
              />
              <ProjectCard
                title="Code Coverage Metrics Processing System"
                description="Built a distributed system to process code coverage metrics from millions of test executions, saving over 6000 compute hours weekly."
                tags={["Java", "Spring", "Distributed Systems", "Kubernetes"]}
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 container">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Skills & Expertise</h2>
          <SkillsSection />
        </section>

        {/* Education Section */}
        <section id="education" className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Education</h2>
            <EducationSection />
          </div>
        </section>

        {/* Certifications Section */}
        {/* <section id="certifications" className="py-16 container">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Certifications & Awards</h2>
            <CertificationsSection />
          </div>
        </section> */}

        {/* Testimonials Section */}
        {/* <section id="testimonials" className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-8">What People Say</h2>
            <TestimonialSection />
          </div>
        </section> */}

        {/* Contact Section */}
        {/* <section id="contact" className="py-16 container">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Get In Touch</h2>
          <ContactSection />
        </section> */}
      </main>

      {/* <footer className="border-t py-8 bg-background">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Archit Dey. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/archit-dey-b412365a/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:dey.archit@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer> */}
    </div>
  )
}
