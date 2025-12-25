import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { FeaturesSection } from "@/components/features-section"
import { ProjectsSection } from "@/components/projects-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      {/* <TechStackSection /> */}
      {/* <FeaturesSection /> */}
      <ProjectsSection />
      <Footer />
    </main>
  )
}
  