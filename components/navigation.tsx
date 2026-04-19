'use client'

import { Flame, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState, useRef } from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const mobileMenuRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      '.navbar',
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
    )
  }, [])

  useGSAP(() => {
    if (menuOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power3.out' }
      )
    }
  }, [menuOpen])

  return (
    <>
      {/* HEADER */}
      <header className="w-full px-4 sm:px-6 py-4 bg-[#FDF8F1] flex items-center justify-between z-50 navbar top-0 relative">

        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={35}
            className="sm:w-[120px] sm:h-[40px]"
            priority
          />
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center bg-[#FDF8F1] rounded-lg px-5 py-2 shadow-sm border">
          <ul className="flex gap-6 text-sm font-medium text-black">
            <li><Link href="/expertises">Expertises</Link></li>
            <li><Link href="/work">Work</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* CTA */}
        <button className="hidden md:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition px-4 py-2 rounded-lg font-medium text-white shadow-sm">
          Get Results
          <span className="bg-white/20 p-1 rounded-md">
            <Flame size={16} />
          </span>
        </button>

        {/* Mobile button */}
        <button
          className="md:hidden  flex items-center justify-center w-10 h-10 bg-[#FDF8F1] rounded-lg border"
          onClick={() => setMenuOpen(true)}
        >
          <Menu className='text-black' size={22} />
        </button>
      </header>

      {/* FULL SCREEN MOBILE MENU */}
      {menuOpen && (
        <div className="fixed m-2 rounded-2xl inset-0 bg-pink-200 z-50 flex flex-col">

          <div
            ref={mobileMenuRef}
            className="flex flex-col h-full w-full p-6"
          >

            {/* Top bar */}
            <div className="flex justify-between items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={90}
                height={30}
              />

              <button onClick={() => setMenuOpen(false)}>
                <X size={28} />
              </button>
            </div>

            {/* MENU CENTER */}
            <div className="flex flex-col items-center justify-center flex-1 text-center gap-2">

              <Link onClick={() => setMenuOpen(false)} href="/expertises" className="text-2xl bg-white px-4 py-2 rounded-2xl text-black font-semibold hover:text-orange-500">
                Expertises
              </Link>

              <Link onClick={() => setMenuOpen(false)} href="/work" className="text-2xl  bg-white px-4 py-2 rounded-2xl text-black font-semibold hover:text-orange-500">
                Work
              </Link>

              <Link onClick={() => setMenuOpen(false)} href="/about" className="text-2xl  bg-white px-4 py-2 rounded-2xl text-black font-semibold hover:text-orange-500">
                About
              </Link>

              <Link onClick={() => setMenuOpen(false)} href="/contact" className="text-2xl bg-white px-4 py-2 rounded-2xl text-black font-semibold hover:text-orange-500">
                Contact
              </Link>

            </div>

            {/* BOTTOM CTA */}
            <button
              onClick={() => setMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 transition px-5 py-4 rounded-xl font-medium text-white text-lg"
            >
              Get Results
              <Flame size={18} />
            </button>

          </div>
        </div>
      )}
    </>
  )
}