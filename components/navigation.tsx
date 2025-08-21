"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Code, Zap, Globe, Users } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home", icon: Globe },
    { name: "Features", href: "#features", icon: Zap },
    { name: "Projects", href: "#projects", icon: Code },
    { name: "About", href: "#about", icon: Users },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center animate-glow">
              <Code className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold gradient-text">TechFlow</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors duration-200 group"
              >
                <item.icon className="w-4 h-4 group-hover:animate-float" />
                <span>{item.name}</span>
              </a>
            ))}
            <Button className="bg-cyan-500 hover:bg-black text-white transition-all duration-300 animate-glow">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-card border-t border-border animate-slide-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 px-3 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </a>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full bg-cyan-500 hover:bg-black text-white transition-all duration-300">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
