"use client"

import Link from "next/link"
import { Card, CardHeader, CardDescription, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Brain, Users, BookOpen, Lightbulb } from "lucide-react"
import { useState } from "react"

export function ServicesSection() {
  const [openModal, setOpenModal] = useState<string | null>(null)

  const services = [
    {
      id: "inner-healing",
      icon: Brain,
      title: "Inner Healing",
      description: "Deep therapeutic work to heal inner wounds, release emotional blockages, and restore your authentic self.",
      detailedDescription: "Addressing and healing emotional wounds and negative beliefs that may be affecting your mental and emotional well-being. Healing your wounded inner child involves addressing and resolving emotional wounding from the past that is currently affecting you. Therapy involves identifying & working through your “triggers”, negative core beliefs and behaviours patterns that stem from these wounds. The goal of healing your inner child is to re-birth anew with a new found connection to yourself & emotional homeostasis generating a sense of self-acceptance, inner harmony & peace.",
    },
    {
      id: "life-coaching",
      icon: Users,
      title: "Life Coaching",
      description: "Transformative guidance to help you overcome obstacles, set meaningful goals, and create the life you desire.",
      detailedDescription: "To Coach, is to bring a person from where they are to where they want to be. Life Coaching is a partnership to create a shared understanding of what you like to achieve. I will help to harness your skills, tap into your inner guidance & give you clarity and confidence to move forward.",
    },
    {
      id: "past-life-regression",
      icon: BookOpen,
      title: "Past Life Regression Therapy",
      description: "Explore past life experiences to understand current patterns, heal karmic wounds, and gain spiritual insights.",
      detailedDescription: "Regression Therapy is about accessing memories from the past as part of a psychotherapeutic process. Regression utilizes clinical hypnosis to take you to a deeply relaxed state and guide you through the recall experience. You will clear the emotional residue you unknowingly are carrying and begin to live a fully integrated life. Releasing old emotional blocks generates a flow of mental & emotional clarity & opens doors to achieve wisdom and happiness in this lifetime.",
    },
    {
      id: "emotional-healing",
      icon: Lightbulb,
      title: "Emotional Healing",
      description: "Release emotional pain, develop healthy coping mechanisms, and cultivate inner peace and emotional balance.",
      detailedDescription: "Emotional eating means eating for reasons other than hunger. You may eat because you are sad, depressed, stressed or lonely or are triggered by a past traumatic incident and eating distracts & numbs your pain. Having extra fat on the body can help protect against feeling the intensity of unprocessed emotions & acts like a thick coat of insulation on a high voltage wire. Extra weight protects you from the world. Our weight loss through Emotional Healing takes place with the help of subconscious awareness & hypnosis. You are guided through a series of sessions where you begin your exploration in understanding & accepting your unique emotional triggers getting in the way of maintaining a healthy body outlook & weight. Awareness + Acceptance + Action = Change",
    },
  ]

  const handleLearnMore = (serviceId: string) => {
    setOpenModal(serviceId)
  }

  const handleCloseModal = () => {
    setOpenModal(null)
  }

  return (
    <section id="services" className="relative w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-white/30"></div>
      <div className="absolute top-10 left-20 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl"></div>
      
      <div className="relative container px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <div className="space-y-4 md:space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              ✨ Our Services
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Comprehensive Care
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl lg:text-2xl leading-relaxed">
              We offer a range of evidence-based services designed to support your journey towards healing and well-being.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative p-8 md:p-10 bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                {/* Icon and Title Header */}
                <CardHeader className="p-0 pb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 p-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      <service.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </CardHeader>

                {/* Description */}
                <CardContent className="p-0">
                  <CardDescription className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  {/* Learn More Link */}
                  <div className="mt-6">
                    <button 
                      onClick={() => handleLearnMore(service.id)}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors cursor-pointer"
                    >
                      Learn more
                      <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </CardContent>
              </div>

              {/* Decorative corner element */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 md:mt-20">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 md:p-8 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100/50">
            <div className="text-center sm:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                Ready to start your journey?
              </h3>
              <p className="text-gray-600">
                Book a consultation to find the right service for you.
              </p>
            </div>
            <Link href="#contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap inline-block">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Service Detail Modals */}
      {services.map((service) => (
        <Dialog key={service.id} open={openModal === service.id} onOpenChange={() => setOpenModal(null)}>
          <DialogContent className="max-w-2xl mx-4 md:mx-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-gray-900">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 p-3 flex items-center justify-center">
                  <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                {service.title}
              </DialogTitle>
            </DialogHeader>
            
            <div className="mt-6 space-y-6">
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  {service.detailedDescription}
                </p>
              </div>
              
              <div className="flex justify-center pt-4">
                <button
                  onClick={handleCloseModal}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-base md:text-lg"
                >
                  Got It!
                </button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </section>
  )
}