"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Review {
  reviewerName: string
  reviewText: string
  rating: number
  company: string
}

interface UserReviewsProps {
  reviews: Review[]
  autoRotate?: boolean
  rotationInterval?: number
}

export function UserReviews({ reviews, autoRotate = true, rotationInterval = 8000 }: UserReviewsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // For desktop, show 3 cards at a time; for mobile, show 1
  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1
    }
    return 3
  }

  const [visibleCount, setVisibleCount] = useState(getVisibleCount)

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (!autoRotate || reviews.length <= visibleCount || isHovered) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = reviews.length - visibleCount
        return prev >= maxIndex ? 0 : prev + 1
      })
    }, rotationInterval)

    return () => clearInterval(interval)
  }, [autoRotate, rotationInterval, reviews.length, visibleCount, isHovered])

  if (!reviews.length) return null

  const maxIndex = Math.max(0, reviews.length - visibleCount)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const visibleReviews = reviews.slice(currentIndex, currentIndex + visibleCount)

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            Hear from businesses and creators who are breaking language barriers with Transbhasha
          </p>
        </div>

        <div
          className="relative mx-auto max-w-7xl mt-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Buttons */}
          {reviews.length > visibleCount && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
                onClick={nextSlide}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </>
          )}

          {/* Reviews Grid */}
          <div
            className={`grid gap-6 ${visibleCount === 3 ? "lg:grid-cols-3" : visibleCount === 2 ? "md:grid-cols-2" : "grid-cols-1"}`}
          >
            {visibleReviews.map((review, index) => (
              <Card
                key={currentIndex + index}
                className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  {/* Star Rating */}
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-sm md:text-base text-muted-foreground mb-4 italic line-clamp-4">
                    "{review.reviewText}"
                  </blockquote>

                  {/* Reviewer Info */}
                  <div className="space-y-1">
                    <p className="font-semibold text-foreground text-sm">{review.reviewerName}</p>
                    <p className="text-xs text-muted-foreground">{review.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Dots Indicator */}
          {reviews.length > visibleCount && (
            <div className="flex justify-center space-x-2 mt-6">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
