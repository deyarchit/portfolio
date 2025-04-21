import { Card, CardContent } from "@/components/ui/card"
import { Cloud, Code, Database, Server, Settings, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"


export default function SkillsSection() {
  const technicalSkills = [
    "Helm Charts",
    "Terraform",
    "Kubernetes",
    "Go",
    "AWS & GCP",
    "Microservices Architecture",
    "Java & Spring",
    "CI/CD (Spinnaker, Jenkins)",
    "REST API Design",
    "ReactJS",
  ]

  const leadershipSkills = [
    "Product Ownership",
    "Technical Leadership",
    "Project Coordination",
    "Stakeholder Management",
    "Mentoring & Knowledge Sharing",
    "Risk Assessment",
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
        <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
        <div className="flex flex-wrap gap-2">
          {technicalSkills.map((skill, index) => (
            <Badge key={index} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-6">Leadership & Management</h3>
        <div className="flex flex-wrap gap-2">
          {leadershipSkills.map((skill, index) => (
            <Badge key={index} variant="secondary">
              {skill}
            </Badge>
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