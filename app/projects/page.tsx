"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star, Calendar, Filter } from "lucide-react"
import Image from "next/image"

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All")

  const allProjects = [
    {
      title: "Get Carlo",
      description:
        "Business website developed using WordPress, focused on professional branding, service presentation, lead generation, and performance optimization with a responsive and user-friendly design.",
      image: "/hom2.png",
      tags: ["WordPress", "PHP", "Custom Theme", "Responsive Design", "SEO"],
      category: "WordPress",
      featured: true,
      // year: "2025",
      liveUrl: "https://getcarlo.com.au/",
      githubUrl: undefined,
      stars: undefined,
    },
    {
      title: "RG Travel & Tours",
      description:
        "A modern travel services website built with Next.js and Tailwind CSS, featuring smooth interactive UI, analytics integration, and optimized performance for bookings and information.",
      image: "/rg.png",
      tags: ["Next.js", "React", "Tailwind CSS", "Google Analytics", "GTM", "Framer Motion"],
      category: "Next.js",
      featured: true,
      // year: "2025",
      liveUrl: "https://rgtravelandtours.com/",
      githubUrl: undefined,
      stars: undefined,
    },
    {
      title: "Tia & Rose",
      description:
        "An eCommerce fashion store built on Shopify, optimized for conversions with secure payment integrations, analytics tracking, and a smooth, responsive shopping experience.",
      image: "/story.png",
      tags: [
        "Shopify",
        "Ecommerce",
        "Facebook Pixel",
        "Styled-Components",
        "Payment Gateways",
        "Cloudflare"
      ],
      category: "Shopify",
      featured: true,
      // year: "2023",
      liveUrl: "https://tiaandrose.com/",
      githubUrl: undefined,
      stars: undefined,
    },
    {
  title: "BlacKandleS",
  description:
    "An eCommerce fashion and lifestyle store built on Shopify, featuring analytics tracking, A/B testing, multiple secure payment options, and optimized for performance with Cloudflare and modern web standards.",
  image: "/black.png",
  tags: [
    "Shopify",
    "Google Analytics",
    "GA4",
    "BugSnag",
    "Cloudflare",
    "Payment Gateways",
    "Trident AB",
    "core-js"
  ],
  category: "Shopify",
  featured: true,
  // year: "2023",
  liveUrl: "https://www.blackandles.com.au/",
  githubUrl: undefined,
  stars: undefined,
}

  ]

  const categories = ["All", "WordPress", "Next.js", "Shopify"]

  const filteredProjects = selectedFilter === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedFilter)

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />

      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">All Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore my complete portfolio of web development projects
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-in-up">
            <Filter className="w-5 h-5 text-gray-600 self-center" />
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedFilter(category)}
                variant={selectedFilter === category ? "default" : "outline"}
                className={`transition-all duration-300 ${
                  selectedFilter === category
                    ? "bg-cyan-500 hover:bg-cyan-600 text-white"
                    : "hover:border-cyan-500 hover:text-cyan-600"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.title}
                className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden ${
                  project.featured ? "border-cyan-500/50 shadow-lg" : "border-gray-200"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-cyan-500 text-white">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute top-4 right-4 flex items-center space-x-2">
                    <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                      <Calendar className="w-3 h-3 text-gray-600" />
                      <span className="text-xs font-medium">{project.year}</span>
                    </div>
                    {project.stars && (
                      <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-current" />
                        <span className="text-xs font-medium">{project.stars}</span>
                      </div>
                    )}
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-cyan-600 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-3 pt-2">
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        className="bg-cyan-500 hover:bg-cyan-600 text-white group/btn"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1 group-hover/btn:scale-110 transition-transform" />
                          View
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="group/btn hover:border-cyan-500 hover:text-cyan-600"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3 mr-1 group-hover/btn:rotate-12 transition-transform" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">
                No projects found in this category.
              </p>
            </div>
          )}

          {/* GitHub CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Want to see more?
              </h3>
              <p className="text-white/90 text-lg mb-6">
                Check out my GitHub for more projects and open source contributions
              </p>
              <Button
                size="lg"
                className="bg-white text-cyan-600 hover:bg-gray-100 transition-all duration-300 group shadow-lg"
                asChild
              >
                <a
                  href="https://github.com/hadiaalv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Visit GitHub Profile
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}