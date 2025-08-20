"use client"

import { Button } from "@/components/ui/button"
import { Github, Twitter, Linkedin, Mail, Code, Heart, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ]

  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Documentation", "API Reference"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Contact"],
    },
    {
      title: "Resources",
      links: ["Community", "Help Center", "Partners", "Status"],
    },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center animate-glow">
                <Code className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold gradient-text">TechFlow</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Building the future of technology with innovative solutions and cutting-edge development tools.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="sm"
                  className="hover:text-primary hover:bg-primary/10 transition-colors group"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4 text-foreground">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>by TechFlow Team</span>
          </div>

          <div className="flex items-center space-x-4">
            <p className="text-sm text-muted-foreground">© 2024 TechFlow. All rights reserved.</p>
            <Button variant="ghost" size="sm" onClick={scrollToTop} className="hover:text-primary group">
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
