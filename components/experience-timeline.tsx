import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ExperienceTimeline() {
  const experiences = [
    {
      "title": "Founder",
      "company": "WADE AI",
      "period": "March 2025 - Present",
      "location": "San Francisco Bay Area",
      "description": "Developed a powerful and unifying framework to address the challenge of scattered project context and ineffective decision-making. This framework streamlines information organization, captures decision rationales, and provides AI-powered insights for well-informed choices.",
      "achievements": [
        "Conceptualized and designed a novel framework for organizing fragmented project information into a cohesive system.",
        "Developed a clear information architecture to establish a shared source of truth for project context and decisions, which enforced the documentation of decision rationales to ensure transparency and accountability.",
        "Integrated AI capabilities to extract insights and support well-informed decision-making based on structured data.",
      ],
      "technologies": "Product Creation, AI Engineering, Next.js, Go, Python",      
    },
    {
      title: "Lead Software Engineer | Continuous Delivery",
      company: "Salesforce",
      period: "February 2022 - February 2025 (3 years 1 month)",
      location: "San Francisco Bay Area",
      description:
        "Lead Engineer on the team responsible for multi substrate secure artifact replication, access control and retention.",
      achievements: [
        "Involved in architecture and design of Safe Container lifecycle initiative",
        "Worked on improving scalability of Yum metadata updater service to handle the growth patterns of the platform",
        "Guided the development and adoption of queue based autoscaling for artifact replicators using Keda",
        "Working on securely exposing APIs from public cloud to on-prem clients",
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
        "Public Cloud Enablement - Worked on POC for migrating code coverage services to public cloud",
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
      period: "June 2013 - May 2015 (2 years)",
      location: "",
      description: "Responsible for automation framework creation and maintenance.",
      achievements: [
        "Researched on the latest market automation tools and decided on the approach and technology selection for our Automation framework creation",
        "Crafted the backbone of the automation framework exploiting the concepts of Page Objects, Modularization and Data Driven Testing",
        "Co-developed the core intelligence of the Auto generation module which could generate element ID's and test data from the web page",
        "Setup the Git, Gerrit & Jenkins Development flow with automation framework",
        "Performed testing of REST based web services",
      ],
      technologies: "Automation Frameworks, Git, Gerrit, Jenkins, REST API Testing",
    },
    {
      title: "Systems Engineer",
      company: "Infosys (Client - CISCO)",
      period: "October 2011 - May 2013 (1 year 8 months)",
      location: "",
      description: "Responsible for UI automation and testing.",
      achievements: [
        "Created Automation scripts for UI features",
        "Performed Regression, Sanity, Functional Testing",
        "Maintained and enhanced sanity test suite under tight deadlines",
        "Created effective test report mechanisms for updating Higher Management",
      ],
      technologies: "UI Automation, Testing Frameworks",
    },
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
