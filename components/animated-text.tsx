"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils" // Assuming cn utility is available

interface AnimatedTextProps {
  phrases: string[]
  interval?: number // Time each phrase is visible in ms
  fadeDuration?: number // Fade in/out duration in ms
}

export function AnimatedText({ phrases, interval = 3000, fadeDuration = 500 }: AnimatedTextProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const cycleText = () => {
      setIsVisible(false) // Start fade out

      const fadeOutTimer = setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length)
        setIsVisible(true) // Start fade in for new text
      }, fadeDuration) // Wait for fade out to complete before changing text

      return () => clearTimeout(fadeOutTimer)
    }

    const intervalId = setInterval(cycleText, interval)

    return () => clearInterval(intervalId)
  }, [phrases, interval, fadeDuration])

  return (
    <h1
      className={cn(
        "text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none transition-opacity duration-500",
        isVisible ? "opacity-100" : "opacity-0",
      )}
    >
      {phrases[currentPhraseIndex]}
    </h1>
  )
}
