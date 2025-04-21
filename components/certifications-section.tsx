import { Card, CardContent } from "@/components/ui/card"
import { Award, BadgeIcon as Certificate } from "lucide-react"

export default function CertificationsSection() {
  const certifications = [
    {
      name: "Oracle Database SQL Certified Expert",
      issuer: "Oracle",
      type: "certification",
    },
    {
      name: "Salesforce Certified Product Owner",
      issuer: "Salesforce",
      type: "certification",
    },
    {
      name: "ISTQB® Foundation Level",
      issuer: "ISTQB",
      type: "certification",
    },
  ]

  const awards = [
    {
      name: "Certificate of Appreciation",
      issuer: "Salesforce",
      type: "award",
    },
    {
      name: "Certificate of Appreciation",
      issuer: "Salesforce",
      type: "award",
    },
    {
      name: "Certificate of Appreciation",
      issuer: "Salesforce",
      type: "award",
    },
  ]

  const allAchievements = [...certifications, ...awards]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {allAchievements.map((achievement, index) => (
        <Card key={index}>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              {achievement.type === "certification" ? (
                <Certificate className="h-6 w-6 text-primary" />
              ) : (
                <Award className="h-6 w-6 text-primary" />
              )}
              <h3 className="text-lg font-bold">{achievement.name}</h3>
            </div>
            <p className="text-muted-foreground">Issued by {achievement.issuer}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
