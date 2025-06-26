import { HeroSection } from "@/components/hero-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mic, Languages, Volume2, Code, Zap, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ApiServicesPage() {
  const apiFeatures = [
    {
      icon: <Mic className="h-8 w-8 text-primary" />,
      title: "Automatic Speech Recognition (ASR)",
      capabilities: [
        "Real-time speech-to-text conversion",
        "Support for 22+ Indian languages",
        "High accuracy with noise reduction",
        "Custom vocabulary support",
      ],
    },
    {
      icon: <Languages className="h-8 w-8 text-primary" />,
      title: "Machine Translation (MT)",
      capabilities: [
        "Neural machine translation",
        "Context-aware translations",
        "Domain-specific models",
        "Batch processing support",
      ],
    },
    {
      icon: <Volume2 className="h-8 w-8 text-primary" />,
      title: "Text-to-Speech (TTS)",
      capabilities: [
        "Natural-sounding voice synthesis",
        "Multiple voice options per language",
        "Emotion and tone control",
        "SSML support for advanced control",
      ],
    },
  ]

  const technicalFeatures = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "RESTful APIs",
      description: "Easy-to-integrate REST APIs with comprehensive documentation",
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "High Performance",
      description: "Optimized for speed with sub-second response times",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Enterprise Security",
      description: "Bank-grade security with data encryption and compliance",
    },
  ]

  const useCases = [
    "Media & Entertainment",
    "E-learning Platforms",
    "Customer Support",
    "Content Creation",
    "Healthcare",
    "Government Services",
  ]

  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection
        headline="API Services Platform"
        subheadline="Powerful, scalable APIs for Automatic Speech Recognition, Machine Translation, and Text-to-Speech services. Built for developers, designed for scale."
        primaryCta="Access API Platform"
        secondaryCta="View Documentation"
        primaryCtaLink="/contact"
        secondaryCtaLink="/contact"
        imageSrc="/images/api-services-hero.png"
      />

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">API Features</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive language processing capabilities at your fingertips
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl items-start gap-6 py-12 lg:grid-cols-3">
            {apiFeatures.map((feature, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    {feature.icon}
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {feature.capabilities.map((capability, capIndex) => (
                      <li key={capIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Technical Features</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Built for enterprise-grade performance and reliability
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3">
            {technicalFeatures.map((feature, index) => (
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

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Use Cases</h2>
              <p className="text-muted-foreground md:text-lg">
                Our APIs power applications across various industries, enabling businesses to break language barriers
                and reach wider audiences.
              </p>
              <div className="grid gap-2 md:grid-cols-2">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Getting Started</h2>
              <p className="text-muted-foreground md:text-lg">
                Integration is simple with our comprehensive documentation, SDKs, and dedicated developer support.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Sign up for API access</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Get your API keys</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Start integrating with our SDKs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Scale with confidence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Integrate Our APIs?</h2>
              <p className="max-w-[600px] text-primary-foreground/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Start building multilingual applications today with our powerful API platform.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Access API Platform</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
