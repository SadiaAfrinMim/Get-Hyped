'use client'

import { useState } from 'react'
import Link from 'next/link'

interface NavigationProps {
  isScrolled: boolean
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent">
          Get Hyped
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/expertises" className="text-foreground hover:text-accent transition-colors">
            Expertise
          </Link>
          <Link href="/work" className="text-foreground hover:text-accent transition-colors">
            Work
          </Link>
          <Link href="/about" className="text-foreground hover:text-accent transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-foreground hover:text-accent transition-colors">
            Contact
          </Link>
          <Link href="/contact" className="bg-accent text-accent-foreground px-6 py-2 rounded-full hover:opacity-90 transition-opacity font-semibold">
            Get Results
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 focus:outline-none"
        >
          <span className="w-6 h-0.5 bg-foreground transition-transform"></span>
          <span className="w-6 h-0.5 bg-foreground transition-transform"></span>
          <span className="w-6 h-0.5 bg-foreground transition-transform"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border p-6 space-y-4">
          <Link href="/expertises" className="block text-foreground hover:text-accent transition-colors">
            Expertise
          </Link>
          <Link href="/work" className="block text-foreground hover:text-accent transition-colors">
            Work
          </Link>
          <Link href="/about" className="block text-foreground hover:text-accent transition-colors">
            About
          </Link>
          <Link href="/contact" className="block text-foreground hover:text-accent transition-colors">
            Contact
          </Link>
          <Link href="/contact" className="w-full bg-accent text-accent-foreground px-6 py-2 rounded-full hover:opacity-90 transition-opacity font-semibold block text-center">
            Get Results
          </Link>
        </div>
      )}
    </nav>
  )
}
