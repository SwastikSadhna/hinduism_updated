// import Image from "next/image"
import { imageDetails } from "../../resources"

export function About(props) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="relative h-[300px] overflow-hidden rounded-lg md:h-[400px]">
            <img
              src={props.image}
              alt="Temple Architecture"
              width={600}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-3xl font-bold">About {props.name}</h2>
            <p className="text-muted-foreground">
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

