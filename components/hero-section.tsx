"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { SplineScene } from "@/components/ui/spline-scene"
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react"

export function HeroSection() {
  const handleResumeDownload = () => {
    const link = document.createElement("a")
    link.href = "/HadiaAlvi.pdf" 
    link.download = "Hadia_Alvi_Resume.pdf" 
    link.click()
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 w-full">
      <Card className="w-full min-h-[calc(100vh-4rem)] bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden border-2 border-cyan-500/30">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgb(8, 145, 178)" />

        <div className="flex flex-col lg:flex-row h-full min-h-[calc(100vh-4rem)]">
          {/* Left content */}
          <div className="flex-1 p-6 sm:p-8 lg:p-12 xl:p-16 relative z-10 flex flex-col justify-center max-w-3xl">
            <div className="animate-slide-in-up">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-emerald-600">Available for Work</span>
                <div className="flex items-center space-x-1 text-gray-600">
                  <MapPin className="w-3 h-3" />
                  <span className="text-xs">Faisalabad, Pakistan</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
                <span className="text-gray-900">Hi, I&apos;m</span>
                <br />
                <span className="gradient-text">Hadia Alvi</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl xl:text-2xl text-gray-700 max-w-2xl mb-6 leading-relaxed">
                I design and build modern web & AI-powered applications with a strong focus on usability, performance, and real-world impact.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white border-cyan-500 hover:border-cyan-600 transition-all duration-300 animate-glow group"
                >
                  View My Work
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group bg-white border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white hover:border-cyan-600 transition-all duration-300"
                    onClick={handleResumeDownload}
                  >
                    <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Resume
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="group bg-white border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white hover:border-cyan-600 transition-all duration-300 px-3"
                    asChild
                  >
                    <a href="https://github.com/hadiaalv" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="group bg-white border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white hover:border-cyan-600 transition-all duration-300 px-3"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/hadia-alvi-9a68272b1/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="group bg-white border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white hover:border-cyan-600 transition-all duration-300 px-3"
                    asChild
                  >
                    <a href="mailto:hadiaalvi18@proton.me">
                      <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Spline Scene - Now visible on mobile too */}
          <div className="flex-1 relative h-75 sm:h-[400px] lg:h-auto lg:min-h-[calc(100vh-4rem)]">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>
    </section>
  )
}