"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, MapPin, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const destinations = [
  {
    id: 1,
    title: "Exposition Universelle & Belle époque",
    era: "1889",
    location: "Paris, France",
    description:
      "Flânez au cœur de l’Exposition Universelle de 1889 : pavillons futuristes, machines géantes, démonstrations électriques… et la Tour Eiffel toute neuve qui domine Paris. Une escapade Belle Époque entre élégance, innovation et nuits parisiennes.",
    image: "https://i.imgur.com/zfwpckZ.jpeg",
  },
  {
    id: 2,
    title: "Epoque crétacée",
    era: "-65 millions d'années",
    location: "Deniers jours des dinosaures",
    description:
      "Traversez une Terre sauvage, chaude et vibrante où les géants règnent encore. Entre jungles, plaines et littoraux, observez la vie foisonnante du Crétacé… à quelques instants d’un basculement qui changera l’histoire du monde.",
    image: "https://i.imgur.com/xd0BWkl.png",
  },
  {
    id: 3,
    title: "Renaissance",
    era: "1504",
    location: "Florance, Italie",
    description:
      "Entrez dans la Florence de 1504 : ateliers en ébullition, débats d’art et de science, commandes grandioses et génie à chaque coin de rue. Une immersion dans l’âge d’or où sculpture, peinture et invention redessinent le monde.",
    image: "https://i.imgur.com/Pw0Jy0l.png",
  },
]

export function DestinationCards() {
  const [flippedId, setFlippedId] = useState<number | null>(null)

  return (
    <section id="destinations" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm tracking-[0.4em] uppercase text-primary">
            Nos Destinations
          </p>
          <h2 className="mb-6 font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            Choisissez Votre Époque
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {
              "Trois destinations d'exception, soigneusement sélectionnées pour vous offrir une expérience hors du temps."
            }
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {destinations.map((dest) => (
              <article
                  key={dest.id}
                  className="relative h-[420px] perspective cursor-pointer"
                  onClick={() => setFlippedId(flippedId === dest.id ? null : dest.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault()
                      setFlippedId(flippedId === dest.id ? null : dest.id)
                    }
                  }}
              >
                <div
                    className={`relative w-full h-full transition-transform duration-700 transform-style preserve-3d ${
                        flippedId === dest.id ? "rotate-y-180" : ""
                    }`}
                >
                  {/* FRONT */}
                  <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden border border-border/50 bg-card flex flex-col">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                          src={dest.image}
                          alt={`Destination: ${dest.title}`}
                          fill
                          className="group relative h-[420px] perspective cursor-pointer"
                          sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

                      <div className="absolute top-4 left-4 rounded-full border border-primary/30 bg-background/80 backdrop-blur-md px-4 py-1.5">
          <span className="text-xs tracking-widest uppercase text-primary flex items-center gap-1.5">
            <Calendar className="h-3 w-3" />
            {dest.era}
          </span>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-3 flex items-center gap-1.5 text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" />
                        <span className="text-xs tracking-wider">{dest.location}</span>
                      </div>

                      <h3 className="text-2xl font-bold tracking-tight text-foreground">
                        {dest.title}
                      </h3>

                      <p className="mt-auto text-xs tracking-wider uppercase text-muted-foreground">
                        Cliquez pour lire la description
                      </p>
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-xl border border-border/50 bg-card p-6 flex flex-col">
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{dest.title}</h3>
                        <p className="mt-1 text-xs tracking-wider text-muted-foreground">
                          {dest.location} • {dest.era}
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground rotate-180" />
                    </div>

                    <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                      {dest.description}
                    </p>

                    <p className="mt-6 text-xs tracking-wider uppercase text-muted-foreground">
                      Cliquez pour revenir
                    </p>
                  </div>
                </div>
              </article>
          ))}
        </div>
      </div>
    </section>
  )
}
