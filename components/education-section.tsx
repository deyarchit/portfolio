import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function EducationSection() {
  const education = [
    {
      institution: "University of California, Irvine",
      degree: "Master's degree, Computer Software Engineering",
      period: "2015 - 2017",
    },
    {
      institution: "Visvesvaraya Technological University",
      degree: "Bachelor of Engineering (BE), Electronics and Communications Engineering",
      period: "2007 - 2011",
    },
  ]

  return (
    <div className="space-y-6">
      {education.map((edu, index) => (
        <Card key={index} className="border-l-4 border-primary">
          <CardHeader className="pb-2">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
              <CardTitle>{edu.institution}</CardTitle>
              <Badge variant="outline" className="w-fit">
                {edu.period}
              </Badge>
            </div>
            <p className="text-lg text-muted-foreground">{edu.degree}</p>
          </CardHeader>
          <CardContent>{/* Additional content can be added here if needed */}</CardContent>
        </Card>
      ))}
    </div>
  )
}
