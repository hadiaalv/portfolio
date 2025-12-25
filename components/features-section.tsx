"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code2, Palette, Database, Globe, ArrowRight, Smartphone, Cloud, Zap, Shield } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "React, Next.js, TypeScript, and modern CSS frameworks for responsive web applications.",
      color: "text-blue-400",
    },
    {
      icon: Database,
      title: "Backend & APIs",
      description: "Node.js, Express, GraphQL, and database design with PostgreSQL and MongoDB.",
      color: "text-green-400",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "React Native and Progressive Web Apps for cross-platform mobile experiences.",
      color: "text-purple-400",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "AWS, Docker, CI/CD pipelines, and serverless architecture deployment.",
      color: "text-orange-400",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design, prototyping, and design systems with Figma and Adobe Creative Suite.",
      color: "text-pink-400",
    },
    {
      icon: Shield,
      title: "Security & Testing",
      description: "Authentication, authorization, unit testing, and security best practices.",
      color: "text-red-400",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Code optimization, caching strategies, and performance monitoring for scalable apps.",
      color: "text-yellow-400",
    },
    {
      icon: Globe,
      title: "Web3 & Blockchain",
      description: "Smart contracts, DeFi protocols, and decentralized application development.",
      color: "text-cyan-400",
    },
  ]

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set spanning the full development lifecycle, from concept to deployment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
            <a
              href="https://github.com/hadiaalv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
  size="lg"
  variant="outline"
  className="group bg-transparent hover:text-black hover:border-black"
>
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

      </div>
    </section>
  )
}
