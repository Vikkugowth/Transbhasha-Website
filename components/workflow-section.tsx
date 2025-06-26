"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Upload, FileText, CheckCircle, Languages, Volume2, Video, Download, ArrowRight } from "lucide-react"

interface WorkflowStep {
  id: number
  icon: React.ReactNode
  title: string
  description: string
  details: string
  status: "pending" | "active" | "completed"
}

export function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const workflowSteps: WorkflowStep[] = [
    {
      id: 1,
      icon: <Upload className="h-6 w-6" />,
      title: "Upload Content",
      description: "Upload video files or provide YouTube links",
      details: "Support for MP4, AVI, MOV formats and direct YouTube URL processing with automatic content extraction.",
      status: "pending",
    },
    {
      id: 2,
      icon: <FileText className="h-6 w-6" />,
      title: "AI Transcription",
      description: "Advanced speech recognition extracts audio",
      details:
        "Our AI analyzes audio tracks, identifies speakers, and converts speech to text with 95%+ accuracy across 22+ Indian languages.",
      status: "pending",
    },
    {
      id: 3,
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Grammar Correction",
      description: "Intelligent grammar and context correction",
      details:
        "AI-powered grammar correction ensures proper sentence structure, punctuation, and contextual accuracy for professional output.",
      status: "pending",
    },
    {
      id: 4,
      icon: <Languages className="h-6 w-6" />,
      title: "Smart Translation",
      description: "Neural translation with cultural context",
      details:
        "Context-aware translation preserving cultural nuances, idioms, and maintaining the original meaning across target languages.",
      status: "pending",
    },
    {
      id: 5,
      icon: <Volume2 className="h-6 w-6" />,
      title: "Voice Synthesis",
      description: "Natural TTS with emotion matching",
      details:
        "Generate human-like voices with proper intonation, emotion, and speaking style that matches the original content's tone.",
      status: "pending",
    },
    {
      id: 6,
      icon: <Video className="h-6 w-6" />,
      title: "Lip Sync & Timing",
      description: "Advanced lip synchronization technology",
      details:
        "AI-powered lip sync ensures perfect audio-visual alignment with natural mouth movements and proper timing synchronization.",
      status: "pending",
    },
    {
      id: 7,
      icon: <Download className="h-6 w-6" />,
      title: "Download Results",
      description: "Get your localized content ready",
      details:
        "Download high-quality videos with subtitles, voice-overs, and all localization assets optimized for your target platforms.",
      status: "pending",
    },
  ]

  const [steps, setSteps] = useState(workflowSteps)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setActiveStep((prev) => {
        const next = (prev + 1) % steps.length
        return next
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [autoPlay, steps.length])

  useEffect(() => {
    setSteps((prevSteps) =>
      prevSteps.map((step, index) => ({
        ...step,
        status: index < activeStep ? "completed" : index === activeStep ? "active" : "pending",
      })),
    )
  }, [activeStep])

  const handleStepClick = (index: number) => {
    setActiveStep(index)
    setAutoPlay(false)
    setTimeout(() => setAutoPlay(true), 5000) // Resume auto-play after 5 seconds
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            Our AI-powered workflow transforms your content through intelligent processing steps
          </p>
          <Badge variant="outline" className="mt-2">
            {autoPlay ? "Auto-playing" : "Manual mode"} • Click any step to explore
          </Badge>
        </div>

        {/* Workflow Visualization */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Flow */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection Lines */}
              <div className="absolute top-16 left-0 right-0 h-0.5 bg-border"></div>

              {/* Steps */}
              <div className="grid grid-cols-7 gap-4">
                {steps.map((step, index) => (
                  <div key={step.id} className="relative">
                    {/* Step Circle */}
                    <div
                      className={`relative z-10 w-12 h-12 mx-auto rounded-full border-2 flex items-center justify-center cursor-pointer transition-all duration-500 ${
                        step.status === "completed"
                          ? "bg-green-500 border-green-500 text-white"
                          : step.status === "active"
                            ? "bg-primary border-primary text-primary-foreground animate-pulse"
                            : "bg-background border-border text-muted-foreground hover:border-primary"
                      }`}
                      onClick={() => handleStepClick(index)}
                    >
                      {step.status === "completed" ? <CheckCircle className="h-6 w-6" /> : step.icon}
                    </div>

                    {/* Arrow */}
                    {index < steps.length - 1 && (
                      <ArrowRight
                        className={`absolute top-4 -right-2 h-4 w-4 transition-colors duration-500 ${
                          step.status === "completed" ? "text-green-500" : "text-muted-foreground"
                        }`}
                      />
                    )}

                    {/* Step Info */}
                    <div className="mt-4 text-center">
                      <h3
                        className={`font-semibold text-sm transition-colors duration-500 ${
                          step.status === "active" ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Flow */}
          <div className="lg:hidden">
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex items-center space-x-4 p-4 rounded-lg border transition-all duration-500 cursor-pointer ${
                    step.status === "active"
                      ? "border-primary bg-primary/5"
                      : step.status === "completed"
                        ? "border-green-500 bg-green-50 dark:bg-green-950"
                        : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => handleStepClick(index)}
                >
                  <div
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                      step.status === "completed"
                        ? "bg-green-500 border-green-500 text-white"
                        : step.status === "active"
                          ? "bg-primary border-primary text-primary-foreground"
                          : "bg-background border-border text-muted-foreground"
                    }`}
                  >
                    {step.status === "completed" ? <CheckCircle className="h-5 w-5" /> : step.icon}
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`font-semibold transition-colors duration-500 ${
                        step.status === "active" ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && <ArrowRight className="h-4 w-4 text-muted-foreground" />}
                </div>
              ))}
            </div>
          </div>

          {/* Active Step Details */}
          <Card className="mt-8 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  {steps[activeStep].icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{steps[activeStep].title}</h3>
                  <p className="text-muted-foreground">{steps[activeStep].details}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
