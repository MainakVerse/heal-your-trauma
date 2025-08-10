import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedText } from "./animated-text"

export function HeroSection() {
  const animatedPhrases = ["Upgrade Your Life", "Outshine From Inside", "Connect With Your Soul", "Heal Your Trauma"]

  return (
    <section
      id="home"
      className="relative w-full py-16 md:py-24 lg:py-32 xl:py-40 text-white flex items-center justify-center min-h-[calc(100vh-64px)] bg-gradient-to-br from-blue-300 via-[#976DF7]-800 to-violet-900"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative container px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center text-center space-y-8 md:space-y-12">
          
          {/* Main content area */}
          <div className="space-y-6 md:space-y-8 max-w-4xl mx-auto">
            {/* Animated Text with larger sizing */}
            <div className="space-y-2">
              <AnimatedText phrases={animatedPhrases} />
            </div>
            
            {/* Subtitle with improved typography */}
            <p className="max-w-3xl text-blue-100/90 text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed mx-auto font-light">
              Discover inner peace and resilience with Jefferin, your dedicated mental health coach.
            </p>
            
            {/* Additional tagline */}
            <p className="max-w-2xl text-blue-200/70 text-sm sm:text-base md:text-lg mx-auto">
              Transform your mindset, overcome challenges, and build lasting mental wellness through personalized coaching sessions.
            </p>
          </div>
          
          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4">
            <Link href="#contact">
              <Button className="w-full sm:w-auto inline-flex h-12 md:h-14 items-center justify-center rounded-xl bg-white px-8 md:px-10 text-base md:text-lg font-semibold text-blue-700 shadow-xl transition-all duration-300 hover:bg-blue-50 hover:shadow-2xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-700">
                Book a Session
              </Button>
            </Link>
            <Link href="#services">
              <Button
                variant="outline"
                className="w-full sm:w-auto inline-flex h-12 md:h-14 items-center justify-center rounded-xl border-2 border-white/80 bg-transparent backdrop-blur-sm px-8 md:px-10 text-base md:text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-white/10 hover:border-white hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                Learn More
              </Button>
            </Link>
          </div>
          

        </div>
      </div>
    </section>
  )
}