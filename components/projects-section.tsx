"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star, Calendar } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "AI-Powered SaaS Platform",
      description:
        "Full-stack SaaS application with AI integration, real-time collaboration, and advanced analytics dashboard.",
      image: "/placeholder.svg?height=300&width=500&text=AI+SaaS+Platform",
      tags: ["Next.js", "TypeScript", "OpenAI", "Stripe", "PostgreSQL"],
      stars: 1247,
      featured: true,
      year: "2024",
      liveUrl: "https://ai-saas-demo.vercel.app",
      githubUrl: "https://github.com/yourusername/ai-saas",
    },
    {
      title: "E-Commerce Marketplace",
      description:
        "Multi-vendor marketplace with advanced search, payment processing, and real-time inventory management.",
      image: "/placeholder.svg?height=300&width=500&text=E-Commerce+Platform",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      stars: 892,
      featured: true,
      year: "2024",
      liveUrl: "https://marketplace-demo.vercel.app",
      githubUrl: "https://github.com/yourusername/marketplace",
    },
    {
      title: "Blockchain DeFi Protocol",
      description:
        "Decentralized finance protocol with yield farming, liquidity pools, and governance token mechanics.",
      image: "/placeholder.svg?height=300&width=500&text=DeFi+Protocol",
      tags: ["Solidity", "Web3.js", "React", "Ethereum", "Smart Contracts"],
      stars: 2156,
      featured: false,
      year: "2023",
      liveUrl: "https://defi-protocol-demo.vercel.app",
      githubUrl: "https://github.com/yourusername/defi-protocol",
    },
    {
      title: "DevOps Automation Suite",
      description:
        "Comprehensive CI/CD pipeline automation with monitoring, deployment orchestration, and infrastructure as code.",
      image: "/placeholder.svg?height=300&width=500&text=DevOps+Suite",
      tags: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "AWS"],
      stars: 743,
      featured: false,
      year: "2023",
      liveUrl: "https://devops-suite-demo.vercel.app",
      githubUrl: "https://github.com/yourusername/devops-suite",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world applications showcasing modern development practices and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden ${
                project.featured ? "border-primary/50 shadow-lg" : "border-border/50"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">Featured</Badge>
                )}
                <div className="absolute top-4 right-4 flex items-center space-x-2">
                  <div className="flex items-center space-x-1 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1">
                    <Calendar className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs font-medium">{project.year}</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-medium">{project.stars}</span>
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-3 pt-2">
                  <Button size="sm" className="group/btn" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 mr-1 group-hover/btn:scale-110 transition-transform" />
                      Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="group/btn bg-transparent" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 mr-1 group-hover/btn:rotate-12 transition-transform" />
                      Source
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="group bg-transparent" asChild>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              View All Projects
              <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
