/* eslint-disable react/no-unescaped-entities */
import type React from "react"
import type { Metadata } from "next"
import {  Playfair_Display, Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"



const _playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const _outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" })

export const metadata: Metadata = {
  title: "Dada Kingsley Oluwasanmi - Full Stack Developer & UI/UX Designer",
  description:
    "Full Stack Developer & UI/UX Designer crafting modern digital experiences with TypeScript, React, and Next.js",
  openGraph: {
    title: "Dada Kingsley Oluwasanmi - Developer Portfolio",
    description: "Full Stack Developer & UI/UX Designer crafting modern digital experiences",
    type: "website",
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
