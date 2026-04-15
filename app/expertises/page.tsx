'use client'

import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const expertiseItems = [
  {
    number: '01',
    title: 'Social strategy',
    subtitle: 'Slimme strategie. Sterke start.',
    description: 'We duiken diep in jouw merk, doelgroep এবং doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken.',
    bgColor: 'bg-blue-600',
    buttonColor: 'bg-white text-blue-600 hover:bg-gray-100',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
  },
  {
    number: '02',
    title: 'Content creation',
    subtitle: 'Content die opvalt en raakt.',
    description: 'We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek.',
    bgColor: 'bg-pink-600',
    buttonColor: 'bg-white text-pink-600 hover:bg-gray-100',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800',
  },
  {
    number: '03',
    title: 'Activation',
    subtitle: 'Zichtbaar waar en wanneer het telt.',
    description: 'De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is.',
    bgColor: 'bg-emerald-500',
    buttonColor: 'bg-white text-emerald-600 hover:bg-gray-100',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
  },
  {
    number: '04',
    title: 'Data',
    subtitle: 'Inzichten die impact maken.',
    description: 'We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.',
    bgColor: 'bg-blue-800',
    buttonColor: 'bg-white text-blue-800 hover:bg-gray-100',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
  },
]

export default function Expertises() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const cards = gsap.utils.toArray('.expertise-card')

    cards.forEach((card: any, i: number) => {
      gsap.fromTo(card, 
        { 
          y: 100, 
          opacity: 0,
          scale: 0.9 
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%', // কার্ডটি স্ক্রিনের ৮৫% এ আসলে শুরু হবে
            end: 'top 50%',
            scrub: true, // স্ক্রলের সাথে তাল মিলিয়ে এনিমেশন হবে
          }
        }
      )
    })
  }, { scope: container })

  return (
    <section ref={container} className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-10">
          {expertiseItems.map((item, index) => (
            <div
              key={index}
              className={`expertise-card sticky top-24 min-h-[70vh] w-full rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center p-8 md:p-16 ${item.bgColor} text-white`}
              style={{ top: `${100 + index * 40}px` }} // স্ট্যাকিং ইফেক্টের জন্য
            >
              {/* Background Number */}
              <div className="absolute right-10 top-0 text-[150px] md:text-[250px] font-black opacity-10 pointer-events-none select-none leading-none">
                {item.number}
              </div>

              {/* Left Content */}
              <div className="flex-1 z-10 space-y-6">
                <div className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-sm font-bold w-fit">
                  Expertise
                </div>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
                  {item.title}
                </h2>
                <div className="space-y-4 max-w-lg">
                  <p className="text-xl md:text-2xl font-bold opacity-90 leading-tight">
                    {item.subtitle}
                  </p>
                  <p className="text-lg opacity-80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <button className={`mt-8 px-8 py-4 rounded-full font-black flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 ${item.buttonColor}`}>
                  Meer over {item.title.toLowerCase()}
                  <span className="text-xl">→</span>
                </button>
              </div>

              {/* Right Image */}
              <div className="flex-1 w-full lg:w-1/2 mt-12 lg:mt-0 lg:pl-12 z-10">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-4 border-white/10 shadow-inner">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}