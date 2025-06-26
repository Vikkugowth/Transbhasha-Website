"use client"

import { useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "AI & Technology", "Engineering", "Product Updates", "Company News", "Research"]

  const blogPosts = [
    {
      title: "The Future of Multilingual AI: Breaking Language Barriers in 2024",
      excerpt:
        "Explore how AI-powered language technology is revolutionizing global communication and what the future holds for multilingual content creation.",
      author: "Dr. Rajesh Kumar",
      date: "December 15, 2023",
      category: "AI & Technology",
      readTime: "8 min read",
      image: "/placeholder.svg?height=200&width=400",
      featured: true,
    },
    {
      title: "Building Scalable APIs for Language Processing",
      excerpt:
        "A deep dive into the architectural decisions and engineering challenges we faced while building our API platform.",
      author: "Priya Sharma",
      date: "December 10, 2023",
      category: "Engineering",
      readTime: "12 min read",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      title: "Translingua 2.0: Enhanced Video Localization Features",
      excerpt:
        "Announcing new features in Translingua including improved voice synthesis, better subtitle timing, and expanded language support.",
      author: "Anita Gupta",
      date: "December 5, 2023",
      category: "Product Updates",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      title: "Understanding Neural Machine Translation for Indian Languages",
      excerpt:
        "How we're tackling the unique challenges of translating between Indian languages using advanced neural networks.",
      author: "Dr. Meera Reddy",
      date: "November 28, 2023",
      category: "Research",
      readTime: "15 min read",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      title: "Transbhasha Raises Series A: Our Journey and What's Next",
      excerpt:
        "Reflecting on our journey so far and sharing our vision for the future as we announce our Series A funding round.",
      author: "Dr. Rajesh Kumar",
      date: "November 20, 2023",
      category: "Company News",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      title: "Optimizing Speech Recognition for Noisy Environments",
      excerpt: "Technical insights into how we improved our ASR accuracy in challenging acoustic conditions.",
      author: "Arjun Patel",
      date: "November 15, 2023",
      category: "Engineering",
      readTime: "10 min read",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      title: "The Importance of Cultural Context in AI Translation",
      excerpt: "Why context matters in translation and how we're building cultural awareness into our AI models.",
      author: "Dr. Meera Reddy",
      date: "November 8, 2023",
      category: "AI & Technology",
      readTime: "7 min read",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      title: "User Experience Design for Developer Tools",
      excerpt:
        "How we approach UX design for technical products and the lessons we've learned building developer-friendly interfaces.",
      author: "Kavya Nair",
      date: "October 30, 2023",
      category: "Product Updates",
      readTime: "9 min read",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection
        headline="Transbhasha Blog"
        subheadline="Insights, updates, and deep dives into AI-powered language technology, engineering challenges, and our journey building the future of multilingual communication."
        primaryCta="Subscribe to Newsletter"
        primaryCtaLink="#newsletter"
        showImage={false}
      />

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          {/* Search and Filter */}
          <div className="flex flex-col space-y-4 mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Article */}
          {featuredPost && selectedCategory === "All" && !searchTerm && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <Image
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      width={400}
                      height={200}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Badge variant="default">Featured</Badge>
                      <Badge variant="secondary">{featuredPost.category}</Badge>
                    </div>
                    <CardTitle className="text-2xl mb-3">{featuredPost.title}</CardTitle>
                    <CardDescription className="text-base mb-4">{featuredPost.excerpt}</CardDescription>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Button asChild>
                      <Link href="/blog/featured-post" className="inline-flex items-center">
                        Read Article <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section id="newsletter" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Stay Updated</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Subscribe to our newsletter to get the latest insights on AI, language technology, and product updates
              delivered to your inbox.
            </p>
            <div className="w-full max-w-sm space-y-2">
              <div className="flex space-x-2">
                <Input placeholder="Enter your email" type="email" />
                <Button type="submit">Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
