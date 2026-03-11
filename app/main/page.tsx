"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"

export default function Main() {

  useEffect(() => {
    const audio = new Audio("/main.mp3")
    audio.volume = 0.6
    audio.play()
  }, [])

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center">

      {/* Background Glow Layers */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600 opacity-20 rounded-full blur-[150px] animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-500 opacity-20 rounded-full blur-[150px] animate-pulse"></div>

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-4xl px-6 text-center">

        {/* Small Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-400"
        >
          March 16 • Legendary Since Birth
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-bold tracking-tight"
        >
          <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
            HAPPY BIRTHDAY
          </span>
          <br />
          <span className="text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            AMANN 🐐
          </span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ delay: 1, duration: 0.8 }}
          className="h-[2px] bg-gradient-to-r from-transparent via-white to-transparent mx-auto my-10 opacity-40"
        ></motion.div>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="text-lg md:text-xl leading-relaxed text-zinc-300"
        >
          To be honest, you’ve been more than a friend to me.
          You’re a brother.
          I’m genuinely grateful to have you in my life.
          <br /><br />
          Have the most insane birthday ever.
          Gold pohonch jana bas.
        </motion.p>

      </div>

    </div>
  )
}