"use client"

import { useRouter } from "next/navigation"

export default function Fake() {
  const router = useRouter()

  return (
    <div className="relative h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-white flex flex-col items-center justify-center overflow-hidden text-center p-6">

      {/* Glow Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-500 rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-500 rounded-full blur-[120px] opacity-20"></div>

      <div className="relative z-10 space-y-6">

        <h1 className="text-3xl font-bold">
          Bro stop trolling 😭
        </h1>

        <p className="text-lg">
          You KNOW you're a TRUE ADAM.
        </p>

        <button
          onClick={() => router.push("/main")}
          className="px-6 py-3 bg-white text-black rounded-2xl hover:scale-110 transition"
        >
          ISPE CLICK KAR LAWDE- ahem i mean click on thisss my girl :3
        </button>

      </div>
    </div>
  )
}