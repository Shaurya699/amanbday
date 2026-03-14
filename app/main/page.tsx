"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import confetti from "canvas-confetti"
import { TypeAnimation } from "react-type-animation"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import { useRouter } from "next/navigation"

export default function Main() {

  const router = useRouter()  

  const audioRef = useRef<HTMLAudioElement | null>(null)

  const fadeAndNavigate = (path: string) => {
    const audio = audioRef.current
    if (!audio) {
      router.push(path)
      return
    }

    let volume = audio.volume

    const fade = setInterval(() => {
      if (volume > 0.05) {
        volume -= 0.05
        audio.volume = volume 
      } else {
        clearInterval(fade)
        audio.pause()
        router.push(path)
      }
    }, 80)
  }

  // Music + confetti
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.6

    if (audio.paused) {
      audio.play().catch(() => {})
    }

    confetti({
      particleCount: 180,
      spread: 100,
      origin: { y: 0.6 }
    })

    return () => {
      audio.pause()
      audio.currentTime = 0
    }

  }, [])

  const particlesInit = async (engine: any) => {
    await loadSlim(engine)
  }

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center">

      {/* Music */}
      <audio ref={audioRef} src="/main.mp3" preload="auto" />

      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 30 },
            color: { value: "#ffffff" },
            opacity: { value: 0.2 },
            size: { value: 2 },
            move: { enable: true, speed: 0.25 }
          }
        }}
        className="absolute inset-0"
      />

      {/* Glow background */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600 opacity-20 rounded-full blur-[150px] animate-pulse"></div>

      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-500 opacity-20 rounded-full blur-[150px] animate-pulse"></div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-5xl px-6 text-center">

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
          transition={{ delay: 0.8, duration: 0.8 }}
          className="h-[2px] bg-gradient-to-r from-transparent via-white to-transparent mx-auto my-10 opacity-40"
        />

        {/* Typing message */}
        <div className="text-lg md:text-xl text-zinc-300 leading-relaxed max-w-2xl mx-auto">

          <TypeAnimation
            sequence={[
              "To be honest, you've been more than a friend to me.",
              2000,
              "You're a brother.",
              2000,
              "I'm genuinely grateful to have you in my life.",
              2000,
              "Have the most insane birthday ever.",
              2000
            ]}
            speed={45}
            repeat={0}
          />

        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >

          {/* Card */}
          <motion.div
            whileHover={{ scale: 1.08, y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl cursor-pointer"
          >
            <p className="text-zinc-400 text-sm">Years of Friendship</p>
            <p className="text-xl font-semibold">1 year</p>

            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-30px] text-xs text-zinc-400 opacity-0 group-hover:opacity-100 transition">
              feels like a million years
            </span>
          </motion.div>

          {/* Card */}
          <motion.div
            whileHover={{ scale: 1.08, y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl cursor-pointer"
          >
            <p className="text-zinc-400 text-sm">Laughs Shared</p>
            <p className="text-xl font-semibold">Infinite ♾️</p>

            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-30px] text-xs text-zinc-400 opacity-0 group-hover:opacity-100 transition">
              mostly at your aim in valo
            </span>
          </motion.div>

          {/* Card */}
          <motion.div
            whileHover={{ scale: 1.08, y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl cursor-pointer"
          >
            <p className="text-zinc-400 text-sm">Kills in Valo</p>
            <p className="text-xl font-semibold">Too good to count</p>

            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-30px] text-xs text-zinc-400 opacity-0 group-hover:opacity-100 transition">
              when we aren't throwing
            </span>
          </motion.div>

          {/* Card */}
          <motion.div
            whileHover={{ scale: 1.08, y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl cursor-pointer"
          >
            <p className="text-zinc-400 text-sm">Rank</p>
            <p className="text-xl font-semibold">Hard stuck silvers 😭</p>

            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-30px] text-xs text-zinc-400 opacity-0 group-hover:opacity-100 transition">
              one day we escape silver
            </span>
          </motion.div>

        </motion.div>

       <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 6 }}
  className="mt-20"
>
  <button
    onClick={() => fadeAndNavigate  ("/experience")}
    className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white hover:scale-105 transition"
  >
    
    Let's take a stroll down memory lane →
  </button>
</motion.div>

      </div>
    </div>
  )
}