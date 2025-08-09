import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full py-8 md:py-12 bg-blue-500 text-white">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <Link className="text-2xl font-bold tracking-tight" href="#home">
            Heal Your Trauma
          </Link>
          <p className="text-sm text-blue-100 mt-2">
            &copy; {new Date().getFullYear()} Heal Your Trauma. All rights reserved.
          </p>
        </div>
        <nav className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 mt-4 md:mt-0">
          <Link className="text-sm font-medium hover:text-blue-100 transition-colors" href="#services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:text-blue-100 transition-colors" href="#about">
            About Us
          </Link>
          <Link className="text-sm font-medium hover:text-blue-100 transition-colors" href="#testimonials">
            Testimonials
          </Link>
          <Link className="text-sm font-medium hover:text-blue-100 transition-colors" href="#contact">
            Contact Us
          </Link>
          <Link className="text-sm font-medium hover:text-blue-100 transition-colors" href="#">
            Privacy Policy
          </Link>
          <Link className="text-sm font-medium hover:text-blue-100 transition-colors" href="#">
            Terms of Service
          </Link>
        </nav>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="text-blue-100 hover:text-white transition-colors" aria-label="Facebook">
            <Facebook className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-blue-100 hover:text-white transition-colors" aria-label="Twitter">
            <Twitter className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-blue-100 hover:text-white transition-colors" aria-label="Instagram">
            <Instagram className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
