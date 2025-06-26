import { HeroSection } from "@/components/hero-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Cpu, Users, Shield, Zap } from "lucide-react"
import { UserReviews } from "@/components/user-reviews"

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Innovation",
      description: "Continuously pushing the boundaries of AI and language technology",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Inclusivity",
      description: "Making technology accessible across all Indian languages and cultures",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Quality",
      description: "Delivering reliable, accurate, and high-performance solutions",
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Efficiency",
      description: "Streamlining workflows and maximizing productivity for our users",
    },
  ]

  const reviews = [
    {
      reviewerName: "Priya Sharma",
      reviewText:
        "Transbhasha has revolutionized our marketing efforts. We can now reach a wider audience with localized content, resulting in a significant increase in engagement and conversions.",
      rating: 5,
      company: "GlobalTech Solutions",
    },
    {
      reviewerName: "Amit Patel",
      reviewText:
        "As an education platform, it's crucial for us to provide content in multiple Indian languages. Transbhasha's AI-powered translation services have been a game-changer, allowing us to cater to students from diverse linguistic backgrounds.",
      rating: 5,
      company: "EduTech India",
    },
    {
      reviewerName: "Meera Nair",
      reviewText:
        "I'm amazed by the accuracy and speed of Transbhasha's speech-to-text technology. It has significantly reduced my content creation time, and the quality is top-notch.",
      rating: 4,
      company: "Content Creator",
    },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection
        headline="About Transbhasha"
        subheadline="We are on a mission to break language barriers and empower multilingual communication through cutting-edge AI technology."
        primaryCta="Join Our Team"
        primaryCtaLink="/careers"
        showImage={false}
      />

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Mission</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Empowering Global Communication</h2>
              <p className="text-muted-foreground md:text-lg">
                At Transbhasha, we believe that language should never be a barrier to communication, creativity, or
                commerce. Our mission is to democratize access to multilingual content creation and consumption through
                innovative AI-powered solutions.
              </p>
              <p className="text-muted-foreground md:text-lg">
                We specialize in developing state-of-the-art Automatic Speech Recognition (ASR), Machine Translation
                (MT), and Text-to-Speech (TTS) technologies specifically designed for Indian languages, helping
                businesses and content creators reach wider audiences.
              </p>
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Vision</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">A Multilingual Digital Future</h2>
              <p className="text-muted-foreground md:text-lg">
                We envision a world where every piece of digital content can be seamlessly understood and enjoyed by
                people regardless of their native language. Through our advanced AI technologies, we're building the
                infrastructure for a truly inclusive digital ecosystem.
              </p>
              <p className="text-muted-foreground md:text-lg">
                Our goal is to become the leading platform for multilingual content transformation, enabling businesses
                to scale globally while preserving the cultural nuances and authenticity of their original content.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Technology</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Built on cutting-edge AI and machine learning technologies
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <Cpu className="h-12 w-12 text-primary mx-auto" />
                <CardTitle>AI-Powered Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our modular AI architecture ensures scalable, reliable, and high-performance language processing
                  across all supported languages.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto" />
                <CardTitle>User-Friendly Portal</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Intuitive interfaces and comprehensive APIs make it easy for developers and content creators to
                  integrate our solutions.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mx-auto" />
                <CardTitle>Real-Time Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Advanced optimization techniques enable real-time processing capabilities for immediate results and
                  seamless user experiences.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Values</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The principles that guide everything we do
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-2">{value.icon}</div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <UserReviews reviews={reviews} />
    </main>
  )
}
