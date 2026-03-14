"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function Experience() {

  const router = useRouter()
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const [step, setStep] = useState(0)
  const [ending, setEnding] = useState(false)

  const [lights, setLights] = useState<
    { x: number; y: number; duration: number }[]
  >([])

  const memories = [
    {
      title: "13 November",
      text: "The first time we met IRL, WE WERE SO FUCKING LOST 😭😭",
      emoji: "📍"
    },
    {
      title: "The Valorant Era",
      text: "Late night queues. Clutches( hah mere clutches dekha h). Throws (ofc me doing that). Rank games every day (TILTTT QUEEE AREEE WAHHH).",
      emoji: "🎮"
    },
    {
      title: "The HWID Ban Arc",
      text: "Two NIGERS. One dream. Get skins in Valorant. Result? Banned twice 💀 (w tbh)",
      emoji: "🚫"
    },
    {
      title: "The Forza Horizon Phase",
      text: "When Valorant banned us, Forza Horizon welcomed us. FORZA 4 WAS PEAK AS FAHHHH",
      emoji: "🏎"
    },
    {
      title: "The Constant",
      text: "Games change. Teri bandi changed. BUT ME CONSTANT U NIG-",
      emoji: "🤝"
    }
  ]

  useEffect(() => {

    const audio = audioRef.current
    if (audio) {
      audio.volume = 0.6
      audio.play().catch(() => {})
    }

    setLights(
      [...Array(20)].map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: 8 + Math.random() * 6
      }))
    )

    return () => {
      if (audio) {
        audio.pause()
        audio.currentTime = 0
      }
    }

  }, [])

  const next = () => {
    if (step < memories.length - 1) {
      setStep(step + 1)
    } else {
      setEnding(true)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-20 relative overflow-hidden">

      {/* audio */}
      <audio ref={audioRef} src="/experience.mp3" preload="auto" />

      {/* spotlight background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />

      {/* subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* floating lights */}
      <div className="absolute inset-0 pointer-events-none">
        {lights.map((light, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/40 rounded-full"
            initial={{
              x: `${light.x}%`,
              y: `${light.y}%`,
              opacity: 0.2
            }}
            animate={{
              y: ["0%", "-30%"],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: light.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-4xl md:text-5xl font-bold mb-24 text-center relative z-10"
      >
        Our Journey
      </motion.h1>

      {/* timeline */}
      <div className="relative w-full max-w-5xl z-10">

        {/* glowing timeline */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: `${(step + 1) * 220}px` }}
          transition={{ duration: 0.6 }}
          className="absolute left-1/2 -translate-x-1/2 w-[3px] bg-gradient-to-b from-pink-500 via-purple-400 to-white/20 shadow-[0_0_20px_rgba(255,120,220,0.6)]"
          style={{ filter: "blur(0.2px)" }}
        />

        {/* pulse glow */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-[3px] bg-pink-400/40 pointer-events-none"
          animate={{ opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ height: `${(step + 1) * 220}px` }}
        />

        <div className="flex flex-col gap-28">

          {memories.slice(0, step + 1).map((memory, index) => {

            const isLeft = index % 2 === 0

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`relative flex w-full ${
                  isLeft ? "justify-start pr-12" : "justify-end pl-12"
                }`}
              >

                {/* glowing node */}
                <div className="absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-pink-500 shadow-[0_0_20px_rgba(255,0,120,0.9)]" />

                {/* memory card */}
                <div className="max-w-sm bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-6 transition hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:scale-[1.02]">

                  <div className="text-3xl mb-3">
                    {memory.emoji}
                  </div>

                  <h2 className="text-2xl font-semibold mb-2">
                    {memory.title}
                  </h2>

                  <p className="text-zinc-300 leading-relaxed">
                    {memory.text}
                  </p>

                </div>

              </motion.div>
            )

          })}

        </div>

      </div>

      {/* emotional ending */}
      {step === memories.length - 1 && !ending && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl font-bold mt-16 text-center max-w-xl z-10 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
        >
          Still a long journey ahead.
        </motion.p>
      )}

      {/* cinematic ending screen */}
      {ending && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="fixed inset-0 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center text-center z-20 overflow-hidden"
  >

    {/* grid background */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

    {/* crazy glow blob */}
    <div className="absolute w-[600px] h-[600px] bg-cyan-500/20 blur-[180px] rounded-full -top-40 left-1/2 -translate-x-1/2 animate-pulse"></div>

    {/* glowing title */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="text-4xl font-semibold mb-6 relative z-10 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]"
    >
      More memories loading...
    </motion.h2>

    {/* button */}
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3 }}
      onClick={() => router.push("/main")}
      className="px-8 py-4 bg-white/10 border border-white/20 rounded-xl hover:scale-105 transition relative z-10"
    >
      Return to the Birthday →
    </motion.button>

  </motion.div>
)}

      {/* next button */}
      {!ending && (
        <button
          onClick={next}
          className="mt-24 px-8 py-4 bg-white/10 border border-white/20 rounded-xl hover:scale-105 transition backdrop-blur-md z-10"
        >
          {step === memories.length - 1
            ? "Back to Birthday Page →"
            : "Next Memory ↓"}
        </button>
      )}

    </div>
  )
}