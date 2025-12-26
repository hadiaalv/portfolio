"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"
import emailjs from "emailjs-com"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      await emailjs.send(
        "service_okqe66f", // SERVICE ID
        "template_sbyf9be", // TEMPLATE ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "txqzIav4BtVeWDyiJ" // PUBLIC KEY
      )

      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("EmailJS Error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hadiaalvi18@proton.me",
      link: "mailto:hadiaalvi18@proton.me",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Faisalabad, Pakistan",
      link: null,
    },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/hadiaalv", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com/hadiaalv", label: "Twitter" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/hadia-alvi-9a68272b1/",
      label: "LinkedIn",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />

      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Get in Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have a project in mind? I&apos;d love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={info.title}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-gray-100"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-cyan-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-600 hover:text-cyan-600"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Social Links */}
              <Card className="border-2 border-gray-100">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Connect With Me
                  </h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-cyan-500/10 hover:bg-cyan-500 rounded-lg flex items-center justify-center group"
                      >
                        <social.icon className="w-5 h-5 text-cyan-600 group-hover:text-white" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-gray-100">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  required
  placeholder="Your Name"
  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
/>

                      <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  required
  placeholder="Your Email"
  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
/>

                    </div>

                    <input
  type="text"
  name="subject"
  value={formData.subject}
  onChange={handleChange}
  required
  placeholder="Subject"
  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
/>


                    <textarea
  name="message"
  value={formData.message}
  onChange={handleChange}
  required
  rows={6}
  placeholder="Your Message"
  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all resize-none"
/>


                    {submitStatus === "success" && (
                      <p className="text-green-600">
                        Message sent successfully!
                      </p>
                    )}

                    {submitStatus === "error" && (
                      <p className="text-red-600">
                        Failed to send message.
                      </p>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-cyan-500 hover:bg-cyan-600 text-white"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
