import { Clock } from "lucide-react"

export function Footer() {
  return (
    <footer id="about" className="border-t border-border/30 bg-card/50 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-lg font-bold tracking-wider text-foreground">
                TIME<span className="text-primary">TRAVEL</span>
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              {
                "Depuis 2089, TimeTravel Agency repousse les frontières du possible. Nous vous offrons l'expérience ultime : voyager dans le temps avec élégance et sécurité."
              }
            </p>
          </div>
          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm tracking-[0.2em] uppercase text-primary">
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="text-sm text-muted-foreground">
                info@timetravel.agency
              </li>
              <li className="text-sm text-muted-foreground">
                +33 1 00 00 2089
              </li>
              <li className="text-sm text-muted-foreground">
                42 Rue du Temps, Neo-Paris
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/30 pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            {"2089 TimeTravel Agency. Tous droits reserves a travers le temps."}
          </p>
          <p className="text-xs text-muted-foreground">
            {"Licence de voyage temporel N 42-T-2089"}
          </p>
        </div>
      </div>
    </footer>
  )
}
