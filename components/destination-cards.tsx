"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, MapPin, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const destinations = [
  {
    id: 1,
    title: "Paris",
    era: "1900",
    location: "France",
    description:
      "Assistez a la construction des pyramides et decouvrez les secrets des pharaons. Une immersion totale dans la civilisation la plus mysterieuse de l'histoire.",
    image: "https://i.imgur.com/zfwpckZ.jpeg",
    rating: 4.9,
    duration: "7 jours",
    price: "12 500",
  },
  {
    id: 2,
    title: "Epoque crétacée",
    era: "2 Millions av. J.-C.",
    location: "Florence, Italie",
    description:
      "Rencontrez Leonard de Vinci dans son atelier, admirez la naissance de chefs-d'oeuvre et vivez l'effervescence artistique de Florence.",
    image: "https://i.imgur.com/xd0BWkl.png",
    rating: 4.8,
    duration: "5 jours",
    price: "9 800",
  },
  {
    id: 3,
    title: "Renaissance",
    era: "1700 apr. J.-C.",
    location: "Italie",
    description:
      "Decouvrez la cite du futur avec ses tours vertigineuses, ses transports quantiques et une societe transformee par la technologie.",
    image: "https://i.imgur.com/Pw0Jy0l.png",
    rating: 5.0,
    duration: "3 jours",
    price: "18 200",
  },
]

export function DestinationCards() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="destinations" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm tracking-[0.4em] uppercase text-primary">
            Nos Destinations
          </p>
          <h2 className="mb-6 font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            Choisissez Votre Epoque
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {
              "Trois destinations d'exception, soigneusement selectionnees pour vous offrir une experience hors du temps."
            }
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {destinations.map((dest) => (
            <article
              key={dest.id}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(200,170,110,0.1)]"
              onMouseEnter={() => setHoveredId(dest.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={dest.image}
                  alt={`Destination: ${dest.title}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

                {/* Era badge */}
                <div className="absolute top-4 left-4 rounded-full border border-primary/30 bg-background/80 backdrop-blur-md px-4 py-1.5">
                  <span className="text-xs tracking-widest uppercase text-primary flex items-center gap-1.5">
                    <Calendar className="h-3 w-3" />
                    {dest.era}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-background/80 backdrop-blur-md px-3 py-1.5">
                  <Star className="h-3 w-3 fill-primary text-primary" />
                  <span className="text-xs font-medium text-foreground">
                    {dest.rating}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-1.5 text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  <span className="text-xs tracking-wider">{dest.location}</span>
                </div>

                <h3 className="mb-3 text-2xl font-bold tracking-tight text-foreground">
                  {dest.title}
                </h3>

                <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {dest.description}
                </p>

                <div className="flex items-center justify-between border-t border-border/50 pt-4">
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {dest.duration}
                    </p>
                    <p className="text-lg font-bold text-foreground">
                      {dest.price}
                      <span className="text-xs font-normal text-muted-foreground">
                        {" "}
                        TC
                      </span>
                    </p>
                  </div>
                  <Button
                    size="sm"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-xs tracking-wider uppercase"
                  >
                    Explorer
                    <ArrowRight
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${
                        hoveredId === dest.id ? "translate-x-1" : ""
                      }`}
                    />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
