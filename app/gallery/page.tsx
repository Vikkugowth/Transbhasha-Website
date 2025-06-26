"use client"

import { useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users } from "lucide-react"
import Image from "next/image"

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Milestones", "Product", "Team Events", "Partnerships", "Recognition"]

  const galleryItems = [
    {
      title: "Company Launch Event",
      description: "Official launch of Transbhasha with industry leaders and investors",
      category: "Milestones",
      date: "March 2023",
      location: "Bangalore, India",
      participants: "50+ attendees",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "API Platform Beta Release",
      description: "First beta version of our comprehensive API platform",
      category: "Product",
      date: "June 2023",
      location: "Virtual Event",
      participants: "Development Team",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Team Retreat 2023",
      description: "Annual team building retreat in the hills of Coorg",
      category: "Team Events",
      date: "August 2023",
      location: "Coorg, Karnataka",
      participants: "All Team Members",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Partnership with TechCorp",
      description: "Strategic partnership announcement with leading tech company",
      category: "Partnerships",
      date: "September 2023",
      location: "Mumbai, India",
      participants: "Leadership Team",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "AI Innovation Award",
      description: "Recognition for excellence in AI-powered language technology",
      category: "Recognition",
      date: "October 2023",
      location: "Delhi, India",
      participants: "CEO & CTO",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Translingua Product Launch",
      description: "Official launch of our flagship video localization platform",
      category: "Product",
      date: "November 2023",
      location: "Bangalore, India",
      participants: "Product Team",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Diwali Celebration",
      description: "Festival celebration with the entire Transbhasha family",
      category: "Team Events",
      date: "November 2023",
      location: "Office, Bangalore",
      participants: "All Employees",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Series A Funding",
      description: "Successfully raised Series A funding to accelerate growth",
      category: "Milestones",
      date: "December 2023",
      location: "Bangalore, India",
      participants: "Investors & Leadership",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const timeline = [
    {
      date: "March 2023",
      title: "Company Founded",
      description: "Transbhasha was officially founded with a vision to break language barriers",
    },
    {
      date: "June 2023",
      title: "API Platform Beta",
      description: "Released beta version of our comprehensive API platform",
    },
    {
      date: "September 2023",
      title: "First Major Partnership",
      description: "Signed strategic partnership with leading technology company",
    },
    {
      date: "November 2023",
      title: "Translingua Launch",
      description: "Launched our flagship video localization platform",
    },
    {
      date: "December 2023",
      title: "Series A Funding",
      description: "Successfully raised Series A funding round",
    },
  ]

  const stats = [
    { number: "22+", label: "Languages Supported" },
    { number: "10K+", label: "Content Creators" },
    { number: "1M+", label: "Hours Processed" },
    { number: "50+", label: "Team Members" },
  ]

  const filteredItems =
    selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection
        headline="Our Journey"
        subheadline="Explore the milestones, achievements, and memorable moments that have shaped Transbhasha's story."
        primaryCta="Join Our Story"
        primaryCtaLink="/careers"
        showImage={false}
      />

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          {/* Category Filter */}
          <div className="flex flex-col items-center space-y-4 mb-12">
            <h2 className="text-2xl font-bold">Filter by Category</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-200"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <Badge variant="secondary">{item.category}</Badge>
                  </div>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{item.participants}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Company Timeline</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Key milestones in our journey to revolutionize multilingual communication
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>

              {timeline.map((milestone, index) => (
                <div key={index} className="relative flex items-start space-x-6 pb-8">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <Badge variant="outline">{milestone.date}</Badge>
                    </div>
                    <h3 className="text-lg font-semibold">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact in Numbers */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Impact in Numbers</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Our journey measured in achievements and growth
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-bold text-primary md:text-6xl">{stat.number}</div>
                <div className="text-sm font-medium text-muted-foreground md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
