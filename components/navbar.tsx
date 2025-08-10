"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { MenuIcon, XIcon } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact Us", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-blue-800 text-white shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link className="text-2xl font-bold tracking-tight" href="#home">
          Heal Your Trauma
        </Link>
        <nav className="hidden space-x-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              className="text-lg font-medium transition-colors hover:text-blue-100"
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Toggle navigation menu">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] bg-blue-800 text-white sm:w-[300px]">
            <div className="flex flex-col items-start gap-6 p-6">
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="self-end">
                <XIcon className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  className="text-xl font-medium transition-colors hover:text-blue-100"
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
