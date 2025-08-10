"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"

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
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  
  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
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
    {
      quote:
        "The personalized approach to healing trauma has completely changed my perspective on mental health. I'm grateful for this journey.",
      author: "Michael K.",
      role: "Teacher",
      rating: 5,
    },
    {
      quote:
        "Jefferin's expertise in trauma therapy is unmatched. They helped me process years of unresolved pain in just a few months.",
      author: "Emily S.",
      role: "Nurse",
      rating: 5,
    },
    {
      quote:
        "The group sessions created such a supportive environment. I never felt alone in my struggles, and the healing was incredible.",
      author: "David P.",
      role: "Engineer",
      rating: 5,
    },
    {
      quote:
        "After years of traditional therapy, this approach finally helped me break through. The techniques are practical and life-changing.",
      author: "Lisa M.",
      role: "Artist",
      rating: 5,
    },
    {
      quote:
        "The mindfulness practices I learned here have become my daily routine. I'm more present and peaceful than ever before.",
      author: "Robert T.",
      role: "Business Owner",
      rating: 5,
    },
    {
      quote:
        "Jefferin's compassion and understanding made all the difference. I finally feel like I'm living, not just surviving.",
      author: "Amanda R.",
      role: "Social Worker",
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

  const nextSlide = () => {
    if (isMobile) {
      // Mobile: move to next single testimonial
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    } else {
      // Desktop: move to next group of 3
      const maxGroups = Math.ceil(testimonials.length / 3)
      setCurrentSlide((prev) => (prev + 1) % maxGroups)
    }
  }

  const prevSlide = () => {
    if (isMobile) {
      // Mobile: move to previous single testimonial
      setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    } else {
      // Desktop: move to previous group of 3
      const maxGroups = Math.ceil(testimonials.length / 3)
      setCurrentSlide((prev) => (prev - 1 + maxGroups) % maxGroups)
    }
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Auto-play functionality
  const [isPaused, setIsPaused] = useState(false)
  
  useEffect(() => {
    if (isPaused) return
    
    const interval = setInterval(() => {
      if (isMobile) {
        // Mobile: move to next single testimonial
        setCurrentSlide((prev) => (prev + 1) % testimonials.length)
      } else {
        // Desktop: move to next group of 3
        const maxGroups = Math.ceil(testimonials.length / 3)
        setCurrentSlide((prev) => (prev + 1) % maxGroups)
      }
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [testimonials.length, isPaused])

  // Touch/swipe support for mobile
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }

    setTouchStart(0)
    setTouchEnd(0)
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
            <p className="max-w-3xl mx-auto text-white text-lg md:text-xl lg:text-2xl leading-relaxed">
              Real stories from individuals who have found healing, growth, and renewed hope through their journey with us.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="relative">
          {/* Responsive Grid Container */}
          <div 
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Mobile: Show 1 testimonial at a time */}
            <div className="lg:hidden">
              <div 
                className="flex transition-all duration-700 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2 animate-slideIn" style={{ animationDelay: `${index * 0.05}s` }}>
                    <Card className="group relative overflow-hidden bg-white backdrop-blur-sm border-2 border-blue-200 shadow-2xl hover:shadow-4xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 rounded-3xl h-full min-h-[400px] md:min-h-[500px] w-full max-w-sm mx-auto animate-fadeIn" style={{ animationDelay: `${index * 0.08}s` }}>
                      {/* Decorative gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Quote mark decoration */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-125 transition-transform duration-300 z-10">
                        <Quote className="h-6 w-6 md:h-8 md:w-8 text-white" />
                      </div>

                      <CardContent className="relative p-6 md:p-8 h-full flex flex-col justify-center">
                        {/* Star Rating */}
                        <div className="mb-6 flex justify-center">
                          <StarRating rating={testimonial.rating} />
                        </div>

                        {/* Quote */}
                        <blockquote className="text-gray-800 text-base md:text-lg lg:text-xl leading-relaxed relative font-medium text-center flex-1 flex items-center justify-center">
                          <span className="text-3xl md:text-4xl text-blue-400 absolute -top-2 -left-2 font-serif opacity-80">"</span>
                          <span className="relative z-10 italic font-semibold px-4">{testimonial.quote}</span>
                          <span className="text-3xl md:text-4xl text-blue-400 absolute -bottom-2 -right-2 font-serif opacity-80">"</span>
                        </blockquote>

                        {/* Verified badge */}
                        <div className="absolute top-3 right-3 flex items-center space-x-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Verified</span>
                        </div>
                      </CardContent>

                      {/* Bottom decoration */}
                      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl"></div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop: Show 3 testimonials at a time */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-3 gap-8 transition-all duration-700 ease-out">
                {testimonials.slice(currentSlide * 3, currentSlide * 3 + 3).map((testimonial, index) => (
                  <div key={index} className="w-full animate-slideIn" style={{ animationDelay: `${index * 0.1}s` }}>
                    <Card className="group relative overflow-hidden bg-white backdrop-blur-sm border-2 border-blue-200 shadow-2xl hover:shadow-4xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 rounded-3xl h-full min-h-[450px] animate-fadeIn" style={{ animationDelay: `${index * 0.15}s` }}>
                      {/* Decorative gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Quote mark decoration */}
                      <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-125 transition-transform duration-300 z-10">
                        <Quote className="h-8 w-8 text-white" />
                      </div>

                      <CardContent className="relative p-8 h-full flex flex-col justify-center">
                        {/* Star Rating */}
                        <div className="mb-6 flex justify-center">
                          <StarRating rating={testimonial.rating} />
                        </div>

                        {/* Quote */}
                        <blockquote className="text-gray-800 text-lg lg:text-xl leading-relaxed relative font-medium text-center flex-1 flex items-center justify-center">
                          <span className="text-4xl text-blue-400 absolute -top-2 -left-2 font-serif opacity-80">"</span>
                          <span className="relative z-10 italic font-semibold px-4">{testimonial.quote}</span>
                          <span className="text-4xl text-blue-400 absolute -bottom-2 -right-2 font-serif opacity-80">"</span>
                        </blockquote>

                        {/* Verified badge */}
                        <div className="absolute top-3 right-3 flex items-center space-x-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Verified</span>
                        </div>
                      </CardContent>

                      {/* Bottom decoration */}
                      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl"></div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute -left-6 lg:-left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 lg:w-14 lg:h-14 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-white transition-all duration-300 hover:scale-110 border-2 border-blue-200"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 lg:w-7 lg:h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute -right-6 lg:-right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 lg:w-14 lg:h-14 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-white transition-all duration-300 hover:scale-110 border-2 border-blue-200"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8 md:mt-12">
            {Array.from({ length: isMobile ? testimonials.length : Math.ceil(testimonials.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={isMobile ? `Go to testimonial ${index + 1}` : `Go to testimonial group ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Statistics */}
        <div className="mt-20 md:mt-24">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
            <div ref={happyClientsRef} className="space-y-4 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="text-5xl md:text-6xl font-bold text-white">{happyClients}+</div>
              
              <div className="text-white text-lg font-medium">Happy Clients</div>
            </div>
            <div ref={averageRatingRef} className="space-y-4 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="text-5xl md:text-6xl font-bold text-white">{averageRating.toFixed(1)}</div>
              <div className="text-white flex items-center justify-center space-x-2 text-lg font-medium">
                <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                <span>Average Rating</span>
              </div>
            </div>
            <div ref={successRateRef} className="space-y-4 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="text-5xl md:text-6xl font-bold text-white">{successRate}%</div>
              <div className="text-white text-lg font-medium">Success Rate</div>
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
            <Link 
              href="#contact" 
              className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap inline-block"
            >
              Begin Your Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}