import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-4">
      <div className="container max-w-6x1 mx-auto px-4 md:px-6 flex flex-col items-center text-center space-y-8">
        {/* Welcome Badge */}
        <Badge variant="secondary" className="inline-flex items-center gap-2 px-4 py-1.5">
          <span className="text-red-500">👋</span>
          <span>Welcome to Lucis</span>
        </Badge>

        {/* Main Heading */}
        <h1 className="mt-8 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Simplify Your Video
          <br />
          Production With Lucis
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
          Lucis empowers you to create stunning videos with precision and ease, all within a sleek and intuitive
          interface.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="h-12 px-6 text-base">
            Try for free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="h-12 px-6 text-base">
            See features
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

