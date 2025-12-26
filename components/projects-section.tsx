"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star, Calendar } from "lucide-react"
import Image from "next/image"

export function ProjectsSection() {
  const projects = [
    {
      title: "Get Carlo",
      description:
        "Business website developed using WordPress, focused on professional branding, service presentation, lead generation, and performance optimization with a responsive and user-friendly design.",
      image: "/hom2.png", // Fixed image path
      tags: ["WordPress", "PHP", "Custom Theme", "Responsive Design", "SEO"],
      featured: true,
      year: "2025",
      liveUrl: "https://getcarlo.com.au/",
    },
    {
      title: "RG Travel & Tours",
      description:
        "A modern travel services website built with Next.js and Tailwind CSS, featuring smooth interactive UI, analytics integration, and optimized performance for bookings and information.",
      image: "/placeholder.svg?height=300&width=500&text=RG+Travel",
      tags: ["Next.js", "React", "Tailwind CSS", "Google Analytics", "GTM", "Framer Motion"],
      featured: true,
      year: "2025",
      liveUrl: "https://rgtravelandtours.com/",
    },
    {
      title: "Tia & Rose",
      description:
        "An eCommerce fashion store built on Shopify, optimized for conversions with secure payment integrations, analytics tracking, and a smooth, responsive shopping experience.",
      image: "/placeholder.svg?height=300&width=500&text=Tia+Rose",
      tags: [
        "Shopify",
        "Ecommerce",
        "Facebook Pixel",
        "Styled-Components",
        "Payment Gateways",
        "Cloudflare"
      ],
      featured: false,
      year: "2023",
      liveUrl: "https://tiaandrose.com/",
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
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
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
                  {project.stars && (
                    <div className="flex items-center space-x-1 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-current" />
                      <span className="text-xs font-medium">{project.stars}</span>
                    </div>
                  )}
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
                  {project.githubUrl && (
                    <Button size="sm" variant="outline" className="group/btn bg-transparent" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 mr-1 group-hover/btn:rotate-12 transition-transform" />
                        Source
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="group bg-transparent hover:text-black hover:border-black transition-colors"
            asChild
          >
            <a href="/projects">
              View All Projects
              <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}