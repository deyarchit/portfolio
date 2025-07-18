import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail, Users, Share2, Target, Award, TrendingDown, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import ValueCard from "@/components/value-card"
import ExperienceTimeline from "@/components/experience-timeline"
import SkillsSection from "@/components/skills-section"
import EducationSection from "@/components/education-section"
// import TestimonialSection from "@/components/testimonial-section"
// import ContactSection from "@/components/contact-section"
// import CertificationsSection from "@/components/certifications-section"

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
            <Link href="#education" className="text-sm font-medium hover:text-primary transition-colors">
              Education
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#values" className="text-sm font-medium hover:text-primary transition-colors">
              Values
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
              Building Scalable Products in the Cloud
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Experienced Lead Software Engineer and Product Owner specializing in Multi-Cloud Infrastructure, Developer Experience, and driving impactful product strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="#projects">
                  Explore My Portfolio <ArrowRight className="ml-2 h-4 w-4" />
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
                  <Image
                    src="./Archit.png"
                    width={256}
                    height={256}
                    alt="Archit Dey"
                    className="w-full h-full object-cover"
                    unoptimized
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
                title="WADE AI"
                description="Developed a unifying framework to address scattered project context and ineffective decision-making. This system streamlines information organization, captures decision rationales, and leverages AI for informed decision making."
                tags={["Product Creation", "AI Engineering", "Next.js", "Go", "Python"]}
                link="https://www.wade-ai.com"
              />
              <ProjectCard
                title="Cloud-Agnostic Managed Operations at Scale"
                description="Laid the foundation for a secure and scalable mechanism that allows thousands of Salesforce developers to perform various Kubernetes and Cloud resource operations on any cloud provider where Salesforce services are deployed."
                tags={["Go", "Kubernetes", "Terraform", "AWS", "GCP"]}
              />
              <ProjectCard
                title="Cross-Substrate Artifact Management"
                description="Co-architected a collection of 15+ single-purpose microservices using cloud-native design patterns for secure artifact replication, permission, and lifecycle management across multi-cloud environments."
                tags={["Go", "Microservices", "Kubernetes", "AWS", "GCP"]}
              />              
              {/* <ProjectCard
                title="Queue-based Autoscaling for Artifact Replicators"
                description="Led the development of a system that automatically scaled based on queue demand. This system managed up to PetaBytes of data, guaranteeing high availability and reliability."
                tags={["Go", "Keda", "Microservices", "Cloud Eventing", "Kubernetes"]}
              /> */}
              <ProjectCard
                title="Cloud-Native Yum Repository"
                description="Conceptualized & developed a Cloud-Native Yum Repository which worked efficiently at enterprise scale. Implemented multiple scalability improvements to handle platform growth patterns and reduced repository metadata update times on large Yum repos by 66%."
                tags={["Go", "Kubernetes", "Helm", "Spinnaker", "AWS", "GCP"]}
              />
              <ProjectCard
                title="Code Coverage Metrics Processing System"
                description="Enhanced the code coverage metrics processing system to rapidly process data from millions of test executions, saving over 6,000 compute hours weekly."
                tags={["Java", "Spring Boot", "Distributed Systems"]}
              />
              <ProjectCard
                title="Test Asset Management Dashboard"
                description="Developed a dashboard that streamlined test asset management for scrum teams, enabling rapid identification and action on failed test cases – particularly for teams managing over 120,000 tests."
                tags={["React", "Java", "Database"]}
              />
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Education</h2>
            <EducationSection />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 container">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Skills & Expertise</h2>
          <SkillsSection />
        </section>

        {/* Values Section */}
        <section id="values" className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-8">My Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ValueCard
                title="People First"
                description="For me, people always come first. The collective mindset and collaboration within a team are more critical than the specific problem or technology stack."
                icon={<Users className="h-6 w-6" />}
              />
              <ValueCard
                title="Team Collaboration"
                description="A team’s greatest strength lies in its collective identity. A unified 'we' far surpasses individual efforts, and I actively seek to empower every team member to achieve their full potential together."
                icon={<Share2 className="h-6 w-6" />}
              />
              <ValueCard
                title="Business-Centric Decisions"
                description="My guiding principle is to make decisions that maximize business success. This requires a comprehensive assessment of all viewpoints, ensuring alignment towards overarching company goals."
                icon={<Target className="h-6 w-6" />}
              />
              <ValueCard
                title="Fair Recognition & Incentives"
                description="I believe fair recognition and incentives are fundamental to building a successful business. They foster collaboration, create a positive environment, and drive innovation and growth."
                icon={<Award className="h-6 w-6" />}
              />
              <ValueCard
                title="Taming Complexity"
                description="Like all systems, businesses inevitably succumb to the law of entropy, characterized by an increasing tendency towards disorder. We must proactively invest in efforts to mitigate this complexity, ensuring the business maintains its agility and adaptability."
                icon={<TrendingDown className="h-6 w-6" />}
              />
              <ValueCard
                title="Work-Life Harmony"
                description="I advocate for a healthy work-life harmony, recognizing that time away from work is crucial for long-term well-being and ultimately benefits both individuals and the business."
                icon={<Heart className="h-6 w-6" />}
              />
              <ValueCard
                title="&quot;Human Count&quot;, Not &quot;Head Count&quot;"
                description="I believe in considering employees as 'human count' rather than 'head count.' This means recognizing and empowering individuals, ensuring businesses prioritize people over mere numbers."
                icon={<Users className="h-6 w-6" />}
              />
            </div>
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
