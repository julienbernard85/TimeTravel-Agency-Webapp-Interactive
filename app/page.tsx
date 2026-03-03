import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { DestinationCards } from "@/components/destination-cards"
import { PreferencesSection } from "@/components/preferences-section"
import { Footer } from "@/components/footer"
import { ChatbotWidget } from "@/components/chatbot-widget"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <DestinationCards />
      <PreferencesSection />
      <Footer />
      <ChatbotWidget />
    </main>
  )
}
