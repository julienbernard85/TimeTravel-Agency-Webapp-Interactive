# TimeTravel Agency — Webapp Interactive

> Webapp pour une agence de voyages temporels fictive, conçue dans le cadre d'un projet pédagogique M1 IA.  
> Explorez trois époques extraordinaires grâce à une interface immersive et un assistant IA conversationnel.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss)
![License](https://img.shields.io/badge/Licence-Pédagogique-green)

---

## 🗂️ Table des Matières

- [Description](#description)
- [Stack Technique](#️-stack-technique)
- [Features Implémentées](#-features-implémentées)
- [Outils IA Utilisés](#-outils-ia-utilisés)
- [Installation](#-installation)
- [Variables d'Environnement](#-variables-denvironnement)
- [Crédits & Assets](#-crédits--assets)
- [Auteurs](#-auteurs)
- [Licence](#-licence)

---

## Description

**TimeTravel Agency** est une application web interactive simulant une agence de voyages fictive permettant aux clients de réserver des expériences dans différentes époques historiques et futures. Le projet démontre l'intégration de composants UI modernes, d'animations et d'un chatbot IA en temps réel.

---

## 🛠️ Stack Technique

| Couche | Technologie | Version |
|---|---|---|
| Framework | [Next.js](https://nextjs.org/) | 16.1 |
| UI Library | [React](https://react.dev/) | 19 |
| Langage | TypeScript | 5.7 |
| Styling | [Tailwind CSS](https://tailwindcss.com/) | v4 |
| Composants UI | [shadcn/ui](https://ui.shadcn.com/) + Radix UI | — |
| Icônes | [Lucide React](https://lucide.dev/) | 0.564 |
| Thème sombre/clair | [next-themes](https://github.com/pacocoursey/next-themes) | 0.4 |
| IA — SDK | [Vercel AI SDK](https://sdk.vercel.ai/) | 6.0 |
| IA — SDK React | @ai-sdk/react | 3.0 |
| Analytics | Vercel Analytics | 1.6 |
| Hébergement | [Vercel](https://vercel.com/) | — |

---

## ✨ Features Implémentées

- **Hero Section** — Vidéo de fond en lecture automatique avec effet parallax au scroll et particules animées.
- **Galerie de 3 destinations temporelles** — Cartes interactives avec survol animé, badges d'époque, notes et tarifs en Crédits Temporels (TC).
  - 🏛️ Paris (1889)
  - 🦕 Époque Crétacée (-65 Millions av. J.-C.)
  - 🎨 Florence Renaissance (1504 apr. J.-C.)
- **Section de personnalisation** — Sélection des centres d'intérêt (Histoire, Art & Culture, Aventure, Technologie), de l'époque souhaitée et du niveau de confort (Essentiel / Premium / Impérial).
- **Chatbot IA** — Widget flottant avec historique de conversation en streaming temps réel via **Groq**. L'assistant connaît les trois destinations, les tarifs et guide les clients vers le voyage idéal.
- **Questions rapides** — Suggestions de questions prédéfinies pour démarrer la conversation.
- **Design responsive** — Interface adaptée mobile et desktop.
- **Thème sombre** — UI complète en dark mode.
- **Navbar & Footer** — Navigation et pied de page cohérents.

---

## 🤖 Outils IA Utilisés

| Usage | Outil / Modèle | Rôle |
|---|---|---|
| Assistance au développement | GitHub Copilot | Génération et complétion de code |
| Chatbot conversationnel | [Groq](https://groq.com/) (via Vercel AI SDK) | Assistant IA en temps réel |
| Prompt système | Rédigé manuellement | Personnalité, règles et connaissances de l'assistant |

> **Transparence** : Le chatbot est animé par un modèle hébergé sur Groq via le Vercel AI SDK. Toutes les réponses sont générées automatiquement. Le projet est fictif et ne propose aucun vrai service commercial.

---

## 🚀 Installation

### Prérequis

- [Node.js](https://nodejs.org/) ≥ 18
- [pnpm](https://pnpm.io/) (recommandé) ou npm / yarn

### Étapes

```bash
# 1. Cloner le dépôt
git clone https://github.com/<votre-organisation>/TimeTravel-Agency-Webapp-Interactive.git
cd TimeTravel-Agency-Webapp-Interactive

# 2. Installer les dépendances
pnpm install

# 3. Configurer les variables d'environnement (voir section suivante)
cp .env.example .env.local

# 4. Configuration du chatbot
npm install @ai-sdk/groq 

# 4. Lancer le serveur de développement
pnpm dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

### Commandes disponibles

```bash
pnpm dev      # Serveur de développement (hot reload)
pnpm build    # Build de production
pnpm start    # Serveur de production
pnpm lint     # Vérification ESLint
```

---

## 🔑 Variables d'Environnement

Créer un fichier `.env.local` à la racine du projet :

```env
# Clé API Groq (requise pour le chatbot)
GROQ_API_KEY=gsk_...
```

> Sans cette clé, le chatbot ne fonctionnera pas. Obtenir une clé gratuite sur [console.groq.com](https://console.groq.com/).

---

## 🎨 Crédits & Assets

| Ressource | Source |
|---|---|
| Images des destinations | [Imgur](https://imgur.com/) (lien direct dans le code) |
| Vidéo hero (`Videos_les_3_epoques.mp4`) | Produite pour le projet |
| Bibliothèque de composants | [shadcn/ui](https://ui.shadcn.com/) — MIT License |
| Icônes | [Lucide React](https://lucide.dev/) — ISC License |
| Modèle IA | [Groq](https://groq.com/) — [Conditions d'utilisation Groq](https://groq.com/terms-of-service/) |
| Vercel AI SDK | [sdk.vercel.ai](https://sdk.vercel.ai/) — Apache 2.0 |

---

## 👥 Auteurs

Projet réalisé par :

- **Julien Bernard**
- **Pauline Benghouzi**
- **Thomas Abadie**

Dans le cadre du cours **IA — M1**, promotion 2025-2026.

---

## 📄 Licence

Projet pédagogique — **M1 Digital & IA**.  
Usage strictement académique. Aucune exploitation commerciale autorisée.

