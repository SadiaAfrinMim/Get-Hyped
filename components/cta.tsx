'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

export default function CTA() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            entry.target.classList.add('animate-slide-up')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (titleRef.current) observer.observe(titleRef.current)
    if (formRef.current) observer.observe(formRef.current)

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Bedankt voor je bericht! We nemen snel contact op.')
  }

  return (
    <section id="contact" className="py-32 px-6 bg-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-black mb-8 text-center text-black opacity-0"
          style={{
            background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Let's Get Hyped!
        </h2>

        <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Ready to create content that stands out? Get in touch and let's transform your brand.
        </p>

        <div
          ref={formRef}
          className="bg-white border-2 border-gray-200 rounded-2xl p-8 md:p-12 opacity-0 shadow-xl"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Voor- en achternaam"
                required
                className="w-full bg-gray-50 border-2 border-gray-200 rounded-lg px-4 py-4 text-black placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
              />
              <input
                type="email"
                placeholder="E-mailadres"
                required
                className="w-full bg-gray-50 border-2 border-gray-200 rounded-lg px-4 py-4 text-black placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
              />
            </div>

            <input
              type="tel"
              placeholder="Telefoonnummer (optioneel)"
              className="w-full bg-gray-50 border-2 border-gray-200 rounded-lg px-4 py-4 text-black placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
            />

            <textarea
              placeholder="Vertel ons over je project..."
              rows={6}
              required
              className="w-full bg-gray-50 border-2 border-gray-200 rounded-lg px-4 py-4 text-black placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all resize-none"
            ></textarea>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="privacy"
                required
                className="mt-1 w-5 h-5 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
              />
              <label htmlFor="privacy" className="text-sm text-gray-600">
                Ik accepteer de <a href="#" className="text-orange-500 hover:underline">Privacyvoorwaarden</a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-lg"
            >
              Verstuur bericht
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h4 className="text-2xl font-bold mb-4 text-black">Phone</h4>
            <a href="tel:+31615337496" className="text-2xl text-orange-500 hover:text-orange-600 transition-colors font-bold">
              +31 6 1533 7496
            </a>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h4 className="text-2xl font-bold mb-4 text-black">Location</h4>
            <p className="text-gray-600">
              Beltrumsestraat 6,<br />
              7141 AL Groenlo
            </p>
          </div>
        </div>

        {/* Mail option */}
        <div className="mt-16 text-center">
          <Link
            href="mailto:info@gethyped.nl"
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Mail ons direct
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
