// import Image from "next/image"
import { imageDetails } from "../../resources"

export function About() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="relative h-[300px] overflow-hidden rounded-lg md:h-[400px]">
            <img
              src={imageDetails.Rathyatra.src}
              alt="Temple Architecture"
              width={600}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-3xl font-bold">About Dr. Harper Montgomery</h2>
            <p className="text-muted-foreground">
              Dr. Harper Montgomery is a compassionate and experienced healthcare provider dedicated to delivering
              exceptional healthcare for patients of all ages. With a focus on holistic well-being and preventive care,
              she provides personalized attention and evidence-based treatments to support your optimal health.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

