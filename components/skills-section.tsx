import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Cloud, Code, Database, Server, Settings, Users } from "lucide-react"

export default function SkillsSection() {
  const technicalSkills = [
    { name: "Helm Charts", level: 95 },
    { name: "Terraform", level: 95 },
    { name: "Kubernetes", level: 92 },
    { name: "Go", level: 90 },
    { name: "AWS & GCP", level: 88 },
    { name: "Microservices Architecture", level: 88 },
    { name: "Java & Spring", level: 85 },
    { name: "CI/CD (Spinnaker, Jenkins)", level: 85 },
    { name: "REST API Design", level: 82 },
    { name: "ReactJS", level: 75 },
  ]

  const leadershipSkills = [
    { name: "Product Ownership", level: 90 },
    { name: "Technical Leadership", level: 88 },
    { name: "Project Coordination", level: 85 },
    { name: "Stakeholder Management", level: 85 },
    { name: "Mentoring & Knowledge Sharing", level: 87 },
    { name: "Risk Assessment", level: 82 },
  ]

  // const languages = [
  //   { name: "English", level: "Full Professional" },
  //   { name: "Bengali", level: "Professional Working" },
  //   { name: "Hindi", level: "Professional Working" },
  // ]

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
        <div className="grid md:grid-cols-2 gap-4">
          {technicalSkills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-6">Leadership & Management</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {leadershipSkills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
      </div>

      {/* <div>
        <h3 className="text-xl font-bold mb-6">Languages</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {languages.map((language, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <h4 className="text-lg font-bold mb-2">{language.name}</h4>
                <p className="text-muted-foreground">{language.level}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div> */}

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
