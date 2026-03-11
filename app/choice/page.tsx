"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function Choose() {
  const router = useRouter()

  return (
    <div className="relative h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-white flex flex-col items-center justify-center overflow-hidden">

      {/* Glow Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-500 rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-500 rounded-full blur-[120px] opacity-20"></div>

      <div className="relative z-10 flex flex-col items-center space-y-8">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold"
        >
          Choose Your Destiny
        </motion.h1>

        <div className="flex flex-col space-y-6 w-80">
<button
  onClick={() => {
    const audio = new Audio("/main.mp3")
    audio.volume = 0.6
    audio.play()

    setTimeout(() => {
      router.push("/main")
    }, 1000)
  }}
  className="bg-white text-black py-3 rounded-2xl font-semibold hover:scale-105 transition"
>
  YOU ARE A TRUE ADAM
</button>

          <button
            onClick={() => router.push("/fake")}

            className="bg-white/10 backdrop-blur-md border border-white/20 py-3 rounded-2xl hover:scale-105 transition"
          >
            YOU ARE NOT A TRUE ADAM
          </button>

        </div>

      </div>
    </div>
  )
}