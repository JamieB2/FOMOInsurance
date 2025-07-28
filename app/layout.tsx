import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FOMO Insurance - Cash out without missing out",
  description:
    "Sell your crypto while keeping a share of the upside. Get liquidity now and peace of mind for what comes next.",
  keywords: "DeFi, crypto insurance, FOMO, decentralized finance, crypto options",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
