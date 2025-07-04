import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ExperienceTimeline() {
  const experiences = [
    {
      title: "Founder",
      company: "WADE AI",
      period: "March 2025 - Present",
      location: "San Francisco Bay Area",
      description: "Developed a unifying framework to address scattered project context and ineffective decision-making. This system streamlines information organization, captures decision rationales, and leverages AI for data-driven insights.",
      achievements: [
        "Designed a novel framework to unify fragmented project data into a cohesive system for structured organization.",
        "Established an information architecture that creates a shared source of truth, ensuring accurate capture of project context and decision rationale.",
        "Integrated AI-driven analytics to extract actionable insights and support data-informed decision-making.",
        "Exposed the backend API as an MCP tool, enabling agents to interact with the framework for seamless integration and automation."
      ],
      technologies: "Product Creation, AI Engineering, Next.js, Go, Python"
    },
    {
      title: "Lead Software Engineer | Continuous Delivery",
      company: "Salesforce",
      period: "February 2022 - February 2025 (3 years 1 month)",
      location: "San Francisco Bay Area",
      description:
        "Lead Engineer on the team responsible for multi substrate secure artifact replication, access control and retention.",
      achievements: [
        "Contributed towards the architecture and design of Safe Container lifecycle initiative",
        "Led multiple cost-saving initiatives in artifact management, resulting in an annual savings of approximately $2.4 million.",
        "Worked on improving scalability of Yum metadata updater service to handle the growth patterns of the platform",
        "Guided the development and adoption of queue based autoscaling for artifact replicators using Keda to efficiently handle scaling challenges",        
      ],
      technologies: "Go, K8, Terraform, Helm, Spinnaker, AWS, GCP",
    },
    {
      title: "Senior Software Engineer | Continuous Delivery",
      company: "Salesforce",
      period: "November 2019 - February 2022 (2 years 4 months)",
      location: "San Francisco Bay Area",
      description:
        "One of the founding members of the team responsible for multi substrate secure artifact replication, access control and retention.",
      achievements: [
        "Co-architected 15+ microservices using cloud native design patterns",
        "Lead the development on variety of microservices designed to handle replication, access control and retention of artifacts",
        "Designed and implemented workflows for secure ingestion of artifacts built outside the Public Cloud",
        "Designed and implemented functionality to support cross-boundary replication of artifacts from AWS commercial to GOV partitions",
        "Implemented streaming diff in object replicator which reduced full bucket replication time by 80%",
        "Made improvements in Yum Metadata updater service which reduced update times on large yum repos by 66%",
      ],
      technologies: "Go, K8, Terraform, Helm, Spinnaker, AWS, GCP",
    },
    {
      title: "Software Engineer | Engineering Productivity",
      company: "Salesforce",
      period: "May 2017 - November 2019 (2 years 7 months)",
      location: "San Francisco Bay Area",
      description:
        "Member of Continuous Integration Data team which was under the Productivity Cloud of Salesforce. Our team was responsible for utilizing the data produced by millions of daily test executions to file bugs and generate valuable insights that assist developers.",
      achievements: [
        "Build Optimizations: Worked on setting up a shared parent build for instrumenting the codebase which helped save > 6000 hours of compute every week which amounted to ~ $30k monthly savings",
        "Enhancing the coverage report generation process: Worked on making the report generation process distributed using consistent hashing and automated entire process using spring state machines",
        "Service Ownership - Co-owned & supported the service, Infrastructure Management (patching, maintenance, troubleshooting), Service Deployments, Service Availability, Customer Support",
      ],
      technologies: "Java, Spring, Ant, Gradle, K8",
    },
    {
      title: "Software Engineer Intern",
      company: "Salesforce",
      period: "June 2016 - September 2016 (4 months)",
      location: "San Francisco",
      description:
        "Interned with Continuous Integration Data team which was under the Productivity Cloud of Salesforce.",
      achievements: [
        "Worked on creating a dashboard which helped the scrum teams easily identify their test assets and see their result status",
        "Used ReactJS with Flux for the front end, and built REST API using JAVA for the backend",
      ],
      technologies: "ReactJS, Flux, Java, REST API",
    },
    {
      title: "Senior Systems Engineer",
      company: "Infosys (Client - CISCO)",
      period: "Oct 2011 - May 2015 (3 years 8 months)",
      location: "",
      description: "Responsible for automation framework creation and maintenance.",
      achievements: [
        "Designed and implemented a foundational UI automation framework, incorporating Page Objects, Modularization, and Data-Driven Testing to enhance quality and accelerate development.",
        "Developed intelligent automation modules for dynamic element ID and test data generation.",
        "Streamlined development workflows by setting up Git, Gerrit, and Jenkins for the automation framework.",
        "Executed extensive UI and REST API testing, including automation script creation, regression, sanity, and functional testing.",
        "Improved test reporting mechanisms and managed critical test suite maintenance to meet release deadlines.",
      ],
      technologies: "Automation Frameworks, UI Automation, Git, Jenkins",
    }

  ]

  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <Card key={index} className="relative border-l-4 border-primary">
          <CardHeader className="pb-2">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
              <CardTitle>{exp.title}</CardTitle>
              <Badge variant="outline" className="w-fit">
                {exp.period}
              </Badge>
            </div>
            <div>
              <p className="text-lg font-medium text-muted-foreground">{exp.company}</p>
              {exp.location && <p className="text-sm text-muted-foreground">{exp.location}</p>}
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{exp.description}</p>
            <div className="space-y-2 mb-4">
              <p className="font-medium">Key Achievements:</p>
              <ul className="list-disc pl-5 space-y-1">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-medium">Technologies Used:</p>
              <p className="text-sm text-muted-foreground">{exp.technologies}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
