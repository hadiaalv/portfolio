"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, ShoppingCart, Blocks, Wrench } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Code2,
      title: "React & Next.js Development",
      description: "Custom web applications built with React and Next.js for optimal performance, SEO, and user experience. Server-side rendering, static generation, and modern React patterns.",
      features: ["SSR & SSG", "Performance Optimization", "API Integration", "TypeScript"],
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
    },
    {
      icon: Code2,
      title: "NestJS Backend Development",
      description: "Scalable and maintainable backend solutions using NestJS. RESTful APIs, GraphQL, microservices architecture, and database integration with PostgreSQL or MongoDB.",
      features: ["REST & GraphQL APIs", "Microservices", "Database Design", "Authentication"],
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      icon: ShoppingCart,
      title: "Shopify E-commerce",
      description: "Complete Shopify store setup and customization. Custom themes, app development, payment gateway integration, and store optimization for maximum conversions.",
      features: ["Theme Customization", "App Development", "Payment Integration", "SEO Optimization"],
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Blocks,
      title: "WordPress Development",
      description: "Professional WordPress websites with custom themes and plugins. WooCommerce integration, performance optimization, and responsive design for all devices.",
      features: ["Custom Themes", "Plugin Development", "WooCommerce", "Speed Optimization"],
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
  ]

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Services I Offer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Full-stack development services tailored to bring your ideas to life with modern technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-cyan-500/30 bg-white"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-7 h-7 ${service.color}`} />
                  </div>
                  <Wrench className="w-5 h-5 text-gray-400 group-hover:text-cyan-500 transition-colors" />
                </div>
                <CardTitle className="text-2xl group-hover:text-cyan-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-700 hover:border-cyan-500 hover:bg-cyan-50 transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services Banner */}
        <Card className="bg-gradient-to-r from-cyan-500 to-emerald-500 border-0 text-white">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Need a Custom Solution?
                </h3>
                <p className="text-white/90 text-lg">
                  Let's discuss your project requirements and build something amazing together
                </p>
              </div>
              <Button
                size="lg"
                className="bg-white text-cyan-600 hover:bg-gray-100 transition-all duration-300 group shadow-lg"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tech Stack Preview */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6 font-medium">Technologies I Work With</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["React", "Next.js", "NestJS", "TypeScript", "Node.js", "Shopify", "WordPress", "PostgreSQL", "MongoDB", "Tailwind CSS"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white border-2 border-gray-200 rounded-lg text-gray-700 font-medium hover:border-cyan-500 hover:text-cyan-600 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}