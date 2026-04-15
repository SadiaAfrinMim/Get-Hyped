'use client'

import { useEffect, useRef, useState } from 'react'
import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import AboutPreview from '@/components/about-preview'
import Expertise from '@/components/expertise'
import ContentSlider from '@/components/content-slider'
import BrandsSlider from '@/components/brands-slider'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation isScrolled={isScrolled} />
      <Hero />
      <AboutPreview />
      <Expertise />
      <ContentSlider />
      <BrandsSlider />
      <CTA />
      <Footer />
    </main>
  )
}
