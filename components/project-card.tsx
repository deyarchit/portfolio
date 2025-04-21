import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  // image: string
  link?: string
}

export default function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group">
      {/* <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={200}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div> */}
      <CardHeader>
        <h3 className="text-xl font-bold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      {link && (
        <CardFooter>
          <Link href={link} className="text-sm font-medium flex items-center text-primary hover:underline">
            View project details <ArrowUpRight className="ml-1 h-3 w-3" />
          </Link>
        </CardFooter>
      )}
    </Card>
  )
}
