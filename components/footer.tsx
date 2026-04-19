"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { Mail, Flame, Linkedin, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const bigTextRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const angledRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const bottomLogoRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    gsap.to(bigTextRef.current, {
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    });
    gsap.to(logoRef.current, {
      opacity: 1,
      scale: 1.1,
      duration: 0.6,
      ease: "power3.out",
    });
    gsap.to(angledRef.current, {
      backgroundColor: "#D4C7B0",
      duration: 0.6,
      ease: "power3.out",
    });
    gsap.to(badgeRef.current, {
      rotation: 0,
      scale: 1.1,
      duration: 0.6,
      ease: "power3.out",
    });
    gsap.to(bottomLogoRef.current, {
      scale: 1.1,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(bigTextRef.current, {
      y: "100%",
      duration: 0.6,
      ease: "power3.in",
    });
    gsap.to(logoRef.current, {
      opacity: 0,
      scale: 1,
      duration: 0.6,
      ease: "power3.in",
    });
    gsap.to(angledRef.current, {
      backgroundColor: "#E6E0D3",
      duration: 0.6,
      ease: "power3.in",
    });
    gsap.to(badgeRef.current, {
      rotation: 12,
      scale: 1,
      duration: 0.6,
      ease: "power3.in",
    });
    gsap.to(bottomLogoRef.current, {
      scale: 1,
      duration: 0.6,
      ease: "power3.in",
    });
  };

  return (
    <footer className="relative w-full bg-[#F2EDE4] pt-20 overflow-hidden font-sans text-black">
      {/* Top Section */}
      <div className="flex flex-col items-center text-center px-4 mb-32">
        <h2 className="text-6xl md:text-8xl font-black tracking-tight text-black mb-8 uppercase">
          Let's Get Hyped!
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {/* Mail Button - Text and Icons are Black/White */}
          <button className="group flex items-center border-2 border-black rounded-full overflow-hidden hover:bg-black hover:text-white transition-all duration-300">
            <span className="px-6 py-3 font-bold uppercase text-sm">Mail ons direct</span>
            <div className="bg-black p-3 text-white group-hover:bg-white group-hover:text-black transition-colors">
              <Mail size={20} />
            </div>
          </button>

          {/* Results Button */}
          <button className="flex items-center bg-[#FF5F38] text-white rounded-full overflow-hidden border-2 border-black hover:bg-black transition-all duration-300 group">
            <span className="px-6 py-3 font-bold uppercase text-sm">Get Results</span>
            <div className="bg-black m-1 p-2 rounded-full text-white group-hover:bg-white group-hover:text-black transition-colors">
              <Flame size={20} fill="currentColor" />
            </div>
          </button>
        </div>
      </div>

      {/* The Angled Section */}
      <div
        ref={angledRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative bg-[#E6E0D3] pt-32 pb-12 px-8 md:px-16 border-t border-black/10"
        style={{ clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0% 100%)" }}
      >
        {/* Floating Pink Badge */}
        <div ref={badgeRef} className="absolute top-10 right-10 md:right-20 w-24 h-24 bg-[#E2B1FF] rounded-full flex items-center justify-center text-center p-2 border-2 border-black rotate-12 shadow-sm z-10">
          <span className="text-[10px] font-black leading-tight uppercase text-black">Get Results • Get Hyped • Get Noticed</span>
          
        </div>

        {/* Hover Logo Overlay */}
        <div ref={logoRef} className="absolute inset-0 pointer-events-none z-5" style={{ opacity: 0, transform: 'scale(1)' }}>
          
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-end relative z-20">
          <div className="hidden md:block"></div>

          {/* Column 2: Navigation & Socials */}
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-wrap justify-center gap-2">
              {['Expertises', 'Work', 'About', 'Contact'].map((item) => (
                <button key={item} className="bg-white border-2 border-black px-5 py-2 rounded-xl text-xs font-black uppercase tracking-wider text-black hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1">
                  {item}
                </button>
              ))}
            </div>
            
            <div className="flex flex-col items-center gap-4">
              <span className="font-black text-xs uppercase tracking-[0.2em] text-black">Follow us</span>
              <div className="flex gap-3">
                {[<Linkedin size={18}/>, "TT", <Instagram size={18}/>, <Youtube size={18}/>].map((icon, i) => (
                  <div key={i} className="w-11 h-11 bg-white border-2 border-black rounded-full flex items-center justify-center text-black cursor-pointer hover:bg-black hover:text-white transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    {typeof icon === 'string' ? <span className="text-[10px] font-black">{icon}</span> : icon}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Contact Info - Colors set to Solid Black */}
          <div className="text-sm space-y-4 text-center md:text-left text-black">
            <div>
              <p className="font-black uppercase tracking-widest text-[11px] mb-1">Contact</p>
              <p className="font-bold text-lg">info@gethyped.nl</p>
              <p className="font-bold">+31 6 1533 7496</p>
            </div>
            <div>
              <p className="font-black uppercase tracking-widest text-[11px] mb-1">Adres</p>
              <p className="font-bold text-lg">Amsterdam, NL</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Increased contrast */}
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t-2 border-black flex justify-between items-center text-[10px] uppercase font-black tracking-widest text-black">
          <div ref={bottomLogoRef} className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={80} height={30} />
            <p>© 2026 Get Hyped</p>
          </div>
          <p>Design by Sadia</p>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;