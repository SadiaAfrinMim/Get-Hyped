'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function LocoCase() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
        {/* Back link */}
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-12"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Terug naar werk
          </Link>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h1
              ref={titleRef}
              className="text-5xl md:text-6xl font-black mb-6 text-black leading-tight opacity-0"
            >
              Content die écht smaakt (en raakt)
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Voor Loco vertaalden we sfeer naar shorts die werken. Een verrukkende
              contentcampagne die de smaak van Mexico naar Nederland bracht.
            </p>
            <div className="flex gap-4">
              <span className="bg-green-500 text-white px-6 py-3 rounded-full font-bold">
                Food & Beverage
              </span>
              <span className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold">
                Social Media
              </span>
            </div>
          </div>
          <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden border-8 border-green-500">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
              alt="Loco Campaign"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Challenge */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-black">De uitdaging</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            Loco wilde de feestelijke, kleurrijke sfeer van hun taco's en burrito's vertalen
            naar content die zowel visueel aantrekkelijk was als waarde toevoegde aan hun
            sociale media kanalen.
          </p>
        </div>

        {/* Solution */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-black">Onze aanpak</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-black text-green-500 mb-4">01</div>
              <h3 className="text-xl font-bold mb-3">Concept</h3>
              <p className="text-gray-600">
                We creëerden een levendig, kleurrijk concept dat de Mexicaanse sfeer nauwkeurig weergaf.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-black text-orange-500 mb-4">02</div>
              <h3 className="text-xl font-bold mb-3">Productie</h3>
              <p className="text-gray-600">
                Professionele foodfotografie en videocontent die de smaak direct proefbaar maakte.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-black text-blue-500 mb-4">03</div>
              <h3 className="text-xl font-bold mb-3">Verdeling</h3>
              <p className="text-gray-600">
                Strategische posting op Instagram en TikTok om maxi reach en engagement te genereren.
              </p>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-gradient-to-r from-green-500 to-orange-500 rounded-3xl p-12 mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-white text-center">
            Resultaten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-black mb-2">3M+</div>
              <p className="text-lg">Views</p>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">150K</div>
              <p className="text-lg">Volgers</p>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">4.2%</div>
              <p className="text-lg">Engagement</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-black text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all hover:scale-105"
          >
            Begin je project
          </Link>
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
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
