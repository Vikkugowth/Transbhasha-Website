import { HeroSection } from "@/components/hero-section"
import { CoreSolutionsSection } from "@/components/core-solutions-section"
import { StatsSection } from "@/components/stats-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { UserReviews } from "@/components/user-reviews"

export default function HomePage() {
  const reviews = [
    {
      reviewerName: "Sarah Johnson",
      reviewText:
        "Transbhasha's API has transformed how we handle multilingual content. The accuracy and speed are incredible, and integration was seamless.",
      rating: 5,
      company: "TechFlow Solutions",
    },
    {
      reviewerName: "Raj Patel",
      reviewText:
        "Translingua helped us localize our video content for 8 Indian languages in just hours instead of weeks. Game-changer for our business!",
      rating: 5,
      company: "Digital Marketing Pro",
    },
    {
      reviewerName: "Dr. Priya Nair",
      reviewText:
        "The quality of translation and voice synthesis is outstanding. Our students can now access educational content in their native languages.",
      rating: 5,
      company: "EduTech Institute",
    },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection
        headline="Empowering Multilingual Communication"
        subheadline="Breaking language barriers in digital content through AI-powered transcription, translation, and voice-over services for multiple Indian languages."
        primaryCta="Get Started"
        secondaryCta="Learn More"
        primaryCtaLink="/contact"
        secondaryCtaLink="/about"
        imageSrc="/images/hero-image.png"
      />
      <CoreSolutionsSection />
      <StatsSection />
      <UserReviews reviews={reviews} />
      <FinalCtaSection />
    </main>
  )
}
