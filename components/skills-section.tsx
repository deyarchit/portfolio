import { Card, CardContent } from "@/components/ui/card"
import { Cloud, Code, Database, Server, Settings, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function SkillsSection() {
  const programmingLanguages = ["Go", "Python", "Typescript"]
  const cloudProviders = ["AWS", "GCP"]
  const cloudSolutions = ["Storage", "Eventing", "Compute", "IAM"]
  const cloudTechnologies = ["Kubernetes", "Helm", "Terraform"]
  const backendSkills = ["Cloud-native microservices", "API development", "Postgres-SQL", "Redis"]
  const frontendSkills = ["React", "Axios", "Bootstrap"]

  const skills = [
    {
      category: "Programming Languages",
      items: programmingLanguages,
    },
    {
      category: "Cloud Providers",
      items: cloudProviders,
    },
    {
      category: "Cloud Solutions",
      items: cloudSolutions,
    },
    {
      category: "Cloud Technologies",
      items: cloudTechnologies,
    },
    {
      category: "Backend",
      items: backendSkills,
    },
    {
      category: "Frontend",
      items: frontendSkills,
    },
  ]

  const expertiseAreas = [
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Multi-Cloud Infrastructure",
      description: "Designing and implementing solutions across AWS and GCP environments",
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Container Orchestration",
      description: "Kubernetes, Helm, and container lifecycle management",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Microservices Architecture",
      description: "Designing and implementing cloud-native microservices",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Artifact Management",
      description: "Secure replication, access control, and retention of deployment artifacts",
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "System Optimization",
      description: "Performance tuning and scalability improvements",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Product Ownership",
      description: "Translating business needs into technical requirements",
    },
  ]

  return (
    <div className="space-y-12">
      <div>
        <h3 className="text-xl font-bold mb-6">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skillGroup, index) => (
            <Card key={index} className="border-l-2 border-primary">
              <CardContent className="">
              <h4 className="text-md font-semibold mb-2">{skillGroup.category}</h4>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-6">Areas of Expertise</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => (
            <Card key={index} className="border-l-4 border-primary">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary">{area.icon}</div>
                <h4 className="text-lg font-bold mb-2">{area.title}</h4>
                <p className="text-muted-foreground">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}