import { groq } from "@ai-sdk/groq"
import {
  consumeStream,
  convertToModelMessages,
  streamText,
  UIMessage,
} from "ai"

export const maxDuration = 30

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const result = streamText({
    model: groq("llama-3.3-70b-versatile"),
    system: `
          Tu es Chronos, l'assistant de TimeTravel Agency.
          **Règles :**
          - Réponds en paragraphes courts (2-3 phrases max).
          - Utilise des listes à puces pour les énumérations.
          - Limite-toi à 3 paragraphes max.
          - Saute des lignes pour éviter une lecture difficile.
          - Exemple :
          **Question :** "Comment réserver ?"
          **Réponse :**
          Voici les étapes :
          1. Choisissez une destination.
          2. Sélectionnez une date.
          3. Validez le paiement.
        `,
    messages: await convertToModelMessages(messages),
    abortSignal: req.signal,
  })
  console.log(process.env.GROQ_API_KEY)
  return result.toUIMessageStreamResponse({
    originalMessages: messages,
    consumeSseStream: consumeStream,
  })
}