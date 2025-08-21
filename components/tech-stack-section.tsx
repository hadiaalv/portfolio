"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Database, Brain } from "lucide-react"

export function TechStackSection() {
  const techCategories = [
    {
      icon: Code2,
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
      color: "text-blue-500",
    },
    {
      icon: Database,
      title: "Backend",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
      color: "text-green-500",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: ["TensorFlow", "PyTorch", "OpenAI API", "Hugging Face", "Scikit-learn", "Computer Vision"],
      color: "text-violet-500",
    }
    
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Tech Stack & Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across the full development lifecycle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card
                key={category.title}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-background/50 ${category.color}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs hover:bg-primary/20 transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
