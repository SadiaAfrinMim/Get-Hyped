'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function About() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            entry.target.classList.add('animate-fade-in-up')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (titleRef.current) observer.observe(titleRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center">
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl font-black mb-8 leading-tight text-black opacity-0"
          >
            Over Ons
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar.
            Zo weet je precies wat werkt en wat niet.
          </p>
        </div>

        {/* Team Member */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-80 lg:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop"
                  alt="Anniek Bril - Founder"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-black mb-4 text-black">
                  Anniek Bril
                </h2>
                <p className="text-accent font-semibold mb-6">
                  Founder & Content Strategist
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                  Met een scherp oog voor trends en een passie voor authentieke verhalen,
                  breng ik merken in de schijnwerpers. Mijn aanpak? Data-gedreven creativiteit
                  die écht resultaat oplevert.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Bij Get Hyped geloven we in content die niet alleen opvalt, maar ook
                  blijft hangen. Want het gaat niet om likes — het gaat om verbinding.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mt-20 text-center">
            <h3 className="text-4xl md:text-5xl font-black mb-8 text-black">
              Nooit meer content zonder strategie.
              <br />
              Nooit meer content zonder resultaat.
            </h3>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Samen maken we content die opvalt, blijft hangen en jouw doelgroep raakt.
              Snel, krachtig en energiek.
            </p>
          </div>
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
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
