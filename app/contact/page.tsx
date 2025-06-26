import { HeroSection } from "@/components/hero-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, FileText, Code, HelpCircle } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      value: "contact@transbhasha.com",
      description: "Send us an email anytime",
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Phone",
      value: "+91 12345 67890",
      description: "Mon-Fri from 9am to 6pm IST",
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Office",
      value: "Bangalore, India",
      description: "Visit our headquarters",
    },
  ]

  const quickActions = [
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "Request Demo",
      description: "See our platform in action",
      link: "/contact",
    },
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "API Documentation",
      description: "Technical documentation and guides",
      link: "/contact",
    },
  ]

  const faqs = [
    {
      question: "How many languages do you support?",
      answer:
        "We currently support 22+ Indian languages including Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, and many more.",
    },
    {
      question: "What video formats are supported?",
      answer:
        "We support all major video formats including MP4, AVI, MOV, WMV, and more. Our platform automatically handles format conversion.",
    },
    {
      question: "How long does processing take?",
      answer:
        "Processing time depends on video length and complexity, but typically ranges from a few minutes to an hour for most content.",
    },
    {
      question: "Do you offer custom pricing for enterprises?",
      answer:
        "Yes, we offer flexible pricing plans for enterprises with custom requirements. Contact our sales team for a personalized quote.",
    },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection
        headline="Get in Touch"
        subheadline="Ready to break language barriers? Contact us to learn more about our AI-powered language technology solutions."
        primaryCta="Start Conversation"
        primaryCtaLink="#contact-form"
        showImage={false}
      />

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0">{info.icon}</div>
                      <div>
                        <h3 className="font-semibold">{info.title}</h3>
                        <p className="text-foreground">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">Quick Actions</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {quickActions.map((action, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          {action.icon}
                          <CardTitle className="text-lg">{action.title}</CardTitle>
                        </div>
                        <CardDescription>{action.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button asChild className="w-full">
                          <Link href={action.link}>Learn More</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <div id="contact-form">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your company name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inquiry-type">Inquiry Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="demo">Request Demo</SelectItem>
                        <SelectItem value="api">API Integration</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Brief subject line" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your requirements..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full" size="lg">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <HelpCircle className="h-12 w-12 text-primary mx-auto" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about our services
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl space-y-4 py-12">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
