"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Calendar, Users } from "lucide-react"
import Image from "next/image"

export function AchievementsSection() {
  const achievements = [
    {
      title: "ZIMO GROUP Internship",
      organization: "ZIMO GROUP",
      period: "Jul 2025 - Present · 7 mos",
      type: "Remote",
      location: "UK",
      description: "Working as an intern, contributing to various projects and learning industry best practices.",
      icon: Trophy,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      title: "Development Intern",
      organization: "DevelopersHub Corporation©",
      period: "Mar 2025 - May 2025 · 3 mos",
      location: "Pakistan",
    type: "Remote",
      description: "Gained hands-on experience in software development and collaborated on real-world projects.",
      icon: Award,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "Intern",
      organization: "Zidio Development",
      period: "Jan 2025 - Feb 2025 · 2 mos",
      type: "Part-time",
      location: "India",
      description: "Worked on development projects and enhanced technical skills in a professional environment.",
      icon: Award,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      title: "Hackathon Participation",
      organization: "Various Tech Events",
      period: "December 2024",
      type: "Competition",
      description: "Participated in multiple hackathons, collaborating with teams to build innovative solutions under tight deadlines.",
      icon: Users,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ]

  return (
    <section id="achievements" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Achievements & Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey of continuous learning, growth, and professional development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card
              key={achievement.title}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-cyan-500/30 bg-white overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl ${achievement.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className={`w-7 h-7 ${achievement.color}`} />
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{achievement.period}</span>
                  </div>
                </div>
                <CardTitle className="text-2xl group-hover:text-cyan-600 transition-colors">
                  {achievement.title}
                </CardTitle>
                <div className="flex items-center space-x-2 mt-2">
                  <Badge variant="secondary" className="text-sm">
                    {achievement.organization}
                  </Badge>
                  {achievement.location && (
                    <Badge variant="outline" className="text-xs">
                      {achievement.location}
                    </Badge>
                  )}
                  {achievement.type && (
                    <Badge variant="outline" className="text-xs">
                      {achievement.type}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center p-6 border-2 border-cyan-500/20 bg-gradient-to-br from-cyan-50 to-white">
            <div className="text-4xl font-bold gradient-text mb-2">3+</div>
            <p className="text-gray-600">Internships Completed</p>
          </Card>
          <Card className="text-center p-6 border-2 border-emerald-500/20 bg-gradient-to-br from-emerald-50 to-white">
            <div className="text-4xl font-bold gradient-text mb-2">12+</div>
            <p className="text-gray-600">Months of Experience</p>
          </Card>
          <Card className="text-center p-6 border-2 border-purple-500/20 bg-gradient-to-br from-purple-50 to-white">
            <div className="text-4xl font-bold gradient-text mb-2">Multiple</div>
            <p className="text-gray-600">Hackathons Participated</p>
          </Card>
        </div>
      </div>
    </section>
  )
}