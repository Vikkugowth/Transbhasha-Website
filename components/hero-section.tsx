import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

interface HeroSectionProps {
  headline: string
  subheadline: string
  primaryCta: string
  secondaryCta?: string
  primaryCtaLink: string
  secondaryCtaLink?: string
  showImage?: boolean
  imageSrc?: string
}

export function HeroSection({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  primaryCtaLink,
  secondaryCtaLink,
  showImage = true,
  imageSrc = "/images/hero-image.png",
}: HeroSectionProps) {
  return (
    <section className="w-full py-8 md:py-16 lg:py-20 xl:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none animate-fade-in-up">
                {headline}
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl animate-fade-in-up animate-delay-100">
                {subheadline}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row animate-fade-in-up animate-delay-200">
              <Button asChild size="lg">
                <Link href={primaryCtaLink}>{primaryCta}</Link>
              </Button>
              {secondaryCta && secondaryCtaLink && (
                <Button variant="outline" size="lg" asChild>
                  <Link href={secondaryCtaLink}>{secondaryCta}</Link>
                </Button>
              )}
            </div>
          </div>
          {showImage && (
            <div className="flex items-center justify-center">
              <Image
                src={imageSrc || "/placeholder.svg"}
                width={600}
                height={400}
                alt="AI Language Technology Visualization"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover animate-fade-in-up animate-delay-300"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
