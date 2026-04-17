'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const contentCards = [
  {
    slug: 'bullit',
    title: 'Van nul naar vol, binnen 3 weken',
    description: 'Voor Bullit vertaalden we cultuur en energie naar social-first shorts met resultaat.',
    label: 'Bullit',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop',
    hexColor: '#F15A29',
  },
  {
    slug: 'roasta',
    title: 'Zacht in smaak, sterk in beeld',
    description: 'Met to-the-point visuals brengen we de pure smaak van Jamaica over.',
    label: 'Roasta',
    video: '/Bullit _ Loop.mp4',
    hexColor: '#1A73E8',
  },
  {
    slug: 'loco-loco',
    title: 'Content die écht smaakt (en raakt)',
    description: 'Voor Loco vertaalden we sfeer naar shorts die werken.',
    label: 'Loco',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop',
    hexColor: '#1DB954',
  },
]

export default function ContentSlider() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true)
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.card-item')
    cards.forEach((card) => {
      const media = card.querySelector('img, video')
      const contentBox = card.querySelector('.content-box')

      card.addEventListener('mouseenter', () => {
        gsap.to(media, { scale: 1.05, duration: 0.5, ease: 'power2.out' })
        gsap.to(contentBox, { y: -10, duration: 0.5, ease: 'power2.out' })
      })

      card.addEventListener('mouseleave', () => {
        gsap.to(media, { scale: 1, duration: 0.5, ease: 'power2.out' })
        gsap.to(contentBox, { y: 0, duration: 0.5, ease: 'power2.out' })
      })
    })
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      className={`py-24 px-6 md:px-12 bg-[#FDF8F1] transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-black leading-[1.1] tracking-tighter">
            Content<br />dat scoort.
          </h2>
          <p className="max-w-md text-lg mb-8 opacity-80 font-medium leading-snug">
            Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep.
          </p>
          <button className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-base font-bold hover:scale-105 transition-transform active:scale-95">
            <span>Bekijk al ons werk</span>
            <span className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center text-xs">→</span>
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {contentCards.map((card, index) => (
            <Link
              key={card.slug}
              href={`/work/${card.slug}`}
              className={`card-item group relative block animate-fade-in-up ${
                index === 0 ? 'lg:mt-12' : index === 2 ? 'lg:-mt-12' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card Container */}
              <div 
                className="relative h-[550px] rounded-[45px] overflow-hidden border-[6px] transition-all duration-500 hover:shadow-2xl"
                style={{ borderColor: card.hexColor }}
              >
                {/* Media */}
                {card.video ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={card.video} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    fill
                    src={card.image}
                    alt={card.title}
                    className="object-cover"
                  />
                )}

                {/* Content Box */}
                <div
                  className="content-box absolute  bottom-4 left-4 right-4 p-8 rounded-2xl overflow-hidden flex flex-col justify-between min-h-[200px]"
                  style={{
                    backgroundColor: card.hexColor,
                    clipPath: "polygon(0 18%, 100% 0, 100% 100%, 0 100%)",
                    WebkitClipPath: "polygon(0 18%, 100% 0, 100% 100%, 0 100%)",
                    borderRadius: "24px"
                  }}
                >
                  {/* Arrow */}
                  <div className="absolute top-4 right-4 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transform transition-transform group-hover:rotate-45">
                    <svg 
                      className="w-6 h-6" 
                      style={{ color: card.hexColor }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl pt-6 font-black text-white leading-tight mb-4 pr-10">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-white/90 line-clamp-3 font-medium leading-relaxed mb-4">
                    {card.description}
                  </p>

                  {/* Label */}
                  <div className="inline-block self-start bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-xl text-white font-bold text-sm tracking-wide">
                    {card.label}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>
    </section>
  )
}