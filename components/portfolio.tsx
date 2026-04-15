'use client'

import { useEffect, useRef } from 'react'

const portfolioItems = [
  {
    title: 'From Zero to Full in 3 Weeks',
    category: 'Campaign',
    tags: ['Strategy', 'Content', 'Activation'],
    color: 'from-blue-500 to-purple-500',
  },
  {
    title: 'Subtle in Taste, Strong in Image',
    category: 'Branding',
    tags: ['Visual', 'Brand', 'Identity'],
    color: 'from-pink-500 to-orange-500',
  },
  {
    title: 'Content That Really Tastes (and Hits)',
    category: 'Social Media',
    tags: ['Content', 'Engagement', 'Growth'],
    color: 'from-green-500 to-teal-500',
  },
  {
    title: 'The Viral Movement Campaign',
    category: 'Marketing',
    tags: ['Viral', 'Campaign', 'Reach'],
    color: 'from-yellow-500 to-red-500',
  },
  {
    title: 'Brand Story That Resonates',
    category: 'Content',
    tags: ['Storytelling', 'Emotional', 'Impact'],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'Engagement Growth Sprint',
    category: 'Social Strategy',
    tags: ['Growth', 'Metrics', 'Optimization'],
    color: 'from-orange-500 to-pink-500',
  },
]

export default function Portfolio() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-slide-up')
            }, index * 100)
          }
        })
      },
      { threshold: 0.1 }
    )

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="portfolio" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Portfolio</h2>
        <p className="text-center text-muted-foreground text-lg mb-20 max-w-2xl mx-auto">
          Content that scores. We tell your story in a way that really fits your audience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              className={`group relative h-64 rounded-xl overflow-hidden opacity-0 cursor-pointer transform transition-all duration-500 hover:scale-105`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-80`}></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <span className="inline-block text-xs font-bold text-white/80 mb-2 bg-white/10 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex gap-2 flex-wrap">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs text-white/70 bg-white/10 px-2 py-1 rounded backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all hover:scale-105">
            View All Work
          </button>
        </div>
      </div>
    </section>
  )
}
