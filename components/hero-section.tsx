"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <video
          src="/videos/Videos_les_3_epoques.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
        </video>
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
      </div>

      {/* Animated particles overlay */}
      <div className="absolute inset-0 z-[1]">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <p className="mb-6 text-sm tracking-[0.4em] uppercase text-primary animate-in fade-in slide-in-from-bottom-4 duration-700">
          Agence de Voyages Temporels
        </p>
        <h1 className="mb-8 font-serif text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <span className="text-balance">
            Traversez les
            <br />
            <span className="text-gold-gradient">Epoques</span>
          </span>
        </h1>
        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          {
            "Explorez l'Egypte antique, vivez la Renaissance italienne ou decouvrez les merveilles du futur. Chaque epoque devient votre destination."
          }
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-sm tracking-widest uppercase"
            asChild
          >
            <a href="#destinations">Explorer les Destinations</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border/50 text-foreground hover:bg-secondary hover:text-secondary-foreground px-10 py-6 text-sm tracking-widest uppercase"
            asChild
          >
            <a href="#preferences">Personnaliser</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <a href="#destinations" aria-label="Defiler vers le bas">
          <ArrowDown className="h-6 w-6 text-primary/60" />
        </a>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.4; }
          50% { transform: translateY(-20px) scale(1.5); opacity: 0.8; }
        }
      `}</style>
    </section>
  )
}
