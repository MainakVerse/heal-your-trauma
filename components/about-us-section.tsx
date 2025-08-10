import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Heart } from "lucide-react"

export function AboutUsSection() {


  return (
    <section id="about" className="relative w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 via-violet-50 to-purple-100">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-white/30"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-violet-200/30 rounded-full blur-3xl"></div>
      
      <div className="relative container px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
            👋 About Us
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Meet Your Guide to Healing
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg md:text-xl leading-relaxed">
            Compassionate expertise meets personalized care on your journey to wellness
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Content Section */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Meet Our Spiritual Guide ~ Jefferin Sequeira
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Jefferin is a compassionate and experienced mental health coach dedicated to guiding individuals through their healing journey. With a holistic approach, Jefferin combines evidence-based techniques with empathetic support to help clients overcome trauma, build resilience, and cultivate a life of purpose and joy.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  At Heal Your Trauma, we believe in empowering you to unlock your inner strength and navigate life's challenges with confidence. Our mission is to create a safe and nurturing space where you can explore, heal, and grow.
                </p>
              </div>

              {/* Mission Statement */}
              <div className="p-6 md:p-8 bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl border border-purple-100">
                <h4 className="text-xl font-semibold text-purple-900 mb-3">Our Mission</h4>
                <p className="text-purple-800 leading-relaxed">
                  "To provide compassionate, evidence-based mental health support that empowers individuals to heal from trauma, build resilience, and create meaningful, fulfilling lives."
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact">
                <Button className="w-full sm:w-auto h-12 md:h-14 px-8 md:px-10 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-base md:text-lg">
                  Connect with Jefferin
                </Button>
              </Link>
              <Link href="#services">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto h-12 md:h-14 px-8 md:px-10 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold rounded-xl transition-all duration-300 text-base md:text-lg"
                >
                  View Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative group">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-violet-600 rounded-3xl rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-600 rounded-3xl -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
              
              {/* Main image container */}
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
                <Image
                  src="/jefferin.png"
                  width="500"
                  height="500"
                  alt="Portrait of Jefferin, a compassionate mental health coach"
                  className="w-full aspect-square object-cover rounded-2xl"
                />
                
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-purple-600 to-violet-700 text-white p-4 rounded-2xl shadow-lg">
                  <Heart className="h-6 w-6" />
                </div>
              </div>
            </div>

            {/* Floating credentials */}
            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-purple-100 hidden lg:block">
              <div className="flex items-center space-x-3">
                <Award className="h-8 w-8 text-purple-600" />
                <div>
                  <p className="font-semibold text-gray-900">Licensed Professional</p>
                  <p className="text-sm text-gray-600">Certified Mental Health Coach</p>
                </div>
              </div>
            </div>
          </div>
        </div>




      </div>
    </section>
  )
}