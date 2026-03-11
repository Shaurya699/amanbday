"use client"

import { useRouter } from "next/navigation"

export default function Landing() {
  const router = useRouter()

  const handleClick = () => {
    const audio = new Audio("/intro.mp3")
    audio.volume = 0.5
    audio.play()

    setTimeout(() => {
      router.push("/choice")
    }, 1000)
  }

  return (
    <div className="relative h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-white flex items-center justify-center overflow-hidden">

      {/* Glow Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-500 rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-500 rounded-full blur-[120px] opacity-20"></div>

      <div className="relative z-10">
        <button
          onClick={handleClick}
          className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-xl hover:scale-105 transition duration-300"
        >
          ENTER THE EXPERIENCE
        </button>
      </div>

    </div>
  )
}