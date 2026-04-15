"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function ContactFooter() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`bg-white px-6 py-20 md:py-28 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top: "Let's Get Hyped!" */}
        <div className="text-center mb-6">
          <p className="text-2xl md:text-3xl font-bold text-black/60 tracking-wide">
            Let's Get Hyped!
          </p>
        </div>

        {/* Main heading: "Get Results" */}
        <div className="text-center mb-20">
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-black text-black tracking-tighter leading-[1.1]">
            Get Results
          </h2>
        </div>

        {/* Two‑column layout: Contact details + Address */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-20">
          {/* Left: Contact */}
          <div>
            <h3 className="text-3xl md:text-4xl font-black text-black mb-6">
              Contact
            </h3>
            <div className="space-y-3 text-black/70 text-base md:text-lg font-medium">
              <p>
                <span className="font-semibold text-black">Email:</span>{" "}
                <a
                  href="mailto:info@gethyped.nl"
                  className="hover:text-black transition-colors"
                >
                  info@gethyped.nl
                </a>
              </p>
              <p>
                <span className="font-semibold text-black">Phone:</span>{" "}
                <a
                  href="tel:+31615337496"
                  className="hover:text-black transition-colors"
                >
                  +31 6 1533 7496
                </a>
              </p>
            </div>
          </div>

          {/* Right: Address */}
          <div>
            <h3 className="text-3xl md:text-4xl font-black text-black mb-6">
              Adres
            </h3>
            <div className="space-y-1 text-black/70 text-base md:text-lg font-medium leading-relaxed">
              <p>Belrumestraat 6,</p>
              <p>7000 Ede, The Netherlands</p>
            </div>
          </div>
        </div>

        {/* Footer copyright */}
        <div className="pt-12 border-t border-black/10 text-center">
          <p className="text-black/50 text-sm md:text-base font-medium">
            © 2025 Get Hyped
          </p>
        </div>
      </div>
    </section>
  );
}