"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { SplineScene } from "@/components/ui/spline-scene"
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react"

export function HeroSection() {
  const handleResumeDownload = () => {
    // Create a sample resume download - replace with your actual resume URL
    const link = document.createElement("a")
    link.href = "/HadiaAlvi.pdf" 
    link.download = "Hadia_Alvi_Resume.pdf" 
    link.click()
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 w-full">
      <Card className="w-full min-h-[calc(100vh-4rem)] bg-gradient-to-br from-background via-card to-muted relative overflow-hidden border-2 border-primary/20">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="currentColor" />

        <div className="flex h-full min-h-[calc(100vh-4rem)]">
          {/* Left content */}
          <div className="flex-1 p-8 lg:p-12 xl:p-16 relative z-10 flex flex-col justify-center max-w-3xl">
            <div className="animate-slide-in-up">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-accent">Available for Work</span>
                <div className="flex items-center space-x-1 text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  <span className="text-xs">Faisalabad, Pakistan</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
                <span className="text-foreground">Hi, I'm a</span>
                <br />
                <span className="gradient-text">Full-Stack</span>
                <br />
                <span className="gradient-text">Developer</span>
              </h1>

              <p className="text-lg md:text-xl xl:text-2xl text-muted-foreground max-w-2xl mb-6 leading-relaxed">
                I craft exceptional digital experiences using modern technologies like React, Next.js, and Node.js.
                Passionate about clean code, scalable architecture, and innovative solutions.
              </p>

              <div className="mb-8">
                <p className="text-sm text-muted-foreground mb-3">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Node.js", "Python", "AWS"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
  size="lg"
  className="bg-black hover:bg-gray-800 text-white border-black hover:border-gray-800 transition-all duration-300 animate-glow group"
>
                  View My Work
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <div className="flex gap-2">
                 <Button
  variant="outline"
  size="lg"
  className="group bg-transparent border-black text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300"
  onClick={handleResumeDownload}
>
                    <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Resume
                  </Button>
                 <Button
  variant="outline"
  size="lg"
  className="group bg-transparent border-black text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300 px-3"
  asChild
>

                    <a href="https://github.com/hadiaalv" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                  </Button>
                  <Button
  variant="outline"
  size="lg"
  className="group bg-transparent border-black text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300 px-3"
  asChild
>

                    <a href="https://www.linkedin.com/in/hadia-alvi-9a68272b1/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                  </Button>
                  <Button
  variant="outline"
  size="lg"
  className="group bg-transparent border-black text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300 px-3"
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

          {/* Right content - Spline Scene */}
          <div className="flex-1 relative hidden lg:block">
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
