import type React from "react"
import type { Metadata } from "next"
import { Geist, Cinzel, Roboto, Geist_Mono, Playfair_Display, Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"


const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const _outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" })

export const metadata: Metadata = {
  title: "Dada Kingsley Oluwasanmi - Full Stack Developer & UI/UX Designer",
  description:
    "Full Stack Developer & UI/UX Designer crafting modern digital experiences with TypeScript, React, and Next.js",
  generator: "v0.app",
  openGraph: {
    title: "Dada Kingsley Oluwasanmi - Developer Portfolio",
    description: "Full Stack Developer & UI/UX Designer crafting modern digital experiences",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-outfit ${_playfairDisplay.variable} ${_outfit.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
