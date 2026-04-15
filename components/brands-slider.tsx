'use client'

import { useEffect, useRef, useState } from 'react'

const brands = [
  { name: 'Bullit', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Bullit_logo.svg/1200px-Bullit_logo.svg.png' },
  { name: 'Morssinkhof', logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68c194e6d1b186563459b107_morssinkhof.svg' },
  { name: 'Salontopper', logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d88f755388cc2c74ecff_salontopper.svg' },
  { name: 'Seeing Flex', logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d880bed5996600cbc586_seesing-flex.svg' },
  { name: 'Graafschap College', logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d86cd6ba384af3c14e58_graafschap-college.svg' },
  { name: 'Fides', logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d85341bf0d7476e56a8c_fides.svg' },
  { name: 'SRHK', logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d838fc5735f090bd9843_SRHK.svg' },
  { name: 'KNLTB', logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d81e72e08110e3fd1a17_knltb.svg' },
  { name: 'THO', logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/684b062ebc242028ca4b3ea1_tho.svg' },
  { name: 'De Talententuin', logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/684c05642bf8f5cea7384403_de-talententuin.svg' },
  { name: 'ZCLV', logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68c1952f22281ee50d3620b5_zclv.svg' },
]

export default function BrandsSlider() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`py-24 overflow-hidden bg-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter">
          These brands<br /> got hyped.
        </h2>
      </div>

       {/* Infinite Scroll Wrapper */}
       <div className="relative flex overflow-hidden group">
         {/* লুপ কন্টিনিউ রাখার জন্য অ্যারেটি দুইবার ম্যাপ করা হয়েছে */}
         <div className={`flex gap-6 ${isVisible ? 'animate-marquee' : ''}`}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}>
           {[...brands, ...brands].map((brand, index) => (
             <div
               key={index}
               className="flex-shrink-0 w-72 h-64 border-2 border-gray-100 rounded-[32px] flex items-center justify-center bg-gray-50/50 hover:border-black hover:bg-white transition-all duration-500 cursor-pointer group/card"
             >
               <div className="p-10 w-full h-full flex items-center justify-center">
                 <img
                   src={brand.logo}
                   alt={brand.name}
                   className="max-w-full max-h-full object-contain grayscale group-hover/card:grayscale-0 group-hover/card:scale-110 transition-all duration-500"
                 />
               </div>
             </div>
           ))}
         </div>
       </div>

      <style jsx>{`
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }

        .pause-animation {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}