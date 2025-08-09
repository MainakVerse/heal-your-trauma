import { Card, CardHeader, CardDescription, CardContent } from "@/components/ui/card"
import { Brain, Users, BookOpen, Lightbulb } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Brain,
      title: "Individual Coaching",
      description: "Personalized one-on-one sessions to address your unique challenges and foster growth.",
    },
    {
      icon: Users,
      title: "Group Therapy",
      description: "Connect with others in a supportive environment to share experiences and heal together.",
    },
    {
      icon: BookOpen,
      title: "Workshops & Seminars",
      description: "Engaging educational sessions on various mental health topics and coping strategies.",
    },
    {
      icon: Lightbulb,
      title: "Mindfulness Practices",
      description: "Learn techniques to cultivate presence, reduce stress, and enhance emotional well-being.",
    },
  ]

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
                    <span className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors cursor-pointer">
                      Learn more
                      <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
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
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}