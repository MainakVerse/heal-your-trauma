"use client"
import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, Phone, MapPin, Clock, Shield } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

// Optional Toast (matches your first component behavior)
function Toast({ message, type, onClose }: { message: string; type: "success" | "error"; onClose: () => void }) {
  return (
    <div
      className={`fixed bottom-4 right-4 px-4 py-3 rounded-lg shadow-lg text-white ${
        type === "success" ? "bg-green-600" : "bg-red-600"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <span>{message}</span>
        <button onClick={onClose} className="text-white font-bold">×</button>
      </div>
    </div>
  )
}

export function ContactUsSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.target as HTMLFormElement
    const firstName = (form.querySelector("#firstName") as HTMLInputElement).value
    const lastName = (form.querySelector("#lastName") as HTMLInputElement).value
    const email = (form.querySelector("#email") as HTMLInputElement).value
    const subject = (form.querySelector("#subject") as HTMLInputElement).value
    const message = (form.querySelector("#message") as HTMLTextAreaElement).value

    // keep backend compatibility: original script expects "name", "email", "subject", "message"
    const formData = new FormData()
    formData.append("name", `${firstName} ${lastName}`.trim())
    formData.append("email", email)
    formData.append("subject", subject)
    formData.append("message", message)

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzxGHcmgKA_4F3yu39NkrJ-U9bl8mz_fwpD9i4aSerPJxtBA9IMkwl2hBxF3RQ9Pw1eFg/exec",
        { method: "POST", body: formData }
      )

      const result = await response.json()

      if (result.status === "success") {
        setToast({ message: "Message sent successfully!", type: "success" })
        form.reset()
      } else {
        setToast({ message: "Error sending message. Please try again.", type: "error" })
      }
    } catch {
      setToast({ message: "Network error or script issue.", type: "error" })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-blue-400 via-blue-300 to-indigo-400">
      {/* Background decorative elements (unchanged) */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <div className="relative container px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section (unchanged) */}
        <div className="text-center mb-16 md:mb-20">
          <div className="space-y-4 md:space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              💬 Get in Touch
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Ready to Begin?
            </h2>
            <p className="max-w-3xl mx-auto text-blue-100 text-lg md:text-xl lg:text-2xl leading-relaxed">
              Take the first step towards healing and transformation. We're here to support your journey.
            </p>
          </div>
        </div>

        {/* Main Content Grid (restored both columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information Card (unchanged UI) */}
          <div className="space-y-8">
            <Card className="bg-white/95 backdrop-blur-sm border border-blue-100/50 shadow-2xl rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 pb-8">
                <CardTitle className="text-2xl md:text-3xl font-bold text-blue-900">
                  Let's Connect
                </CardTitle>
                <CardDescription className="text-blue-700 text-base md:text-lg">
                  Reach out through any of these channels - we're here to help.
                </CardDescription>
              </CardHeader>

              <CardContent className="p-8 space-y-8">
                {/* Contact Methods */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                      <p className="text-blue-600 font-medium break-all">sequeirajefferin@gmail.com</p>
                      <p className="text-sm text-gray-600 mt-1">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                      <p className="text-blue-600 font-medium">+91-7798888407</p>
                      <p className="text-sm text-gray-600 mt-1">Mon-Fri, 9 AM - 6 PM PST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900">Office</h3>
                      <p className="text-blue-600 font-medium">D 102, Amar Renaissance Sopan Baug, </p>
                      <p className="text-sm text-gray-600">Ghorpadi Pune- 411001. Maharashtra, India</p>
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-blue-100">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-500" />
                    <span className="text-sm text-gray-600">Quick Response</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-blue-500" />
                    <span className="text-sm text-gray-600">Confidential</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-blue-100">
                  <p className="text-sm text-gray-600 mb-4">Follow us on social media:</p>
                  <div className="flex space-x-4">
                    <Link
                      href="https://www.facebook.com/checkpoint/828281030927956/?next=https%3A%2F%2Fwww.facebook.com%2Fcfswl%2F#"
                      className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                      aria-label="Facebook"
                    >
                      <FacebookIcon className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://wa.me/+917798888407"
                      className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                      aria-label="Whatsapp"
                    >
                      <WhatsappIcon className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://www.instagram.com/spritualwellnessandlight/"
                      className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://twitter.com/spiritualwellnessandlight"
                      className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                      aria-label="Twitter"
                    >
                      <TwitterIcon className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form Card (unchanged UI, now wired) */}
          <div className="space-y-8">
            <Card className="bg-white/95 backdrop-blur-sm border border-blue-100/50 shadow-2xl rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 pb-8">
                <CardTitle className="text-2xl md:text-3xl font-bold text-blue-900">
                  Send a Message
                </CardTitle>
                <CardDescription className="text-blue-700 text-base md:text-lg">
                  Share your thoughts with us. We'll get back to you promptly.
                </CardDescription>
              </CardHeader>

              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">First Name</label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        type="text"
                        required
                        className="h-12 px-4 border-2 border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Last Name</label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        type="text"
                        required
                        className="h-12 px-4 border-2 border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <Input
                      id="email"
                      placeholder="john.doe@example.com"
                      type="email"
                      required
                      className="h-12 px-4 border-2 border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Subject</label>
                    <Input
                      id="subject"
                      placeholder="How can we help you?"
                      type="text"
                      required
                      className="h-12 px-4 border-2 border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Message</label>
                    <Textarea
                      id="message"
                      required
                      className="min-h-[120px] p-4 border-2 border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none"
                      placeholder="Tell us about your goals and how we can support your journey..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg"
                  >
                    {isSubmitting ? "Sending..." : (<><Send className="h-5 w-5 mr-2" /> Send Message</>)}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Your information is secure and will never be shared with third parties.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}
function WhatsappIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
    </svg>
  )
}
function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}
