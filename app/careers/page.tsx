import { HeroSection } from "@/components/hero-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Zap, Shield, MapPin, Briefcase } from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
  const benefits = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Health & Wellness",
      description:
        "Comprehensive health insurance, mental health support, and wellness programs for you and your family.",
      features: ["Medical Insurance", "Mental Health Support", "Fitness Allowance", "Annual Health Checkups"],
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Collaborative Culture",
      description: "Work with brilliant minds in an inclusive environment that values diversity and innovation.",
      features: ["Diverse Team", "Open Communication", "Knowledge Sharing", "Team Building Events"],
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Growth & Learning",
      description: "Continuous learning opportunities, conference attendance, and career development programs.",
      features: ["Learning Budget", "Conference Tickets", "Skill Development", "Career Mentoring"],
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Work-Life Balance",
      description: "Flexible working hours, remote work options, and generous time-off policies.",
      features: ["Flexible Hours", "Remote Work", "Unlimited PTO", "Sabbatical Options"],
    },
  ]

  const openPositions = [
    {
      title: "Senior Machine Learning Engineer",
      department: "Engineering",
      location: "Bangalore, India",
      type: "Full-time",
      description:
        "Lead the development of our next-generation language models and contribute to cutting-edge research in multilingual AI.",
      requirements: [
        "5+ years of ML engineering experience",
        "Expertise in PyTorch/TensorFlow",
        "Experience with NLP and speech processing",
        "Strong programming skills in Python",
      ],
    },
    {
      title: "Product Manager - API Platform",
      department: "Product",
      location: "Bangalore, India",
      type: "Full-time",
      description:
        "Drive the product strategy and roadmap for our API platform, working closely with engineering and customer success teams.",
      requirements: [
        "3+ years of product management experience",
        "Experience with developer tools/APIs",
        "Strong analytical and communication skills",
        "Technical background preferred",
      ],
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description:
        "Build beautiful, responsive user interfaces for our web applications using modern frontend technologies.",
      requirements: [
        "3+ years of frontend development experience",
        "Proficiency in React, TypeScript, and modern CSS",
        "Experience with responsive design",
        "Knowledge of web performance optimization",
      ],
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Bangalore, India",
      type: "Full-time",
      description:
        "Build and maintain our cloud infrastructure, ensuring scalability, reliability, and security of our services.",
      requirements: [
        "4+ years of DevOps/Infrastructure experience",
        "Experience with AWS/GCP and Kubernetes",
        "Knowledge of CI/CD pipelines",
        "Strong scripting skills",
      ],
    },
    {
      title: "Research Scientist - NLP",
      department: "Research",
      location: "Bangalore, India",
      type: "Full-time",
      description:
        "Conduct cutting-edge research in natural language processing with focus on Indian languages and publish in top-tier conferences.",
      requirements: [
        "PhD in Computer Science or related field",
        "Strong publication record in NLP/ML",
        "Experience with Indian language processing",
        "Proficiency in research methodologies",
      ],
    },
    {
      title: "Sales Development Representative",
      department: "Sales",
      location: "Mumbai, India",
      type: "Full-time",
      description:
        "Generate and qualify leads for our enterprise sales team, building relationships with potential customers.",
      requirements: [
        "2+ years of sales/business development experience",
        "Excellent communication skills",
        "Experience with B2B SaaS sales",
        "Self-motivated and target-driven",
      ],
    },
  ]

  const companyValues = [
    "Innovation-driven culture",
    "Commitment to diversity and inclusion",
    "Focus on customer success",
    "Continuous learning and growth",
    "Work-life balance",
    "Social impact through technology",
  ]

  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection
        headline="Join Our Mission"
        subheadline="Be part of a team that's revolutionizing multilingual communication through AI. Help us break language barriers and create a more connected world."
        primaryCta="View Open Positions"
        secondaryCta="Learn About Culture"
        primaryCtaLink="#positions"
        secondaryCtaLink="#culture"
        showImage={false}
      />

      {/* Why Work at Transbhasha */}
      <section id="culture" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Work at Transbhasha?</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Join a company that values innovation, diversity, and making a positive impact on the world
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {companyValues.map((value, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 rounded-lg bg-background border animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Benefits & Perks</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              We believe in taking care of our team members with comprehensive benefits and a supportive work
              environment
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mx-auto mb-4">{benefit.icon}</div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {benefit.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Open Positions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Explore exciting opportunities to grow your career with us
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {openPositions.map((position, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl">{position.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{position.department}</Badge>
                        <Badge variant="outline">{position.type}</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Briefcase className="h-4 w-4" />
                      <span>{position.type}</span>
                    </div>
                  </div>
                  <CardDescription className="text-base">{position.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex}>• {req}</li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="/contact">Apply Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Join Us?</h2>
            <p className="max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed">
              Don't see a position that fits? We're always looking for talented individuals to join our team.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Send Your Resume</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/contact">Contact HR</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
