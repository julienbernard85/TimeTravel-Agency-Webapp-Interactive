"use client"

import { useState } from "react"
import { Compass, Palette, Shield, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const interests = [
  { id: "history", label: "Histoire", icon: Compass },
  { id: "art", label: "Art & Culture", icon: Palette },
  { id: "adventure", label: "Aventure", icon: Shield },
  { id: "technology", label: "Technologie", icon: Sparkles },
]

const eras = [
  { id: "ancient", label: "Antiquite", range: "3000 av. J.-C. - 500 apr. J.-C." },
  { id: "medieval", label: "Moyen Age", range: "500 - 1500" },
  { id: "renaissance", label: "Renaissance", range: "1400 - 1600" },
  { id: "modern", label: "Ere Moderne", range: "1600 - 2000" },
  { id: "future", label: "Futur", range: "2050 - 2200" },
]

const comforts = [
  { id: "essential", label: "Essentiel", description: "L'experience authentique" },
  { id: "premium", label: "Premium", description: "Confort et immersion" },
  { id: "imperial", label: "Imperial", description: "Le luxe absolu" },
]

export function PreferencesSection() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [selectedEra, setSelectedEra] = useState<string | null>(null)
  const [selectedComfort, setSelectedComfort] = useState<string>("premium")

  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  return (
    <section id="preferences" className="relative py-32 px-6">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="relative mx-auto max-w-4xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm tracking-[0.4em] uppercase text-primary">
            Personnalisation
          </p>
          <h2 className="mb-6 font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Votre Voyage Sur Mesure
          </h2>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground">
            {"Dites-nous ce qui vous passionne et nous creerons l'experience temporelle parfaite pour vous."}
          </p>
        </div>

        {/* Step 1: Interests */}
        <div className="mb-16">
          <h3 className="mb-6 text-sm tracking-[0.3em] uppercase text-primary">
            01 / Vos Centres d'Interet
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {interests.map((interest) => {
              const Icon = interest.icon
              const isSelected = selectedInterests.includes(interest.id)
              return (
                <button
                  key={interest.id}
                  onClick={() => toggleInterest(interest.id)}
                  className={`flex flex-col items-center gap-3 rounded-xl border p-6 transition-all duration-300 ${
                    isSelected
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border/50 bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  }`}
                >
                  <Icon className={`h-6 w-6 ${isSelected ? "text-primary" : ""}`} />
                  <span className="text-sm tracking-wider">{interest.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Step 2: Era */}
        <div className="mb-16">
          <h3 className="mb-6 text-sm tracking-[0.3em] uppercase text-primary">
            02 / Epoque Preferee
          </h3>
          <div className="flex flex-col gap-3">
            {eras.map((era) => (
              <button
                key={era.id}
                onClick={() => setSelectedEra(era.id)}
                className={`flex items-center justify-between rounded-xl border px-6 py-4 transition-all duration-300 ${
                  selectedEra === era.id
                    ? "border-primary bg-primary/10"
                    : "border-border/50 bg-card hover:border-primary/30"
                }`}
              >
                <span className="font-medium tracking-wide text-foreground">
                  {era.label}
                </span>
                <span className="text-sm text-muted-foreground">{era.range}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Comfort */}
        <div className="mb-16">
          <h3 className="mb-6 text-sm tracking-[0.3em] uppercase text-primary">
            03 / Niveau de Confort
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            {comforts.map((comfort) => (
              <button
                key={comfort.id}
                onClick={() => setSelectedComfort(comfort.id)}
                className={`flex flex-col items-center gap-2 rounded-xl border p-6 transition-all duration-300 ${
                  selectedComfort === comfort.id
                    ? "border-primary bg-primary/10"
                    : "border-border/50 bg-card hover:border-primary/30"
                }`}
              >
                <span className="text-lg font-bold tracking-wide text-foreground">
                  {comfort.label}
                </span>
                <span className="text-sm text-muted-foreground">
                  {comfort.description}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-sm tracking-widest uppercase"
          >
            Generer Mon Voyage
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            {"Notre IA concevra un itineraire unique base sur vos preferences"}
          </p>
        </div>
      </div>
    </section>
  )
}
