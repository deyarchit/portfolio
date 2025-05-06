import { Card, CardContent } from "@/components/ui/card"
import { Cloud, Code, Database, Server, Settings, Brain } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function SkillsSection() {
  const programmingLanguages = ["Go", "Python", "TypeScript", "JavaScript"]; // Java added based on earlier roles
  const aiEngineering = ["Agent Building", "Agent Coordination", "Prompt Engineering", "LLM Provider Hosting", "Retrieval-Augmented Generation (RAG)"];
  const cloudComputing = ["AWS", "GCP", "Kubernetes (K8s)", "Helm", "Terraform", "Serverless (Lambda, Cloud Functions)", "IAM", "Storage (S3, GCS)", "Eventing (SNS, Pub/Sub)"]; // Specific services added based on experience
  const backendDevelopment = ["Cloud-native Microservices", "API Development (REST, gRPC)", "Databases (PostgreSQL, Redis, DynamoDB)", "Caching Strategies", "Message Queues"]; // "Yum Metadata" added to connect to a specific achievement
  const frontendDevelopment = ["Next.js", "React", "Axios", "Bootstrap", "HTML", "CSS", "Tailwind"]; // Flux added based on intern experience
  const dataAndDevOps = ["SQL", "Data Modeling", "CI/CD Pipelines (Spinnaker, GitHub Actions, Jenkins)", "Infrastructure as Code (Terraform, Helm)", "Automation Testing Frameworks"]; // Terraform and Helm moved here for clarity

  const skills = [
    {
      category: "Programming Languages",
      items: programmingLanguages,
    },
    {
      category: "AI Engineering",
      items: aiEngineering,
    },
    {
      category: "Cloud Computing",
      items: cloudComputing,
    },
    {
      category: "Backend Development",
      items: backendDevelopment,
    },
    {
      category: "Frontend Development",
      items: frontendDevelopment,
    },
    {
      category: "DevOps & Automation", // Renamed for better clarity
      items: dataAndDevOps,
    },
  ];

  const expertiseAreas = [
    {
      icon: <Brain className="h-8 w-8" />, // Changed icon to something more related to innovation/product
      title: "Product Vision & Technical Leadership", // Reflecting the Founder role and Lead experience
      description: "Translating business needs into technical requirements and providing technical leadership in product development.",
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Multi-Cloud Infrastructure & Automation", // Emphasizing automation
      description: "Designing, implementing, and automating infrastructure across AWS and GCP, leveraging tools like Terraform and Helm.",
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Container Orchestration & Management", // More explicit
      description: "Expertise in Kubernetes, Helm, and managing the lifecycle of containerized applications.",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Cloud-Native Microservices Architecture", // More specific
      description: "Designing, developing, and deploying scalable and resilient cloud-native microservices.",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Secure Artifact Management & Replication", // Directly from Salesforce experience
      description: "Building systems for secure replication, access control, and retention of deployment artifacts across multiple substrates.",
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Scalability & Performance Optimization", // Broader term
      description: "Improving the scalability and performance of distributed systems, as demonstrated with the Yum metadata updater and object replicator.",
    }
  ];

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