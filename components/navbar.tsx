"use client"

import { useState } from "react"
import { Menu, X, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <Clock className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold tracking-wider text-foreground">
            TIME<span className="text-primary">TRAVEL</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#destinations"
            className="text-sm tracking-widest uppercase text-muted-foreground transition-colors hover:text-primary"
          >
            Destinations
          </a>
          <a
            href="#about"
            className="text-sm tracking-widest uppercase text-muted-foreground transition-colors hover:text-primary"
          >
            Notre Histoire
          </a>
          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 tracking-wider uppercase text-xs px-6"
          >
            Reservez
          </Button>
        </div>

        <button
          className="text-foreground md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-border/30 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            <a
              href="#destinations"
              className="text-sm tracking-widest uppercase text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Destinations
            </a>
            <a
              href="#about"
              className="text-sm tracking-widest uppercase text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Notre Histoire
            </a>
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 tracking-wider uppercase text-xs w-full"
            >
              Reservez
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
