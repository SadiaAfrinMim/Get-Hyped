"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.from(".reveal-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    })
    .from(".card-item", {
      scale: 0.8,
      y: 100,
      opacity: 0,
      rotation: (i) => [-5, 8, -3, 6][i],
      duration: 1.2,
      stagger: 0.15,
    }, "-=0.6")
    .from(".footer-text", {
      opacity: 0,
      y: 30,
      duration: 1,
    }, "-=0.8");

    // GSAP Hover Logic
    const cards = gsap.utils.toArray<HTMLElement>(".card-item");
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.1,
          y: -30,
          rotation: 0,
          zIndex: 100, // হোভার করা কার্ডটি সবার উপরে থাকবে
          duration: 0.5,
          ease: "back.out(1.7)",
          overwrite: "auto"
        });
      });

      card.addEventListener("mouseleave", () => {
        const restRotation = card.getAttribute('data-rotation');
        gsap.to(card, {
          scale: 1,
          y: 0,
          rotation: restRotation,
          zIndex: 1,
          duration: 0.5,
          ease: "power2.out",
          overwrite: "auto"
        });
      });
    });

  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="min-h-screen bg-[#FDF8F1] px-6 py-16 md:py-24 flex flex-col items-center overflow-hidden"
    >
      {/* Top Header */}
      <div className="max-w-6xl w-full mb-16">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-black leading-[1.1]">
          <span className="block reveal-text">Get Hyped. Get</span>
          <span className="block reveal-text">Noticed. Get Results.</span>
        </h1>
        <p className="mt-8 text-lg md:text-xl font-medium text-gray-800 reveal-text">
          Klaar met gokken op content <br className="hidden md:block" /> die niets oplevert?
        </p>
      </div>

      {/* Cards Layout - Spread on Hover */}
      {/* group/container যোগ করা হয়েছে যাতে হোভার করলে গ্যাপ বেড়ে যায় */}
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-0 transition-all duration-700 ease-in-out hover:md:gap-12 max-w-7xl w-full mb-32 pt-10">
        
        {/* Card 1 */}
        <div 
          className="card-item stat-card w-[280px] h-[380px] bg-[#007AFF] rounded-[30px] p-8 flex flex-col justify-between text-white shadow-2xl cursor-pointer -rotate-[5deg] md:-mr-8 transition-transform"
          data-rotation="-5"
        >
          <h2 className="text-6xl font-black italic tracking-tighter">10M+</h2>
          <div>
            <div className="h-[1px] bg-white/30 w-full mb-4" />
            <p className="font-bold text-xl">Organische views</p>
            <p className="text-sm opacity-80">Groei door slimme content</p>
          </div>
        </div>

        {/* Card 2 */}
        <div 
          className="card-item relative w-[280px] h-[380px] rounded-[30px] overflow-hidden shadow-2xl cursor-pointer rotate-[6deg] mt-10 md:mt-20 md:-mr-8"
          data-rotation="6"
        >
          <Image 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800" 
            alt="Team" 
            fill
            className="object-cover"
          />
        </div>

        {/* Card 3 */}
        <div 
          className="card-item stat-card w-[280px] h-[380px] bg-[#34D399] rounded-[30px] p-8 flex flex-col justify-between text-black shadow-2xl cursor-pointer -rotate-[3deg] -mt-5 md:-mr-8"
          data-rotation="-3"
        >
          <h2 className="text-6xl font-black italic tracking-tighter">30+</h2>
          <div>
            <div className="h-[1px] bg-black/10 w-full mb-4" />
            <p className="font-bold text-xl">Merken geholpen</p>
            <p className="text-sm opacity-70">Van start-up tot multinational</p>
          </div>
        </div>

        {/* Card 4 */}
        <div 
          className="card-item relative w-[280px] h-[380px] rounded-[30px] overflow-hidden shadow-2xl cursor-pointer rotate-[8deg] mt-5 md:mt-12"
          data-rotation="8"
        >
          <Image 
            src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800" 
            alt="Production" 
            fill
            className="object-cover"
          />
          <div className="absolute bottom-6 left-6 bg-red-600 text-white font-black italic px-3 py-1 text-lg uppercase tracking-tighter transform -skew-x-12">
            Elke M2 Gewoon
          </div>
        </div>
      </div>

      {/* Footer Headline */}
      <div className="max-w-5xl text-center footer-text px-4">
        <h2 className="text-3xl md:text-5xl font-bold leading-[1.3] text-black">
          Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in beweging brengt. <span className="text-gray-400">Snel, krachtig en energiek.</span>
        </h2>
      </div>
    </section>
  );
};

export default Hero;