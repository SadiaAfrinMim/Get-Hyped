'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPreview() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`py-32 px-6 bg-white transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative h-[500px] w-full rounded-3xl overflow-hidden border-8 border-gray-800 shadow-2xl">
            <video
              src="/19459-303877310.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-black leading-tight">
              We stoppen niet bij mooie plaatjes en vette beelden.
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              We maken het meetbaar. Zo weet je precies wat werkt en wat niet.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Nooit meer content zonder strategie. Nooit meer content zonder resultaat.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all hover:scale-105 w-fit"
            >
              Leer ons kennen
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
