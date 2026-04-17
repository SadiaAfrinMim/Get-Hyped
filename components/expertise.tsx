"use client"

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const expertiseItems = [
  {
    number: '01',
    title: 'Social strategy',
    subtitle: 'Slimme strategie. Sterke start.',
    description: 'We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die echt impact maken.',
    bgColor: 'bg-[#C7D2FE]', // Indigo/Blue
    buttonColor: 'bg-orange-500 text-white',
    labelBg: 'bg-white/50',
    labelText: 'text-black',
    video: '/215472.mp4',
    borderColor: 'border-orange-500',
  },  
  {
    number: '02',
    title: 'Content creation',
    subtitle: 'Content die opvalt en raakt.',
    description: 'We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief en doelgericht.',
    bgColor: 'bg-[#FDA4AF]', // Pink
    buttonColor: 'bg-white text-black',
    labelBg: 'bg-white/50',
    labelText: 'text-black',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=500&fit=crop',
    borderColor: 'border-green-500',
  },
  {
    number: '03',
    title: 'Activation',
    subtitle: 'Laten zien what je waard bent.',
    description: 'We zetten jouw merk in het spotlight en creëren momentum met sterke campagnes.',
    bgColor: 'bg-[#6EE7B7]', // Emerald
    buttonColor: 'bg-white text-black',
    labelBg: 'bg-white/50',
    labelText: 'text-black',
    video: '/39183-421020269_medium.mp4',
    borderColor: 'border-orange-500',
  },
  {
    number: '04',
    title: 'Data',
    subtitle: 'Getallen die spreken.',
    description: 'We analyseren data en geven je inzichten zodat je altijd weet hoe je groeit.',
    bgColor: 'bg-[#60A5FA]', // Blue
    buttonColor: 'bg-white text-blue-600',
    labelBg: 'bg-white/50',
    labelText: 'text-black',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop',
    borderColor: 'border-white',
  },
]

export default function Expertise() {
  return (
    <section id="expertise" className="bg-[#FDF8F1] py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {expertiseItems.map((item, index) => (
          <div
            key={index}
            className="sticky w-full"
            style={{ 
              top: `${80 + (index * 20)}px`, // প্রতিটি কার্ড আগের কার্ড থেকে ২০ পিক্সেল নিচে থাকবে
              zIndex: index + 1 
            }}
          >
            <div
              className={`rounded-[40px] overflow-hidden shadow-2xl ${item.bgColor} border-2 border-black/5 min-h-[450px] flex items-center`}
            >
              <div className="relative w-full px-8 md:px-16 py-16">
                
                {/* Background Number */}
                <div className="absolute right-10 top-1/2 -translate-y-1/2 text-[120px] md:text-[200px] font-black opacity-10 pointer-events-none">
                  {item.number}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
                  {/* LEFT CONTENT */}
                  <div>
                    <div className={`${item.labelBg} ${item.labelText} px-4 py-1.5 rounded-full text-xs font-bold mb-6 w-fit uppercase tracking-wider`}>
                      Expertise
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black mb-4 text-gray-900 tracking-tighter">
                      {item.title}
                    </h2>

                    <p className="text-xl font-bold mb-4 text-gray-800">
                      {item.subtitle}
                    </p>

                    <p className="text-base opacity-75 mb-8 max-w-sm text-gray-700 leading-relaxed">
                      {item.description}
                    </p>

                    <button className={`px-8 py-4 rounded-full font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg ${item.buttonColor}`}>
                      Meer over {item.title.toLowerCase()}
                    </button>
                  </div>

                  {/* RIGHT IMAGE */}
                  <div className="flex justify-center lg:justify-end">
                    <div className={`relative w-full max-w-sm aspect-square rounded-[32px] overflow-hidden border-[10px] ${item.borderColor} shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500`}>
                      {item.video ? (
                        <video
                          className="absolute inset-0 w-full h-full object-cover"
                          src={item.video}
                          autoPlay
                          muted
                          loop
                        />
                      ) : (
                        <Image
                          fill
                          src={item.image}
                          alt={item.title}
                          className="object-cover"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}