import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import SmallTitle from "./small-title"

export default function HeroSection() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-4">
      <div className="container max-w-6x1 mx-auto px-4 md:px-6 flex flex-col items-center text-center space-y-8">
        {/* Welcome Badge */}
        <SmallTitle title="Welcome To School Pro" />

        {/* Main Heading */}
        <h1 className="mt-8 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Your Complete Schoool
          <br />
          Management Solution
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
            From admissions to academics, simplify every aspect of school administration with our comprehensive and user-friendly platform.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="rounded-full h-12 px-6 text-base">
            Get Started Free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="h-12 px-6 text-base">
            See All Features
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

