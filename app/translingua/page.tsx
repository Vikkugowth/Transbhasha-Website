import { HeroSection } from "@/components/hero-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { WorkflowSection } from "@/components/workflow-section"
import { Video, Languages, Volume2, Subtitles, Globe, Zap } from "lucide-react"
import Link from "next/link"

export default function TranslinguaPage() {
  const keyFeatures = [
    {
      icon: <Subtitles className="h-6 w-6 text-primary" />,
      title: "Automated Subtitling",
      description: "Generate accurate subtitles with proper timing and formatting",
    },
    {
      icon: <Languages className="h-6 w-6 text-primary" />,
      title: "Multi-Language Support",
      description: "Support for 22+ Indian languages with cultural context",
    },
    {
      icon: <Volume2 className="h-6 w-6 text-primary" />,
      title: "Voice-Over Generation",
      description: "Natural-sounding AI voices with emotion and tone control",
    },
    {
      icon: <Video className="h-6 w-6 text-primary" />,
      title: "Video Translation",
      description: "Complete video localization with synchronized audio",
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Cultural Adaptation",
      description: "Context-aware translations that preserve cultural nuances",
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Fast Processing",
      description: "Quick turnaround times without compromising quality",
    },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection
        headline="Translingua - Breaking Language Barriers in Video Content"
        subheadline="Transform your video content for global audiences with AI-powered translation, subtitling, and voice-over generation across 22+ Indian languages."
        primaryCta="Request Demo"
        secondaryCta="Learn More"
        primaryCtaLink="/contact"
        secondaryCtaLink="#workflow"
        imageSrc="/images/translingua-hero.png"
      />

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The Problem We Solve</h2>
              <p className="text-muted-foreground md:text-lg">
                Content creators and businesses struggle to reach diverse audiences due to language barriers.
                Traditional video localization is expensive, time-consuming, and often loses the original context and
                emotion.
              </p>
              <p className="text-muted-foreground md:text-lg">
                Manual translation and voice-over processes can take weeks or months, making it difficult to scale
                content across multiple languages efficiently.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Solution</h2>
              <p className="text-muted-foreground md:text-lg">
                Translingua revolutionizes video localization with AI-powered automation. Our platform combines advanced
                speech recognition, neural machine translation, and natural text-to-speech synthesis to deliver
                high-quality localized content in minutes, not months.
              </p>
              <p className="text-muted-foreground md:text-lg">
                With support for 22+ Indian languages and cultural context awareness, we help you maintain authenticity
                while reaching broader audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WorkflowSection />

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key Features</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Everything you need for professional video localization
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-2">{feature.icon}</div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Ready to Transform Your Video Content?
              </h2>
              <p className="max-w-[600px] text-primary-foreground/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join content creators and businesses who are breaking language barriers with Translingua.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Request Demo</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
