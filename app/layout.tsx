"use client"

import { useRef } from "react"
import "./globals.css"
import { Inter, Space_Grotesk } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
const space = Space_Grotesk({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const audioRef = useRef<HTMLAudioElement | null>(null)

  return (
    <html lang="en">
      <body className={inter.className}>

        {/* Global Audio Player */}
        <audio ref={audioRef} id="main-audio" src="/main.mp3" />

        {children}

      </body>
    </html>
  )
}