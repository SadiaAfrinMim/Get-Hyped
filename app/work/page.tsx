'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const workCases = [
  {
    slug: 'bullit',
    title: 'Van nul naar vol, binnen 3 weken',
    description: 'Voor Bullit vertaalden we cultuur en energie naar social-first shorts met resultaat.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop',
    color: 'bg-orange-500',
  },
  {
    slug: 'roasta',
    title: 'Zacht in smaak, sterk inbeeld',
    description: 'Met to-the-point visuals brengen we de pure smaak van Jamaica over.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    color: 'bg-blue-500',
  },
  {
    slug: 'loco-loco',
    title: 'Content die écht smaakt (en raakt)',
    description: 'Voor Loco vertaalden we sfeer naar shorts die werken.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
    color: 'bg-green-500',
  },
]

export default function Work() {
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
      className={`py-32 px-6 bg-gradient-to-b from-gray-50 to-white transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-black leading-tight">
            Ons Werk
          </h1>
          <p className="text-base md:text-lg text-black/80 max-w-2xl leading-relaxed">
            Wij vertellen jouw verhaal. Op een manier die echt past bij jouw doelgroep.
            Met creatieve content die werkt en het verschil maakt.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workCases.map((work, index) => (
            <Link
              key={work.slug}
              href={`/work/${work.slug}`}
              className="group"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative h-96 rounded-3xl overflow-hidden border-8 border-gray-800 bg-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up">
                {/* Image */}
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90" />

                {/* Content at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-3">
                    {work.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 mb-4">
                    {work.description}
                  </p>
                  <span className={`inline-block ${work.color} text-white px-4 py-2 rounded-full text-sm font-bold`}>
                    Bekijk Case
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
