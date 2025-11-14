'use client'

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

const blobs = [
  { size: 200, color: "bg-teal-600", x: 0, y: 0, opacity: 0.15 },
  { size: 300, color: "bg-blue-900", x: 0, y: 0, opacity: 0.1 },
  { size: 150, color: "bg-slate-800", x: 0, y: 0, opacity: 0.08 },
]

const InteractiveBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const calcOffset = (blobIndex: number) => {
    if (typeof window === 'undefined') return { x: 0, y: 0 }
    const factor = (blobIndex + 1) * 0.02
    return {
      x: (mousePos.x - window.innerWidth / 2) * factor,
      y: (mousePos.y - window.innerHeight / 2) * factor,
    }
  }

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {blobs.map((blob, index) => {
        const offset = calcOffset(index)
        return (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1, x: offset.x, y: offset.y }}
            transition={{ type: "spring", stiffness: 30, damping: 20 }}
            className={`absolute rounded-full ${blob.color}`}
            style={{
              width: blob.size,
              height: blob.size,
              left: `calc(50% - ${blob.size / 2}px)`,
              top: `calc(50% - ${blob.size / 2}px)`,
              opacity: blob.opacity,
              filter: "blur(120px)",
            }}
          />
        )
      })}
    </div>
  )
}

export default InteractiveBackground

