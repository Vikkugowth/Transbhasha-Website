"use client"

import { useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter, Github, Mail } from "lucide-react"
import Link from "next/link"

export default function TeamPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("All")

  const departments = ["All", "Leadership", "Engineering", "Research", "Product", "Advisory"]

  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      role: "CEO & Co-Founder",
      department: "Leadership",
      bio: "Visionary leader with 15+ years in AI and language technology. Former researcher at IIT and Microsoft Research.",
      expertise: ["AI Strategy", "Business Development", "Product Vision"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "rajesh@transbhasha.com",
      },
      initials: "RK",
    },
    {
      name: "Priya Sharma",
      role: "CTO & Co-Founder",
      department: "Leadership",
      bio: "Technical architect with deep expertise in machine learning and distributed systems. PhD in Computer Science from Stanford.",
      expertise: ["Machine Learning", "System Architecture", "Team Leadership"],
      social: {
        linkedin: "#",
        github: "#",
        email: "priya@transbhasha.com",
      },
      initials: "PS",
    },
    {
      name: "Arjun Patel",
      role: "Lead ML Engineer",
      department: "Engineering",
      bio: "Specialist in neural machine translation and speech recognition. Previously at Google AI and Amazon Alexa.",
      expertise: ["Neural Networks", "NLP", "Speech Processing"],
      social: {
        linkedin: "#",
        github: "#",
        email: "arjun@transbhasha.com",
      },
      initials: "AP",
    },
    {
      name: "Dr. Meera Reddy",
      role: "Head of Research",
      department: "Research",
      bio: "Leading researcher in computational linguistics with 50+ publications. Expert in Indian language processing.",
      expertise: ["Computational Linguistics", "Research", "Indian Languages"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "meera@transbhasha.com",
      },
      initials: "MR",
    },
    {
      name: "Vikram Singh",
      role: "Senior Software Engineer",
      department: "Engineering",
      bio: "Full-stack developer with expertise in scalable web applications and API development.",
      expertise: ["Full Stack Development", "API Design", "Cloud Architecture"],
      social: {
        linkedin: "#",
        github: "#",
        email: "vikram@transbhasha.com",
      },
      initials: "VS",
    },
    {
      name: "Anita Gupta",
      role: "Product Manager",
      department: "Product",
      bio: "Product strategist with experience in B2B SaaS and developer tools. MBA from IIM Bangalore.",
      expertise: ["Product Strategy", "User Experience", "Market Research"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "anita@transbhasha.com",
      },
      initials: "AG",
    },
    {
      name: "Prof. Suresh Iyer",
      role: "Technical Advisor",
      department: "Advisory",
      bio: "Professor Emeritus at IISc Bangalore. Pioneer in Indian language computing and natural language processing.",
      expertise: ["Academic Research", "Language Technology", "Strategic Guidance"],
      social: {
        linkedin: "#",
        email: "suresh@transbhasha.com",
      },
      initials: "SI",
    },
    {
      name: "Kavya Nair",
      role: "UX Designer",
      department: "Product",
      bio: "Creative designer focused on making complex AI tools accessible and intuitive for users.",
      expertise: ["UI/UX Design", "User Research", "Design Systems"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "kavya@transbhasha.com",
      },
      initials: "KN",
    },
  ]

  const filteredMembers =
    selectedDepartment === "All"
      ? teamMembers
      : teamMembers.filter((member) => member.department === selectedDepartment)

  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection
        headline="Meet Our Team"
        subheadline="The brilliant minds behind Transbhasha's innovative AI-powered language technology solutions."
        primaryCta="Join Our Team"
        primaryCtaLink="/careers"
        showImage={false}
      />

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          {/* Department Filter */}
          <div className="flex flex-col items-center space-y-4 mb-12">
            <h2 className="text-2xl font-bold">Filter by Department</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {departments.map((dept) => (
                <Button
                  key={dept}
                  variant={selectedDepartment === dept ? "default" : "outline"}
                  onClick={() => setSelectedDepartment(dept)}
                  className="transition-all duration-200"
                >
                  {dept}
                </Button>
              ))}
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredMembers.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  {/* Avatar with Initials */}
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                    {member.initials}
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">{member.role}</CardDescription>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {member.department}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>

                  {/* Expertise Badges */}
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3 pt-2">
                    {member.social.linkedin && (
                      <Link
                        href={member.social.linkedin}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                      </Link>
                    )}
                    {member.social.twitter && (
                      <Link
                        href={member.social.twitter}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Twitter className="h-4 w-4" />
                      </Link>
                    )}
                    {member.social.github && (
                      <Link
                        href={member.social.github}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </Link>
                    )}
                    {member.social.email && (
                      <Link
                        href={`mailto:${member.social.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
