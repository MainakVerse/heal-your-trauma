"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"
import { useState, useEffect, useRef } from "react"

// Custom hook for counter animation
function useCounterAnimation(targetValue: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * targetValue)
      
      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, targetValue, duration])

  return { count, ref }
}

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Jefferin helped me navigate through a very difficult period in my life. Their guidance was invaluable, and I feel much stronger and more at peace now.",
      author: "Sarah L.",
      role: "Executive Assistant",
      rating: 5,
    },
    {
      quote:
        "The workshops offered by Heal Your Trauma are truly transformative. I learned practical tools that I use daily to manage stress and anxiety.",
      author: "Mark T.",
      role: "Software Developer",
      rating: 5,
    },
    {
      quote:
        "I was hesitant at first, but working with Jefferin was the best decision I made for my mental well-being. Highly recommend!",
      author: "Jessica R.",
      role: "Marketing Manager",
      rating: 5,
    },
  ]

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex space-x-2 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-6 w-6 ${
              i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-blue-200'
            }`}
          />
        ))}
      </div>
    )
  }

  // Counter animations for statistics
  const { count: happyClients, ref: happyClientsRef } = useCounterAnimation(500, 2500)
  const { count: averageRating, ref: averageRatingRef } = useCounterAnimation(4.9, 2000)
  const { count: successRate, ref: successRateRef } = useCounterAnimation(98, 2000)

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 text-white">
      <div className="container px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <div className="space-y-4 md:space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-blue-100 text-sm font-medium mb-4">
              ⭐ Client Stories
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Voices of Transformation
            </h2>
            <p className="max-w-3xl mx-auto text-blue-100/90 text-lg md:text-xl lg:text-2xl leading-relaxed">
              Real stories from individuals who have found healing, growth, and renewed hope through their journey with us.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-white backdrop-blur-sm border-2 border-blue-200 shadow-2xl hover:shadow-4xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 rounded-3xl"
            >
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Quote mark decoration */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-125 transition-transform duration-300 z-10">
                <Quote className="h-10 w-10 text-white" />
              </div>

              <CardContent className="relative p-10 md:p-12">
                {/* Star Rating */}
                <div className="mb-8">
                  <StarRating rating={testimonial.rating} />
                </div>

                {/* Quote */}
                <blockquote className="text-gray-800 text-lg md:text-xl leading-relaxed mb-10 relative font-medium">
                  <span className="text-6xl text-blue-400 absolute -top-4 -left-4 font-serif opacity-80">"</span>
                  <span className="relative z-10 italic font-semibold">{testimonial.quote}</span>
                  <span className="text-6xl text-blue-400 absolute -bottom-8 -right-4 font-serif opacity-80">"</span>
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center space-x-4 pt-6 border-t border-blue-100">
                  {/* Avatar placeholder */}
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-lg">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-900 text-lg">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Verified badge */}
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Verified</span>
                </div>
              </CardContent>

              {/* Bottom decoration */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl"></div>
            </Card>
          ))}
        </div>

        {/* Bottom Statistics */}
        <div className="mt-20 md:mt-24">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
            <div ref={happyClientsRef} className="space-y-4 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="text-5xl md:text-6xl font-bold text-white">{happyClients}+</div>
              
              <div className="text-blue-900 text-lg font-medium">Happy Clients</div>
            </div>
            <div ref={averageRatingRef} className="space-y-4 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="text-5xl md:text-6xl font-bold text-white">{averageRating.toFixed(1)}</div>
              <div className="text-blue-900 flex items-center justify-center space-x-2 text-lg font-medium">
                <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                <span>Average Rating</span>
              </div>
            </div>
            <div ref={successRateRef} className="space-y-4 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="text-5xl md:text-6xl font-bold text-white">{successRate}%</div>
              <div className="text-blue-900 text-lg font-medium">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 md:mt-20">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 md:p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="text-center sm:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Ready to start your transformation?
              </h3>
              <p className="text-blue-100">
                Join hundreds who have found healing and growth.
              </p>
            </div>
            <button className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap">
              Begin Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}