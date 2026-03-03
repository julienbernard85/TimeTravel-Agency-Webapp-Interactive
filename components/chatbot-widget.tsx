"use client"

import { useState, useRef, useEffect } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { MessageCircle, X, Send, Clock, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

const transport = new DefaultChatTransport({ api: "/api/chat" })

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const { messages, sendMessage, status } = useChat({ transport })

  const isLoading = status === "streaming" || status === "submitted"

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return
    sendMessage({ text: input })
    setInput("")
  }

  const quickQuestions = [
    "Quelle destination choisir parmi celles mises en avant ?",
    "Parlez-moi de Paris",
    "Quels sont les tarifs ?",
  ]

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-primary/30 ${
          isOpen ? "rotate-0" : ""
        }`}
        aria-label={isOpen ? "Fermer le chat" : "Ouvrir le chat"}
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <MessageCircle className="h-5 w-5" />
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[500px] w-[380px] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-border/50 bg-card shadow-2xl shadow-background/80 animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-border/30 bg-secondary/50 px-5 py-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/20">
              <Clock className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-wider text-foreground">
                Chronos
              </h3>
              <p className="text-xs text-muted-foreground">
                Votre guide temporel
              </p>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-xs text-muted-foreground">En ligne</span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <p className="text-center text-sm text-muted-foreground leading-relaxed max-w-[260px]">
                  {
                    "Bonjour ! Je suis Chronos, votre guide temporel. Comment puis-je vous aider ?"
                  }
                </p>
                <div className="flex flex-col gap-2 w-full">
                  {quickQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => {
                        sendMessage({ text: q })
                      }}
                      className="rounded-lg border border-border/50 bg-secondary/50 px-3 py-2 text-left text-xs text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-3 flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-secondary text-secondary-foreground rounded-bl-md"
                  }`}
                >
                  {message.parts.map((part, index) => {
                    if (part.type === "text") {
                      return (
                        <div key={index} className="prose prose-sm text-foreground">
                          <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {part.text}
                          </ReactMarkdown>
                        </div>
                      )
                    }
                    return null
                  })}
                </div>
              </div>
            ))}

            {isLoading &&
              messages[messages.length - 1]?.role !== "assistant" && (
                <div className="mb-3 flex justify-start">
                  <div className="flex items-center gap-2 rounded-2xl rounded-bl-md bg-secondary px-4 py-3">
                    <Loader2 className="h-3.5 w-3.5 animate-spin text-primary" />
                    <span className="text-xs text-muted-foreground">
                      Chronos réfléchit...
                    </span>
                  </div>
                </div>
              )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-border/30 bg-secondary/30 px-4 py-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Posez votre question..."
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="icon"
              disabled={!input.trim() || isLoading}
              className="h-8 w-8 shrink-0 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-30"
            >
              <Send className="h-3.5 w-3.5" />
              <span className="sr-only">Envoyer</span>
            </Button>
          </form>
        </div>
      )}
    </>
  )
}