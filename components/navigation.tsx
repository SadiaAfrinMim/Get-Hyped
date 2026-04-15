'use client'

import { Flame, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full px-6 py-4 bg-white flex items-center justify-between border-b relative">

      {/* Logo */}
      <div className="text-2xl font-black tracking-tight text-gray-900">
        GETHYPED
      </div>

      {/* Middle Menu - Desktop */}
      <nav className="hidden md:flex items-center bg-gray-50 rounded-lg px-5 py-2 shadow-sm border">
        <ul className="flex gap-6 text-sm font-medium text-gray-700">
          <li><Link href="#">Expertises</Link></li>
          <li><Link href="#">Work</Link></li>
          <li><Link href="#">About</Link></li>
          <li><Link href="#">Contact</Link></li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex items-center justify-center w-10 h-10 bg-gray-50 rounded-lg border"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* CTA Button - Hidden on mobile, visible on md+ */}
      <button className="hidden md:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition px-4 py-2 rounded-lg font-medium text-white shadow-sm">
        Get Results
        <span className="bg-white/20 p-1 rounded-md">
          <Flame size={16} className="text-white" />
        </span>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b shadow-lg md:hidden">
          <nav className="px-6 py-4">
            <ul className="flex flex-col gap-4 text-sm font-medium text-gray-700">
              <li><Link href="#" onClick={() => setMenuOpen(false)}>Expertises</Link></li>
              <li><Link href="#" onClick={() => setMenuOpen(false)}>Work</Link></li>
              <li><Link href="#" onClick={() => setMenuOpen(false)}>About</Link></li>
              <li><Link href="#" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            </ul>
            <button
              className="mt-4 w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 transition px-4 py-2 rounded-lg font-medium text-white shadow-sm"
              onClick={() => setMenuOpen(false)}
            >
              Get Results
              <span className="bg-white/20 p-1 rounded-md">
                <Flame size={16} className="text-white" />
              </span>
            </button>
          </nav>
        </div>
      )}

    </header>
  )
}