import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutUsSection } from "@/components/about-us-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactUsSection } from "@/components/contact-us-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gradient-to-br from-blue-800 via-blue-300 via-violet-500 to-white text-black">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <AboutUsSection />
        <TestimonialsSection />
        <ContactUsSection />
      </main>
      <Footer />
    </div>
  )
}
