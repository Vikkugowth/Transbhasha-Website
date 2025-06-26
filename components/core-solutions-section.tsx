"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PiIcon as Api, Video, CheckCircle, Mic, Languages, Bot, Globe } from "lucide-react"
import Link from "next/link"

export function CoreSolutionsSection() {
  const [viewAll, setViewAll] = useState(false)

  const solutions = [
    {
      icon: <Api className="h-8 w-8 text-primary" />,
      title: "API Services Platform",
      description:
        "Powerful APIs for Automatic Speech Recognition (ASR), Machine Translation (MT), and Text-to-Speech (TTS) services.",
      features: [
        "RESTful API architecture",
        "22+ Indian languages supported",
        "Real-time processing capabilities",
        "Scalable infrastructure",
      ],
      ctaText: "Explore APIs",
      ctaLink: "/api-services",
      category: "Core",
    },
    {
      icon: <Video className="h-8 w-8 text-primary" />,
      title: "Translingua",
      description:
        "Revolutionary video content localization platform that breaks language barriers through AI-powered translation and voice-over.",
      features: [
        "Automated subtitling",
        "Multi-language voice-over",
        "Video content translation",
        "Seamless workflow integration",
      ],
      ctaText: "Try Translingua",
      ctaLink: "/translingua",
      category: "Core",
    },
    {
      icon: <Mic className="h-8 w-8 text-primary" />,
      title: "VoiceScribe Pro",
      description:
        "Advanced speech-to-text solution with speaker identification, emotion detection, and real-time transcription capabilities.",
      features: [
        "Multi-speaker identification",
        "Emotion and sentiment analysis",
        "Live transcription streaming",
        "Custom vocabulary training",
      ],
      ctaText: "Learn More",
      ctaLink: "/contact",
      category: "Extended",
    },
    {
      icon: <Languages className="h-8 w-8 text-primary" />,
      title: "LinguaBridge",
      description:
        "Enterprise translation management system with workflow automation, quality assurance, and collaborative editing features.",
      features: [
        "Translation memory integration",
        "Quality scoring algorithms",
        "Collaborative review workflows",
        "CAT tool compatibility",
      ],
      ctaText: "Discover More",
      ctaLink: "/contact",
      category: "Extended",
    },
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: "ChatLingua AI",
      description:
        "Multilingual chatbot platform that enables businesses to provide customer support across multiple Indian languages.",
      features: [
        "Intent recognition in local languages",
        "Context-aware responses",
        "Multi-channel deployment",
        "Analytics and insights",
      ],
      ctaText: "Get Started",
      ctaLink: "/contact",
      category: "Extended",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "ContentGlobal Suite",
      description:
        "Complete content localization suite for websites, mobile apps, and digital platforms with automated workflows.",
      features: [
        "Website localization automation",
        "Mobile app internationalization",
        "SEO-optimized translations",
        "Content management integration",
      ],
      ctaText: "Explore Suite",
      ctaLink: "/contact",
      category: "Extended",
    },
  ]

  const displayedSolutions = viewAll ? solutions : solutions.filter((s) => s.category === "Core")

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Solutions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Comprehensive AI-powered language technology solutions for every business need
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {displayedSolutions.map((solution, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 animate-fade-in-up h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {solution.icon}
                    <div>
                      <CardTitle className="text-xl">{solution.title}</CardTitle>
                      {solution.category === "Extended" && (
                        <Badge variant="secondary" className="mt-1">
                          New
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                <CardDescription className="text-base">{solution.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <ul className="space-y-2 flex-1">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full mt-auto">
                  <Link href={solution.ctaLink}>{solution.ctaText}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All/Less Toggle */}
        <div className="text-center mt-8">
          <Button variant="outline" onClick={() => setViewAll(!viewAll)} className="min-w-[150px]">
            {viewAll ? "Show Core Solutions" : "View All Solutions"}
          </Button>
        </div>
      </div>
    </section>
  )
}
